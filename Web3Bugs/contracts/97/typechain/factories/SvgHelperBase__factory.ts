/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { SvgHelperBase, SvgHelperBaseInterface } from "../SvgHelperBase";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "newBackgroundUrl",
        type: "string",
      },
    ],
    name: "BackgroundUrlUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newTokenDecimals",
        type: "uint256",
      },
    ],
    name: "TokenDecimalsUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_suppliedLiquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_totalSuppliedLiquidity",
        type: "uint256",
      },
    ],
    name: "getAttributes",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_suppliedLiquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_totalSuppliedLiquidity",
        type: "uint256",
      },
    ],
    name: "getDescription",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_suppliedLiquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_totalSuppliedLiquidity",
        type: "uint256",
      },
    ],
    name: "getTokenSvg",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenDecimals",
        type: "uint256",
      },
    ],
    name: "setTokenDecimals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenDecimals",
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
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class SvgHelperBase__factory {
  static readonly abi = _abi;
  static createInterface(): SvgHelperBaseInterface {
    return new utils.Interface(_abi) as SvgHelperBaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SvgHelperBase {
    return new Contract(address, _abi, signerOrProvider) as SvgHelperBase;
  }
}
