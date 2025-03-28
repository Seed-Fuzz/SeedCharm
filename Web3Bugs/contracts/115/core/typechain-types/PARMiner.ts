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

export type UserInfoStruct = {
  stake: BigNumberish;
  accAmountPerShare: BigNumberish;
  accParAmountPerShare: BigNumberish;
};

export type UserInfoStructOutput = [BigNumber, BigNumber, BigNumber] & {
  stake: BigNumber;
  accAmountPerShare: BigNumber;
  accParAmountPerShare: BigNumber;
};

export interface PARMinerInterface extends ethers.utils.Interface {
  functions: {
    "a()": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "par()": FunctionFragment;
    "pendingMIMO(address)": FunctionFragment;
    "pendingPAR(address)": FunctionFragment;
    "releaseMIMO(address)": FunctionFragment;
    "releasePAR(address)": FunctionFragment;
    "restakePAR(address)": FunctionFragment;
    "stake(address)": FunctionFragment;
    "totalStake()": FunctionFragment;
    "userInfo(address)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "a", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "par", values?: undefined): string;
  encodeFunctionData(functionFragment: "pendingMIMO", values: [string]): string;
  encodeFunctionData(functionFragment: "pendingPAR", values: [string]): string;
  encodeFunctionData(functionFragment: "releaseMIMO", values: [string]): string;
  encodeFunctionData(functionFragment: "releasePAR", values: [string]): string;
  encodeFunctionData(functionFragment: "restakePAR", values: [string]): string;
  encodeFunctionData(functionFragment: "stake", values: [string]): string;
  encodeFunctionData(
    functionFragment: "totalStake",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "userInfo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "a", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "par", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingMIMO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pendingPAR", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "releaseMIMO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "releasePAR", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "restakePAR", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalStake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "StakeDecreased(address,uint256)": EventFragment;
    "StakeIncreased(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "StakeDecreased"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StakeIncreased"): EventFragment;
}

export type StakeDecreasedEvent = TypedEvent<
  [string, BigNumber],
  {user: string; stake: BigNumber}
>;

export type StakeDecreasedEventFilter = TypedEventFilter<StakeDecreasedEvent>;

export type StakeIncreasedEvent = TypedEvent<
  [string, BigNumber],
  {user: string; stake: BigNumber}
>;

export type StakeIncreasedEventFilter = TypedEventFilter<StakeIncreasedEvent>;

export interface PARMiner extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PARMinerInterface;

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
    a(overrides?: CallOverrides): Promise<[string]>;

    deposit(
      amount: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    par(overrides?: CallOverrides): Promise<[string]>;

    pendingMIMO(_user: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    pendingPAR(_user: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    releaseMIMO(
      _user: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    releasePAR(
      _user: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    restakePAR(
      _user: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    stake(_user: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    totalStake(overrides?: CallOverrides): Promise<[BigNumber]>;

    userInfo(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[UserInfoStructOutput]>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;
  };

  a(overrides?: CallOverrides): Promise<string>;

  deposit(
    amount: BigNumberish,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  par(overrides?: CallOverrides): Promise<string>;

  pendingMIMO(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  pendingPAR(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  releaseMIMO(
    _user: string,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  releasePAR(
    _user: string,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  restakePAR(
    _user: string,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  stake(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  totalStake(overrides?: CallOverrides): Promise<BigNumber>;

  userInfo(
    _user: string,
    overrides?: CallOverrides
  ): Promise<UserInfoStructOutput>;

  withdraw(
    amount: BigNumberish,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  callStatic: {
    a(overrides?: CallOverrides): Promise<string>;

    deposit(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    par(overrides?: CallOverrides): Promise<string>;

    pendingMIMO(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    pendingPAR(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    releaseMIMO(_user: string, overrides?: CallOverrides): Promise<void>;

    releasePAR(_user: string, overrides?: CallOverrides): Promise<void>;

    restakePAR(_user: string, overrides?: CallOverrides): Promise<void>;

    stake(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalStake(overrides?: CallOverrides): Promise<BigNumber>;

    userInfo(
      _user: string,
      overrides?: CallOverrides
    ): Promise<UserInfoStructOutput>;

    withdraw(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "StakeDecreased(address,uint256)"(
      user?: string | null,
      stake?: null
    ): StakeDecreasedEventFilter;
    StakeDecreased(
      user?: string | null,
      stake?: null
    ): StakeDecreasedEventFilter;

    "StakeIncreased(address,uint256)"(
      user?: string | null,
      stake?: null
    ): StakeIncreasedEventFilter;
    StakeIncreased(
      user?: string | null,
      stake?: null
    ): StakeIncreasedEventFilter;
  };

  estimateGas: {
    a(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      amount: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    par(overrides?: CallOverrides): Promise<BigNumber>;

    pendingMIMO(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    pendingPAR(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    releaseMIMO(
      _user: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    releasePAR(
      _user: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    restakePAR(
      _user: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    stake(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalStake(overrides?: CallOverrides): Promise<BigNumber>;

    userInfo(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    a(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      amount: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    par(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingMIMO(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingPAR(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    releaseMIMO(
      _user: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    releasePAR(
      _user: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    restakePAR(
      _user: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    stake(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalStake(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userInfo(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;
  };
}
