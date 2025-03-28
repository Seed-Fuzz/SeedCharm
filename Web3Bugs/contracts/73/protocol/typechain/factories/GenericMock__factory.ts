/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GenericMock, GenericMockInterface } from "../GenericMock";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes4",
        name: "_func",
        type: "bytes4",
      },
      {
        internalType: "bytes32",
        name: "_dataHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "setMockUint256WithParam",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes4",
        name: "_func",
        type: "bytes4",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "setMockUint256",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes4",
        name: "_func",
        type: "bytes4",
      },
      {
        internalType: "address",
        name: "_value",
        type: "address",
      },
    ],
    name: "setMockAddress",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes4",
        name: "_func",
        type: "bytes4",
      },
      {
        internalType: "bool",
        name: "_value",
        type: "bool",
      },
    ],
    name: "setMockBool",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes4",
        name: "_func",
        type: "bytes4",
      },
      {
        internalType: "bytes32",
        name: "_value",
        type: "bytes32",
      },
    ],
    name: "setMockBytes32",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061071c806100206000396000f3fe6080604052600436106100555760003560e01c80630d9b99931461028d5780631cff79cd146102e15780631d77d696146103635780636c33e7eb1461039d5780637c4d18bd146103e0578063d2f65fbc1461041c575b60008035905060008036604051602001808383808284376040805191909301818103601f19018252835280516020918201206001600160e01b031989166000908152918290529290206002015491955050600160b01b900460ff1692506100c8915050576100c36000610456565b610289565b60006001600160e01b03198316600090815260208190526040902060020154600160a81b900460ff1660038111156100fc57fe5b1415610158576001600160e01b031982166000908152602081815260408083208484526003019091529020548061014957506001600160e01b031982166000908152602081905260409020545b61015281610456565b50610289565b60016001600160e01b03198316600090815260208190526040902060020154600160a81b900460ff16600381111561018c57fe5b14156101b8576001600160e01b031982166000908152602081905260409020600101546100c390610456565b60026001600160e01b03198316600090815260208190526040902060020154600160a81b900460ff1660038111156101ec57fe5b141561021b576001600160e01b031982166000908152602081905260409020600201546100c39060ff16610456565b60036001600160e01b03198316600090815260208190526040902060020154600160a81b900460ff16600381111561024f57fe5b1415610289576001600160e01b031982166000908152602081905260409020600201546102899061010090046001600160a01b0316610456565b5050005b34801561029957600080fd5b506102cd600480360360608110156102b057600080fd5b506001600160e01b03198135169060208101359060400135610468565b604080519115158252519081900360200190f35b610361600480360360408110156102f757600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561032257600080fd5b82018360208201111561033457600080fd5b8035906020019184600183028401116401000000008311171561035657600080fd5b5090925090506104bc565b005b34801561036f57600080fd5b506102cd6004803603604081101561038657600080fd5b506001600160e01b031981351690602001356105bb565b3480156103a957600080fd5b50610361600480360360408110156103c057600080fd5b5080356001600160e01b03191690602001356001600160a01b03166105f6565b3480156103ec57600080fd5b506103616004803603604081101561040357600080fd5b506001600160e01b031981351690602001351515610654565b34801561042857600080fd5b506103616004803603604081101561043f57600080fd5b506001600160e01b0319813516906020013561069f565b60405160208101604052818152602081f35b6001600160e01b03199290921660008181526020818152604080832060028101805460ff60a81b19168155958452600301825282209490945590815291829052805460ff60b01b1916600160b01b17905590565b60006060846001600160a01b0316348585604051808383808284376040519201945060009350909150508083038185875af1925050503d806000811461051e576040519150601f19603f3d011682016040523d82523d6000602084013e610523565b606091505b50915091508181906105b35760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610578578181015183820152602001610560565b50505050905090810190601f1680156105a55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050505050565b6001600160e01b03199190911660009081526020819052604081206002810180549390915561ffff60a81b19909216600160b01b1790915590565b6001600160e01b0319919091166000908152602081905260409020600201805460ff60b01b196001600160a01b039093166101000260ff60a81b19909116600360a81b17610100600160a81b0319161791909116600160b01b179055565b6001600160e01b0319919091166000908152602081905260409020600201805460ff60b01b1992151560ff60a81b19909116600160a91b1760ff19161791909116600160b01b179055565b6001600160e01b031991909116600090815260208190526040902060028101805460019092019290925560ff60a81b1916600160a81b1760ff60b01b1916600160b01b17905556fea265627a7a72315820b0965eacbf835eee8a1075e3b7029c2c1a7db204e7647f1ebc1e3abb5a5da99d64736f6c634300050b0032";

export class GenericMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GenericMock> {
    return super.deploy(overrides || {}) as Promise<GenericMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GenericMock {
    return super.attach(address) as GenericMock;
  }
  connect(signer: Signer): GenericMock__factory {
    return super.connect(signer) as GenericMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GenericMockInterface {
    return new utils.Interface(_abi) as GenericMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GenericMock {
    return new Contract(address, _abi, signerOrProvider) as GenericMock;
  }
}
