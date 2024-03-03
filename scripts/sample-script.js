const hre = require("hardhat");

async function main() {
    console.log(hre);
  const Greeter = await hre.ethers.getContractFactory("NFTee");
  const greeter = await Greeter.deploy();
  await greeter.deployed();
  console.log("NFT Contract deployed to:", greeter.address);
}


main ()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });