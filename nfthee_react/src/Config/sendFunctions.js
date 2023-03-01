import { ethers } from 'ethers';

import theeERC721ABI from './abis/polygon/TheeERC721.json';
import theeERC1155ABI from './abis/polygon/TheeERC1155.json';
import Creator from './abis/polygon/Creator.json';
import MarketplaceABI from './abis/polygon/Market.json';
import Market from './abis/polygon/Marketplace.json';
import Royalty from './abis/polygon/Royalty.json';
import ERC721 from './abis/polygon/TestERC721.json';
import ERC20 from './abis/polygon/TestERC20.json';
import contracts from './contracts';
import { generateRandomNumbers, getUnixTimeAfterDays } from './helpers';
import { getFullYearTime, convertToEth } from './constants';
import { getCollection } from '../services/apiServices';

const exportInstance = async (SCAddress, ABI) => {
  let provider = new ethers.providers.Web3Provider(window.ethereum);
  let signer = provider.getSigner();
  let a = new ethers.Contract(SCAddress, ABI, signer);
  if (a) {
    return a;
  } else {
    return {};
  }
};

const readReceipt = async (hash) => {
  try {
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    const receipt = await provider.getTransactionReceipt(hash.hash);
    let contractAddress = receipt.logs[0].address;
    return contractAddress;
  } catch (e) {
    console.log('error in api', e);
  }
};

/**
 *
 * @param For Collection Creattion
 */

export const handleCollectionCreation = async (
  chooseBlockchain,
  nftType,
  name,
  symbol,
  minterAddress,
  royaltyPercentage
) => {
  let res1;
  let contractAddress;
  let creator;
  console.log(
    chooseBlockchain,
    nftType,
    name,
    symbol,
    minterAddress,
    royaltyPercentage
  );
  let eth = 'Ethereum Testnet';
  let poly = 'Polygon Testnet';
  let bsc = 'Binance Smart Chain';
  let harmony = 'Harmony Testnet';

  if (eth === chooseBlockchain) {
    console.log('eth');
    creator = await exportInstance(
      contracts.ethereumContracts.CREATOR,
      Creator.abi
    );
  } else if (poly === chooseBlockchain) {
    console.log('poly');

    creator = await exportInstance(
      contracts.polygonContracts.CREATOR,
      Creator.abi
    );
  } else if (bsc === chooseBlockchain) {
    console.log('bsc');

    creator = await exportInstance(contracts.bscContracts.CREATOR, Creator.abi);
  } else if (harmony === chooseBlockchain) {
    console.log('harmony');

    creator = await exportInstance(
      contracts.harmonyContracts.CREATOR,
      Creator.abi
    );
  }
  console.log(creator);

  if (nftType === 'single') {
    try {
      res1 = await creator.deployERC721(
        name,
        symbol,
        '0x41c100Fb0365D9A06Bf6E5605D6dfF72F44fb106'
      );
      console.log('after res');
      let hash = res1;

      res1 = await res1.wait();

      if (res1.status === 0) {
        console.log('Transaction Failed');
      }
      contractAddress = await readReceipt(hash);
      return contractAddress;
    } catch (error) {
      console.log(error);
      return error;
    }
  } else {
    try {
      res1 = await creator.deployERC1155('');
      let hash = res1;

      res1 = await res1.wait();

      if (res1.status === 0) {
        console.log('Transaction Failed');
      }
      contractAddress = await readReceipt(hash);
      return contractAddress;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
};

/**
 *
 * @param {*} NFT Creation
 */
export const handleNFTCreation = async (
  chooseBlockchain,
  chooseCollection,
  name,
  symbol,
  chooseType,
  minterAddress
) => {
  console.log(
    chooseBlockchain,
    chooseCollection,
    name,
    symbol,
    chooseType,
    minterAddress
  );
  let res1;
  let res;
  let contractAddress;
  let creator;
  const tokenId = generateRandomNumbers();

  let collectionAddress = await getCollection({ name: chooseCollection });

  if (chooseType === 'single') {
    try {
      console.log(collectionAddress);
      let mintNFT = await exportInstance(collectionAddress, theeERC721ABI.abi);

      // const options = {
      //   gasPrice: 10000000000,
      //   gasLimit: 9000000,
      // };

      res = await mintNFT.mint(tokenId, '0x00');
      res = await res.wait();
      if (res.status === 0) {
        console.log('Transaction Failed');
      }
      console.log(res);
    } catch (error) {
      console.log(error);
      return error;
    }
    return { tokenId, collectionAddress, res };
  } else {
    try {
      let mintNFT = await exportInstance(collectionAddress, theeERC1155ABI.abi);

      res1 = await mintNFT.mint(tokenId, 10, '', '0x00');
      let hash = res1;

      res1 = await res1.wait();

      if (res1.status === 0) {
        console.log('Transaction Failed');
      }
      contractAddress = await readReceipt(hash);
      return contractAddress;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
};

//* List NFTon Marketplace To Buy with Wrapped token/ native Token
/**
 *
 * @param {*} Normal Listing and Buying
 */

export const handleListNFTSale = async (
  tokenId,
  fixedPrice,
  collectionAddress
) => {
  console.log(tokenId, fixedPrice, collectionAddress);
  let res;
  const price = ethers.utils.parseEther(fixedPrice).toString();
  const time = getFullYearTime();
  const options = {
    gasPrice: 10000000000,
    gasLimit: 9000000,
  };

  let nftInstance = await exportInstance(collectionAddress, theeERC721ABI.abi);

  let checkApproval = await nftInstance.isApprovedForAll(
    '0xd0470ea874b3C6B3c009C5d19b023df85C7261B9',
    contracts.polygonContracts.MARKETPLACE
  );
  console.log(checkApproval);
  if (checkApproval === false) {
    await nftInstance.setApprovalForAll(
      contracts.polygonContracts.MARKETPLACE,
      true
    );
  }

  let marketplaceInstance = await exportInstance(
    contracts.polygonContracts.MARKETPLACE,
    Market.abi
  );

  console.log(tokenId, time, price);
  console.info(marketplaceInstance);
  res = await marketplaceInstance.listToken(
    collectionAddress,
    tokenId,
    price,
    time,
    1,
    2,
    options
  );

  res = await res.wait();
  if (res.status === 0) {
    console.log('Transaction Failed');
  }
  console.log(res);
};

export const handleNFTBuy = async (tokenPrice, collectionName) => {
  console.log(tokenPrice);
  let res;
  const price = ethers.utils.parseEther(tokenPrice);
  console.log(price);

  const options = {
    gasPrice: 10000000000,
    gasLimit: 9000000,
    value: price,
  };
  let collectionAddress = await getCollection({ name: collectionName });
  console.log(collectionAddress);

  let nftInstance = await exportInstance(collectionAddress, theeERC721ABI.abi);

  let checkApproval = await nftInstance.isApprovedForAll(
    '0xd0470ea874b3C6B3c009C5d19b023df85C7261B9',
    contracts.polygonContracts.MARKETPLACE
  );
  console.log(checkApproval);
  if (checkApproval === false) {
    await nftInstance.setApprovalForAll(
      contracts.polygonContracts.MARKETPLACE,
      true
    );
  }

  let marketplaceInstance = await exportInstance(
    contracts.polygonContracts.MARKETPLACE,
    Market.abi
  );

  console.log(price, test);
  console.info(marketplaceInstance);
  res = await marketplaceInstance.buyToken(
    collectionAddress,
    267,
    1,
    1,
    2,
    options
  );

  res = await res.wait();
  if (res.status === 0) {
    console.log('Transaction Failed');
  }
  console.log(res);
};

/**
 *
 * @returns NFT Auction Listing Function
 */

export const handleNFTListingAuction = async (
  tokenId,
  tokenPrice,
  collectionAddress
) => {
  let res;
  const price = ethers.utils.parseEther(tokenPrice)
  const time = getUnixTimeAfterDays(100);
  const options = {
    gasPrice: 10000000000,
    gasLimit: 9000000,
  };

  let nftInstance = await exportInstance(collectionAddress, theeERC721ABI.abi);

  let checkApproval = await nftInstance.isApprovedForAll(
    '0xd0470ea874b3C6B3c009C5d19b023df85C7261B9',
    contracts.polygonContracts.MARKETPLACE
  );
  console.log(checkApproval);
  if (checkApproval === false) {
    await nftInstance.setApprovalForAll(
      contracts.polygonContracts.MARKETPLACE,
      true
    );
  }

  let marketplaceInstance = await exportInstance(
    contracts.polygonContracts.MARKETPLACE,
    Market.abi
  );

  console.log(tokenId, time,price);
  console.info(marketplaceInstance);
  res = await marketplaceInstance.enterBidForToken(
    collectionAddress,
    tokenId,
    price,
    time,
    1,
    2,
    options
  );

  res = await res.wait();
  if (res.status === 0) {
    console.log('Transaction Failed');
  }
  return res;
};

export const handleNFTCancelOffer = async () => {};
export const handleNFTAcceptOffer = async () => {};
export const handleNFTBid = async () => {};
