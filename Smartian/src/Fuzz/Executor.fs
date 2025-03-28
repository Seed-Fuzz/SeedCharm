module Smartian.Executor

open System
open System.IO
open System.Collections.Generic
open Nethermind.Dirichlet.Numerics
open Nethermind.Core.Test.Builders
open Nethermind.Core.Specs
open Nethermind.Core
open Nethermind.Evm
open Nethermind.Evm.Test
open Nethermind.Evm.Tracing
open Nethermind.Logging
open Nethermind.Store
open Config
open BytesUtils
open Options

type Env = {
  State : StateProvider
  SpecProvider: MainNetSpecProvider
  VM : VirtualMachine
  TxProcessor : TransactionProcessor
}

type Feedback = {
  CovGain : bool
  DUGain : bool
  // PC, Op, Oprnd1, Oprnd2.
  CmpList : (uint64 * string * bigint * bigint) list
  // Bug class, Bug PC, Triggerring TX index.
  BugSet : Set<(BugClass * int * int)>
}

// Set of edge hashes.
let mutable accumEdges = SortedSet<int>()
// Set of program counters.
let mutable accumInstrs = SortedSet<int>()
// Set of (Def PC * Use PC * Storage Index)
let mutable accumDUChains = SortedSet<struct(int * int * UInt256)>()
// Set of (BugClass * PC)
let mutable accumBugs = Set.empty

let mutable deployFailCount = 0

let mutable receivedEther = false
let mutable useDelegateCall = false
let mutable canSendEther = false

let mutable private targCode = [||]
let mutable private targCode1 = [||]
let mutable private targCode2 = [||]
let mutable private targCode3 = [||]
let mutable private smartianAgentCode = [||]
let mutable private sFuzzAgentCode = [||]

let mutable private opt = {
    Verbosity = 1
    OutDir = "output"
    Timelimit = 60
    ProgPath = "program"
    ABIPath = "abi"
    StaticDFA = true
    DynamicDFA = true
    CheckOptionalBugs = false
    UseOthersOracle = false
    DeployContracts = ["contract1"]
    DeployAddresses = ["address1"]
    DeployAccounts = ["account1"]
}
 
let initialize targetPath DeployAccounts DeployContracts DeployAddresses =
  let targetPath1 = "./Smartian/dependency/Agent1.bin"
  let targetPath2 = "./Smartian/dependency/Agent2.bin"
  let targetPath3 = "./Smartian/dependency/Agent3.bin" 
  targCode <- File.ReadAllText(targetPath) |> hexStrToBytes 
  targCode1 <- File.ReadAllText(targetPath1) |> hexStrToBytes 
  targCode2 <- File.ReadAllText(targetPath2) |> hexStrToBytes 
  targCode3 <- File.ReadAllText(targetPath3) |> hexStrToBytes 
   
  opt <- {
    Verbosity = 1
    OutDir = "output"
    Timelimit = 60
    ProgPath = "program"
    ABIPath = "abi"
    StaticDFA = true
    DynamicDFA = true
    CheckOptionalBugs = false
    UseOthersOracle = false
    DeployContracts = List.map id DeployContracts // 深拷贝列表
    DeployAddresses = List.map id DeployAddresses // 深拷贝列表
    DeployAccounts = List.map id DeployAccounts   // 深拷贝列表
  }
  let srcDir = Directory.GetParent(__SOURCE_DIRECTORY__).FullName
  let smartianAgentPath = Path.Join(srcDir, "Agent/AttackerContract.bin")
  smartianAgentCode <- File.ReadAllText(smartianAgentPath) |> hexStrToBytes
  let sFuzzAgentPath = Path.Join(srcDir, "Agent/SFuzzContract.bin")
  sFuzzAgentCode <- File.ReadAllText(sFuzzAgentPath) |> hexStrToBytes

let private initTestingEnv () =
  let logger = LimboLogs.Instance
  let codeDb = new StateDb()
  let stateDb = new StateDb()
  let state = StateProvider(stateDb, codeDb, logger)
  let storage = StorageProvider(stateDb, state, logger)
  let spec = MainNetSpecProvider.Instance
  let blockHash = TestBlockhashProvider()
  let vm = VirtualMachine(state, storage, blockHash, spec, logger)
  let processor = TransactionProcessor(spec, state, storage, vm, logger)
  state.Commit(spec.GenesisSpec)
  { State = state
    SpecProvider = spec
    VM = vm
    TxProcessor = processor }

let private runTx env from ``to`` code reqAddr value data timestamp blocknum =
  let processor = env.TxProcessor
  let tracer = CallOutputTracer()
  let block = Build.A.Block.WithTimestamp(UInt256(timestamp: int64))
                           .WithNumber(blocknum)
                           .WithGasLimit(BLOCK_GASLIMIT)
                           .WithBeneficiary(Address.MINER)
                           .TestObject
  let tx = Nethermind.Core.Transaction(SenderAddress = from,
                                       To = ``to``,
                                       Init = code,
                                       DeployAddress = reqAddr,
                                       Value = value,
                                       Data = data,
                                       GasLimit = TX_GASLIMIT,
                                       GasPrice = UInt256 (TX_GASPRICE: int64))
  // let logMessage = sprintf "processor.Execute %A %A %A %A %A" from ``to`` value data tracer
  // File.AppendAllText("./loglog.txt", logMessage + Environment.NewLine)            
  processor.Execute(tx, block.Header, tracer)
  // let logMessage = sprintf "processor.Execute %A %A %A %A %A %A %A %A %A" tracer.StatusCode deployFailCount from ``to`` reqAddr tracer.Error value data code
  // File.AppendAllText("./loglog.txt", logMessage + Environment.NewLine)            
  tracer.StatusCode

let private deploy env deployer addr code value data timestamp blocknum =
  let code = Array.append code data
  let status = runTx env deployer null code addr value [| |] timestamp blocknum
  if status <> StatusCode.Success then deployFailCount <- deployFailCount + 1

let private setupAgent env deployer addr agentCode =
  let timestamp = DEFAULT_TIMESTAMP
  let blocknum = DEFAULT_BLOCKNUM
  deploy env deployer addr agentCode (UInt256 0L) [||] timestamp blocknum

let private setupEntity env tc entity =
  let state = env.State
  let vm = env.VM
  let specProvider = env.SpecProvider
  let targDeployer = tc.TargetDeployer
  let deployTx = tc.DeployTx
  let spec = specProvider.GetSpec(deployTx.Blocknum)
  // printfn "rntity %A %A" entity.Agent entity.Account
  match entity.Agent with
  | NoAgent ->
    state.CreateAccount(entity.Account, &entity.Balance)
    if targDeployer <> entity.Account then vm.RegisterUser(entity.Account)
  | SFuzzAgent contAddr ->
    let zero = UInt256(0I)
    state.CreateAccount(entity.Account, &zero)
    setupAgent env entity.Account contAddr sFuzzAgentCode
    state.AddToBalance(contAddr, &entity.Balance, spec)
    // sFuzz doesn't distinguish deployer and user.
  | SmartianAgent contAddr ->
    let zero = UInt256(0I)
    state.CreateAccount(entity.Account, &zero)
    setupAgent env entity.Account contAddr smartianAgentCode
    state.AddToBalance(contAddr, &entity.Balance, spec)
    // printfn "rntity111 %A %A" targDeployer contAddr
    if targDeployer <> contAddr then vm.RegisterUser(contAddr)

let private setupTarget env deployer addr tx =
  let vm = env.VM
  let value = tx.Value
  let data = tx.Data
  let timestamp = tx.Timestamp
  let blocknum = tx.Blocknum
  vm.IsDeployingTarget <- true
  let bigIntyh = bigint [|
      0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy;
      0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy;
      0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy;
      0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy;
    |]
  let initEther = UInt256(bigIntyh) 
  let state = env.State
  state.CreateAccount(Address.USER_ACCNT_4, &initEther)
  deploy env Address.USER_ACCNT_4 Address.USER_CONTR_4 targCode1 (UInt256 0L) [||] DEFAULT_TIMESTAMP DEFAULT_BLOCKNUM
  vm.RegisterUser(Address.USER_CONTR_4)
  let initEther2 = UInt256(bigIntyh) 
  state.CreateAccount(Address.USER_ACCNT_5, &initEther2)
  deploy env Address.USER_ACCNT_5 Address.USER_CONTR_5 targCode2 (UInt256 0L) [||] DEFAULT_TIMESTAMP DEFAULT_BLOCKNUM
  vm.RegisterUser(Address.USER_CONTR_5)
  let initEther3 = UInt256(bigIntyh) 
  state.CreateAccount(Address.USER_ACCNT_6, &initEther3)
  deploy env Address.USER_ACCNT_6 Address.USER_CONTR_6 targCode3 (UInt256 0L) [||] DEFAULT_TIMESTAMP DEFAULT_BLOCKNUM
  vm.RegisterUser(Address.USER_CONTR_6)
  deploy env deployer addr targCode value data timestamp blocknum
  vm.IsDeployingTarget <- false
  vm.TargetContractAddr <- addr
  vm.TargetOwnerAddr <- deployer

let private sendTx env covFlag hadDepTx isRedirect tx =
  let vm = env.VM
  vm.ResetPerTx()
  vm.HadDeployerTx <- hadDepTx
  vm.IsRedirected <- isRedirect
  runTx env tx.From tx.To null null tx.Value tx.Data tx.Timestamp tx.Blocknum
  |> ignore
  if covFlag then
    accumEdges.UnionWith(vm.VisitedEdgeSet)
    accumInstrs.UnionWith(vm.VisitedInstrs)
    accumDUChains.UnionWith(vm.DefUseChainSet)
    accumBugs <- Set.ofSeq vm.BugSet
                 |> Set.map (fun struct (bugClass, pc) -> bugClass, pc)
                 |> Set.union accumBugs

// Check ether gain of users only if there was no previous deployer TX, because
// such TX can transfer the ownership to other users. Also, we check against
// both the initial balance and (immediate) previous balance to make sure that
// an attacker is actively, not passively, gaining ether.
let private checkEtherLeak (env: Env) sender hadDepTx initBal prevBal accBugs =
  let bug = (BugClass.EtherLeak, env.VM.BugOracle.LastEtherSendPC)
  if Set.contains bug accumBugs || hadDepTx then accBugs
  elif env.State.GetBalance(sender) <= initBal then accBugs
  elif env.State.GetBalance(sender) <= prevBal then accBugs
  else accumBugs <- Set.add bug accumBugs
       Set.add bug accBugs

let private processTx env tc covFlag (accNewBugs, hadDepTx) i tx =
  // Since we removed the foremost deploying transaction, sould +1 to the index.
  let i = i + 1
  let sender = tx.From
  let isDepTx = (sender = tc.TargetDeployer)
  let hadDepTx = hadDepTx || isDepTx
  // printfn "tc.Entities %A" tc.Entities
  let initBalance, isRedirect =
    match List.tryFind (fun e -> Entity.getSender e = sender) tc.Entities with
    | Some entity -> (entity.Balance, Entity.isTXRedirected tx.To entity)
    | None -> failwithf "Invalid sender: %s" (Address.toStr sender)
    // | None -> printfn "Invalid sender: " 
  let prevBalance = env.State.GetBalance(sender)
  let prevBugs = accumBugs
  sendTx env covFlag hadDepTx isRedirect tx
  let accNewBugs = Set.difference accumBugs prevBugs
                   |> checkEtherLeak env sender hadDepTx initBalance prevBalance
                   |> Set.map (fun (bug, pc) -> (bug, pc, i))
                   |> Set.union accNewBugs
  (accNewBugs, hadDepTx)

let private filterBugs checkOptional useOthersOracle bugs =
  let shouldSkip (bug, pc, ith) =
    if not checkOptional && BugClassHelper.isOptional bug then true
    elif not useOthersOracle && BugClassHelper.isFromOtherTools bug then true
    else false
  Set.filter (not << shouldSkip) bugs

let fromStr1 (s: string) = new Address(s)

let initDeploy env opt =
    let deployAccounts = opt.DeployAccounts
    let deployAddresses = opt.DeployAddresses
    let deployContracts = opt.DeployContracts
    // 确保三个列表的长度一致
    if deployContracts.Length <> deployAddresses.Length || deployContracts.Length <> deployAccounts.Length then
        failwith "DeployContracts, DeployAddresses, and DeployAccounts must have the same length"

    // 定义初始以太坊余额
    let bigIntyh = bigint [|
        0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy;
        0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy;
        0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy;
        0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy; 0xffuy;
    |]
    let initEther = UInt256(bigIntyh)

    // 遍历每个合约、地址和账户
    for i in 0 .. deployContracts.Length - 1 do
        let contractPath = deployContracts[i]
        let address = fromStr1(deployAddresses[i])
        let account = fromStr1(deployAccounts[i])

        // 读取合约字节码
        let targCode = File.ReadAllText(contractPath) |> hexStrToBytes

        // 创建账户并初始化余额 
        env.State.CreateAccount(account, &initEther)

        // 部署合约
        deploy env account address targCode (UInt256 0L) [||] DEFAULT_TIMESTAMP DEFAULT_BLOCKNUM

        // 注册合约到虚拟机
        env.VM.RegisterUser(address)

/// Execute a seed (= transaction list) on EVM and return feedback.
let execute tc covFlag traceDU checkOptional useOthersOracle =
  let env = initTestingEnv ()
  initDeploy env opt
  List.iter (setupEntity env tc) tc.Entities
  setupTarget env tc.TargetDeployer tc.TargetContract tc.DeployTx
  env.VM.TraceDU <- traceDU
  let oldEdgeCount = accumEdges.Count
  let oldDUChainCount = accumDUChains.Count
  let bugs = List.foldi (processTx env tc covFlag) (Set.empty, false) tc.Txs
             |> fst |> filterBugs checkOptional useOthersOracle
  let covGain = accumEdges.Count > oldEdgeCount
  let duGain = accumDUChains.Count > oldDUChainCount
  let conv struct (pc, op, oprnd1, oprnd2) = (uint64 pc, op, oprnd1, oprnd2)
  let cmpList = List.map conv (List.ofSeq env.VM.CmpList)
  let contractBalance = env.State.GetBalance(Address.TARG_CONTRACT)
  receivedEther <- receivedEther || contractBalance > (UInt256 0L)
  useDelegateCall <- useDelegateCall || env.VM.BugOracle.UseDelegateCall
  canSendEther <- canSendEther || env.VM.BugOracle.SendEtherIndependently
  { CovGain = covGain
    DUGain = duGain
    CmpList = cmpList
    BugSet = bugs }

(*** Statistics ***)

let mutable totalExecutions = 0
let mutable phaseExecutions = 0

let getTotalExecutions () = totalExecutions
let getPhaseExecutions () = phaseExecutions
let resetPhaseExecutions () = phaseExecutions <- 0

(*** Resource scheduling ***)

let mutable allowedExecutions = 0
let allocateResource n = allowedExecutions <- n
let isExhausted () = allowedExecutions <= 0
let incrExecutionCount () =
  allowedExecutions <- allowedExecutions - 1
  totalExecutions <- totalExecutions + 1
  phaseExecutions <- phaseExecutions + 1

let private parseBranchInfo tryVal cmp =
  let addr, opStr, (oprnd1: bigint), (oprnd2: bigint)= cmp
  let dist = oprnd1 - oprnd2
  let brType =
    match opStr with
    | "==" -> Equality
    | "!=" -> Equality
    | ">=s" -> SignedSize
    | ">s" -> SignedSize
    | "<=s" -> SignedSize
    | "<s" -> SignedSize
    | ">=u" -> UnsignedSize
    | ">u" -> UnsignedSize
    | "<=u" -> UnsignedSize
    | "<u" -> UnsignedSize
    | _ -> failwithf "Unimplemented operation string : %s" opStr
  { InstAddr = addr
    BrType = brType
    TryVal = tryVal
    OpSize = 32
    Oprnd1 = oprnd1
    Oprnd2 = oprnd2
    Distance = dist }

let rec private parseBranchInfoAtAux tryVal targPoint accMap cmpList =
  match cmpList with
  | [] -> None
  | headCmp :: tailCmpList ->
    let addr, opStr, oprnd1, oprnd2 = headCmp
    // Caution : we count first visit as '1', instead of '0'.
    let count = if Map.containsKey addr accMap then Map.find addr accMap else 1
    if (addr, count) = (targPoint.Addr, targPoint.Idx) then
      Some (parseBranchInfo tryVal headCmp)
    else
      let newMap = Map.add addr (count + 1) accMap
      parseBranchInfoAtAux tryVal targPoint newMap tailCmpList

let private parseBranchInfoAt tryVal targPoint cmpList =
  parseBranchInfoAtAux tryVal targPoint Map.empty cmpList

let private parseBranchTrace tryVal cmpList =
  List.map (parseBranchInfo tryVal) cmpList

(*** Tracer execute functions ***)

let private runEVM opt seed covFlag =
  incrExecutionCount ()
  let tc = Seed.concretize seed
  execute tc covFlag opt.DynamicDFA opt.CheckOptionalBugs opt.UseOthersOracle

(*** Top-level executor functions ***)

let getCoverage opt seed =
  let f = runEVM opt seed true
  f.CovGain, f.DUGain, f.BugSet

let getBranchTrace opt seed tryVal =
  let f = runEVM opt seed false
  parseBranchTrace tryVal f.CmpList

let getBranchInfoAt opt seed tryVal targPoint =
  let f = runEVM opt seed false
  parseBranchInfoAt tryVal targPoint f.CmpList
