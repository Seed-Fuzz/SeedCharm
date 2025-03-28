/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  TotalSupplyLike,
  TotalSupplyLikeInterface,
} from "../TotalSupplyLike";

const _abi = [
  {
    inputs: [],
    name: "totalSupply",
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
];

export class TotalSupplyLike__factory {
  static readonly abi = _abi;
  static createInterface(): TotalSupplyLikeInterface {
    return new utils.Interface(_abi) as TotalSupplyLikeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TotalSupplyLike {
    return new Contract(address, _abi, signerOrProvider) as TotalSupplyLike;
  }
}
