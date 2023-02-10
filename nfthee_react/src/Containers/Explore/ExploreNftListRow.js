import React, { useState } from 'react';
import { useTranslation, initReactI18next } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ModalBuynft } from '../../Components/Layout/Modal';
import { useAppDispatch } from '../../hooks/useRedux';
import { setFavorite } from '../../redux/favoriteSlice';

const ExploreNftListRow = ({ data }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [isModalOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
  };

  const [noOfElement, setNoOfElement] = useState(8);
  const slice = data.slice(0, noOfElement);

  const handleAddFavorite = (collection) => {
    dispatch(setFavorite(collection));
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
    <div className="row">
      {isModalOpen && <ModalBuynft onRequestClose={toggleModal} />}
      {slice.map((collection, index) => {console.log(collection._id,"explorenftRow id")
        return (
          <div className="col-12 col-sm-3 " key={index}>
              <Link to={`/exploredetail/${collection._id}`}>
              <div className="live-auction-area">
                <div className="auction-card-two mb-4 ">
                  <div className="card-body">
                    <div className="auction-create-by">
                      <img
                        src="assets/images/img2.png"
                        alt=""
                        className="avatar-icon img-fluid"
                      />
                      <span className="creator-name">
                        {console.log({ collection })}
                        Created By @
                        {collection?.name ? collection?.name : 'undefined'}
                      </span>
                    </div>
                    <div className="card-media">
                      <a href="#">
                        <img
                          // src={'/assets/images/featured-img7.jpg'}
                          src={
                            collection?.uploadFile
                              ? `${process.env.REACT_APP_BASE_URL}/fileUpload/${collection?.uploadFile?.filename}`
                              : '/assets/images/featured-img7.jpg'
                          }
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="card-title mb-2 pb-2 border-bottom-0">
                      <div className='c-card-detail'>
                        <h5>
                          <a href="#">{collection?.name}</a>
                        </h5>
                        <h6>
                          {collection?.about ? collection?.about : 'undefined'}
                        </h6>
                      </div>
                      <div className="eth-price">
                        <div className="bid-title">
                          <span></span>
                        </div>
                        <h6>
                          <img
                            src="assets/images/icons/ethereum.png"
                            alt=""
                            className="me-1"
                          />
                          {!collection?.putOnMarketplace ? (
                            <small className="font-weight-light">Bids</small>
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
                    <div className="meta-info">
                      <button className="btn buy-now-btn" onClick={toggleModal}>
                        Buy Now
                      </button>
                      <button className="wishlist-button ms-auto" tabIndex={0}>
                        <span
                          className="number-like d-flex"
                          onClick={() => handleAddFavorite(collection)}
                        >
                          <i className="ri-heart-line me-1" /> 75
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          </Link>
            </div>
        );
      })}
      <div className="row mb-4">
        <div className="col-lg-6 col-md-6 mx-auto">
          {data.length > 6 && (
            <button className="btn btn-load" onClick={handleLengthClick}>
              {noOfElement > data.length ? 'Show less' : 'Show more'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreNftListRow;
