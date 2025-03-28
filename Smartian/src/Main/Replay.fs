module Smartian.Replay

open Argu
open Utils
open Executor

type ReplayerCLI =
  | [<AltCommandLine("-p")>] [<Mandatory>] [<Unique>] Program of path: string
  | [<AltCommandLine("-i")>] [<Mandatory>] [<Unique>] InputDir of path: string
  | [<AltCommandLine("-t")>] [<Unique>] Interval of time: int
  | [<Unique>] NoDDFA
  | [<Unique>] CheckOptionalBugs
  | [<Unique>] UseOthersOracle
  | [<AltCommandLine("--deploy_contract")>] DeployContract of contracts: string list
  | [<AltCommandLine("--deploy_address")>] DeployAddress of addresses: string list
  | [<AltCommandLine("--deploy_account")>] DeployAccount of accounts: string list
with
  interface IArgParserTemplate with
    member s.Usage =
      match s with
      | Program _ -> "Target program for test case replaying"
      | InputDir _ -> "Directory of testcases to replay"
      | Interval _ -> "Time interval (in minutes) for coverage report"
      | NoDDFA -> "Disable dynamic data-flow analysis during the fuzzing."
      | CheckOptionalBugs ->
        "Detect optional bugs (e.g. requirement violation) disabled by default."
      | UseOthersOracle ->
        "Report bugs using other tools' oracles as well.\n\
        Currently we support (BD/IB/ME/RE) X (sFuzz/ILF/Mythril/MANTICORE)."
      | DeployContract _ -> "Contracts to deploy."
      | DeployAddress _ -> "Addresses to use for deployment."
      | DeployAccount _ -> "Accounts to use for deployment."

type ReplayOption = {
  Program           : string
  TestcaseDir       : string
  TimeInterval      : int
  DynamicDFA        : bool
  CheckOptionalBugs : bool
  UseOthersOracle   : bool
  DeployContracts   : string list
  DeployAddresses   : string list
  DeployAccounts    : string list
}

let parseReplayOption args =
  let cmdPrefix = "dotnet Smartian.dll replay"
  let parser = ArgumentParser.Create<ReplayerCLI> (programName = cmdPrefix)
  let r = try parser.Parse(args) with
          :? Argu.ArguParseException -> printLine (parser.PrintUsage()); exit 1
  { Program = System.IO.Path.GetFullPath(r.GetResult (<@ Program @>))
    TestcaseDir = r.GetResult (<@ InputDir @>)
    TimeInterval = r.GetResult (<@ Interval @>, defaultValue = 0)
    DynamicDFA = not (r.Contains(<@ NoDDFA @>)) // Enabled by default.
    CheckOptionalBugs = r.Contains(<@ CheckOptionalBugs @>)
    UseOthersOracle = r.Contains(<@ UseOthersOracle @>) 
    DeployContracts = r.GetResult(<@ DeployContract @>, defaultValue = [])
    DeployAddresses = r.GetResult(<@ DeployAddress @>, defaultValue = [])
    DeployAccounts = r.GetResult(<@ DeployAccount @>, defaultValue = [])
    }

let extractElapsedTime (tcFile: string) =
  let name = System.IO.Path.GetFileName(tcFile)
  let tokens = name.Split([| '_' |])
  float <| tokens.[Array.length tokens - 1]

let sortTCs tcDir =
  let sorter tcFile = try Some (extractElapsedTime tcFile) with _ -> None
  System.IO.Directory.EnumerateFiles(tcDir) |> Seq.toList |> List.sortBy sorter

let getNumBuckets timeInterval elapsedTimes =
  let maxElapsed = elapsedTimes |> List.max
  int (maxElapsed / timeInterval) + 1

let categorizeTC timeInterval (buckets: string list []) tcFile elapsedTime =
  let idx = int (elapsedTime / timeInterval) + 1
  // No need to sort tcs in same bucket
  buckets.[idx] <- tcFile :: buckets.[idx]

let bucketizeTCs timeInterval tcDir =
  let timeIntervalInSec = float (timeInterval * 60)
  let tcFiles = System.IO.Directory.EnumerateFiles(tcDir) |> Seq.toList
  let elapsedTimes = List.map extractElapsedTime tcFiles
  if List.isEmpty tcFiles then printfn "[Warning] No test case generated"; [| |]
  else let nBuckets = getNumBuckets timeIntervalInSec elapsedTimes
       let buckets = Array.create (nBuckets + 1) []
       List.iter2 (categorizeTC timeIntervalInSec buckets) tcFiles elapsedTimes
       buckets

let runReportMode opt =
  let testcaseDir = opt.TestcaseDir
  let timeInterval = opt.TimeInterval
  let traceDU = opt.DynamicDFA
  let checkOptionalBugs = opt.CheckOptionalBugs
  let useOthersOracle = opt.UseOthersOracle
  let buckets = bucketizeTCs timeInterval testcaseDir
  for i = 0 to Array.length buckets - 1 do
    for file in buckets.[i] do
      let tcStr = System.IO.File.ReadAllText file
      let tc = TestCase.fromJson tcStr
      execute tc true traceDU checkOptionalBugs useOthersOracle
      |> ignore
    let elapsed = i * timeInterval
    let edges = accumEdges.Count
    printfn "%02dm: %d Edges, %d Instrs" elapsed edges accumInstrs.Count

let runDefaultMode opt =
  let testcaseDir = opt.TestcaseDir
  let traceDU = opt.DynamicDFA
  let checkOptionalBugs = opt.CheckOptionalBugs
  let useOthersOracle = opt.UseOthersOracle
  log "Start replaying test cases in : %s" testcaseDir
  let mutable totalElapsed = 0.0
  for file in sortTCs testcaseDir do
    let tcStr = System.IO.File.ReadAllText file
    let tc = TestCase.fromJson tcStr
    let stopWatch = System.Diagnostics.Stopwatch.StartNew()
    log "Replaying test case: %s" file
    let feedback = execute tc true traceDU checkOptionalBugs useOthersOracle
    stopWatch.Stop()
    totalElapsed <- totalElapsed + stopWatch.Elapsed.TotalMilliseconds
    TCManage.printBugInfo feedback.BugSet 
  log "Covered Edges : %d" accumEdges.Count
  log "Covered Instructions: %d" accumInstrs.Count
  log "Elapsed time (ms): %.4f" totalElapsed

/// Replay test cases in the given directory on target program.
let run args =
  let opt = parseReplayOption args
  let program = opt.Program
  assertFileExists program
  Executor.initialize program opt.DeployAccounts opt.DeployContracts opt.DeployAddresses
  if opt.TimeInterval <> 0 then runReportMode opt
  else runDefaultMode opt
