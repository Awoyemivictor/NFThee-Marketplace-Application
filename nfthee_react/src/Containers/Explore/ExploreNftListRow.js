import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation, initReactI18next } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ModalBuynft } from '../../Components/Layout/Modal';
import { useAppDispatch } from '../../hooks/useRedux';
import { setFavorite } from '../../redux/favoriteSlice';

const ExploreNftListRow = ({ data }) => {
  console.log(
    '<><><><><><><><><>><>><><><><><><><><><><><><><><><><><><><><><>',
    data
  );
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [like, setLike] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  const [isModalOpen, setModalIsOpen] = useState({
    show : false,
     data : null
  });
  const toggleModal = (e) => {
    setModalIsOpen({
      show : !isModalOpen.show,
      data : e
    });
  };

  const handleCloseModal = () => {
    setModalIsOpen({
      show : false,
      data : null
    });
  };

  const [noOfElement, setNoOfElement] = useState(8);
  const slice = data.slice(0, noOfElement);

  const handleAddFavorite = (collection) => {
    dispatch(setFavorite(collection));
    const requestBody = {
      userId: '63e78caf2acaaee14ca0c8d9',
      postId: collection._id,
    };
    setIsLiked(true);
    const apiUrl = isLiked
      ? 'http://localhost:8002/api/removeLikes'
      : 'http://localhost:8002/api/insertLikes';
    axios
      .post(apiUrl, requestBody)
      .then((response) => {
        setLike(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log('==>>>>>', data);

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
    <div className='row'>
      {isModalOpen.show && <ModalBuynft onRequestClose={handleCloseModal}  data ={isModalOpen.data}  />}
      {slice.map((collection, index) => {
        return (
          <div className='col-12 col-sm-3 ' key={index}>
            <div className='live-auction-area'>
              <div className='auction-card-two mb-4 '>
                <div className='card-body'>
                  <div className='auction-create-by'>
                    <img
                      src='assets/images/img2.png'
                      alt=''
                      className='avatar-icon img-fluid'
                    />
                    <span className='creator-name'>
                      {console.log({ collection })}
                      Created By @
                      {collection?.name ? collection?.name : 'undefined'}
                    </span>
                  </div>
                  <div className='card-media'>
                    <Link to={`/exploredetail/${collection._id}`}>
                      <img
                        // src={'/assets/images/featured-img7.jpg'}
                        src={collection?.uploadFile}
                        alt=''
                        className='img-fluid'
                      />
                    </Link>
                  </div>
                  <div className='card-title mb-2 pb-2 border-bottom-0'>
                    <div className='c-card-detail'>
                      <h5>
                        <a href='#'>{collection?.name}</a>
                      </h5>
                      <h6>
                        {collection?.about ? collection?.about : 'undefined'}
                      </h6>
                    </div>
                    <div className='eth-price'>
                      <div className='bid-title'>
                        <span></span>
                      </div>
                      <h6>
                        <img
                          src='assets/images/icons/ethereum.png'
                          alt=''
                          className='me-1'
                        />
                        {!collection?.putOnMarketplace ? (
                          <small className='font-weight-light'>Bids</small>
                        ) : collection?.putOnMarketplace?.price ? (
                          <span>{collection?.putOnMarketplace?.price}</span>
                        ) : (
                          <span>
                            {collection?.putOnMarketplace?.minimumBid}
                          </span>
                        )}
                      </h6>
                    </div>
                  </div>
                  <div className='meta-info'>
                    <button className='btn buy-now-btn' onClick={()=>toggleModal(collection)}>
                      Buy Now
                    </button>
                    <button className='wishlist-button ms-auto' tabIndex={0}>
                      <span
                        className='number-like d-flex'
                        onClick={() => handleAddFavorite(collection)}
                      >
                        <i
                          className={
                            isLiked === true
                              ? 'ri-heart-fill me-1'
                              : 'ri-heart-line me-1'
                          }
                        />
                        75
                      </span>
                    </button>
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
  );
};

export default ExploreNftListRow;
