import { ethers } from 'ethers';
import { getUserAddress } from '../constants';
import TokenABI from '../abis/polygon/WBNB.json';
import contracts from '../contracts';

//ethereum._metamask.isUnlocked()
const contractAddress = {
  WETH: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
  WBNB: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
  WMATIC: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
};

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

const contractAddresswithID = async () => {
  console.log(window.ethereum.networkVersion, 'window.ethereum.networkVersion');
  if (window.ethereum.networkVersion === '5') {
    return contractAddress.WETH;
  } else if (window.ethereum.networkVersion === '97') {
    return contractAddress.WBNB;
  } else if (window.ethereum.networkVersion === '80001') {
    return contractAddress.WMATIC;
  }
};

export const wrapPaymentTokens = async () => {
  const price = ethers.utils.parseEther('0.0001').toString();
  console.log(price);

  console.log(window.ethereum.networkVersion, 'window.ethereum.networkVersion');

  if (
    window.ethereum.networkVersion === '5' ||
    window.ethereum.networkVersion === '97' ||
    window.ethereum.networkVersion === '80001'
  ) {
    const tokenContract = await contractAddresswithID();
    const userAccount = await getUserAddress();
    console.log(tokenContract);

    const tokenInstance = await exportInstance(tokenContract, TokenABI.abi);
    console.log(tokenInstance);

    let gasLimit = await tokenInstance.estimateGas.deposit({
      from: userAccount,
      value: price,
    });
    console.log(Number(gasLimit) + 10);

    const res = await tokenInstance.deposit({
      from: userAccount,
      gasLimit: Number(gasLimit) + 10,
      value: price,
    });

    console.log(res);

    return res.status;
  } else {
    return console.log('Invalid Chain');
  }
};

export const unwrapPaymentTokens = async () => {
  const price = ethers.utils.parseEther('0.0001').toString();
  console.log(price);

  console.log(window.ethereum.networkVersion, 'window.ethereum.networkVersion');

  if (
    window.ethereum.networkVersion === '5' ||
    window.ethereum.networkVersion === '97' ||
    window.ethereum.networkVersion === '80001'
  ) {
    const tokenContract = await contractAddresswithID();

    const userAccount = await getUserAddress();

    const tokenInstance = await exportInstance(tokenContract, TokenABI.abi);

    let gasLimit = await tokenInstance.estimateGas.withdraw(price, {
      from: userAccount,
    });
    console.log(Number(gasLimit) + 10);

    const res = await tokenInstance.withdraw(price, {
      from: userAccount,
      gasLimit: Number(gasLimit) + 10,
    });

    console.log(res);
  } else {
    return console.log('Invalid Chain');
  }
};
