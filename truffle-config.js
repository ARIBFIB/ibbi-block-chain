module.exports = {
  networks: {
    // your network configurations here
  },
  compilers: {
    solc: {
      version: "0.5.15",  // Specify the version of Solidity
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};
