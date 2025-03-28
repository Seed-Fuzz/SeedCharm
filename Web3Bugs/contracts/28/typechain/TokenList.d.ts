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
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface TokenListInterface extends ethers.utils.Interface {
  functions: {
    "hasPoints(address,uint256)": FunctionFragment;
    "initPointList(address)": FunctionFragment;
    "isInList(address)": FunctionFragment;
    "token()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "hasPoints",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initPointList",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "isInList", values: [string]): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(functionFragment: "hasPoints", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initPointList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isInList", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {};
}

export class TokenList extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TokenListInterface;

  functions: {
    hasPoints(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "hasPoints(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    initPointList(
      _token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initPointList(address)"(
      _token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isInList(_account: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isInList(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    "token()"(overrides?: CallOverrides): Promise<[string]>;
  };

  hasPoints(
    _account: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "hasPoints(address,uint256)"(
    _account: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  initPointList(
    _token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initPointList(address)"(
    _token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isInList(_account: string, overrides?: CallOverrides): Promise<boolean>;

  "isInList(address)"(
    _account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  token(overrides?: CallOverrides): Promise<string>;

  "token()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    hasPoints(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "hasPoints(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initPointList(_token: string, overrides?: CallOverrides): Promise<void>;

    "initPointList(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isInList(_account: string, overrides?: CallOverrides): Promise<boolean>;

    "isInList(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    hasPoints(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hasPoints(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initPointList(_token: string, overrides?: Overrides): Promise<BigNumber>;

    "initPointList(address)"(
      _token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    isInList(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isInList(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    "token()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    hasPoints(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hasPoints(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initPointList(
      _token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initPointList(address)"(
      _token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isInList(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isInList(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
