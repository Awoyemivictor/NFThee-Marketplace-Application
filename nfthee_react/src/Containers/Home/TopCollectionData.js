import React from 'react';
import { useTranslation } from "react-i18next"; 
import { Link } from 'react-router-dom';
function TopCollectionData({data ,index}) {
    const { t } = useTranslation();  
    const TopCollectionData = [
      { number: '1',color:"red"  },
      { number: '2',color:"blue"  },
      { number: '3',color:"green"  },
      { number: '4',color:"purple"  },
      { number: '5',color:"yellow"  },
      { number: '6',color:"red"  },
      { number: '7',color:"blue"  },
      { number: '8',color:"green"  },
      { number: '9',color:"purple"  },
      { number: '10',color:"yellow"  }, 
     ]
    
  return (
     <>
        <div className="row"> 
            {data.map((item ,i) => {
                    return (
                        <div className="col-lg-2 col-md-4">
                        <div className="collection-card grad-border">
                          <div className="card-body" key={i}>
                          <Link to={`/explorefilter/${item._id}`}>
                            <div className="d-flex justify-content-between align-items-center border-bottom mb-2 pb-2">
                              <div className={`collection-id green`}>#{i+1}</div>
                              <h5 className="collection-point">+ 41.51%</h5>
                            </div>
                            <div className="d-flex">
                              <a href="#">
                                <img className="user_img" src={item.logo_image||"/images/avatar2.png"} alt="" />
                              </a>
                              <div className="ms-2">
                                <h5 className="user_name">{item.name}</h5>
                                <p className="eth_price">
                                  <img className="me-1" src="/images/icons/ethereum.png" alt="" />25,368.18
                                </p>
                              </div>
                            </div>
                          </Link>
                          </div>
                        </div>
                      </div>
                  
             )})}
       </div>
    </>
  )
}
function TopSellers (){
    const Topsellers = [
        { image:"/images/avt-5.jpg"  },
        { image:"/images/avt-2.jpg"  },
        { image:"/images/avt-3.jpg"  },
        { image:"/images/avt-4.jpg"  },
        { image:"/images/avt-1.jpg"  },
        { image:"/images/avt-5.jpg"  },
        { image:"/images/avt-2.jpg"  },
        { image:"/images/avt-3.jpg"  },
        { image:"/images/avt-4.jpg"  }, 
       ] 
    return( 
        <>
         <div className="row"> 
            {Topsellers.map((item) => {
                    return (
                        <div className="col">
                        <div className="seller-author-box">
                          <div className="author-avatar">
                            <img src={item.image} alt="" className />
                            <div className="badge">
                              <img src="/images/icons/star-check.png" alt="" />
                            </div>
                          </div>
                          <div className="author-information">
                            <h5>Crispin Berry</h5>
                            <div className="price">214.2 ETH</div>
                          </div>
                        </div>
                      </div> 
                  
             )})}
       </div>

        </>
    )
}
export   {TopCollectionData,TopSellers};