import React, {useState, useEffect } from 'react'
import { FilterCard, filter_card, AccordionCards, cardData ,SingleSlider } from "./ExploreFilterData" 
import {NavLink, Link,useParams } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import Apexcharts from '../../Components/Apexcharts'

import $ from "jquery"
import { MultiSelect } from "react-multi-select-component";
 import "../../index.css"
import axios from 'axios';
 const options = [
  { label: "Mint", value: "mint" }, 
  { label: "Transfer", value: "Transfer" }, 
  { label: "Sale", value: "Sale" },
  { label: "Cancel Listing", value: "Cancel Listing" },
  { label: "Offer", value: "Offer", disabled: true },
   
];
// const mystyle = { 
//   display: "block",
//   width: "550px",  
//   fontSize: "1rem",
//   fontWeight: 400,
//   lineHeight: 1.5,
//   color: "#212529",
//   backgroundColor: "#fff",f
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "right 0.75rem center",
//   backgroundSize: "16px 12px",
//   border: "1px solid #ced4da",
//   borderRadius: "0.25rem" 
// }  
function ExploreDetail() {
  const {id}=useParams()
  console.log("id of /ExploreDetails",id)
  const [selected, setSelected] = useState([]);
  const { t } = useTranslation();
  useEffect(()=>{
    collectionSlider();
  })
  const [collections, setCollections] = useState([]);

  useEffect(async () => {
    
    await axios
      .get(`http://192.168.1.4:8002/api/read?id=${id}`)
      .then((response) => {
        // setLoading(true);
        console.log(response.data,"<><><>><>><><><><><><><");
        setCollections(response.data.data);
        // setLoading(false);
      })
      .catch((e) => {
        // setLoading(true);
      });
  }, []);
  console.log("exploreDetail",collections)
  const collectionSlider =()=>{  
  $(document).ready(function() {
    $('.explore-collection-slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      cssEase: 'linear',
      adaptiveHeight: true,
      prevArrow: '<button class="slide-arrow prev-arrow"><i class="ri-arrow-left-s-line"></i></button>',
      nextArrow: '<button class="slide-arrow next-arrow"><i class="ri-arrow-right-s-line"></i></button>',
      responsive: [{
      breakpoint: 1124,
      settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
        }
      },
      {
       breakpoint: 868,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
      }
       },
       {
       breakpoint: 576,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         dots: false,
         arrows: false,
       }
       },
       {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      }
    }
    ]
    });
  });
}

  useEffect(()=>{
    function openGraph(divId) {
      $("#" + divId).toggle();
     }
     $(".graph-icon img").click(function () {
    $(this).toggleClass("btnColor-pink");
   });
  },[])
  
  return (
    <> 
 
      <main>
        <section className="explore-detail-bg-section">
          <div className="container-fluid px-lg-5">
            <div className="row mb-3">
              <div className="col-lg-12 col-md-12">
                <Link to="/explorenft"><span className="back-text"> <i className="ri-arrow-left-s-line" />{t("product.Back")}</span></Link>
              </div>
            </div>
            <div className="explore-item-detail mb-lg-5 mb-3">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="item-image">
                    <img src={collections?.uploadFile?.filename?`${process.env.REACT_APP_BASE_URL}/fileUpload/${collections?.uploadFile?.filename}`:"/assets/images/featured-img3.png"} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="explore-item-detail-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3 className="heading-title mb-0">{collections?collections.name:t("product.The Fantasy Flower Illustration")}</h3>
                      <div className="user-more-detail">
                       <div className="explore-social-icon d-flex align-items-center">
                      <ul>
                      <li>
                        <div className="user-more-detail">
                              <div className="more">
                                  <div className="icon"> <a href={`/exploredetail/${id}`}> <img src={"/assets/images/icons/rotate.png"} alt="" /> </a> </div>
                              </div>
                          </div>
                      </li>
                       <li>
                         <div className="user-more-detail">
                          <div className="more">
                            <div className="icon dropdown">
                              <a href="#" data-bs-toggle="dropdown" aria-expanded="false"><i className="ri-more-fill" /></a>
                              <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                 <a className="dropdown-item" href="#"> <span className="dropdown-icon"><img src={"/assets/images/icons/share.png" }/></span> {t("product.share")} </a>
                                <a className="dropdown-item" href="#"> <span className="dropdown-icon"><img src={"/assets/images/icons/report.png"}/></span> {t("product.report")} </a>
                                <a className="dropdown-item" href="#"> <span className="dropdown-icon"><img src={"/assets/images/icons/home.png"} /></span> {t("product.website")} </a>
                              </div>
                            </div>
                           </div>
                          </div>
                       </li> 
                      </ul> 
                      </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="d-flex align-items-center">
                        <a href="#" className="view">
                          <i className="ri-eye-line icon" /> 100
                        </a>
                        <a href="#" className="like ms-3">
                          <i className="ri-heart-line icon" /> 100
                        </a>
                      </div>
                    </div>
                    <div className="mb-3 d-flex d-lg-block flex-wrap">
                      <a href="#" className="token-detail"><span>{t("product.Token id")} : </span>#958</a>
                      <a href="#" className="token-detail ms-lg-3"><span>{t("product.Token standard")} : </span>Erc721</a>
                      <a href="#" className="token-detail ms-lg-3"><span>Contract: </span>0X…5623</a> <br />
                      <a href="#" className="token-detail "><span style={{marginLeft: "0"}}>{t("product.Blockchain")} : </span>{collections?collections.chooseBlockchain:"undefined"}</a>
                      <a href="#" className="token-detail ms-lg-3"><span>Creator Royalties : </span>0.5 %   <i class="las la-info-circle"></i></a>
                    </div>
                    <div className="row mb-4 gx-lg-3">
                  
                      <div className="col-lg-5 col-md-5"> 
                      <a href="#">
                        <div className="creator-card mb-4 mb-lg-0">
                          <div className="card-body">
                            <div className="avatars">
                              <div className="media">
                               <img src="/assets/images/avt-1.jpg" alt="" className="avatar" /> 
                              </div>
                              <div className="ms-3">
                                <p className="text1">Owned By</p>
                                <span className="text2">Abstract Painting</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        </a>
                      </div> 

                      <div className="col-lg-5 col-md-5">
                      <a href="#">
                        <div className="creator-card">
                          <div className="card-body">
                            <div className="avatars">
                              <div className="media">
                                <a href="#"> <img src="/assets/images/icons/tezoz.png" alt="" className="avatar" />
                                </a>
                              </div>
                              <div className="ms-3">
                                <p className="text1">Collection By</p>
                                <span className="text2">{collections?collections.chooseCollection:"undefined"}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        </a>
                      </div>
                    </div>
                    <div className="mb-3">
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="home" aria-selected="true">{t("product.Description")}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="about-tab" data-bs-toggle="tab" data-bs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false">{t("product.about project")}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="detail-tab" data-bs-toggle="tab" data-bs-target="#detail" type="button" role="tab" aria-controls="detail" aria-selected="false">{t("product.Details")}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="attribute-tab" data-bs-toggle="tab" data-bs-target="#attribute" type="button" role="tab" aria-controls="attribute" aria-selected="false">{t("product.Attributes")}</button>
                        </li>
                      </ul>
                      <div className="tab-content custom-scrollbar" id="myTabContent">
                        <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                          <div className="card-body">
                            <p className="para1">{collections?collections.designation:t("product.detail_description")}</p>
                            <div className="col-lg-6 col-md-6 px-lg-0">
                              <div className="creator-card creator-card-two mb-lg-4">
                                <div className="card-body">
                                  <div className="avatars">
                                    <div className="media">
                                      <div className="badge">
                                        <img src="/assets/images/icons/star-check.png" alt="" />
                                      </div>
                                      <a href="#">
                                        <img src="/assets/images/avt-1.jpg" alt="" className="avatar" />
                                      </a>
                                    </div>
                                    <div className="ms-3">
                                      <p className="text1">{t("product.Minted By")} <span>HEROSTHENAME</span></p>
                                      <span className="text2">3 hours ago</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="about" role="tabpanel" aria-labelledby="about-tab">{collections?collections.about:'lorem35'}</div>
                        <div className="tab-pane fade" id="detail" role="tabpanel" aria-labelledby="detail-tab">3</div>
                        <div className="tab-pane fade" id="attribute" role="tabpanel" aria-labelledby="attribute-tab">
                        <div className="explore-attribute-card-section">
        <div className="row">
           {collections?.attribute?.map((attri,i)=>(
            <div className="col-lg-4" key={i}>
            <div className="card">
              <div className="card-body">
               
                  <h3 className="card-title">Attribute </h3>
                <h4 className="card-text">Attribute Name:{attri.attrName}</h4>
                <p className="card-subtext">Attribute Type:{attri.attrType}</p>
                </div>
            </div>
          </div>
              
                ))}
                
              
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">CLOTHES</h3>
                <h4 className="card-text">Old</h4>
                <p className="card-subtext">75% have this trait</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">EARINGS</h3>
                <h4 className="card-text">Circle2</h4>
                <p className="card-subtext">5% Have This Trait</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">EYES</h3>
                <h4 className="card-text">Soft</h4>
                <p className="card-subtext">6% Have This Trait</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">FACE</h3>
                <h4 className="card-text">Gold</h4>
                <p className="card-subtext">4% Have This Trait</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">GLASSES</h3>
                <h4 className="card-text">Oldfashion4</h4>
                <p className="card-subtext">4% Have This Trait</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">HAIR</h3>
                <h4 className="card-text">Stick</h4>
                <p className="card-subtext">4% Have This Trait</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">HEADWEAR</h3>
                <h4 className="card-text">B Top Hat</h4>
                <p className="card-subtext">9% Have This Trait</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">NECKLACE</h3>
                <h4 className="card-text">Y Spotted Tie</h4>
                <p className="card-subtext">5% Have This Trait</p>
              </div>
            </div>
          </div>
        </div>
      </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="col-lg-6 col-md-6 px-lg-0">
                        <div className="pricing-area">
                          <h3 className="pricing-title">Pricing</h3>
                          <div className="pricing-card">
                            <div className="card-body">
                              <div className="d-flex align-items-center">
                                <div className="media">
                                  <a href="#"><img src="/assets/images/avatar3.png" alt="" /></a>
                                </div>
                                <div className="pricing-detail">
                                  <h4> {t("product.Highest Bid By")} Kohaku Tora</h4>
                                  <div className="d-flex align-items-center">
                                    <span className="d-flex">
                                    <a href="#" className="value1"><img src="/assets/images/icons/ethereum-big.png" alt="" />0.1 ETH</a>
                                    <sup> <a href="#" className="value2 ml-1">${collections?.putOnMarketplace?.price}</a></sup></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 mb-4 mb-lg-0">
                        <button className="btn btn-violet btn-shadow w-100"><i className="bx bxs-basket me-2" />{t("product.Buy now")}</button>
                      </div>
                      <div className="col-lg-4 mb-4 mb-lg-0">
                        <button className="btn btn-outline-white1 w-100" data-bs-toggle="modal" data-bs-target="#makeOfferModal"><i className="bx bxs-purchase-tag me-2" /> Make An Offer</button>
                      </div>
                      <div className="col-lg-4 mb-4 mb-lg-0">
                        <button className="btn btn-outline-white1 w-100"><i className="bx bx-credit-card me-2" /> {t("product.Buy Card")}</button>
                      </div>
                    </div>
                    <div className="modal fade" id="makeOfferModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered modal-lg make-offer-modal-section">
                        <div className="modal-content">
                          <div className="modal-header text-center d-block">
                            <h5 className="modal-title d-inline-block">{t("product.Make an offer")}</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <div className="offer-price">
                              <label htmlFor className="form-label">{t("product.Price")}</label>
                              <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                  <span className="input-group-text"><img src="/assets/images/icons/ethereum-pink.png" alt="" className="me-1 eth-icon" /> WETH</span>
                                </div>
                                <input type="text" className="form-control" placeholder= {t("product.amount")}  />
                                <div className="input-group-append">
                                  <span className="input-group-text">$0.00</span>
                                </div>
                              </div>
                              <div className="mt-2 text-end">
                                <h6 className="balance-value">{t("product.Balance")} : <span>0.000 WETH</span></h6>
                              </div>
                            </div>
                            <div className="offer-expiration">
                              <label htmlFor className="form-label">{t("product.Offer Expiration")}</label>
                              <div className="row mb-3">
                                <div className="col-md-3 col-5">
                                  <select className="form-select" aria-label="Default select example" >
                                    <option selected>1 day</option>
                                    <option value={1}>2 days</option>
                                    <option value={1}>3 days</option>
                                  </select>
                                </div>
                                <div className="col-md-9 ps-lg-0">
                                  <input type="text" className="form-control" defaultValue="11:47" />
                                </div>
                              </div>
                              <div className="custom-checkbox">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="offer-checkbox" />
                                  <label className="form-check-label" htmlFor="offer-checkbox">{t("product.By Checking This Box, I Agree To NFTHEE Terms Of Service")}</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer border-0">
                            <button type="button" className="btn btn-violet shadow-none">{t("product.Make Offer")}</button>
                            <button type="button" className="btn btn-violet-outline ms-3">{t("product.Convert ETH")}</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-lg-5 mb-0">
              <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
                <div className="explore-detail-accordion">
                  <div className="accordion accordion1">
                    <div className="accordion-item">
                      <h2 className="accordion-header" >
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" >
                          {t("product.Listing")}
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show"  >
                        <div className="accordion-body">
                          <div className="table-responsive">
                            <table className="table table1">
                              <thead>
                                <tr>
                                  <th scope="col">{t("product.Price")}</th>
                                  <th scope="col">{t("product.USD Price")}</th>
                                  <th scope="col">{t("product.Expiration")}</th>
                                  <th scope="col">{t("product.from")}</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td><img src="/assets/images/icons/ethereum.png" alt="" className="me-1" /> 0.3 WETH</td>
                                  <td>$959.13</td>
                                  <td>In 5 days</td>
                                  <td><a href="#">Shreepadgaonkar</a></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
                <div className="explore-detail-accordion">
                  <div className="accordion accordion2" >
                    <div className="accordion-item">
                      <h2 className="accordion-header" >
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" >
                          {t("product.Offering")}
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse show" >
                        <div className="accordion-body">
                          <div className="table-responsive">
                            <table className="table table2">
                              <thead>
                                <tr>
                                  <th scope="col">{t("product.Price")}</th>
                                  <th scope="col">{t("product.USD Price")}</th>
                                  <th scope="col">{t("product.Floor Difference")}</th>
                                  <th scope="col">{t("product.Expiration")}</th>
                                  <th scope="col">{t("product.from")}</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td><img src="/assets/images/icons/ethereum.png" alt="" className="me-1" /> 0.3 WETH</td>
                                  <td>$959.13</td>
                                  <td>48.3% Below</td>
                                  <td>In 5 days</td>
                                  <td><a href="#">John Deo</a></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
                <div className="explore-detail-accordion">
                  <div className="accordion accordion3"  >
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" >
                          {/* {t("product.Listing")} */}
                          Pricing History
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse show"  >
                        <div className="accordion-body">
                          <div className="table-responsive">
                            <table className="table table3">
                              <thead>
                                <tr>
                                  <th scope="col">{t("product.Lowest Listing")}</th>
                                  <th scope="col">{t("product.Suggested Price")}</th>
                                  <th scope="col">{t("product.Highest Sale")}</th>
                                  <th scope="col">{t("product.Total Sales")}</th>
                                  <th scope="col">
                                    <select className="form-select" style={{width:"108px" }}>
                                      <option selected>All Time</option>
                                      <option value={1}>One</option>
                                      <option value={2}>Two</option>
                                      <option value={3}>Three</option>
                                    </select>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>0 WAX ($0.00)</td>
                                  <td>0.14 WAX ($0.05)</td>
                                  <td>
                                    <div>27000.11 WAX</div>
                                    <div>($10,252,52)</div>
                                  </td>
                                  <td>16858488</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div>
                            {/* <div id="chart" /> */}
                            <Apexcharts/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
                <div className="explore-detail-accordion">
                  <div className="accordion accordion4" >
                    <div className="accordion-item">
                      <h2 className="accordion-header" >
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true"  >
                          {t("product.Item Activity")}
                        </button>
                      </h2>
                      <div id="collapseFour" className="accordion-collapse collapse show"  >
                        <div className="accordion-body custom-scrollbar">
                          <div className="col-lg-12 col-md-12 category-filter-search-bar">
                            <div className="row align-items-center">
                              <div className="col-lg-2 col-md-2">
                                <h3 className="filter-label">{t("product.Filter By")}</h3>
                              </div>
                              <div className="col-lg-10 col-md-10">
                                <div className="d-flex">
                                  {/* <select className="form-select" aria-label="Default select example">
                                    <option selected>Choose Category</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                  </select> */}
                                  {/* <pre>{JSON.stringify(selected)}</pre> */}
                                  <div className="w-75">
                                    <MultiSelect 
                                      options={options}
                                      value={selected} 
                                      onChange={setSelected}
                                      labelledBy="Select" 
                                      //  className="form-select"
                                    /></div>
                                  <button className="btn btn-search">Search</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="table-responsive" style={{overflowY: "hidden"}}>
                            <table className="table table4">
                              <thead>
                                <tr>
                                  <th scope="col">Event</th>
                                  <th scope="col">{t("product.Price")}</th>
                                  <th scope="col">{t("product.from")}</th>
                                  <th scope="col">To</th>
                                  <th scope="col">Date</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td><span className="d-flex align-items-center"><i className="bx bxs-purchase-tag me-1" /> list</span></td>
                                  <td><img src="/assets/images/icons/ethereum.png" alt="" className="me-1" />$959.13</td>
                                  <td><a href="#">John Doe</a></td>
                                  <td><a href="#">John Doe</a></td>
                                  <td><a href="#" className="tooltip-wrapper"><img src="/assets/images/icons/share-blue-icon.png" alt="" className="me-1" /> 2 Days Ago
                                      <span className="tooltip">March 22 2021, 5:10 Pm</span>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td><span className="d-flex align-items-center"><i className="bx bxs-purchase-tag me-1" /> list</span></td>
                                  <td><img src="/assets/images/icons/ethereum.png" alt="" className="me-1" />$959.13</td>
                                  <td><a href="#">John Doe</a></td>
                                  <td><a href="#">John Doe</a></td>
                                  <td><a href="#" className="tooltip-wrapper"><img src="/assets/images/icons/share-blue-icon.png" alt="" className="me-1" /> 2 Days Ago
                                      <span className="tooltip">March 22 2021, 5:10 Pm</span>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td><span className="d-flex align-items-center"><i className="bx bxs-purchase-tag me-1" /> list</span></td>
                                  <td><img src="/assets/images/icons/ethereum.png" alt="" className="me-1" />$959.13</td>
                                  <td><a href="#">John Doe</a></td>
                                  <td><a href="#">John Doe</a></td>
                                  <td><a href="#" className="tooltip-wrapper"><img src="/assets/images/icons/share-blue-icon.png" alt="" className="me-1" /> 2 Days Ago
                                      <span className="tooltip">March 22 2021, 5:10 Pm</span>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td><span className="d-flex align-items-center"><i className="bx bxs-purchase-tag me-1" /> list</span></td>
                                  <td><img src="/assets/images/icons/ethereum.png" alt="" className="me-1" />$959.13</td>
                                  <td><a href="#">John Doe</a></td>
                                  <td><a href="#">John Doe</a></td>
                                  <td><a href="#" className="tooltip-wrapper"><img src="/assets/images/icons/share-blue-icon.png" alt="" className="me-1" /> 2 Days Ago
                                      <span className="tooltip">March 22 2021, 5:10 Pm</span>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td><span className="d-flex align-items-center"><i className="bx bxs-purchase-tag me-1" /> list</span></td>
                                  <td><img src="/assets/images/icons/ethereum.png" alt="" className="me-1" />$959.13</td>
                                  <td><a href="#">John Doe</a></td>
                                  <td><a href="#">John Doe</a></td>
                                  <td><a href="#" className="tooltip-wrapper"><img src="/assets/images/icons/share-blue-icon.png" alt="" className="me-1" /> 2 Days Ago
                                      <span className="tooltip">March 22 2021, 5:10 Pm</span>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td><span className="d-flex align-items-center"><i className="bx bxs-purchase-tag me-1" /> list</span></td>
                                  <td><img src="/assets/images/icons/ethereum.png" alt="" className="me-1" />$959.13</td>
                                  <td><a href="#">John Doe</a></td>
                                  <td><a href="#">John Doe</a></td>
                                  <td><a href="#" className="tooltip-wrapper"><img src="/assets/images/icons/share-blue-icon.png" alt="" className="me-1" /> 2 Days Ago
                                      <span className="tooltip">March 22 2021, 5:10 Pm</span>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td><span className="d-flex align-items-center"><i className="bx bxs-purchase-tag me-1" /> list</span></td>
                                  <td><img src="/assets/images/icons/ethereum.png" alt="" className="me-1" />$959.13</td>
                                  <td><a href="#">John Doe</a></td>
                                  <td><a href="#">John Doe</a></td>
                                  <td><a href="#" className="tooltip-wrapper"><img src="/assets/images/icons/share-blue-icon.png" alt="" className="me-1" /> 2 Days Ago
                                      <span className="tooltip">March 22 2021, 5:10 Pm</span>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td><span className="d-flex align-items-center"><i className="bx bxs-purchase-tag me-1" /> list</span></td>
                                  <td><img src="/assets/images/icons/ethereum.png" alt="" className="me-1" />$959.13</td>
                                  <td><a href="#">John Doe</a></td>
                                  <td><a href="#">John Doe</a></td>
                                  <td><a href="#" className="tooltip-wrapper"><img src="/assets/images/icons/share-blue-icon.png" alt="" className="me-1" /> 2 Days Ago
                                      <span className="tooltip">March 22 2021, 5:10 Pm</span>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td><span className="d-flex align-items-center"><i className="bx bxs-purchase-tag me-1" /> list</span></td>
                                  <td><img src="/assets/images/icons/ethereum.png" alt="" className="me-1" />$959.13</td>
                                  <td><a href="#">John Doe</a></td>
                                  <td><a href="#">John Doe</a></td>
                                  <td><a href="#" className="tooltip-wrapper"><img src="/assets/images/icons/share-blue-icon.png" alt="" className="me-1" /> 2 Days Ago
                                      <span className="tooltip">March 22 2021, 5:10 Pm</span>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td><span className="d-flex align-items-center"><i className="bx bxs-purchase-tag me-1" /> list</span></td>
                                  <td><img src="/assets/images/icons/ethereum.png" alt="" className="me-1" />$959.13</td>
                                  <td><a href="#">John Doe</a></td>
                                  <td><a href="#">John Doe</a></td>
                                  <td><a href="#" className="tooltip-wrapper"><img src="/assets/images/icons/share-blue-icon.png" alt="" className="me-1" /> 2 Days Ago
                                      <span className="tooltip">March 22 2021, 5:10 Pm</span>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td><span className="d-flex align-items-center"><i className="bx bxs-purchase-tag me-1" /> list</span></td>
                                  <td><img src="/assets/images/icons/ethereum.png" alt="" className="me-1" />$959.13</td>
                                  <td><a href="#">John Doe</a></td>
                                  <td><a href="#">John Doe</a></td>
                                  <td><a href="#" className="tooltip-wrapper"><img src="/assets/images/icons/share-blue-icon.png" alt="" className="me-1" /> 2 Days Ago
                                      <span className="tooltip">March 22 2021, 5:10 Pm</span>
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="explore-collection-card-area py-lg-5 py-4">
          <div className="container">
            <div className="section-heading text-center mb-4">
              <div>
                <h2 className="section-title mb-1">{t("product.More from this collection")}</h2>
                <span><img src="assets/images/path1.png" alt="" className="img-fluid" /></span>
              </div>
            </div>
            <div className="col-lg-11 col-md-11 mx-auto p-0">
              <div className="explore-collection-slider">
                {/* <div className="single-slide">
                  <div className="live-auction-area">
                    <div className="auction-card-two">
                      <div className="card-body">
                        <div className="auction-create-by"><a href="#"><img src="assets/images/img2.png" alt="" className="avatar-icon img-fluid" /></a>
                          <span href="#" className="creator-name">Created by @Lorihart</span>
                        </div>
                        <div className="card-media">
                          <a href="#"><img src="assets/images/featured-img7.jpg" alt="" className="img-fluid" /></a>
                        </div>
                        <div className="card-title mb-2 pb-2 border-bottom">
                          <h5><a href="#">Walking On The Air</a></h5>
                        </div>
                        <div className="bid-title">
                          <span>Current Bid</span>
                        </div>
                        <div className="meta-info">
                          <div className="eth-price">
                            <h6><img src="assets/images/icons/ethereum.png" alt="" /> 2.59</h6>
                          </div>
                          <button className="wishlist-button" tabIndex={0}>
                            <span className="number-like d-flex">
                              <i className="ri-heart-line me-1" /> 75
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
 
              {cardData.map((item, index) => {
                          return(
                            <SingleSlider key={index} {...item}/>
                          )
                        })}              
              </div>
            </div>
          </div>
        </section> 
      </main> 
    

    </>
  )
}

export default ExploreDetail;