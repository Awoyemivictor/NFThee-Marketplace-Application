import {useState} from 'react'
import Chart from 'react-apexcharts'

const Apexcharts =({xaxiss,avgPrice})=>{

    const[options, setObject]= useState({
        chart: {
            id: 'realtime',
            height: 350,
            type: 'line',
           
            animations: {
              enabled: true,
              easing: 'linear',},
              toolbar: {
                show: false
              },  
              zoom: {
                enabled: false
              }
        }, 
       
        dataLabels: {
          enabled: false
        },
        
        xaxis: {
          type: 'datetime',
          categories: xaxiss,
          labels: {
            datetimeFormatter: {
              // year: 'yyyy',
              month: 'MMM',
              day: 'dd',
              hour: 'HH',
              minute: 'mm'
            },
            formatter: function(value, timestamp) {
              return new Date(timestamp).toLocaleDateString('en-US', {
                // year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                month: 'short',
                day: 'numeric'
              });
            }
          }
        }
,                yaxis: [
  // {
  //         seriesName: "Volume (ETH)",
  //         title: {
  //           text: 'Volume (ETH)',
  //         },
         
  //         // labels: {
  //         //   formatter: function(value) {
  //         //     return value.toFixed(4);
  //         //   }}
        
  //       },
   {
          seriesName:'Average price(ETH)',
          // opposite: true,
          title: {
            text: 'Average price(ETH)'
          },
          // labels: {
          //   formatter: function(avgPrice) {
          //     return Math.round(avgPrice);
          //   }}
        }
      ],
        legend: {
          show: false
        },
        stroke: {
          show: true,
          curve: 'smooth',
          lineCap: 'butt',
          colors: undefined,
          width:[1, 4],
          dashArray: 0,   
          // width: 5
      },
      data: [{
        type: "line",
        lineThickness: 5,
      }],
     
      })
      const[series, setSeries]= useState([
        // {
      //   name: 'Volume (ETH)',
      //   type: 'column',
      //   data: avgPrice, 
      // },
      {
        name: 'Average price(ETH)',
        type: 'column',
        data:  avgPrice,
      
      }
    ]) 
    console.log({options},{series})
      return (
        <Chart options={options} series={series} type="line" width="100%" height={350}  />
      )
   
  }

export default Apexcharts;