import React from "react";
import { AccordionCard, CheckBox } from "../../Components";
import {NavLink, Link } from 'react-router-dom'
import { useTranslation, initReactI18next } from "react-i18next";

export const cardData =
     [
      {
        id: 1,
        title: "Walking On The Air",
        bidInfo: "Current Bid",
        price: 2.59,
        img: "assets/images/nft1.png"
      },
      {
        id: 2,
        title: "Walking On The Air",
        bidInfo: "Current Bid",
        price: 2.59,
        img: "assets/images/nft2.png"
      },
      {
        id: 3,
        title: "Walking On The Air",
        bidInfo: "Current Bid",
        price: 2.59,
        img: "assets/images/nft3.png"
      },
      {
        id: 4,
        title: "Walking On The Air",
        bidInfo: "Current Bid",
        price: 2.59,
        img: "assets/images/nft4.png"

      },
      {
        id: 5,
        title: "Walking On The Air",
        bidInfo: "Current Bid",
        price: 2.59,
        img: "assets/images/nft5.png"

      },
      {
        id: 6,
        title: "Walking On The Air",
        bidInfo: "Current Bid",
        price: 2.59,
        img: "assets/images/nft6.png"

      },
      {
        id: 7,
        title: "Walking On The Air",
        bidInfo: "Current Bid",
        price: 2.59,
        img: "assets/images/nft7.png"

      },
      {
        id: 8,
        title: "Walking On The Air",
        bidInfo: "Current Bid",
        price: 2.59,
        img: "assets/images/nft8.png"

      },
      {
        id: 9,
        title: "Walking On The Air",
        bidInfo: "Current Bid",
        price: 2.59,
        img: "assets/images/nft9.png"

      },
      {
        id: 10,
        title: "Walking On The Air",
        bidInfo: "Current Bid",
        price: 2.59,
        img: "assets/images/nft11.png"

      },
      {
        id: 11,
        title: "Walking On The Air",
        bidInfo: "Current Bid",
        price: 2.59,
        img: "assets/images/nft12.png"

      },
      {
        id: 12,
        title: "Walking On The Air",
        bidInfo: "Current Bid",
        price: 2.59,
        img: "assets/images/nft13.png"

      },
      {
        id: 13,
        title: "Walking On The Air",
        bidInfo: "Current Bid",
        price: 2.59,
        img: "assets/images/nft14.png"

      },
      {
        id: 14,
        title: "Walking On The Air",
        bidInfo: "Current Bid",
        price: 2.59,
        img: "assets/images/nft15.png"

      },
      {
        id: 15,
        title: "Walking On The Air",
        bidInfo: "Current Bid",
        price: 2.59,
        img: "assets/images/nft18.png"

      },
      {
        id: 16,
        title: "Walking On The Air",
        bidInfo: "Current Bid",
        price: 2.59,
        img: "assets/images/nft17.png"

      },
    ]

  const COLLECTION = [
    {
      name: "Azudi",
      value: "azudi",
      img: "assets/images/icons/azudi.png"
    },
    {
      name: "World Of Women",
      value: "world_of_women",
      img: "assets/images/icons/women.png"
    },
    {
      name: "Crytoskulls",
      value: "cryptoskulls",
      img: "assets/images/icons/cryto.png"
    },
    {
      name: "Phantabear",
      value: "phantabear",
      img: "assets/images/icons/phantabear.png"
    },
    {
      name: "FLUF Bear",
      value: "fluf_bear",
      img: "assets/images/icons/bear.png"
    },
    {
      name: "FOFO MOFOS",
      value: "fofo_mofos",
      img: "assets/images/icons/fomo.png"
    },
    {
      name: "doddles",
      value: "doddles",
      img: "assets/images/icons/doddles.png"
    },
  ];
  const CATEGORIES = [
    {
      name: "Trending",
      value: "trending",
      img: "assets/images/icons/trand.png"
    },
    {
      name: "Top",
      value: "top",
      img: "assets/images/icons/top.png"
    },
    {
      name: "Art",
      value: "art",
      img: "assets/images/icons/art.png"
    },
    {
      name: "Domain Name",
      value: "domain_name",
      img: "assets/images/icons/domain.png"
    },
    {
      name: "Music",
      value: "music",
      img: "assets/images/icons/music.png"
    },
    {
      name: "Photography",
      value: "photography",
      img: "assets/images/icons/photo.png"
    },
    {
      name: "Sports",
      value: "sports",
      img: "assets/images/icons/sport.png"
    },
  ];

  const SINGLE_ITEMS = [
    {
      name: "ALL Items",
      value: "all_items",
      img: "assets/images/icons/all_item.png"

    },
    {
      name: "Bundles",
      value: "bundles",
      img: "assets/images/icons/bundule.png"

    },
  ];
  const BLOCKCHAIN = [
  {
    name: "Ethereum",
    value: "ethereum",
    img: "assets/images/icons/ethereum_select.png"
  },
  {
    name: "Solana",
    value: "Solana",
    img: "assets/images/icons/solana_select.png"
  },
  {
    name: "Binance",
    value: "kalythan",
    img: "assets/images/icons/binance_select.png"
  },

];
  const CHAINS = [
    {
      name: "ALL Items",
      value: "all_items",

    },
    {
      name: "Bundles",
      value: "bundles",

    },

  ];

  const ON_SALE_IN = [

  ];

  const collection_caontainer = () => {
    return (
      <>
        {COLLECTION.map((item) => (
          <CheckBox {...item} />
        ))}
      </>
    );
  };
  const collection_categories = () => {
    return (
      <>
        {CATEGORIES.map((item) => (
          <CheckBox {...item} />
        ))}
      </>
    );
  };

  const single_item_caontainer = () => {
    return (
      <>
        {SINGLE_ITEMS.map((item) => (
          <CheckBox {...item} />
        ))}
      </>
    );
  };
  const blockchain_caontainer = () => {
  return (
    <>
      {BLOCKCHAIN.map((item) => (
        <CheckBox {...item} />
      ))}
    </>
  );
};

const images = [
  {
    id: 1,
    img: "assets/images/featured-img7.jpg"
  },
  {
    id: 2,
    img: "assets/images/nft1.png"
  },
  {
    id: 3,
    img: "assets/images/nft2.png"
  },
  {
    id: 4,
    img: "assets/images/nft3.png"
  },
  {
    id: 5,
    img: "assets/images/icons/bear.png"
  },
  {
    id: 6,
    img: "assets/images/icons/fomo.png"
  },
  {
    id: 7,
    img: "assets/images/icons/doddles.png"
  },
  {
    id: 8,
    img: "assets/images/featured-img7.jpg"
  },
  {
    id: 9,
    img: "assets/images/nft1.png"
  },
  {
    id: 10,
    img: "assets/images/nft2.png"
  },
  {
    id: 11,
    img: "assets/images/nft3.png"
  },
  {
    id: 12,
    img: "assets/images/featured-img7.jpg"
  },
  {
    id: 13,
    img: "assets/images/nft1.png"
  },
  {
    id: 14,
    img: "assets/images/nft2.png"
  },
  {
    id: 15,
    img: "assets/images/nft3.png"
  },
];
  const price_caontainer = () => {
    return (
      <div className="accordion-body ">
        <div className="currency-search">
          <select
            className="form-select"
            aria-label="Default select example"
            style={{ display: "none" }}
          >
            <option selected>United State Dollar</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
          <div className="nice-select form-select" tabIndex={0}>
            <span className="current">United State Dollar</span>
            <ul className="list">
              <li data-value="United State Dollar" className="option selected">
                United State Dollar
              </li>
              <li data-value={1} className="option">
                One
              </li>
              <li data-value={2} className="option">
                Two
              </li>
              <li data-value={3} className="option">
                Three
              </li>
            </ul>
          </div>
          <div className="price-filter">
            <div className="d-flex justify-content-between">
              <div className="filter-box">
                <input type="text" className="form-control" placeholder="From" />
              </div>
              <div className="filter-box">
                <input type="text" className="form-control" placeholder="To" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const chains_container = () => {
    return (
      <>
        {CHAINS.map((item) => (
          <CheckBox {...item} />
        ))}
      </>
    );
  };

  const on_sale_in_container = () => {
    return (
      <>
        {ON_SALE_IN.map((item) => (
          <CheckBox {...item} />
        ))}
      </>
    );
  };
  export const filter_card = [
    {
      name: "COLLECTION",
      value: "collection",
      childern: collection_caontainer(),
    },
    {
      name: "CATEGORIES",
      value: "categories",
      childern: collection_categories(),

    },
    {
      name: "SINGLE ITEM",
      value: "single_item",
      childern: single_item_caontainer(),
    },
    {
      name: "PRICE",
      value: "price",
      childern: price_caontainer(),
    },
    {
      name: "BLOCKCHAIN",
      value: "blockchain",
      childern: blockchain_caontainer(),
    },

    // {
    //   name: "CHAINS",
    //   value: "chains",
    //   children: chains_container(),
    // },
    {
      name: "ON SALE IN",
      value: "on_sale_in",
      childern: on_sale_in_container(),
    },
  ];

  export const FilterCard = ({_id, uploadFile,designation,title, name,putOnMarketplace,created_by}) => {
    const { t } = useTranslation();
    return (
        <div className="col-12 col-sm-3">
        <div className="live-auction-area">
            <Link to={`/exploredetail/${_id}`}>
            {/* {images.map((item,index)=>{
                        return( */}
            <div className="auction-card-two mb-4 ">

                <div className="card-body">
                    <div className="auction-create-by"> <img src="/assets/images/img2.png" alt="" className="avatar-icon img-fluid" /> <span className="creator-name">{t("CreativeArtCollection.Created By")}   {created_by?.user_name ? created_by?.user_name : '@Lorihart'}</span> </div>
                    <div className="card-media">
                       <img src={uploadFile} alt="" className="img-fluid" />

                       <img  alt="" className="img-fluid" />

                       </div>
                    <div className="card-title mb-2 pb-2">
                        {/* <h5>{t(`CreativeArtCollection.Walking on the Air`)}</h5>  */}
                        <h5>{title}</h5>
                    </div>
                    <div className="meta-info m-t-24">
                        <div className="meta-info-wrapper">
                            <div className="c-card-detail"> <span>{designation}</span> </div>
                            <div className="eth-price">
                                <h6> <img src="assets/images/icons/ethereum-big.png" alt="" className="me-1" /> {putOnMarketplace?.price} </h6>
                            </div>
                        </div> <button className="btn place-bid-btn"> { t('explore.Place Bid') }</button> <button className="wishlist-button" tabIndex={0}> <span className="number-like d-flex"> <i className="ri-heart-line me-1" /> 75 </span> </button>
                    </div>
                </div>
            </div>
                {/* )

          })} */}

            </Link>
        </div>
    </div>
    );
  };

  export const PillsList = ({ title, bidInfo, price}) => {
    const { t } = useTranslation();
    return (
      <div className="col-12 col-sm-12">
      <div className="live-auction-area">
          <div className="auction-card-two horizontal-card mb-4 listView1" >
          <div className="card-body">
              <div className="row gx-3">
              <div className="col-md-2 col-4">
                  <div className="card-media">
                  <img src="assets/images/featured-img7.jpg" alt="" className="img-fluid" />
                  </div>
              </div>
              <div className="col-md-10 col-8">
                  <div className="row">
                  <div className="d-flex align-items-start justify-content-between">
                      <div className="card-block">
                      <div className="card-title mb-2">
                          <h5>{title}</h5>
                      </div>
                      <div className="auction-create-by pb-2"><img src="/assets/images/img2.png" alt="" className="avatar-icon img-fluid" />
                          <span className="creator-name">{t("CreativeArtCollection.Created By")}
                          @Lorihart</span>
                      </div>
                      </div>
                      <button className="wishlist-button">
                      <span className="number-like d-flex">
                          <i className="fa fa-heart"  aria-hidden="false" style={{backgroundColor:"white"}} /> 75
                      </span>
                      </button>
                  </div>
                  </div>
                  <div className="meta-info-wrapper">
                  <div className="bid-title mb-1">
                      <span>{bidInfo}</span>
                  </div>
                  <div className="eth-price">
                      <h6><img src="assets/images/icons/ethereum-big.png" alt="" className="me-1" /> {price}
                      </h6>
                  </div>
                  </div>
                  <button className="btn place-bid-btn">{ t('explore.Place Bid') }</button>
              </div>
              </div>
          </div>
          </div>
      </div>
      </div>

    );
  };

  export const SingleSlider = ({ _id,name,uploadFile,title, bidInfo, putOnMarketplace}) => {
    const { t } = useTranslation();
    return (
  <div className="single-slide">
     <div className="live-auction-area">
            <Link to={`/exploredetail/${_id}`}>
            <div className="auction-card-two mb-4 ">
                <div className="card-body">
                    <div className="auction-create-by"> <img src="/assets/images/img2.png" alt="" className="avatar-icon img-fluid" /> <span className="creator-name">{t("CreativeArtCollection.Created By")} {name}</span> </div>
                    <div className="card-media"> <img src={uploadFile} alt="" className="img-fluid" /> </div>
                    <div className="card-title mb-2 pb-2">
                        <h5>{t(`CreativeArtCollection.Walking on the Air`)}</h5>
                        {/* <h5>{t(`CreativeArtCollection.title`)}</h5> */}
                    </div>
                    <div className="meta-info m-t-24">
                        <div className="meta-info-wrapper">
                            <div className="bid-title mb-1"> <span>{bidInfo}</span> </div>
                            <div className="eth-price">
                                <h6> <img src={uploadFile} alt="" className="me-1" /> {putOnMarketplace ? putOnMarketplace.price||putOnMarketplace.Bid_price:''} </h6>
                            </div>
                        </div> <button className="btn place-bid-btn"> {t("explore.Place Bid")}</button> <button className="wishlist-button" tabIndex={0}> <span className="number-like d-flex"> <i className="ri-heart-line me-1" /> 75 </span> </button>
                    </div>
                </div>
            </div>
            </Link>
        </div>
  </div>

     );};
  export const AccordionCards = () => {
    return <AccordionCard cards={filter_card} />;
  };

