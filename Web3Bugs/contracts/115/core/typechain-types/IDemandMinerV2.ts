/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import {BytesLike} from "@ethersproject/bytes";
import {Listener, Provider} from "@ethersproject/providers";
import {FunctionFragment, EventFragment, Result} from "@ethersproject/abi";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export type FeeConfigStruct = {
  depositFee: BigNumberish;
  withdrawFee: BigNumberish;
};

export type FeeConfigStructOutput = [BigNumber, BigNumber] & {
  depositFee: BigNumber;
  withdrawFee: BigNumber;
};

export interface IDemandMinerV2Interface extends ethers.utils.Interface {
  functions: {
    "deposit(uint256)": FunctionFragment;
    "feeCollector()": FunctionFragment;
    "feeConfig()": FunctionFragment;
    "setFeeCollector(address)": FunctionFragment;
    "setFeeConfig((uint256,uint256))": FunctionFragment;
    "token()": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "feeCollector",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "feeConfig", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setFeeCollector",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeConfig",
    values: [FeeConfigStruct]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeCollector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFeeCollector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "DepositFeeReleased(uint256)": EventFragment;
    "FeeCollectorSet(address)": EventFragment;
    "FeeConfigSet(tuple)": EventFragment;
    "WithdrawFeeReleased(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DepositFeeReleased"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeCollectorSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeConfigSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawFeeReleased"): EventFragment;
}

export type DepositFeeReleasedEvent = TypedEvent<
  [BigNumber],
  {income: BigNumber}
>;

export type DepositFeeReleasedEventFilter =
  TypedEventFilter<DepositFeeReleasedEvent>;

export type FeeCollectorSetEvent = TypedEvent<[string], {feeCollector: string}>;

export type FeeCollectorSetEventFilter = TypedEventFilter<FeeCollectorSetEvent>;

export type FeeConfigSetEvent = TypedEvent<
  [FeeConfigStructOutput],
  {arg0: FeeConfigStructOutput}
>;

export type FeeConfigSetEventFilter = TypedEventFilter<FeeConfigSetEvent>;

export type WithdrawFeeReleasedEvent = TypedEvent<
  [BigNumber],
  {income: BigNumber}
>;

export type WithdrawFeeReleasedEventFilter =
  TypedEventFilter<WithdrawFeeReleasedEvent>;

export interface IDemandMinerV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IDemandMinerV2Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    deposit(
      amount: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    feeCollector(overrides?: CallOverrides): Promise<[string]>;

    feeConfig(overrides?: CallOverrides): Promise<[FeeConfigStructOutput]>;

    setFeeCollector(
      feeCollector: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    setFeeConfig(
      newFeeConfig: FeeConfigStruct,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;
  };

  deposit(
    amount: BigNumberish,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  feeCollector(overrides?: CallOverrides): Promise<string>;

  feeConfig(overrides?: CallOverrides): Promise<FeeConfigStructOutput>;

  setFeeCollector(
    feeCollector: string,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  setFeeConfig(
    newFeeConfig: FeeConfigStruct,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  withdraw(
    amount: BigNumberish,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  callStatic: {
    deposit(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    feeCollector(overrides?: CallOverrides): Promise<string>;

    feeConfig(overrides?: CallOverrides): Promise<FeeConfigStructOutput>;

    setFeeCollector(
      feeCollector: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeeConfig(
      newFeeConfig: FeeConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    withdraw(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "DepositFeeReleased(uint256)"(income?: null): DepositFeeReleasedEventFilter;
    DepositFeeReleased(income?: null): DepositFeeReleasedEventFilter;

    "FeeCollectorSet(address)"(feeCollector?: null): FeeCollectorSetEventFilter;
    FeeCollectorSet(feeCollector?: null): FeeCollectorSetEventFilter;

    "FeeConfigSet(tuple)"(undefined?: null): FeeConfigSetEventFilter;
    FeeConfigSet(undefined?: null): FeeConfigSetEventFilter;

    "WithdrawFeeReleased(uint256)"(
      income?: null
    ): WithdrawFeeReleasedEventFilter;
    WithdrawFeeReleased(income?: null): WithdrawFeeReleasedEventFilter;
  };

  estimateGas: {
    deposit(
      amount: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    feeCollector(overrides?: CallOverrides): Promise<BigNumber>;

    feeConfig(overrides?: CallOverrides): Promise<BigNumber>;

    setFeeCollector(
      feeCollector: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    setFeeConfig(
      newFeeConfig: FeeConfigStruct,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      amount: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    feeCollector(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setFeeCollector(
      feeCollector: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    setFeeConfig(
      newFeeConfig: FeeConfigStruct,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;
  };
}
