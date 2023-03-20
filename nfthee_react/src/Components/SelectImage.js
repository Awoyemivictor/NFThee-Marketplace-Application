import React from 'react'
import { components } from 'react-select'; 
import Select from 'react-select';

const { SingleValue, Option } = components;
const options = [
  {
      label: 'Ethereum',
      value: 0,
      image: 'assets/images/icons/ethereum-pink.png',
  },
  {
      label: 'Solana',
      value: 1,
      image: 'assets/images/icons/solona.png',
  },
  {
    label: 'Polygon',
    value: 2,
    image: 'assets/images/icons/polygon.png',
  },
  {
    label: 'Binance',
    value: 3,
    image: 'assets/images/icons/binance.png',
  },
  {
    label: 'Harmony ',
    value: 4,
    image: 'assets/images/icons/harmony.png',
  },

];
const options1 = [
    {
        label: 'Create ERC-721',
        value: 0,
        image: 'assets/images/icons/nfthee-icon.png',
    },
    {
        label: 'NFThee RARI',
        value: 1,
        image: 'assets/images/icons/plus.png',
    }
  
  ];
  const options2 = [
    {
      label: 'Ethereum',
      value: 0,
      image: 'assets/images/icons/ethereum-pink.png',
  },
  {
      label: 'Solana',
      value: 1,
      image: 'assets/images/icons/solona.png',
  },
  {
    label: 'Polygon',
    value: 2,
    image: 'assets/images/icons/polygon.png',
  },
  {
    label: 'Binance',
    value: 3,
    image: 'assets/images/icons/binance.png',
  },
  {
    label: 'Harmony ',
    value: 4,
    image: 'assets/images/icons/harmony.png',
  },  
  
  ];

const IconSingleValue = (props) => (
  <SingleValue {...props}>
      <img src={props.data.image}   style={{ height: '18px', width: '18px', borderRadius: '50%', marginRight: '10px', background: "#F0F4FD 0% 0% no-repeat padding-box", color:"black"}}/>
      {props.data.label}
  </SingleValue>
);

const IconOption = (props) => (
  <Option {...props}>
      <img src={props.data.image} style={{  height: '18px', width: '18px', borderRadius: '50%', marginRight: '10px',background: "#F0F4FD 0% 0% no-repeat padding-box",color:"black",backgroundColor:" #d66cde12 !important"  }} activeC/>
      {props.data.label}
  </Option>
);

const customStyles = {
  option: (provided) => ({
      ...provided,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      color:"black"
    //   boxShadow: "0 6px 12px rgb(0 0 0 / 18%)",
    //   border: "1px solid rgba(0,0,0,.15)",
    //   borderRadius: "5px",
     
  }),
  
  singleValue: (provided) => ({
      ...provided,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      background: "transparent",
      color:"black"
  }),
}

function SelectImage() {
  return (
    <>
     <Select
              styles={customStyles}
              components={{SingleValue: IconSingleValue, Option: IconOption }}
              options={options}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: '#fcf5fd',
                  primary: '#fcf5fd',
                  
                },
              })}
               
          />
    </>
  )
}

function Collection() {
    return (
      <>
       <Select
                styles={customStyles}
                components={{SingleValue: IconSingleValue, Option: IconOption }}
                options={options1}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: '#fcf5fd',
                    primary: '#fcf5fd', 
                  },
                })}
                
            />
      </>
    )
  }

  function BlockchainSelect() {
    
    return (
      <>
       <Select
                styles={customStyles}
                components={{SingleValue: IconSingleValue, Option: IconOption }}
                options={options2} 
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: '#fcf5fd',
                    primary: '#fcf5fd', 
                  },
                })}
                
            />
      </>
    )
  }

export  {SelectImage, Collection,BlockchainSelect} 