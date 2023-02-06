import React from 'react';
import { useTranslation } from "react-i18next"; 

import {SlickSliderLiveAuction} from "../../Components/SlickSlider"

function LiveAuctionsData() {
    const { t } = useTranslation();  
    const Auctionsdata = [
      { name: 'Lorihart',  },
      { name: 'Lorihart',  },
      { name: 'Lorihart'  },
      { name: 'Lorihart',  }, 
     
     ]
     
  return (
     <> 
     
      <div className="live-auction-slider">  
      {/* <SlickSliderLiveAuction> */}
            {Auctionsdata.map((item) => {
                    return (  
               
                       <div className="col-md-3 ">
                        <div className="auction-card mb-4 mb-lg-0">
                          <div className="card-body">
                            <div className="auction-create-by">
                              <a href="#"><img src="images/img2.png" alt="" className="avatar-icon img-fluid" /></a>
                              <span href="#" className="creator-name">{t("CreativeArtCollection.Created By")}  @{item.name}</span>
                            </div>
                            <div className="card-media">
                              <a href="#"><img src="images/featured-img7.jpg" alt="" className="img-fluid" /></a>
                              <div className="block-timer2">
                                <div className="block-timer-box2">
                                  <div className="item">
                                    <img src="images/icons/flame.png" alt="" className="img-fluid flame-img" />
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
                              <h5><a href="#">{t(`CreativeArtCollection.Walking on the Air`)}</a></h5>
                            </div>
                            <div className="meta-info">
                              <div className="bid-title">
                                <span>{t("CreativeArtCollection.Current Bid")}</span>
                              </div>
                              <div className="price">
                                <h5> 2.59 ETH</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> 
                  
             )})}
       {/* </SlickSliderLiveAuction> */}
     </div>
         
    </>
  )
}

export default LiveAuctionsData;