const { ethers } = require('hardhat');
const { expect } = require('chai');
const SignWallet = require('../lib/SingVoucher');

const MetaData =
  'https://gateway.pinata.cloud/ipfs/QmcFc5kmpbRvhoQjfUfR2PmUotJQsz3s83rt22529xnvcB';

let owner, issuer, claimant;

let marketplaceAddress = '0xd0470ea874b3C6B3c009C5d19b023df85C7261B9';
let count = 0;

let TheeERC1155, theeERC1155;

const now = async () => (await ethers.provider.getBlock('latest')).timestamp;

function counter() {
  count = count + 1;
  return count;
}
describe('TheeERC1155 Deployment', async function () {
  beforeEach(async function () {
    [owner, issuer, claimant] = await ethers.getSigners();

    TheeERC1155 = await ethers.getContractFactory('TheeERC1155');
    theeERC1155 = await TheeERC1155.deploy(owner.address);
  });
  describe('NFT Minting', async function () {
    it('Should Mint ERC1155 NFT', async () => {
      await theeERC1155.connect(owner).mint(1, 10, claimant.address, MetaData);
      expect(await theeERC1155.balanceOf(claimant.address, 1)).to.equal(10);
    });
    it('should Lazy Mint NFT', async () => {
      const NFTVoucher = {
        tokenId: counter(),
        nftAmount: 10,
        price: ethers.utils.parseEther('1'),
        startDate: (await now()) + 5000,
        endDate: (await now()) + 10000,
        maker: owner.address,
        nftAddress: theeERC1155.address,
        tokenURI: MetaData,
      };
      const signWallet = new SignWallet(theeERC1155.address, claimant);
      const signature = await signWallet.getSignature(NFTVoucher);

      expect(await theeERC1155.check(NFTVoucher, signature)).to.equal(
        claimant.address
      );
      await theeERC1155
        .connect(owner)
        .redeem(claimant.address, NFTVoucher, 10, signature);
         
    });
  });
});
