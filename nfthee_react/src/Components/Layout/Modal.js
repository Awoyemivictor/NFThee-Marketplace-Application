import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { handleNFTBuy, handleNFTBidListing } from '../../Config/sendFunctions';
import {
  getCollection,
  handleBuyNotification,
} from '../../services/apiServices';

export const Modal = ({ onRequestClose }) => {
  // Use useEffect to add an event listener to the document
  useEffect(() => {
    function onKeyDown(event) {
      if (event.keyCode === 27) {
        // Close the modal when the Escape key is pressed
        onRequestClose();
      }
    }

    // Prevent scolling
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    // Clear things up when unmounting this component
    return () => {
      document.body.style.overflow = 'visible';
      document.removeEventListener('keydown', onKeyDown);
    };
  });
  const data = [
    { id: 1, name: 'USD', value: 'usd' },
    { id: 2, name: 'INR', value: 'inr' },
    { id: 3, name: 'EUR', value: 'eur' },
    { id: 4, name: 'JPY', value: 'jpy' },
    { id: 5, name: 'GBP', value: 'gbp' },
    { id: 6, name: 'IDR', value: 'idr' },
  ];
  const [selectedId, setSelectedId] = useState('bg-disabled');
  console.log(selectedId);

  return (
    <div className='modal__backdrop'>
      <div className='modal__container'>
        <div class='row '>
          <div class='col-11'>
            <h3 className='modal__title'>Select Currency</h3>
          </div>
          <div class='col-1'>
            <Link onClick={onRequestClose}>
              <img src='assets/images/icons/close.png' alt='' />
            </Link>
          </div>
        </div>

        <div className='card' style={{ border: 'none' }}>
          <div className='card-body'>
            <div class='row'>
              {data.map((card) => {
                return (
                  <>
                    <div
                      onClick={() => setSelectedId(card.id)}
                      className={
                        selectedId && selectedId == card.id
                          ? 'bg-disabled col-lg-4 mb-5'
                          : 'col-lg-4 mb-5'
                      }
                    >
                      <div
                        className={
                          selectedId && selectedId == card.id
                            ? 'btn-card selected-card'
                            : 'btn-card'
                        }
                      >
                        <span className='me-2'>
                          <img
                            src='assets/images/icons/currency-rate-icon.png'
                            alt=''
                          />
                        </span>{' '}
                        {card.name}{' '}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        {/* <button type="button" onClick={onRequestClose}>
					Close
				</button> */}
      </div>
    </div>
  );
};

export const ModalBuynft = ({ onRequestClose, nftData }) => {
  const buyNFT = async () => {
    console.log(
      nftData?.putOnMarketplace?.price,
      nftData?.chooseCollection,
      nftData?.tokenId
    );
    const getCollectioAddress = await getCollection(
     nftData?.chooseCollection
    );
    const price = nftData?.putOnMarketplace?.price;
    const price2 = nftData?.putOnMarketplace.Bid_price;

    const collectionName = nftData?.chooseCollection;
    const tokenId = nftData?.tokenId;
    console.log(price);

    console.log(nftData);
    if (nftData?.putOnMarketplace?.price !== undefined) {
      await handleNFTBuy(price, collectionName, tokenId);
      await handleBuyNotification(nftData.currentOwner._id);
    } else {
      await handleNFTBidListing(tokenId, price2, getCollectioAddress);
    }
  };
  // Use useEffect to add an event listener to the document
  useEffect(() => {
    function onKeyDown(event) {
      onRequestClose();
    }

    // Prevent scolling
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    // Clear things up when unmounting this component
    return () => {
      document.body.style.overflow = 'visible';
      document.removeEventListener('keydown', onKeyDown);
    };
  });

  return (
    <div className='modal__backdrop'>
      <div className='modal__container1'>
        <div class='row'>
          <div class='col-11'>
            <h2 class='modal_title'>Complete Checkout</h2>
          </div>
          <div class='col-1'>
            <Link onClick={onRequestClose}>
              <img src='/assets/images/icons/close.png' alt='' />
            </Link>
          </div>
        </div>

        <div className='card' style={{ border: 'none' }}>
          <div className='card-body'>
            <div className='  table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th scope='col' style={{ fontSize: '22px' }}>
                      Item
                    </th>
                    <th scope='col' style={{ fontSize: '22px' }}>
                      Unit Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class='d-flex align-items-center'>
                        <img
                          src={
                            nftData.uploadFile ||
                            '/assets/images/icons/activeimg.png'
                          }
                          alt=''
                          class='user-img'
                          style={{ height: '100px', width: '100px' }}
                        />
                        <span class='ms-2' style={{ fontSize: '18px' }}>
                          {nftData.name}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div class='price-detail'>
                        <h5>
                          <img
                            src='/assets/images/icons/ethereum.png'
                            alt=''
                            class='me-1'
                            style={{ fontSize: '18px' }}
                          />
                          {nftData?.putOnMarketplace
                            ? nftData?.putOnMarketplace?.price ||
                              nftData?.putOnMarketplace?.Bid_price
                            : ''}
                        </h5>
                        <h6>$52547.30</h6>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button
              type='button'
              href='#'
              className='btn btn-violet edit-profile-btn ms-2 w-100'
              onClick={buyNFT}
            >
              Checkout
            </button>
          </div>
        </div>

        {/* <button type="button" onClick={onRequestClose}>
					Close
				</button> */}
      </div>
    </div>
  );
};

export const ConvertModal = ({
  onRequestClose,
  setActiveTab,
  setEth,
  setWth,
  handleEth,
  handleWth,
  eth,
  wth,
  activeTab,
}) => {
  return (
    <div className='modal__backdrop'>
      <div className='modal__container1'>
        <div class='row'>
          <div class='col-11'>
            <h2 class='modal_title'>Convert </h2>
          </div>
          <div class='col-1'>
            <Link onClick={onRequestClose}>
              <img src='/assets/images/icons/close.png' alt='' />
            </Link>
          </div>
        </div>

        <div className='offer-price'>
          <div className='tab-content custom-scrollbar' id='myTabContent'>
            <ul className='nav nav-tabs' id='myTab' role='tablist'>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link active'
                  id='ETHtoWETH-tab'
                  data-bs-toggle='tab'
                  data-bs-target='#ETHtoWETH'
                  type='button'
                  role='tab'
                  aria-controls='ETHtoWETH'
                  aria-selected='true'
                  value={1}
                  onClick={(e) => setActiveTab(e.target.value)}
                >
                  ETH to WETH
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link'
                  id='WETHtoETH-tab'
                  data-bs-toggle='tab'
                  data-bs-target='#WETHtoETH'
                  type='button'
                  role='tab'
                  aria-controls='WETHtoETH'
                  aria-selected='false'
                  value={2}
                  onClick={(e) => setActiveTab(e.target.value)}
                >
                  WETH to ETH
                </button>
              </li>
            </ul>
            <div
              className='tab-pane fade show active'
              id='ETHtoWETH'
              role='tabpanel'
              aria-labelledby='ETHtoWETH-tab'
            >
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    <img
                      src='/assets/images/icons/ethereum-pink.png'
                      alt=''
                      className='me-1 eth-icon'
                    />{' '}
                    Eth
                  </span>
                </div>
                <input
                  type='number'
                  className='form-control'
                  placeholder={'Enter Amount'}
                  value={eth}
                  onChange={(e) => setEth(e.target.value)}
                />
                <div className='input-group-append'>
                  <span className='input-group-text'>$0.00</span>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='WETHtoETH'
              role='tabpanel'
              aria-labelledby='WETHtoETH-tab'
            >
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    <img
                      src='/assets/images/icons/ethereum-pink.png'
                      alt=''
                      className='me-1 eth-icon'
                    />{' '}
                    WETH
                  </span>
                </div>
                <input
                  type='number'
                  className='form-control'
                  placeholder={'Enter Amount'}
                  value={wth}
                  onChange={(e) => setWth(e.target.value)}
                />
                <div className='input-group-append'>
                  <span className='input-group-text'>$0.00</span>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-2 text-end'>
            <h6 className='balance-value'>
              Balance : <span>0.000 WETH</span>
            </h6>
          </div>
          <div className='modal-footer border-0'>
            {activeTab === '1' ? (
              <button
                type='button'
                className='btn btn-violet shadow-none'
                data-bs-toggle='modal'
                data-bs-dismiss='modal'
                onClick={handleEth}
              >
                Wrap
              </button>
            ) : (
              <button
                type='button'
                className='btn btn-violet shadow-none'
                data-bs-toggle='modal'
                data-bs-dismiss='modal'
                onClick={handleWth}
              >
                Unwrap
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ListingModal = ({
  onRequestClose,
  setListing,
  handleTimedAuctionChange,
  handleFixedPriceChange,
  fixedPrice,
  handleBidPriceChange,
  openForBids,
  timedAuction,
  setTimedAuction,
}) => {
  return (
    <div className='modal__backdrop'>
      <div className='modal__container1'>
        <div class='row'>
          <div class='col-11'>
            <h2 class='modal_title'>Put On Marketplace </h2>
          </div>
          <div class='col-1'>
            <Link onClick={onRequestClose}>
              <img src='/assets/images/icons/close.png' alt='' />
            </Link>
          </div>

          <div className='create-item-tab'>
            <div className='col-md-12 col-lg-12'>
              <ul
                className='nav nav-pills pb-4 mb-3 border-bottom row '
                id='pills-tab'
                role='tablist'
              >
                <li className='nav-item' role='presentation'>
                  <a
                    className='nav-link active mb-4 mb-lg-0'
                    id={0}
                    onClick={(e) => setListing(e.currentTarget.id)}
                    data-bs-toggle='pill'
                    data-bs-target='#fixed-price'
                    role='tab'
                    aria-selected='true'
                  >
                    <img
                      src='/assets/images/icons/price-tag.png'
                      alt=''
                      className='img-fluid'
                    />
                    <h5>Fixed Price</h5>
                  </a>
                </li>
                <li className='nav-item' role='presentation'>
                  <a
                    className='nav-link mb-4 mb-lg-0'
                    onClick={(e) => setListing(e.currentTarget.id)}
                    id={1}
                    data-bs-toggle='pill'
                    data-bs-target='#open-bid'
                    role='tab'
                    aria-selected='false'
                  >
                    <img
                      src='/assets/images/icons/auction.png'
                      alt=''
                      className='img-fluid'
                    />
                    <h5>Open For Bids</h5>
                  </a>
                </li>
                <li className='nav-item' role='presentation'>
                  <a
                    className='nav-link'
                    onClick={(e) => setListing(e.currentTarget.id)}
                    id={2}
                    data-bs-toggle='pill'
                    data-bs-target='#timed-auction'
                    role='tab'
                    aria-selected='false'
                  >
                    <img
                      src='/assets/images/icons/clock.png'
                      alt=''
                      className='img-fluid'
                    />
                    <h5>Timed Auction</h5>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='tab-content' id='pills-tabContent'>
            <div
              className='tab-pane fade show active'
              id='fixed-price'
              role='tabpanel'
            >
              <div className='create-item-content border-bottom mb-3 pb-3'>
                <h4 className='create-item-title mb-3'>Price</h4>
                <div className='input-group mb-2'>
                  <input
                    type='text'
                    className='form-control'
                    name='price'
                    required
                    onChange={handleFixedPriceChange}
                    value={fixedPrice.price}
                    placeholder='Enter Price For One Piece'
                  />
                  <div class='invalid-feedback'>Enter price </div>

                  <div className='input-group-append'>
                    <select className='form-select' id='basic-addon2'>
                      <option selected>MATIC</option>
                      <option value={1}>WBNB</option>
                    </select>
                  </div>
                </div>
                <div className='d-flex align-items-center price-detail'>
                  <a href='#' className='me-3'>
                    <h6 className='mb-0'>
                      Service Fee <span>2%</span>
                    </h6>
                  </a>
                  <a href='#'>
                    <h6 className='mb-0'>
                      You Will Receive <span>0 ETH</span>
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className='tab-pane fade' id='open-bid' role='tabpanel'>
              <div className='create-item-content border-bottom mb-3 pb-3'>
                <h4 className='create-item-title mb-3'>Bid Price</h4>
                <div className='input-group mb-2'>
                  <input
                    type='text'
                    className='form-control'
                    name='Bid_price'
                    onChange={handleBidPriceChange}
                    value={openForBids.Bid_price}
                    placeholder='Enter Price For Bid Piece'
                    required
                  />
                  <div class='invalid-feedback'>Enter BID Price </div>

                  <div className='input-group-append'>
                    <select className='form-select' id='basic-addon2'>
                      <option selected>ETH</option>
                      <option value={1}>ETH</option>
                      <option value={2}>ETH</option>
                      <option value={3}>ETH</option>
                    </select>
                  </div>
                </div>
                <div className='d-flex align-items-center price-detail'>
                  <a href='#' className='me-3'>
                    <h6 className='mb-0'>
                      Service Fee <span>2%</span>
                    </h6>
                  </a>
                  <a href='#'>
                    <h6 className='mb-0'>
                      You Will Receive <span>0 ETH</span>
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className='tab-pane fade' id='timed-auction' role='tabpanel'>
              <div className='create-item-content border-bottom mb-3 pb-3'>
                <h4 className='create-item-title mb-3'>Minimum Bid</h4>
                <div className='mb-2'>
                  <input
                    name='minimumBid'
                    value={timedAuction.minimumBid}
                    onChange={handleTimedAuctionChange}
                    type='text'
                    className='form-control'
                    placeholder='Enter minimum bid'
                    required
                  />
                  <div class='invalid-feedback'>Enter minimumBid Price </div>
                </div>
                <div className='d-flex align-items-center price-detail'>
                  <a href='#'>
                    <h6 className='mb-0'>
                      Bids below this amount won't be allowed.
                    </h6>
                  </a>
                </div>
              </div>
              <div className='create-item-content border-bottom mb-3 pb-3'>
                {/* <div className='col-lg-6 col-md-6'>
                                        <h4 className='create-item-title mb-3'>
                                          Start Date
                                        </h4>
                                        <select
                                          onChange={handleStartDate}
                                          className='form-select form-control d-block'
                                        >
                                          <option
                                            value='Right after listing'
                                            selected
                                          >
                                            Right after listing
                                          </option>
                                          <option value='One'>One</option>
                                          <option value='Two'>Two</option>
                                          <option value='Three'>Three</option>
                                        </select>
                                      </div> */}
                <div className='col-lg-6 col-md-6'>
                  <h4 className='create-item-title mb-3'>End Date</h4>
                  <input
                    type='date'
                    name='finishDate'
                    onChange={(e) =>
                      setTimedAuction({
                        ...timedAuction,
                        [e.target.name]: e.target.value,
                      })
                    }
                    className='form-select form-control d-block'
                    min='2023-02-17'
                    max='2023-02-28'
                    required
                  />
                  <div class='invalid-feedback'>select Date </div>

                  {/* <option
                                            value='Right after listing'
                                            selected
                                          >
                                            Right after listing
                                          </option>
                                          <option value='One'>One</option>
                                          <option value='Two'>Two</option>
                                          <option value='Three'>Three</option> */}
                  {/* </input> */}
                </div>
              </div>
            </div>
            <div className='modal-footer border-0'>
              <button
                type='button'
                className='btn btn-violet shadow-none'
                data-bs-dismiss='modal'
                aria-label='Close'
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
