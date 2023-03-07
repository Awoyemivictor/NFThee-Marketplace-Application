import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { handleNFTBuy, handleNFTBidListing } from '../../Config/sendFunctions';
import { getCollection } from '../../services/apiServices';

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
    <div className='modal__backdrop' >
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

export const ModalBuynft = ({ onRequestClose, collectionData }) => {
  const buyNFT = async () => {
    console.log(
      collectionData?.putOnMarketplace?.price,
      collectionData?.chooseCollection,
      collectionData?.tokenId
    );
    const getCollectioAddress = await getCollection({
      name: collectionData?.chooseCollection,
    });
    const price = collectionData?.putOnMarketplace?.price;
    const price2 = collectionData?.putOnMarketplace.Bid_price;

    const collectionName = collectionData?.chooseCollection;
    const tokenId = collectionData?.tokenId;
    console.log(price);

    console.log(collectionData);
    if (collectionData?.putOnMarketplace?.price !== undefined) {
      await handleNFTBuy(price, collectionName, tokenId);
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
                            collectionData.uploadFile ||
                            '/assets/images/icons/activeimg.png'
                          }
                          alt=''
                          class='user-img'
                          style={{ height: '100px', width: '100px' }}
                        />
                        <span class='ms-2' style={{ fontSize: '18px' }}>
                          {collectionData.name}
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
                          {collectionData?.putOnMarketplace
                            ? collectionData?.putOnMarketplace?.price ||
                              collectionData?.putOnMarketplace?.Bid_price
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


export const ConvertModal=({ onRequestClose,  
  setActiveTab,
  setEth,
  setWth,
  handleEth,
  handleWth, 
  eth,
  wth,
  activeTab
})=>{
  

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
                                      <div
                                        className='tab-content custom-scrollbar'
                                        id='myTabContent'
                                      >
                                        <ul
                                          className='nav nav-tabs'
                                          id='myTab'
                                          role='tablist'
                                        >
                                          <li
                                            className='nav-item'
                                            role='presentation'
                                          >
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
                                              onClick={e=>setActiveTab(e.target.value)}
                                            >
                                               ETH to WETH
                                            </button>
                                          </li>
                                          <li
                                            className='nav-item'
                                            role='presentation'
                                          >
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
                                              onClick={e=>setActiveTab(e.target.value)}
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
                                              placeholder={
                                                'Enter Amount'
                                              }
                                              value={eth}
                                              onChange={(e) =>
                                                setEth(e.target.value)
                                              }
                                            />
                                            <div className='input-group-append'>
                                              <span className='input-group-text'>
                                                $0.00
                                              </span>
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
                                              placeholder={
                                                'Enter Amount'
                                              }
                                              value={wth}
                                              onChange={(e) =>
                                                setWth(e.target.value)
                                              }
                                            />
                                            <div className='input-group-append'>
                                              <span className='input-group-text'>
                                                $0.00
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className='mt-2 text-end'>
                                        <h6 className='balance-value'>
                                          Balance :{' '}
                                          <span>0.000 WETH</span>
                                        </h6>
                                      </div>
                                      <div className='modal-footer border-0'>
                                        {activeTab ==='1'?
                                        <button
                                          type='button'
                                          className='btn btn-violet shadow-none'
                                          
                                          data-bs-toggle="modal" data-bs-dismiss="modal"
                                          onClick={handleEth}
                                        >
                                          Wrap
                                        </button>:<button
                                          type='button'
                                          className='btn btn-violet shadow-none'
                                       
                                          data-bs-toggle="modal" data-bs-dismiss="modal"
                                          onClick={handleWth}
                                        >
                                          Unwrap
                                        </button>}
                                      </div>
                                    </div>




        </div>
    </div>
  );


}
