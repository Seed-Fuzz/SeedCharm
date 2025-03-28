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

interface IJoinFactoryInterface extends ethers.utils.Interface {
  functions: {
    "createJoin(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "createJoin", values: [string]): string;

  decodeFunctionResult(functionFragment: "createJoin", data: BytesLike): Result;

  events: {
    "JoinCreated(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "JoinCreated"): EventFragment;
}

export class IJoinFactory extends Contract {
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

  interface: IJoinFactoryInterface;

  functions: {
    createJoin(
      asset: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createJoin(address)"(
      asset: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  createJoin(
    asset: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createJoin(address)"(
    asset: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    createJoin(asset: string, overrides?: CallOverrides): Promise<string>;

    "createJoin(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    JoinCreated(
      asset: string | null,
      pool: null
    ): TypedEventFilter<[string, string], { asset: string; pool: string }>;
  };

  estimateGas: {
    createJoin(asset: string, overrides?: Overrides): Promise<BigNumber>;

    "createJoin(address)"(
      asset: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createJoin(
      asset: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createJoin(address)"(
      asset: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
