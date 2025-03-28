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

interface TestSortedDoublyLLFindWithHintsInterface
  extends ethers.utils.Interface {
  functions: {
    "test_insert_findWithHintNextAtPosition()": FunctionFragment;
    "test_insert_findWithHint()": FunctionFragment;
    "test_insert_findWithHintPrevAtPosition()": FunctionFragment;
    "test_insert_findNoHintUpdateHead()": FunctionFragment;
    "test_insert_findWithHintPrevUpdateTail()": FunctionFragment;
    "beforeEach()": FunctionFragment;
    "test_insert_findNoHintUpdateTail()": FunctionFragment;
    "test_insert_findWithHintNextUpdateHead()": FunctionFragment;
    "test_insert_findNoHintAtPosition()": FunctionFragment;
    "test_insert_findWithHintNextUpdateTail()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "test_insert_findWithHintNextAtPosition",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_insert_findWithHint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_insert_findWithHintPrevAtPosition",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_insert_findNoHintUpdateHead",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_insert_findWithHintPrevUpdateTail",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "beforeEach",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_insert_findNoHintUpdateTail",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_insert_findWithHintNextUpdateHead",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_insert_findNoHintAtPosition",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_insert_findWithHintNextUpdateTail",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "test_insert_findWithHintNextAtPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_insert_findWithHint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_insert_findWithHintPrevAtPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_insert_findNoHintUpdateHead",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_insert_findWithHintPrevUpdateTail",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "beforeEach", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "test_insert_findNoHintUpdateTail",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_insert_findWithHintNextUpdateHead",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_insert_findNoHintAtPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_insert_findWithHintNextUpdateTail",
    data: BytesLike
  ): Result;

  events: {};
}

export class TestSortedDoublyLLFindWithHints extends BaseContract {
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

  interface: TestSortedDoublyLLFindWithHintsInterface;

  functions: {
    test_insert_findWithHintNextAtPosition(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_insert_findWithHint(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_insert_findWithHintPrevAtPosition(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_insert_findNoHintUpdateHead(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_insert_findWithHintPrevUpdateTail(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    beforeEach(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_insert_findNoHintUpdateTail(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_insert_findWithHintNextUpdateHead(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_insert_findNoHintAtPosition(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_insert_findWithHintNextUpdateTail(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  test_insert_findWithHintNextAtPosition(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_insert_findWithHint(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_insert_findWithHintPrevAtPosition(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_insert_findNoHintUpdateHead(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_insert_findWithHintPrevUpdateTail(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  beforeEach(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_insert_findNoHintUpdateTail(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_insert_findWithHintNextUpdateHead(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_insert_findNoHintAtPosition(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_insert_findWithHintNextUpdateTail(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    test_insert_findWithHintNextAtPosition(
      overrides?: CallOverrides
    ): Promise<void>;

    test_insert_findWithHint(overrides?: CallOverrides): Promise<void>;

    test_insert_findWithHintPrevAtPosition(
      overrides?: CallOverrides
    ): Promise<void>;

    test_insert_findNoHintUpdateHead(overrides?: CallOverrides): Promise<void>;

    test_insert_findWithHintPrevUpdateTail(
      overrides?: CallOverrides
    ): Promise<void>;

    beforeEach(overrides?: CallOverrides): Promise<void>;

    test_insert_findNoHintUpdateTail(overrides?: CallOverrides): Promise<void>;

    test_insert_findWithHintNextUpdateHead(
      overrides?: CallOverrides
    ): Promise<void>;

    test_insert_findNoHintAtPosition(overrides?: CallOverrides): Promise<void>;

    test_insert_findWithHintNextUpdateTail(
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    test_insert_findWithHintNextAtPosition(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_insert_findWithHint(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_insert_findWithHintPrevAtPosition(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_insert_findNoHintUpdateHead(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_insert_findWithHintPrevUpdateTail(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    beforeEach(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_insert_findNoHintUpdateTail(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_insert_findWithHintNextUpdateHead(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_insert_findNoHintAtPosition(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_insert_findWithHintNextUpdateTail(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    test_insert_findWithHintNextAtPosition(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_insert_findWithHint(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_insert_findWithHintPrevAtPosition(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_insert_findNoHintUpdateHead(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_insert_findWithHintPrevUpdateTail(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    beforeEach(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_insert_findNoHintUpdateTail(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_insert_findWithHintNextUpdateHead(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_insert_findNoHintAtPosition(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_insert_findWithHintNextUpdateTail(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
