import React, { useState, useEffect, useRef  } from 'react'  
import { top_sellers } from "./Data";
import { TopSeller as TopSellerCard, SectionHeading } from "../../Components";
import { TopSeller_select,TopSeller_select_Sortby } from "../../Components/NiceSelect";
import $ from "jquery"; 
import Select from 'react-select';
import { components } from 'react-select'; 
window.jQuery = window.$ = $;
require("jquery-nice-select");

window.jQuery = window.$ = $;
const { SingleValue, Option } = components;
const options = [
 {
     label: 'Seller',
     value: 'Seller',
     
 },
 {
     label:'Buyers',
     value: 'Buyers',

 }]
 const IconSingleValue = (props) => (
  <SingleValue {...props}>
       {props.data.label}
  </SingleValue>
);
const IconOption = (props) => (
  <Option {...props}>
       {props.data.label}
  </Option>
);
const customStyles = {
  option: (provided) => ({
      ...provided,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      boxShadow:"none",
      color:"#000",
    //   boxShadow: "0 6px 12px rgb(0 0 0 / 18%)",
    //   border: "1px solid rgba(0,0,0,.15)",
      borderRadius: "5px",
    // backgroundColor:"red"
    background:"transperent",
    borderRadius:"10px !important"
    
     
  }),
  
  singleValue: (provided) => ({
      ...provided,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      color:"#000",
      borderRadius:"10px !important"
      // boxShadow:"red",
      // backgroundColor:"red"
      
      
      
  }),
}
 

function TopSeller() {
  const selectRef = useRef();
  const [isRevealPwd, setIsRevealPwd] = useState(false); 
  const [isOpen, setIsopen] = useState(true); 
  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }; 
  
  const [noOfElement, setNoOfElement] = useState(18);
  const [message, setMessage] = useState("")
  const loadMore =() =>{
    setNoOfElement(noOfElement + 18) 
    if(noOfElement > top_sellers.length  ){
      const Msg ="--No Content--"
      setMessage(Msg)
      console.log(Msg)
    }
   } 
  const slice = top_sellers.slice(0,noOfElement)
  const [show, setShow] = useState('hidden');
  const ShowResult = () =>{
    setShow('show')
  }
  const [filter, setfilter] = useState("filterClose");
  const FilterClose = () => {
     window.scrollTo(0, 0)
     filter === "filterClose" ? setfilter("") : setfilter("filterClose");    
   }; 
   
  
  
   const [selectedValue, setSelectedValue] = useState("Seller");
 
     const handleChange = e => {
       setSelectedValue(e.value); 
       console.log(e.value)
     }
  return (
    <>
      <main>
        <section className="bg-section top_sellers_section">
          <div className="container-fluid">
            <div className="section-heading text-center mb-lg-5 mb-4 top-sellers-heading">
           <div className="d-flex justify-content-center align-items-center">
          <div className="section-title-path mx-lg-auto d-flex day-select">
          {/* <SectionHeading heading={'Top Sellers Last'}/>  */}
          <h2 className="section-title mb-1">Top {selectedValue} Last </h2>
            <TopSeller_select />
          </div>
          <div className="top-seller-filter">
            <span>Sort By : </span> 
            {/* <TopSeller_select_Sortby /> */}
            
            <Select
              styles={customStyles}
              components={{SingleValue: IconSingleValue, Option: IconOption }}
              options={options}
              value={options.find(obj => obj.value === selectedValue)}
              onChange={handleChange}
              theme={(theme) => ({
                ...theme,
               borderRadius:5,
                colors: {
                  ...theme.colors,
                  primary25: '#fcf5fd',
                  primary: '#fcf5fd', 
                  
                },
              })} 
          />  
        
          </div> 
          {/* <img src="assets/images/path1.png" alt="" className="img-fluid" /> */}
        </div>
  
      </div>
       <div className="row">
                    <div className="top-collection-over-section">
                        <div className="row">

                  {isOpen ? ( 
                        <div className={`col-lg-3 collection-filter-wrapper filter-sticky custom-scrollbar ${filter}`}>
                                <div className="collection-filter">
                                    <div className="panel">
                                    <div className="panel-heading d-flex justify-content-between align-items-center mb-4">
                                        <div className="panel-title">
                                            {filter ? <img src="assets/images/icons/filter-icon.png" alt="" className="me-2 filter-icon" onClick={ToggleSidebar} />
                                            : <img src="assets/images/icons/filter-icon.png" alt="" className="me-2 filter-icon" onClick={FilterClose} />} Filter </div> 
                                            <span> {filter ? <img src="assets/images/icons/close.png" alt="" className="img-fluid close-icon" onClick={ToggleSidebar} />
                                            : <img src="assets/images/icons/close.png" alt="" className="img-fluid close-icon" onClick={FilterClose} /> } </span>
                                    </div> 
                                        {isOpen ?  ( 
                                       <div className="panel-body">
                                            <form className="filter-search me-auto d-none d-md-block mb-3"> <input type="text" placeholder="Search" className="form-control" />
                                                <div className="search-icon"> <button className="btn"> <i className="bx bx-search-alt-2" /> </button> </div>
                                            </form>
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingOne"> <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> BLOCKCHAIN </button> </h2>
                                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <div className="custom-checkbox">
                                                                <div className="form-check"> <input className="form-check-input" type="checkbox" id="exampleCheckbox1" /> <label className="form-check-label" htmlFor="exampleCheckbox1"> <img src={"assets/images/icons/ethereum_select.png"} alt="" className="me-1"/> <span>Ethereum</span> </label> </div>
                                                                <div className="form-check"> <input className="form-check-input" type="checkbox" id="exampleCheckbox2" /> <label className="form-check-label" htmlFor="exampleCheckbox2"> <img src={"assets/images/icons/solana_select.png"} alt="" className="me-1"  /> <span>Solana</span> </label> </div>
                                                                <div className="form-check"> <input className="form-check-input" type="checkbox" id="exampleCheckbox3" /> <label className="form-check-label" htmlFor="exampleCheckbox3"> <img src={"assets/images/icons/binance_select.png"} alt="" className="me-1"  /> <span>Polygon</span> </label> </div> 
                                                            </div>
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
                                                    <div className="custom-checkbox">
                                                      <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="exampleCheckbox11" />
                                                        <label className="form-check-label" htmlFor="exampleCheckbox11"><span>
                                                          <img src={"assets/images/icons/trand.png"} alt="" className="me-1"/>
                                                          Trending</span></label>
                                                      </div>
                                                      <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="exampleCheckbox22" />
                                                        <label className="form-check-label" htmlFor="exampleCheckbox22"><span>
                                                          <img src={"assets/images/icons/top.png"} alt="" className="me-1"/>
                                                          Top</span></label>
                                                      </div>
                                                      <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="exampleCheckbox33" />
                                                        <label className="form-check-label" htmlFor="exampleCheckbox33"><span>
                                                          <img src={"assets/images/icons/art.png"} alt="" className="me-1"/>
                                                          Art</span></label>
                                                      </div>
                                                      <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="exampleCheckbox4" />
                                                        <label className="form-check-label" htmlFor="exampleCheckbox4"><span>
                                                          <img src={"assets/images/icons/domain.png"} alt="" className="me-1"/>
                                                          Domain
                                                            Name</span></label>
                                                      </div>
                                                      <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="exampleCheckbox5" />
                                                        <label className="form-check-label" htmlFor="exampleCheckbox5"><span>
                                                          <img src={"assets/images/icons/music.png"} alt="" className="me-1"/>
                                                          Music</span></label>
                                                      </div>
                                                      <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="exampleCheckbox6" />
                                                        <label className="form-check-label" htmlFor="exampleCheckbox6"><span>
                                                          <img src={"assets/images/icons/photo.png"} alt="" className="me-1"/>
                                                          Photography</span></label>
                                                      </div>
                                                      <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="exampleCheckbox7" />
                                                        <label className="form-check-label" htmlFor="exampleCheckbox7"><span>
                                                          <img src={"assets/images/icons/sport.png"} alt="" className="me-1"/>
                                                          Sports</span></label>
                                                      </div>
                                                    </div>
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
                                                    <div className="custom-checkbox">
                                                      <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="exampleCheckbox8" />
                                                        <label className="form-check-label" htmlFor="exampleCheckbox8">
                                                          <img src={"assets/images/icons/azudi.png"} alt="" className="me-1"/>
                                                          <span>Azudi</span>
                                                        </label>
                                                      </div>
                                                      <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="exampleCheckbox9" />
                                                        <label className="form-check-label" htmlFor="exampleCheckbox9">
                                                          <img src={"assets/images/icons/women.png"} alt="" className="me-1"/>
                                                          <span>World Of Women</span>
                                                        </label>
                                                      </div>
                                                      <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="exampleCheckbox10" />
                                                        <label className="form-check-label" htmlFor="exampleCheckbox10">
                                                         <img src={"assets/images/icons/cryto.png"} alt="" className="me-1"/>
                                                          <span>Cryptoskulls</span>
                                                        </label>
                                                      </div>
                                                      <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="exampleCheckbox011" />
                                                        <label className="form-check-label" htmlFor="exampleCheckbox011">
                                                         <img src={"assets/images/icons/phantabear.png"} alt="" className="me-1"/>
                                                          <span>Phantabear</span>
                                                        </label>
                                                      </div>
                                                      <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="exampleCheckbox12" />
                                                        <label className="form-check-label" htmlFor="exampleCheckbox12">
                                                         <img src={"assets/images/icons/bear.png"} alt="" className="me-1"/>
                                                          <span>FLUF Bear</span>
                                                        </label>
                                                      </div>
                                                      <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="exampleCheckbox13" />
                                                        <label className="form-check-label" htmlFor="exampleCheckbox13">
                                                         <img src={"assets/images/icons/fomo.png"} alt="" className="me-1"/>
                                                          <span>FOMO MOFOS</span>
                                                        </label>
                                                      </div>
                                                      <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="exampleCheckbox14" />
                                                        <label className="form-check-label" htmlFor="exampleCheckbox14">
                                                         <img src={"assets/images/icons/doddles.png"} alt="" className="me-1"/>
                                                          <span>Doddles</span>
                                                        </label>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
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
                                                      <select className="form-select" aria-label="Default select example" style={{display: 'none'}}>
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
                                        </div> ) : null}
                                    </div>
                                </div>
                            </div> )
                             : ( <div className="col-lg-1" style={{ width: "5.333333%" }}>
                                <div className="collection-filter filter-sticky">
                                    <div className="panel p-0">
                                        <div className="panel-heading">
                                            <div className="panel-title filter-border" onClick={ToggleSidebar}> <img src="assets/images/icons/filter-icon.png" alt="" className="filter-icon" /> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             )} 
       {filter ?  
            <div className="col-lg-12 filter-mobile-wrapper"> 
            <button onClick={FilterClose} className="filter_button"><img src="assets/images/icons/filter-icon.png" alt="" className="me-3" />Filter</button> 
            </div> : ""}
      <div className={`${isOpen ? "col-lg-9" : "col-lg-11" } collection-filter-card`}style={{ width: `${isOpen ? "" : "94.666667%"}` }}>

            <div className="row">
              <div className="top-seller-area">
                <div
                  className="row justify-content-center"
                  style={{ bsGutterX: "2.5rem" }}
                >
                  {slice.map((item, index) => (
                    <TopSellerCard {...item} index={index} className={'col-1'} />
                  ))}
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
            </div>
            </div>
            </div> 
          </div>
        </section>
      </main>
    </>
  );
}

export default TopSeller;
