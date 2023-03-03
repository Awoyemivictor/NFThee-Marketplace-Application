import { ethers } from "ethers";
export const ChainId = {
  ETH: 1,
  Ropsten: 3,
  BSC: 56,
  BSCTest: 97,
  MATIC: 137,
 ONE: 1666600000,
};


export const getGasPrice = async (
  web3,
  ratio,
  chainId,
) => {
  const gasPriceWei = await web3.eth.getGasPrice();

  const gasPrice = Number(web3Utils.fromWei(gasPriceWei, "gwei"));

  let gasPreferred = gasPrice * (ratio || 1.2);

  if (chainId === ChainId.FTM) {
    gasPreferred = Math.max(gasPreferred, 20); // Minimum 20 on FTM
  }

  return web3Utils.toWei(gasPreferred.toFixed(0), "gwei");
};


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

import { web3Utils } from "../../web3/web3-utils";
import { getPaymentTokenContract } from "../payment-token-contract";

interface WrapTokenInput {
  chainId: number;
  web3: Web3;
  userAccount: string;
  amount: number;
}

export const wrapPaymentTokensEstGas = async ({
  chainId,
  web3,
  userAccount,
  amount,
}: WrapTokenInput) => {
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


export const estimateGasPrice = 