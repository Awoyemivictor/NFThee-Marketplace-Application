import { getUnixTimeAfterDays } from './helpers';
import { ethers } from 'ethers';
import contracts from './contracts';

export const getFullYearTime = async () => {
  const days = 365;
  return  getUnixTimeAfterDays(days);
};

export const GENERAL_TIMESTAMP = 2214189165;
export const GENERAL_DATE = '01/03/2040';
export const CURRENCY = 'MATIC';
export const MAX_ALLOWANCE_AMOUNT = ethers.constants.MaxInt256;
export const options = [
  { value: contracts.polygonContracts.TESTERC20, title: 'WBNB' },
];

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export const MAX_FILE_SIZE = 50;

export const getUserAddress = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
  let accounts = await provider.send('eth_requestAccounts', []);
  let account = accounts[0];
  provider.on('accountsChanged', function (accounts) {
    account = accounts[0];
  });

  const signer = provider.getSigner();

  const address = await signer.getAddress();

  console.log(address);

  return address;
};
