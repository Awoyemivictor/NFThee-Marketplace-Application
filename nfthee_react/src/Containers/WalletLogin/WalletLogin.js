import { useEffect, useState, useMemo } from 'react';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import $ from 'jquery';
import '@rainbow-me/rainbowkit/styles.css';
import {
  // getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  connectorsForWallets,
  ConnectButton,
} from '@rainbow-me/rainbowkit';
import {
  createClient,
  configureChains,
  WagmiConfig,
  goerli,
  mainnet,
} from 'wagmi';
import {
  metaMaskWallet,
  braveWallet,
  rainbowWallet,
  walletConnectWallet,
  coinbaseWallet,
} from '@rainbow-me/rainbowkit/wallets';
import {
  optimismGoerli,
  polygon,
  polygonMumbai,
  bscTestnet,
  bsc,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [polygonMumbai, optimismGoerli, goerli, bscTestnet, bsc, mainnet],
  [
    alchemyProvider({
      apiKey:
        'https://polygon-mumbai.g.alchemy.com/v2/R9CPfm29xRvZrrZ1fc-zLh-zbosCEiKq',
    }),
    publicProvider(),
  ]
);
const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ chains }),
      braveWallet({ chains }),
      rainbowWallet({ chains }),
      walletConnectWallet({ chains }),
      coinbaseWallet({ chains }),
    ],
  },
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

//========================= Solana Wallet Connectors ===========================>
// import {
//   ConnectionProvider,
//   WalletProvider,
// } from '@solana/wallet-adapter-react';
// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
// import { clusterApiUrl } from '@solana/web3.js';
// import {
//   LedgerWalletAdapter,
//   PhantomWalletAdapter,
//   SlopeWalletAdapter,
//   SolflareWalletAdapter,
//   SolletExtensionWalletAdapter,
//   SolletWalletAdapter,
//   TorusWalletAdapter,
// } from '@solana/wallet-adapter-wallets';

// require('@solana/wallet-adapter-react-ui/styles.css');

function WalletLogin() {
  // const network = WalletAdapterNetwork.Testnet;
  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const history = useHistory();
  const data = JSON.parse(localStorage.getItem('userLoggedIn'));
  const tok = JSON.parse(localStorage.getItem('TokenData'));
if(data&&tok!=null){
  history.push('/')
}
  useEffect(() => {
    const loadProvider = async () => {
      // const provider = await detectEthereumProvider();
      window.ethereum.on('accountsChanged', function (accounts) {
        // Time to reload your interface with accounts[0]!
        // console.log(accounts)
      });
    };
    loadProvider();
  }, []);
  // window.close()
  const MetaMask = async () => {
    if (window.ethereum === undefined) {
      // console.log("fhjthra")
      document.location.href = 'https://metamask.io/download/';
    }
    const accounts = await window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .then((accounts) => {
        if (accounts[0]) {
          Swal.fire({
            // position: 'top-end',
            icon: 'success',
            title: 'Successfully Logged In',
            showConfirmButton: false,
            timer: 1500,
          });
          localStorage.setItem('TokenData', JSON.stringify(accounts));

          // history.push("/");

          // window.location.href = "/"
        } else {
        }
      });
  };

  // const wallets = useMemo(
  //   () => [
  //     new PhantomWalletAdapter(),
  //     new SlopeWalletAdapter(),
  //     new SolflareWalletAdapter({ network }),
  //     new TorusWalletAdapter(),
  //     new LedgerWalletAdapter(),
  //     new SolletWalletAdapter({ network }),
  //     new SolletExtensionWalletAdapter({ network }),
  //   ],
  //   [network]
  // );

  // var tabvalue= 0;
  // const walletTab = (value)=>{
  //   // var   tabvalue=value;
  //   console.log(value)
  // }
  const [tabvalue, setTabvalue] = useState(0);
  // var tabvalue= 0;
  const walletTab = (id) => {
    setTabvalue(id);
    // return walletid;
    console.log(tabvalue);
  };

  const walletConnect = async () => {
    var val = tabvalue;
    console.log(val);
    if (val === 1) {
      if (window.ethereum === undefined) {
        // console.log("fhjthra")
        document.location.href = 'https://metamask.io/download/';
      }
      const accounts = await window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
          if (accounts[0]) {
            Swal.fire({
              // position: 'top-end',
              icon: 'success',
              title: 'Successfully Logged In',
              showConfirmButton: false,
              timer: 1500,
            });
            localStorage.setItem('TokenData', JSON.stringify(accounts));

            // history.push('/');
            window.location.href = "/"
          } else {
          }
        });
    } else if (val === 2) {
      console.log(val);
    } else if (val === 3) {
      console.log(val);
    } else if (val === 4) {
    } else {
      Swal.fire('Please select Wallet');
      console.log('no api');
    }
  };

  useEffect(() => {
    $('.wallet-ethereum').click(function () {
      $('.solana-wallet-list').hide();
      $('.ethereum-wallet-list').show();
    });

    $('.wallet-solano').click(function () {
      $('.ethereum-wallet-list').hide();
      $('.solana-wallet-list').show();
    });
  }, []);
  // onClick={MetaMask} type='submit'
  return (
    <>
      <main>
        <section className='bg-section wallet-area pb-5'>
          <div className='container'>
            <div className='col-lg-7 col-md-7 mx-auto p-0'>
              <div className='wallet-header-area text-center mb-lg-5'>
                <h2 className='section-title'>Choose Wallet To Connect</h2>
                <p className='section-subtitle'>
                  Connect With One Of Our Available Wallet Providers Or Create A
                  New One.
                </p>
              </div>

              <div className='row mb-lg-5'>
                <div className='col-lg-6 col-md-6 mb-4 '>
                  <div className='create-item-content wallet-ethereum'>
                    <label className='w-100 mb-0'>
                      <input
                        type='radio'
                        name='product4'
                        className='card-input-element ethereum-card-box'
                        defaultChecked
                      />
                      <div className='panel card-input m-0'>
                        <div className='panel-body d-flex'>
                          <div className='icon'>
                            <span>
                              <img
                                src='assets/images/icons/ethereum-pink.png'
                                alt=''
                                className='img-fluid'
                              />
                            </span>
                          </div>
                          <div className='panel-body-content'>
                            <h3>Ethereum</h3>
                            <p>The most stable and widerspread</p>
                            <a
                              className='btn btn-create'
                              href='#'
                              style={{ pointerEvents: 'none' }}
                            >
                              Select
                            </a>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6 mb-4'>
                  <div className='create-item-content wallet-solano'>
                    <label className='w-100 mb-0'>
                      <input
                        type='radio'
                        name='product4'
                        className='card-input-element solona-card-box'
                      />
                      <div className='panel card-input m-0'>
                        <div className='panel-body d-flex'>
                          <div className='icon'>
                            <span>
                              <img
                                src='assets/images/icons/solona.png'
                                alt=''
                                className='img-fluid'
                              />
                            </span>
                          </div>
                          <div className='panel-body-content'>
                            <h3>Solana</h3>
                            <p>The cheapest for creating items</p>
                            <a
                              className='btn btn-create'
                              href='#'
                              style={{ pointerEvents: 'none' }}
                            >
                              Select
                            </a>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div className='wallet-item-wrapper ethereum-wallet-list'>
                <div className='row'>
                  <div className='col-lg-12 col-md-12'>
                    <div
                      className='wallet-item-content'
                      onClick={() => walletTab(1)}
                    >
                      <label className='w-100 mb-0'>
                        <input
                          type='radio'
                          name='product5'
                          className='card-input-element solona-card-box'
                        />
                        <div className='panel card-input d-flex justify-content-between'>
                          <div className='panel-body d-flex align-items-center'>
                            <div className='icon'>
                              <span>
                                <img
                                  src='assets/images/icons/metamask.png'
                                  alt=''
                                  className='img-fluid'
                                />
                              </span>
                            </div>
                            <div className='panel-body-content'>
                              <h3>MetaMask</h3>
                            </div>
                          </div>
                          <span className='control-check'>
                            <img
                              src='assets/images/icons/check-white.png'
                              alt=''
                              className='check-icon-img'
                            />
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-12'>
                    <div
                      className='wallet-item-content'
                      onClick={() => walletTab(2)}
                    >
                      <label className='w-100 mb-0'>
                        <input
                          type='radio'
                          name='product5'
                          className='card-input-element solona-card-box'
                        />
                        <div className='panel card-input d-flex justify-content-between'>
                          <div className='panel-body d-flex align-items-center'>
                            <div className='icon'>
                              <span>
                                <img
                                  src='assets/images/icons/wallet-connect.png'
                                  alt=''
                                  className='img-fluid'
                                />
                              </span>
                            </div>
                            <div className='panel-body-content'>
                              <h3>Walletconnect</h3>
                            </div>
                          </div>
                          <span className='control-check'>
                            <img
                              src='assets/images/icons/check-white.png'
                              alt=''
                              className='check-icon-img'
                            />
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-12'>
                    <div
                      className='wallet-item-content'
                      onClick={() => walletTab(3)}
                    >
                      <label className='w-100 mb-0'>
                        <input
                          type='radio'
                          name='product5'
                          className='card-input-element solona-card-box'
                        />
                        <div className='panel card-input d-flex justify-content-between'>
                          <div className='panel-body d-flex align-items-center'>
                            <div className='icon'>
                              <span>
                                <img
                                  src='assets/images/icons/coinbase.png'
                                  alt=''
                                  className='img-fluid'
                                />
                              </span>
                            </div>
                            <div className='panel-body-content'>
                              <h3>Coinbase Wallet</h3>
                            </div>
                          </div>
                          <span className='control-check'>
                            <img
                              src='assets/images/icons/check-white.png'
                              alt=''
                              className='check-icon-img'
                            />
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-12'>
                    <WagmiConfig client={wagmiClient}>
                      <RainbowKitProvider
                        chains={chains}
                        coolMode
                        // theme={myCustomTheme}
                        theme={darkTheme({
                          accentColor: '#7b3fe4',
                          accentColorForeground: 'white',
                          // borderRadius: 'small',
                          // fontStack: 'system',
                          overlayBlur: 'small',
                        })}
                      >
                        <div className='col-md-8 mx-auto'>
                          <button
                            className='btn btn-wallet mt-4'
                            onClick={walletConnect}
                            type='submit'
                          >
                            <ConnectButton label='Connect Wallet' showBalance={false} accountStatus="none" />
                          </button>
                        </div>
                      </RainbowKitProvider>
                    </WagmiConfig>
                    {/* <div className='col-md-8 mx-auto'>
                      <button className='btn btn-wallet mt-4' type='submit'>
                        Connect Wallet
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className='wallet-item-wrapper solana-wallet-list'>
                <div className='row'>
                  <div className='col-lg-12 col-md-12'>
                    <div
                      className='wallet-item-content'
                      onClick={() => walletTab(4)}
                    >
                      <label className='w-100 mb-0'>
                        <input
                          type='radio'
                          name='product6'
                          className='card-input-element solona-card-box'
                        />
                        <div className='panel card-input d-flex justify-content-between'>
                          <div className='panel-body d-flex align-items-center'>
                            <div className='icon'>
                              <span>
                                <img
                                  src='assets/images/icons/Phantom.png'
                                  alt=''
                                  className='img-fluid'
                                />
                              </span>
                            </div>
                            <div className='panel-body-content'>
                              <h3>Phantom</h3>
                            </div>
                          </div>
                          <span className='control-check'>
                            <img
                              src='assets/images/icons/check-white.png'
                              alt=''
                              className='check-icon-img'
                            />
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-12'>
                    <div
                      className='wallet-item-content'
                      onClick={() => walletTab(4)}
                    >
                      <label className='w-100 mb-0'>
                        <input
                          type='radio'
                          name='product6'
                          className='card-input-element solona-card-box'
                        />
                        <div className='panel card-input d-flex justify-content-between'>
                          <div className='panel-body d-flex align-items-center'>
                            <div className='icon'>
                              <span>
                                <img
                                  src='assets/images/icons/Solflare.png'
                                  alt=''
                                  className='img-fluid'
                                />
                              </span>
                            </div>
                            <div className='panel-body-content'>
                              <h3>Solflare</h3>
                            </div>
                          </div>
                          <span className='control-check'>
                            <img
                              src='assets/images/icons/check-white.png'
                              alt=''
                              className='check-icon-img'
                            />
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-12'>
                    <div
                      className='wallet-item-content'
                      onClick={() => walletTab(6)}
                    >
                      <label className='w-100 mb-0'>
                        <input
                          type='radio'
                          name='product6'
                          className='card-input-element solona-card-box'
                        />
                        <div className='panel card-input d-flex justify-content-between'>
                          <div className='panel-body d-flex align-items-center'>
                            <div className='icon'>
                              <span>
                                <img
                                  src='assets/images/icons/Sollet.png'
                                  alt=''
                                  className='img-fluid'
                                />
                              </span>
                            </div>
                            <div className='panel-body-content'>
                              <h3>Sollet</h3>
                            </div>
                          </div>
                          <span className='control-check'>
                            <img
                              src='assets/images/icons/check-white.png'
                              alt=''
                              className='check-icon-img'
                            />
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-12'>
                    <div
                      className='wallet-item-content'
                      onClick={() => walletTab(7)}
                    >
                      <label className='w-100 mb-0'>
                        <input
                          type='radio'
                          name='product6'
                          className='card-input-element solona-card-box'
                        />
                        <div className='panel card-input d-flex justify-content-between'>
                          <div className='panel-body d-flex align-items-center'>
                            <div className='icon'>
                              <span>
                                <img
                                  src='assets/images/icons/atomic_wallet.png'
                                  alt=''
                                  className='img-fluid'
                                />
                              </span>
                            </div>
                            <div className='panel-body-content'>
                              <h3>Atomic Wallet</h3>
                            </div>
                          </div>
                          <span className='control-check'>
                            <img
                              src='assets/images/icons/check-white.png'
                              alt=''
                              className='check-icon-img'
                            />
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-12'>
                    <div className='col-md-8 mx-auto'>
                      <button
                        className='btn btn-wallet mt-4'
                        onClick={walletConnect}
                        type='submit'
                      >
                        Connect Wallet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default WalletLogin;
