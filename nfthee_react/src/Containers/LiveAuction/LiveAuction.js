import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link, useHistory } from "react-router-dom";
import instance from '../../axios';

import { Auction_data } from "./AuctionData"
function LiveAuction() {

  const [listItems, setListItems] = useState(Auction_data);
  const [noOfElement, setNoOfElement] = useState(8);
  const [message, setMessage] = useState("")
  const history = useHistory();

  const loadMore = () => {
    setNoOfElement(noOfElement + 8)
    if (noOfElement > listItems.length) {
      const Msg = "--No Content--"
      setMessage(Msg)
      console.log(Msg)
    }
  }
  const slice = listItems.slice(0, noOfElement)
  const [show, setShow] = useState('hidden');
  const ShowResult = () => {
    setShow('show')
  }

  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isOpen, setIsopen] = useState(true);
  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };


  const [filter, setfilter] = useState("filterClose");
  const FilterClose = () => {
    window.scrollTo(0, 0)
    filter === "filterClose" ? setfilter("") : setfilter("filterClose");
  };


  const [collections, setCollections] = useState([]);
  const [blockchains, setBlockchains] = useState([]);
  const [categories, setCategories] = useState([]);
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

  const [selectedFilter, setSelectedFilter] = useState([]);
  const [filterSearch, setFilterSearch] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [serachButton, setSearchButton] = useState(false);


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
    //for checkbox checked or unchecked
    if (checked) {
      setFilterSearch((state) => [...state, { [e.target.name]: name }]);
    }
    if (checked == false && j === "blockChain") {
      setFilterSearch((state) => state.filter((el) => el.blockChain != name));
    }
    if (checked == false && j === "collection") {
      setFilterSearch((state) => state.filter((el) => el.collection != name));
    }

    if (checked == false && j === "categories") {
      setFilterSearch((state) => state.filter((el) => el.categories != name));
    }
  };
  console.log("<><<><><><<<>><>>>", { collections }, { blockchains }, { categories }, { filterSearch })

  const [queryParamChanged, setQueryParamChanged] = useState(false);


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

    const categoriesArr = filterSearch.filter((obj) =>
      obj.hasOwnProperty("categories")
    );
    let url = "/liveaction?";

    const addQueryParam = (paramName, arr) => {
      if (arr.length === 0) return;
      const paramValues = arr.map((obj) => obj[paramName]).join(`,`);

      url += `${paramName}=${paramValues}&`;
      setQueryParamChanged(true)
    };
    addQueryParam("categories", categoriesArr);
    addQueryParam("collection", collectionArr);
    addQueryParam("blockChain", blockChainArr);

    if (searchText) {
      url += `str=${searchText.replace(" ", "+")}&`;
    }
    if (serachButton || performance.navigation.type === 1 || queryParamChanged) {
      history.push(url.slice(0, -1));
    }


    setSearchButton(false);
    setQueryParamChanged(true)

    // instance
    //   .get("api/all" + window.location.search)
    //   .then((response) => setNftData(response.data.data))
    //   .finally(() => setIsLoading(false));
  }, [filterSearch, searchText, serachButton]);
  const handleSearchText = (e) => {
    e.preventDefault();
    setSearchButton(true);
  };

  return (
    <>
      <main>
        <section className="bg-section live-auction-section">
          <div className="container-fluid">
            <div className="section-heading text-center mb-lg-5 mb-4 live-auction-heading">
              <div className="d-flex justify-content-center align-items-center">
                <div className="mx-lg-auto d-flex">
                  <h2 className="section-title mb-1">Live Auctions</h2>
                </div>
              </div>
              <img src="/assets/images/path1.png" alt="" className="img-fluid" />
            </div>
            <div className="row">
              {isOpen ? (
                <div className={`col-lg-3 collection-filter-wrapper filter-sticky custom-scrollbar ${filter}`}>
                  <div className="collection-filter">
                    <div className="panel">
                      <div className="panel-heading d-flex justify-content-between align-items-center mb-4">
                        <div className="panel-title">
                          {filter ? <img src="/assets/images/icons/filter-icon.png" alt="" className="me-2 filter-icon" onClick={ToggleSidebar} />
                            : <img src="/assets/images/icons/filter-icon.png" alt="" className="me-2 filter-icon" onClick={FilterClose} />} Filter </div>
                        <span> {filter ? <img src="/assets/images/icons/close.png" alt="" className="img-fluid close-icon" onClick={ToggleSidebar} />
                          : <img src="/assets/images/icons/close.png" alt="" className="img-fluid close-icon" onClick={FilterClose} />} </span>
                      </div>
                      {isOpen ? (
                        <div className="panel-body">
                          <form className="filter-search me-auto d-none d-md-block mb-3"> <input type="text" placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)} className="form-control" />
                            <div className="search-icon"> <button className="btn" onClick={handleSearchText}> <i className="bx bx-search-alt-2" /> </button> </div>
                          </form>
                          <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="headingOne"> <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> BLOCKCHAIN </button> </h2>
                              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                  {blockchains?.map((blockchain, i) => (

                                    <div className="custom-checkbox" key={blockchain.name}>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input "
                                          type="checkbox"
                                          id={blockchain.name}
                                          name={'blockChain'}
                                          onClick={(e) => handleSelectFilters(blockchain.name, e)}
                                        />
                                        <label className="form-check-label " htmlFor={blockchain.name}>
                                          <span className="ml-2">{blockchain.name}</span>
                                        </label>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <div className="accordion-item">
                              <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                                  Categories
                                </button>
                              </h2>
                              <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                  {categories?.map((categorie, i) => (

                                    <div className="custom-checkbox" key={categorie.name}>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input "
                                          type="checkbox"
                                          id={categorie.name}
                                          name={'categories'}
                                          onClick={(e) => handleSelectFilters(categorie.name, e)}
                                        />
                                        <label className="form-check-label " htmlFor={categorie.name}>
                                          <span className="ml-2">{categorie.name}</span>
                                        </label>
                                      </div>
                                    </div>
                                  ))}

                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseTwo">
                                  Collection
                                </button>
                              </h2>
                              <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                  {collections?.map((collection, i) => (

                                    <div className="custom-checkbox" key={collection.name}>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input "
                                          type="checkbox"
                                          id={collection.name}
                                          name={'collection'}
                                          onClick={(e) => handleSelectFilters(collection.name, e)}
                                        />
                                        <label className="form-check-label " htmlFor={collection.name}>
                                          <span className="ml-2">{collection.name}</span>
                                        </label>
                                      </div>
                                    </div>
                                  ))}</div></div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                  Price
                                </button>
                              </h2>
                              <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body ">
                                  <div className="currency-search">
                                    <select className="form-select" aria-label="Default select example" style={{ display: 'none' }}>
                                      <option selected>United State Dollar</option>
                                      <option value={1}>One</option>
                                      <option value={2}>Two</option>
                                      <option value={3}>Three</option>
                                    </select>
                                    <div className="nice-select form-select" tabIndex={0}><span className="current">United
                                      State Dollar</span>
                                      <ul className="list">
                                        <li data-value="United State Dollar" className="option selected">United
                                          State Dollar</li>
                                        <li data-value={1} className="option">One</li>
                                        <li data-value={2} className="option">Two</li>
                                        <li data-value={3} className="option">Three</li>
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
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>)
                : (<div className="col-lg-1" style={{ width: "5.333333%" }}>
                  <div className="collection-filter filter-sticky">
                    <div className="panel p-0">
                      <div className="panel-heading">
                        <div className="panel-title filter-border" onClick={ToggleSidebar}> <img src="/assets/images/icons/filter-icon.png" alt="" className="filter-icon" /> </div>
                      </div>
                    </div>
                  </div>
                </div>
                )}
              {filter ?
                <div className="col-lg-12 filter-mobile-wrapper">
                  <button onClick={FilterClose} className="filter_button"><img src="/assets/images/icons/filter-icon.png" alt="" className="me-3" />Filter</button>
                </div> : ""}
              <div className={`${isOpen ? "col-lg-9" : "col-lg-11"} live-auction-area`} style={{ width: `${isOpen ? "" : "94.666667%"}` }}>

                <div className="row">
                  {slice.map((item, i) => {
                    return (<>
                      <div className="col-md-3">
                        <div className="auction-card mb-4">
                          <div className="card-body">
                            <div className="auction-create-by">
                              <Link to="/exploredetail"><img src="/assets/images/img2.png" alt="" className="avatar-icon img-fluid" /></Link>
                              <span to="/exploredetail" className="creator-name">Created by @{item.name}</span>
                            </div>
                            <div className="card-media">
                              <Link to="/exploredetail"><img src="/assets/images/featured-img7.jpg" alt="" className="img-fluid" /></Link>
                              <div className="block-timer2">
                                <div className="block-timer-box2">
                                  <div className="item">
                                    <img src="/assets/images/icons/flame.png" alt="" className="img-fluid flame-img" />
                                  </div>
                                  <div className="item">
                                    <div className="number hours">01<span /></div>
                                  </div>
                                  <div className="dots"> : </div>
                                  <div className="item">
                                    <div className="number minutes">45<span /></div>
                                  </div>
                                  <div className="dots"> : </div>
                                  <div className="item">
                                    <div className="number seconds">40<span /></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-title mb-0">
                              <h5><Link to="/exploredetail">{item.title}</Link></h5>
                            </div>
                            <div className="meta-info">
                              <div className="bid-title">
                                <span>Current Bid</span>
                              </div>
                              <div className="price">
                                <h5> 2.59 ETH</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </>)
                  })}

                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-lg-6 col-md-6 mx-auto">
                <h1 className="section-title text-center">{message}</h1>
                {!message &&
                  <button className="btn btn-load" onClick={loadMore} >Load More</button>}
              </div>
            </div>
          </div>

        </section>

      </main>
    </>
  )
}

export default LiveAuction;