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
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ICauldronInterface extends ethers.utils.Interface {
  functions: {
    "accrual(bytes6)": FunctionFragment;
    "assets(bytes6)": FunctionFragment;
    "auctions(bytes12)": FunctionFragment;
    "balances(bytes12)": FunctionFragment;
    "build(address,bytes12,bytes6,bytes6)": FunctionFragment;
    "destroy(bytes12)": FunctionFragment;
    "give(bytes12,address)": FunctionFragment;
    "grab(bytes12,address)": FunctionFragment;
    "mature(bytes6)": FunctionFragment;
    "pour(bytes12,int128,int128)": FunctionFragment;
    "rateOracles(bytes6)": FunctionFragment;
    "roll(bytes12,bytes6,int128)": FunctionFragment;
    "series(bytes6)": FunctionFragment;
    "slurp(bytes12,uint128,uint128)": FunctionFragment;
    "stir(bytes12,bytes12,uint128,uint128)": FunctionFragment;
    "tweak(bytes12,bytes6,bytes6)": FunctionFragment;
    "vaults(bytes12)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "accrual", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "assets", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "auctions", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "balances", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "build",
    values: [string, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "destroy", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "give",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "grab",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "mature", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "pour",
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rateOracles",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "roll",
    values: [BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "series", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "slurp",
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stir",
    values: [BytesLike, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tweak",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "vaults", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "accrual", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "assets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "auctions", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "build", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "destroy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "give", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "grab", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mature", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pour", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rateOracles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "roll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "series", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "slurp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stir", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tweak", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vaults", data: BytesLike): Result;

  events: {};
}

export class ICauldron extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  listeners<T, G>(
    eventFilter?: TypedEventFilter<T, G>
  ): Array<TypedListener<T, G>>;
  off<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  on<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  once<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeListener<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeAllListeners<T, G>(eventFilter: TypedEventFilter<T, G>): this;

  queryFilter<T, G>(
    event: TypedEventFilter<T, G>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<T & G>>>;

  interface: ICauldronInterface;

  functions: {
    accrual(
      seriesId: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "accrual(bytes6)"(
      seriesId: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    assets(assetsId: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    "assets(bytes6)"(
      assetsId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    auctions(vault: BytesLike, overrides?: CallOverrides): Promise<[number]>;

    "auctions(bytes12)"(
      vault: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number]>;

    balances(
      vault: BytesLike,
      overrides?: CallOverrides
    ): Promise<[[BigNumber, BigNumber] & { art: BigNumber; ink: BigNumber }]>;

    "balances(bytes12)"(
      vault: BytesLike,
      overrides?: CallOverrides
    ): Promise<[[BigNumber, BigNumber] & { art: BigNumber; ink: BigNumber }]>;

    build(
      owner: string,
      vaultId: BytesLike,
      seriesId: BytesLike,
      ilkId: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "build(address,bytes12,bytes6,bytes6)"(
      owner: string,
      vaultId: BytesLike,
      seriesId: BytesLike,
      ilkId: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    destroy(
      vault: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "destroy(bytes12)"(
      vault: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    give(
      vaultId: BytesLike,
      receiver: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "give(bytes12,address)"(
      vaultId: BytesLike,
      receiver: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    grab(
      vault: BytesLike,
      receiver: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "grab(bytes12,address)"(
      vault: BytesLike,
      receiver: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    mature(
      seriesId: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mature(bytes6)"(
      seriesId: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    pour(
      vaultId: BytesLike,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "pour(bytes12,int128,int128)"(
      vaultId: BytesLike,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    rateOracles(
      baseId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "rateOracles(bytes6)"(
      baseId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    roll(
      vaultId: BytesLike,
      seriesId: BytesLike,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "roll(bytes12,bytes6,int128)"(
      vaultId: BytesLike,
      seriesId: BytesLike,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    series(
      seriesId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, string, number] & {
          fyToken: string;
          baseId: string;
          maturity: number;
        }
      ]
    >;

    "series(bytes6)"(
      seriesId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, string, number] & {
          fyToken: string;
          baseId: string;
          maturity: number;
        }
      ]
    >;

    slurp(
      vaultId: BytesLike,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "slurp(bytes12,uint128,uint128)"(
      vaultId: BytesLike,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    stir(
      from: BytesLike,
      to: BytesLike,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "stir(bytes12,bytes12,uint128,uint128)"(
      from: BytesLike,
      to: BytesLike,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    tweak(
      vaultId: BytesLike,
      seriesId: BytesLike,
      ilkId: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "tweak(bytes12,bytes6,bytes6)"(
      vaultId: BytesLike,
      seriesId: BytesLike,
      ilkId: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    vaults(
      vault: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, string, string] & {
          owner: string;
          seriesId: string;
          ilkId: string;
        }
      ]
    >;

    "vaults(bytes12)"(
      vault: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, string, string] & {
          owner: string;
          seriesId: string;
          ilkId: string;
        }
      ]
    >;
  };

  accrual(
    seriesId: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "accrual(bytes6)"(
    seriesId: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  assets(assetsId: BytesLike, overrides?: CallOverrides): Promise<string>;

  "assets(bytes6)"(
    assetsId: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  auctions(vault: BytesLike, overrides?: CallOverrides): Promise<number>;

  "auctions(bytes12)"(
    vault: BytesLike,
    overrides?: CallOverrides
  ): Promise<number>;

  balances(
    vault: BytesLike,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { art: BigNumber; ink: BigNumber }>;

  "balances(bytes12)"(
    vault: BytesLike,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { art: BigNumber; ink: BigNumber }>;

  build(
    owner: string,
    vaultId: BytesLike,
    seriesId: BytesLike,
    ilkId: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "build(address,bytes12,bytes6,bytes6)"(
    owner: string,
    vaultId: BytesLike,
    seriesId: BytesLike,
    ilkId: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  destroy(
    vault: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "destroy(bytes12)"(
    vault: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  give(
    vaultId: BytesLike,
    receiver: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "give(bytes12,address)"(
    vaultId: BytesLike,
    receiver: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  grab(
    vault: BytesLike,
    receiver: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "grab(bytes12,address)"(
    vault: BytesLike,
    receiver: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  mature(
    seriesId: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mature(bytes6)"(
    seriesId: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  pour(
    vaultId: BytesLike,
    ink: BigNumberish,
    art: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "pour(bytes12,int128,int128)"(
    vaultId: BytesLike,
    ink: BigNumberish,
    art: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  rateOracles(baseId: BytesLike, overrides?: CallOverrides): Promise<string>;

  "rateOracles(bytes6)"(
    baseId: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  roll(
    vaultId: BytesLike,
    seriesId: BytesLike,
    art: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "roll(bytes12,bytes6,int128)"(
    vaultId: BytesLike,
    seriesId: BytesLike,
    art: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  series(
    seriesId: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, string, number] & {
      fyToken: string;
      baseId: string;
      maturity: number;
    }
  >;

  "series(bytes6)"(
    seriesId: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, string, number] & {
      fyToken: string;
      baseId: string;
      maturity: number;
    }
  >;

  slurp(
    vaultId: BytesLike,
    ink: BigNumberish,
    art: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "slurp(bytes12,uint128,uint128)"(
    vaultId: BytesLike,
    ink: BigNumberish,
    art: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  stir(
    from: BytesLike,
    to: BytesLike,
    ink: BigNumberish,
    art: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "stir(bytes12,bytes12,uint128,uint128)"(
    from: BytesLike,
    to: BytesLike,
    ink: BigNumberish,
    art: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  tweak(
    vaultId: BytesLike,
    seriesId: BytesLike,
    ilkId: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "tweak(bytes12,bytes6,bytes6)"(
    vaultId: BytesLike,
    seriesId: BytesLike,
    ilkId: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  vaults(
    vault: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string] & {
      owner: string;
      seriesId: string;
      ilkId: string;
    }
  >;

  "vaults(bytes12)"(
    vault: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string] & {
      owner: string;
      seriesId: string;
      ilkId: string;
    }
  >;

  callStatic: {
    accrual(seriesId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "accrual(bytes6)"(
      seriesId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    assets(assetsId: BytesLike, overrides?: CallOverrides): Promise<string>;

    "assets(bytes6)"(
      assetsId: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    auctions(vault: BytesLike, overrides?: CallOverrides): Promise<number>;

    "auctions(bytes12)"(
      vault: BytesLike,
      overrides?: CallOverrides
    ): Promise<number>;

    balances(
      vault: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { art: BigNumber; ink: BigNumber }>;

    "balances(bytes12)"(
      vault: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { art: BigNumber; ink: BigNumber }>;

    build(
      owner: string,
      vaultId: BytesLike,
      seriesId: BytesLike,
      ilkId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        owner: string;
        seriesId: string;
        ilkId: string;
      }
    >;

    "build(address,bytes12,bytes6,bytes6)"(
      owner: string,
      vaultId: BytesLike,
      seriesId: BytesLike,
      ilkId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        owner: string;
        seriesId: string;
        ilkId: string;
      }
    >;

    destroy(vault: BytesLike, overrides?: CallOverrides): Promise<void>;

    "destroy(bytes12)"(
      vault: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    give(
      vaultId: BytesLike,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        owner: string;
        seriesId: string;
        ilkId: string;
      }
    >;

    "give(bytes12,address)"(
      vaultId: BytesLike,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        owner: string;
        seriesId: string;
        ilkId: string;
      }
    >;

    grab(
      vault: BytesLike,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "grab(bytes12,address)"(
      vault: BytesLike,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    mature(seriesId: BytesLike, overrides?: CallOverrides): Promise<void>;

    "mature(bytes6)"(
      seriesId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    pour(
      vaultId: BytesLike,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { art: BigNumber; ink: BigNumber }>;

    "pour(bytes12,int128,int128)"(
      vaultId: BytesLike,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { art: BigNumber; ink: BigNumber }>;

    rateOracles(baseId: BytesLike, overrides?: CallOverrides): Promise<string>;

    "rateOracles(bytes6)"(
      baseId: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    roll(
      vaultId: BytesLike,
      seriesId: BytesLike,
      art: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, string, string] & {
          owner: string;
          seriesId: string;
          ilkId: string;
        },
        [BigNumber, BigNumber] & { art: BigNumber; ink: BigNumber }
      ]
    >;

    "roll(bytes12,bytes6,int128)"(
      vaultId: BytesLike,
      seriesId: BytesLike,
      art: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, string, string] & {
          owner: string;
          seriesId: string;
          ilkId: string;
        },
        [BigNumber, BigNumber] & { art: BigNumber; ink: BigNumber }
      ]
    >;

    series(
      seriesId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, number] & {
        fyToken: string;
        baseId: string;
        maturity: number;
      }
    >;

    "series(bytes6)"(
      seriesId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, number] & {
        fyToken: string;
        baseId: string;
        maturity: number;
      }
    >;

    slurp(
      vaultId: BytesLike,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { art: BigNumber; ink: BigNumber }>;

    "slurp(bytes12,uint128,uint128)"(
      vaultId: BytesLike,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { art: BigNumber; ink: BigNumber }>;

    stir(
      from: BytesLike,
      to: BytesLike,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber] & { art: BigNumber; ink: BigNumber },
        [BigNumber, BigNumber] & { art: BigNumber; ink: BigNumber }
      ]
    >;

    "stir(bytes12,bytes12,uint128,uint128)"(
      from: BytesLike,
      to: BytesLike,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber] & { art: BigNumber; ink: BigNumber },
        [BigNumber, BigNumber] & { art: BigNumber; ink: BigNumber }
      ]
    >;

    tweak(
      vaultId: BytesLike,
      seriesId: BytesLike,
      ilkId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        owner: string;
        seriesId: string;
        ilkId: string;
      }
    >;

    "tweak(bytes12,bytes6,bytes6)"(
      vaultId: BytesLike,
      seriesId: BytesLike,
      ilkId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        owner: string;
        seriesId: string;
        ilkId: string;
      }
    >;

    vaults(
      vault: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        owner: string;
        seriesId: string;
        ilkId: string;
      }
    >;

    "vaults(bytes12)"(
      vault: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        owner: string;
        seriesId: string;
        ilkId: string;
      }
    >;
  };

  filters: {};

  estimateGas: {
    accrual(seriesId: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    "accrual(bytes6)"(
      seriesId: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    assets(assetsId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "assets(bytes6)"(
      assetsId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    auctions(vault: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "auctions(bytes12)"(
      vault: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balances(vault: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "balances(bytes12)"(
      vault: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    build(
      owner: string,
      vaultId: BytesLike,
      seriesId: BytesLike,
      ilkId: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "build(address,bytes12,bytes6,bytes6)"(
      owner: string,
      vaultId: BytesLike,
      seriesId: BytesLike,
      ilkId: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    destroy(vault: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    "destroy(bytes12)"(
      vault: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    give(
      vaultId: BytesLike,
      receiver: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "give(bytes12,address)"(
      vaultId: BytesLike,
      receiver: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    grab(
      vault: BytesLike,
      receiver: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "grab(bytes12,address)"(
      vault: BytesLike,
      receiver: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    mature(seriesId: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    "mature(bytes6)"(
      seriesId: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    pour(
      vaultId: BytesLike,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "pour(bytes12,int128,int128)"(
      vaultId: BytesLike,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    rateOracles(
      baseId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "rateOracles(bytes6)"(
      baseId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    roll(
      vaultId: BytesLike,
      seriesId: BytesLike,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "roll(bytes12,bytes6,int128)"(
      vaultId: BytesLike,
      seriesId: BytesLike,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    series(seriesId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "series(bytes6)"(
      seriesId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    slurp(
      vaultId: BytesLike,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "slurp(bytes12,uint128,uint128)"(
      vaultId: BytesLike,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    stir(
      from: BytesLike,
      to: BytesLike,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "stir(bytes12,bytes12,uint128,uint128)"(
      from: BytesLike,
      to: BytesLike,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    tweak(
      vaultId: BytesLike,
      seriesId: BytesLike,
      ilkId: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "tweak(bytes12,bytes6,bytes6)"(
      vaultId: BytesLike,
      seriesId: BytesLike,
      ilkId: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    vaults(vault: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "vaults(bytes12)"(
      vault: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accrual(
      seriesId: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "accrual(bytes6)"(
      seriesId: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    assets(
      assetsId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "assets(bytes6)"(
      assetsId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    auctions(
      vault: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "auctions(bytes12)"(
      vault: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balances(
      vault: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balances(bytes12)"(
      vault: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    build(
      owner: string,
      vaultId: BytesLike,
      seriesId: BytesLike,
      ilkId: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "build(address,bytes12,bytes6,bytes6)"(
      owner: string,
      vaultId: BytesLike,
      seriesId: BytesLike,
      ilkId: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    destroy(
      vault: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "destroy(bytes12)"(
      vault: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    give(
      vaultId: BytesLike,
      receiver: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "give(bytes12,address)"(
      vaultId: BytesLike,
      receiver: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    grab(
      vault: BytesLike,
      receiver: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "grab(bytes12,address)"(
      vault: BytesLike,
      receiver: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    mature(
      seriesId: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mature(bytes6)"(
      seriesId: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    pour(
      vaultId: BytesLike,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "pour(bytes12,int128,int128)"(
      vaultId: BytesLike,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    rateOracles(
      baseId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "rateOracles(bytes6)"(
      baseId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    roll(
      vaultId: BytesLike,
      seriesId: BytesLike,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "roll(bytes12,bytes6,int128)"(
      vaultId: BytesLike,
      seriesId: BytesLike,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    series(
      seriesId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "series(bytes6)"(
      seriesId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    slurp(
      vaultId: BytesLike,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "slurp(bytes12,uint128,uint128)"(
      vaultId: BytesLike,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    stir(
      from: BytesLike,
      to: BytesLike,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "stir(bytes12,bytes12,uint128,uint128)"(
      from: BytesLike,
      to: BytesLike,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    tweak(
      vaultId: BytesLike,
      seriesId: BytesLike,
      ilkId: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "tweak(bytes12,bytes6,bytes6)"(
      vaultId: BytesLike,
      seriesId: BytesLike,
      ilkId: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    vaults(
      vault: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "vaults(bytes12)"(
      vault: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
