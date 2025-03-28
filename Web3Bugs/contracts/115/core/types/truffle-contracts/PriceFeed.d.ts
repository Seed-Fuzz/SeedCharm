/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import {EventData, PastEventOptions} from "web3-eth-contract";

export interface PriceFeedContract extends Truffle.Contract<PriceFeedInstance> {
  "new"(
    _addresses: string,
    meta?: Truffle.TransactionDetails
  ): Promise<PriceFeedInstance>;
}

export interface EurOracleUpdated {
  name: "EurOracleUpdated";
  args: {
    oracle: string;
    sender: string;
    0: string;
    1: string;
  };
}

export interface OracleUpdated {
  name: "OracleUpdated";
  args: {
    asset: string;
    oracle: string;
    sender: string;
    0: string;
    1: string;
    2: string;
  };
}

type AllEvents = EurOracleUpdated | OracleUpdated;

export interface PriceFeedInstance extends Truffle.ContractInstance {
  PRICE_ORACLE_STALE_THRESHOLD(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  a(txDetails?: Truffle.TransactionDetails): Promise<string>;

  assetOracles(
    arg0: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  eurOracle(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Sets the oracle for the given asset,
   * @param _asset address to the collateral asset e.g. WETH
   * @param _oracle address to the oracel, this oracle should implement the AggregatorV3Interface
   */
  setAssetOracle: {
    (
      _asset: string,
      _oracle: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _asset: string,
      _oracle: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _asset: string,
      _oracle: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _asset: string,
      _oracle: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Sets the oracle for EUR, this oracle should provide EUR-USD prices
   * @param _oracle address to the oracle, this oracle should implement the AggregatorV3Interface
   */
  setEurOracle: {
    (_oracle: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _oracle: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _oracle: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _oracle: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * returned value has matching decimals to the asset oracle (not the EUR oracle)
   * Gets the asset price in EUR (PAR)
   * @param _asset address to the collateral asset e.g. WETH
   */
  getAssetPrice(
    _asset: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * Converts asset balance into stablecoin balance at current price
   * @param _amount amount of collateral
   * @param _asset address to the collateral asset e.g. WETH
   */
  convertFrom(
    _asset: string,
    _amount: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * Converts stablecoin balance into collateral balance at current price
   * @param _amount amount of stablecoin
   * @param _asset address to the collateral asset e.g. WETH
   */
  convertTo(
    _asset: string,
    _amount: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  methods: {
    PRICE_ORACLE_STALE_THRESHOLD(
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    a(txDetails?: Truffle.TransactionDetails): Promise<string>;

    assetOracles(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    eurOracle(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Sets the oracle for the given asset,
     * @param _asset address to the collateral asset e.g. WETH
     * @param _oracle address to the oracel, this oracle should implement the AggregatorV3Interface
     */
    setAssetOracle: {
      (
        _asset: string,
        _oracle: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _asset: string,
        _oracle: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _asset: string,
        _oracle: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _asset: string,
        _oracle: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Sets the oracle for EUR, this oracle should provide EUR-USD prices
     * @param _oracle address to the oracle, this oracle should implement the AggregatorV3Interface
     */
    setEurOracle: {
      (_oracle: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _oracle: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _oracle: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _oracle: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * returned value has matching decimals to the asset oracle (not the EUR oracle)
     * Gets the asset price in EUR (PAR)
     * @param _asset address to the collateral asset e.g. WETH
     */
    getAssetPrice(
      _asset: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * Converts asset balance into stablecoin balance at current price
     * @param _amount amount of collateral
     * @param _asset address to the collateral asset e.g. WETH
     */
    convertFrom(
      _asset: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * Converts stablecoin balance into collateral balance at current price
     * @param _amount amount of stablecoin
     * @param _asset address to the collateral asset e.g. WETH
     */
    convertTo(
      _asset: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
