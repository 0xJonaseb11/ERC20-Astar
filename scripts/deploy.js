const dotenv = require("dotenv").config();

const hre = require("hardhat"); // Import the Hardhat Runtime Environment

const main = async () => {
    const Belongings = await hre.ethers.getContractFactory("Belongings");
    const belongings = await Belongings.deploy();

    // await belongings.deployed();

    console.log("Belongings deployed to:", belongings.address.target);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.error("Error deploying contract:", error);
        process.exit(1);
    }
}

runMain();
