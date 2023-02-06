import { useEffect, useState,useRef } from "react";
import $ from "jquery";
import { useTranslation } from "react-i18next";
import "../../node_modules/jquery-nice-select/css/nice-select.css";
 
import { components } from 'react-select'; 

 import Select from 'react-select';
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
 
  }

];
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
    //   boxShadow: "0 6px 12px rgb(0 0 0 / 18%)",
    //   border: "1px solid rgba(0,0,0,.15)",
    //   borderRadius: "5px",
    // backgroundColor:"red"
    
     
  }),
  
  singleValue: (provided) => ({
      ...provided,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      // boxShadow:"red",
      // backgroundColor:"red"
      
      
      
  }),
}
 
require("jquery-nice-select"); 

const TopCollectionCard_select = () => { 
    const { t } = useTranslation();
    const selectRef = useRef(); 
    useEffect(() => {
      $(selectRef.current).niceSelect();
      
    }, []); 
    const getItem = (e) => {
      e.preventDefault();
      let selected = $(selectRef.current).val();
      alert(` You have selected ${selected}`);
    };

  return (
    <>
     <select ref={selectRef} className="section-title-collection ">
     <option data-display={`2 ${t("CreativeArtCollection.Days")}`} >
                     2 {t("CreativeArtCollection.Days")}
                    </option>
                    <option value={1} >
                     7 {t("CreativeArtCollection.Days")}
                    </option>
                    <option value={2}>
                      15 {t("CreativeArtCollection.Days")}
                    </option>
                    <option value={4}>
                     30 {t("CreativeArtCollection.Days")}
                    </option>
    </select>
     </>
  )
}

const TopSeller_select = () => { 
    const { t } = useTranslation();
    const selectRef = useRef(); 
    useEffect(() => {
      $(selectRef.current).niceSelect();
    }, []); 
    const getItem = (e) => {
      e.preventDefault();
      let selected = $(selectRef.current).val();
      alert(` You have selected ${selected}`);
    };
  return (
    <>
     <select ref={selectRef} className="section-title-collection">
     <option data-display="1 Day">1 {t("CreativeArtCollection.Days")} </option>
     <option value={1}> 7 {t("CreativeArtCollection.Days")}  </option>  
     <option value={2}>15 {t("CreativeArtCollection.Days")} </option>
     <option value={4}>  30 {t("CreativeArtCollection.Days")}      </option>   
    </select>
     </>
  )
}
const TopSeller_select_Sortby = () => {  
    const selectRef = useRef(); 
    useEffect(() => {
      $(selectRef.current).niceSelect();
    }, []); 
    
    const getItem = (e) => {
      e.preventDefault();
      let selected = $(selectRef.current).val();
      alert(` You have selected ${selected}`);
    };
    const val =[ 
      {option: "Seller" ,value:"Seller"},
     { option: "Buyers",value:"Buyers"}
     ]
     const defaultVal = "Select"
     const [selectedOption, setSelectedOption] = useState(defaultVal)
     console.log(selectedOption)

  const [selectedValue, setSelectedValue] = useState("Seller");
//  const ValueData=()=>{

//  }
  // // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedValue(e.value);
    // setSelectedOption(e.value);
    console.log(e.value)
  }
   return (
    <> 
     {/* <select ref={selectRef} aria-label="Default select example" name="option"   className="form-select" onChange={handleChange}  >
       {val.map((item, i)=>{
         return(<>
          <option  value={item.option}>{item.option}</option>
          </>)
       })} 
    </select>   */}
         <Select
              styles={customStyles}
              components={{SingleValue: IconSingleValue, Option: IconOption }}
              options={options}
              value={options.find(obj => obj.value === selectedValue)}
              onChange={handleChange} 
          />  
     </>
  )
}
const ExploreFilter_Select = () => { 
  
    const selectRef = useRef(); 
    useEffect(() => {
      $(selectRef.current).niceSelect();
    }, []); 
    const getItem = (e) => {
      e.preventDefault();
      let selected = $(selectRef.current).val();
      alert(` You have selected ${selected}`);
    };
  return (
    <> 
    
     <select ref={selectRef} aria-label="Default select example" className="form-select">
     <option selected>Recently Listed</option>
        <option value={1}>Recently Created</option>
        <option value={2}>Recently Received</option>
        <option value={3}>Ending Soon</option>
        <option value={4}>Price: Low to High</option>
        <option value={5}>Price: High to Low</option>
        <option value={6}>Highest Last Sale</option>
        <option value={7}>Highest Last Sale</option> 
        <option value={8}>Oldest</option>
    </select> 
     </>
  )
}

const Graph_Select = () => { 
  const { t } = useTranslation();
  const selectRef = useRef(); 
  useEffect(() => {
    $(selectRef.current).niceSelect();
  }, []); 
  const getItem = (e) => {
    e.preventDefault();
    let selected = $(selectRef.current).val();
    alert(` You have selected ${selected}`);
  };
return (
  <> 
   <select ref={selectRef} aria-label="Default select example" className="form-select">
   <option selected>Most Popular</option>
      <option value={1}>{t("explore.last")} 90 {t("explore.Day")} </option>
      <option value={2}>{t("explore.last")} 60 {t("explore.Day")}</option>
      <option value={3}>{t("explore.last")} 30 {t("explore.Day")} </option>
      <option value={3}>{t("explore.last")} 10 {t("explore.Day")} </option>
  </select> 
   </>
)
}
 
export   {TopCollectionCard_select,TopSeller_select,TopSeller_select_Sortby,ExploreFilter_Select,Graph_Select};
 