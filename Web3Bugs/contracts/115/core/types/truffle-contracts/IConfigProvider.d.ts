/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import {EventData, PastEventOptions} from "web3-eth-contract";

export interface IConfigProviderContract
  extends Truffle.Contract<IConfigProviderInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IConfigProviderInstance>;
}

export interface CollateralRemoved {
  name: "CollateralRemoved";
  args: {
    collateralType: string;
    0: string;
  };
}

export interface CollateralUpdated {
  name: "CollateralUpdated";
  args: {
    collateralType: string;
    debtLimit: BN;
    liquidationRatio: BN;
    minCollateralRatio: BN;
    borrowRate: BN;
    originationFee: BN;
    liquidationBonus: BN;
    liquidationFee: BN;
    0: string;
    1: BN;
    2: BN;
    3: BN;
    4: BN;
    5: BN;
    6: BN;
    7: BN;
  };
}

type AllEvents = CollateralRemoved | CollateralUpdated;

export interface IConfigProviderInstance extends Truffle.ContractInstance {
  setCollateralConfig: {
    (
      _collateralType: string,
      _debtLimit: number | BN | string,
      _liquidationRatio: number | BN | string,
      _minCollateralRatio: number | BN | string,
      _borrowRate: number | BN | string,
      _originationFee: number | BN | string,
      _liquidationBonus: number | BN | string,
      _liquidationFee: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _collateralType: string,
      _debtLimit: number | BN | string,
      _liquidationRatio: number | BN | string,
      _minCollateralRatio: number | BN | string,
      _borrowRate: number | BN | string,
      _originationFee: number | BN | string,
      _liquidationBonus: number | BN | string,
      _liquidationFee: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _collateralType: string,
      _debtLimit: number | BN | string,
      _liquidationRatio: number | BN | string,
      _minCollateralRatio: number | BN | string,
      _borrowRate: number | BN | string,
      _originationFee: number | BN | string,
      _liquidationBonus: number | BN | string,
      _liquidationFee: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _collateralType: string,
      _debtLimit: number | BN | string,
      _liquidationRatio: number | BN | string,
      _minCollateralRatio: number | BN | string,
      _borrowRate: number | BN | string,
      _originationFee: number | BN | string,
      _liquidationBonus: number | BN | string,
      _liquidationFee: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  removeCollateral: {
    (_collateralType: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _collateralType: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _collateralType: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _collateralType: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setCollateralDebtLimit: {
    (
      _collateralType: string,
      _debtLimit: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _collateralType: string,
      _debtLimit: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _collateralType: string,
      _debtLimit: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _collateralType: string,
      _debtLimit: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setCollateralLiquidationRatio: {
    (
      _collateralType: string,
      _liquidationRatio: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _collateralType: string,
      _liquidationRatio: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _collateralType: string,
      _liquidationRatio: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _collateralType: string,
      _liquidationRatio: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setCollateralMinCollateralRatio: {
    (
      _collateralType: string,
      _minCollateralRatio: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _collateralType: string,
      _minCollateralRatio: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _collateralType: string,
      _minCollateralRatio: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _collateralType: string,
      _minCollateralRatio: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setCollateralBorrowRate: {
    (
      _collateralType: string,
      _borrowRate: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _collateralType: string,
      _borrowRate: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _collateralType: string,
      _borrowRate: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _collateralType: string,
      _borrowRate: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setCollateralOriginationFee: {
    (
      _collateralType: string,
      _originationFee: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _collateralType: string,
      _originationFee: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _collateralType: string,
      _originationFee: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _collateralType: string,
      _originationFee: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setCollateralLiquidationBonus: {
    (
      _collateralType: string,
      _liquidationBonus: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _collateralType: string,
      _liquidationBonus: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _collateralType: string,
      _liquidationBonus: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _collateralType: string,
      _liquidationBonus: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setCollateralLiquidationFee: {
    (
      _collateralType: string,
      _liquidationFee: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _collateralType: string,
      _liquidationFee: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _collateralType: string,
      _liquidationFee: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _collateralType: string,
      _liquidationFee: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setMinVotingPeriod: {
    (
      _minVotingPeriod: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _minVotingPeriod: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _minVotingPeriod: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _minVotingPeriod: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setMaxVotingPeriod: {
    (
      _maxVotingPeriod: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _maxVotingPeriod: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _maxVotingPeriod: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _maxVotingPeriod: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setVotingQuorum: {
    (
      _votingQuorum: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _votingQuorum: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _votingQuorum: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _votingQuorum: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setProposalThreshold: {
    (
      _proposalThreshold: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _proposalThreshold: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _proposalThreshold: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _proposalThreshold: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  a(txDetails?: Truffle.TransactionDetails): Promise<string>;

  collateralConfigs(
    _id: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{
    collateralType: string;
    debtLimit: BN;
    liquidationRatio: BN;
    minCollateralRatio: BN;
    borrowRate: BN;
    originationFee: BN;
    liquidationBonus: BN;
    liquidationFee: BN;
  }>;

  collateralIds(
    _collateralType: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  numCollateralConfigs(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  minVotingPeriod(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  maxVotingPeriod(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  votingQuorum(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  proposalThreshold(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  collateralDebtLimit(
    _collateralType: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  collateralLiquidationRatio(
    _collateralType: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  collateralMinCollateralRatio(
    _collateralType: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  collateralBorrowRate(
    _collateralType: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  collateralOriginationFee(
    _collateralType: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  collateralLiquidationBonus(
    _collateralType: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  collateralLiquidationFee(
    _collateralType: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  methods: {
    setCollateralConfig: {
      (
        _collateralType: string,
        _debtLimit: number | BN | string,
        _liquidationRatio: number | BN | string,
        _minCollateralRatio: number | BN | string,
        _borrowRate: number | BN | string,
        _originationFee: number | BN | string,
        _liquidationBonus: number | BN | string,
        _liquidationFee: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _collateralType: string,
        _debtLimit: number | BN | string,
        _liquidationRatio: number | BN | string,
        _minCollateralRatio: number | BN | string,
        _borrowRate: number | BN | string,
        _originationFee: number | BN | string,
        _liquidationBonus: number | BN | string,
        _liquidationFee: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _collateralType: string,
        _debtLimit: number | BN | string,
        _liquidationRatio: number | BN | string,
        _minCollateralRatio: number | BN | string,
        _borrowRate: number | BN | string,
        _originationFee: number | BN | string,
        _liquidationBonus: number | BN | string,
        _liquidationFee: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _collateralType: string,
        _debtLimit: number | BN | string,
        _liquidationRatio: number | BN | string,
        _minCollateralRatio: number | BN | string,
        _borrowRate: number | BN | string,
        _originationFee: number | BN | string,
        _liquidationBonus: number | BN | string,
        _liquidationFee: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    removeCollateral: {
      (
        _collateralType: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _collateralType: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _collateralType: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _collateralType: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setCollateralDebtLimit: {
      (
        _collateralType: string,
        _debtLimit: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _collateralType: string,
        _debtLimit: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _collateralType: string,
        _debtLimit: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _collateralType: string,
        _debtLimit: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setCollateralLiquidationRatio: {
      (
        _collateralType: string,
        _liquidationRatio: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _collateralType: string,
        _liquidationRatio: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _collateralType: string,
        _liquidationRatio: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _collateralType: string,
        _liquidationRatio: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setCollateralMinCollateralRatio: {
      (
        _collateralType: string,
        _minCollateralRatio: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _collateralType: string,
        _minCollateralRatio: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _collateralType: string,
        _minCollateralRatio: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _collateralType: string,
        _minCollateralRatio: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setCollateralBorrowRate: {
      (
        _collateralType: string,
        _borrowRate: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _collateralType: string,
        _borrowRate: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _collateralType: string,
        _borrowRate: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _collateralType: string,
        _borrowRate: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setCollateralOriginationFee: {
      (
        _collateralType: string,
        _originationFee: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _collateralType: string,
        _originationFee: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _collateralType: string,
        _originationFee: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _collateralType: string,
        _originationFee: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setCollateralLiquidationBonus: {
      (
        _collateralType: string,
        _liquidationBonus: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _collateralType: string,
        _liquidationBonus: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _collateralType: string,
        _liquidationBonus: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _collateralType: string,
        _liquidationBonus: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setCollateralLiquidationFee: {
      (
        _collateralType: string,
        _liquidationFee: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _collateralType: string,
        _liquidationFee: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _collateralType: string,
        _liquidationFee: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _collateralType: string,
        _liquidationFee: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setMinVotingPeriod: {
      (
        _minVotingPeriod: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _minVotingPeriod: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _minVotingPeriod: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _minVotingPeriod: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setMaxVotingPeriod: {
      (
        _maxVotingPeriod: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _maxVotingPeriod: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _maxVotingPeriod: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _maxVotingPeriod: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setVotingQuorum: {
      (
        _votingQuorum: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _votingQuorum: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _votingQuorum: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _votingQuorum: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setProposalThreshold: {
      (
        _proposalThreshold: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _proposalThreshold: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _proposalThreshold: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _proposalThreshold: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    a(txDetails?: Truffle.TransactionDetails): Promise<string>;

    collateralConfigs(
      _id: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{
      collateralType: string;
      debtLimit: BN;
      liquidationRatio: BN;
      minCollateralRatio: BN;
      borrowRate: BN;
      originationFee: BN;
      liquidationBonus: BN;
      liquidationFee: BN;
    }>;

    collateralIds(
      _collateralType: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    numCollateralConfigs(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    minVotingPeriod(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    maxVotingPeriod(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    votingQuorum(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    proposalThreshold(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    collateralDebtLimit(
      _collateralType: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    collateralLiquidationRatio(
      _collateralType: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    collateralMinCollateralRatio(
      _collateralType: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    collateralBorrowRate(
      _collateralType: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    collateralOriginationFee(
      _collateralType: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    collateralLiquidationBonus(
      _collateralType: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    collateralLiquidationFee(
      _collateralType: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
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
