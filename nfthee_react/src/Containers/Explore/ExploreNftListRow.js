import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation, initReactI18next } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ModalBuynft } from '../../Components/Layout/Modal';
import { useAppDispatch } from '../../hooks/useRedux';
import { setFavorite } from '../../redux/favoriteSlice';
import instance from '../../axios';
import { handleLikes } from '../../services/apiServices';
const ExploreNftListRow = ({ data, loadingFilter, setliked }) => {
 
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  // const [like,setLike]=useState([])
  // const [isLiked, setIsLiked] = useState(false);

  const [isModalOpen, setModalIsOpen] = useState(false);
  const [Buydata, setBuydata] = useState();
  const toggleModal = (index) => {
    console.log(index);
    setBuydata(index);
    setModalIsOpen(!isModalOpen);
  };

  const [noOfElement, setNoOfElement] = useState(8);
  const slice = data.slice(0, noOfElement);
  const { _id } = JSON.parse(localStorage.getItem('userLoggedIn')) || '';
  const [diable, setDisaable] = useState(false);

  const handleAddFavorite = async (e, nft) => {

    const requestBody = {
      id: _id,
      postId: nft,
    };
    console.log({ _id });
    if (_id != '' || undefined) {
      console.log('test==>>>>>if', requestBody, e.target.id);
      const data = await handleLikes(requestBody, e.target.id, setDisaable);
      if (!data) {
        setDisaable(true);
      }
      if (data) {
        // setDisaable(false)
        setliked(Math.random());
      }
    }
  };

  const handleLengthClick = () => {
    if (noOfElement > data.length) {
      setNoOfElement(8);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      setNoOfElement(noOfElement + 8);
    }
  };

  return (
    <>
      {loadingFilter && slice ? (
        <div class='d-flex justify-content-center'>
          <div class='spinner-border' role='status'>
            <span class='sr-only'>Loading...</span>
          </div>
        </div>
      ) : (
        <div className='row'>
          {isModalOpen && (
            <ModalBuynft
              onRequestClose={toggleModal}
              nftData={slice[Buydata]}
            />
          )}

          {slice.map((nft, index) => {
            return (
              <div className='col-12 col-sm-3 ' key={index}>
                <div className='live-auction-area'>
                  <div className='auction-card-two mb-4 '>
                    <div className='card-body'>
                      <div className='auction-create-by'>
                        <img
                          src='/assets/images/img2.png'
                          alt=''
                          className='avatar-icon img-fluid'
                        />
                        <span className='creator-name'>
                          {console.log({ nft })}
                          Created By @
                          {nft?.currentOwner?.user_name
                            ? nft?.currentOwner?.user_name
                            : 'undefined'}
                        </span>
                      </div>
                      <div className='card-media'>
                        <Link to={`/exploredetail/${nft._id}`}>
                          <img
                            // src={'/assets/images/featured-img7.jpg'}
                            src={nft?.uploadFile}
                            alt=''
                            className='img-fluid'
                          />
                        </Link>
                      </div>
                      <div className='card-title mb-2 pb-2 border-bottom-0'>
                        <div className='c-card-detail'>
                          <h5>
                            <a href='#'>{nft?.name}</a>
                          </h5>
                          <h6>
                            {nft?.about
                              ? nft?.about
                              : 'undefined'}
                          </h6>
                        </div>
                        <div className='eth-price'>
                          <div className='bid-title'>
                            <span></span>
                          </div>
                          <h6>
                            <img
                              src='/assets/images/icons/ethereum.png'
                              alt=''
                              className='me-1'
                            />
                            {nft?.putOnMarketplace
                              ? nft?.putOnMarketplace.price ||
                                nft?.putOnMarketplace.Bid_price
                              : 'Bid'}
                          </h6>
                        </div>
                      </div>
                      <div className='meta-info'>
                        <button
                          className='btn buy-now-btn'
                          onClick={(e) => toggleModal(index)}
                        >
                          Buy Now
                        </button>

                        {nft.likes.includes(_id) ? (
                          <button
                            className='wishlist-button ms-auto'
                            id='unliked'
                            disabled={diable}
                            onClick={(e) =>
                              handleAddFavorite(e, nft._id)
                            }
                            tabIndex={0}
                          >
                            <span className='number-like d-flex'>
                              <i id='unliked' className='ri-heart-fill me-1' />
                              {nft.likes
                                ? nft.likes.length === 0
                                  ? ''
                                  : nft.likes.length
                                : ''}
                            </span>
                          </button>
                        ) : (
                          <button
                            className='wishlist-button ms-auto'
                            id='liked'
                            disabled={diable}
                            onClick={(e) =>
                              handleAddFavorite(e, nft._id)
                            }
                            tabIndex={0}
                          >
                            <span className='number-like d-flex'>
                              <i id='liked' className=' ri-heart-line me-1' />
                              {nft.likes
                                ? nft.likes.length === 0
                                  ? ''
                                  : nft.likes.length
                                : ''}
                            </span>
                          </button>
                        )}
                        {/* <button className="wishlist-button ms-auto" tabIndex={0}>
                        <span
                          className="number-like d-flex"
                          onClick={() => handleAddFavorite(nft)}
                          >
                         <i className={isLiked ===true ? 'ri-heart-fill me-1' : 'ri-heart-line me-1'}/>{nft.likes?nft.likes.length===0?'':nft.likes.length:''}

                        </span>
                      </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className='row mb-4'>
            <div className='col-lg-6 col-md-6 mx-auto'>
              {data.length > 6 && (
                <button className='btn btn-load' onClick={handleLengthClick}>
                  {noOfElement > data.length ? 'Show less' : 'Show more'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExploreNftListRow;
