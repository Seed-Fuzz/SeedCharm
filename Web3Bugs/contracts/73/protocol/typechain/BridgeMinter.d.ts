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

interface BridgeMinterInterface extends ethers.utils.Interface {
  functions: {
    "setToken(address)": FunctionFragment;
    "migrateToNewMinter(address)": FunctionFragment;
    "getController()": FunctionFragment;
    "withdrawLPTToL1Migrator()": FunctionFragment;
    "l1MigratorAddr()": FunctionFragment;
    "l1LPTGatewayAddr()": FunctionFragment;
    "tokenAddr()": FunctionFragment;
    "bridgeMint(address,uint256)": FunctionFragment;
    "setController(address)": FunctionFragment;
    "setL1LPTGateway(address)": FunctionFragment;
    "withdrawETHToL1Migrator()": FunctionFragment;
    "setL1Migrator(address)": FunctionFragment;
    "depositETH()": FunctionFragment;
    "controller()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "setToken", values: [string]): string;
  encodeFunctionData(
    functionFragment: "migrateToNewMinter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getController",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawLPTToL1Migrator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "l1MigratorAddr",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "l1LPTGatewayAddr",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "tokenAddr", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "bridgeMint",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setController",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setL1LPTGateway",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawETHToL1Migrator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setL1Migrator",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "depositETH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "setToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "migrateToNewMinter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawLPTToL1Migrator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "l1MigratorAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "l1LPTGatewayAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenAddr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bridgeMint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setL1LPTGateway",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawETHToL1Migrator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setL1Migrator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "depositETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;

  events: {
    "SetController(address)": EventFragment;
    "ParameterUpdate(string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetController"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ParameterUpdate"): EventFragment;
}

export class BridgeMinter extends BaseContract {
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

  interface: BridgeMinterInterface;

  functions: {
    setToken(
      _tokenAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    migrateToNewMinter(
      _newMinterAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getController(overrides?: CallOverrides): Promise<[string]>;

    withdrawLPTToL1Migrator(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    l1MigratorAddr(overrides?: CallOverrides): Promise<[string]>;

    l1LPTGatewayAddr(overrides?: CallOverrides): Promise<[string]>;

    tokenAddr(overrides?: CallOverrides): Promise<[string]>;

    bridgeMint(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setController(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setL1LPTGateway(
      _l1LPTGatewayAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawETHToL1Migrator(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setL1Migrator(
      _l1MigratorAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositETH(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    controller(overrides?: CallOverrides): Promise<[string]>;
  };

  setToken(
    _tokenAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  migrateToNewMinter(
    _newMinterAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getController(overrides?: CallOverrides): Promise<string>;

  withdrawLPTToL1Migrator(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  l1MigratorAddr(overrides?: CallOverrides): Promise<string>;

  l1LPTGatewayAddr(overrides?: CallOverrides): Promise<string>;

  tokenAddr(overrides?: CallOverrides): Promise<string>;

  bridgeMint(
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setController(
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setL1LPTGateway(
    _l1LPTGatewayAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawETHToL1Migrator(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setL1Migrator(
    _l1MigratorAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositETH(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  controller(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    setToken(_tokenAddr: string, overrides?: CallOverrides): Promise<void>;

    migrateToNewMinter(
      _newMinterAddr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getController(overrides?: CallOverrides): Promise<string>;

    withdrawLPTToL1Migrator(overrides?: CallOverrides): Promise<BigNumber>;

    l1MigratorAddr(overrides?: CallOverrides): Promise<string>;

    l1LPTGatewayAddr(overrides?: CallOverrides): Promise<string>;

    tokenAddr(overrides?: CallOverrides): Promise<string>;

    bridgeMint(
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setController(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setL1LPTGateway(
      _l1LPTGatewayAddr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawETHToL1Migrator(overrides?: CallOverrides): Promise<BigNumber>;

    setL1Migrator(
      _l1MigratorAddr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    depositETH(overrides?: CallOverrides): Promise<boolean>;

    controller(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    SetController(
      controller?: null
    ): TypedEventFilter<[string], { controller: string }>;

    ParameterUpdate(
      param?: null
    ): TypedEventFilter<[string], { param: string }>;
  };

  estimateGas: {
    setToken(
      _tokenAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    migrateToNewMinter(
      _newMinterAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getController(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawLPTToL1Migrator(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    l1MigratorAddr(overrides?: CallOverrides): Promise<BigNumber>;

    l1LPTGatewayAddr(overrides?: CallOverrides): Promise<BigNumber>;

    tokenAddr(overrides?: CallOverrides): Promise<BigNumber>;

    bridgeMint(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setController(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setL1LPTGateway(
      _l1LPTGatewayAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawETHToL1Migrator(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setL1Migrator(
      _l1MigratorAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositETH(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    setToken(
      _tokenAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    migrateToNewMinter(
      _newMinterAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getController(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawLPTToL1Migrator(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    l1MigratorAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    l1LPTGatewayAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bridgeMint(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setController(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setL1LPTGateway(
      _l1LPTGatewayAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawETHToL1Migrator(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setL1Migrator(
      _l1MigratorAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositETH(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
