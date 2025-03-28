/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Contract, Signer, utils} from "ethers";
import {Provider} from "@ethersproject/providers";
import type {IDemandMinerV2, IDemandMinerV2Interface} from "../IDemandMinerV2";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "income",
        type: "uint256",
      },
    ],
    name: "DepositFeeReleased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "feeCollector",
        type: "address",
      },
    ],
    name: "FeeCollectorSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "depositFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "withdrawFee",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct IDemandMinerV2.FeeConfig",
        name: "",
        type: "tuple",
      },
    ],
    name: "FeeConfigSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "income",
        type: "uint256",
      },
    ],
    name: "WithdrawFeeReleased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeCollector",
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
    name: "feeConfig",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "depositFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "withdrawFee",
            type: "uint256",
          },
        ],
        internalType: "struct IDemandMinerV2.FeeConfig",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "feeCollector",
        type: "address",
      },
    ],
    name: "setFeeCollector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "depositFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "withdrawFee",
            type: "uint256",
          },
        ],
        internalType: "struct IDemandMinerV2.FeeConfig",
        name: "newFeeConfig",
        type: "tuple",
      },
    ],
    name: "setFeeConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IDemandMinerV2__factory {
  static readonly abi = _abi;
  static createInterface(): IDemandMinerV2Interface {
    return new utils.Interface(_abi) as IDemandMinerV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDemandMinerV2 {
    return new Contract(address, _abi, signerOrProvider) as IDemandMinerV2;
  }
}
