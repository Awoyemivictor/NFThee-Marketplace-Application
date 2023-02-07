const hre = require('hardhat');

async function main() {
  const Creator = await hre.ethers.getContractFactory('Creator');

  const creator = await Creator.deploy();

  await creator.deployed();

  console.log(`Cretor Contract Deployed at ${creator.address}`);

  //* ----------------- Auto Verification Function -------------

  await sleep(1000);

  await hre.run('verify:verify', {
    address: creator.address,
  });
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
