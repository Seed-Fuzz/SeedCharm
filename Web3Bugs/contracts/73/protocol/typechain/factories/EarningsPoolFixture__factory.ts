/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EarningsPoolFixture,
  EarningsPoolFixtureInterface,
} from "../EarningsPoolFixture";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "_stake",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isTranscoder",
        type: "bool",
      },
    ],
    name: "feePoolShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getHasTranscoderRewardFeePool",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "_stake",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isTranscoder",
        type: "bool",
      },
    ],
    name: "rewardPoolShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getTranscoderRewardPool",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getRewardPool",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bool",
        name: "_hasTranscoderRewardFeePool",
        type: "bool",
      },
    ],
    name: "setHasTranscoderRewardFeePool",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_stake",
        type: "uint256",
      },
    ],
    name: "setStake",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getFeePool",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getTranscoderFeePool",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_rewardCut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_feeShare",
        type: "uint256",
      },
    ],
    name: "setCommission",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getClaimableStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_fees",
        type: "uint256",
      },
    ],
    name: "addToFeePool",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getTotalStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getCumulativeFeeFactor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "hasClaimableShares",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_stake",
        type: "uint256",
      },
    ],
    name: "setClaimableStake",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_cumulativeFeeFactor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cumulativeRewardFactor",
        type: "uint256",
      },
    ],
    name: "setPrevPoolEarningsFactors",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getCumulativeRewardFactor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_rewards",
        type: "uint256",
      },
    ],
    name: "updateCumulativeRewardFactor",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getEarningsPool",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_rewards",
        type: "uint256",
      },
    ],
    name: "addToRewardPool",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_fees",
        type: "uint256",
      },
    ],
    name: "updateCumulativeFeeFactor",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ba9806100206000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c8063696c7b77116100b857806398a8179b1161007c57806398a8179b1461029a578063a3af8c50146102bd578063a846e629146102c5578063b61f16e3146102e2578063b95ffbce14610331578063d69bb56a1461034e57610142565b8063696c7b77146102485780637bc74225146102655780637de0d23c1461026d578063846030a014610275578063989ca37c1461027d57610142565b8063211efd491161010a578063211efd49146101cf57806335d9db53146101f0578063385160641461020d578063445995aa146102155780635167a0b61461021d578063575a41871461024057610142565b80630ffdbd421461014757806311e3351c1461017e578063167aee441461019a57806317896e12146101bf5780631b8b13a7146101c7575b600080fd5b61016c6004803603604081101561015d57600080fd5b5080359060200135151561036b565b60408051918252519081900360200190f35b610186610388565b604080519115158252519081900360200190f35b61016c600480360360408110156101b057600080fd5b50803590602001351515610391565b61016c6103a5565b61016c6103ab565b6101ee600480360360208110156101e557600080fd5b503515156103b1565b005b6101ee6004803603602081101561020657600080fd5b50356103c4565b61016c6103d8565b61016c6103de565b6101ee6004803603604081101561023357600080fd5b50803590602001356103e4565b61016c6103fa565b6101ee6004803603602081101561025e57600080fd5b5035610400565b61016c610479565b61016c61047f565b610186610485565b6101ee6004803603602081101561029357600080fd5b5035610496565b6101ee600480360360408110156102b057600080fd5b508035906020013561049b565b61016c6104a6565b6101ee600480360360208110156102db57600080fd5b50356104ac565b6102ea610529565b60408051998a5260208a0198909852888801969096526060880194909452911515608087015260a086015260c085015260e084015261010083015251908190036101200190f35b6101ee6004803603602081101561034757600080fd5b5035610555565b6101ee6004803603602081101561036457600080fd5b50356105cd565b600061037f600b848463ffffffff61064a16565b90505b92915050565b60135460ff1690565b600061037f600b848463ffffffff61069e16565b60115490565b600b5490565b6013805460ff1916911515919091179055565b6103d5600b8263ffffffff6106c816565b50565b600c5490565b60125490565b6103f6600b838363ffffffff6106d016565b5050565b600e5490565b60135460ff161561046057600061041c82600b600501546106e0565b600c54909150610432908263ffffffff61070516565b600c55610457610448838363ffffffff61075f16565b6012549063ffffffff61070516565b601255506103d5565b600c54610473908263ffffffff61070516565b600c5550565b600d5490565b60155490565b6000610491600b6107bc565b905090565b600e55565b600a91909155600955565b60145490565b604080516101608101825260005481526001546020820152600254918101919091526003546060820152600454608082015260055460a082015260065460c082015260075460e082015260085460ff161515610100820152600954610120820152600a546101408201526103d590600b908363ffffffff6107c516565b600b54600c54601154601254601354600d54600e54600f5460105460ff90941693909192939495969798565b60135460ff16156105b457600061057182600b600401546106e0565b9050610595610586838363ffffffff61075f16565b600b549063ffffffff61070516565b600b556011546105ab908263ffffffff61070516565b601155506103d5565b600b546105c7908263ffffffff61070516565b600b5550565b604080516101608101825260005481526001546020820152600254918101919091526003546060820152600454608082015260055460a082015260065460c082015260075460e082015260085460ff161515610100820152600954610120820152600a546101408201526103d590600b908363ffffffff61081b16565b60088301546000908190819060ff1615610673576106698686866108b0565b9092509050610684565b61067e8686866108fe565b90925090505b610694828263ffffffff61070516565b9695505050505050565b60088301546000908190819060ff16156106bd5761066986868661096e565b61067e8686866109b6565b600290910155565b6004830191909155600590910155565b600061037f620f42406106f9858563ffffffff610a1016565b9063ffffffff610a6916565b60008282018381101561037f576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000828211156107b6576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b60030154151590565b6000826101200151600014156107e5576107e0600180610ad3565b6107ec565b8261012001515b905061080d61080082848760020154610af5565b829063ffffffff61070516565b846009018190555050505050565b61014082015161012083015160009061083e57610839600180610ad3565b610845565b8361012001515b905084600a0154600014156108805761087361086682858860020154610af5565b839063ffffffff61070516565b600a860155506108ab9050565b6108a361089282858860020154610af5565b600a8701549063ffffffff61070516565b600a86015550505b505050565b6000806000808660030154116108c75760006108da565b6108da8660010154868860030154610b29565b9050836108e9578060006108f0565b8086600701545b92509250505b935093915050565b600383015460009081908190819015610952576000610925886001015489600501546106e0565b600189015490915061093d908263ffffffff61075f16565b925061094e81888a60030154610b29565b9150505b841561096157925090506108f6565b9250600091506108f69050565b600080600080866003015411610985576000610998565b6109988660000154868860030154610b29565b9050836109a7578060006108f0565b60069095015494959350505050565b600383015460009081908190819015610952576109db876000015488600401546106e0565b87549092506109ff906109f4908463ffffffff61075f16565b878960030154610b29565b9050841561096157925090506108f6565b600082610a1f57506000610382565b82820282848281610a2c57fe5b041461037f5760405162461bcd60e51b8152600401808060200182810382526021815260200180610b546021913960400191505060405180910390fd5b6000808211610abf576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b6000828481610aca57fe5b04949350505050565b600061037f826106f9856b033b2e3c9fd0803ce800000063ffffffff610a1016565b6000610b216b033b2e3c9fd0803ce80000006106f9610b148686610ad3565b879063ffffffff610a1016565b949350505050565b6000610b21620f42406106f9610b148686600061037f826106f985620f424063ffffffff610a101656fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a265627a7a72315820f6af5ff1ac507a93ed7745aae3554b60e23a0dacc40291492ee9eabe559e671a64736f6c634300050b0032";

export class EarningsPoolFixture__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EarningsPoolFixture> {
    return super.deploy(overrides || {}) as Promise<EarningsPoolFixture>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EarningsPoolFixture {
    return super.attach(address) as EarningsPoolFixture;
  }
  connect(signer: Signer): EarningsPoolFixture__factory {
    return super.connect(signer) as EarningsPoolFixture__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EarningsPoolFixtureInterface {
    return new utils.Interface(_abi) as EarningsPoolFixtureInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EarningsPoolFixture {
    return new Contract(address, _abi, signerOrProvider) as EarningsPoolFixture;
  }
}
