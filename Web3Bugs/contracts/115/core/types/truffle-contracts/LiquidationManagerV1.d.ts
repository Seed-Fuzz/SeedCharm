/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import {EventData, PastEventOptions} from "web3-eth-contract";

export interface LiquidationManagerV1Contract
  extends Truffle.Contract<LiquidationManagerV1Instance> {
  "new"(
    _addresses: string,
    meta?: Truffle.TransactionDetails
  ): Promise<LiquidationManagerV1Instance>;
}

type AllEvents = never;

export interface LiquidationManagerV1Instance extends Truffle.ContractInstance {
  FULL_LIQUIDIATION_TRESHOLD(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  HEALTH_FACTOR_LIQUIDATION_THRESHOLD(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  a(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Check if the health factor is above or equal to 1.
   * @param _collateralType address of the collateral type
   * @param _collateralValue value of the collateral in stableX currency
   * @param _vaultDebt outstanding debt to which the collateral balance shall be compared
   */
  isHealthy(
    _collateralType: string,
    _collateralValue: number | BN | string,
    _vaultDebt: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  /**
   * Calculate the healthfactor of a debt balance
   * @param _collateralType address of the collateral type
   * @param _collateralValue value of the collateral in stableX currency
   * @param _vaultDebt outstanding debt to which the collateral balance shall be compared
   */
  calculateHealthFactor(
    _collateralType: string,
    _collateralValue: number | BN | string,
    _vaultDebt: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * Calculate the liquidation bonus for a specified amount
   * @param _amount amount for which the liquidation bonus shall be calculated
   */
  liquidationBonus(
    _amount: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * Apply the liquidation bonus to a balance as a discount.
   * @param _amount the balance on which to apply to liquidation bonus as a discount.
   */
  applyLiquidationDiscount(
    _amount: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  methods: {
    FULL_LIQUIDIATION_TRESHOLD(
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    HEALTH_FACTOR_LIQUIDATION_THRESHOLD(
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    a(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Check if the health factor is above or equal to 1.
     * @param _collateralType address of the collateral type
     * @param _collateralValue value of the collateral in stableX currency
     * @param _vaultDebt outstanding debt to which the collateral balance shall be compared
     */
    isHealthy(
      _collateralType: string,
      _collateralValue: number | BN | string,
      _vaultDebt: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    /**
     * Calculate the healthfactor of a debt balance
     * @param _collateralType address of the collateral type
     * @param _collateralValue value of the collateral in stableX currency
     * @param _vaultDebt outstanding debt to which the collateral balance shall be compared
     */
    calculateHealthFactor(
      _collateralType: string,
      _collateralValue: number | BN | string,
      _vaultDebt: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * Calculate the liquidation bonus for a specified amount
     * @param _amount amount for which the liquidation bonus shall be calculated
     */
    liquidationBonus(
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * Apply the liquidation bonus to a balance as a discount.
     * @param _amount the balance on which to apply to liquidation bonus as a discount.
     */
    applyLiquidationDiscount(
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
