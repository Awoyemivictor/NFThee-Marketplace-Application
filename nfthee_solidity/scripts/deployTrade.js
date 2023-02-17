const hre = require('hardhat');

async function main() {
  const Trade = await hre.ethers.getContractFactory('Trade');

  const trade = await Trade.deploy();

  await trade.deployed();

  console.log(`Cretor Contract Deployed at ${trade.address}`);

  //* ----------------- Auto Verification Function -------------

  await sleep(1000);

  await hre.run('verify:verify', {
    address: trade.address,
  });
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
