/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import {EventData, PastEventOptions} from "web3-eth-contract";

export interface IInceptionVaultFactoryContract
  extends Truffle.Contract<IInceptionVaultFactoryInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<IInceptionVaultFactoryInstance>;
}

export interface InceptionVaultDeployed {
  name: "InceptionVaultDeployed";
  args: {
    owner: string;
    adminInceptionVault: string;
    inceptionVaultsCore: string;
    inceptionVaultsDataProvider: string;
    inceptionVaultPriceFeed: string;
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
  };
}

export interface PriceFeedAdded {
  name: "PriceFeedAdded";
  args: {
    _id: BN;
    _address: string;
    0: BN;
    1: string;
  };
}

type AllEvents = InceptionVaultDeployed | PriceFeedAdded;

export interface IInceptionVaultFactoryInstance
  extends Truffle.ContractInstance {
  cloneInceptionVault: {
    (
      _vaultConfig: {
        liquidationRatio: number | BN | string;
        minCollateralRatio: number | BN | string;
        borrowRate: number | BN | string;
        originationFee: number | BN | string;
        liquidationBonus: number | BN | string;
        liquidationFee: number | BN | string;
      },
      _inceptionCollateral: string,
      _inceptionVaultPriceFeed: string,
      _assetOracle: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _vaultConfig: {
        liquidationRatio: number | BN | string;
        minCollateralRatio: number | BN | string;
        borrowRate: number | BN | string;
        originationFee: number | BN | string;
        liquidationBonus: number | BN | string;
        liquidationFee: number | BN | string;
      },
      _inceptionCollateral: string,
      _inceptionVaultPriceFeed: string,
      _assetOracle: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _vaultConfig: {
        liquidationRatio: number | BN | string;
        minCollateralRatio: number | BN | string;
        borrowRate: number | BN | string;
        originationFee: number | BN | string;
        liquidationBonus: number | BN | string;
        liquidationFee: number | BN | string;
      },
      _inceptionCollateral: string,
      _inceptionVaultPriceFeed: string,
      _assetOracle: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _vaultConfig: {
        liquidationRatio: number | BN | string;
        minCollateralRatio: number | BN | string;
        borrowRate: number | BN | string;
        originationFee: number | BN | string;
        liquidationBonus: number | BN | string;
        liquidationFee: number | BN | string;
      },
      _inceptionCollateral: string,
      _inceptionVaultPriceFeed: string,
      _assetOracle: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  addPriceFeed: {
    (_address: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _address: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _address: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _address: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  a(txDetails?: Truffle.TransactionDetails): Promise<string>;

  debtNotifier(txDetails?: Truffle.TransactionDetails): Promise<string>;

  weth(txDetails?: Truffle.TransactionDetails): Promise<string>;

  mimo(txDetails?: Truffle.TransactionDetails): Promise<string>;

  adminInceptionVaultBase(
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  inceptionVaultsCoreBase(
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  inceptionVaultsDataProviderBase(
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  inceptionVaultCount(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  priceFeedCount(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  inceptionVaults(
    _id: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{
    owner: string;
    adminInceptionVault: string;
    inceptionVaultsCore: string;
    inceptionVaultsDataProvider: string;
    inceptionVaultPriceFeed: string;
    isCustomPriceFeed: boolean;
  }>;

  priceFeeds(
    _id: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  priceFeedIds(
    _priceFeed: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  methods: {
    cloneInceptionVault: {
      (
        _vaultConfig: {
          liquidationRatio: number | BN | string;
          minCollateralRatio: number | BN | string;
          borrowRate: number | BN | string;
          originationFee: number | BN | string;
          liquidationBonus: number | BN | string;
          liquidationFee: number | BN | string;
        },
        _inceptionCollateral: string,
        _inceptionVaultPriceFeed: string,
        _assetOracle: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _vaultConfig: {
          liquidationRatio: number | BN | string;
          minCollateralRatio: number | BN | string;
          borrowRate: number | BN | string;
          originationFee: number | BN | string;
          liquidationBonus: number | BN | string;
          liquidationFee: number | BN | string;
        },
        _inceptionCollateral: string,
        _inceptionVaultPriceFeed: string,
        _assetOracle: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _vaultConfig: {
          liquidationRatio: number | BN | string;
          minCollateralRatio: number | BN | string;
          borrowRate: number | BN | string;
          originationFee: number | BN | string;
          liquidationBonus: number | BN | string;
          liquidationFee: number | BN | string;
        },
        _inceptionCollateral: string,
        _inceptionVaultPriceFeed: string,
        _assetOracle: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _vaultConfig: {
          liquidationRatio: number | BN | string;
          minCollateralRatio: number | BN | string;
          borrowRate: number | BN | string;
          originationFee: number | BN | string;
          liquidationBonus: number | BN | string;
          liquidationFee: number | BN | string;
        },
        _inceptionCollateral: string,
        _inceptionVaultPriceFeed: string,
        _assetOracle: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    addPriceFeed: {
      (_address: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _address: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _address: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _address: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    a(txDetails?: Truffle.TransactionDetails): Promise<string>;

    debtNotifier(txDetails?: Truffle.TransactionDetails): Promise<string>;

    weth(txDetails?: Truffle.TransactionDetails): Promise<string>;

    mimo(txDetails?: Truffle.TransactionDetails): Promise<string>;

    adminInceptionVaultBase(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    inceptionVaultsCoreBase(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    inceptionVaultsDataProviderBase(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    inceptionVaultCount(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    priceFeedCount(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    inceptionVaults(
      _id: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{
      owner: string;
      adminInceptionVault: string;
      inceptionVaultsCore: string;
      inceptionVaultsDataProvider: string;
      inceptionVaultPriceFeed: string;
      isCustomPriceFeed: boolean;
    }>;

    priceFeeds(
      _id: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    priceFeedIds(
      _priceFeed: string,
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
