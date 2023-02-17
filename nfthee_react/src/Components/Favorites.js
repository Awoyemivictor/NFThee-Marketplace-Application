import React from 'react'
import { useTranslation } from "react-i18next";
import {NavLink, Link } from 'react-router-dom'
import {useAppSelector} from "../hooks/useRedux";

function Favorites() {
    const favoriteStore = useAppSelector(state => state.favorite.favorite)
    //   const cardData =
    //  [
    //   {
    //     id: 1,
    //     title: "Walking On The Air",
    //     bidInfo: "Current Bid",
    //     price: 2.59,
    //   },
    //   {
    //     id: 2,
    //     title: "Walking On The Air",
    //     bidInfo: "Current Bid",
    //     price: 2.59,
    //   },
    //   {
    //     id: 3,
    //     title: "Walking On The Air",
    //     bidInfo: "Current Bid",
    //     price: 2.59,
    //   },
    //   {
    //     id: 4,
    //     title: "Walking On The Air",
    //     bidInfo: "Current Bid",
    //     price: 2.59,
    //   },
    //   {
    //     id: 5,
    //     title: "Walking On The Air",
    //     bidInfo: "Current Bid",
    //     price: 2.59,
    //   },
    //   {
    //     id: 6,
    //     title: "Walking On The Air",
    //     bidInfo: "Current Bid",
    //     price: 2.59,
    //   },
    //   {
    //     id: 7,
    //     title: "Walking On The Air",
    //     bidInfo: "Current Bid",
    //     price: 2.59,
    //   },
    //   {
    //     id: 8,
    //     title: "Walking On The Air",
    //     bidInfo: "Current Bid",
    //     price: 2.59,
    //   },
    // ]
    const { t } = useTranslation()

  return (
    <>
    {/* {cardData.map((item)=>{
    return(<>   </>)  })} */}
  <section className="bg-section live-auction-section">
        <div className="container">
          <div className="section-heading text-center mb-lg-5 mb-4 live-auction-heading">
            <div className="d-flex justify-content-center align-items-center">
              <div className="mx-lg-auto d-flex">
                <h2 className="section-title mb-1">Favorites</h2>
              </div>
            </div>
            <img src="assets/images/path1.png" alt="" className="img-fluid" />
          </div>
          <div className="row">
            <div className="live-auction-area mb-5">
              <div className="row">
              {favoriteStore.map((favorite)=>{
                   return(<>
                <div className="col-6 col-sm-3">
                    <div className="live-auction-area">
                    <Link to="/exploredetail">
                        <div className="auction-card-two mb-4 ">
                        <div className="card-body">
                            <div className="auction-create-by"><img src="assets/images/img2.png" alt="" className="avatar-icon img-fluid" />
                            <span className="creator-name">Created by @{favorite.user ? favorite.user.user_name : "undefined"}</span>
                            </div>
                            <div className="card-media">
                              <img className="img-fluid" src={`${process.env.REACT_APP_BASE_URL}/${favorite.banner_image?.filename}`} alt="" />
                            </div>
                            <div className="card-title mb-2 pb-3">
                            <h5>{favorite.name ? favorite.name : "undefined"}</h5>
                            </div>
                            <div className="meta-info m-t-24">
                            <div className="meta-info-wrapper">
                                <div className="bid-title mb-1">
                                <span>Current Bid</span>
                                </div>
                                <div className="eth-price">
                                <h6><img src="assets/images/icons/ethereum-big.png" alt="" className="me-1" /> {favorite.creator_earnings}
                                </h6>
                                </div>
                            </div>
                            <button className="btn place-bid-btn">Place Bid</button>
                            <button className="wishlist-button" tabIndex={0}>
                                <span className="number-like d-flex">
                                <i className="ri-heart-line me-1" /> 75
                                </span>
                            </button>
                            </div>
                        </div>
                        </div>
                    </Link>
                    </div>
                </div>
                </>)  })}
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-lg-6 col-md-6 mx-auto">
              <button className="btn btn-load">Load More</button>
            </div>
          </div>
        </div></section>
    </>
  )
}

export default Favorites;
