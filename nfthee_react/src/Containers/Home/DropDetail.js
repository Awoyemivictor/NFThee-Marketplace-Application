import React from 'react'
import {Link,useHistory} from 'react-router-dom' 
import Apexcharts from '../../Components/Apexcharts'

function DropDetail() {
  return (
    <>
  <section className="new-drop-detail-section">
        
          <div className="section-heading text-center mb-4">
            <div>
              <h2 className="section-title mb-1">New Drops</h2>
              <span><img src="assets/images/path1.png" alt="" className="img-fluid" /></span>
            </div>
          </div>
          <div className="drop-detail-header">
            <h3 className="heading-title">The Fantasy Flower Illustration<img src="assets/images/icons/star-check.png" alt="" /></h3>
            <div className="explore-social-icon d-flex justify-content-center">
              <ul>
                <li><a href="#" className="icon-box"><img src="assets/images/icons/discord-icon.png" alt="" /></a></li>
                <li><a href="#" className="icon-box"><img src="assets/images/icons/twitter-icon.png" alt="" /></a></li>
                <li><a href="#" className="icon-box"><img src="assets/images/icons/instagram-icon-large.png" alt="" /></a></li>
                <li><a href="#" className="icon-box"><img src="assets/images/icons/youtube-icon2.png" alt="" /></a></li>
                <li><a href="#" className="icon-box"><img src="assets/images/icons/mail-icon.png" alt="" /></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="drop-detail-image">
            <img src="assets/images/drop-banner.png" alt="" className="img-fluid" />
          </div>
          <div className="container">
          <div className="drop-detail-stack-wrapper">
            <div className="col-lg-7 col-md-7 mx-auto p-0">
              <div className="row mb-4">
                <div className="col-lg-3 col-6 mb-3 mb-lg-0">
                  <div className="drop-detail-stack-content">              
                    <div className="stack-card">
                      <div className="card-body">
                        <p className="card-title">Mint Start</p>
                        <div>
                          <h2 className="card-text">
                            <div className="mint-time">
                              49<span>H</span> 26<span>M</span> 05<span>S</span>
                            </div>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="drop-detail-stack-content">                
                    <div className="stack-card">
                      <div className="card-body">
                        <p className="card-title">Mint End</p>
                        <div>
                          <h2 className="card-text">Launched</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="drop-detail-stack-content">                        
                    <div className="stack-card">
                      <div className="card-body">
                        <p className="card-title">Start Price</p>
                        <div>
                          <h2 className="card-text">0.25 BNB</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="drop-detail-stack-content">                        
                    <div className="stack-card">
                      <div className="card-body">
                        <p className="card-title">Amount</p>
                        <div>
                          <h2 className="card-text">2000</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div className="drop-detail-stack-container">
            <div className="col-lg-7 col-md-7 mx-auto p-0">
              <div className="drop-detail-nft">
                <h4 className="drop-nft-title">Launched Drops</h4>
                <div className="card-wrapper">
                  <div className="row gx-lg-5">
                    <div className="col-lg-6 col-md-6">
                      <div className="drop-nft-card mb-4 mb-lg-0">
                        <div className="card-body">
                          <div className="name-content">
                            <h3>Creative Art Collection</h3>
                          </div>
                          <div className="card-media">
                            <img src="assets/images/bg-slide1-1.png" alt="" className="img-fluid" />
                          </div>
                          <a className="btn btn-violet w-100" href="#">Open Auction Page</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="drop-nft-card">
                        <div className="card-body">
                          <div className="name-content">
                            <h3>Creative Art Collection</h3>
                          </div>
                          <div className="card-media">
                            <img src="assets/images/bg-slide2-2.png" alt="" className="img-fluid" />
                          </div>
                          <a className="btn btn-violet w-100" href="#">Open Auction Page</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="drop-detail-description mx-lg-4 mb-4 mb-lg-5">NFT of the manga "The Fantasy Flower Illustration" is now available on NFThee! Auction sale of 2 Street arts drawn by Art Collection! The CroArmy Soldier is the face of our Army. There are 1,000 NFT's available for mint on this Gen 2. Gen 1 was an amazing success after our proof of concept was outstanding! Holders of the Solider will be airdropped CRO biweekly, 20% of the treasury profits. Join our Discord to compete against other platoons for exclusive, lucrative rewards.</p>
{/*            
            <div className="row">
              <div className="col-lg-6 col-md-6 mb-4">
                <div className="new-drop-detail-accordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#ItemOne" aria-expanded="true">
                        Auction-details
                      </button>
                    </h2>
                    <div id="ItemOne" className="accordion-collapse collapse show">
                      <div className="accordion-body">
                        <ul>
                          <li>Auction start time： 2022/4/20 12:00 (UTC)</li>
                          <li>Auction end time：2022/4/23 12:00 (UTC)</li>
                          <li>Art Details: Two pieces of Eren's street art shown in the film are for sale.
                            <ol>
                              <li>The Black Monster
                                <ul>
                                  <li>1998 EREN THE SOUTHPAW</li>
                                </ul>
                              </li>
                              <li>Night in Chelsea
                                <ul>
                                  <li>2004 EREN THE SOUTHPAW</li>
                                </ul>
                              </li>
                            </ol>
                          </li>
                          <li>Bid Incentives: You will receive a "Bid Memorial NFT" if you make a bid during the auction.</li>
                          <li>Purchase benefits：Rights for the NFT owner to appear as a character in the second part of the comic series of "THROW UP A DEUCE." in "EREN THE SOUTHPAW".</li>
                        </ul>
                        <p>*We will receive the winning bidder's photo and character name after the auction ends.</p>
                        <p>*This work will be published on cakes and on this website.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-4">
                <div className="new-drop-detail-accordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#ItemTwo" aria-expanded="true">
                        NFT Terms
                      </button>
                    </h2>
                    <div id="ItemTwo" className="accordion-collapse collapse show">
                      <div className="accordion-body">
                        <ul>
                          <li>The NFT is for image data only.</li>
                          <li>The purchaser of the NFT is granted rights to exploit and/or dispose the NFT that contains information of the image data, including, but not limited to, the URL, provided, however that the purchaser is not granted any intellectual property rights, including copyright, trademarks, or the like, in and to the image data.</li>
                          <li>The NFT is for private use only. It shall not be offered to any third person beyond the scope of the private use or exploited for commercial purposes.</li>
                          <li>The author of the image data is not liable for any damage or loss the purchaser, the transferee or any other third person or party suffered in connection with the purchase or the sale of the NFT, regardless of reasons.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
                <div className="new-drop-detail-accordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#ItemThree" aria-expanded="true">
                        About The Fantasy Flower Illustration
                      </button>
                    </h2>
                    <div id="ItemThree" className="accordion-collapse collapse show">
                      <div className="accordion-body">
                        <p>Original work: Kappi</p>
                        <p>An ensemble drama about creators set in a major advertising agency, with its series published in "cakes" in March 2016, and a remake version written by nifuni has been serialized in "Shonen Jump +" from October 2017. It has also been developed in a wide variety of media, including live-action dramas and stage plays, with its vast popularity in many areas of entertainment.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="new-drop-detail-accordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#ItemFour" aria-expanded="true">
                        Summary
                      </button>
                    </h2>
                    <div id="ItemFour" className="accordion-collapse collapse show">
                      <div className="accordion-body">
                        <p>"To all those who could not become geniuses."</p>
                        <p>Koichi Asakura is a fledgling designer working for a major advertising agency.
                          Every day, he works feverishly, dreaming of one day becoming famous...
                          In the midst of his daily struggles, he remembers the genius Eren he met back in high school...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             */}
          </div>
        </div>
      </section>
  
     </>
  )
}

export default DropDetail;
 