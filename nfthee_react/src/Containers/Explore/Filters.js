import React, { useEffect, useState } from "react";
import { AccordionCard, CheckBox } from "../../Components";
import instance from "../../axios";
import { SINGLE_ITEMS } from "./Data";

const Filters = ({
  handleSelectFilters,
  isShowBlockchain,
  handleSearchText,
  searchText,
  setSearchText,
  handlePriceInput,
  toggle,
  // value,onChange
}) => {
  const [collections, setCollections] = useState([]);
  const [blockchains, setBlockchains] = useState([]);
  const [categories, setCategories] = useState([]);
  // const priceRanges = [
  //   { label: 'Any Price', value: '' },
  //   { label: '$0 - $1', value: '0-1' },
  //   { label: '$100 - $500', value: '100-500' },
  //   { label: '$500 - $1000', value: '500-1000' },
  //   { label: '$1000+', value: '1000+' },
  // ];
  // useEffect(() => {
  //   instance(`/api/data?price_range=${priceRange}`)
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .catch(error => console.error(error));
  // }, [priceRange]);

  useEffect(() => {
    instance
      .get("/api/getCollection")
      .then((response) => setCollections(response.data.data));
    instance
      .get("/api/getBlockchain")
      .then((response) => setBlockchains(response.data.data));
    instance
      .get("/api/getCategory")
      .then((response) => setCategories(response.data.data));
  }, []);

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="filter-search me-auto d-none d-md-block mb-3"
      >
        <input
          // placeholder="Search"
          disabled={toggle}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="form-control"
          placeholder={toggle?'Disabled':'search'}
        />
      {toggle?'':  <div className="search-icon" onClick={handleSearchText}>
          <button className="btn">
            <i className="bx bx-search-alt-2" />
          </button>
        </div>}
      </form>

      <AccordionCard title={"CATEGORIES"}>
        {categories.map((category) => (
          <CheckBox
            boxName={"categories"}
            value={category.name}
            name={category.name}
            img={category.icon}
            handleSelectFilters={handleSelectFilters}
          />
        ))}
      </AccordionCard>

      <AccordionCard title={"Collection"}>
        {collections.map((collection) => (
          <CheckBox
            boxName={"collection"}
            value={collection.name}
            name={collection.name}
            handleSelectFilters={handleSelectFilters}
          />
        ))}
      </AccordionCard>

      <AccordionCard title={"Single Item"}>
        {SINGLE_ITEMS.map((item) => (
          <CheckBox
            boxName={"singleItem"}
            value={item.value}
            name={item.name}
            img={item.img}
            handleSelectFilters={handleSelectFilters}
          />
        ))}
      </AccordionCard>
      {/* <AccordionCard title={"Price"}>
      <div>
      <label htmlFor="price-range">Price Range:</label>
      <select id="price-range" value={value} onChange={onChange}>
        {priceRanges.map(range => (
          <option key={range.value} value={range.value}>{range.label}</option>
        ))}
      </select>
    </div>
      </AccordionCard> */}

      {/* <AccordionCard title={"Price"}>
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
            <div
              className="nice-select form-select"
              tabIndex={0}
              style={{ marginRight: "-24px" }}
            >
              <span className="current">United State Dollar</span>
              <ul className="list">
                <li
                  data-value="United State Dollar"
                  className="option selected"
                >
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
                  <input
                    type="number"
                    className="form-control"
                    onChange={handlePriceInput}
                    placeholder="From"
                    id="min"
                  />
                </div>
                <div className="filter-box">
                  <input
                    type="number"
                    className="form-control"
                    onChange={handlePriceInput}
                    placeholder="To"
                    id="max"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AccordionCard> */}

      {isShowBlockchain && (
        <AccordionCard title={"Blockchain"}>
          {blockchains.map((blockchain) => (
            <CheckBox
              boxName={"blockChain"}
              value={blockchain.name}
              name={blockchain.name}
              img={blockchain.img}
              handleSelectFilters={handleSelectFilters}
            />
          ))}
        </AccordionCard>
      )}

      <AccordionCard title={"On Sale In"}></AccordionCard>
    </>
  );
};

export default Filters;
