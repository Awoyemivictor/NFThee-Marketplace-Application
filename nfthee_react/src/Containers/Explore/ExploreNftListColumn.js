import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {ModalBuynft} from "../../Components/Layout/Modal";
import {setFavorite} from "../../redux/favoriteSlice";
import {useAppDispatch} from "../../hooks/useRedux";

const ExploreNftListColumn = ({data}) => {
    const {t} = useTranslation()
    const dispatch = useAppDispatch()
    const [isModalOpen, setModalIsOpen] = useState(false);
    const toggleModal = () => {
        setModalIsOpen(!isModalOpen);
    };

    const [noOfElement, setNoOfElement] = useState(6);
    const slice = data.slice(0, noOfElement);

    const handleAddFavorite = collection => {
        dispatch(setFavorite(collection))
    }

    const handleLengthClick = () => {
        if (noOfElement > data.length ) {
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
            {isModalOpen && <ModalBuynft onRequestClose={toggleModal}/>}
            <div className="bottom-wrapper">
                <div className="row gx-3">
                    {slice.map((collection, index) => {
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
                                                        <img
                                                            src={collection.uploadFile }
                                                            alt=""
                                                            className="img-fluid"/>
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
                                                                    <h5><a href="#">{collection.name}</a></h5>
                                                                </div>
                                                                <div
                                                                    className="auction-create-by mb-2">
                                                                    <img
                                                                        src="assets/images/img2.png"
                                                                        alt=""
                                                                        className="avatar-icon img-fluid"/>
                                                                    <span
                                                                        className="creator-name">Created by @{collection.user ? collection.user.user_name : "undefined"}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <button
                                                                className="wishlist-button">
                                                                <span
                                                                    className="number-like d-flex"
                                                                    onClick={() => handleAddFavorite(collection)}
                                                                >
                                                                    <i className="ri-heart-line me-1"/> 75
                                                                </span>
                                                            </button>
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
                                                                src="assets/images/icons/ethereum-big.png"
                                                                alt=""
                                                                className="me-1"/>
                                                                {!collection.putOnMarketplace ? (<small
                                                                    className="font-weight-light">Bids</small>) : collection.putOnMarketplace.price ? (
                                                                    <span>{collection.putOnMarketplace.price}</span>) : (
                                                                    <span>{collection.putOnMarketplace.minimumBid}</span>)}
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <button className="btn buy-now-btn" onClick={toggleModal}>
                                                        Buy Now
                                                    </button>

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

export default ExploreNftListColumn;
