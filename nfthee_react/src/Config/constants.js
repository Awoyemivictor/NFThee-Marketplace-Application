import { getUnixTimeAfterDays } from './helpers';

import { ethers } from 'ethers';
import contracts from './contracts';

export const getFullYearTime = async () => {
  const days = 365;
  return getUnixTimeAfterDays(days);
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
// export const Network = {
//   name: 'Mumbai',
//   chainId: 80001,
//   _defaultProvider: (providers) =>
//     new providers.JsonRpcProvider(process.env.REACT_APP_RPC_URL),
// };
