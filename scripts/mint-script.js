const hre = require("hardhat");


async function main() {
    const NFT = await hre.ethers.getContractFactory("MyNFT");
    const URI = "ipfs://QmWcHKtXMSoYqcY2kTXE3kaHFVmG4Ab8VWAReLdvYsCWny";
    const WALLET_ADDRESS = "0x1DdF625C01bBDf22bdD5CAb7f25D0db14F450CC4";
    const CONTRACT_ADDRESS = "0xa5600d559404e90119a4E981A59D6cCa50d3c72A";

    const contract = NFT.attach(CONTRACT_ADDRESS);

    await contract.mint(WALLET_ADDRESS, URI);
    console.log("NFT minted: ", contract);   
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
})