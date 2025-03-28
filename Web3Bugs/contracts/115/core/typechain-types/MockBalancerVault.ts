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

export interface MockBalancerVaultInterface extends ethers.utils.Interface {
  functions: {
    "balances(uint256)": FunctionFragment;
    "getPool(bytes32)": FunctionFragment;
    "getPoolTokens(bytes32)": FunctionFragment;
    "pool()": FunctionFragment;
    "setBalances(uint256[2])": FunctionFragment;
    "tokens(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "balances",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getPool", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getPoolTokens",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "pool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setBalances",
    values: [[BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "tokens",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPoolTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokens", data: BytesLike): Result;

  events: {};
}

export interface MockBalancerVault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockBalancerVaultInterface;

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
    balances(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPool(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, number]>;

    getPoolTokens(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[], BigNumber] & {
        _tokens: string[];
        _balances: BigNumber[];
      }
    >;

    pool(overrides?: CallOverrides): Promise<[string]>;

    setBalances(
      _balances: [BigNumberish, BigNumberish],
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
  };

  balances(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  getPool(
    poolId: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, number]>;

  getPoolTokens(
    poolId: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string[], BigNumber[], BigNumber] & {
      _tokens: string[];
      _balances: BigNumber[];
    }
  >;

  pool(overrides?: CallOverrides): Promise<string>;

  setBalances(
    _balances: [BigNumberish, BigNumberish],
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    balances(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getPool(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, number]>;

    getPoolTokens(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[], BigNumber] & {
        _tokens: string[];
        _balances: BigNumber[];
      }
    >;

    pool(overrides?: CallOverrides): Promise<string>;

    setBalances(
      _balances: [BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<void>;

    tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    balances(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getPool(poolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getPoolTokens(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pool(overrides?: CallOverrides): Promise<BigNumber>;

    setBalances(
      _balances: [BigNumberish, BigNumberish],
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    balances(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPool(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolTokens(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setBalances(
      _balances: [BigNumberish, BigNumberish],
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    tokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
