/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("hardhat-gas-reporter");
require("hardhat-deploy");
require("solidity-coverage");
// require("dotenv").config();

module.exports = {
    networks: {
        hardhat: {
            accounts: {
                mnemonic: "test test test test test test test test test test test junk"
            },
            forking: {
                url: "https://eth-mainnet.alchemyapi.io/v2/" + "4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d",
                blockNumber: 12542012
            },
            hardfork: "berlin",
            allowUnlimitedContractSize: true
        },
        rinkeby: {
            url: "https://rinkeby.infura.io/v3/" + "4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d",
            accounts: {
                mnemonic: "test test test test test test test test test test test junk"
            }
        },
        kovan: {
            url: "https://kovan.infura.io/v3/" + "4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d",
            accounts: {
                mnemonic: "test test test test test test test test test test test junk"
            }
        }
    },
    solidity: {
        compilers: [
            {
                version: "0.8.4",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200
                    },
                    evmVersion: "istanbul"
                }
            }
        ]
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts"
    },
    gasReporter: {
        currency: "USD",
        gasPrice: 100,
        coinmarketcap: '0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d'
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
            4: 0
        }
    },
    mocha: {
        timeout: 0
    }
};
