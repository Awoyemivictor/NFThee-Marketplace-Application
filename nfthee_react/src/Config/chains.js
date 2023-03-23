/* eslint-disable no-undef */
export async function bscChain() {
  if (window.ethereum && window.ethereum.isMetaMask) {
    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x38' }],
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x38',
                chainName: 'Binance Smart Chain',
                nativeCurrency: {
                  name: 'BNB',
                  symbol: 'BNB',
                  decimals: 18,
                },
                rpcUrls: ['https://bsc-dataseed2.defibit.io'],
                blockExplorerUrls: ['https://bscscan.com/'],
              },
            ],
          });
        } catch (addError) {
          console.log('Error adding Chain');
        }
      }
    }
  }
}
export async function polyChain() {
  if (window.ethereum && window.ethereum.isMetaMask) {
    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x89' }],
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x89',
                chainName: 'Polygon',
                nativeCurrency: {
                  name: 'MATIC',
                  symbol: 'MATIC',
                  decimals: 18,
                },
                rpcUrls: ['https://matic-mainnet.chainstacklabs.com'],
                blockExplorerUrls: ['https://polygonscan.com/'],
              },
            ],
          });
        } catch (addError) {
          console.log('Error adding Chain');
        }
      }
    }
  }
}

export async function ethChain() {
  if (window.ethereum && window.ethereum.isMetaMask) {
    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x1' }],
      });
    } catch (switchError) {
      console.log('Wallet Not Connected');
    }
  }
}

export async function bscTest() {
  if (window.ethereum && window.ethereum.isMetaMask) {
    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x61' }],
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x61',
                chainName: 'BSC Testnet',
                nativeCurrency: {
                  name: 'tBNB',
                  symbol: 'tBNB',
                  decimals: 18,
                },
                rpcUrls: ['https://data-seed-prebsc-1-s3.binance.org:8545'],
                blockExplorerUrls: ['https://testnet.bscscan.com/'],
              },
            ],
          });
        } catch (addError) {
          console.log('Error adding Chain');
        }
      }
    }
  }
}

export async function ethTest() {
  if (window.ethereum && window.ethereum.isMetaMask) {
    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0xaa36a7' }],
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0xaa36a7',
                chainName: 'Sepolia test network',
                nativeCurrency: {
                  name: 'ETH',
                  symbol: 'SepoliaETH',
                  decimals: 18,
                },
                rpcUrls: ['https://rpc.sepolia.org'],
                blockExplorerUrls: ['https://sepolia.etherscan.io'],
              },
            ],
          });
        } catch (addError) {
          console.log('Error adding Chain');
        }
      }
    }
  }
}

export async function polyTest() {
  if (window.ethereum && window.ethereum.isMetaMask) {
    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x13881' }],
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x13881',
                chainName: 'Polygon Mumbai',
                nativeCurrency: {
                  name: 'MATIC',
                  symbol: 'MATIC',
                  decimals: 18,
                },
                rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
                blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
              },
            ],
          });
        } catch (addError) {
          console.log('Error adding Chain');
        }
      }
    }
  }
}

export async function harmonyTest() {
  if (window.ethereum && window.ethereum.isMetaMask) {
    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x6357d2e0' }],
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x6357d2e0',
                chainName: 'Harmony Testnet Shard 0',
                nativeCurrency: {
                  name: 'ONE',
                  symbol: 'ONE',
                  decimals: 18,
                },
                rpcUrls: ['https://api.s0.b.hmny.io'],
                blockExplorerUrls: ['https://explorer.pops.one'],
              },
            ],
          });
        } catch (addError) {
          console.log('Error adding Chain');
        }
      }
    }
  }
}
