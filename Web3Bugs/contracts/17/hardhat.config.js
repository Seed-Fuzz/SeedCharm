require('@nomiclabs/hardhat-truffle5')
require('@nomiclabs/hardhat-vyper')
require('@nomiclabs/hardhat-web3')
require('@nomiclabs/hardhat-ethers')
require('dotenv').config();

const fs = require("fs");
const Accounts = require('web3-eth-accounts');

const accounts = new Accounts('ws://localhost:8545');
let account, referal, bot, kovan;

// account = process.env['DEV']
// bot = process.env['DEV_BOT']
// referal = process.env['REF']

// kovan = process.env['kovan']

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545',
      gas: 12000000,
      blockGasLimit: 12000000
    },
    hardhat: {
      forking: {
        url: 'https://kovan.infura.io/v3/YOUR_INFURA_PROJECT_ID' // 替换为实际的 Kovan Infura URL
      },
      gas: 12000000,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true,
      timeout: 1800000,
    },
    kovan: {
      url: 'https://kovan.infura.io/v3/YOUR_INFURA_PROJECT_ID', // 替换为实际的 Kovan Infura URL
      accounts: [
       '0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d', // 示例账户私钥 1
       '0x6cbed15c793ce57650b9877cf6fa156fbef513c4e6134f022a85b1ffdd59b2a1'  // 示例账户私钥 2
      ],
      chainId: 42,
      gas: 'auto',
      gasPrice: 100000000000,
      timeout: 10000,
    },
  },
  mocha: {
    useColors: true,
    // reporter: 'eth-gas-reporter',
    timeout: 6000000,
  },
  solidity: {
    compilers: [
      {
        version: '0.6.8',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1337,
          },
        }
      },
      {
        version: '0.6.12',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1337,
          },
        }
      }
    ]
  },
  vyper: {
    version: '0.2.8',
  },
}
