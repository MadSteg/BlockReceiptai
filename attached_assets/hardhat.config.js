require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

module.exports = {
  solidity: '0.8.24',
  networks: {
    mumbai: {
      url: process.env.RPC_URL || '',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
};
