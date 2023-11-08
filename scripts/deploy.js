

import { ethers } from "hardhat";
const dotenv = require("dotenv").config();



const main = async () => {

    const Belongings = await hre.ethers.getContratFactory("Belongings");
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

main();