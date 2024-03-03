require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const INFURA_API_KEY = "YOUR_INFURA_API_KEY"; // Replace "YOUR_INFURA_API_KEY" with your actual Infura API key

module.exports = {
 solidity: "0.8.24",

 networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
 },
};
