import React, {useEffect, useState} from "react";
import OwlCarousel from "react-owl-carousel-rtl";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import $ from "jquery";
import instance from "../axios";

export const OwlCarouselSlider = (props) => {
    useEffect(() => {
        $(document).ready(function () {
            var li = $(".explore-owl-slider .owl-item li ");
            $(".explore-owl-slider .owl-item li").click(function () {
                li.removeClass('active');
            });
        });
    })

    return (
        <OwlCarousel
            margin={2}
            nav={true}
            dots={false}
            loop={props.categories.length > 10 ? true : false}
            className="explore-owl-slider owl-theme owl-carousel"
            navText={[
                '<span class="ri-arrow-left-s-line left-arrow"></span>',
                '<span class="ri-arrow-right-s-line right-arrow"></span>',
            ]}
            responsive={{
                0: {
                    items: 1,
                },
                600: {
                    items: 4,
                },
                1000: {
                    items: 6,
                },
            }}
        >
            <li className="nav-item active">
                <button onClick={props.selectTab} className="nav-link" data-toggle="tab" href="#all-collections">
                    All Collections
                </button>
            </li>

                {props.categories.map((category) => (
                        <li className="nav-item" key={category._id}>
                            <button onClick={props.selectTab} className="nav-link" data-toggle="tab" href={`#${category.name}`}>
                                {category.name}
                            </button>
                        </li>
                    ))}

        </OwlCarousel>
    );
}
