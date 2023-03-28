import { useEffect, useState } from "react";
import { SectionHeading, CheckBox } from "../../Components";
import {  event_type, chains, AccordionCards1, List } from "./Data";
import Apexcharts from '../../Components/Apexcharts'
import axios from "axios";
import { Link } from "react-router-dom";
import { getPriceConversion } from "../../services/apiServices";
import instance from "../../axios";
function Activity() { 
  const [noOfElement, setNoOfElement] = useState(8);
  const [activityData,setActivityData]=useState([])
  const [loading,setLoading]=useState(true)
  const [message, setMessage] = useState("");

  const [xaxis,setxaxis]=useState()
  const [avgPrice,setAvgPrice]=useState()
  const [vol,setVolume]=useState()
  const slice = activityData.slice(0, noOfElement);
  
  const loadMore = () => {
    // setNoOfElement(noOfElement + 8);
    // if (noOfElement > activityData.length) {
    //   const Msg = "--No Content--";
    //   setMessage(Msg);
    //   console.log(Msg);
    // }
    if (noOfElement > activityData.length) {
      // setNoOfElement(prev=>prev-8);
      
      
      setNoOfElement(8);

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      setNoOfElement(noOfElement + 8);
    }
  };
  const [priceCov,setPriceCon]=useState()

  const [show, setShow] = useState("hidden");
  const ShowResult = () => {
    setShow("show");
  };

  
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isOpen, setIsopen] = useState(true);
  const [filter, setfilter] = useState("filterClose");

  let Average=(avgPrice?.reduce((a, b) => a + b)/avgPrice?.length).toFixed(5)

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  const FilterClose = () => {
    window.scrollTo(0, 0)
    filter === "filterClose" ? setfilter("") : setfilter("filterClose");    
  };

useEffect(async() => {
  instance.get('/api/fetchAllHistory')
.then(res=>{ setActivityData(res.data.data)
  // sCreated
  const newAxis=res.data.data.map(data=>data.sCreated)
  const volume=res.data.data.map(data=>data.action)

  const newprice=res.data.data.map(data=>data.price)
  setxaxis(newAxis)
  setAvgPrice(newprice)
  setVolume(volume)
            })
.finally(res=>setLoading(false))

let result = await getPriceConversion()
setPriceCon(result)

}, [])

  return (
    <>
      <main>
        <section className="explore-filter-section bg-section">
          <div className="container-fluid">
            <div className="section-heading text-center mb-5">
              <SectionHeading heading={"Activities"} />
              <img src="images/path1.png" className="img-fluid" />
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
                            : <img src="/assets/images/icons/close.png" alt="" className="img-fluid close-icon" onClick={FilterClose} /> } </span>
                    </div> 
                      {isOpen ? (
                        <div className="panel-body">
                          <form className="filter-search me-auto d-none d-md-block mb-3">
                            <input
                              type="text"
                              placeholder="Search"
                              className="form-control"
                            />
                            <div className="search-icon">
                              <button className="btn">
                                <i className="bx bx-search-alt-2" />
                              </button>
                            </div>
                          </form>
                          <AccordionCards1 />
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
             {filter ?  
            <div className="col-lg-12 filter-mobile-wrapper"> 
            <button onClick={FilterClose} className="filter_button"><img src="/assets/images/icons/filter-icon.png" alt="" className="me-3" />Filter</button> 
            </div> : ""}
              <div
                className={`${isOpen ? "col-lg-9" : "col-lg-11"} px-lg-0 collection-filter-card overflow-hidden ExtraSpaceMobileview`}
                style={{ width: `${isOpen ? "" :"94.666667%"}` }}
              >
                <div className="activity-table-container table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" />
                        <th scope="col">Item</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">From</th>
                        <th scope="col">To</th>
                        <th
                          scope="col"
                          className="d-flex align-items-center justify-content-between border-bottom-0"
                        >
                          Time
                          <span
                            className="graph-icon"
                            onClick={() =>
                              setIsRevealPwd((prevState) => !prevState)
                            }
                          >
                            <img
                              src="/assets/images/icons/graph-icon.png"
                              alt=""
                              className="img-fluid"
                              id="btnColor"
                            />
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        id="myContent"
                        className={isRevealPwd ? "show" : "hidden"}
                      >
                        <td colSpan={8}>
                          <div className="activity-graph-area">
                            <div className="row align-items-center">
                              <div className="col-lg-9">
                                <div className="price-content-wrapper">
                                  <ul>
                                    <li>
                                      <h5>Avg. Price</h5>
                                      <h6>{Average}</h6>
                                    </li>
                                    <li>
                                      <h5>90 Day Avg. Price</h5>
                                      <h6>76.5895</h6>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="activity-day-select">
                                  <select className="form-select">
                                    <option selected>Last 90 days</option>
                                    <option value={1}>Last 60 days</option>
                                    <option value={2}>Last 30 days</option>
                                    <option value={3}>Last 10 days</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="chart"> 
                             {vol&&avgPrice&&xaxis !=undefined||null?<Apexcharts  xaxiss={xaxis} avgPrice={avgPrice} volume={vol}/>:null}

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      {loading?
                      <div class="text-center">	
                      <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </div>
                      :slice?.map((data,i) => {
                        return(
                          <tr>
                                                   <td key={i}> <img src={"/assets/images/icons/cart.png"} alt="" className="me-1" /> {data?.action} </td>
                                                   <td>
                                                    <Link to={`/exploredetail/${data?.nftId?._id}`}>
                                                       <div className="d-flex align-items-center"> <img src={data.nftId?.uploadFile?data.nftId.uploadFile:"/assets/images/avt-5.jpg"} alt="" className="user-img" /> <span className="ms-2">{data?.nftId?.name}</span> </div>
                                                       </Link>
                                                   </td>
                                                   <td>
                                                       <div className="price-detail">
                                                           <h5> <img src="/assets/images/icons/ethereum.png" alt="" className="me-1" /> {data.price } </h5>
                                                           <h6>${( parseFloat(priceCov) * parseFloat(data.price)).toFixed(5)}</h6>
                                                       </div>
                                                   </td>
                                                   <td>1</td>
                                                   <td> <Link to={`/users/${data.userId}`}><span className="text-color-purple">{data.from}</span></Link> </td>
                                                   <td> <span className="text-color-purple">{data.to==''?'__':data.to}</span> </td>
                                                   <td> <a href="#">{data?.timeSinceCreated} <img src="/assets/images/icons/share-icon.png" alt="" className="ms-1" /> </a> </td>
                                               </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="row mb-4">
                   <div className="col-lg-6 col-md-6 mx-auto">
                     <h1 className="section-title text-center">
                      {message}</h1>
                      {activityData.length > 6 && (
                <button className='btn btn-load' onClick={loadMore}>
                  {noOfElement > activityData.length ? 'Show less' : 'Show more'}
                </button>
              )}
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

export default Activity;

