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

export interface RepayVaultInterface extends ethers.utils.Interface {
  functions: {
    "REPAY_PER_VAULT()": FunctionFragment;
    "a()": FunctionFragment;
    "repay()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "REPAY_PER_VAULT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "a", values?: undefined): string;
  encodeFunctionData(functionFragment: "repay", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "REPAY_PER_VAULT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "a", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "repay", data: BytesLike): Result;

  events: {};
}

export interface RepayVault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RepayVaultInterface;

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
    REPAY_PER_VAULT(overrides?: CallOverrides): Promise<[BigNumber]>;

    a(overrides?: CallOverrides): Promise<[string]>;

    repay(
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;
  };

  REPAY_PER_VAULT(overrides?: CallOverrides): Promise<BigNumber>;

  a(overrides?: CallOverrides): Promise<string>;

  repay(
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  callStatic: {
    REPAY_PER_VAULT(overrides?: CallOverrides): Promise<BigNumber>;

    a(overrides?: CallOverrides): Promise<string>;

    repay(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    REPAY_PER_VAULT(overrides?: CallOverrides): Promise<BigNumber>;

    a(overrides?: CallOverrides): Promise<BigNumber>;

    repay(
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    REPAY_PER_VAULT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    a(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    repay(
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;
  };
}
