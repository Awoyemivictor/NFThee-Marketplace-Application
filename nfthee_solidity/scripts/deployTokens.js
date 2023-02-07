const hre = require('hardhat');

async function main() {
  const creatorAddress = '0xd0470ea874b3C6B3c009C5d19b023df85C7261B9';

  const TheeERC721Deployer = await hre.ethers.getContractFactory(
    'TheeERC721Deployer'
  );
  const TheeERC1155Deployer = await hre.ethers.getContractFactory(
    'TheeERC1155Deployer'
  );

  const theeERC721Deployer = await TheeERC721Deployer.deploy(creatorAddress);
  const theeERC1155Deployer = await TheeERC1155Deployer.deploy(creatorAddress);

  console.log(
    `TheeERC721Deployer Contract Deployed at ${theeERC721Deployer.address}`
  );

  console.log(
    `TheeERC1155Deployer Contract Deployed at ${theeERC1155Deployer.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
