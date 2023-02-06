const hre = require('hardhat');

async function main() {
  const Market = await hre.ethers.getContractFactory('Market');
  const Offer = await hre.ethers.getContractFactory('Offer');
  const Auction = await hre.ethers.getContractFactory('Auction');
  const Sale = await hre.ethers.getContractFactory('Sale');

  const market = await Market.deploy();
  const offer = await Offer.deploy();
  const auction = await Auction.deploy();
  const sale = await Sale.deploy();

  await market.deployed();

  console.log(`Marketplace Contract Deployed at ${market.address}`);
  console.log(`Offer Contract Deployed at ${offer.address}`);
  console.log(`Auction   Contract Deployed at ${auction.address}`);
  console.log(`Sale Contract Deployed at ${sale.address}`);

  //* ----------------- Auto Verification Function -------------

  await sleep(1000);

  await hre.run('verify:verify', {
    address: market.address,
  });

  // for (let i = 0; i <= 3; i++) {
  //   console.log(i);
  //   await sleep(1000);
  //   let contractAddress;
  //   if (i === 0) {
  //     contractAddress = address.market;
  //   } else if (i === 1) {
  //     contractAddress = address.offer;
  //   } else if (i === 2) {
  //     contractAddress = address.auction;
  //   } else {
  //     contractAddress = address.sale;
  //   }

  //   await hre.run('verify:verify', {
  //     address: contractAddress,
  //   });

  // }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
