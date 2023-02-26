import { ethers } from "hardhat";
const Web3 = require("web3");
var web3 = new Web3("https://eth-mainnet.g.alchemy.com/v2/Z3fhnS-rtbXvUck31_58ooWa-ApUzHbo");
async function main() {
    const usdtContract = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
    const holders = 2;
    const url = `https://api.ethplorer.io/getTopTokenHolders/${usdtContract}?apiKey=freekey&limit=${holders}`;
    fetch(url)
        .then((data) => {
            return data.json();
        })
        .then((post) => {
            console.log(post);
        });


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
