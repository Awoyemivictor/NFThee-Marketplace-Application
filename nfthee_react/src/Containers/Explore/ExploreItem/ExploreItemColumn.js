import {useTranslation} from "react-i18next";
import React, {useState} from "react";
import {useAppDispatch} from "../../../hooks/useRedux";
import {ModalBuynft} from "../../../Components/Layout/Modal";
import {setFavorite} from "../../../redux/favoriteSlice";
import { handleLikes } from "../../../services/apiServices";
import { Link } from "react-router-dom";

const ExploreItemColumn = ({data,setliked}) => {
    const {t} = useTranslation()
    const dispatch = useAppDispatch()
    const [isModalOpen, setModalIsOpen] = useState(false);
    const [Buydata, setBuydata] = useState();
    const toggleModal = (index) => {
      console.log(index);
      setBuydata(index);
      setModalIsOpen(!isModalOpen);
    };
    const [noOfElement, setNoOfElement] = useState(6);
    const slice = data.slice(0, noOfElement);

    // const handleAddFavorite = nftData => {
    //     dispatch(setFavorite(nftData))
    // }
    const { _id } = JSON.parse(localStorage.getItem('userLoggedIn')) || '';
    const [diable, setDisaable] = useState(false);

    const handleAddFavorite = async (e, nftData) => {

        const requestBody = {
          id: _id,
          postId: nftData,
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
            setNoOfElement(6)
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else {
            setNoOfElement(noOfElement + 6)
        }
    }

    return (
        <div className="row">
            {isModalOpen && <ModalBuynft onRequestClose={toggleModal}  nftData={slice[Buydata]}/>}
            <div className="bottom-wrapper">
                <div className="row gx-3">
                    {slice.map((nftData, index) => {
                        return (<>
                            <div className="col-12 col-sm-12">
                                <div className="live-auction-area">
                                    <div
                                        className="auction-card-two horizontal-card mb-4 listView1 ">
                                        <div className="card-body">
                                            <div className="row gx-3">
                                                <div
                                                    className="col-md-2 col-4">
                                                    <div
                                                        className="card-media">
                                                               <Link to={`/exploredetail/${nftData._id}`}>
                                                        <img
                                                            src={nftData?.uploadFile ? nftData.uploadFile : "/assets/images/featured-img7.jpg"}
                                                            alt=""
                                                            className="img-fluid"/></Link>
                                                    </div>
                                                </div>
                                                <div
                                                    className="col-md-10 col-8">
                                                    <div className="row">
                                                        <div
                                                            className="d-flex align-items-start justify-content-between">
                                                            <div
                                                                className="card-block">
                                                                <div
                                                                    className="card-title mb-2">
                                                                    <h5><a href="#">{nftData.name}</a></h5>
                                                                </div>
                                                                <div
                                                                    className="auction-create-by mb-2">
                                                                    <img
                                                                        src={nftData.currentOwner.profile_image?nftData.currentOwner.profile_image:"/assets/images/img2.png"}
                                                                        alt=""
                                                                        className="avatar-icon img-fluid"/>
                                                                    <span
                                                                        className="creator-name">Created by @{nftData.currentOwner ? nftData.currentOwner.user_name : "undefined"}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            {nftData.likes.includes(_id) ? (
                          <button
                            className='wishlist-button ms-auto'
                            id='unliked'
                            disabled={diable}
                            onClick={(e) =>
                              handleAddFavorite(e, nftData._id)
                            }
                            tabIndex={0}
                          >
                            <span className='number-like d-flex'>
                              <i id='unliked' className='ri-heart-fill me-1' />
                              {nftData.likes
                                ? nftData.likes.length === 0
                                  ? ''
                                  : nftData.likes.length
                                : ''}
                            </span>
                          </button>
                        ) : (
                          <button
                            className='wishlist-button ms-auto'
                            id='liked'
                            disabled={diable}
                            onClick={(e) =>
                              handleAddFavorite(e, nftData._id)
                            }
                            tabIndex={0}
                          >
                            <span className='number-like d-flex'>
                              <i id='liked' className=' ri-heart-line me-1' />
                              {nftData.likes
                                ? nftData.likes.length === 0
                                  ? ''
                                  : nftData.likes.length
                                : ''}
                            </span>
                          </button>
                        )}
                                                        </div>
                                                    </div>
                                                    <div className="mb-2">
                                                        <div
                                                            className="bid-title mb-2">
                                                            <span>{t("CreativeArtCollection.Current Bid")}</span>
                                                        </div>
                                                        <div
                                                            className="eth-price">
                                                            <h6><img
                                                                src="/assets/images/icons/ethereum-big.png"
                                                                alt=""
                                                                className="me-1"/>
                                                                {!nftData.putOnMarketplace ? (<small
                                                                    className="font-weight-light">Bids</small>) : nftData.putOnMarketplace.price ? (
                                                                    <span>{nftData.putOnMarketplace.price}</span>) : (
                                                                    <span>{nftData.putOnMarketplace.minimumBid}</span>)}
                                                            </h6>
                                                        </div>
                                                    </div>
                                                   {nftData?.putOnMarketplace?.price? <button className="btn buy-now-btn" onClick={(e) => toggleModal(index)}>
                                                        Buy Now
                                                    </button>:null}
                                                    {nftData?.putOnMarketplace?.Bid_price? <button className="btn buy-now-btn" onClick={(e) => toggleModal(index)}>
                                                    <Link to={`/exploredetail/${nftData._id}`}>
                                                    Make An Offer
                                                    </Link>
                                                    </button>:null}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>)
                    })}
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-lg-6 col-md-6 mx-auto">
                    {data.length > 6 && (
                        <button className="btn btn-load"
                                onClick={handleLengthClick}
                        >
                            {noOfElement > data.length ? "Show less" : "Show more"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExploreItemColumn;
