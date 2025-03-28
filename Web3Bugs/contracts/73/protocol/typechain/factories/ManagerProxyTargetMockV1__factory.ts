/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ManagerProxyTargetMockV1,
  ManagerProxyTargetMockV1Interface,
} from "../ManagerProxyTargetMockV1";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        internalType: "uint8",
        name: "_value",
        type: "uint8",
      },
    ],
    name: "setUint8",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "tupleValue1",
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
    name: "uint64Value",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "initValue",
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
    name: "targetContractId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "bytesValue",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "uint256Value",
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
    name: "bytes32Value",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "stringValue",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
        internalType: "string",
        name: "_value",
        type: "string",
      },
    ],
    name: "setString",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint64",
        name: "_value",
        type: "uint64",
      },
    ],
    name: "setUint64",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "tupleValue3",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
        internalType: "address",
        name: "_controller",
        type: "address",
      },
    ],
    name: "setController",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "tupleValue2",
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
    name: "uint8Value",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
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
        internalType: "bytes32",
        name: "_value",
        type: "bytes32",
      },
    ],
    name: "setBytes32",
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
        name: "_value",
        type: "uint256",
      },
    ],
    name: "setUint256",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getTuple",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
        internalType: "bytes",
        name: "_value",
        type: "bytes",
      },
    ],
    name: "setBytes",
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
        name: "_value1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value2",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_value3",
        type: "bytes32",
      },
    ],
    name: "setTuple",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "addressValue",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
        internalType: "address",
        name: "_value",
        type: "address",
      },
    ],
    name: "setAddress",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "controller",
    outputs: [
      {
        internalType: "contract IController",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_controller",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "controller",
        type: "address",
      },
    ],
    name: "SetController",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "param",
        type: "string",
      },
    ],
    name: "ParameterUpdate",
    type: "event",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516108743803806108748339818101604052602081101561003357600080fd5b5051600080546001600160a01b039092166001600160a01b031990921691909117905561080f806100656000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c80638bf47686116100c3578063d51033db1161007c578063d51033db1461037d578063da359dc8146103a3578063deb41f8d14610413578063e1d16b831461043c578063e30081a014610460578063f77c4791146104865761014d565b80638bf47686146102ef57806392eefe9b146102f7578063a55eba411461031d578063aaef20ea14610325578063c2b12a7314610343578063d2282dc5146103605761014d565b80635a286ac0116101155780635a286ac0146101c35780636498db88146102405780636baaa2e4146102485780637dc93929146102505780637fcaf66614610258578063822cba69146102c85761014d565b80631774e646146101525780631a5d0c27146101745780632bc2cd991461018e5780632fc36f11146101b357806351720b41146101bb575b600080fd5b6101726004803603602081101561016857600080fd5b503560ff1661048e565b005b61017c6104a4565b60408051918252519081900360200190f35b6101966104aa565b6040805167ffffffffffffffff9092168252519081900360200190f35b61017c6104bf565b61017c6104c5565b6101cb6104cb565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102055781810151838201526020016101ed565b50505050905090810190601f1680156102325780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61017c610559565b61017c61055f565b6101cb610565565b6101726004803603602081101561026e57600080fd5b81019060208101813564010000000081111561028957600080fd5b82018360208201111561029b57600080fd5b803590602001918460018302840111640100000000831117156102bd57600080fd5b5090925090506105c0565b610172600480360360208110156102de57600080fd5b503567ffffffffffffffff166105d1565b61017c6105fb565b6101726004803603602081101561030d57600080fd5b50356001600160a01b0316610601565b61017c61065d565b61032d610663565b6040805160ff9092168252519081900360200190f35b6101726004803603602081101561035957600080fd5b503561066c565b6101726004803603602081101561037657600080fd5b5035610671565b610385610676565b60408051938452602084019290925282820152519081900360600190f35b610172600480360360208110156103b957600080fd5b8101906020810181356401000000008111156103d457600080fd5b8201836020820111156103e657600080fd5b8035906020019184600183028401116401000000008311171561040857600080fd5b509092509050610684565b6101726004803603606081101561042957600080fd5b5080359060208101359060400135610690565b61044461069e565b604080516001600160a01b039092168252519081900360200190f35b6101726004803603602081101561047657600080fd5b50356001600160a01b03166106ad565b6104446106cf565b6003805460ff191660ff92909216919091179055565b60095481565b600354610100900467ffffffffffffffff1681565b60025481565b60015481565b6008805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156105515780601f1061052657610100808354040283529160200191610551565b820191906000526020600020905b81548152906001019060200180831161053457829003601f168201915b505050505081565b60045481565b60055481565b6007805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156105515780601f1061052657610100808354040283529160200191610551565b6105cc6007838361073f565b505050565b6003805467ffffffffffffffff9092166101000268ffffffffffffffff0019909216919091179055565b600b5481565b6106096106de565b600080546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f4ff638452bbf33c012645d18ae6f05515ff5f2d1dfb0cece8cbf018c60903f709181900360200190a150565b600a5481565b60035460ff1681565b600555565b600455565b600954600a54600b54909192565b6105cc6008838361073f565b600992909255600a55600b55565b6006546001600160a01b031681565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031681565b6000546001600160a01b0316331461073d576040805162461bcd60e51b815260206004820152601960248201527f63616c6c6572206d75737420626520436f6e74726f6c6c657200000000000000604482015290519081900360640190fd5b565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106107805782800160ff198235161785556107ad565b828001600101855582156107ad579182015b828111156107ad578235825591602001919060010190610792565b506107b99291506107bd565b5090565b6107d791905b808211156107b957600081556001016107c3565b9056fea265627a7a72315820db3a6eb904e7f5335e1f3dff2b952389fb2555172629cbdc960197255a03522e64736f6c634300050b0032";

export class ManagerProxyTargetMockV1__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ManagerProxyTargetMockV1> {
    return super.deploy(
      _controller,
      overrides || {}
    ) as Promise<ManagerProxyTargetMockV1>;
  }
  getDeployTransaction(
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_controller, overrides || {});
  }
  attach(address: string): ManagerProxyTargetMockV1 {
    return super.attach(address) as ManagerProxyTargetMockV1;
  }
  connect(signer: Signer): ManagerProxyTargetMockV1__factory {
    return super.connect(signer) as ManagerProxyTargetMockV1__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ManagerProxyTargetMockV1Interface {
    return new utils.Interface(_abi) as ManagerProxyTargetMockV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ManagerProxyTargetMockV1 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ManagerProxyTargetMockV1;
  }
}
