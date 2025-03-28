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
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface MockPangolinRouterInterface extends ethers.utils.Interface {
  functions: {
    "WAVAX()": FunctionFragment;
    "getAmountsIn(uint256,address[])": FunctionFragment;
    "getAmountsOut(uint256,address[])": FunctionFragment;
    "globalAmountIn()": FunctionFragment;
    "globalAmountOut()": FunctionFragment;
    "setAmountIn(uint256)": FunctionFragment;
    "setAmountOut(uint256)": FunctionFragment;
    "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)": FunctionFragment;
    "swapTokensForExactTokens(uint256,uint256,address[],address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "WAVAX", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAmountsIn",
    values: [BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountsOut",
    values: [BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "globalAmountIn",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "globalAmountOut",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAmountIn",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAmountOut",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForTokens",
    values: [BigNumberish, BigNumberish, string[], string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTokensForExactTokens",
    values: [BigNumberish, BigNumberish, string[], string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "WAVAX", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAmountsIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountsOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "globalAmountIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "globalAmountOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAmountIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAmountOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapTokensForExactTokens",
    data: BytesLike
  ): Result;

  events: {};
}

export class MockPangolinRouter extends Contract {
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

  interface: MockPangolinRouterInterface;

  functions: {
    WAVAX(overrides?: CallOverrides): Promise<[string]>;

    "WAVAX()"(overrides?: CallOverrides): Promise<[string]>;

    getAmountsIn(
      amountOut: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { amounts: BigNumber[] }>;

    "getAmountsIn(uint256,address[])"(
      amountOut: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { amounts: BigNumber[] }>;

    getAmountsOut(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { amounts: BigNumber[] }>;

    "getAmountsOut(uint256,address[])"(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { amounts: BigNumber[] }>;

    globalAmountIn(overrides?: CallOverrides): Promise<[BigNumber]>;

    "globalAmountIn()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    globalAmountOut(overrides?: CallOverrides): Promise<[BigNumber]>;

    "globalAmountOut()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    setAmountIn(
      _globalAmountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setAmountIn(uint256)"(
      _globalAmountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAmountOut(
      _globalAmountOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setAmountOut(uint256)"(
      _globalAmountOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapExactTokensForTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapTokensForExactTokens(
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "swapTokensForExactTokens(uint256,uint256,address[],address,uint256)"(
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  WAVAX(overrides?: CallOverrides): Promise<string>;

  "WAVAX()"(overrides?: CallOverrides): Promise<string>;

  getAmountsIn(
    amountOut: BigNumberish,
    path: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "getAmountsIn(uint256,address[])"(
    amountOut: BigNumberish,
    path: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getAmountsOut(
    amountIn: BigNumberish,
    path: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "getAmountsOut(uint256,address[])"(
    amountIn: BigNumberish,
    path: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  globalAmountIn(overrides?: CallOverrides): Promise<BigNumber>;

  "globalAmountIn()"(overrides?: CallOverrides): Promise<BigNumber>;

  globalAmountOut(overrides?: CallOverrides): Promise<BigNumber>;

  "globalAmountOut()"(overrides?: CallOverrides): Promise<BigNumber>;

  setAmountIn(
    _globalAmountIn: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setAmountIn(uint256)"(
    _globalAmountIn: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAmountOut(
    _globalAmountOut: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setAmountOut(uint256)"(
    _globalAmountOut: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapExactTokensForTokens(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)"(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapTokensForExactTokens(
    amountOut: BigNumberish,
    amountInMax: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "swapTokensForExactTokens(uint256,uint256,address[],address,uint256)"(
    amountOut: BigNumberish,
    amountInMax: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    WAVAX(overrides?: CallOverrides): Promise<string>;

    "WAVAX()"(overrides?: CallOverrides): Promise<string>;

    getAmountsIn(
      amountOut: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "getAmountsIn(uint256,address[])"(
      amountOut: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getAmountsOut(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "getAmountsOut(uint256,address[])"(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    globalAmountIn(overrides?: CallOverrides): Promise<BigNumber>;

    "globalAmountIn()"(overrides?: CallOverrides): Promise<BigNumber>;

    globalAmountOut(overrides?: CallOverrides): Promise<BigNumber>;

    "globalAmountOut()"(overrides?: CallOverrides): Promise<BigNumber>;

    setAmountIn(
      _globalAmountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAmountIn(uint256)"(
      _globalAmountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setAmountOut(
      _globalAmountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAmountOut(uint256)"(
      _globalAmountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapExactTokensForTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    swapTokensForExactTokens(
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "swapTokensForExactTokens(uint256,uint256,address[],address,uint256)"(
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {};

  estimateGas: {
    WAVAX(overrides?: CallOverrides): Promise<BigNumber>;

    "WAVAX()"(overrides?: CallOverrides): Promise<BigNumber>;

    getAmountsIn(
      amountOut: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAmountsIn(uint256,address[])"(
      amountOut: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountsOut(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAmountsOut(uint256,address[])"(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    globalAmountIn(overrides?: CallOverrides): Promise<BigNumber>;

    "globalAmountIn()"(overrides?: CallOverrides): Promise<BigNumber>;

    globalAmountOut(overrides?: CallOverrides): Promise<BigNumber>;

    "globalAmountOut()"(overrides?: CallOverrides): Promise<BigNumber>;

    setAmountIn(
      _globalAmountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setAmountIn(uint256)"(
      _globalAmountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAmountOut(
      _globalAmountOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setAmountOut(uint256)"(
      _globalAmountOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapExactTokensForTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapTokensForExactTokens(
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "swapTokensForExactTokens(uint256,uint256,address[],address,uint256)"(
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    WAVAX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "WAVAX()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAmountsIn(
      amountOut: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAmountsIn(uint256,address[])"(
      amountOut: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAmountsOut(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAmountsOut(uint256,address[])"(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    globalAmountIn(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "globalAmountIn()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    globalAmountOut(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "globalAmountOut()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAmountIn(
      _globalAmountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setAmountIn(uint256)"(
      _globalAmountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAmountOut(
      _globalAmountOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setAmountOut(uint256)"(
      _globalAmountOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapExactTokensForTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapTokensForExactTokens(
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "swapTokensForExactTokens(uint256,uint256,address[],address,uint256)"(
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
