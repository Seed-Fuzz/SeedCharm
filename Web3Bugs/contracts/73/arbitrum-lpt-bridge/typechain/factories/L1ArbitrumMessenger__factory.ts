/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  L1ArbitrumMessenger,
  L1ArbitrumMessengerInterface,
} from "../L1ArbitrumMessenger";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "seqNum",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "TxToL2",
    type: "event",
  },
  {
    inputs: [],
    name: "inbox",
    outputs: [
      {
        internalType: "contract IInbox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class L1ArbitrumMessenger__factory {
  static readonly abi = _abi;
  static createInterface(): L1ArbitrumMessengerInterface {
    return new utils.Interface(_abi) as L1ArbitrumMessengerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1ArbitrumMessenger {
    return new Contract(address, _abi, signerOrProvider) as L1ArbitrumMessenger;
  }
}
