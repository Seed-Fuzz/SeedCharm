/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  L2LPTDataCache,
  L2LPTDataCacheInterface,
} from "../L2LPTDataCache";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256",
      },
    ],
    name: "CacheTotalSupplyFinalized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "TxToL1",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "decreaseL2SupplyFromL1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_totalSupply",
        type: "uint256",
      },
    ],
    name: "finalizeCacheTotalSupply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "increaseL2SupplyFromL1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "l1CirculatingSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "l1LPTDataCache",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "l1TotalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "l2LPTGateway",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "l2SupplyFromL1",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_l1LPTDataCache",
        type: "address",
      },
    ],
    name: "setL1LPTDataCache",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_l2LPTGateway",
        type: "address",
      },
    ],
    name: "setL2LPTGateway",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610d808061010d6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80638da5cb5b1161008c578063b833138511610066578063b8331385146101c6578063e879a2aa146101e4578063f2fde38b14610200578063fb1c5ee91461021c576100cf565b80638da5cb5b14610170578063a6402a7f1461018e578063ae3a23e0146101aa576100cf565b8063095654b6146100d45780630dd264d5146100f05780631429ce661461010e5780632b8242731461012a578063715018a6146101485780638869bdb914610152575b600080fd5b6100ee60048036038101906100e99190610950565b61023a565b005b6100f86102fa565b6040516101059190610a4c565b60405180910390f35b61012860048036038101906101239190610950565b610320565b005b6101326103e0565b60405161013f9190610ae7565b60405180910390f35b6101506103e6565b005b61015a61046e565b6040516101679190610a4c565b60405180910390f35b610178610494565b6040516101859190610a4c565b60405180910390f35b6101a860048036038101906101a39190610979565b6104bd565b005b6101c460048036038101906101bf9190610979565b610581565b005b6101ce61065c565b6040516101db9190610ae7565b60405180910390f35b6101fe60048036038101906101f99190610979565b610662565b005b61021a60048036038101906102159190610950565b61070e565b005b610224610806565b6040516102319190610ae7565b60405180910390f35b610242610831565b73ffffffffffffffffffffffffffffffffffffffff16610260610494565b73ffffffffffffffffffffffffffffffffffffffff16146102b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ad90610aa7565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610328610831565b73ffffffffffffffffffffffffffffffffffffffff16610346610494565b73ffffffffffffffffffffffffffffffffffffffff161461039c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039390610aa7565b60405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60045481565b6103ee610831565b73ffffffffffffffffffffffffffffffffffffffff1661040c610494565b73ffffffffffffffffffffffffffffffffffffffff1614610462576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045990610aa7565b60405180910390fd5b61046c6000610839565b565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461054d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054490610a87565b60405180910390fd5b60045481111561056457600060048190555061057e565b80600460008282546105769190610bb3565b925050819055505b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166105ad816108fd565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461061a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061190610ac7565b60405180910390fd5b816003819055507f8d07aadbdca8bc9f3ec4711bd6c9f59cb3b4201d014664d6ebdfb201e751d308826040516106509190610ae7565b60405180910390a15050565b60035481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e990610a87565b60405180910390fd5b80600460008282546107049190610b5d565b9250508190555050565b610716610831565b73ffffffffffffffffffffffffffffffffffffffff16610734610494565b73ffffffffffffffffffffffffffffffffffffffff161461078a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078190610aa7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f190610a67565b60405180910390fd5b61080381610839565b50565b6000600454600354101561081b57600061082c565b60045460035461082b9190610bb3565b5b905090565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60007311110000000000000000000000000000000011118261091f9190610b13565b9050919050565b60008135905061093581610d1c565b92915050565b60008135905061094a81610d33565b92915050565b60006020828403121561096257600080fd5b600061097084828501610926565b91505092915050565b60006020828403121561098b57600080fd5b60006109998482850161093b565b91505092915050565b6109ab81610be7565b82525050565b60006109be602683610b02565b91506109c982610c52565b604082019050919050565b60006109e1601283610b02565b91506109ec82610ca1565b602082019050919050565b6000610a04602083610b02565b9150610a0f82610cca565b602082019050919050565b6000610a27601883610b02565b9150610a3282610cf3565b602082019050919050565b610a4681610c19565b82525050565b6000602082019050610a6160008301846109a2565b92915050565b60006020820190508181036000830152610a80816109b1565b9050919050565b60006020820190508181036000830152610aa0816109d4565b9050919050565b60006020820190508181036000830152610ac0816109f7565b9050919050565b60006020820190508181036000830152610ae081610a1a565b9050919050565b6000602082019050610afc6000830184610a3d565b92915050565b600082825260208201905092915050565b6000610b1e82610bf9565b9150610b2983610bf9565b92508273ffffffffffffffffffffffffffffffffffffffff03821115610b5257610b51610c23565b5b828201905092915050565b6000610b6882610c19565b9150610b7383610c19565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610ba857610ba7610c23565b5b828201905092915050565b6000610bbe82610c19565b9150610bc983610c19565b925082821015610bdc57610bdb610c23565b5b828203905092915050565b6000610bf282610bf9565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4e4f545f4c325f4c50545f474154455741590000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4f4e4c595f434f554e544552504152545f474154455741590000000000000000600082015250565b610d2581610be7565b8114610d3057600080fd5b50565b610d3c81610c19565b8114610d4757600080fd5b5056fea26469706673582212209695b63dd94415f75e8d72f351e514453259f0f5c4283e464c5d9685dbaaeaa464736f6c63430008040033";

export class L2LPTDataCache__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<L2LPTDataCache> {
    return super.deploy(overrides || {}) as Promise<L2LPTDataCache>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): L2LPTDataCache {
    return super.attach(address) as L2LPTDataCache;
  }
  connect(signer: Signer): L2LPTDataCache__factory {
    return super.connect(signer) as L2LPTDataCache__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): L2LPTDataCacheInterface {
    return new utils.Interface(_abi) as L2LPTDataCacheInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L2LPTDataCache {
    return new Contract(address, _abi, signerOrProvider) as L2LPTDataCache;
  }
}
