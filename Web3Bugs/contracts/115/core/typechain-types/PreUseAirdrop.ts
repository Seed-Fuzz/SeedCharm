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

export interface PreUseAirdropInterface extends ethers.utils.Interface {
  functions: {
    "airdrop()": FunctionFragment;
    "ga()": FunctionFragment;
    "mimoDistributor()": FunctionFragment;
    "payouts(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "airdrop", values?: undefined): string;
  encodeFunctionData(functionFragment: "ga", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mimoDistributor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "payouts",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "airdrop", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ga", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mimoDistributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "payouts", data: BytesLike): Result;

  events: {};
}

export interface PreUseAirdrop extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PreUseAirdropInterface;

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
    airdrop(
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    ga(overrides?: CallOverrides): Promise<[string]>;

    mimoDistributor(overrides?: CallOverrides): Promise<[string]>;

    payouts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & {recipient: string; amount: BigNumber}>;
  };

  airdrop(
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  ga(overrides?: CallOverrides): Promise<string>;

  mimoDistributor(overrides?: CallOverrides): Promise<string>;

  payouts(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & {recipient: string; amount: BigNumber}>;

  callStatic: {
    airdrop(overrides?: CallOverrides): Promise<void>;

    ga(overrides?: CallOverrides): Promise<string>;

    mimoDistributor(overrides?: CallOverrides): Promise<string>;

    payouts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & {recipient: string; amount: BigNumber}>;
  };

  filters: {};

  estimateGas: {
    airdrop(
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    ga(overrides?: CallOverrides): Promise<BigNumber>;

    mimoDistributor(overrides?: CallOverrides): Promise<BigNumber>;

    payouts(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    airdrop(
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    ga(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mimoDistributor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payouts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
