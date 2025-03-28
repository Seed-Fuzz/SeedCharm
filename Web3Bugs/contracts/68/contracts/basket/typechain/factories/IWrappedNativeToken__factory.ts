/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IWrappedNativeToken } from "../IWrappedNativeToken";

export class IWrappedNativeToken__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IWrappedNativeToken {
    return new Contract(address, _abi, signerOrProvider) as IWrappedNativeToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
