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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface MinterInterface extends ethers.utils.Interface {
  functions: {
    "setInflationChange(uint256)": FunctionFragment;
    "migrateToNewMinter(address)": FunctionFragment;
    "trustedWithdrawETH(address,uint256)": FunctionFragment;
    "currentMintedTokens()": FunctionFragment;
    "getController()": FunctionFragment;
    "setTargetBondingRate(uint256)": FunctionFragment;
    "createReward(uint256,uint256)": FunctionFragment;
    "targetBondingRate()": FunctionFragment;
    "setController(address)": FunctionFragment;
    "currentMintableTokens()": FunctionFragment;
    "inflationChange()": FunctionFragment;
    "inflation()": FunctionFragment;
    "trustedBurnTokens(uint256)": FunctionFragment;
    "trustedTransferTokens(address,uint256)": FunctionFragment;
    "setCurrentRewardTokens()": FunctionFragment;
    "depositETH()": FunctionFragment;
    "controller()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "setInflationChange",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "migrateToNewMinter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "trustedWithdrawETH",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentMintedTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getController",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setTargetBondingRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createReward",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "targetBondingRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setController",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "currentMintableTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "inflationChange",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "inflation", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "trustedBurnTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "trustedTransferTokens",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCurrentRewardTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositETH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "setInflationChange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "migrateToNewMinter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "trustedWithdrawETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentMintedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTargetBondingRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetBondingRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentMintableTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "inflationChange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "inflation", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "trustedBurnTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "trustedTransferTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCurrentRewardTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "depositETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;

  events: {
    "SetCurrentRewardTokens(uint256,uint256)": EventFragment;
    "SetController(address)": EventFragment;
    "ParameterUpdate(string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetCurrentRewardTokens"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetController"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ParameterUpdate"): EventFragment;
}

export class Minter extends BaseContract {
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

  interface: MinterInterface;

  functions: {
    setInflationChange(
      _inflationChange: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    migrateToNewMinter(
      _newMinter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    trustedWithdrawETH(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currentMintedTokens(overrides?: CallOverrides): Promise<[BigNumber]>;

    getController(overrides?: CallOverrides): Promise<[string]>;

    setTargetBondingRate(
      _targetBondingRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createReward(
      _fracNum: BigNumberish,
      _fracDenom: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    targetBondingRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    setController(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currentMintableTokens(overrides?: CallOverrides): Promise<[BigNumber]>;

    inflationChange(overrides?: CallOverrides): Promise<[BigNumber]>;

    inflation(overrides?: CallOverrides): Promise<[BigNumber]>;

    trustedBurnTokens(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    trustedTransferTokens(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCurrentRewardTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositETH(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    controller(overrides?: CallOverrides): Promise<[string]>;
  };

  setInflationChange(
    _inflationChange: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  migrateToNewMinter(
    _newMinter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  trustedWithdrawETH(
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currentMintedTokens(overrides?: CallOverrides): Promise<BigNumber>;

  getController(overrides?: CallOverrides): Promise<string>;

  setTargetBondingRate(
    _targetBondingRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createReward(
    _fracNum: BigNumberish,
    _fracDenom: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  targetBondingRate(overrides?: CallOverrides): Promise<BigNumber>;

  setController(
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currentMintableTokens(overrides?: CallOverrides): Promise<BigNumber>;

  inflationChange(overrides?: CallOverrides): Promise<BigNumber>;

  inflation(overrides?: CallOverrides): Promise<BigNumber>;

  trustedBurnTokens(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  trustedTransferTokens(
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCurrentRewardTokens(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositETH(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  controller(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    setInflationChange(
      _inflationChange: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    migrateToNewMinter(
      _newMinter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    trustedWithdrawETH(
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    currentMintedTokens(overrides?: CallOverrides): Promise<BigNumber>;

    getController(overrides?: CallOverrides): Promise<string>;

    setTargetBondingRate(
      _targetBondingRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createReward(
      _fracNum: BigNumberish,
      _fracDenom: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    targetBondingRate(overrides?: CallOverrides): Promise<BigNumber>;

    setController(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    currentMintableTokens(overrides?: CallOverrides): Promise<BigNumber>;

    inflationChange(overrides?: CallOverrides): Promise<BigNumber>;

    inflation(overrides?: CallOverrides): Promise<BigNumber>;

    trustedBurnTokens(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    trustedTransferTokens(
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setCurrentRewardTokens(overrides?: CallOverrides): Promise<void>;

    depositETH(overrides?: CallOverrides): Promise<boolean>;

    controller(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    SetCurrentRewardTokens(
      currentMintableTokens?: null,
      currentInflation?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { currentMintableTokens: BigNumber; currentInflation: BigNumber }
    >;

    SetController(
      controller?: null
    ): TypedEventFilter<[string], { controller: string }>;

    ParameterUpdate(
      param?: null
    ): TypedEventFilter<[string], { param: string }>;
  };

  estimateGas: {
    setInflationChange(
      _inflationChange: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    migrateToNewMinter(
      _newMinter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    trustedWithdrawETH(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currentMintedTokens(overrides?: CallOverrides): Promise<BigNumber>;

    getController(overrides?: CallOverrides): Promise<BigNumber>;

    setTargetBondingRate(
      _targetBondingRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createReward(
      _fracNum: BigNumberish,
      _fracDenom: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    targetBondingRate(overrides?: CallOverrides): Promise<BigNumber>;

    setController(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currentMintableTokens(overrides?: CallOverrides): Promise<BigNumber>;

    inflationChange(overrides?: CallOverrides): Promise<BigNumber>;

    inflation(overrides?: CallOverrides): Promise<BigNumber>;

    trustedBurnTokens(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    trustedTransferTokens(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCurrentRewardTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositETH(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    setInflationChange(
      _inflationChange: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    migrateToNewMinter(
      _newMinter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    trustedWithdrawETH(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currentMintedTokens(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getController(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setTargetBondingRate(
      _targetBondingRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createReward(
      _fracNum: BigNumberish,
      _fracDenom: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    targetBondingRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setController(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currentMintableTokens(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    inflationChange(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    inflation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    trustedBurnTokens(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    trustedTransferTokens(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCurrentRewardTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositETH(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
