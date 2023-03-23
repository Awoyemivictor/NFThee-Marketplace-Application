import React, { useEffect, useCallback, useReducer } from 'react';
import { providers } from 'ethers';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import WalletLink from 'walletlink';

const INFURA_ID = '460f40a260564ac4a4f4b3fffb032dad';
const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFURA_ID, // required
    },
  },
  'custom-walletlink': {
    display: {
      logo:
        'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
      name: 'Coinbase',
      description: 'Connect to Coinbase Wallet (not Coinbase App)',
    },
    options: {
      appName: 'Coinbase', // Your app name
      networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
      chainId: 1,
    },
    package: WalletLink,
    connector: async (_, options) => {
      const { appName, networkUrl, chainId } = options;
      const walletLink = new WalletLink({
        appName,
      });
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
      await provider.enable();
      return provider;
    },
  },
};

let web3Modal;
if (window !== 'undefined') {
  web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    cacheProvider: true,
    providerOptions, // required
  });
}

const initialState = {
  provider: null,
  web3Provider: null,
  address: null,
  chainId: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_WEB3_PROVIDER':
      return {
        ...state,
        provider: action.provider,
        web3Provider: action.web3Provider,
        address: action.address,
        chainId: action.chainId,
      };
    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.address,
      };
    case 'SET_CHAIN_ID':
      return {
        ...state,
        chainId: action.chainId,
      };
    case 'RESET_WEB3_PROVIDER':
      return initialState;
    default:
      throw new Error();
  }
}

export const Account = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { provider, web3Provider, address, chainId } = state;

  const connect = useCallback(async function() {
    const provider = await web3Modal.connect();

    const web3Provider = new providers.Web3Provider(provider);

    const signer = web3Provider.getSigner();
    const address = await signer.getAddress();

    const network = await web3Provider.getNetwork();

    dispatch({
      type: 'SET_WEB3_PROVIDER',
      provider,
      web3Provider,
      address,
      chainId: network.chainId,
    });
  }, []);

  const disconnect = useCallback(
    async function() {
      await web3Modal.clearCachedProvider();
      if (provider.disconnect && provider.disconnect === 'function') {
        await provider.disconnect();
      }
      dispatch({
        type: 'RESET_WEB3_PROVIDER',
      });
    },
    [provider]
  );

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect();
    }
  }, [connect]);

  useEffect(() => {
    const handleAccountsChanged = (accounts) => {
      // eslint-disable-next-line no-console
      console.log('accountsChanged', accounts);
      dispatch({
        type: 'SET_ADDRESS',
        address: accounts[0],
      });
    };
    console.log('account', address);

    // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
    const handleChainChanged = (_hexChainId) => {
      window.location.reload();
    };

    const handleDisconnect = (error) => {
      // eslint-disable-next-line no-console
      console.log('disconnect', error);
      disconnect();
    };
  }, [provider, disconnect]);

  //   const chainData = getChainData(chainId);

  return (
    <div>
      {web3Provider ? (
        <button
          className='btn-lg btn btn-primary'
          type='button'
          onClick={disconnect}
        >
          {address
            ? address.slice(0, 6) + '...' + address.slice(37, 42)
            : 'Disconnect'}
        </button>
      ) : (
        <button
          className='btn-lg btn btn-primary'
          type='button'
          onClick={connect}
        >
          {address
            ? address.slice(0, 6) + '...' + address.slice(37, 42)
            : 'Connect'}
        </button>
      )}
    </div>
  );
};
