import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import * as dotenv from 'dotenv'
import 'hardhat-contract-sizer'
import 'hardhat-deploy'
import 'solidity-coverage'

dotenv.config()

export default {
  allowUnlimitedContractSize: true,
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  namedAccounts: {
    factoryDeployer: 0,
    factoryOwner: 0,
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/742d35Cc6634C0532925a3b844Bc454e4438f44e`,
      accounts: [`0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed1BeAed1BeAed1BeAed1BeAed`],
    },
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
    alwaysGenerateOverloads: true,
  },
  mocha: {
    timeout: 60000,
  },
  // contractSizer: {
  //   alphaSort: true,
  //   disambiguatePaths: false,
  //   runOnCompile: true,
  //   strict: true,
  // },
}
