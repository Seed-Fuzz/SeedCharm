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
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface TestEarningsPoolInterface extends ethers.utils.Interface {
  functions: {
    "test_setStake()": FunctionFragment;
    "test_addToFeePool_noTranscoderFees()": FunctionFragment;
    "test_addToRewardPool_zero()": FunctionFragment;
    "beforeEach()": FunctionFragment;
    "test_addToFeePool_zero()": FunctionFragment;
    "test_addToFeePool_noDelegatorFees()": FunctionFragment;
    "test_addToRewardPool()": FunctionFragment;
    "test_addToFeePool()": FunctionFragment;
    "test_setCommission()": FunctionFragment;
    "test_addToRewardPool_noDelegatorRewards()": FunctionFragment;
    "test_addToRewardPool_noRewards()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "test_setStake",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_addToFeePool_noTranscoderFees",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_addToRewardPool_zero",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "beforeEach",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_addToFeePool_zero",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_addToFeePool_noDelegatorFees",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_addToRewardPool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_addToFeePool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_setCommission",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_addToRewardPool_noDelegatorRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_addToRewardPool_noRewards",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "test_setStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_addToFeePool_noTranscoderFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_addToRewardPool_zero",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "beforeEach", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "test_addToFeePool_zero",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_addToFeePool_noDelegatorFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_addToRewardPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_addToFeePool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_setCommission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_addToRewardPool_noDelegatorRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_addToRewardPool_noRewards",
    data: BytesLike
  ): Result;

  events: {};
}

export class TestEarningsPool extends BaseContract {
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

  interface: TestEarningsPoolInterface;

  functions: {
    test_setStake(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_addToFeePool_noTranscoderFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_addToRewardPool_zero(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    beforeEach(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_addToFeePool_zero(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_addToFeePool_noDelegatorFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_addToRewardPool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_addToFeePool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_setCommission(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_addToRewardPool_noDelegatorRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_addToRewardPool_noRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  test_setStake(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_addToFeePool_noTranscoderFees(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_addToRewardPool_zero(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  beforeEach(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_addToFeePool_zero(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_addToFeePool_noDelegatorFees(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_addToRewardPool(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_addToFeePool(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_setCommission(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_addToRewardPool_noDelegatorRewards(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_addToRewardPool_noRewards(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    test_setStake(overrides?: CallOverrides): Promise<void>;

    test_addToFeePool_noTranscoderFees(
      overrides?: CallOverrides
    ): Promise<void>;

    test_addToRewardPool_zero(overrides?: CallOverrides): Promise<void>;

    beforeEach(overrides?: CallOverrides): Promise<void>;

    test_addToFeePool_zero(overrides?: CallOverrides): Promise<void>;

    test_addToFeePool_noDelegatorFees(overrides?: CallOverrides): Promise<void>;

    test_addToRewardPool(overrides?: CallOverrides): Promise<void>;

    test_addToFeePool(overrides?: CallOverrides): Promise<void>;

    test_setCommission(overrides?: CallOverrides): Promise<void>;

    test_addToRewardPool_noDelegatorRewards(
      overrides?: CallOverrides
    ): Promise<void>;

    test_addToRewardPool_noRewards(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    test_setStake(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_addToFeePool_noTranscoderFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_addToRewardPool_zero(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    beforeEach(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_addToFeePool_zero(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_addToFeePool_noDelegatorFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_addToRewardPool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_addToFeePool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_setCommission(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_addToRewardPool_noDelegatorRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_addToRewardPool_noRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    test_setStake(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_addToFeePool_noTranscoderFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_addToRewardPool_zero(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    beforeEach(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_addToFeePool_zero(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_addToFeePool_noDelegatorFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_addToRewardPool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_addToFeePool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_setCommission(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_addToRewardPool_noDelegatorRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_addToRewardPool_noRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
