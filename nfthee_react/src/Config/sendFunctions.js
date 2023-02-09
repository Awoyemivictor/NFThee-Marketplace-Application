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
  nftType,
  name,
  symbol,
  minterAddress,
  royaltyPercentage,
  collectionAddress
) => {
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
  let mintNFT = await exportInstance(contractAddress, theeERC721ABI.abi);
  let res = await mintNFT.mint(1, '0x00');
  res = await res.wait();
  if (res.status === 0) {
    console.log('Transaction Failed');
  }
  console.log(res);
};

export const handleListNFTSale = async () => {
  let listNFT = await exportInstance(
    contracts.polygonContracts.MARKETPLACE,
    MarketplaceABI.abi
  );

  let res = await listNFT.sell(
    '0xdeB549a8c345b5F4D12612c9958B94EB98C9E699',
    '1',
    10,
    100
  );
  res = await res.wait();
  if (res.status === 0) {
    console.log('Transaction Failed');
  }
  console.log(res);
};
