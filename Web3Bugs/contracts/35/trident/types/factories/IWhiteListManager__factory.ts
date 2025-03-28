/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IWhiteListManager,
  IWhiteListManagerInterface,
} from "../IWhiteListManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "whitelistedAccounts",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IWhiteListManager__factory {
  static readonly abi = _abi;
  static createInterface(): IWhiteListManagerInterface {
    return new utils.Interface(_abi) as IWhiteListManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IWhiteListManager {
    return new Contract(address, _abi, signerOrProvider) as IWhiteListManager;
  }
}
