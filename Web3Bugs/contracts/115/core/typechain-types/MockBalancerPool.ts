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

export interface MockBalancerPoolInterface extends ethers.utils.Interface {
  functions: {
    "getNormalizedWeights()": FunctionFragment;
    "setNormalizedWeight(address,uint256)": FunctionFragment;
    "setTotalSupply(uint256)": FunctionFragment;
    "tokenA()": FunctionFragment;
    "tokenB()": FunctionFragment;
    "tokenBalances(address)": FunctionFragment;
    "tokenWeights(address)": FunctionFragment;
    "totalSupply()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getNormalizedWeights",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setNormalizedWeight",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTotalSupply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "tokenA", values?: undefined): string;
  encodeFunctionData(functionFragment: "tokenB", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenBalances",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenWeights",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getNormalizedWeights",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setNormalizedWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenA", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenB", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenWeights",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MockBalancerPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockBalancerPoolInterface;

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
    getNormalizedWeights(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    setNormalizedWeight(
      token: string,
      weight: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    setTotalSupply(
      supply: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    tokenA(overrides?: CallOverrides): Promise<[string]>;

    tokenB(overrides?: CallOverrides): Promise<[string]>;

    tokenBalances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tokenWeights(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  getNormalizedWeights(overrides?: CallOverrides): Promise<BigNumber[]>;

  setNormalizedWeight(
    token: string,
    weight: BigNumberish,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  setTotalSupply(
    supply: BigNumberish,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  tokenA(overrides?: CallOverrides): Promise<string>;

  tokenB(overrides?: CallOverrides): Promise<string>;

  tokenBalances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  tokenWeights(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getNormalizedWeights(overrides?: CallOverrides): Promise<BigNumber[]>;

    setNormalizedWeight(
      token: string,
      weight: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTotalSupply(
      supply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenA(overrides?: CallOverrides): Promise<string>;

    tokenB(overrides?: CallOverrides): Promise<string>;

    tokenBalances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    tokenWeights(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getNormalizedWeights(overrides?: CallOverrides): Promise<BigNumber>;

    setNormalizedWeight(
      token: string,
      weight: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    setTotalSupply(
      supply: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    tokenA(overrides?: CallOverrides): Promise<BigNumber>;

    tokenB(overrides?: CallOverrides): Promise<BigNumber>;

    tokenBalances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    tokenWeights(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getNormalizedWeights(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setNormalizedWeight(
      token: string,
      weight: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    setTotalSupply(
      supply: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    tokenA(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenB(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenBalances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenWeights(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
