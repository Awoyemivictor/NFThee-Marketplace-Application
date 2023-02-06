import {useState} from 'react'
import Chart from 'react-apexcharts'

const Apexcharts =()=>{
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
        }, 
        stroke: {
          show: true,
          curve: 'smooth',
          lineCap: 'butt',
          colors: undefined,
          width: 2,
          dashArray: 0,   
          width: 5
      },
      data: [{
        type: "line",
        lineThickness: 5,
      }],
      
      })
      const[series, setSeries]= useState([{
        name: 'series-1',
        data: [30, 90, 25, 70, 49, 25, 70, 91, 125], 
      }]) 
      return (
        <Chart options={options} series={series} type="line" width="100%" height={220}  />
      )
   
  }

export default Apexcharts;