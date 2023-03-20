import React from 'react';
import parse from "html-react-parser"; 
import { useTranslation } from "react-i18next"; 
import {SlickSlider} from "../../Components/SlickSlider"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function Newdrop() {
    const { t } = useTranslation();  
    const NewDrop = [
      { name: 'CreativeArtCollection.Hoping', title:"CreativeArtCollection.Hope", image:"images/card-img1.png",date:"&nbsp;01 <br><h6>APR</h6>" },
      { name: 'CreativeArtCollection.Boxhead', title:"CreativeArtCollection.Box", image:"images/card-img2.png",date:"&nbsp;16 <br><h6>APR</h6>" },
      { name: 'CreativeArtCollection.Subjective Consistency',title: "CreativeArtCollection.Constsub", image:"images/card-img3.png",date:"&nbsp;10 <br><h6>APR</h6>" },
      { name: 'CreativeArtCollection.Liquidities', title: "CreativeArtCollection.LIQ", image:"images/card-img4.png",date:"&nbsp;20 <br><h6>APR</h6>" },
      { name: 'CreativeArtCollection.Give me Hope', title: "CreativeArtCollection.Hope", image:"images/card-img5.png",date:"&nbsp;09  <br><h6>APR</h6>" },
      { name: 'CreativeArtCollection.Hoping', title:"CreativeArtCollection.Hope", image:"images/card-img1.png",date:"&nbsp;22 <br><h6>APR</h6>" },
     ]
  return (
     <>
     
       <div className="new-drop-slider mb-4 mb-lg-5 slick-initialized slick-slider" >
       <SlickSlider>
            {NewDrop.map((item) => {
              const {name,title,image,date} = item;
                    return (
            <Link to ="/dropdetail">                
              <div className="single-slide">
                <div className="new-drop-card">
                  <img src={image} alt="" className="img-fluid" />
                  <div className="content">
                    <h1>{t(name)}</h1>
                  </div>
                  {/* <div className="content2">
                    <h5>{t(.title)}</h5>
                  </div> */}
                  <div className="date-content">
                      <h5>{parse(t(date))}</h5>
                      {/* <h5>20</h5>
                      <h6>Apr</h6> */}
                  </div>
                </div>
              </div> 
              </Link>  
             )})}
          </SlickSlider>
              </div>
              
    </>
  )
}

export default Newdrop