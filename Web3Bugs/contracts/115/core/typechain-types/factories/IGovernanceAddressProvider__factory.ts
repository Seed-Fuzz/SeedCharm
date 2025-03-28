/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Contract, Signer, utils} from "ethers";
import {Provider} from "@ethersproject/providers";
import type {
  IGovernanceAddressProvider,
  IGovernanceAddressProviderInterface,
} from "../IGovernanceAddressProvider";

const _abi = [
  {
    inputs: [],
    name: "controller",
    outputs: [
      {
        internalType: "contract IAccessController",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "debtNotifier",
    outputs: [
      {
        internalType: "contract IDebtNotifier",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governorAlpha",
    outputs: [
      {
        internalType: "contract IGovernorAlpha",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mimo",
    outputs: [
      {
        internalType: "contract IMIMO",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "parallel",
    outputs: [
      {
        internalType: "contract IAddressProvider",
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
        internalType: "contract IDebtNotifier",
        name: "_debtNotifier",
        type: "address",
      },
    ],
    name: "setDebtNotifier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IGovernorAlpha",
        name: "_governorAlpha",
        type: "address",
      },
    ],
    name: "setGovernorAlpha",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMIMO",
        name: "_mimo",
        type: "address",
      },
    ],
    name: "setMIMO",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IAddressProvider",
        name: "_parallel",
        type: "address",
      },
    ],
    name: "setParallelAddressProvider",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITimelock",
        name: "_timelock",
        type: "address",
      },
    ],
    name: "setTimelock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IVotingEscrow",
        name: "_votingEscrow",
        type: "address",
      },
    ],
    name: "setVotingEscrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "timelock",
    outputs: [
      {
        internalType: "contract ITimelock",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "votingEscrow",
    outputs: [
      {
        internalType: "contract IVotingEscrow",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IGovernanceAddressProvider__factory {
  static readonly abi = _abi;
  static createInterface(): IGovernanceAddressProviderInterface {
    return new utils.Interface(_abi) as IGovernanceAddressProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGovernanceAddressProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IGovernanceAddressProvider;
  }
}
