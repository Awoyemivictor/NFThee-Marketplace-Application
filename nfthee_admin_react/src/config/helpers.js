import supportedChains from './supportedChains';

export function getChainData(chainId) {
  if (!chainId) {
    return null;
  }
  const chainData = supportedChains.filter(
    (chain) => chain.chain_id === chainId
  )[0];

  if (!chainData) {
    throw new Error('ChainId missing or not supported');
  }

  const API_KEY = '460f40a260564ac4a4f4b3fffb032dad';

  if (
    chainData.rpc_url.includes('infura.io') &&
    chainData.rpc_url.includes('%API_KEY%') &&
    API_KEY
  ) {
    const rpcUrl = chainData.rpc_url.replace('%API_KEY%', API_KEY);

    return {
      ...chainData,
      rpc_url: rpcUrl,
    };
  }

  return chainData;
}

export const getUnixTimeNowInSec = () => Math.floor(Date.now() / 1000);

export const getUnixTimeAfterMins = (mins) => getUnixTimeNowInSec() + mins * 60;

export const getUnixTimeAfterDays = (days) =>
  getUnixTimeNowInSec() + days * 60 * 60 * 24;

export const generateRandomNumbers = () => Math.floor(Math.random() * 1000) + 1;
