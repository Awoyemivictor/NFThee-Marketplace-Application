import { ethers } from 'ethers';

import theeERC721ABI from './abis/polygon/TheeERC721.json';
import theeERC1155ABI from './abis/polygon/TheeERC1155.json';
import Creator from './abis/polygon/Creator.json';
import MarketplaceABI from './abis/polygon/Market.json';
import contracts from './contracts';

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

const chooseBlockchain = async (option) => {};

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

  // creator = await exportInstance(
  //   contracts.polygonContracts.CREATOR,
  //   Creator.abi
  // );
  // res1 = await creator.deployERC721(
  //   'Test',
  //   'TST',
  //   '0x41c100Fb0365D9A06Bf6E5605D6dfF72F44fb106'
  // );
  // let hash = res1;

  // res1 = await res1.wait();

  // if (res1.status === 0) {
  //   console.log('Transaction Failed');
  // }
  // contractAddress = await readReceipt(hash);
  // return contractAddress;

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

  if (nftType) {
    try {
      console.log('inside try');
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

export const handleNFTCreation = async (
  chooseBlockchain,
  collectionAddress,
  nftType,
  name,
  symbol,
  minterAddress,
  royaltyPercentage
) => {
  console.log(
    chooseBlockchain,
    collectionAddress,
    nftType,
    name,
    symbol,
    minterAddress,
    royaltyPercentage
  );
  let res1;
  let contractAddress;
  let creator;

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

  //create API to get Collection Address

  console.log(contractAddress);
  let mintNFT = await exportInstance(collectionAddress, theeERC721ABI.abi);
  let res = await mintNFT.mint(1, '0x00');
  res = await res.wait();
  if (res.status === 0) {
    console.log('Transaction Failed');
  }
  console.log(res);
};

export const handleListNFTSale = async (contractAddress, tokenIds) => {
  const price = 1000000000000000;
  const time = 172800;
  let listNFT = await exportInstance(
    contracts.polygonContracts.MARKETPLACE,
    MarketplaceABI.abi
  );

  let res = await listNFT.sell(contractAddress, tokenIds, price, time);
  res = await res.wait();
  if (res.status === 0) {
    console.log('Transaction Failed');
  }
  console.log(res);
};

export const handleNFTBuy = async () => {
  const price = 1000000000000000;
  const time = 172800;
  let buyNFT = await exportInstance(
    contracts.polygonContracts.MARKETPLACE,
    MarketplaceABI.abi
  );

  let res = await buyNFT.buy({ value: price });
  res = await res.wait();
  if (res.status === 0) {
    console.log('Transaction Failed');
  }
  console.log(res);
};

export const handleNFTOffer = async (contractAddress, tokenId) => {
  console.log(contractAddress, tokenId);

  const price = ethers.utils.parseEther('0.001');
  const time = 172800;

  let offerNFT = await exportInstance(
    contracts.polygonContracts.MARKETPLACE,
    MarketplaceABI.abi
  );
  console.log(offerNFT);

  // let ownerOf = await offerNFT.owner()
  // console.log(ownerOf)
  // return ownerOf
  // console.log(offerNFT);

  const options = {
    gasPrice: 10000000000,
    gasLimit: 9000000,
    value: price,
  };

  let res = offerNFT.offer(
    '0x41c100Fb0365D9A06Bf6E5605D6dfF72F44fb106',
    price,
    time,
    options
  );
  // let res = offerNFT.cancelOffer(1, options);

  res = await res.wait();
  if (res.status === 0) {
    console.log('Transaction Failed');
  }
  console.log(res);
  return res;
};

export const handleNFTCancelOffer = async () => {};
export const handleNFTAcceptOffer = async () => {};
export const handleNFTBid = async () => {};

export const handleNFTAuction = async (contractAddress) => {
  let account = JSON.parse(localStorage.getItem('TokenData'));
  console.log(account[0]);

  console.log(contractAddress);

  const price = ethers.utils.parseEther('0.001');
  const time = 172800;

  let offerNFT = await exportInstance(
    contracts.polygonContracts.MARKETPLACE,
    MarketplaceABI.abi
  );
  console.log(offerNFT);

  // let ownerOf = await offerNFT.owner()
  // console.log(ownerOf)
  // return ownerOf
  // console.log(offerNFT);

  const options = {
    from: account[0],
    gasPrice: 10000000000,
    gasLimit: 9000000,
    value: price,
  };

  let res = offerNFT.auction(
    '0x41c100Fb0365D9A06Bf6E5605D6dfF72F44fb106',
    1,
    price,
    time
  );
  // let res = offerNFT.cancelOffer(1, options);

  res = await res.wait();
  if (res.status === 0) {
    console.log('Transaction Failed');
  }
  console.log(res);
  return res;
};
