const hre = require("hardhat");

async function main() {
    const NFT = await hre.ethers.getContractFactory("MyNFT");
    const CONTRACT_ADDRESS = "0xa5600d559404e90119a4E981A59D6cCa50d3c72A";
    const contract = NFT.attach(CONTRACT_ADDRESS);

    const owner = await contract.ownerOf(1);
    console.log("Owner: ", owner);
    
    const uri = await contract.tokenURI(1);
    console.log("URI: ", uri);

}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
})