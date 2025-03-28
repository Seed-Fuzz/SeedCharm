/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BoringFactory } from "../BoringFactory";

export class BoringFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BoringFactory> {
    return super.deploy(overrides || {}) as Promise<BoringFactory>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BoringFactory {
    return super.attach(address) as BoringFactory;
  }
  connect(signer: Signer): BoringFactory__factory {
    return super.connect(signer) as BoringFactory__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BoringFactory {
    return new Contract(address, _abi, signerOrProvider) as BoringFactory;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: true,
        internalType: "address",
        name: "cloneAddress",
        type: "address",
      },
    ],
    name: "LogDeploy",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "useCreate2",
        type: "bool",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "cloneAddress",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "masterContractOf",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610398806100206000396000f3fe6080604052600436106100295760003560e01c80631f54245b1461002e578063bafe4f14146100cc575b600080fd5b6100b06004803603606081101561004457600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561006f57600080fd5b82018360208201111561008157600080fd5b803590602001918460018302840111640100000000831117156100a357600080fd5b91935091503515156100ff565b604080516001600160a01b039092168252519081900360200190f35b3480156100d857600080fd5b506100b0600480360360208110156100ef57600080fd5b50356001600160a01b0316610347565b60006001600160a01b03851661015c576040805162461bcd60e51b815260206004820181905260248201527f426f72696e67466163746f72793a204e6f206d6173746572436f6e7472616374604482015290519081900360640190fd5b606085901b82156101d357600085856040518083838082843760405192018290038220733d602d80600a3d3981f3363d3d373d3d3d363d7360601b8352601483018890526e5af43d82803e903d91602b57fd5bf360881b60288401529550909350849250603791508390506000f593505050610218565b604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528160148201526e5af43d82803e903d91602b57fd5bf360881b60288201526037816000f09250505b6001600160a01b038281166000818152602081815260409182902080546001600160a01b031916948b169490941790935551631377d1f560e21b815260048101928352602481018790529091634ddf47d491349189918991908190604401848480828437600081840152601f19601f82011690508083019250505093505050506000604051808303818588803b1580156102b157600080fd5b505af11580156102c5573d6000803e3d6000fd5b5050505050816001600160a01b0316866001600160a01b03167fd62166f3c2149208e51788b1401cc356bf5da1fc6c7886a32e18570f57d88b3b878760405180806020018281038252848482818152602001925080828437600083820152604051601f909101601f19169092018290039550909350505050a350949350505050565b6000602081905290815260409020546001600160a01b03168156fea264697066735822122004f5f714b8c429061d16f6450b14b9ce0e62fae684014e377c65bdacedc1b69664736f6c634300060c0033";
