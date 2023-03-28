import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { SlickSliderCategory } from "../../Components/SlickSlider"
import instance from "../../axios";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { setFavorite } from "../../redux/favoriteSlice";
import { Link } from 'react-router-dom';

function TopCategories() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch()
  const favoriteStore = useAppSelector(state => state.favorite.favorite)

  const [collections, setCollections] = useState([])
  // const [latestCollections, setLatestCollections] = useState([])
  useEffect(async () => {
    instance.get("/api/createCollection/all").then(response => setCollections(response.data.data))
  }, [])

  const handleAddToFavorite = (collection) => {
    dispatch(setFavorite(collection))
  }

  console.info({collections})
  console.info(favoriteStore)


  return (
    <>
      <div className="top-collection-slider slick-initialized slick-slider ">
        <SlickSliderCategory>
          {collections.slice(-4).map((collection) => {
            return (
              <>
                <div className="single-slide">
                  <div className="card-collection">
                  <Link to={`/explorefilter/${collection._id}`}>
                      <div className="card-body">
                        <div className="author">
                          <div className="author-box">
                            <div className="author-avatar">
                              <img src={collection.currentOwner.profile_image?collection.currentOwner.profile_image:"/images/avt-1.jpg"} alt="" className="avatar" />
                              <div className="badge">
                                <img src="/images/icons/star-check.png" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="content">
                            <a href="#">
                              <h4>{t(collection.name)}</h4>
                            </a>
                            <div className="info">
                              <span className="info-text-1">{t("CreativeArtCollection.Created By")}</ span>
                              <span className="info-text-2">{collection.currentOwner.user_name ? collection.currentOwner.user_name : "undefined"}</span>
                            </div>
                          </div>
                        </div>
                        <button className="wishlist-button">
                          <span className="number-like d-flex">
                            <i className="ri-heart-line me-1" /> 100 </span>
                        </button>
                       </div>
                       
                        <div className="media-images-collection mb-3">
                          <div className="box-left">
                            <img src={collection.banner_image} alt="" />
                          </div>
                          <div className="box-right">
                            <div className="top-img">
                              <img src={collection.logo_image} alt="" />
                            </div>
                            <div className="bottom-img">
                              <img src={collection.featured_image} alt="" />
                              {/* <img src="/images/img-collection4.png" alt="" /> */}
                            </div>
                          </div>
                        </div>
                        <div className="media-footer-collection">
                          <ul>
                            <l2i>
                              <span>
                                <i className="bx bx-comment-detail" />
                              </span>
                            </l2i>
                            <li>
                              <span>
                                <i className="bx bxs-share-alt" />
                              </span>
                            </li>
                            <li>
                              <span className="grad" onClick={() => handleAddToFavorite(collection)}>
                                <i className="bx bxs-basket" />
                              </span>
                            </li>
                          </ul>
                          <h5>{t("CreativeArtCollection.Unit")} : <span className="text-uppercase">
                            {collection.creator_earnings ? collection.creator_earnings : "undefined"} ETH 1/4
                          </span>
                          </h5>
                        </div>
                      
                  </Link>
                  </div>
                </div>
              </>
            )
          })}
        </SlickSliderCategory>
      </div>

    </>
  )
}

export default TopCategories
