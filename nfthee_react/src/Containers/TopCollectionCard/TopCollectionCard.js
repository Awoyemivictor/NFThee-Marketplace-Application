import { useEffect, useState, useRef } from 'react';
import { top_collection, top_sellers } from '../Home/Data';
import $ from 'jquery';
import { TopCollectionCard_select } from '../../Components/NiceSelect';
import Card from '../Card';

function TopCollectionCard() {
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isOpen, setIsopen] = useState(true);
  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  const [noOfElement, setNoOfElement] = useState(8);
  const [message, setMessage] = useState('');
  const loadMore = () => {
    setNoOfElement(noOfElement + 8);
    if (noOfElement > top_collection.length) {
      const Msg = '--No Content--';
      setMessage(Msg);
      console.log(Msg);
    }
  };

  const slice = top_sellers.slice(0, noOfElement);
  const [show, setShow] = useState('hidden');
  const ShowResult = () => {
    setShow('show');
  };
  const [filter, setfilter] = useState('filterClose');
  const FilterClose = () => {
    window.scrollTo(0, 0);
    filter === 'filterClose' ? setfilter('') : setfilter('filterClose');
  };

  return (
    <>
      <main>
        <section className="bg-section">
          <div className="container-fluid">
            <div className="section-heading text-center mb-5 day-select">
              <div className="d-flex justify-content-center align-items-center">
                <div className="section-title-path mx-lg-auto d-lg-flex">
                  <h2 className="section-title mb-1">
                    {' '}
                    Top Collections over Last{' '}
                  </h2>
                  {/* <select className="select section-title-collection">
                                <option data-display="1 day"> 1 day</option>
                                <option value={1}>7 Days</option>
                                <option value={2}>15 Days</option>
                                <option value={4}>30 Days</option>
                            </select> */}
                  <TopCollectionCard_select />
                </div>
              </div>
              <img src="assets/images/path1.png" alt="" className="img-fluid" />
            </div>
            <div className="row">
              <div className="top-collection-over-section">
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
                                  src="assets/images/icons/filter-icon.png"
                                  alt=""
                                  className="me-2 filter-icon"
                                  onClick={ToggleSidebar}
                                />
                              ) : (
                                <img
                                  src="assets/images/icons/filter-icon.png"
                                  alt=""
                                  className="me-2 filter-icon"
                                  onClick={FilterClose}
                                />
                              )}{' '}
                              Filter{' '}
                            </div>
                            <span>
                              {' '}
                              {filter ? (
                                <img
                                  src="assets/images/icons/close.png"
                                  alt=""
                                  className="img-fluid close-icon"
                                  onClick={ToggleSidebar}
                                />
                              ) : (
                                <img
                                  src="assets/images/icons/close.png"
                                  alt=""
                                  className="img-fluid close-icon"
                                  onClick={FilterClose}
                                />
                              )}{' '}
                            </span>
                          </div>
                          {isOpen ? (
                            <div className="panel-body">
                              <form className="filter-search me-auto d-none d-md-block mb-3">
                                {' '}
                                <input
                                  type="text"
                                  placeholder="Search"
                                  className="form-control"
                                />
                                <div className="search-icon">
                                  {' '}
                                  <button className="btn">
                                    {' '}
                                    <i className="bx bx-search-alt-2" />{' '}
                                  </button>{' '}
                                </div>
                              </form>
                              <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                  <h2
                                    className="accordion-header"
                                    id="headingOne"
                                  >
                                    {' '}
                                    <button
                                      className="accordion-button"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseOne"
                                      aria-expanded="true"
                                      aria-controls="collapseOne"
                                    >
                                      {' '}
                                      BLOCKCHAIN{' '}
                                    </button>{' '}
                                  </h2>
                                  <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                  >
                                    <div className="accordion-body">
                                      <div className="custom-checkbox">
                                        <div className="form-check">
                                          {' '}
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="exampleCheckbox1"
                                          />{' '}
                                          <label
                                            className="form-check-label"
                                            htmlFor="exampleCheckbox1"
                                          >
                                            {' '}
                                            <img
                                              src={
                                                'assets/images/icons/ethereum_select.png'
                                              }
                                              alt=""
                                              className="me-1"
                                            />{' '}
                                            <span>Ethereum</span>{' '}
                                          </label>{' '}
                                        </div>
                                        <div className="form-check">
                                          {' '}
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="exampleCheckbox2"
                                          />{' '}
                                          <label
                                            className="form-check-label"
                                            htmlFor="exampleCheckbox2"
                                          >
                                            {' '}
                                            <img
                                              src={
                                                'assets/images/icons/solana_select.png'
                                              }
                                              alt=""
                                              className="me-1"
                                            />{' '}
                                            <span>Solana</span>{' '}
                                          </label>{' '}
                                        </div>
                                        <div className="form-check">
                                          {' '}
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="exampleCheckbox3"
                                          />{' '}
                                          <label
                                            className="form-check-label"
                                            htmlFor="exampleCheckbox3"
                                          >
                                            {' '}
                                            <img
                                              src={
                                                'assets/images/icons/binance_select.png'
                                              }
                                              alt=""
                                              className="me-1"
                                            />{' '}
                                            <span>Polygon</span>{' '}
                                          </label>{' '}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="accordion-item">
                                  <h2
                                    className="accordion-header"
                                    id="headingTwo"
                                  >
                                    <button
                                      className="accordion-button"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseTwo"
                                      aria-expanded="true"
                                      aria-controls="collapseOne"
                                    >
                                      Categories
                                    </button>
                                  </h2>
                                  <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample"
                                  >
                                    <div className="accordion-body">
                                      <div className="custom-checkbox">
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="exampleCheckbox11"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="exampleCheckbox11"
                                          >
                                            <img
                                              src={
                                                'assets/images/icons/trand.png'
                                              }
                                              alt=""
                                              className="me-1"
                                            />
                                            <span>Trending</span>
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="exampleCheckbox22"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="exampleCheckbox22"
                                          >
                                            <img
                                              src={
                                                'assets/images/icons/top.png'
                                              }
                                              alt=""
                                              className="me-1"
                                            />
                                            <span>Top</span>
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="exampleCheckbox33"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="exampleCheckbox33"
                                          >
                                            <img
                                              src={
                                                'assets/images/icons/art.png'
                                              }
                                              alt=""
                                              className="me-1"
                                            />
                                            <span>Art</span>
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="exampleCheckbox4"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="exampleCheckbox4"
                                          >
                                            <img
                                              src={
                                                'assets/images/icons/domain.png'
                                              }
                                              alt=""
                                              className="me-1"
                                            />
                                            <span>Domain Name</span>
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="exampleCheckbox5"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="exampleCheckbox5"
                                          >
                                            <img
                                              src={
                                                'assets/images/icons/music.png'
                                              }
                                              alt=""
                                              className="me-1"
                                            />
                                            <span>Music</span>
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="exampleCheckbox6"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="exampleCheckbox6"
                                          >
                                            <img
                                              src={
                                                'assets/images/icons/photo.png'
                                              }
                                              alt=""
                                              className="me-1"
                                            />
                                            <span>Photography</span>
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="exampleCheckbox7"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="exampleCheckbox7"
                                          >
                                            <img
                                              src={
                                                'assets/images/icons/sport.png'
                                              }
                                              alt=""
                                              className="me-1"
                                            />
                                            <span>Sports</span>
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h2
                                    className="accordion-header"
                                    id="headingThree"
                                  >
                                    <button
                                      className="accordion-button"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseThree"
                                      aria-expanded="true"
                                      aria-controls="collapseTwo"
                                    >
                                      Collection
                                    </button>
                                  </h2>
                                  <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample"
                                  >
                                    <div className="accordion-body">
                                      <div className="custom-checkbox">
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue
                                            id="exampleCheckbox8"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="exampleCheckbox8"
                                          >
                                            <img
                                              src={
                                                'assets/images/icons/azudi.png'
                                              }
                                              alt=""
                                              className="me-1"
                                            />
                                            <span>Azudi</span>
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue
                                            id="exampleCheckbox9"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="exampleCheckbox9"
                                          >
                                            <img
                                              src={
                                                'assets/images/icons/women.png'
                                              }
                                              alt=""
                                              className="me-1"
                                            />
                                            <span>World Of Women</span>
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue
                                            id="exampleCheckbox10"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="exampleCheckbox10"
                                          >
                                            <img
                                              src={
                                                'assets/images/icons/cryto.png'
                                              }
                                              alt=""
                                              className="me-1"
                                            />
                                            <span>Cryptoskulls</span>
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue
                                            id="exampleCheckbox011"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="exampleCheckbox011"
                                          >
                                            <img
                                              src={
                                                'assets/images/icons/phantabear.png'
                                              }
                                              alt=""
                                              className="me-1"
                                            />
                                            <span>Phantabear</span>
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue
                                            id="exampleCheckbox12"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="exampleCheckbox12"
                                          >
                                            <img
                                              src={
                                                'assets/images/icons/bear.png'
                                              }
                                              alt=""
                                              className="me-1"
                                            />
                                            <span>FLUF Bear</span>
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue
                                            id="exampleCheckbox13"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="exampleCheckbox13"
                                          >
                                            <img
                                              src={
                                                'assets/images/icons/fomo.png'
                                              }
                                              alt=""
                                              className="me-1"
                                            />
                                            <span>FOMO MOFOS</span>
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue
                                            id="exampleCheckbox14"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="exampleCheckbox14"
                                          >
                                            <img
                                              src={
                                                'assets/images/icons/doddles.png'
                                              }
                                              alt=""
                                              className="me-1"
                                            />
                                            <span>Doddles</span>
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h2
                                    className="accordion-header"
                                    id="headingFour"
                                  >
                                    <button
                                      className="accordion-button"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseFour"
                                      aria-expanded="true"
                                      aria-controls="collapseFour"
                                    >
                                      Price
                                    </button>
                                  </h2>
                                  <div
                                    id="collapseFour"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample"
                                  >
                                    <div className="accordion-body ">
                                      <div className="currency-search">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                          style={{ display: 'none' }}
                                        >
                                          <option selected>
                                            United State Dollar
                                          </option>
                                          <option value={1}>One</option>
                                          <option value={2}>Two</option>
                                          <option value={3}>Three</option>
                                        </select>
                                        <div
                                          className="nice-select form-select"
                                          tabIndex={0}
                                        >
                                          <span className="current">
                                            United State Dollar
                                          </span>
                                          <ul className="list">
                                            <li
                                              data-value="United State Dollar"
                                              className="option selected"
                                            >
                                              United State Dollar
                                            </li>
                                            <li
                                              data-value={1}
                                              className="option"
                                            >
                                              One
                                            </li>
                                            <li
                                              data-value={2}
                                              className="option"
                                            >
                                              Two
                                            </li>
                                            <li
                                              data-value={3}
                                              className="option"
                                            >
                                              Three
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="price-filter">
                                          <div className="d-flex justify-content-between">
                                            <div className="filter-box">
                                              <input
                                                type="text"
                                                className="form-control"
                                                placeholder="From"
                                              />
                                            </div>
                                            <div className="filter-box">
                                              <input
                                                type="text"
                                                className="form-control"
                                                placeholder="To"
                                              />
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
                    </div>
                  ) : (
                    <div className="col-lg-1" style={{ width: '5.333333%' }}>
                      <div className="collection-filter filter-sticky">
                        <div className="panel p-0">
                          <div className="panel-heading">
                            <div
                              className="panel-title filter-border"
                              onClick={ToggleSidebar}
                            >
                              {' '}
                              <img
                                src="assets/images/icons/filter-icon.png"
                                alt=""
                                className="filter-icon"
                              />{' '}
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
                          src="assets/images/icons/filter-icon.png"
                          alt=""
                          className="me-3"
                        />
                        Filter
                      </button>
                    </div>
                  ) : (
                    ''
                  )}
                  <div
                    className={`${
                      isOpen ? 'col-lg-9' : 'col-lg-11'
                    } collection-filter-card`}
                    style={{ width: `${isOpen ? '' : '94.666667%'}` }}
                  >
                    <div className="row">
                      {slice.map((item) => {
                        return <Card item={item} />;
                      })}
                    </div>
                    <div className="row mb-4">
                      <div className="col-lg-6 col-md-6 mx-auto">
                        <h1 className="section-title text-center">{message}</h1>
                        {!message && (
                          <button className="btn btn-load" onClick={loadMore}>
                            Load More
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default TopCollectionCard;
