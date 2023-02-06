import React from "react";
import { useState, useEffect } from "react";
import $ from "jquery"; 
import {Link,useHistory} from 'react-router-dom' 
function Partners() {
  useEffect(()=>{
    dropSlider();
  })
  const dropSlider =()=>{ 
  $(document).ready(function() {
    $('.partner-area-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
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
         dots: true,
         arrows: false,
       }
    }
    ]
    });
     
  });
}
  return (
    <>
      <main>
      <section className="partner-section bg-section overflow-hidden">
        <div className="partner-banner-section">
          <div className="container mb-lg-5 mb-4">
            <div className="section-heading text-center mb-lg-5 mb-4">
              <h2 className="section-title mb-1">Become A Partner</h2>
              <span><img src="assets/images/path1.png" alt="" className="img-fluid" /></span>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="partner-image px-lg-5">
                  <img src="assets/images/partners-bg.png" className="img-fluid " alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="partner-section-wrapper ms-lg-5">
                  <h4 className="section-title mb-4">Partner With NFThee You + Our 40,000 Merchants = Win, Win.</h4>
                  <p className="section-text mb-lg-4 mb-3">Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galleyof type</p>
                  <Link to="/becomepartner"> <button className="btn btn-violet px-5">Become A Partner</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="channel-partner-section">
          <div className="container">
            <div className="col-lg-10 col-md-10 mx-auto p-0">
              <div className="channel-partner-wrapper">
                <div className="channel-partner-header text-center mb-lg-4">
                  <h3>Channel Partner</h3>
                  <p>For Businesses, Freelancers and web agencies building stores on behalf on their Clients. The
                    program is free and is pacified with incentives and resources to help you and your clients
                    grow.</p>
                </div>
                <div className="channel-partner-body">
                  <div className="row gx-lg-5 mb-4">
                    <div className="col-lg-6 col-md-6">
                      <div className="partner-list-card card1">
                        <div className="card-body text-center">
                          <img src="assets/images/icons/discount.png" alt="" className="img-fluid mb-4" />
                          <h4 className="card-title">Early Join Discount</h4>
                          <p className="card-text">Receive significant discounts</p>
                          <ul className="card-list">
                            <li><a href><img src="assets/images/icons/dotted-arrow-right.png" alt="" className="me-2" />Lorem Ipsum is simply dummy text of the</a></li>
                            <li><a href><img src="assets/images/icons/dotted-arrow-right.png" alt="" className="me-2" />Lorem Ipsum is simply dummy text of the</a></li>
                            <li><a href><img src="assets/images/icons/dotted-arrow-right.png" alt="" className="me-2" />Lorem Ipsum is simply dummy text of the</a></li>
                            <li><a href><img src="assets/images/icons/dotted-arrow-right.png" alt="" className="me-2" />Lorem Ipsum is simply dummy text of the</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="partner-list-card card2">
                        <div className="card-body text-center">
                          <img src="assets/images/icons/commision.png" alt="" className="img-fluid mb-4" />
                          <h4 className="card-title">Referral Commision</h4>
                          <p className="card-text">Earn a recurring commission for client</p>
                          <ul className="card-list">
                            <li><a href><img src="assets/images/icons/dotted-arrow-right.png" alt="" className="me-2" />Lorem Ipsum is simply dummy text of the</a></li>
                            <li><a href><img src="assets/images/icons/dotted-arrow-right.png" alt="" className="me-2" />Lorem Ipsum is simply dummy text of the</a></li>
                            <li><a href><img src="assets/images/icons/dotted-arrow-right.png" alt="" className="me-2" />Lorem Ipsum is simply dummy text of the</a></li>
                            <li><a href><img src="assets/images/icons/dotted-arrow-right.png" alt="" className="me-2" />Lorem Ipsum is simply dummy text of the</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-lg-3">
                    <div className="text-center">
                      <button className="btn btn-violet shadow-none px-lg-5" href="#">Apply Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <section className="partner-area-wrapper-two">
          <div className="container">
            <div className="section-heading text-center">
              <div>
                <h2 className="section-title mb-1">What Some Of Our Partner Say</h2>
                <span><img src="assets/images/path1.png" alt="" className="img-fluid" /></span>
              </div>
            </div>
            <div className="col-lg-11 col-md-11 mx-auto">
              <div className="partner-area-slider py-4 pt-lg-5">
                <div className="single-slide">
                  <div className="partner-content-wrapper px-lg-3">
                    <div className="partner-icon d-flex justify-content-center">
                      <img src="assets/images/google-logo.png" alt="" className="img=fluid" />
                    </div>
                    <div className="partner-context">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s, whenan unknown printer took a galley of type and scrambled it</p>
                      <h6>By Google</h6>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="partner-content-wrapper px-lg-3">
                    <div className="partner-icon d-flex justify-content-center">
                      <img src="assets/images/google-logo.png" alt="" className="img=fluid" />
                    </div>
                    <div className="partner-context">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s, whenan unknown printer took a galley of type and scrambled it</p>
                      <h6>By Google</h6>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="partner-content-wrapper px-lg-3">
                    <div className="partner-icon d-flex justify-content-center">
                      <img src="assets/images/google-logo.png" alt="" className="img=fluid" />
                    </div>
                    <div className="partner-context">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s, whenan unknown printer took a galley of type and scrambled it</p>
                      <h6>By Google</h6>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="partner-content-wrapper px-lg-3">
                    <div className="partner-icon d-flex justify-content-center">
                      <img src="assets/images/google-logo.png" alt="" className="img=fluid" />
                    </div>
                    <div className="partner-context">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s, whenan unknown printer took a galley of type and scrambled it</p>
                      <h6>By Google</h6>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="partner-content-wrapper px-lg-3">
                    <div className="partner-icon d-flex justify-content-center">
                      <img src="assets/images/google-logo.png" alt="" className="img=fluid" />
                    </div>
                    <div className="partner-context">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s, whenan unknown printer took a galley of type and scrambled it</p>
                      <h6>By Google</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
       <div className="become-partner-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="left-section">
                <div className="text-content">
                  <h4>Become A Smart Forwarder <br /> Today?</h4>
                  <p>We are ready to help with any Query or challenges you might have.</p>
                 <Link to="/becomepartner"> <button className="btn btn-white text-uppercase">Become A Partner</button></Link>
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

export default Partners;
