/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import {EventData, PastEventOptions} from "web3-eth-contract";

export interface IGovernanceAddressProviderContract
  extends Truffle.Contract<IGovernanceAddressProviderInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<IGovernanceAddressProviderInstance>;
}

type AllEvents = never;

export interface IGovernanceAddressProviderInstance
  extends Truffle.ContractInstance {
  setParallelAddressProvider: {
    (_parallel: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _parallel: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _parallel: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _parallel: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setMIMO: {
    (_mimo: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(_mimo: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      _mimo: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _mimo: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setDebtNotifier: {
    (_debtNotifier: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _debtNotifier: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _debtNotifier: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _debtNotifier: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setGovernorAlpha: {
    (_governorAlpha: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _governorAlpha: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _governorAlpha: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _governorAlpha: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setTimelock: {
    (_timelock: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _timelock: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _timelock: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _timelock: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setVotingEscrow: {
    (_votingEscrow: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _votingEscrow: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _votingEscrow: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _votingEscrow: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  controller(txDetails?: Truffle.TransactionDetails): Promise<string>;

  parallel(txDetails?: Truffle.TransactionDetails): Promise<string>;

  mimo(txDetails?: Truffle.TransactionDetails): Promise<string>;

  debtNotifier(txDetails?: Truffle.TransactionDetails): Promise<string>;

  governorAlpha(txDetails?: Truffle.TransactionDetails): Promise<string>;

  timelock(txDetails?: Truffle.TransactionDetails): Promise<string>;

  votingEscrow(txDetails?: Truffle.TransactionDetails): Promise<string>;

  methods: {
    setParallelAddressProvider: {
      (_parallel: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _parallel: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _parallel: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _parallel: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setMIMO: {
      (_mimo: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _mimo: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _mimo: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _mimo: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setDebtNotifier: {
      (_debtNotifier: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _debtNotifier: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _debtNotifier: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _debtNotifier: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setGovernorAlpha: {
      (_governorAlpha: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _governorAlpha: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _governorAlpha: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _governorAlpha: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setTimelock: {
      (_timelock: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _timelock: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _timelock: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _timelock: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setVotingEscrow: {
      (_votingEscrow: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _votingEscrow: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _votingEscrow: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _votingEscrow: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    controller(txDetails?: Truffle.TransactionDetails): Promise<string>;

    parallel(txDetails?: Truffle.TransactionDetails): Promise<string>;

    mimo(txDetails?: Truffle.TransactionDetails): Promise<string>;

    debtNotifier(txDetails?: Truffle.TransactionDetails): Promise<string>;

    governorAlpha(txDetails?: Truffle.TransactionDetails): Promise<string>;

    timelock(txDetails?: Truffle.TransactionDetails): Promise<string>;

    votingEscrow(txDetails?: Truffle.TransactionDetails): Promise<string>;
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
