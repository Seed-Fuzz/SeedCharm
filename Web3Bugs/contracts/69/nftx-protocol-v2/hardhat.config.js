require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@openzeppelin/hardhat-upgrades");
require("hardhat-gas-reporter");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: { 
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/abc123abc123abc123abc123abc123abc123abc123",
      accounts: ["0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d"],
    },
    mainnet: {
      url: "https://eth-mainnet.alchemyapi.io/v2/def456def456def456def456def456def456def456",
      accounts: ["0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d"],
      gasPrice: 200000000000,
    },
    palm: {
      url: "https://palm-mainnet.infura.io/v3/ghi789ghi789ghi789ghi789ghi789ghi789ghi789",
      accounts: ["0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d"],
    },
    hardhat: {
      mining: {
        auto: true,
      },
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/def456def456def456def456def456def456def456",
        blockNumber: 12772572,
      },
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
};
