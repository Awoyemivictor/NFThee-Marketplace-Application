const { ethers } = require('hardhat');
const { expect } = require('chai');
const SignWallet = require('../lib/SingVoucher');

const MetaData =
  'https://gateway.pinata.cloud/ipfs/QmcFc5kmpbRvhoQjfUfR2PmUotJQsz3s83rt22529xnvcB';

let owner, addr1, addr2;

let marketplaceAddress = '0xd0470ea874b3C6B3c009C5d19b023df85C7261B9';
let count = 0;

let TheeERC721, Creator, Offer, Sale, Auction, Market;
let creator, theeERC721, offer, sale, auction;

const now = async () => (await ethers.provider.getBlock('latest')).timestamp;

function counter() {
  count = count + 1;
  return count;
}

describe('Market Deployment ', async function () {
  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    Creator = await ethers.getContractFactory('Creator');
    TheeERC721 = await ethers.getContractFactory('TheeERC721');
    Offer = await ethers.getContractFactory('Offer');
    Sale = await ethers.getContractFactory('Sale');
    Auction = await ethers.getContractFactory('Auction');
  });
  describe('ERC721 NFT Listing on Sale', async () => {});
});
