require("@nomicfoundation/hardhat-toolbox");

// require('@nomiclabs/hardhat-waffle');
require('dotenv').config(); 

module.exports = {
  solidity: {
    version: '0.8.20',
  },
  networks: {
    hardhat: {},
    astar: {
      url: 'https://astar-mainnet.g.alchemy.com/v2/6ZlZVfEswLzLCnF55WrOn8Da9gbZKVCO',
      accounts: [`0x${process.env.PRIVATE_KEY}`], 
    },
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};
