import "dotenv/config";
import "solidity-coverage";
import "@nomiclabs/hardhat-waffle";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "@nomiclabs/hardhat-solhint";
import "hardhat-contract-sizer";
import "hardhat-dependency-compiler";

import { HardhatUserConfig } from "hardhat/config";

const accounts = {
    mnemonic: "5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed1BeAed1BeAed1BeAed1BeAed",
    initialIndex: parseInt("0"),
    count: 20,
    accountsBalance: "990000000000000000000",
};

/**
 * Go to https://hardhat.org/config/ to learn more
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            forking: {
                enabled: true,
                url: `https://eth-mainnet.alchemyapi.io/v2/742d35Cc6634C0532925a3b844Bc454e4438f44e`,
            },
            live: false,
            saveDeployments: true,
            tags: ["test", "local"],
            accounts: accounts,
            // This is because MetaMask mistakenly assumes all networks in http://localhost:8545 to have a chain id of 1337
            // but Hardhat uses a different number by default. Please voice your support for MetaMask to fix this:
            // https://github.com/MetaMask/metamask-extension/issues/9827
            chainId: 1337,
        },
        ropsten: {
            url: `https://eth-ropsten.alchemyapi.io/v2/742d35Cc6634C0532925a3b844Bc454e4438f44e`,
            accounts: accounts,
        },
        kovan: {
            url: `https://eth-kovan.alchemyapi.io/v2/742d35Cc6634C0532925a3b844Bc454e4438f44e`,
            accounts: accounts,
        },
        mainnet: {
            url: `https://eth-mainnet.alchemyapi.io/v2/742d35Cc6634C0532925a3b844Bc454e4438f44e`,
            accounts: accounts,
        },
        bsc: {
            url: "https://bsc-dataseed.binance.org/",
            accounts: accounts,
        }
    },
    solidity: {
        version: "0.8.9",
        settings: {
            optimizer: {
                enabled: true,
                runs: 5000,
            },
            outputSelection: {
                "*": {
                    "*": ["storageLayout"],
                },
            },
        },
    },
    typechain: {
        outDir: "typechain",
        target: "ethers-v5",
    },
    gasReporter: {
        coinmarketcap: process.env.COINMARKETCAP_API_KEY,
        currency: "USD",
        enabled: process.env.REPORT_GAS === "true",
        excludeContracts: ["contracts/mocks/", "contracts/libraries/", "contracts/interfaces/"],
    },
    dependencyCompiler: {
        paths: ["@openzeppelin/contracts/governance/TimelockController.sol"],
    },
};

export default config;
