import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb.component';
import {Container,Col,Row,Card,CardBody,CardHeader,Form,Table,Progress} from 'reactstrap'
import CountUp from 'react-countup';
import Slider from "react-slick";
import ChartistGraph from 'react-chartist';
import {scatterchartData,scatterchartOption} from './chart-data'
const Business = (props) => {

    const settings = {
        className: "center",
        centerMode: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        centerPadding: "5px",
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Fragment>
        <Breadcrumb title="Business" parent="Dashboard" />
        <Container fluid={true}>
            <Row>
                <Col sm="12" xl="6 xl-100 set-col-12">
                    <Row>
                        <Col sm="6 xl-25" >
                            <Card data-intro="This is card">
                                <CardBody className="business-top-widget">
                                    <div className="media d-inline-flex">
                                        <div className="media-body">
                                            <span className="mb-2">Growth</span>
                                            <h2 className="total-value m-0 counter"><CountUp  end={8900} /></h2>
                                        </div>
                                        <i className="icofont icofont-growth font-info align-self-center"></i>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="6 xl-25">
                            <Card>
                                <CardBody className="business-top-widget">
                                    <div className="media d-inline-flex">
                                        <div className="media-body">
                                            <span className="mb-2">Income</span>
                                            <h2 className="total-value m-0 counter"><CountUp  end={7800} /></h2>
                                        </div>
                                        <i className="icofont icofont-money font-primary align-self-center"></i>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="6 xl-25">
                            <Card>
                                <CardBody className="business-top-widget">
                                    <div className="media d-inline-flex">
                                        <div className="media-body">
                                            <span className="mb-2">Project</span>
                                            <h2 className="total-value m-0 counter"><CountUp  end={654} /></h2>
                                        </div>
                                        <i className="icofont icofont-presentation-alt font-secondary align-self-center"></i>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="6 xl-25">
                            <Card>
                                <CardBody className="business-top-widget">
                                    <div className="media d-inline-flex">
                                        <div className="media-body">
                                            <span className="mb-2">Employee</span>
                                            <h2 className="total-value m-0 counter"><CountUp  end={8963} /></h2>
                                        </div>
                                        <i className="icofont icofont-business-man font-danger align-self-center"></i>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col sm="12" xl="6 xl-100 set-col-12">
                    <Card data-intro="This is card showing profile">
                        <div className="business-card card-body">
                            <Row>
                                <Col xl="4" sm="12" className="align-self-center">
                                    <div className="text-center">
                                        <img src={require("../../../assets/images/logo-login.png")} className="logo" alt="u-logo"/>
                                    </div>
                                </Col>
                                <Col xl="8" sm="12" className="b-l-light pt-3 pt-md-0">
                                    <Table className="table-bordernone">
                                        <thead>
                                        <tr>
                                            <th>Name&nbsp;&nbsp;&nbsp;&nbsp;:</th>
                                            <td>Pixelstrap Web Service PVT LTD.</td>
                                        </tr>
                                        
                                        <tr>
                                            <th>Founded&nbsp;&nbsp;&nbsp;&nbsp;:</th>
                                            <td>01 January 2012</td>
                                        </tr>

                                        <tr>
                                            <th>Email&nbsp;&nbsp;&nbsp;&nbsp;:</th>
                                            <td>support@pixelstrap.com</td>
                                        </tr>
                                        <tr>
                                            <th>Phone&nbsp;&nbsp;&nbsp;&nbsp;:</th>
                                            <td className="digits">+91 234-456-7904</td>
                                        </tr>
                                        <tr>
                                            <th>Turnover&nbsp;&nbsp;&nbsp;&nbsp;:</th>
                                            <td className="digits">$78B</td>
                                        </tr>
                                        <tr>
                                            <th>About&nbsp;&nbsp;&nbsp;&nbsp;:</th>
                                            <td>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</td>
                                        </tr>
                                        </thead>
                                    </Table>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col sm="12" xl="9 xl-100 set-col-12">
                    <Card data-intro="This is scatter chart for sale">
                        <CardHeader>
                            <h4>Scatter chart for sale</h4>
                            <span>Company Product Sales Chart</span>
                        </CardHeader>
                        <CardBody>
                            <ChartistGraph 
                                data={scatterchartData} 
                                options={scatterchartOption} 
                                type={'Line'} 
                                className="scatter-chart flot-chart-container"/>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" xl="3 xl-100 set-col-12">
                    <Row>
                        <Col xl="12 xl-50 set-col-6" sm="6">
                            <Card>
                                <CardBody className="social-widget">
                                    <div className="media">
                                        <div  className="radial-bar radial-bar-85 radial-bar-info mr-3">
                                            <div className="social-icons"><i className="icofont icofont-social-facebook font-info"></i></div>
                                        </div>
                                        <div className="media-body align-self-center">
                                            <span className="m-0 social-sub-title">Facebook</span>
                                            <hr className="m-1"/>
                                            <h2 className="counter m-0 total-value"><CountUp  end={2659} /></h2>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="12 xl-50 set-col-6" sm="6">
                            <Card>
                                <CardBody className="social-widget">
                                    <div className="media">
                                        <div  className="radial-bar radial-bar-60 radial-bar-secondary mr-3">
                                            <div className="social-icons"><i className="icofont icofont-social-twitter font-secondary"></i></div>
                                        </div>
                                        <div className="media-body align-self-center">
                                            <span className="m-0 social-sub-title">Twitter</span>
                                            <hr className="m-1"/>
                                            <h2 className="counter m-0 total-value"><CountUp  end={8956} /></h2>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="12 xl-50 set-col-6" sm="6">
                            <Card>
                                <CardBody className="social-widget">
                                    <div className="media">
                                        <div  className="radial-bar radial-bar-80 radial-bar-danger mr-3">
                                            <div className="social-icons"><i className="icofont icofont-social-pinterest font-danger"></i></div>
                                        </div>
                                        <div className="media-body align-self-center">
                                            <span className="m-0 social-sub-title">Pinterest</span>
                                            <hr className="m-1"/>
                                            <h2 className="counter m-0 total-value"><CountUp  end={7893} /></h2>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="12 xl-50 set-col-6" sm="6">
                            <Card>
                                <CardBody className="social-widget">
                                    <div className="media">
                                        <div  className="radial-bar radial-bar-50 radial-bar-primary mr-3">
                                            <div className="social-icons"><i className="icofont icofont-brand-linkedin font-primary"></i></div>
                                        </div>
                                        <div className="media-body align-self-center">
                                            <span className="m-0 social-sub-title">Linkedin</span>
                                            <hr className="m-1"/>
                                            <h2 className="counter m-0 total-value"><CountUp  end={2659} /></h2>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md="12" xl="6 xl-100">
                    <Card >
                        <CardHeader>
                            <h5>Product Cart</h5>
                        </CardHeader>
                        <CardBody>
                            <div className="user-status table-responsive">
                                <Table borderless>
                                    <thead>
                                    <tr>
                                        <th scope="col">Details</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Simply dummy text of the printing</td>
                                        <td className="digits">1</td>
                                        <td className="font-secondary">Pending</td>
                                        <td className="digits">$6523</td>
                                    </tr>
                                    <tr>
                                        <td>Long established</td>
                                        <td className="digits">5</td>
                                        <td className="font-danger">Cancle</td>
                                        <td className="digits">$6523</td>
                                    </tr>
                                    <tr>
                                        <td>sometimes by accident</td>
                                        <td className="digits">10</td>
                                        <td className="font-danger">Cancle</td>
                                        <td className="digits">$6523</td>
                                    </tr>
                                    <tr>
                                        <td>Classical Latin literature</td>
                                        <td className="digits">9</td>
                                        <td className="font-info">Return</td>
                                        <td className="digits">$6523</td>
                                    </tr>
                                    <tr>
                                        <td>keep the site on the Internet</td>
                                        <td className="digits">8</td>
                                        <td className="font-secondary">Pending</td>
                                        <td className="digits">$6523</td>
                                    </tr>
                                    <tr>
                                        <td>Molestiae consequatur</td>
                                        <td className="digits">3</td>
                                        <td className="font-danger">Cancle</td>
                                        <td className="digits">$6523</td>
                                    </tr>
                                    <tr>
                                        <td className="pb-1">Pain can procure</td>
                                        <td className="digits">8</td>
                                        <td className="font-info">Return</td>
                                        <td className="digits">$6523</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="12" xl="6 xl-100">
                    <Card>
                        <CardHeader>
                            <h5>Employee Status</h5>
                        </CardHeader>
                        <CardBody>
                            <div className="user-status table-responsive">
                                <Table borderless>
                                    <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Designation</th>
                                        <th scope="col">Level</th>
                                        <th scope="col">Experience</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="bd-t-none">
                                            <div className="d-inline-block align-middle mt-0">
                                                <img src={require("../../../assets/images/user/4.jpg")} alt="user" className="img-radius img-40 align-top m-r-15 rounded-circle"/>
                                                <div className="d-inline-block">
                                                    <h6>John Deo <span className="text-muted digits">(14+ Online)</span></h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Designer</td>
                                        <td>
                                            <div className="progress-showcase">
                                                <div className="progress" style={{height: "8px"}}>
                                                    <Progress bar color="primary" value={30} />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="digits">2 Year</td>
                                    </tr>
                                    <tr>
                                        <td className="bd-t-none">
                                            <div className="d-inline-block align-middle mt-0">
                                                <img src={require("../../../assets/images/user/1.jpg")} alt="user" className="img-radius img-40 align-top m-r-15 rounded-circle"/>
                                                <div className="d-inline-block">
                                                    <h6>AB Mako <span className="text-muted digits">(20+ Online)</span></h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Developer</td>
                                        <td>
                                            <div className="progress-showcase">
                                                <div className="progress" style={{height: "8px"}}>
                                                    <Progress bar color="danger" value={70} />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="digits">3 Year</td>
                                    </tr>
                                    <tr>
                                        <td className="bd-t-none">
                                            <div className="d-inline-block align-middle mt-0">
                                                <img src={require("../../../assets/images/user/5.jpg")} alt="" className="img-radius img-40 align-top m-r-15 rounded-circle"/>
                                                <div className="d-inline-block">
                                                    <h6>Mohi lara<span className="text-muted digits">(99+ Online)</span></h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Tester</td>
                                        <td>
                                            <div className="progress-showcase">
                                                <div className="progress" style={{height: "8px"}}>
                                                    <Progress bar color="info" value={60} />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="digits">5 Month</td>
                                    </tr>
                                    <tr>
                                        <td className="bd-t-none">
                                            <div className="d-inline-block align-middle mt-0">
                                                <img src={require("../../../assets/images/user/6.jpg")} alt="" className="img-radius img-40 align-top m-r-15 rounded-circle"/>
                                                <div className="d-inline-block">
                                                    <h6>Hileri Soli <span className="text-muted digits">(23+ Online)</span></h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Designer</td>
                                        <td> <div className="progress-showcase">
                                            <div className="progress" style={{height: "8px"}}>
                                                <Progress bar color="secondary" value={30} />
                                            </div>
                                        </div>
                                        </td>
                                        <td className="digits">3 Month</td>
                                    </tr>
                                    <tr>
                                        <td className="bd-t-none">
                                            <div className="d-inline-block align-middle mt-0">
                                                <img src={require("../../../assets/images/user/7.jpg")} alt="" className="img-radius img-40 align-top m-r-15 rounded-circle"/>
                                                <div className="d-inline-block">
                                                    <h6>Pusiz bia <span className="text-muted digits">(14+ Online)</span></h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Designer</td>
                                        <td><div className="progress-showcase">
                                            <div className="progress" style={{height: "8px"}}>
                                                <Progress bar color="info" value={90} />
                                            </div></div></td>
                                        <td className="digits">5 Year</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md="12" xl="6 xl-100 set-col-12">
                    <Card>
                        <CardHeader>
                            <h5>Customer Review</h5>
                        </CardHeader>
                        <CardBody>
                        <Slider {...settings}>
                                <div className="slide--item">
                                    <div className="review-box">
                                        <div className="media">
                                            <img className="rounded-circle img-thumbnail mr-5 img-100" src={require("../../../assets/images/user/12.png")} alt=""/>
                                            <div className="align-self-center media-body">
                                                <h6 className="mt-0 customer-name">Mark Jenco</h6>
                                                <span className="m-0 text-muted">CEO & Founder At Company</span>
                                            </div>
                                        </div>
                                        <div className="testimonial">
                                            <div className="content">
                                                <p className="description text-muted">
                                                    I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                                                    Lorem Ipsum is simply dummy text
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide--item">
                                    <div className="review-box">
                                        <div className="media">
                                            <img className="rounded-circle img-thumbnail mr-5 img-100" src={require("../../../assets/images/user/12.png")} alt=""/>
                                            <div className="align-self-center media-body">
                                                <h6 className="mt-0 customer-name">Mark Jenco</h6>
                                                <p className="m-0 text-muted">CEO & Founder At Company</p>
                                            </div>
                                        </div>
                                        <div className="testimonial">
                                            <div className="content">
                                                <p className="description text-muted">
                                                    I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                                                    Lorem Ipsum is simply dummy text
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide--item">
                                    <div className="review-box">
                                        <div className="media">
                                            <img className="rounded-circle img-thumbnail mr-5 img-100" src={require("../../../assets/images/user/12.png")} alt=""/>
                                            <div className="align-self-center media-body">
                                                <h6 className="mt-0 customer-name">Mark Jenco</h6>
                                                <p className="m-0 text-muted">CEO & Founder At Company</p>
                                            </div>
                                        </div>
                                        <div className="testimonial">
                                            <div className="content">
                                                <p className="description text-muted">
                                                    I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Slider>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl="6 xl-100" sm="12 set-col-12">
                    <Row>
                        <Col sm="6 set-col-6">
                            <Card data-intro="This is blog">
                                <div className="blog-box blog-grid text-center">
                                    <img src={require("../../../assets/images/blog/blog-5.png")} className="img-fluid top-radius-blog" alt=""/>
                                    <div className="blog-details-main">
                                        <ul className="blog-social">
                                            <li className="digits">9 April 2018</li>
                                            <li className="digits">by: Admin</li>
                                            <li className="digits">0 Hits</li>
                                        </ul>
                                        <hr/>
                                        <h6 className="blog-bottom-details">Perspiciatis unde omnis iste natus error sit.Dummy text</h6>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col sm="6 set-col-6">
                            <Card>
                                <div className="blog-box blog-grid text-center">
                                    <img src={require("../../../assets/images/blog/blog-6.png")} className="img-fluid top-radius-blog" alt=""/>
                                    <div className="blog-details-main">
                                        <ul className="blog-social">
                                            <li className="digits">9 April 2018</li>
                                            <li className="digits">by: Admin</li>
                                            <li className="digits">0 Hits</li>
                                        </ul>
                                        <hr/>
                                        <h6 className="blog-bottom-details">Perspiciatis unde omnis iste natus error sit.Dummy text</h6>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col sm="12" md="6" xl="4 xl-50 set-col-6">
                    <div className="card height-equal">
                        <div className="calender-widget">
                            <div className="cal-img"></div>
                            <div className="cal-date">
                                <h5>25<br/>APRIL</h5>
                            </div>
                            <div className="cal-desc text-center card-body">
                                <h6 className="f-w-600">I must explain to you how all this mistaken idea truth</h6>
                                <p className="text-muted mb-0 custom-scrollbar">Denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,Letraset sheets containing Lorem Ipsum passages, and more recently with desktop Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm="12" md="6" xl="8 xl-50 set-col-6">
                    <div className="card height-equal" data-intro="This is blog contact form">
                        <CardHeader>
                            <h5>Contact Us</h5>
                        </CardHeader>
                        <CardBody className="contact-form">
                            <Form className="theme-form">
                                <div className="form-icon">
                                    <i className="icofont icofont-envelope-open"></i>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputName">Your Name</label>
                                    <input type="text" className="form-control" id="exampleInputName" placeholder="John Dio"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" className="col-form-label">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Demo@gmail.com"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" className="col-form-label">Message</label>
                                    <textarea rows="3" cols="50" className="form-control textarea" placeholder="Your Message"></textarea>

                                </div>
                                <div className="text-sm-right">
                                    <button className="btn btn-secondary-gradien">SEND IT</button>
                                </div>
                            </Form>
                        </CardBody>
                    </div>
                </Col>
            </Row>
        </Container>    
        </Fragment>
    );
}

export default Business;