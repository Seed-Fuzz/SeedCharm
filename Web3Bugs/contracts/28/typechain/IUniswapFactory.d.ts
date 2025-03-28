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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IUniswapFactoryInterface extends ethers.utils.Interface {
  functions: {
    "getPair(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getPair",
    values: [string, string]
  ): string;

  decodeFunctionResult(functionFragment: "getPair", data: BytesLike): Result;

  events: {};
}

export class IUniswapFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IUniswapFactoryInterface;

  functions: {
    getPair(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getPair(address,address)"(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  getPair(
    token0: string,
    token1: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "getPair(address,address)"(
    token0: string,
    token1: string,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    getPair(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "getPair(address,address)"(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getPair(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPair(address,address)"(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getPair(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPair(address,address)"(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
