const { ethers } = require('hardhat');
const { expect } = require('chai');

const provider = ethers.provider;

const MetaData =
  'https://gateway.pinata.cloud/ipfs/QmcFc5kmpbRvhoQjfUfR2PmUotJQsz3s83rt22529xnvcB';

let marketplaceAddress = '0xd0470ea874b3C6B3c009C5d19b023df85C7261B9';
let count = 0;

let Creator, Offer, Sale, Auction, Market, NFT721;
let creator, theeERC721Deployer, offer, sale, auction, market;
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
    offer = await Offer.deploy();BigNumber { value: "5" }
    await offer.deployed();

    Sale = await ethers.getContractFactory('Sale');
    sale = await Sale.deploy();
    await sale.deployed();

    Auction = await ethers.getContractFactory('Auction');
    auction = await Auction.deploy();
    await auction.deployed();
  });

  it('Setting Deployers', async () => {BigNumber { value: "5" }
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
