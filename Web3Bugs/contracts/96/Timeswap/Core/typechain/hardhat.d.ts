/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ITimeswapBorrowCallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITimeswapBorrowCallback__factory>;
    getContractFactory(
      name: "ITimeswapLendCallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITimeswapLendCallback__factory>;
    getContractFactory(
      name: "ITimeswapMintCallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITimeswapMintCallback__factory>;
    getContractFactory(
      name: "ITimeswapPayCallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITimeswapPayCallback__factory>;
    getContractFactory(
      name: "IFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFactory__factory>;
    getContractFactory(
      name: "IPair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPair__factory>;
    getContractFactory(
      name: "TimeswapMath",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimeswapMath__factory>;
    getContractFactory(
      name: "TestToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestToken__factory>;
    getContractFactory(
      name: "TimeswapPairCallee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimeswapPairCallee__factory>;
    getContractFactory(
      name: "TimeswapFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimeswapFactory__factory>;
    getContractFactory(
      name: "TimeswapPair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimeswapPair__factory>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
  }
}
