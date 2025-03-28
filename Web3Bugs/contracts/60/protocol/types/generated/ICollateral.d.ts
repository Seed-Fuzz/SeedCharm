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

interface ICollateralInterface extends ethers.utils.Interface {
  functions: {
    "claimFee()": FunctionFragment;
    "collateral(address)": FunctionFragment;
    "depositTo(address,address,uint256)": FunctionFragment;
    "fees(address)": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "liquidatable(address,address)": FunctionFragment;
    "liquidatableNext(address,address)": FunctionFragment;
    "liquidate(address,address)": FunctionFragment;
    "liquidationFee()": FunctionFragment;
    "resolveShortfall(address,uint256)": FunctionFragment;
    "settleAccount(address,int256)": FunctionFragment;
    "settleProduct(uint256)": FunctionFragment;
    "shortfall(address)": FunctionFragment;
    "token()": FunctionFragment;
    "updateLiquidationFee(uint256)": FunctionFragment;
    "withdrawTo(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "claimFee", values?: undefined): string;
  encodeFunctionData(functionFragment: "collateral", values: [string]): string;
  encodeFunctionData(
    functionFragment: "depositTo",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "fees", values: [string]): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidatable",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidatableNext",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidate",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidationFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "resolveShortfall",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "settleAccount",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "settleProduct",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "shortfall", values: [string]): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateLiquidationFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawTo",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "claimFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "collateral", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liquidatable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidatableNext",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "liquidate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liquidationFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resolveShortfall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settleAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settleProduct",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "shortfall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateLiquidationFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdrawTo", data: BytesLike): Result;

  events: {
    "AccountSettle(address,address,int256,uint256)": EventFragment;
    "Deposit(address,address,uint256)": EventFragment;
    "FeeClaim(address,uint256)": EventFragment;
    "Liquidation(address,address,address,uint256)": EventFragment;
    "LiquidationFeeUpdated(uint256)": EventFragment;
    "ProductSettle(address,uint256,uint256)": EventFragment;
    "ShortfallResolution(address,uint256)": EventFragment;
    "Withdrawal(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AccountSettle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeClaim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Liquidation"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidationFeeUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProductSettle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ShortfallResolution"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawal"): EventFragment;
}

export type AccountSettleEvent = TypedEvent<
  [string, string, BigNumber, BigNumber] & {
    product: string;
    account: string;
    amount: BigNumber;
    newShortfall: BigNumber;
  }
>;

export type DepositEvent = TypedEvent<
  [string, string, BigNumber] & {
    user: string;
    product: string;
    amount: BigNumber;
  }
>;

export type FeeClaimEvent = TypedEvent<
  [string, BigNumber] & { account: string; amount: BigNumber }
>;

export type LiquidationEvent = TypedEvent<
  [string, string, string, BigNumber] & {
    user: string;
    product: string;
    liquidator: string;
    fee: BigNumber;
  }
>;

export type LiquidationFeeUpdatedEvent = TypedEvent<
  [BigNumber] & { newLiquidationFeeUpdated: BigNumber }
>;

export type ProductSettleEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    product: string;
    protocolFee: BigNumber;
    productFee: BigNumber;
  }
>;

export type ShortfallResolutionEvent = TypedEvent<
  [string, BigNumber] & { product: string; amount: BigNumber }
>;

export type WithdrawalEvent = TypedEvent<
  [string, string, BigNumber] & {
    user: string;
    product: string;
    amount: BigNumber;
  }
>;

export class ICollateral extends BaseContract {
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

  interface: ICollateralInterface;

  functions: {
    claimFee(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "collateral(address)"(
      product: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "collateral(address,address)"(
      account: string,
      product: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    depositTo(
      account: string,
      product: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fees(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      factory_: string,
      token_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidatable(
      account: string,
      product: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    liquidatableNext(
      account: string,
      product: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    liquidate(
      account: string,
      product: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidationFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    resolveShortfall(
      product: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    settleAccount(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    settleProduct(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    shortfall(product: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    updateLiquidationFee(
      newLiquidationFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawTo(
      account: string,
      product: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  claimFee(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "collateral(address)"(
    product: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "collateral(address,address)"(
    account: string,
    product: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  depositTo(
    account: string,
    product: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fees(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    factory_: string,
    token_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidatable(
    account: string,
    product: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  liquidatableNext(
    account: string,
    product: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  liquidate(
    account: string,
    product: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidationFee(overrides?: CallOverrides): Promise<BigNumber>;

  resolveShortfall(
    product: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  settleAccount(
    account: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  settleProduct(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  shortfall(product: string, overrides?: CallOverrides): Promise<BigNumber>;

  token(overrides?: CallOverrides): Promise<string>;

  updateLiquidationFee(
    newLiquidationFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawTo(
    account: string,
    product: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    claimFee(overrides?: CallOverrides): Promise<void>;

    "collateral(address)"(
      product: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "collateral(address,address)"(
      account: string,
      product: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositTo(
      account: string,
      product: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    fees(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      factory_: string,
      token_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidatable(
      account: string,
      product: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    liquidatableNext(
      account: string,
      product: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    liquidate(
      account: string,
      product: string,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidationFee(overrides?: CallOverrides): Promise<BigNumber>;

    resolveShortfall(
      product: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    settleAccount(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    settleProduct(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    shortfall(product: string, overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;

    updateLiquidationFee(
      newLiquidationFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawTo(
      account: string,
      product: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AccountSettle(address,address,int256,uint256)"(
      product?: string | null,
      account?: string | null,
      amount?: null,
      newShortfall?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        product: string;
        account: string;
        amount: BigNumber;
        newShortfall: BigNumber;
      }
    >;

    AccountSettle(
      product?: string | null,
      account?: string | null,
      amount?: null,
      newShortfall?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        product: string;
        account: string;
        amount: BigNumber;
        newShortfall: BigNumber;
      }
    >;

    "Deposit(address,address,uint256)"(
      user?: string | null,
      product?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { user: string; product: string; amount: BigNumber }
    >;

    Deposit(
      user?: string | null,
      product?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { user: string; product: string; amount: BigNumber }
    >;

    "FeeClaim(address,uint256)"(
      account?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; amount: BigNumber }
    >;

    FeeClaim(
      account?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; amount: BigNumber }
    >;

    "Liquidation(address,address,address,uint256)"(
      user?: string | null,
      product?: string | null,
      liquidator?: null,
      fee?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { user: string; product: string; liquidator: string; fee: BigNumber }
    >;

    Liquidation(
      user?: string | null,
      product?: string | null,
      liquidator?: null,
      fee?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { user: string; product: string; liquidator: string; fee: BigNumber }
    >;

    "LiquidationFeeUpdated(uint256)"(
      newLiquidationFeeUpdated?: null
    ): TypedEventFilter<[BigNumber], { newLiquidationFeeUpdated: BigNumber }>;

    LiquidationFeeUpdated(
      newLiquidationFeeUpdated?: null
    ): TypedEventFilter<[BigNumber], { newLiquidationFeeUpdated: BigNumber }>;

    "ProductSettle(address,uint256,uint256)"(
      product?: string | null,
      protocolFee?: null,
      productFee?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { product: string; protocolFee: BigNumber; productFee: BigNumber }
    >;

    ProductSettle(
      product?: string | null,
      protocolFee?: null,
      productFee?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { product: string; protocolFee: BigNumber; productFee: BigNumber }
    >;

    "ShortfallResolution(address,uint256)"(
      product?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { product: string; amount: BigNumber }
    >;

    ShortfallResolution(
      product?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { product: string; amount: BigNumber }
    >;

    "Withdrawal(address,address,uint256)"(
      user?: string | null,
      product?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { user: string; product: string; amount: BigNumber }
    >;

    Withdrawal(
      user?: string | null,
      product?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { user: string; product: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    claimFee(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "collateral(address)"(
      product: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "collateral(address,address)"(
      account: string,
      product: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositTo(
      account: string,
      product: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fees(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      factory_: string,
      token_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidatable(
      account: string,
      product: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidatableNext(
      account: string,
      product: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidate(
      account: string,
      product: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidationFee(overrides?: CallOverrides): Promise<BigNumber>;

    resolveShortfall(
      product: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    settleAccount(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    settleProduct(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    shortfall(product: string, overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    updateLiquidationFee(
      newLiquidationFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawTo(
      account: string,
      product: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claimFee(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "collateral(address)"(
      product: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "collateral(address,address)"(
      account: string,
      product: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    depositTo(
      account: string,
      product: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fees(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      factory_: string,
      token_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidatable(
      account: string,
      product: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidatableNext(
      account: string,
      product: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidate(
      account: string,
      product: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidationFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    resolveShortfall(
      product: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    settleAccount(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    settleProduct(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    shortfall(
      product: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateLiquidationFee(
      newLiquidationFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawTo(
      account: string,
      product: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
