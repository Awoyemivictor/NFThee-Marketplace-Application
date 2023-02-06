import { AccordionCard, CheckBox } from "../../Components";
import {useEffect, useState} from "react";
import instance from "../../axios";

export const Data = {
  cardData: [
    {
      id: 1,
      title: "Walking On The Air",
      subtitle: "1 Day Left",
      bidInfo: "Current Bid",
      price: 2.59,
    },
    {
      id: 2,
      title: "Walking On The Air",
      subtitle: "1 Day Left",
      bidInfo: "Current Bid",
      price: 2.59,
    },
    {
      id: 3,
      title: "Walking On The Air",
      subtitle: "1 Day Left",
      bidInfo: "Current Bid",
      price: 2.59,
    },
    {
      id: 4,
      title: "Walking On The Air",
      subtitle: "1 Day Left",
      bidInfo: "Current Bid",
      price: 2.59,
    },
    {
      id: 5,
      title: "Walking On The Air",
      subtitle: "1 Day Left",
      bidInfo: "Current Bid",
      price: 2.59,
    },
    {
      id: 6,
      title: "Walking On The Air",
      subtitle: "1 Day Left",
      bidInfo: "Current Bid",
      price: 2.59,
    },
    {
      id: 7,
      title: "Walking On The Air",
      subtitle: "1 Day Left",
      bidInfo: "Current Bid",
      price: 2.59,
    },
    {
      id: 8,
      title: "Walking On The Air",
      subtitle: "1 Day Left",
      bidInfo: "Current Bid",
      price: 2.59,
    },
    {
      id: 9,
      title: "Walking On The Air",
      subtitle: "1 Day Left",
      bidInfo: "Current Bid",
      price: 2.59,
    },
    {
      id: 10,
      title: "Walking On The Air",
      subtitle: "1 Day Left",
      bidInfo: "Current Bid",
      price: 2.59,
    },
    {
      id: 11,
      title: "Walking On The Air",
      subtitle: "1 Day Left",
      bidInfo: "Current Bid",
      price: 2.59,
    },
    {
      id: 12,
      title: "Walking On The Air",
      subtitle: "1 Day Left",
      bidInfo: "Current Bid",
      price: 2.59,
    },
    {
      id: 13,
      title: "Walking On The Air",
      subtitle: "1 Day Left",
      bidInfo: "Current Bid",
      price: 2.59,
    },
    {
      id: 14,
      title: "Walking On The Air",
      subtitle: "1 Day Left",
      bidInfo: "Current Bid",
      price: 2.59,
    },
    {
      id: 15,
      title: "Walking On The Air",
      subtitle: "1 Day Left",
      bidInfo: "Current Bid",
      price: 2.59,
    },
    {
      id: 16,
      title: "Walking On The Air",
      subtitle: "1 Day Left",
      bidInfo: "Current Bid",
      price: 2.59,
    },
  ],
};

export const CATEGORIES = [
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

const COLLECTION = [
  // {
  //   name: "Azudi",
  //   value: "azudi",
  //   img: "assets/images/icons/azudi.png"
  // },
  // {
  //   name: "World Of Women",
  //   value: "world_of_women",
  //   img: "assets/images/icons/women.png"
  // },
  // {
  //   name: "Crytoskulls",
  //   value: "cryptoskulls",
  //   img: "assets/images/icons/cryto.png"
  // },
  // {
  //   name: "Phantabear",
  //   value: "phantabear",
  //   img: "assets/images/icons/phantabear.png"
  // },
  // {
  //   name: "FLUF Bear",
  //   value: "fluf_bear",
  //   img: "assets/images/icons/bear.png"
  // },
  // {
  //   name: "FOFO MOFOS",
  //   value: "fofo_mofos",
  //   img: "assets/images/icons/fomo.png"
  // },
  // {
  //   name: "doddles",
  //   value: "doddles",
  //   img: "assets/images/icons/doddles.png"
  // },
];

export const SINGLE_ITEMS = [
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
export const BLOCKCHAIN = [
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

const ON_SALE_IN = [];

const categories_caontainer = () => {
  return (
    <>
      {CATEGORIES.map((item) => (
        <CheckBox {...item} />
      ))}
    </>
  );
};

const collection_caontainer = () => {
  console.info(COLLECTION)
  return (
    <>
      {COLLECTION.map((item) => (
        <CheckBox name={item.name} value={item.name} img={item.filename} />
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

const single_item_caontainer = () => {
  return (
    <>
      {SINGLE_ITEMS.map((item) => (
        <CheckBox {...item} />
      ))}
    </>
  );
};

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
        <div className="nice-select form-select" tabIndex={0} style={{marginRight: "-24px"}}>
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
    name: "CATEGORIES",
    value: "categories",
    childern: categories_caontainer(),
  },
  {
    name: "COLLECTION",
    value: "collection",
    childern: collection_caontainer(),
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

export const AccordionCards = () => {
  const [collections, setCollections] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    instance.get('/api/createCollection/all').then(response => COLLECTION.push(...response.data.data)).finally(() => setIsLoading(false))
    console.info("123")
  }, [])
  if (isLoading) return <></>
  return <AccordionCard cards={filter_card} />;
};
