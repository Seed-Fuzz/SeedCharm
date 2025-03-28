/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import {EventData, PastEventOptions} from "web3-eth-contract";

export interface IBalancerPoolContract
  extends Truffle.Contract<IBalancerPoolInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IBalancerPoolInstance>;
}

type AllEvents = never;

export interface IBalancerPoolInstance extends Truffle.ContractInstance {
  getNormalizedWeights(txDetails?: Truffle.TransactionDetails): Promise<BN[]>;

  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  methods: {
    getNormalizedWeights(txDetails?: Truffle.TransactionDetails): Promise<BN[]>;

    totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BN>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
