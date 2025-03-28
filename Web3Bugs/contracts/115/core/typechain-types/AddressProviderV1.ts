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

export interface AddressProviderV1Interface extends ethers.utils.Interface {
  functions: {
    "config()": FunctionFragment;
    "controller()": FunctionFragment;
    "core()": FunctionFragment;
    "feeDistributor()": FunctionFragment;
    "liquidationManager()": FunctionFragment;
    "priceFeed()": FunctionFragment;
    "ratesManager()": FunctionFragment;
    "setAccessController(address)": FunctionFragment;
    "setConfigProvider(address)": FunctionFragment;
    "setFeeDistributor(address)": FunctionFragment;
    "setLiquidationManager(address)": FunctionFragment;
    "setPriceFeed(address)": FunctionFragment;
    "setRatesManager(address)": FunctionFragment;
    "setStableX(address)": FunctionFragment;
    "setVaultsCore(address)": FunctionFragment;
    "setVaultsDataProvider(address)": FunctionFragment;
    "stablex()": FunctionFragment;
    "vaultsData()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "config", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "core", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeDistributor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidationManager",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "priceFeed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ratesManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAccessController",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setConfigProvider",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeDistributor",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setLiquidationManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPriceFeed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRatesManager",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setStableX", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setVaultsCore",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setVaultsDataProvider",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "stablex", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "vaultsData",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "config", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "core", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeDistributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidationManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "priceFeed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ratesManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAccessController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setConfigProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeDistributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLiquidationManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriceFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRatesManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setStableX", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setVaultsCore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVaultsDataProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stablex", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vaultsData", data: BytesLike): Result;

  events: {};
}

export interface AddressProviderV1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AddressProviderV1Interface;

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
    config(overrides?: CallOverrides): Promise<[string]>;

    controller(overrides?: CallOverrides): Promise<[string]>;

    core(overrides?: CallOverrides): Promise<[string]>;

    feeDistributor(overrides?: CallOverrides): Promise<[string]>;

    liquidationManager(overrides?: CallOverrides): Promise<[string]>;

    priceFeed(overrides?: CallOverrides): Promise<[string]>;

    ratesManager(overrides?: CallOverrides): Promise<[string]>;

    setAccessController(
      _controller: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    setConfigProvider(
      _config: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    setFeeDistributor(
      _feeDistributor: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    setLiquidationManager(
      _liquidationManager: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    setPriceFeed(
      _priceFeed: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    setRatesManager(
      _ratesManager: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    setStableX(
      _stablex: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    setVaultsCore(
      _core: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    setVaultsDataProvider(
      _vaultsData: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    stablex(overrides?: CallOverrides): Promise<[string]>;

    vaultsData(overrides?: CallOverrides): Promise<[string]>;
  };

  config(overrides?: CallOverrides): Promise<string>;

  controller(overrides?: CallOverrides): Promise<string>;

  core(overrides?: CallOverrides): Promise<string>;

  feeDistributor(overrides?: CallOverrides): Promise<string>;

  liquidationManager(overrides?: CallOverrides): Promise<string>;

  priceFeed(overrides?: CallOverrides): Promise<string>;

  ratesManager(overrides?: CallOverrides): Promise<string>;

  setAccessController(
    _controller: string,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  setConfigProvider(
    _config: string,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  setFeeDistributor(
    _feeDistributor: string,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  setLiquidationManager(
    _liquidationManager: string,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  setPriceFeed(
    _priceFeed: string,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  setRatesManager(
    _ratesManager: string,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  setStableX(
    _stablex: string,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  setVaultsCore(
    _core: string,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  setVaultsDataProvider(
    _vaultsData: string,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  stablex(overrides?: CallOverrides): Promise<string>;

  vaultsData(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    config(overrides?: CallOverrides): Promise<string>;

    controller(overrides?: CallOverrides): Promise<string>;

    core(overrides?: CallOverrides): Promise<string>;

    feeDistributor(overrides?: CallOverrides): Promise<string>;

    liquidationManager(overrides?: CallOverrides): Promise<string>;

    priceFeed(overrides?: CallOverrides): Promise<string>;

    ratesManager(overrides?: CallOverrides): Promise<string>;

    setAccessController(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setConfigProvider(
      _config: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeeDistributor(
      _feeDistributor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setLiquidationManager(
      _liquidationManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPriceFeed(_priceFeed: string, overrides?: CallOverrides): Promise<void>;

    setRatesManager(
      _ratesManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setStableX(_stablex: string, overrides?: CallOverrides): Promise<void>;

    setVaultsCore(_core: string, overrides?: CallOverrides): Promise<void>;

    setVaultsDataProvider(
      _vaultsData: string,
      overrides?: CallOverrides
    ): Promise<void>;

    stablex(overrides?: CallOverrides): Promise<string>;

    vaultsData(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    config(overrides?: CallOverrides): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    core(overrides?: CallOverrides): Promise<BigNumber>;

    feeDistributor(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationManager(overrides?: CallOverrides): Promise<BigNumber>;

    priceFeed(overrides?: CallOverrides): Promise<BigNumber>;

    ratesManager(overrides?: CallOverrides): Promise<BigNumber>;

    setAccessController(
      _controller: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    setConfigProvider(
      _config: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    setFeeDistributor(
      _feeDistributor: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    setLiquidationManager(
      _liquidationManager: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    setPriceFeed(
      _priceFeed: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    setRatesManager(
      _ratesManager: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    setStableX(
      _stablex: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    setVaultsCore(
      _core: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    setVaultsDataProvider(
      _vaultsData: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    stablex(overrides?: CallOverrides): Promise<BigNumber>;

    vaultsData(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    config(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    core(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeDistributor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidationManager(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    priceFeed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ratesManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAccessController(
      _controller: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    setConfigProvider(
      _config: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    setFeeDistributor(
      _feeDistributor: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    setLiquidationManager(
      _liquidationManager: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    setPriceFeed(
      _priceFeed: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    setRatesManager(
      _ratesManager: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    setStableX(
      _stablex: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    setVaultsCore(
      _core: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    setVaultsDataProvider(
      _vaultsData: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    stablex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vaultsData(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
