const { ethers } = require('ethers');
const { credentials } = require('../../config').constantCredentials;
const { signupModel } = require('../../models');
const AirdropABI = require('./../../contracts/airdrop');

const exportInstance = async () => {
  let provider = new ethers.providers.JsonRpcProvider(
    credentials.POLYGON_RPC_URL
  );
  const wallet = new ethers.Wallet(credentials.OWNER_PRIVATE_KEY, provider);
  let contract = new ethers.Contract(
    credentials.AIRDROP_CONTRACT_ADDRESS,
    '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address[]","name":"recipients","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"airdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"connectToOtherContracts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"retrieveTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
    provider
  );
  const walletConnect = contract.connect(wallet);

  if (walletConnect) {
    return walletConnect;
  } else {
    return {};
  }
};

const platformTokenInstance = async () => {
  let provider = new ethers.providers.JsonRpcProvider(
    credentials.POLYGON_RPC_URL
  );
  const wallet = new ethers.Wallet(credentials.OWNER_PRIVATE_KEY, provider);
  let contract = new ethers.Contract(
    '0xAED8eD0B49fb63E7f578bA43C99c3396FFEb86DE',
    '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]',
    provider
  );
  const walletConnect = contract.connect(wallet);

  if (walletConnect) {
    return walletConnect;
  } else {
    return {};
  }
};

exports.airdropSingleUser = async (req, res) => {
  try {
    let userAddress = [];
    let numOfTokens = [];
    let tokenBalances = [];
    let formatToken;
    const price = ethers.utils.parseEther('10').toString();
    let platformInstance = await platformTokenInstance();

    let userData = await signupModel.find({});
    for (let i = 0; i <= userData.length; i++) {
      if (userData[i] && userData[i].account_address) {
        userAddress.push(userData[i].account_address);
        numOfTokens.push(price);
      } else {
      }
    }

    console.log(userAddress.length);

    for (let i = 0; i < userAddress.length; i++) {
      console.log(userAddress[i]);
      let userBalance = await platformInstance.balanceOf(userAddress[i]);
      formatToken = ethers.utils.formatEther(userBalance);
      tokenBalances.push(formatToken);
    }

    let result = await exportInstance();

    result = await result.airdrop(userAddress, numOfTokens);
    result = await result.wait();

    return {
      message: 'Tokens Airdrop Success',
      status: true,
      data: result,
    };
  } catch (error) {
    return error;
  }
};

exports.airdropNewUsers = async (req, res) => {
  try {
    let userAddress = [];
    let numOfTokens = [];
    let tokenBalances = [];
    let formatToken;
    const price = ethers.utils.parseEther('10').toString();
    let platformInstance = await platformTokenInstance();

    let userData = await signupModel.find({
      timestamps: { $gte: ISODate('2022-02-16T00:00:00.000Z') },
    });

    // let userData = await signupModel.find({});
    // for (let i = 0; i <= userData.length; i++) {
    //   if (userData[i] && userData[i].account_address) {
    //     userAddress.push(userData[i].account_address);
    //     numOfTokens.push(price);
    //   }
    // }

    // console.log(userAddress.length);

    // for (let i = 0; i < userAddress.length; i++) {
    //   console.log(userAddress[i]);
    //   let userBalance = await platformInstance.balanceOf(userAddress[i]);
    //   formatToken = ethers.utils.formatEther(userBalance);
    //   tokenBalances.push(formatToken);
    // }

    // let result = await exportInstance();

    // result = await result.airdrop(userAddress, numOfTokens);
    // result = await result.wait();

    return {
      message: 'Tokens Airdrop Success',
      status: true,
      data: [],
    };
  } catch (error) {
    return error;
  }
};
