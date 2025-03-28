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
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface MockMorgothTokenApproverInterface extends ethers.utils.Interface {
  functions: {
    "addToken(address)": FunctionFragment;
    "approved(address)": FunctionFragment;
    "approvedTokens(address)": FunctionFragment;
    "removeToken(address)": FunctionFragment;
    "toggleManyTokens(address[],bool)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addToken", values: [string]): string;
  encodeFunctionData(functionFragment: "approved", values: [string]): string;
  encodeFunctionData(
    functionFragment: "approvedTokens",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "removeToken", values: [string]): string;
  encodeFunctionData(
    functionFragment: "toggleManyTokens",
    values: [string[], boolean]
  ): string;

  decodeFunctionResult(functionFragment: "addToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approved", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approvedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toggleManyTokens",
    data: BytesLike
  ): Result;

  events: {};
}

export class MockMorgothTokenApprover extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MockMorgothTokenApproverInterface;

  functions: {
    addToken(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approved(token: string, overrides?: CallOverrides): Promise<[boolean]>;

    approvedTokens(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    removeToken(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    toggleManyTokens(
      tokens: string[],
      value: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addToken(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approved(token: string, overrides?: CallOverrides): Promise<boolean>;

  approvedTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  removeToken(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  toggleManyTokens(
    tokens: string[],
    value: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addToken(token: string, overrides?: CallOverrides): Promise<void>;

    approved(token: string, overrides?: CallOverrides): Promise<boolean>;

    approvedTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    removeToken(token: string, overrides?: CallOverrides): Promise<void>;

    toggleManyTokens(
      tokens: string[],
      value: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addToken(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approved(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    approvedTokens(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    removeToken(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    toggleManyTokens(
      tokens: string[],
      value: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addToken(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approved(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approvedTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeToken(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    toggleManyTokens(
      tokens: string[],
      value: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
