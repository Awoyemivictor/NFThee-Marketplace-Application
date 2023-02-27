import Web3 from 'web3';
import { ethers } from 'ethers';
import contracts from '../contracts';
import TokenABI from '../abis/polygon/TestERC20.json';

const web3 = new Web3();

export const web3Utils = web3.utils;

export const getGasPrice = async (web3, ratio, chainId) => {
  const gasPriceWei = await web3.eth.getGasPrice();

  const gasPrice = Number(web3Utils.fromWei(gasPriceWei, 'gwei'));

  let gasPreferred = gasPrice * (ratio || 1.2);

  if (chainId === '0x8001') {
    gasPreferred = Math.max(gasPreferred, 20); // Minimum 20 on FTM
  }

  return web3Utils.toWei(gasPreferred.toFixed(0), 'gwei');
};

// export const getPaymentTokenContract = (SCAddress, ABI) => {
//   let provider = new ethers.providers.Web3Provider(window.ethereum);
//   let signer = provider.getSigner();
//   let a = new ethers.Contract(SCAddress, ABI, signer);
//   if (a) {
//     return a;
//   } else {
//     return {};
//   }
// };

export const getPaymentTokenContract = (
    web3,
    chainId,
 ) => {
    const contractAddress = ERC20_ADDRESSES_MAPPING[chainId];
  
    if (contractAddress) {
      return new web3.eth.Contract(WETH as AbiItem[], contractAddress);
    }
  
    return null;
  };
  

const ChainId = {
  ETH: 1,
  Goerli: 3,
  BSC: 56,
  BSCTest: 97,
  MATIC: 137,
  MaticTestnet: 8001,
  ONE: 1666600000,
};

const getPaymentTokenConvertingLink = (chainId) => {
  let prefix = `https://app.uniswap.org/#/swap`;

  if (!chainId) {
    return prefix;
  }

  const contractAddress = contracts.polygonContracts.TESTERC20;

  //   if (chainId === ChainId.BSC || chainId === ChainId.BSCTest) {
  //     prefix = `https://app.apeswap.finance/swap`;
  //   }

  if (chainId === ChainId.MATIC) {
    prefix = 'https://quickswap.exchange/#/swap';
  }

  //   if (chainId === ChainId.FTM) {
  //     return `https://swap.spiritswap.finance/#/exchange/swap/WFTM/FTM`;
  //   }

  //   if (chainId === ChainId.AVAX) {
  //     prefix = 'https://www.traderjoexyz.com/trade';
  //   }

  //   if (chainId === ChainId.ONE) {
  //     prefix = 'https://viperswap.one/#/swap';
  //   }

  return `${prefix}?outputCurrency=${contractAddress}`;
};

export const wrapPaymentTokensEstGas = async (
  chainId,
  web3,
  userAccount,
  amount
) => {
  const tokenContract = getPaymentTokenContract({ chainId, web3 });

  if (!tokenContract) {
    return null;
  }

  try {
    const gasPrice = await getGasPrice({ web3, chainId });
    const tokenAmount = web3Utils.toWei(`${amount}`);
    const gasLimit = await tokenContract.methods
      .deposit()
      .estimateGas({ from: userAccount, gasPrice, value: tokenAmount });
    const gas = Math.round(Number(gasLimit) * 1.1);

    return { gasPrice, gas, total: Number(web3Utils.fromWei(gasPrice)) * gas };
  } catch (err) {
    console.log("Can't estimate gas deposit payment token", err);
    return null;
  }
};
