/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IMisoFarm } from "../IMisoFarm";

export class IMisoFarm__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMisoFarm {
    return new Contract(address, _abi, signerOrProvider) as IMisoFarm;
  }
}

const _abi = [
  {
    inputs: [],
    name: "farmTemplate",
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
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "initFarm",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
