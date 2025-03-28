/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import {EventData, PastEventOptions} from "web3-eth-contract";

export interface GovernorAlphaContract
  extends Truffle.Contract<GovernorAlphaInstance> {
  "new"(
    _addresses: string,
    _guardian: string,
    meta?: Truffle.TransactionDetails
  ): Promise<GovernorAlphaInstance>;
}

export interface ProposalCanceled {
  name: "ProposalCanceled";
  args: {
    id: BN;
    0: BN;
  };
}

export interface ProposalCreated {
  name: "ProposalCreated";
  args: {
    id: BN;
    proposer: string;
    targets: string[];
    values: BN[];
    signatures: string[];
    calldatas: string[];
    startTime: BN;
    endTime: BN;
    description: string;
    0: BN;
    1: string;
    2: string[];
    3: BN[];
    4: string[];
    5: string[];
    6: BN;
    7: BN;
    8: string;
  };
}

export interface ProposalExecuted {
  name: "ProposalExecuted";
  args: {
    id: BN;
    0: BN;
  };
}

export interface ProposalQueued {
  name: "ProposalQueued";
  args: {
    id: BN;
    eta: BN;
    0: BN;
    1: BN;
  };
}

export interface VoteCast {
  name: "VoteCast";
  args: {
    voter: string;
    proposalId: BN;
    support: boolean;
    votes: BN;
    0: string;
    1: BN;
    2: boolean;
    3: BN;
  };
}

type AllEvents =
  | ProposalCanceled
  | ProposalCreated
  | ProposalExecuted
  | ProposalQueued
  | VoteCast;

export interface GovernorAlphaInstance extends Truffle.ContractInstance {
  a(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * The address of the Governor Guardian
   */
  guardian(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * The latest proposal for each proposer
   */
  latestProposalIds(
    arg0: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * The total number of proposals
   */
  proposalCount(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * The official record of all proposals ever proposed
   */
  proposals(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{
    0: BN;
    1: string;
    2: BN;
    3: BN;
    4: BN;
    5: BN;
    6: BN;
    7: boolean;
    8: boolean;
  }>;

  /**
   * The maximum number of actions that can be included in a proposal
   */
  proposalMaxOperations(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  propose: {
    (
      targets: string[],
      values: (number | BN | string)[],
      signatures: string[],
      calldatas: string[],
      description: string,
      endTime: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      targets: string[],
      values: (number | BN | string)[],
      signatures: string[],
      calldatas: string[],
      description: string,
      endTime: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      targets: string[],
      values: (number | BN | string)[],
      signatures: string[],
      calldatas: string[],
      description: string,
      endTime: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      targets: string[],
      values: (number | BN | string)[],
      signatures: string[],
      calldatas: string[],
      description: string,
      endTime: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  queue: {
    (
      proposalId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      proposalId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      proposalId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      proposalId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  execute: {
    (
      proposalId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      proposalId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      proposalId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      proposalId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  cancel: {
    (
      proposalId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      proposalId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      proposalId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      proposalId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  castVote: {
    (
      proposalId: number | BN | string,
      support: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      proposalId: number | BN | string,
      support: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      proposalId: number | BN | string,
      support: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      proposalId: number | BN | string,
      support: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  __acceptAdmin: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  __abdicate: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  __queueSetTimelockPendingAdmin: {
    (
      newPendingAdmin: string,
      eta: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      newPendingAdmin: string,
      eta: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newPendingAdmin: string,
      eta: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newPendingAdmin: string,
      eta: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  __executeSetTimelockPendingAdmin: {
    (
      newPendingAdmin: string,
      eta: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      newPendingAdmin: string,
      eta: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newPendingAdmin: string,
      eta: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newPendingAdmin: string,
      eta: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * The number of votes in support of a proposal required in order for a quorum to be reached and for a vote to succeed
   */
  quorumVotes(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * The number of votes required in order for a voter to become a proposer
   */
  proposalThreshold(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  getActions(
    proposalId: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{0: string[]; 1: BN[]; 2: string[]; 3: string[]}>;

  getReceipt(
    proposalId: number | BN | string,
    voter: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{hasVoted: boolean; support: boolean; votes: BN}>;

  state(
    proposalId: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  methods: {
    a(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * The address of the Governor Guardian
     */
    guardian(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * The latest proposal for each proposer
     */
    latestProposalIds(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * The total number of proposals
     */
    proposalCount(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * The official record of all proposals ever proposed
     */
    proposals(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{
      0: BN;
      1: string;
      2: BN;
      3: BN;
      4: BN;
      5: BN;
      6: BN;
      7: boolean;
      8: boolean;
    }>;

    /**
     * The maximum number of actions that can be included in a proposal
     */
    proposalMaxOperations(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    propose: {
      (
        targets: string[],
        values: (number | BN | string)[],
        signatures: string[],
        calldatas: string[],
        description: string,
        endTime: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        targets: string[],
        values: (number | BN | string)[],
        signatures: string[],
        calldatas: string[],
        description: string,
        endTime: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        targets: string[],
        values: (number | BN | string)[],
        signatures: string[],
        calldatas: string[],
        description: string,
        endTime: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        targets: string[],
        values: (number | BN | string)[],
        signatures: string[],
        calldatas: string[],
        description: string,
        endTime: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    queue: {
      (
        proposalId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        proposalId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        proposalId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        proposalId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    execute: {
      (
        proposalId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        proposalId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        proposalId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        proposalId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    cancel: {
      (
        proposalId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        proposalId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        proposalId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        proposalId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    castVote: {
      (
        proposalId: number | BN | string,
        support: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        proposalId: number | BN | string,
        support: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        proposalId: number | BN | string,
        support: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        proposalId: number | BN | string,
        support: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    __acceptAdmin: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    __abdicate: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    __queueSetTimelockPendingAdmin: {
      (
        newPendingAdmin: string,
        eta: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        newPendingAdmin: string,
        eta: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newPendingAdmin: string,
        eta: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newPendingAdmin: string,
        eta: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    __executeSetTimelockPendingAdmin: {
      (
        newPendingAdmin: string,
        eta: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        newPendingAdmin: string,
        eta: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newPendingAdmin: string,
        eta: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newPendingAdmin: string,
        eta: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * The number of votes in support of a proposal required in order for a quorum to be reached and for a vote to succeed
     */
    quorumVotes(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * The number of votes required in order for a voter to become a proposer
     */
    proposalThreshold(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    getActions(
      proposalId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{0: string[]; 1: BN[]; 2: string[]; 3: string[]}>;

    getReceipt(
      proposalId: number | BN | string,
      voter: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{hasVoted: boolean; support: boolean; votes: BN}>;

    state(
      proposalId: number | BN | string,
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
