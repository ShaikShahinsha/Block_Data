require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.19",
// };
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    localhost:{
      url: "http://127.0.0.1:8545"
    }
    // sepolia: {
    //   url: "https://eth-sepolia.g.alchemy.com/v2/BvREjJ2X9IdBHnducrFHiO0OvG1Kd8f2",
    //   accounts: ["d1b12945233444ef7bd9f903cc91cbfeea7180f2c567e803d99381981b12c606"]
    // }
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}