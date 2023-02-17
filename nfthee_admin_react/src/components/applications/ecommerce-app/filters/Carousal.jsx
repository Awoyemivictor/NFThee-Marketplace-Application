import React, { Fragment } from 'react';
import {Row,Col,Media} from 'reactstrap'
import Slider from 'react-slick';
import one from '../../../../assets/images/ecommerce/product/01.jpg';
import two from '../../../../assets/images/ecommerce/product/02.jpg';
import three from '../../../../assets/images/ecommerce/product/03.jpg';
  
  const Carousal = (props) =>  {
    var settings = {
            slidesToShow: 1,
            swipeToSlide: false,
            arrows: false,
            dots: false,
        };
      return (
        <Fragment>
        <hr/>
            <div className="product-filter pb-0 new-products">
            <h6 className="f-w-600">New Products</h6>
            <div className="owl-carousel owl-theme" id="testimonial">
                <Slider {...settings}>
                <div className="item">
                    <Row className="product-box">
                    <Col md="6" className="product-img">
                        <Media className="img-fluid" src={one} alt="" data-original-title="" title="" />
                    </Col>
                    <Col md="6" className="product-details text-left">
                        <span>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning"></i>
                        </span>
                        <p className="mb-0">Fancy Shirt</p>
                        <div className="product-price">$100.00</div>
                    </Col>
                    </Row>
                    <Row className="product-box">
                    <Col md="6" className="product-img">
                        <Media className="img-fluid" src={two} alt="" data-original-title="" title="" />
                    </Col>
                    <Col md="6" className="product-details text-left">
                        <span>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning"></i>
                        </span>
                        <p className="mb-0">Fancy Shirt</p>
                        <div className="product-price">$100.00</div>
                    </Col>
                    </Row>
                    <Row className="product-box">
                    <Col md="6" className="product-img">
                        <img className="img-fluid" src={three} alt="" data-original-title="" title="" />
                    </Col>
                    <Col md="6" className="product-details text-left">
                        <span>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning"></i>
                        </span>
                        <p className="mb-0">Fancy Shirt</p>
                        <div className="product-price">$100.00</div>
                    </Col>
                    </Row>
                </div>
                <div className="item">
                    <Row className="product-box">
                    <Col md="6" className="product-img">
                        <Media className="img-fluid" src={one} alt=""/>
                    </Col>
                    <Col md="6" className="product-details text-left">
                        <span>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning"></i>
                        </span>
                        <p className="mb-0">Fancy Shirt</p>
                        <div className="product-price">$100.00</div>
                    </Col>
                    </Row>
                    <Row className="product-box">
                    <Col md="6" className="product-img">
                        <Media className="img-fluid" src={two} alt=""/>
                    </Col>
                    <Col md="6" className="product-details text-left">
                        <span>
                            <i className="fa fa-star font-warning mr-1"></i>
                            <i className="fa fa-star font-warning mr-1"></i>
                            <i className="fa fa-star font-warning mr-1"></i>
                            <i className="fa fa-star font-warning mr-1"></i>
                            <i className="fa fa-star font-warning"></i>
                        </span>
                        <p className="mb-0">Fancy Shirt</p>
                        <div className="product-price">$100.00</div>
                    </Col>
                    </Row>
                    <Row className="product-box">
                    <Col md="6" className="product-img">
                        <img className="img-fluid" src={three} alt="" />
                    </Col>
                    <Col md="6" className="product-details text-left">
                        <span>
                            <i className="fa fa-star font-warning mr-1"></i>
                            <i className="fa fa-star font-warning mr-1"></i>
                            <i className="fa fa-star font-warning mr-1"></i>
                            <i className="fa fa-star font-warning mr-1"></i>
                            <i className="fa fa-star font-warning"></i>
                        </span>
                        <p className="mb-0">Fancy Shirt</p>
                        <div className="product-price">$100.00  </div>
                    </Col>
                    </Row>
                </div>
                </Slider>
            </div>
        </div>   
        </Fragment>
      );
  }
  
  export default Carousal;