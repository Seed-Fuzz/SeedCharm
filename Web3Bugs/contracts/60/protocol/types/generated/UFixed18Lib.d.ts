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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface UFixed18LibInterface extends ethers.utils.Interface {
  functions: {
    "ONE()": FunctionFragment;
    "ZERO()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "ONE", values?: undefined): string;
  encodeFunctionData(functionFragment: "ZERO", values?: undefined): string;

  decodeFunctionResult(functionFragment: "ONE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ZERO", data: BytesLike): Result;

  events: {};
}

export class UFixed18Lib extends BaseContract {
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

  interface: UFixed18LibInterface;

  functions: {
    ONE(overrides?: CallOverrides): Promise<[BigNumber]>;

    ZERO(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  ONE(overrides?: CallOverrides): Promise<BigNumber>;

  ZERO(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    ONE(overrides?: CallOverrides): Promise<BigNumber>;

    ZERO(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    ONE(overrides?: CallOverrides): Promise<BigNumber>;

    ZERO(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ONE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ZERO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
