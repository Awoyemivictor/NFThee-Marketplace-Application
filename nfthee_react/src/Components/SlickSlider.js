import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import {PrevArrow,NextArrow} from "./ArrowButton"
function SampleNextArrow(props) {
    const {onClick } = props;
    return (
        <> 
        <button class="slide-arrow next-arrow slick-arrow" onClick={onClick}>
           <i class="ri-arrow-right-s-line"></i></button> 
        </> 
    );
  } 
function SamplePrevArrow(props) {
    const {onClick } = props;
    return (
        <> 
       <button class="slide-arrow prev-arrow  slick-arrow" onClick={onClick}>
       <i class="ri-arrow-left-s-line"></i></button> 
        </>
    );
} 
function SlickSlider(props) {
    const settings = {
        infinite: true,
       slidesToShow: 4,
       slidesToScroll: 1,
       dots: false,
       arrows: true,
       cssEase: 'linear',
       adaptiveHeight: true,
        prevArrow:   <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [{
        breakpoint: 1124,
        settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
          }
        },
        {
       breakpoint: 868,
       settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
        }
       },
       {
       breakpoint: 576,
       settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           dots: false,
           arrows: false,
       }
    }
    ]
    };
     return (
        <Slider {...settings}>
            {props.children}
        </Slider>
    )
}

function SlickSliderCategory(props) {
    const settings = {
        infinite: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       dots: false,
       arrows: true,
       cssEase: 'linear',
       adaptiveHeight: true,
        prevArrow:   <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [{
        breakpoint: 1124,
        settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
          }
        },
        {
       breakpoint: 868,
       settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
        }
       },
       {
       breakpoint: 576,
       settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           dots: false,
           arrows: false,
       }
    }
    ]
    };
     return (
        <Slider {...settings}>
            {props.children}
        </Slider>
    )
}

function SlickSliderLiveAuction(props) {
    const settings = {
       infinite: true,
       slidesToShow: 4,
       slidesToScroll: 1,
       dots: false,
       arrows: true,
       cssEase: 'linear',
       adaptiveHeight: true,
        prevArrow:   <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [{
        breakpoint: 1124,
        settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
          }
        },
        {
       breakpoint: 868,
       settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
        }
       },
       {
       breakpoint: 576,
       settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           dots: false,
           arrows: false,
       }
    }
    ]
    };
     return (
        <Slider {...settings}>
            {props.children}
        </Slider>
    )
}


export  {SlickSlider,SlickSliderCategory,SlickSliderLiveAuction};