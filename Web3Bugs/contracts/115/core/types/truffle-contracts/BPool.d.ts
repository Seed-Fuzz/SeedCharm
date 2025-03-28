/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import {EventData, PastEventOptions} from "web3-eth-contract";

export interface BPoolContract extends Truffle.Contract<BPoolInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<BPoolInstance>;
}

export interface Approval {
  name: "Approval";
  args: {
    owner: string;
    spender: string;
    value: BN;
    0: string;
    1: string;
    2: BN;
  };
}

export interface Transfer {
  name: "Transfer";
  args: {
    from: string;
    to: string;
    value: BN;
    0: string;
    1: string;
    2: BN;
  };
}

type AllEvents = Approval | Transfer;

export interface BPoolInstance extends Truffle.ContractInstance {
  /**
   * Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.
   */
  allowance(
    owner: string,
    spender: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event.
   */
  approve: {
    (
      spender: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      spender: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      spender: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      spender: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Returns the amount of tokens owned by `account`.
   */
  balanceOf(
    account: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * Returns the amount of tokens in existence.
   */
  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * Moves `amount` tokens from the caller's account to `recipient`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.
   */
  transfer: {
    (
      recipient: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      recipient: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      recipient: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      recipient: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.
   */
  transferFrom: {
    (
      sender: string,
      recipient: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      sender: string,
      recipient: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      sender: string,
      recipient: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      sender: string,
      recipient: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  gulp: {
    (token: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(token: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      token: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      token: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  joinPool: {
    (
      poolAmountOut: number | BN | string,
      maxAmountsIn: (number | BN | string)[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      poolAmountOut: number | BN | string,
      maxAmountsIn: (number | BN | string)[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      poolAmountOut: number | BN | string,
      maxAmountsIn: (number | BN | string)[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      poolAmountOut: number | BN | string,
      maxAmountsIn: (number | BN | string)[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  exitPool: {
    (
      poolAmountIn: number | BN | string,
      minAmountsOut: (number | BN | string)[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      poolAmountIn: number | BN | string,
      minAmountsOut: (number | BN | string)[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      poolAmountIn: number | BN | string,
      minAmountsOut: (number | BN | string)[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      poolAmountIn: number | BN | string,
      minAmountsOut: (number | BN | string)[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  swapExactAmountIn: {
    (
      tokenIn: string,
      tokenAmountIn: number | BN | string,
      tokenOut: string,
      minAmountOut: number | BN | string,
      maxPrice: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      tokenIn: string,
      tokenAmountIn: number | BN | string,
      tokenOut: string,
      minAmountOut: number | BN | string,
      maxPrice: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{0: BN; 1: BN}>;
    sendTransaction(
      tokenIn: string,
      tokenAmountIn: number | BN | string,
      tokenOut: string,
      minAmountOut: number | BN | string,
      maxPrice: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      tokenIn: string,
      tokenAmountIn: number | BN | string,
      tokenOut: string,
      minAmountOut: number | BN | string,
      maxPrice: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  swapExactAmountOut: {
    (
      tokenIn: string,
      maxAmountIn: number | BN | string,
      tokenOut: string,
      tokenAmountOut: number | BN | string,
      maxPrice: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      tokenIn: string,
      maxAmountIn: number | BN | string,
      tokenOut: string,
      tokenAmountOut: number | BN | string,
      maxPrice: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{0: BN; 1: BN}>;
    sendTransaction(
      tokenIn: string,
      maxAmountIn: number | BN | string,
      tokenOut: string,
      tokenAmountOut: number | BN | string,
      maxPrice: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      tokenIn: string,
      maxAmountIn: number | BN | string,
      tokenOut: string,
      tokenAmountOut: number | BN | string,
      maxPrice: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  joinswapExternAmountIn: {
    (
      tokenIn: string,
      tokenAmountIn: number | BN | string,
      minPoolAmountOut: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      tokenIn: string,
      tokenAmountIn: number | BN | string,
      minPoolAmountOut: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      tokenIn: string,
      tokenAmountIn: number | BN | string,
      minPoolAmountOut: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      tokenIn: string,
      tokenAmountIn: number | BN | string,
      minPoolAmountOut: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  joinswapPoolAmountOut: {
    (
      tokenIn: string,
      poolAmountOut: number | BN | string,
      maxAmountIn: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      tokenIn: string,
      poolAmountOut: number | BN | string,
      maxAmountIn: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      tokenIn: string,
      poolAmountOut: number | BN | string,
      maxAmountIn: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      tokenIn: string,
      poolAmountOut: number | BN | string,
      maxAmountIn: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  exitswapPoolAmountIn: {
    (
      tokenOut: string,
      poolAmountIn: number | BN | string,
      minAmountOut: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      tokenOut: string,
      poolAmountIn: number | BN | string,
      minAmountOut: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      tokenOut: string,
      poolAmountIn: number | BN | string,
      minAmountOut: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      tokenOut: string,
      poolAmountIn: number | BN | string,
      minAmountOut: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  exitswapExternAmountOut: {
    (
      tokenOut: string,
      tokenAmountOut: number | BN | string,
      maxPoolAmountIn: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      tokenOut: string,
      tokenAmountOut: number | BN | string,
      maxPoolAmountIn: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      tokenOut: string,
      tokenAmountOut: number | BN | string,
      maxPoolAmountIn: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      tokenOut: string,
      tokenAmountOut: number | BN | string,
      maxPoolAmountIn: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  calcPoolOutGivenSingleIn(
    tokenBalanceIn: number | BN | string,
    tokenWeightIn: number | BN | string,
    poolSupply: number | BN | string,
    totalWeight: number | BN | string,
    tokenAmountIn: number | BN | string,
    swapFee: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  getSpotPrice(
    tokenIn: string,
    tokenOut: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  getSpotPriceSansFee(
    tokenIn: string,
    tokenOut: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  getSwapFee(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  getBalance(
    token: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  getDenormalizedWeight(
    token: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  getTotalDenormalizedWeight(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  getNormalizedWeight(
    token: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  isPublicSwap(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

  isFinalized(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

  methods: {
    /**
     * Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.
     */
    allowance(
      owner: string,
      spender: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event.
     */
    approve: {
      (
        spender: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        spender: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        spender: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        spender: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Returns the amount of tokens owned by `account`.
     */
    balanceOf(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * Returns the amount of tokens in existence.
     */
    totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * Moves `amount` tokens from the caller's account to `recipient`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.
     */
    transfer: {
      (
        recipient: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        recipient: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        recipient: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        recipient: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.
     */
    transferFrom: {
      (
        sender: string,
        recipient: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        sender: string,
        recipient: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        sender: string,
        recipient: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        sender: string,
        recipient: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    gulp: {
      (token: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        token: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        token: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        token: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    joinPool: {
      (
        poolAmountOut: number | BN | string,
        maxAmountsIn: (number | BN | string)[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        poolAmountOut: number | BN | string,
        maxAmountsIn: (number | BN | string)[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        poolAmountOut: number | BN | string,
        maxAmountsIn: (number | BN | string)[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        poolAmountOut: number | BN | string,
        maxAmountsIn: (number | BN | string)[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    exitPool: {
      (
        poolAmountIn: number | BN | string,
        minAmountsOut: (number | BN | string)[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        poolAmountIn: number | BN | string,
        minAmountsOut: (number | BN | string)[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        poolAmountIn: number | BN | string,
        minAmountsOut: (number | BN | string)[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        poolAmountIn: number | BN | string,
        minAmountsOut: (number | BN | string)[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    swapExactAmountIn: {
      (
        tokenIn: string,
        tokenAmountIn: number | BN | string,
        tokenOut: string,
        minAmountOut: number | BN | string,
        maxPrice: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        tokenIn: string,
        tokenAmountIn: number | BN | string,
        tokenOut: string,
        minAmountOut: number | BN | string,
        maxPrice: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<{0: BN; 1: BN}>;
      sendTransaction(
        tokenIn: string,
        tokenAmountIn: number | BN | string,
        tokenOut: string,
        minAmountOut: number | BN | string,
        maxPrice: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        tokenIn: string,
        tokenAmountIn: number | BN | string,
        tokenOut: string,
        minAmountOut: number | BN | string,
        maxPrice: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    swapExactAmountOut: {
      (
        tokenIn: string,
        maxAmountIn: number | BN | string,
        tokenOut: string,
        tokenAmountOut: number | BN | string,
        maxPrice: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        tokenIn: string,
        maxAmountIn: number | BN | string,
        tokenOut: string,
        tokenAmountOut: number | BN | string,
        maxPrice: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<{0: BN; 1: BN}>;
      sendTransaction(
        tokenIn: string,
        maxAmountIn: number | BN | string,
        tokenOut: string,
        tokenAmountOut: number | BN | string,
        maxPrice: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        tokenIn: string,
        maxAmountIn: number | BN | string,
        tokenOut: string,
        tokenAmountOut: number | BN | string,
        maxPrice: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    joinswapExternAmountIn: {
      (
        tokenIn: string,
        tokenAmountIn: number | BN | string,
        minPoolAmountOut: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        tokenIn: string,
        tokenAmountIn: number | BN | string,
        minPoolAmountOut: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        tokenIn: string,
        tokenAmountIn: number | BN | string,
        minPoolAmountOut: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        tokenIn: string,
        tokenAmountIn: number | BN | string,
        minPoolAmountOut: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    joinswapPoolAmountOut: {
      (
        tokenIn: string,
        poolAmountOut: number | BN | string,
        maxAmountIn: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        tokenIn: string,
        poolAmountOut: number | BN | string,
        maxAmountIn: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        tokenIn: string,
        poolAmountOut: number | BN | string,
        maxAmountIn: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        tokenIn: string,
        poolAmountOut: number | BN | string,
        maxAmountIn: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    exitswapPoolAmountIn: {
      (
        tokenOut: string,
        poolAmountIn: number | BN | string,
        minAmountOut: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        tokenOut: string,
        poolAmountIn: number | BN | string,
        minAmountOut: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        tokenOut: string,
        poolAmountIn: number | BN | string,
        minAmountOut: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        tokenOut: string,
        poolAmountIn: number | BN | string,
        minAmountOut: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    exitswapExternAmountOut: {
      (
        tokenOut: string,
        tokenAmountOut: number | BN | string,
        maxPoolAmountIn: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        tokenOut: string,
        tokenAmountOut: number | BN | string,
        maxPoolAmountIn: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        tokenOut: string,
        tokenAmountOut: number | BN | string,
        maxPoolAmountIn: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        tokenOut: string,
        tokenAmountOut: number | BN | string,
        maxPoolAmountIn: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    calcPoolOutGivenSingleIn(
      tokenBalanceIn: number | BN | string,
      tokenWeightIn: number | BN | string,
      poolSupply: number | BN | string,
      totalWeight: number | BN | string,
      tokenAmountIn: number | BN | string,
      swapFee: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    getSpotPrice(
      tokenIn: string,
      tokenOut: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    getSpotPriceSansFee(
      tokenIn: string,
      tokenOut: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    getSwapFee(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    getBalance(
      token: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    getDenormalizedWeight(
      token: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    getTotalDenormalizedWeight(
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    getNormalizedWeight(
      token: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    isPublicSwap(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

    isFinalized(txDetails?: Truffle.TransactionDetails): Promise<boolean>;
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
