import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import instance from "../../axios";
import Loader from "../../Components/Loader/Loader";
import ExploreNftListRow from "./ExploreNftListRow";
import ExploreNftListColumn from "./ExploreNftListColumn";
import Filters from "./Filters";
import { useHistory, useLocation } from "react-router-dom";

function ExploreNft() {
  const { t } = useTranslation();
  //for Navigation
  const history = useHistory();
  const location = useLocation();
  const [nftData, setNftData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingFilter, setLoadingFilter] = useState(true);

  const [isOpen, setIsopen] = useState(true);
  const [filter, setfilter] = useState("filterClose");

  //checkBox Filter
  const [filterSearch, setFilterSearch] = useState([]);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  const FilterClose = () => {
    window.scrollTo(0, 0);
    filter === "filterClose" ? setfilter("") : setfilter("filterClose");
  };
  const [isModalOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
  };
  const [selectedFilter, setSelectedFilter] = useState([]);
  const handleSelectFilters = (name, e) => {
    if (selectedFilter.includes(name)) {
      const removeFilter = selectedFilter.filter((el) => {
        return el !== name ? true : false;
      });
      setSelectedFilter(removeFilter);
    } else {
      setSelectedFilter([...selectedFilter, name]);
    }
    const { checked } = e.target;
    const j = e.target.name;
console.log(checked,j,e.target.name,name,"expolorenft")
    //for checkbox checked or unchecked
    if (checked) {
      setFilterSearch((state) => [...state, { [e.target.name]: name }]);
      setLoadingFilter(true)

    }
    if (checked == false && j === "blockChain") {
      setFilterSearch((state) => state.filter((el) => el.blockChain != name));
      setLoadingFilter(true)

    }
    if (checked == false && j === "collection") {
      setFilterSearch((state) => state.filter((el) => el.collection != name));
      setLoadingFilter(true)

    }
    if (checked == false && j === "singleItem") {
      setFilterSearch((state) => state.filter((el) => el.singleItem != name));
      setLoadingFilter(true)

    }
    if (checked == false && j === "categories") {
      setFilterSearch((state) => state.filter((el) => el.categories != name));
      setLoadingFilter(true)

    }
  };

  const [searchText, setSearchText] = useState("");
  const [serachButton, setSearchButton] = useState(false);

  // Sort
  const [sortBy, setSortBy] = useState("name A-Z");
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleSortClick = () => {
    switch (sortBy) {
      case "name A-Z":
        console.info("A-Z");
        break;

      case "name Z-A":
        console.info("Z-A");
        break;

      case "price-low":
        console.info("Low - High");
        break;

      case "price-high":
        console.info("High - Low");
        break;
    }
  };
  console.log(location.search, "location");

  const [filteredData, setFilteredData] = useState([]);
  const [queryParamChanged, setQueryParamChanged] = useState(false);
  const [like, setliked] = useState();
  useEffect(() => {
    // if (!serachButton) return;
    // if (location.search) {
    //   let a = location.search.slice(5);
    //   setSearchText(a);
    // }
    const collectionArr = filterSearch.filter((obj) =>
      obj.hasOwnProperty("collection")
    );
    const blockChainArr = filterSearch.filter((obj) =>
      obj.hasOwnProperty("blockChain")
    );
    const singleItemArr = filterSearch.filter((obj) =>
      obj.hasOwnProperty("singleItem")
    );
    const categoriesArr = filterSearch.filter((obj) =>
    obj.hasOwnProperty("categories")
  );
    let url = "/explorenft?";

    const addQueryParam = (paramName, arr) => {
      if (arr.length === 0) return;
      const paramValues = arr.map((obj) => obj[paramName]).join(`,`);

      url += `${paramName}=${paramValues}&`;
      setQueryParamChanged(true)
    };
    addQueryParam("categories", categoriesArr);
    addQueryParam("collection", collectionArr);
    addQueryParam("singleItem", singleItemArr);
    addQueryParam("blockChain", blockChainArr);

    if (searchText) {
      url += `str=${searchText.replace(" ", "+")}&`;
      localStorage.removeItem("search");
      window.dispatchEvent(new Event('storage'))
    }
    if (serachButton || performance.navigation.type === 1||queryParamChanged) {
      history.push(url.slice(0, -1));
    }


    setSearchButton(false);
    setQueryParamChanged(true)

    instance
      .get("api/all" + window.location.search)
      .then((response) => setNftData(response.data.data))
      .finally(() => {setIsLoading(false)
   
        setTimeout(()=> setLoadingFilter(false), 2000);
        
     });
  }, [filterSearch, searchText, serachButton,like]);
  const handleSearchText = (e) => {
    e.preventDefault();
    setSearchButton(true);
  };
  useEffect(() => {
    setFilteredData(nftData);
    console.log({ nftData }, { filterSearch });
  }, [nftData, filterSearch]);

  const [minPriceInput, setMinPriceInput] = useState("");
  const [maxPriceInput, setMaxPriceInput] = useState("");

  const handlePriceInput = (e) => {
    e.target.id === "min"
      ? setMinPriceInput(e.target.value)
      : setMaxPriceInput(e.target.value);
  };

  useEffect(() => {
    const filterByCollection = nftData.filter((data) => {
      return selectedFilter.includes(data.chooseCollection);
    });

    const filterByCategory = nftData.filter((data) => {
      return selectedFilter.includes(data.chooseCategory);
    });

    const filterByBlockchain = nftData.filter((data) => {
      return selectedFilter.includes(data.chooseBlockchain);
    });

    const filterByPrice = nftData
      .filter((el) => el.price > minPriceInput)
      .map((data) => {
        return data;
      });

    console.info(filterByPrice);

    if (selectedFilter.length)
      setFilteredData([
        ...filterByCollection,
        ...filterByCategory,
        ...filterByBlockchain,
      ]);
    else setFilteredData(nftData);
  }, [selectedFilter, minPriceInput, maxPriceInput]);

  // useEffect(() => {
  //   const filteredArray = nftData.filter((data) => {
  //     if (searchText !== "")
  //       return Object.values(data.name)
  //         .join("")
  //         .toLowerCase()
  //         .includes(searchText.toLowerCase());
  //     else setFilteredData(nftData);
  //   });
  //   if (filteredArray.length) setFilteredData([...filteredArray]);
  // }, [searchText]);
  
  console.info(minPriceInput);
  console.info(maxPriceInput);
  console.log(searchText);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <main>
          <section className="explore-filter-section explore-nft-area bg-section">
            <div className="container-fluid">
              <div className="row">
                {isOpen ? (
                  <div
                    className={`col-lg-3 collection-filter-wrapper filter-sticky custom-scrollbar ${filter}`}
                  >
                    <div className="collection-filter">
                      <div className="panel">
                        <div className="panel-heading d-flex justify-content-between align-items-center mb-4">
                          <div className="panel-title">
                            {filter ? (
                              <img
                                src="/assets/images/icons/filter-icon.png"
                                alt=""
                                className="me-2 filter-icon"
                                onClick={ToggleSidebar}
                              />
                            ) : (
                              <img
                                src="/assets/images/icons/filter-icon.png"
                                alt=""
                                className="me-2 filter-icon"
                                onClick={FilterClose}
                              />
                            )}{" "}
                            Filter
                          </div>
                          <span>
                            {" "}
                            {filter ? (
                              <img
                                src="/assets/images/icons/close.png"
                                alt=""
                                className="img-fluid close-icon"
                                onClick={ToggleSidebar}
                              />
                            ) : (
                              <img
                                src="/assets/images/icons/close.png"
                                alt=""
                                className="img-fluid close-icon"
                                onClick={FilterClose}
                              />
                            )}{" "}
                          </span>
                        </div>

                        {isOpen ? (
                          <div className="panel-body">
                            <div className="accordion" id="accordionExample">
                              <Filters
                                handleSelectFilters={handleSelectFilters}
                                isShowBlockchain={true}
                                handleSearchText={handleSearchText}
                                handlePriceInput={handlePriceInput}
                                setSearchText={setSearchText}
                                searchText={searchText}
                              />
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="col-lg-1" style={{ width: "5.333333%" }}>
                    <div className="collection-filter filter-sticky">
                      <div className="panel p-0">
                        <div className="panel-heading">
                          <div
                            className="panel-title filter-border"
                            onClick={ToggleSidebar}
                          >
                            <img
                              src="/assets/images/icons/filter-icon.png"
                              alt=""
                              className="filter-icon"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {filter ? (
                  <div className="col-lg-12 filter-mobile-wrapper">
                    <button onClick={FilterClose} className="filter_button">
                      <img
                        src="/assets/images/icons/filter-icon.png"
                        alt=""
                        className="me-3"
                      />
                      Filter
                    </button>
                  </div>
                ) : (
                  ""
                )}
                <div
                  className={`${
                    isOpen ? "col-lg-9" : "col-lg-11"
                  } collection-filter-card`}
                  style={{ width: `${isOpen ? "" : "94.666667%"}` }}
                >
                  <div className="collection-wrapper">
                    <div className="collection-content bg-transparent">
                      <div className="top-wrapper">
                        <h3 className="search-count">
                          Showing 01-09 of {nftData.length} Results
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="sort-by-filter me-2">
                            <span>Sort By : </span>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              style={{ display: "none" }}
                            >
                              <option selected>Most Popular</option>
                              <option value={1}>One</option>
                              <option value={2}>Two</option>
                              <option value={3}>Three</option>
                            </select>
                            <select
                              className="nice-select form-select"
                              tabIndex={0}
                              onChange={(e) => setSortBy(e.target.value)}
                              onClick={handleSortClick}
                            >
                              <option value="name A-Z" className="option">
                                Name: A-Z
                              </option>
                              <option value="name Z-A" className="option">
                                Name: Z-A
                              </option>
                              <option value="price-low" className="option">
                                Price: Low - High
                              </option>
                              <option value="price-high" className="option">
                                Price: High - low
                              </option>
                            </select>
                          </div>
                          <div className="collection-grid-mode">
                            <ul className="nav" id="pills-tab" role="tablist">
                              <li className="nav-item" role="presentation">
                                <a
                                  href="#"
                                  className="active"
                                  id="grid-view"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-grid-view"
                                  type="button"
                                  role="tab"
                                  aria-controls="pills-grid-view"
                                  aria-selected="true"
                                >
                                  <img
                                    src="/assets/images/icons/grid-view-pink.png"
                                    alt=""
                                    className="img-fluid grid-icon1"
                                  />
                                  <img
                                    src="/assets/images/icons/grid-view-gray.png"
                                    alt=""
                                    className="img-fluid grid-icon2"
                                  />
                                </a>
                              </li>
                              <li className="nav-item" role="presentation">
                                <a
                                  href="#"
                                  className="ms-2"
                                  id="list-view"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-list-view"
                                  type="button"
                                  role="tab"
                                  aria-controls="pills-list-view"
                                  aria-selected="false"
                                >
                                  <img
                                    src="/assets/images/icons/list-view-gray.png"
                                    alt=""
                                    className="img-fluid grid-icon2 "
                                  />
                                  <img
                                    src="/assets/images/icons/list-view-pink.png"
                                    alt=""
                                    className="img-fluid grid-icon1"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="pills-grid-view"
                      role="tabpanel"
                      aria-labelledby="pills-grid-view-tab"
                    >  
                      <div className="bottom-wrapper">
                     
                        <ExploreNftListRow data={filteredData} loadingFilter={loadingFilter} setliked={setliked} />
                      
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-list-view"
                      role="tabpanel"
                      aria-labelledby="pills-list-view-tab"
                    >
                      <div className="bottom-wrapper">
                        <div className="shop-bottom-wrapper">
                          {/* <ExploreNftListColumn data={filteredData} /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}

export default ExploreNft;
