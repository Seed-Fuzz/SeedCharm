/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { MixinWrappers, MixinWrappersInterface } from "../MixinWrappers";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "faceValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "winProb",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "senderNonce",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "recipientRandHash",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "auxData",
            type: "bytes",
          },
        ],
        internalType: "struct MTicketBrokerCore.Ticket[]",
        name: "_tickets",
        type: "tuple[]",
      },
      {
        internalType: "bytes[]",
        name: "_sigs",
        type: "bytes[]",
      },
      {
        internalType: "uint256[]",
        name: "_recipientRands",
        type: "uint256[]",
      },
    ],
    name: "batchRedeemWinningTickets",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "DepositFunded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "faceValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "winProb",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "senderNonce",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "recipientRand",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "auxData",
        type: "bytes",
      },
    ],
    name: "WinningTicketRedeemed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WinningTicketTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startRound",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endRound",
        type: "uint256",
      },
    ],
    name: "Unlock",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "UnlockCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "deposit",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reserve",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
];

export class MixinWrappers__factory {
  static readonly abi = _abi;
  static createInterface(): MixinWrappersInterface {
    return new utils.Interface(_abi) as MixinWrappersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MixinWrappers {
    return new Contract(address, _abi, signerOrProvider) as MixinWrappers;
  }
}
