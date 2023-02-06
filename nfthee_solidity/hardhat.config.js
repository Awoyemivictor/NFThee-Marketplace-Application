require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-etherscan');
require('hardhat-gas-reporter');
require('dotenv').config();
require('solidity-coverage');

const { PRIVATE_KEY, POLYGON_API_KEY, POLYGON_RPC_URL } = process.env;

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(process.env.POLYGON_RPC_URL);
  }
});

module.exports = {
  solidity: {
    version: '0.8.16',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  gasReporter: {
    currency: 'MATIC',
    gasPrice: 21,
  },
  plugins: ['solidity-coverage'],

  networks: {
    hardhat: {},

    polygonTestnet: {
      url: POLYGON_RPC_URL,
      accounts: [PRIVATE_KEY],
    },

    bscMainnet: {
      url: 'https://bsc-dataseed.binance.org/',
      accounts: [PRIVATE_KEY],
    },
    bscTestnet: {
      url: 'https://data-seed-prebsc-2-s3.binance.org:8545/',
      accounts: [PRIVATE_KEY],
    },
    harmonyTestnet: {
      url: `https://api.s0.b.hmny.io`,
      accounts: [PRIVATE_KEY],
    },
    harmonyMainnet: {
      url: `https://api.harmony.one`,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: POLYGON_API_KEY,
  },
};
