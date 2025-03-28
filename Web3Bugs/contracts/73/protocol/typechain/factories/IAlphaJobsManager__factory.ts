/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IAlphaJobsManager,
  IAlphaJobsManagerInterface,
} from "../IAlphaJobsManager";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_broadcaster",
        type: "address",
      },
    ],
    name: "broadcasters",
    outputs: [
      {
        internalType: "uint256",
        name: "deposit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "withdrawBlock",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

export class IAlphaJobsManager__factory {
  static readonly abi = _abi;
  static createInterface(): IAlphaJobsManagerInterface {
    return new utils.Interface(_abi) as IAlphaJobsManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAlphaJobsManager {
    return new Contract(address, _abi, signerOrProvider) as IAlphaJobsManager;
  }
}
