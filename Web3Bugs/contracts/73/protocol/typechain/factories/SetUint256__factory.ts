/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SetUint256, SetUint256Interface } from "../SetUint256";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        internalType: "bool",
        name: "_shouldFail",
        type: "bool",
      },
    ],
    name: "setShouldFail",
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
        name: "_i",
        type: "uint256",
      },
    ],
    name: "setUint256",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "i",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610146806100206000396000f3fe6080604052600436106100345760003560e01c8063a5aa5c1214610039578063d2282dc514610067578063e5aa3d5814610084575b600080fd5b34801561004557600080fd5b506100656004803603602081101561005c57600080fd5b503515156100ab565b005b6100656004803603602081101561007d57600080fd5b50356100be565b34801561009057600080fd5b5061009961010b565b60408051918252519081900360200190f35b6001805460ff1916911515919091179055565b60015460ff1615610106576040805162461bcd60e51b815260206004820152600d60248201526c12481cda1bdd5b190819985a5b609a1b604482015290519081900360640190fd5b600055565b6000548156fea265627a7a7231582092ced5d1ae7c33bf4a9e5688a5a92f0c1caa855248e123466c43cab2e2fb759f64736f6c634300050b0032";

export class SetUint256__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SetUint256> {
    return super.deploy(overrides || {}) as Promise<SetUint256>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SetUint256 {
    return super.attach(address) as SetUint256;
  }
  connect(signer: Signer): SetUint256__factory {
    return super.connect(signer) as SetUint256__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SetUint256Interface {
    return new utils.Interface(_abi) as SetUint256Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SetUint256 {
    return new Contract(address, _abi, signerOrProvider) as SetUint256;
  }
}
