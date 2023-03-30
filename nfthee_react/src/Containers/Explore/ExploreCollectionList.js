import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ExploreCollectionList = ({ collections }) => {
  const { t } = useTranslation();
  const [noOfElement, setNoOfElement] = useState(6);
  const slice = collections.slice(0, noOfElement);
  return (
    <div className="row">
      {slice.map((collection, index) => {
        return (
          <>
            <div className="col-lg-4 col-md-4 my-1" >
              <div className='card-body'key={index}>
                <div className="item-content" >
                  <Link to={`/explorefilter/${collection._id}`}>
                    <div className="tabbable-card explore-card">
                      <div className="card-img-block">
                        <img
                          className={
                            collection.display_theme === "contained-theme"
                              ? "coveredImage"
                              : collection.display_theme === "padded-theme"
                                ? "paddedImage"
                                : "coveredImage"
                          }
                          src={collection.banner_image}
                          alt=""
                        />
                      </div>
                      <div className="card-body pt-5 p-3">
                        <div>
                          <img
                            src={
                              collection.logo_image
                                ? collection.logo_image
                                : "assets/images/avt-4.jpg"
                            }
                            // src={"assets/images/avt-4.jpg"}
                            alt=""
                            className="profile"
                          />
                        </div>

                        <h5 className="card-title">
                          {collection.name ? collection.name : "undefined"}
                        </h5>
                        <h6 className="card-title2">
                          {collection ? collection.user_name : "undefined"}
                        </h6>
                        <p className="card-text">
                          {collection.description
                            ? collection.description
                            : "undefined"}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <div className="row mb-4">
        <div className="col-lg-6 col-md-6 mx-auto">
          {collections.length > 6 && (
            <button
              className="btn btn-load"
              // onClick={loadMore}
              onClick={() =>
                noOfElement > collections.length
                  ? setNoOfElement(6)
                  : setNoOfElement(noOfElement + 6)
              }
            >
              {noOfElement > collections.length ? "Show less" : "Show more"}
            </button>
          )}
        </div>
      </div>
      {/* {isFetching && 'Fetching more list items...'} */}
    </div>
  );
};

export default ExploreCollectionList;
