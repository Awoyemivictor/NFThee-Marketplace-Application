const hre = require('hardhat');

async function main() {
  const TheeERC1155 = await hre.ethers.getContractFactory('TheeERC1155');


  const theeERC1155 = await TheeERC1155.deploy();


  await theeERC1155.deployed();

  console.log(`TheeERC1155 Contract Deployed at ${theeERC1155.address}`);


  //* ----------------- Auto Verification Function -------------

  await sleep(1000);

  await hre.run('verify:verify', {
    address: market.address,
  });
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  