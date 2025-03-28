/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ICauldron } from "../ICauldron";

export class ICauldron__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICauldron {
    return new Contract(address, _abi, signerOrProvider) as ICauldron;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes6",
        name: "",
        type: "bytes6",
      },
    ],
    name: "assets",
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
    inputs: [
      {
        internalType: "bytes12",
        name: "",
        type: "bytes12",
      },
    ],
    name: "balances",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "art",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "ink",
            type: "uint128",
          },
        ],
        internalType: "struct DataTypes.Balances",
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
        internalType: "bytes6",
        name: "seriesId",
        type: "bytes6",
      },
      {
        internalType: "uint128",
        name: "art",
        type: "uint128",
      },
    ],
    name: "debtToBase",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes6",
        name: "",
        type: "bytes6",
      },
    ],
    name: "series",
    outputs: [
      {
        components: [
          {
            internalType: "contract IFYToken",
            name: "fyToken",
            type: "address",
          },
          {
            internalType: "bytes6",
            name: "baseId",
            type: "bytes6",
          },
          {
            internalType: "uint32",
            name: "maturity",
            type: "uint32",
          },
        ],
        internalType: "struct DataTypes.Series",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
