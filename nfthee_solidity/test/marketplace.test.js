const { ethers } = require('hardhat');
const { expect } = require('chai');

const provider = ethers.provider;

const MetaData =
  'https://gateway.pinata.cloud/ipfs/QmcFc5kmpbRvhoQjfUfR2PmUotJQsz3s83rt22529xnvcB';

const ZERO_ADDRESS = 0x0000000000000000000000000000000000000000;

let marketplaceAddress = '0xd0470ea874b3C6B3c009C5d19b023df85C7261B9';
let count = 0;

let Creator, Offer, Sale, Auction, Market, NFT721, Trade;
let creator, theeERC721Deployer, offer, sale, auction, market, trade;
let signers, owner, addr1, addr2, addr3, addr4, addr5;

const now = async () => (await ethers.provider.getBlock('latest')).timestamp;

function counter() {
  count = count + 1;
  return count;
}

describe('Market Deployment ', async function () {
  it('Snapshot EVM', async () => {
    snapshotId = await provider.send('evm_snapshot');
  });
  it('Defining Generals ', async () => {
    [signers, owner, addr1, addr2, addr3, addr4, addr5] =
      await ethers.getSigners();
    signers = [owner, addr1, addr2, addr3, addr4, addr5];
    // signer = new ethers.Wallet(privateKey);
    TheeERC721ABI = (await ethers.getContractFactory('TheeERC721')).interface;
  });
});

describe('Deployer Contracts', async function () {
  it('TheeERC721Deployer', async () => {
    const TheeERC721Deployer = await ethers.getContractFactory(
      'TheeERC721Deployer'
    );
    theeERC721Deployer = await TheeERC721Deployer.deploy(marketplaceAddress);
    await theeERC721Deployer.deployed();
  });
});

describe('Creator and Marketplace Deployer ', async function () {
  it('should deploy creator contract', async () => {
    Creator = await ethers.getContractFactory('Creator');
    creator = await Creator.deploy();
    await creator.deployed();
  });
  it('should deploy marketplace , offer,sale ,auction contracts', async () => {
    Offer = await ethers.getContractFactory('Offer');
    offer = await Offer.deploy();
    await offer.deployed();

    Sale = await ethers.getContractFactory('Sale');
    sale = await Sale.deploy();
    await sale.deployed();

    Auction = await ethers.getContractFactory('Auction');
    auction = await Auction.deploy();
    await auction.deployed();

    Market = await ethers.getContractFactory('Market');
    market = await Market.deploy();
    await market.deployed();

    Trade = await ethers.getContractFactory('Trade');
    trade = await Trade.deploy();
    await trade.deployed();
  });

  it('Setting Deployers', async () => {
    await creator.setDeployerAddress(
      theeERC721Deployer.address,
      marketplaceAddress
    );
  });
});

describe('Preparing Tokens', async function () {
  it('Should Able to Deploy TheeERC721', async () => {
    const newAddress = await creator
      .connect(addr1)
      .callStatic.deployERC721('Test', 'TST', marketplaceAddress);

    await creator
      .connect(addr1)
      .deployERC721('Test', 'TST', marketplaceAddress);

    NFT721 = new ethers.Contract(newAddress, TheeERC721ABI, provider);
    expect(await NFT721.name()).to.equal('Test');
    expect(await NFT721.symbol()).to.equal('TST');
  });
  it("should mint Multiple NFT's", async () => {
    for (let i = 0; i <= 4; i++) {
      await NFT721.connect(addr1).mint(i, MetaData);
      expect(await NFT721.tokenURI(i)).to.equal(MetaData);
      expect(await NFT721.ownerOf(i)).to.equal(addr1.address);

      // // expect(D).to.equal(5)
      // const nftCount = await NFT721.balanceOf(addr1.address);
    }
  });
});

describe('Should able to sell tokens ', async function () {
  // it('should not list if nft nft contract address is zero address', async () => {
  //   const price = 1000000000000000;
  //   const time = 172800;
  //   await market.setSale(ZERO_ADDRESS);
  //   await market.connect(addr1).sell(NFT721.address, 2, price, time);
  // });
  it('should put on sale if all params are correct', async () => {
    const price = 1000000000000000;
    const time = 172800;

    await NFT721.connect(addr1).mint(7, MetaData);

    await market.setSale(sale.address);
    await market.connect(addr1).sell(NFT721.address, 7, price, time);
  });
});

describe('Should be able to cancel sell ', async function () {
  it('should be able to cancel listing if all params are correct', async () => {
    const price = 1000000000000000;
    const time = 172800;

    await NFT721.connect(addr1).mint(8, MetaData);

    await market.setSale(sale.address);
    await trade.setMarket(market.address);

    await market.connect(addr1).sell(NFT721.address, 8, price, time);

    // await trade.setMarket(market.address);

    await market.connect(addr1).cancelSale(2);
  });

  it('it should revert if owner is not seller', async () => {
    const price = 1000000000000000;
    const time = 172800;

    await NFT721.connect(addr1).mint(9, MetaData);

    await market.setSale(sale.address);
    await market.connect(addr1).sell(NFT721.address, 9, price, time);

    await expect(market.connect(addr2).cancelSale(3)).to.revertedWith(
      'mismatch seller'
    );
  });
});

describe('Buy NFT', async function () {
  it('should able to buy if all params are correct', async () => {
    const price = ethers.utils.parseEther('1');
    const time = 172800;

    await NFT721.connect(addr1).mint(10, MetaData);

    await market.setSale(sale.address);
    await market.connect(addr1).sell(NFT721.address, 10, price, time);
    await NFT721.connect(addr1).setApprovalForAll(market.address, true);

    //!to Check  Balanace of User
    const balance0ETH = await provider.getBalance(addr2.address);

    // await market.connect(addr2).buy(4, { value: price });
  });
});

// describe('Offer', async function () {
//   it('should able to make offer if all params are correct ', async () => {
//     const price = ethers.utils.parseEther('1');
//     const time = 172800;

//     await NFT721.connect(addr1).mint(11, MetaData);

//     await market.setOffer(offer.address);
//     await trade.setMarket(market.address);

//     // await market
//     //   .connect(addr1)
//     //   .offer(NFT721.address, 11, price, time, { value: price });
//   });
// });

describe('Auction', async function () {
  it('should able to list for auction if all params are correct', async () => {
    const price = ethers.utils.parseEther('1');
    const time = 172800;
  const  Marketplace = await ethers.getContractFactory('Market');
   const marketplace = await Marketplace.deploy();
    await marketplace.deployed();

    await NFT721.connect(addr1).mint(11, MetaData);

    // await market.setSale(sale.address);
    // await trade.connect(addr1).setMarket(market.address);
    await marketplace.auction()

    // await market.connect(addr1).auction(NFT721.address, 11, price, time);

    // await NFT721.connect(addr1).setApprovalForAll(market.address, true);
  });
});
