import {useState,useRef,useEffect} from 'react'
import { TopSeller_select,TopSeller_select_Sortby } from "../../Components/NiceSelect"; 
import {NavLink, Link, useParams } from 'react-router-dom'
import { useTranslation, initReactI18next } from "react-i18next"; 
 import {ExploreFilter_Select } from "../../Components/NiceSelect";
 import { FilterCard, filter_card, AccordionCards, cardData, PillsList  } from "./ExploreFilterData"
 import { activity,   AccordionCards1, List } from "../Activity/Data";
import  Apexcharts from "../../Components/Apexcharts"
import instance from '../../axios';
import axios from 'axios';
import Loader from '../../Components/Loader/Loader';
import { getPriceConversion } from '../../services/apiServices';
function ExploreFilter() {

  // const ref = useRef(null);
  const {id} = useParams();

  console.log(id,"param id")
  const [show, setShow] = useState('hidden');
  const [collections, setCollections] = useState([]);
  const [like, setliked] = useState();
  const [activityData,setActivityData]=useState([])
  const [activTab,setActivetab]=useState('1')

  const [xaxis,setxaxis]=useState()
  const [avgPrice,setAvgPrice]=useState()
  const [volume,setVolume]=useState()


  const { t } = useTranslation(); 
  const ShowResult = () =>{
    setShow('show')
  }
  
  const [noOfElement, setNoOfElement] = useState(8);
  const [message, setMessage] = useState("");
  const loadMore = () => {
    setNoOfElement(noOfElement + 8);
    if (noOfElement > cardData.length) {
      const Msg = "--No Content--";
      setMessage(Msg);
      console.log(Msg);
    }
  };
  const slice = cardData.slice(0, noOfElement);
 const pageUrl=window.location.href
  function myFunction() {
    navigator.clipboard.writeText(pageUrl);
    var tooltip = document.getElementById("tooltip");
    tooltip.classList.add('active');
    setTimeout(() => {
      tooltip.classList.remove('active');
    }, 1500);
  }
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  // const [FilterShow, setFilterShow] = useState(true);
  const [isOpen, setIsopen] = useState(true);
  

  const ToggleSidebar = () => {
      isOpen === true ? setIsopen(false) : setIsopen(true);
  }
  const [filter, setfilter] = useState("filterClose");
  const FilterClose = () => {
      window.scrollTo(0, 0) 
     filter === "filterClose" ? setfilter("") : setfilter("filterClose");  
   };


  //  const Exploreshow=(e)=>{
  //   e.addEventListener(){
  //     if (box.style.display === 'none') {
  //       box.style.display = 'block';
    
  //       btn.textContent = 'Hide div';
  //     } else {
  //       box.style.display = 'none';
    
  //       btn.textContent = 'Show div';
  //     }
  //   }
  //  }


  // useEffect(() => {
  //   const Exploreshow = event => {
  //     console.log('Button clicked');
  //     if (box.style.display === 'none') {
  //             box.style.display = 'block';
          
  //             btn.textContent = 'Hide div';
  //           } else {
  //             box.style.display = 'none';
          
  //             btn.textContent = 'Show div';
  //           }
  //   };

  //   const element = ref.current;

  //   element.addEventListener('click', Exploreshow);

  //   return () => {
  //     element.removeEventListener('click', Exploreshow);
  //   };
  // }, []);
  const [loading,setLoading]=useState(true)
  const [priceCov,setPriceCon]=useState()
  // let convertToUSD = (parseFloat(result) * parseFloat(nftPrice)).toFixed(5);
  useEffect(async () => {
    await axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/createCollection/read?id=${id}`)
      .then((response) => {
        // setLoading(true);
        setCollections(response.data.data);
        setLoading(false);
      })
     let result = await getPriceConversion()
     setPriceCon(result)
     
      .catch((e) => {
        // setLoading(true);
      });
  }, []);
const [shownList,setShownList]=useState([])
useEffect(async() => {
  if (collections.name) {
    await axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/all?collection=${collections?.name}`)
      .then((response) => {
        // if (response.data.data.length === 0) {
        //   axios
        //     .get(`${process.env.REACT_APP_BASE_URL}/api/all`)
        //     .then((response) => {
        //       console.log("<>P<P<P>", response.data, `collection=${collections?.name}`);
        //       setShownList(response.data.data);
        //     });
        // } else {
          setShownList(response.data.data);
          handleActive()
        // }
      });
  }
}, [collections,like]);

  

  // function setActivetab() {
  //   var x = document.getElementById("sectionHide");
  //   var y = document.getElementById("sectionHide1");

  //   if (x.style.display === "none"||y.style.display === "block") {
  //     x.style.display = "block";
  //     y.style.display = "none";
  //   } else {
  //     x.style.display = "none";
  //     y.style.display = "block";
  //   }
  // }
  let Average=(avgPrice?.reduce((a, b) => a + b)/avgPrice?.length).toFixed(5)
const handleActive=async()=>{
  // setActivityData
// axios
await
// instance
axios
.get(`http://192.168.29.147:8003/api/collectionActivity?collection_name=${collections.name}`)
.then(res=>{setActivityData(res.data.data)
  const newAxis=res.data.data.map(data=>data.sCreated)
  const vol=res.data.data.map(data=>data.action)
  const newprice=res.data.data.map(data=>data.price)
  setxaxis(newAxis)
  setAvgPrice(newprice)
  setVolume(vol)
  
  
})


 

 


}
  return (
    <> 
    
  {loading?(<Loader/>):
 <main>
  <section className="explore-filter-section bg-section pt-0" >
   <div className="explore-banner-area">
   <div className="banner-image">
          <img src={collections.banner_image||"/assets/images/explore-bg.png"} alt="" className="img-fluid" />
          <div className="d-lg-none d-block">
            <div className="col-lg-12 col-md-12 mobile-dropdown">
              <div className="d-flex justify-content-between align-items-center mt-3">
                <a href="#">
                  <span className="back-text"><i className="ri-arrow-left-s-line" />Back</span>
                </a>
                <div className="explore-social-icon">
                  <div className="user-more-detail">
                    <div className="more">
                      <div className="icon dropdown">
                        <a href="#" data-bs-toggle="dropdown" aria-expanded="false" className><img src="/assets/images/icons/three-dots.png" alt="" /></a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <a className="dropdown-item" href="#"> <span className="dropdown-icon"><img src="/assets/images/icons/url.png" /></span> Url </a>
                          <a className="dropdown-item" href="#"> <span className="dropdown-icon"><img src="/assets/images/icons/discord-icon.png" /></span> Discord </a>
                          <a className="dropdown-item" href="#"> <span className="dropdown-icon"><img src="/assets/images/icons/twitter-icon.png" /></span> Twitter </a>
                          <a className="dropdown-item" href="#"> <span className="dropdown-icon"><img src="/assets/images/icons/instagram-icon.png" /></span> Instagram </a>
                          <a className="dropdown-item" href="#"> <span className="dropdown-icon"><img src="/assets/images/icons/youtube-icon.png" /></span> Youtube </a>
                          <a className="dropdown-item" href="#"> <span className="dropdown-icon"><img src="/assets/images/icons/mail-icon.png" /></span> Mail </a>
                          <a className="dropdown-item" href="#"> <span className="dropdown-icon"><img src="/assets/images/icons/etherscan-logo.png" /></span> Etherscan </a>
                          <a className="dropdown-item" href="#"> <span className="dropdown-icon"><img src="/assets/images/icons/rotate.png" /></span> Refresh </a>
                          <a className="dropdown-item" href="#"> <span className="dropdown-icon"><img src="/assets/images/icons/report.png" /></span> Report </a>
                          <a className="dropdown-item" href="#"> <span className="dropdown-icon"><img src="/assets/images/icons/home.png" /></span>Website </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid px-lg-4">
          <div className="col-lg-12 col-md-12 p-0">
            <div className="explore-banner-profile pt-5">
              <div className="user-profile-wrapper">
                <div className="user-profile-icon">
                  <div className="user-box">
                    <img src={collections.logo_image||"/assets/images/avt-4.jpg"} alt="" className="img-fluid user-img" />
                    <span className="star-check-icon"><img src="/assets/images/icons/star-check.png" alt="" /></span>
                  </div>
                </div>
              </div>
              <div className="banner-profile-icon-detail ">
                <div className="d-flex justify-content-between mobile">
                  
                  <h2> <h2>{collections.name?`${collections.name}`:t("explore.Metaroverse")}</h2></h2>
                  <div className="explore-social-icon d-lg-flex d-none align-items-center justify-content-end">
                    <div className="border-end me-4 pe-4">
                      <ul>
                        <li><a href={collections.url} className="icon-box" target='_blank'  data-toggle="tooltip" title="Url"   ><img src="/assets/images/icons/url.png" alt="url" /></a></li>
                        <li><a href={collections.url} className="icon-box" target='_blank'   data-toggle="tooltip" title="Discord"  ><img src="/assets/images/icons/discord-icon.png" alt="discord" /></a></li>
                        <li><a href={collections.url} className="icon-box" target='_blank'   data-toggle="tooltip" title="Twitter" ><img src="/assets/images/icons/twitter-icon.png" alt="" /></a></li>
                        <li><a href={collections.url} className="icon-box" target='_blank'   data-toggle="tooltip" title="Instagram" ><img src="/assets/images/icons/instagram-icon-large.png" alt="" /></a></li>
                        <li><a href={collections.url} className="icon-box" target='_blank'  data-toggle="tooltip" title="Youtube"  ><img src="/assets/images/icons/youtube-icon2.png" alt="" /></a></li>
                        <li><a href={collections.url} className="icon-box" target='_blank'  data-toggle="tooltip" title="Email"  ><img src="/assets/images/icons/mail-icon.png" alt="" /></a>
                        </li>
                      </ul>
                    </div>
                    <ul>
                      <li>
                        <div className="user-more-detail">
                          <div className="more">
                            <div className="icon" >
                              <span id="tooltip" className="tooltip ">Copied !</span>
                              <a href="#" 
                               type="button"
                               onClick={myFunction}
                              data-toggle="tooltip" 
                              title="Share"
                              >
                                <img src="/assets/images/icons/share.png" alt="" style={{width: "19px"}} />
                              
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="user-more-detail">
                          <div className="more">
                            <div className="icon">
                              <a href="#" data-toggle="tooltip" title="Reload"><img src="/assets/images/icons/rotate.png" alt="reload" style={{width: "19px"}}  /></a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="user-more-detail">
                          <div className="more">
                            <div className="icon dropdown">
                              <a href="#"  data-bs-toggle="dropdown" aria-expanded="false" className><img src="/assets/images/icons/three-dots.png" alt="more option" /></a>
                              <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                {/* <a class="dropdown-item" href="#"> <span class="dropdown-icon"><img
                                                   src="/assets/images/icons/share.png"></span> Share </a> */}
                                <a className="dropdown-item" href="#"> <span className="dropdown-icon"><img src="/assets/images/icons/report.png" /></span> Report </a>
                                <a className="dropdown-item" href="#"> <span className="dropdown-icon"><img src="/assets/images/icons/home.png" /></span>Website </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <p>{t("CreativeArtCollection.Created By")}<span>{collections?.created_by?.user_name}</span> </p>
              </div>
              <div className="profile-bid-detail">
                <div className="col-lg-6 col-md-6 p-0">
                  <div className="row">
                    <div className="col-lg-3 col-6">
                      <a href="#">
                        <div className="card" style={{backgroundColor: "transparent"}}>
                          <div className="card-body p-1">
                            <div className="card-title">9.6K</div>
                            <div className="card-text">{t("explore.items ")}</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-3 col-6">
                      <a href="#">
                        <div className="card"style={{backgroundColor: "transparent"}}>
                          <div className="card-body p-1">
                            <div className="card-title">3.8K</div>
                            <div className="card-text">{t("explore.owners")}</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-3 col-6">
                      <a href="#">
                        <div className="card" style={{backgroundColor: "transparent"}}>
                          <div className="card-body p-1">
                            <div className="card-title"><img src="/assets/images/icons/ethereum-pink.png" alt="" />
                            <span className="card-title"> 0.649</span> 
                            </div>
                            <div className="card-text">{t("explore.floor price")}</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-3 col-6">
                      <a href="#">
                        <div className="card"style={{backgroundColor: "transparent"}}>
                          <div className="card-body p-1">
                            <div className="card-title">
                              <img src="/assets/images/icons/ethereum-pink.png" alt="" />
                              <span className="card-title">  2.4K</span>
                            </div> 
                            
                            <div className="card-text">{t("explore.Volume Traded")}</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 p-0"></div>
                </div>

                <p className="desc" >{collections.description?`${collections.description}`:t("explore.Metroverse_title")} <br/> 
                {/* {t("explore.Utility Token")} */}
                 </p>
                {/* <div className="d-flex mb-3" >
                  <button className="btn btn-violetFilter d-flex likeBtn"><i className="ri-heart-line me-2 fw-light" />
                   {t("explore.Like")}</button>
                  <button className="btn btn-outline-whiteFilter ms-3  followBtn">{t("explore.Follow")} +</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div class="container-fluid">
        <div className="row"> 
        <div className="collection-filter-wrapper_top col-lg-3" style={{    width: "20%"}}>     </div>
        <div className="collection-filter-card_tab col-lg-9"  style={{    width: "80%"}}> 
        <div className="explore-filter-tab-container mt-3">
          <ul className="nav nav-pills mb-3 px-lg-4" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active ps-0" id="explore-item-tab" data-bs-toggle="pill" data-bs-target="#explore-item" type="button" role="tab" aria-selected="true">{t("explore.item")}</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="explore-activity-tab" data-bs-toggle="pill" data-bs-target="#explore-activity" type="button" role="tab" aria-selected="false">{t("explore.Activity")}</button>
            </li>
          </ul>
          </div>
        </div> 
        </div></div>  */}

      {activTab==='1' ?<div className="tab-content" id="pills-tabContent">
           <div className="tab-pane show active" id="sectionHide1"role="tabpanel">
               <div className="wrapper">
                   <div className="container-fluid">
                       <div className="row"> 
                       {isOpen ? 
                       <div className={`col-lg-3 collection-filter-wrapper filterwidth filter-sticky custom-scrollbar ${filter}`} id="filterId">
                               <div className="collection-filter">
                                   <div className="panel">
                                   <div className="panel-heading d-flex justify-content-between align-items-center mb-4">
                                        <div className="panel-title">
                                            {filter ? 
                                            <img src="/assets/images/icons/filter-icon.png" alt="" className="me-2 filter-icon" onClick={ToggleSidebar} /> 
                                            : <img src="/assets/images/icons/filter-icon.png" alt="" className="me-2 filter-icon" onClick={FilterClose} /> }  
                                         </div> 
                                         <span><h5>Filter</h5></span>
                                            <span> {filter ? <img src="/assets/images/icons/close.png" alt="" className="img-fluid close-icon" onClick={ToggleSidebar} />
                                            : <img src="/assets/images/icons/close.png" alt="" className="img-fluid close-icon" onClick={FilterClose} /> } </span>
                                     </div> 
                                       {isOpen ?
                                        <div className="panel-body">
                                           <form className="filter-search me-auto d-none d-md-block mb-3"> <input type="text" placeholder={t("navbar.Search")} className="form-control" />
                                               <div className="search-icon"> <button className="btn"> <i className="bx bx-search-alt-2" /> </button> </div>
                                           </form> 
                                           <AccordionCards cards={filter_card} /> 
                                       </div> : null }
                                   </div>
                               </div>
                           </div> 
                           :
                            <div className="col-lg-1 " style={{width: '5.333333%'}}>
                               <div className="collection-filter filter-sticky">
                                   <div className="panel p-0">
                                       <div className="panel-heading">
                                           <div className="panel-title filter-border filter-button" onClick={ToggleSidebar}> <img src="/assets/images/icons/filter-icon.png" alt="" className="filter-icon " /> </div>
                                       </div>
                                   </div>
                               </div>
                           </div> 
                           }
                             
                            {filter ?  
                            <div className="col-lg-12 filter-mobile-wrapper"> 
                            <button onClick={FilterClose} className="filter_button"><img src="/assets/images/icons/filter-icon.png" alt="" className="me-3" />Filter</button> 
                            </div> : ""}

                            <div className={`${isOpen ? 'col-lg-9' :'col-lg-11'} collection-filter-card`} style={{width:`${isOpen ?"" : "94.666667%"}`}}>
                               <div className="collection-filter-card_tab col-lg-9"  style={{    width: "80%"}}> 
                                  <div className="explore-filter-tab-container mt-3">
                                  <ul className="nav nav-pills mb-3 px-lg-4" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                      <button onClick={()=>setActivetab('1')} className="nav-link active ps-0" id="explore-item-tab" data-bs-toggle="pill" data-bs-target="#explore-item" type="button" role="tab" aria-selected="true">{t("explore.item")}</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                      <button onClick={()=>setActivetab('2')} className="nav-link" id="explore-activity-tab" data-bs-toggle="pill" data-bs-target="#explore-activity" type="button" role="tab" aria-selected="false">{t("explore.Activity")}</button>
                                    {/* ref={ref} onClick={()=>setActivetab} */}
                                    </li>
                                  </ul>
                                  </div>
                                </div> 
                               <div className="collection-wrapper">
                                   <div className="collection-content">
                                       <div className="top-wrapper">
                                           <h3 className="search-count">{t('explore.Showing')} 01-09 {t("explore.of")} {shownList.length} {t("explore.result")}</h3>
                                           <div className="d-flex justify-content-between align-items-center">
                                               <div className="sort-by-filter"> <span>{t("explore.sort by")}: </span> {/* <select className="form-select" aria-label="Default select example" style={{display: 'none'}}>
                                                       <option selected>Most Popular</option>
                                                       <option value={1}>One</option>
                                                       <option value={2}>Two</option>
                                                       <option value={3}>Three</option>
                                                   </select> */}
                                                   < ExploreFilter_Select />
                                               </div>
                                               <div className="collection-grid-mode">
                                                   <ul className="nav" id="pills-tab" role="tablist">
                                                       <li className="nav-item" role="presentation"> <a href="#" className="active" id="grid-view" data-bs-toggle="pill" data-bs-target="#pills-grid-view" type="button" role="tab" aria-controls="pills-grid-view" aria-selected="true"> <img src="/assets/images/icons/grid-view-pink.png" alt="" className="img-fluid grid-icon1" /> <img src="/assets/images/icons/grid-view-gray.png" alt="" className="img-fluid grid-icon2" /> </a> </li>
                                                       <li className="nav-item" role="presentation"> <a href="#" className="ms-2" id="list-view" data-bs-toggle="pill" data-bs-target="#pills-list-view" type="button" role="tab" aria-controls="pills-list-view" aria-selected="false"> <img src="/assets/images/icons/list-view-gray.png" alt="" className="img-fluid grid-icon2 " /> <img src="/assets/images/icons/list-view-pink.png" alt="" className="img-fluid grid-icon1" /> </a> </li>
                                                   </ul>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="tab-content">
                                   <div className="tab-pane fade show active" id="pills-grid-view" role="tabpanel" aria-labelledby="pills-grid-view-tab">
                                       <div className="bottom-wrapper">
                                           <div className="row gx-3 d-flex">
                                           {shownList.map((item) => {
                                              return(
                                                <FilterCard {...item} setliked={setliked}/>
                                              )
                                            })}
                                           </div>
                                       </div>
                                       
                                       <div className="row mb-4">
                                            <div className="col-lg-6 col-md-6 mx-auto">
                                            <h1 className="section-title text-center">
                                                {message}
                                            </h1>
                                            {!message && (
                                                <button
                                                className="btn btn-load"
                                                onClick={loadMore}
                                                >
                                                Load More
                                                </button>
                                            )}
                                            </div>
                                     </div> 
                                   </div>
                                   <div className="tab-pane fade" id="pills-list-view" role="tabpanel" aria-labelledby="pills-list-view-tab">
                                       <div className="bottom-wrapper">
                                           <div className="shop-bottom-wrapper">
                                               <div className="row">
                                               <div className="bottom-wrapper">
                                                <div className="row gx-3">
                                                {slice.map((item) => {
                                              return(
                                                <PillsList {...item}/>
                                              )
                                            })}
                                                    
                                                </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <div className="col-lg-6 col-md-6 mx-auto">
                                                    <h1 className="section-title text-center">
                                                        {message}
                                                    </h1>
                                                    {!message && (
                                                        <button
                                                        className="btn btn-load"
                                                        onClick={loadMore}
                                                        >
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
                           </div>


                       </div>
                   </div>
               </div>
           </div>




           {/* Activity */}

       </div>:null}
       </div> 
</section> 

{activTab==='2'?
<section id="sectionHide" >
  <div className="tab-pane" id="explore-activity" role="tabpanel" style={{display:"block"}}>
               <div className="wrapper">
                   <div className="container-fluid">
                       <div className="row">
                            {isOpen ? 
                            <div className={`col-lg-3 collection-filter-wrapper filterwidth filter-sticky custom-scrollbar ${filter}`}>
                               <div className="collection-filter">
                                   <div className="panel">
                                   <div className="panel-heading d-flex justify-content-between align-items-center mb-4">
                                    <div className="panel-title">
                                        {filter ? <img src="/assets/images/icons/filter-icon.png" alt="" className="me-2 filter-icon" onClick={ToggleSidebar} />
                                        : <img src="/assets/images/icons/filter-icon.png" alt="" className="me-2 filter-icon" onClick={FilterClose} />}   </div> 
                                        <span><h5>Filter</h5></span>
                                        <span> {filter ? <img src="/assets/images/icons/close.png" alt="" className="img-fluid close-icon" onClick={ToggleSidebar} />
                                        : <img src="/assets/images/icons/close.png" alt="" className="img-fluid close-icon" onClick={FilterClose} /> } </span>
                                     </div>  
                                       {isOpen ?
                                        <div className="panel-body">
                                           <form className="filter-search me-auto d-none d-md-block mb-3"> <input type="text" placeholder="Search" className="form-control" />
                                               <div className="search-icon"> <button className="btn"> <i className="bx bx-search-alt-2" /> </button> </div>
                                           </form>
                                            <AccordionCards1 />
                                       </div> : null }
                                   </div>
                               </div>
                           </div> 
                           : 
                           <div className="col-lg-1" style={{width: '5.333333%'}}>
                               <div className="collection-filter filter-sticky">
                                   <div className="panel p-0">
                                       <div className="panel-heading">
                                           <div className="panel-title  filter-border" onClick={ToggleSidebar}> <img src="/assets/images/icons/filter-icon.png" alt="" className="filter-icon" /> </div>
                                       </div>
                                   </div>
                               </div>
                           </div> }  
                                        {filter ?  
                                    <div className="col-lg-12 filter-mobile-wrapper"> 
                                    <button onClick={FilterClose} className="filter_button"><img src="/assets/images/icons/filter-icon.png" alt="" className="me-3" />Filter</button> 
                                    </div> : ""}

                              <div className={`${isOpen ? 'col-lg-9' :'col-lg-11'} px-lg-0 ps-lg-0 collection-filter-card overflow-hidden`}style={{width:`${isOpen ?"" : "94.666667%"}`}}>
                               
                              <div className="collection-filter-card_tab col-lg-9"  style={{    width: "80%"}}> 
                                  <div className="explore-filter-tab-container mt-3">
                                  <ul className="nav nav-pills mb-3 px-lg-4" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                      <button onClick={()=>setActivetab('1')} className="nav-link  ps-0" id="explore-item-tab" data-bs-toggle="pill" data-bs-target="#explore-item" type="button" role="tab" aria-selected="false">{t("explore.item")}</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                      <button onClick={()=>setActivetab('2')} className="nav-link active" id="explore-activity-tab" data-bs-toggle="pill" data-bs-target="#explore-activity" type="button" role="tab" aria-selected="true">{t("explore.Activity")}</button>
                                    {/* ref={ref} onClick={setActivetab} */}
                                    </li>
                                  </ul>
                                  </div>
                                </div> 
                               
                               <div className="activity-table-container">
                                   <div className="table-responsive">
                                       <table className="table">
                                           <thead>
                                               <tr>
                                                   <th scope="col" />
                                                   <th scope="col">{t("explore.item")}</th>
                                                   <th scope="col">{t("explore.Price")}</th>
                                                   <th scope="col">{t("explore.Quantity")}</th>
                                                   <th scope="col">{t("explore.From")}</th>
                                                   <th scope="col">{t("explore.to")}</th>
                                                   <th scope="col" className="d-flex align-items-center justify-content-between border-bottom-0">{t("explore.time")} <span className="graph-icon" onClick={()=> setIsRevealPwd(prevState => !prevState)}> <img src="/assets/images/icons/graph-icon.png" alt="" className="img-fluid" id="btnColor" /> </span> </th>
                                               </tr>
                                           </thead>
                                           <tbody>
                                               <tr id="myContent" className={isRevealPwd ? "show" : "hidden" }>
                                                   <td colSpan={8}>
                                                       <div className="activity-graph-area">
                                                           <div className="row align-items-center">
                                                               <div className="col-lg-9">
                                                                   <div className="price-content-wrapper">
                                                                       <ul>
                                                                           <li>
                                                                               <h5>90 {t("explore.Day")}{t("explore.Avg Price")}</h5>
                                                                               <h6>{Average}</h6>
                                                                           </li>
                                                                           <li>
                                                                               <h5>90 {t("explore.Day")}{t("explore.Avg Price")}</h5>
                                                                               <h6>76.5895</h6>
                                                                           </li>
                                                                       </ul>
                                                                   </div>
                                                               </div>
                                                               <div className="col-lg-3">
                                                                   <div className="activity-day-select"> 
                                                                   <select className="form-select">
                                                                           <option selected>{t("explore.last")} 90 {t("explore.Day")}</option>
                                                                           <option value={1}>{t("explore.last")} 60 {t("explore.Day")}</option>
                                                                           <option value={2}>{t("explore.last")} 30 {t("explore.Day")}</option>
                                                                           <option value={3}>{t("explore.last")} 10 {t("explore.Day")}</option>
                                                                       </select> 
                                                                       
                                                                       </div>
                                                               </div>
                                                           </div>
                                                           <div className="row">
                                                               <div>
                                                                {/*     <div id="chart2" /> */}
                                                                {volume&&avgPrice&&xaxis !=undefined||null?<Apexcharts  xaxiss={xaxis} avgPrice={avgPrice} volume={volume}/>:null}

                                                               </div>
                                                           </div>
                                                       </div>
                                                   </td>
                                               </tr>
                                               {activityData.length>0?activityData.map((data,i)=>(
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
                                                   <td> <a href="#">{data?.sCreated} {t("explore.seconds ago")} <img src="/assets/images/icons/share-icon.png" alt="" className="ms-1" /> </a> </td>
                                               </tr>)):'noting to show'}
                                               {/* <tr>
                                                   <td> <img src="/assets/images/icons/cart.png" alt="" className="me-1" /> {t("explore.sale")} </td>
                                                   <td>
                                                       <div className="d-flex align-items-center"> <img src="/assets/images/avt-5.jpg" alt="" className="user-img" /> <span className="ms-2">Monster Ape #6044</span> </div>
                                                   </td>
                                                   <td>
                                                       <div className="price-detail">
                                                           <h5> <img src="/assets/images/icons/ethereum.png" alt="" className="me-1" /> 2.59 </h5>
                                                           <h6>$52547.30</h6>
                                                       </div>
                                                   </td>
                                                   <td>1</td>
                                                   <td> <span className="text-color-purple">Speed_Spud</span> </td>
                                                   <td> <span className="text-color-purple">Pixel-Collection</span> </td>
                                                   <td> <a href="#">43 {t("explore.seconds ago")} <img src="/assets/images/icons/share-icon.png" alt="" className="ms-1" /> </a> </td>
                                               </tr> */}
                                               {/* <tr>
                                                   <td> <img src="/assets/images/icons/cart.png" alt="" className="me-1" /> {t("explore.sale")} </td>
                                                   <td>
                                                       <div className="d-flex align-items-center"> <img src="/assets/images/avt-5.jpg" alt="" className="user-img" /> <span className="ms-2">Monster Ape #6044</span> </div>
                                                   </td>
                                                   <td>
                                                       <div className="price-detail">
                                                           <h5> <img src="/assets/images/icons/ethereum.png" alt="" className="me-1" /> 2.59 </h5>
                                                           <h6>$52547.30</h6>
                                                       </div>
                                                   </td>
                                                   <td>1</td>
                                                   <td> <span className="text-color-purple">Speed_Spud</span> </td>
                                                   <td> <span className="text-color-purple">Pixel-Collection</span> </td>
                                                   <td> <a href="#">43 {t("explore.seconds ago")} <img src="/assets/images/icons/share-icon.png" alt="" className="ms-1" /> </a> </td>
                                               </tr>
                                               <tr>
                                                   <td> <img src="/assets/images/icons/cart.png" alt="" className="me-1" /> {t("explore.sale")} </td>
                                                   <td>
                                                       <div className="d-flex align-items-center"> <img src="/assets/images/avt-5.jpg" alt="" className="user-img" /> <span className="ms-2">Monster Ape #6044</span> </div>
                                                   </td>
                                                   <td>
                                                       <div className="price-detail">
                                                           <h5> <img src="/assets/images/icons/ethereum.png" alt="" className="me-1" /> 2.59 </h5>
                                                           <h6>$52547.30</h6>
                                                       </div>
                                                   </td>
                                                   <td>1</td>
                                                   <td> <span className="text-color-purple">Speed_Spud</span> </td>
                                                   <td> <span className="text-color-purple">Pixel-Collection</span> </td>
                                                   <td> <a href="#">43 {t("explore.seconds ago")} <img src="/assets/images/icons/share-icon.png" alt="" className="ms-1" /> </a> </td>
                                               </tr>
                                               <tr>
                                                   <td> <img src="/assets/images/icons/cart.png" alt="" className="me-1" /> {t("explore.sale")} </td>
                                                   <td>
                                                       <div className="d-flex align-items-center"> <img src="/assets/images/avt-5.jpg" alt="" className="user-img" /> <span className="ms-2">Monster Ape #6044</span> </div>
                                                   </td>
                                                   <td>
                                                       <div className="price-detail">
                                                           <h5> <img src="/assets/images/icons/ethereum.png" alt="" className="me-1" /> 2.59 </h5>
                                                           <h6>$52547.30</h6>
                                                       </div>
                                                   </td>
                                                   <td>1</td>
                                                   <td> <span className="text-color-purple">Speed_Spud</span> </td>
                                                   <td> <span className="text-color-purple">Pixel-Collection</span> </td>
                                                   <td> <a href="#">43 {t("explore.seconds ago")} <img src="/assets/images/icons/share-icon.png" alt="" className="ms-1" /> </a> </td>
                                               </tr>
                                               <tr>
                                                   <td> <img src="/assets/images/icons/cart.png" alt="" className="me-1" /> {t("explore.sale")} </td>
                                                   <td>
                                                       <div className="d-flex align-items-center"> <img src="/assets/images/avt-5.jpg" alt="" className="user-img" /> <span className="ms-2">Monster Ape #6044</span> </div>
                                                   </td>
                                                   <td>
                                                       <div className="price-detail">
                                                           <h5> <img src="/assets/images/icons/ethereum.png" alt="" className="me-1" /> 2.59 </h5>
                                                           <h6>$52547.30</h6>
                                                       </div>
                                                   </td>
                                                   <td>1</td>
                                                   <td> <span className="text-color-purple">Speed_Spud</span> </td>
                                                   <td> <span className="text-color-purple">Pixel-Collection</span> </td>
                                                   <td> <a href="#">43 {t("explore.seconds ago")} <img src="/assets/images/icons/share-icon.png" alt="" className="ms-1" /> </a> </td>
                                               </tr>
                                               <tr>
                                                   <td> <img src="/assets/images/icons/cart.png" alt="" className="me-1" /> {t("explore.sale")} </td>
                                                   <td>
                                                       <div className="d-flex align-items-center"> <img src="/assets/images/avt-5.jpg" alt="" className="user-img" /> <span className="ms-2">Monster Ape #6044</span> </div>
                                                   </td>
                                                   <td>
                                                       <div className="price-detail">
                                                           <h5> <img src="/assets/images/icons/ethereum.png" alt="" className="me-1" /> 2.59 </h5>
                                                           <h6>$52547.30</h6>
                                                       </div>
                                                   </td>
                                                   <td>1</td>
                                                   <td> <span className="text-color-purple">Speed_Spud</span> </td>
                                                   <td> <span className="text-color-purple">Pixel-Collection</span> </td>
                                                   <td> <a href="#">43 {t("explore.seconds ago")} <img src="/assets/images/icons/share-icon.png" alt="" className="ms-1" /> </a> </td>
                                               </tr>
                                               <tr>
                                                   <td> <img src="/assets/images/icons/cart.png" alt="" className="me-1" /> {t("explore.sale")} </td>
                                                   <td>
                                                       <div className="d-flex align-items-center"> <img src="/assets/images/avt-5.jpg" alt="" className="user-img" /> <span className="ms-2">Monster Ape #6044</span> </div>
                                                   </td>
                                                   <td>
                                                       <div className="price-detail">
                                                           <h5> <img src="/assets/images/icons/ethereum.png" alt="" className="me-1" /> 2.59 </h5>
                                                           <h6>$52547.30</h6>
                                                       </div>
                                                   </td>
                                                   <td>1</td>
                                                   <td> <span className="text-color-purple">Speed_Spud</span> </td>
                                                   <td> <span className="text-color-purple">Pixel-Collection</span> </td>
                                                   <td> <a href="#">43 {t("explore.seconds ago")}<img src="/assets/images/icons/share-icon.png" alt="" className="ms-1" /> </a> </td>
                                               </tr>
                                               <tr>
                                                   <td> <img src="/assets/images/icons/cart.png" alt="" className="me-1" /> {t("explore.sale")} </td>
                                                   <td>
                                                       <div className="d-flex align-items-center"> <img src="/assets/images/avt-5.jpg" alt="" className="user-img" /> <span className="ms-2">Monster Ape #6044</span> </div>
                                                   </td>
                                                   <td>
                                                       <div className="price-detail">
                                                           <h5> <img src="/assets/images/icons/ethereum.png" alt="" className="me-1" /> 2.59 </h5>
                                                           <h6>$52547.30</h6>
                                                       </div>
                                                   </td>
                                                   <td>1</td>
                                                   <td> <span className="text-color-purple">Speed_Spud</span> </td>
                                                   <td> <span className="text-color-purple">Pixel-Collection</span> </td>
                                                   <td> <a href="#">43 {t("explore.seconds ago")} <img src="/assets/images/icons/share-icon.png" alt="" className="ms-1" /> </a> </td>
                                               </tr>
                                               <tr>
                                                   <td> <img src="/assets/images/icons/cart.png" alt="" className="me-1" /> {t("explore.sale")} </td>
                                                   <td>
                                                       <div className="d-flex align-items-center"> <img src="/assets/images/avt-5.jpg" alt="" className="user-img" /> <span className="ms-2">Monster Ape #6044</span> </div>
                                                   </td>
                                                   <td>
                                                       <div className="price-detail">
                                                           <h5> <img src="/assets/images/icons/ethereum.png" alt="" className="me-1" /> 2.59 </h5>
                                                           <h6>$52547.30</h6>
                                                       </div>
                                                   </td>
                                                   <td>1</td>
                                                   <td> <span className="text-color-purple">Speed_Spud</span> </td>
                                                   <td> <span className="text-color-purple">Pixel-Collection</span> </td>
                                                   <td> <a href="#">43 {t("explore.seconds ago")} <img src="/assets/images/icons/share-icon.png" alt="" className="ms-1" /> </a> </td>
                                               </tr>
                                               <tr>
                                                   <td> <img src="/assets/images/icons/cart.png" alt="" className="me-1" /> {t("explore.sale")} </td>
                                                   <td>
                                                       <div className="d-flex align-items-center"> <img src="/assets/images/avt-5.jpg" alt="" className="user-img" /> <span className="ms-2">Monster Ape #6044</span> </div>
                                                   </td>
                                                   <td>
                                                       <div className="price-detail">
                                                           <h5> <img src="/assets/images/icons/ethereum.png" alt="" className="me-1" /> 2.59 </h5>
                                                           <h6>$52547.30</h6>
                                                       </div>
                                                   </td>
                                                   <td>1</td>
                                                   <td> <span className="text-color-purple">Speed_Spud</span> </td>
                                                   <td> <span className="text-color-purple">Pixel-Collection</span> </td>
                                                   <td> <a href="#">43 {t("explore.seconds ago")} <img src="/assets/images/icons/share-icon.png" alt="" className="ms-1" /> </a> </td>
                                               </tr>
                                               <tr>
                                                   <td> <img src="/assets/images/icons/cart.png" alt="" className="me-1" /> {t("explore.sale")} </td>
                                                   <td>
                                                       <div className="d-flex align-items-center"> <img src="/assets/images/avt-5.jpg" alt="" className="user-img" /> <span className="ms-2">Monster Ape #6044</span> </div>
                                                   </td>
                                                   <td>
                                                       <div className="price-detail">
                                                           <h5> <img src="/assets/images/icons/ethereum.png" alt="" className="me-1" /> 2.59 </h5>
                                                           <h6>$52547.30</h6>
                                                       </div>
                                                   </td>
                                                   <td>1</td>
                                                   <td> <span className="text-color-purple">Speed_Spud</span> </td>
                                                   <td> <span className="text-color-purple">Pixel-Collection</span> </td>
                                                   <td> <a href="#">43 {t("explore.seconds ago")} <img src="/assets/images/icons/share-icon.png" alt="" className="ms-1" /> </a> </td>
                                               </tr> */}
                                           </tbody>
                                       </table>
                                   </div>
                               </div>
                               <div className="row mb-4 mt-lg-5">
                                   <div className="col-lg-6 col-md-6 mx-auto"> <button className="btn btn-load">{t("explore.Load More")}</button> </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
</section>:null}


 </main>}
    
    </>
  
   
  )
}

export default ExploreFilter;