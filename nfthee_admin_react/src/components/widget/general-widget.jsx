import React, {useState} from 'react';
import Breadcrumb from '../common/breadcrumb.component';
import {Container,Col,Row,Card,CardBody,CardHeader,Table,Progress} from 'reactstrap'
import CountUp from 'react-countup';
import Slider from "react-slick";
import DatePicker from "react-datepicker";
import Clock from 'react-clock';
import "react-datepicker/dist/react-datepicker.css";
const background = require('../../assets/images/calender-bg.png');
const background_clock = require('../../assets/images/mobile-clock-wallpaper.jpg');
const background_weather = require('../../assets/images/whether-widgetbg.jpg');

const GeneralWidget = () => {

    const [date, setDate] = useState({date: new Date()});
    
    const handleChange = date => {
        setDate(date)
    };

    // eslint-disable-next-line
    const [startDate, setStartDate] = useState(new Date());

    const month =["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    var d = new Date();

    let dateshow =  month[d.getMonth()]+' '+d.getDate()+', '+d.getFullYear();

    const settings = {
        className: "center",
        centerMode: true,
        arrows: false,
        speed: 500,
        centerPadding: "5px",
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
            <div>
                <Breadcrumb title="General Widget" parent="Widgets"/>
                {/* Container-fluid starts */}
                <Container fluid={true}>
                    <Row>
                        <Col sm="6" xl="3" lg="6">
                            <Card className="o-hidden">
                                <CardBody className="bg-info b-r-4">
                                    <div className="media static-top-widget">
                                        <div className="align-self-center text-center">
                                            <i className="icofont icofont-chart-histogram-alt"></i>
                                        </div>
                                        <div className="media-body">
                                            <span className="m-0">Earnings</span>
                                            <h4 className="counter mb-0"><CountUp end={6659}/></h4>
                                            <i className="icofont icofont-chart-histogram-alt icon-bg"></i>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="6" xl="3" lg="6">
                            <Card className="o-hidden">
                                <CardBody className="bg-primary b-r-4">
                                    <div className="media static-top-widget">
                                        <div className="align-self-center text-center">
                                            <i className="icon-package"></i>
                                        </div>
                                        <div className="media-body">
                                            <span className="m-0">Products</span>
                                            <h4 className="counter mb-0"><CountUp end={9856}/></h4>
                                            <i className="icon-package icon-bg"></i>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="6" xl="3" lg="6">
                            <Card className="o-hidden">
                                <CardBody className="bg-secondary b-r-4">
                                    <div className="media static-top-widget">
                                        <div className="align-self-center text-center">
                                            <i className="icon-comments"></i>
                                        </div>
                                        <div className="media-body">
                                            <span className="m-0">Messages</span>
                                            <h4 className="counter mb-0"><CountUp end={893}/></h4>
                                            <i className="icon-comments icon-bg"></i>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="6" xl="3" lg="6">
                            <Card className="o-hidden">
                                <CardBody className="bg-danger b-r-4">
                                    <div className="media static-top-widget">
                                        <div className="align-self-center text-center">
                                            <i className="icon-user"></i>
                                        </div>
                                        <div className="media-body">
                                            <span className="m-0">New User</span>
                                            <h4 className="counter mb-0"><CountUp end={45631}/></h4>
                                            <i className="icon-user icon-bg"></i>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="6 xl-100 set-col-12">
                            <Card className="widget-joins">
                                <Row>
                                    <Col sm="6" className="pr-0">
                                        <div className="media border-after-xs">
                                            <div className="align-self-center mr-3">68%<i
                                                className="fa fa-angle-up ml-2"></i></div>
                                            <div className="media-body details pl-3">
                                                <span className="mb-1">New</span>
                                                <h4 className="mb-0  counter digits"><CountUp end={6982}/></h4>
                                            </div>
                                            <div className="media-body align-self-center">
                                                <i className="fa fa-shopping-bag font-secondary float-right float-lg-left"></i>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm="6" className="pl-0">
                                        <div className="media">
                                            <div className="align-self-center mr-3 digits">12%<i
                                                className="fa fa-angle-down ml-2"></i></div>
                                            <div className="media-body details pl-3">
                                                <span className="mb-1">Panding</span>
                                                <h4 className="mb-0 counter digits"><CountUp end={783}/></h4>
                                            </div>
                                            <div className="media-body align-self-center">
                                                <i className="fa fa-shopping-basket font-info  float-right float-lg-left"></i>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm="6" className="pr-0">
                                        <div className="media border-after-xs">
                                            <div className="align-self-center mr-3">68%<i
                                                className="fa fa-angle-up ml-2"></i></div>
                                            <div className="media-body details pl-3 pt-0">
                                                <span className="mb-1">Done</span>
                                                <h4 className="mb-0 counter digits"><CountUp end={3674}/></h4>
                                            </div>
                                            <div className="media-body align-self-center">
                                                <i className="fa fa-shopping-cart font-primary  float-right float-lg-left"></i>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm="6" className="pl-0">
                                        <div className="media">
                                            <div className="align-self-center mr-3">68%<i
                                                className="fa fa-angle-up ml-2"></i></div>
                                            <div className="media-body details pl-3 pt-0">
                                                <span className="mb-1">Cancel</span>
                                                <h4 className="mb-0 counter digits"><CountUp end={69}/></h4>
                                            </div>
                                            <div className="media-body align-self-center">
                                                <i className="icofont icofont-cur-rupee-minus font-danger  float-right float-lg-left"></i>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col xl="6 xl-100 set-col-12">
                            <Card className="widget-joins widget-arrow">
                                <Row>
                                    <Col sm="6" className="pr-0">
                                        <div className="media border-after-xs">
                                            <div className="align-self-center mr-3 text-left">
                                                <h6 className="mb-1">Sale</h6>
                                                <h4 className="mb-0">Today</h4>
                                            </div>
                                            <div className="media-body align-self-center">
                                                <i className="fa fa-long-arrow-down font-danger"></i>
                                            </div>
                                            <div className="media-body">
                                                <h5 className="mb-0">$<span className="counter"><CountUp
                                                    end={25698}/></span></h5>
                                                <span className="mb-1">-$2658(36%)</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm="6" className="pl-0">
                                        <div className="media">
                                            <div className="align-self-center mr-3 text-left">
                                                <h6 className="mb-1">Sale</h6>
                                                <h4 className="mb-0">Month</h4>
                                            </div>
                                            <div className="media-body align-self-center">
                                                <i className="fa fa-long-arrow-up font-info"></i>
                                            </div>
                                            <div className="media-body">
                                                <h5 className="mb-0">$<span className="counter"><CountUp
                                                    end={6954}/></span></h5>
                                                <span className="mb-1">+$369(15%)</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm="6" className="pr-0">
                                        <div className="media border-after-xs">
                                            <div className="align-self-center mr-3 text-left">
                                                <h6 className="mb-1">Sale</h6>
                                                <h4 className="mb-0">Week</h4>
                                            </div>
                                            <div className="media-body align-self-center">
                                                <i className="fa fa-long-arrow-up font-info"></i>
                                            </div>
                                            <div className="media-body">
                                                <h5 className="mb-0">$<span className="counter"><CountUp
                                                    end={63147}/></span></h5>
                                                <span className="mb-1">+$69(65%)</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm="6" className="pl-0">
                                        <div className="media">
                                            <div className="align-self-center mr-3 text-left">
                                                <h6 className="mb-1">Sale</h6>
                                                <h4 className="mb-0">Year</h4>
                                            </div>
                                            <div className="media-body align-self-center pl-3">
                                                <i className="fa fa-long-arrow-up font-info"></i>
                                            </div>
                                            <div className="media-body">
                                                <h5 className="mb-0">$<span className="counter"><CountUp end={963198}/></span>
                                                </h5>
                                                <span className="mb-1">+$3654(90%)</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col sm="6" xl="3 xl-50 set-col-6"  lg="6">
                            <Card className="social-widget-card">
                                <CardBody>
                                    <div data-label="50%" className="redial-social-widget radial-bar-70">
                                        <i className="fa fa-facebook font-info"></i>
                                    </div>
                                    <h5 className="b-b-light">Facebook</h5>
                                    <Row>
                                        <div className="col text-center b-r-light">
                                            <span>Post</span>
                                            <h4 className="counter mb-0"><CountUp end={6589}/></h4>
                                        </div>
                                        <div className="col text-center">
                                            <span>Like</span>
                                            <h4 className="counter mb-0"><CountUp end={75269}/></h4>
                                        </div>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="6" xl="3 xl-50 set-col-6"  lg="6">
                            <Card className="social-widget-card">
                                <CardBody>
                                    <div data-label="50%" className="redial-social-widget radial-bar-70">
                                        <i className="fa fa-twitter font-secondary"></i>
                                    </div>
                                    <h5 className="b-b-light">Twitter</h5>
                                    <Row>
                                        <div className="col text-center b-r-light">
                                            <span>Post</span>
                                            <h4 className="counter mb-0"><CountUp end={6589}/></h4>
                                        </div>
                                        <div className="col text-center">
                                            <span>Follower</span>
                                            <h4 className="counter mb-0"><CountUp end={75269}/></h4>
                                        </div>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="6" xl="3 xl-50 set-col-6"  lg="6">
                            <Card className="social-widget-card">
                                <CardBody>
                                    <div data-label="50%" className="redial-social-widget radial-bar-70">
                                        <i className="fa fa-linkedin font-primary"></i>
                                    </div>
                                    <h5 className="b-b-light">linkedin</h5>
                                    <Row>
                                        <div className="col text-center b-r-light">
                                            <span>Post</span>
                                            <h4 className="counter mb-0"><CountUp end={1234}/></h4>
                                        </div>
                                        <div className="col text-center">
                                            <span>linkedin</span>
                                            <h4 className="counter mb-0"><CountUp end={4369}/></h4>
                                        </div>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="6" xl="3 xl-50 set-col-6"  lg="6">
                            <Card className="social-widget-card">
                                <CardBody>
                                    <div data-label="50%" className="redial-social-widget radial-bar-70">
                                        <i className="fa fa-google-plus font-danger"></i>
                                    </div>
                                    <h5 className="b-b-light">Google +</h5>
                                    <Row>
                                        <div className="col text-center b-r-light">
                                            <span>Post</span>
                                            <h4 className="counter mb-0"><CountUp end={369}/></h4>
                                        </div>
                                        <div className="col text-center">
                                            <span>Follower</span>
                                            <h4 className="counter mb-0"><CountUp end={3458}/></h4>
                                        </div>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4" sm="12">
                            <Card className="browser-widget">
                                <CardBody className="media">
                                    <div className="media-img">
                                        <img src={require('../../assets/images/dashboard/chrome.png')} alt=""/>
                                    </div>
                                    <div className="media-body align-self-center">
                                        <div>
                                            <p>Daily </p>
                                            <h4><span className="counter"><CountUp end={36}/></span>%</h4>
                                        </div>
                                        <div>
                                            <p>Month </p>
                                            <h4><span className="counter"><CountUp end={96}/></span>%</h4>
                                        </div>
                                        <div>
                                            <p>Week </p>
                                            <h4><span className="counter"><CountUp end={46}/></span>%</h4>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4" sm="12">
                            <Card className="browser-widget">
                                <CardBody className="media">
                                    <div className="media-img">
                                        <img src={require('../../assets/images/dashboard/firefox.png')} alt=""/>
                                    </div>
                                    <div className="media-body align-self-center">
                                        <div>
                                            <p>Daily </p>
                                            <h4><span className="counter"><CountUp end={36}/></span>%</h4>
                                        </div>
                                        <div>
                                            <p>Month </p>
                                            <h4><span className="counter"><CountUp end={96}/></span>%</h4>
                                        </div>
                                        <div>
                                            <p>Week </p>
                                            <h4><span className="counter"><CountUp end={46}/></span>%</h4>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4" sm="12">
                            <Card className="browser-widget">
                                <CardBody className="media">
                                    <div className="media-img">
                                        <img src={require('../../assets/images/dashboard/safari.png')} alt=""/>
                                    </div>
                                    <div className="media-body align-self-center">
                                        <div>
                                            <p>Daily </p>
                                            <h4><span className="counter"><CountUp end={36}/></span>%</h4>
                                        </div>
                                        <div>
                                            <p>Month </p>
                                            <h4><span className="counter"><CountUp end={96}/></span>%</h4>
                                        </div>
                                        <div>
                                            <p>Week </p>
                                            <h4><span className="counter"><CountUp end={46}/></span>%</h4>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="6 xl-100">
                            <Card>
                                <CardHeader>
                                    <h5>PRODUCTS CART</h5>
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
                                                <td>Pain can procure</td>
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
                        <Col xl="6 xl-100">
                            <Card>
                                <CardHeader>
                                    <h5>EMPLOYEE STATUS</h5>
                                </CardHeader>
                                <CardBody>
                                    <div className="user-status table-responsive">
                                        <Table borderless>
                                            <thead>
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Designation</th>
                                                <th scope="col">Skill Level</th>
                                                <th scope="col">Experience</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td className="bd-t-none u-s-tb">
                                                    <div className="align-middle image-sm-size">
                                                        <img src={require('../../assets/images/user/4.jpg')} alt=""
                                                             className="img-radius align-top m-r-15 rounded-circle"/>
                                                        <div className="d-inline-block">
                                                            <h6>John Deo <span className="text-muted digits">(14+ Online)</span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Designer</td>
                                                <td>
                                                    <div className="progress-showcase">
                                                        <div className="progress" style={{height: "8px"}}>
                                                            <Progress bar color="primary" value="30"/> 
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="digits">2 Year</td>
                                            </tr>
                                            <tr>
                                                <td className="bd-t-none u-s-tb">
                                                    <div className="align-middle image-sm-size">
                                                        <img src={require('../../assets/images/user/1.jpg')} alt=""
                                                             className="img-radius align-top m-r-15 rounded-circle"/>
                                                        <div className="d-inline-block">
                                                            <h6>Holio Mako <span className="text-muted digits">(250+ Online)</span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Developer</td>
                                                <td>
                                                    <div className="progress-showcase">
                                                        <div className="progress" style={{height: "8px"}}>
                                                            <Progress bar color="danger" value="70"/> 
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="digits">3 Year</td>
                                            </tr>
                                            <tr>
                                                <td className="bd-t-none u-s-tb">
                                                    <div className="align-middle image-sm-size">
                                                        <img src={require('../../assets/images/user/5.jpg')} alt=""
                                                             className="img-radius align-top m-r-15 rounded-circle"/>
                                                        <div className="d-inline-block">
                                                            <h6>Mohsib lara<span className="text-muted digits">(99+ Online)</span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Tester</td>
                                                <td>
                                                    <div className="progress-showcase">
                                                        <div className="progress" style={{height: "8px"}}>
                                                            <Progress bar color="info" value="60"/> 
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="digits">5 Month</td>
                                            </tr>
                                            <tr>
                                                <td className="bd-t-none u-s-tb">
                                                    <div className="align-middle image-sm-size">
                                                        <img src={require('../../assets/images/user/6.jpg')} alt=""
                                                             className="img-radius align-top m-r-15 rounded-circle"/>
                                                        <div className="d-inline-block">
                                                            <h6>Hileri Soli <span className="text-muted digits">(150+ Online)</span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Designer</td>
                                                <td>
                                                    <div className="progress-showcase">
                                                        <div className="progress" style={{height: "8px"}}>
                                                            <Progress bar color="secondary" value="30"/> 
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="digits">3 Month</td>
                                            </tr>
                                            <tr>
                                                <td className="bd-t-none u-s-tb">
                                                    <div className="align-middle image-sm-size">
                                                        <img src={require('../../assets/images/user/7.jpg')} alt=""
                                                             className="img-radius align-top m-r-15 rounded-circle"/>
                                                        <div className="d-inline-block">
                                                            <h6>Pusiz bia <span className="text-muted digits">(14+ Online)</span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Designer</td>
                                                <td>
                                                    <div className="progress-showcase">
                                                        <div className="progress" style={{height: "8px"}}>
                                                            <Progress bar color="info" value="90"/> 
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="digits">5 Year</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="6 xl-100 set-col-12">
                            <Card>
                                <CardBody className="cal-date-widget">
                                    <Row>
                                        <Col xl="6" xs="12" md="6">
                                            <div className="cal-info text-center">
                                                <h2>24</h2>
                                                <div className="d-inline-block mt-2">
                                                    <span className="b-r-dark pr-3">March</span>
                                                    <span className="pl-3">2018</span>
                                                </div>
                                                <p className="mt-4 f-16 text-muted">There is no minimum donation, any
                                                    sum is appreciated</p>
                                            </div>
                                        </Col>
                                        <Col xl="6" xs="12" md="6">
                                            <div className="cal-datepicker">
                                                <div className="datepicker-here float-md-right" data-language='en'>
                                                    <DatePicker
                                                        height = "500"
                                                        selected={startDate}
                                                        onChange={handleChange}
                                                        inline
                                                    />
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="3 xl-50 set-col-6" sm="6">
                            <Card>
                                <div className="weather-widget-two"  style ={ { backgroundImage: "url("+background_weather+")" } } >
                                    <CardBody>
                                        <div className="media">
                                            <svg
                                                version="1.1"
                                                id="cloudDrizzleMoonAlt"
                                                className="climacon climacon_cloudDrizzleMoonAlt"
                                                viewBox="15 15 70 70">
                                                <clipPath id="cloudFillClip">
                                                    <path
                                                        d="M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z"/>
                                                </clipPath>
                                                <clipPath id="moonCloudFillClip">
                                                    <path
                                                        d="M0,0v100h100V0H0z M60.943,46.641c-4.418,0-7.999-3.582-7.999-7.999c0-3.803,2.655-6.979,6.211-7.792c0.903,4.854,4.726,8.676,9.579,9.58C67.922,43.986,64.745,46.641,60.943,46.641z"/>
                                                </clipPath>
                                                <g className="climacon_iconWrap climacon_iconWrap-cloudDrizzleMoonAlt">
                                                    <g clipPath="url(#cloudFillClip)">
                                                        <g className="climacon_wrapperComponent climacon_wrapperComponent-moon climacon_componentWrap-moon_cloud"
                                                           clipPath="url(#moonCloudFillClip)">
                                                            <path
                                                                className="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                                                                d="M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z"/>
                                                        </g>
                                                    </g>
                                                    <g className="climacon_wrapperComponent climacon_wrapperComponent-drizzle">
                                                        <path
                                                            className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-left"
                                                            id="Drizzle-Left_1_"
                                                            d="M56.969,57.672l-2.121,2.121c-1.172,1.172-1.172,3.072,0,4.242c1.17,1.172,3.07,1.172,4.24,0c1.172-1.17,1.172-3.07,0-4.242L56.969,57.672z"/>
                                                        <path
                                                            className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-middle"
                                                            d="M50.088,57.672l-2.119,2.121c-1.174,1.172-1.174,3.07,0,4.242c1.17,1.172,3.068,1.172,4.24,0s1.172-3.07,0-4.242L50.088,57.672z"/>
                                                        <path
                                                            className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-right"
                                                            d="M43.033,57.672l-2.121,2.121c-1.172,1.172-1.172,3.07,0,4.242s3.07,1.172,4.244,0c1.172-1.172,1.172-3.07,0-4.242L43.033,57.672z"/>
                                                    </g>
                                                    <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud"
                                                       clipPath="url(#cloudFillClip)">
                                                        <path
                                                            className="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
                                                            d="M59.943,41.642c-0.696,0-1.369,0.092-2.033,0.205c-2.736-4.892-7.961-8.203-13.965-8.203c-8.835,0-15.998,7.162-15.998,15.997c0,5.992,3.3,11.207,8.177,13.947c0.276-1.262,0.892-2.465,1.873-3.445l0.057-0.057c-3.644-2.061-6.106-5.963-6.106-10.445c0-6.626,5.372-11.998,11.998-11.998c5.691,0,10.433,3.974,11.666,9.29c1.25-0.81,2.732-1.291,4.332-1.291c4.418,0,8,3.581,8,7.999c0,3.443-2.182,6.371-5.235,7.498c0.788,1.146,1.194,2.471,1.222,3.807c4.666-1.645,8.014-6.077,8.014-11.305C71.941,47.014,66.57,41.642,59.943,41.642z"/>
                                                    </g>
                                                </g>
                                            </svg>
                                            {/* cloudDrizzleMoonAlt */}
                                            <div className="media-body align-self-center text-white">
                                                <h4 className="m-0 f-w-600 num">25&#176;C</h4>
                                                <p className="m-0 f-14">Newyork</p>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <svg
                                                version="1.1"
                                                id="cloudRainMoon"
                                                className="climacon climacon_cloudRainMoon"
                                                viewBox="15 15 70 70">
                                                <clipPath id="cloudFillClip">
                                                    <path
                                                        d="M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z"/>
                                                </clipPath>
                                                <clipPath id="moonCloudFillClip">
                                                    <path
                                                        d="M0,0v100h100V0H0z M60.943,46.641c-4.418,0-7.999-3.582-7.999-7.999c0-3.803,2.655-6.979,6.211-7.792c0.903,4.854,4.726,8.676,9.579,9.58C67.922,43.986,64.745,46.641,60.943,46.641z"/>
                                                </clipPath>
                                                <g className="climacon_iconWrap climacon_iconWrap-cloudRainMoon">
                                                    <g clipPath="url(#cloudFillClip)">
                                                        <g className="climacon_wrapperComponent climacon_wrapperComponent-moon climacon_componentWrap-moon_cloud"
                                                           clipPath="url(#moonCloudFillClip)">
                                                            <path
                                                                className="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                                                                d="M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z"/>
                                                        </g>
                                                    </g>
                                                    <g className="climacon_wrapperComponent climacon_wrapperComponent-rain">
                                                        <path
                                                            className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- left"
                                                            d="M41.946,53.641c1.104,0,1.999,0.896,1.999,2v15.998c0,1.105-0.895,2-1.999,2s-2-0.895-2-2V55.641C39.946,54.537,40.842,53.641,41.946,53.641z"/>
                                                        <path
                                                            className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- middle"
                                                            d="M49.945,57.641c1.104,0,2,0.896,2,2v15.998c0,1.104-0.896,2-2,2s-2-0.896-2-2V59.641C47.945,58.535,48.841,57.641,49.945,57.641z"/>
                                                        <path
                                                            className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- right"
                                                            d="M57.943,53.641c1.104,0,2,0.896,2,2v15.998c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2V55.641C55.943,54.537,56.84,53.641,57.943,53.641z"/>
                                                        <path
                                                            className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- left"
                                                            d="M41.946,53.641c1.104,0,1.999,0.896,1.999,2v15.998c0,1.105-0.895,2-1.999,2s-2-0.895-2-2V55.641C39.946,54.537,40.842,53.641,41.946,53.641z"/>
                                                        <path
                                                            className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- middle"
                                                            d="M49.945,57.641c1.104,0,2,0.896,2,2v15.998c0,1.104-0.896,2-2,2s-2-0.896-2-2V59.641C47.945,58.535,48.841,57.641,49.945,57.641z"/>
                                                        <path
                                                            className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- right"
                                                            d="M57.943,53.641c1.104,0,2,0.896,2,2v15.998c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2V55.641C55.943,54.537,56.84,53.641,57.943,53.641z"/>
                                                    </g>
                                                    <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud"
                                                       clipPath="url(#cloudFillClip)">
                                                        <path
                                                            className="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
                                                            d="M59.943,41.642c-0.696,0-1.369,0.092-2.033,0.205c-2.736-4.892-7.961-8.203-13.965-8.203c-8.835,0-15.998,7.162-15.998,15.997c0,5.992,3.3,11.207,8.177,13.947c0.276-1.262,0.892-2.465,1.873-3.445l0.057-0.057c-3.644-2.061-6.106-5.963-6.106-10.445c0-6.626,5.372-11.998,11.998-11.998c5.691,0,10.433,3.974,11.666,9.29c1.25-0.81,2.732-1.291,4.332-1.291c4.418,0,8,3.581,8,7.999c0,3.443-2.182,6.371-5.235,7.498c0.788,1.146,1.194,2.471,1.222,3.807c4.666-1.645,8.014-6.077,8.014-11.305C71.941,47.014,66.57,41.642,59.943,41.642z"/>
                                                    </g>
                                                </g>
                                            </svg>
                                            {/* cloudRainMoon */}
                                            <div className="media-body align-self-center text-white">
                                                <h4 className="m-0 f-w-600 num">95&#176;F</h4>
                                                <p className="m-0 f-14">Peris</p>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <svg
                                                version="1.1"
                                                id="cloudDrizzle"
                                                className="climacon climacon_cloudDrizzle"
                                                viewBox="15 15 70 70">
                                                <g className="climacon_iconWrap climacon_iconWrap-cloudDrizzle">
                                                    <g className="climacon_wrapperComponent climacon_wrapperComponent-drizzle">
                                                        <path
                                                            className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-left"
                                                            d="M42.001,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2.001-0.895-2.001-2v-3.998C40,54.538,40.896,53.644,42.001,53.644z"/>
                                                        <path
                                                            className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-middle"
                                                            d="M49.999,53.644c1.104,0,2,0.896,2,2v4c0,1.104-0.896,2-2,2s-1.998-0.896-1.998-2v-4C48.001,54.54,48.896,53.644,49.999,53.644z"/>
                                                        <path
                                                            className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-right"
                                                            d="M57.999,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2-0.895-2-2v-3.998C55.999,54.538,56.894,53.644,57.999,53.644z"/>
                                                    </g>
                                                    <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud">
                                                        <path
                                                            className="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
                                                            d="M63.999,64.944v-4.381c2.387-1.386,3.998-3.961,3.998-6.92c0-4.418-3.58-8-7.998-8c-1.603,0-3.084,0.481-4.334,1.291c-1.232-5.316-5.973-9.29-11.664-9.29c-6.628,0-11.999,5.372-11.999,12c0,3.549,1.55,6.729,3.998,8.926v4.914c-4.776-2.769-7.998-7.922-7.998-13.84c0-8.836,7.162-15.999,15.999-15.999c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.336-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12C71.997,58.864,68.655,63.296,63.999,64.944z"/>
                                                    </g>
                                                </g>
                                            </svg>
                                            {/* cloudDrizzle */}
                                            <div className="media-body align-self-center text-white">
                                                <h4 className="m-0 f-w-600 num">50&#176;C</h4>
                                                <p className="m-0 f-14">India</p>
                                            </div>
                                        </div>
                                        <div className="bottom-whetherinfo">
                                            <Row>
                                                <div className="col-6">
                                                    <i className="icofont icofont-hail"></i>
                                                </div>
                                                <div className="col-6">
                                                    <div className="whether-content">
                                                        <span>India, Surat</span>
                                                        <h4 className="num mb-0">36&#176;F</h4>
                                                    </div>
                                                </div>
                                            </Row>
                                        </div>
                                    </CardBody>
                                </div>
                            </Card>
                        </Col>
                        <Col xl="3 xl-50 set-col-6" sm="6">
                            <Card>
                                <div className="mobile-clock-widget"  style ={ { backgroundImage: "url("+background_clock+")" } } >
                                    <div>
                                        <Clock
                                            className={'clock'}
                                            value={date.date}
                                        />
                                        <div id="date" className="date f-24 mb-2">
                                            <span>{dateshow}</span>
                                        </div>

                                        <div>
                                            <p className="m-0 f-14 text-light">kolkata, India</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>

                        <Col sm="12" lg="6" xl="4 xl-50 set-col-6" md="12">
                            <Card className="height-equal">
                                <div className="calender-widget">
                                    <div className="cal-img"
                                         style ={ { backgroundImage: "url("+background+")" } }>
                                    </div>
                                    <div className="cal-date">
                                        <h5>25<br/>APRIL</h5>
                                    </div>
                                    <div className="cal-desc text-center card-body">
                                        <h6 className="f-w-600">I must explain to you how all this mistaken idea
                                            truth</h6>
                                        <p className="text-muted mt-3 mb-0">Denouncing pleasure and praising pain was
                                            born and I will give you a complete account of the system, and expound the
                                            actual teachings of the great explorer of the truth,Letraset sheets
                                            containing Lorem Ipsum passages. </p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col sm="12" lg="6" xl="8 xl-50 set-col-6" md="12">
                            <Card className="height-equal">
                                <CardHeader>
                                    <h5>Contact Us</h5>
                                </CardHeader>
                                <CardBody className="contact-form">
                                    <form className="theme-form">
                                        <div className="form-icon">
                                            <i className="icofont icofont-envelope-open"></i>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName">Your Name</label>
                                            <input type="text" className="form-control" id="exampleInputName"
                                                   placeholder="John Dio"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="col-form-label">Email</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1"
                                                   placeholder="Demo@gmail.com"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1"
                                                   className="col-form-label">Message</label>
                                            <textarea rows="3" cols="50" className="form-control textarea"
                                                      placeholder="Your Message"></textarea>

                                        </div>
                                        <div className="text-sm-right">
                                            <button className="btn btn-secondary-gradien">SEND IT</button>
                                        </div>
                                    </form>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="4" lg="12 set-col-12">
                            <div className="">
                                <Card>
                                    <CardHeader>
                                        <h5 className="text-uppercase">Recent Activity</h5>
                                    </CardHeader>
                                    <CardBody>
                                        <ul className="crm-activity">
                                            <li className="media">
                                                <span className="mr-3 font-primary">E</span>
                                                <div className="align-self-center media-body">
                                                    <h6 className="mt-0">Established fact that a reader will be
                                                        distracted </h6>
                                                    <ul className="dates">
                                                        <li className="digits">25 July 2017</li>
                                                        <li className="digits">20 hours ago</li>
                                                    </ul>
                                                </div>
                                            </li>

                                            <li className="media">
                                                <span className="mr-3 font-secondary">A</span>
                                                <div className="align-self-center media-body">
                                                    <h6 className="mt-0">Any desktop publishiang packages and web page
                                                        editors.</h6>
                                                    <ul className="dates">
                                                        <li className="digits">25 July 2017</li>
                                                        <li className="digits">20 hours ago</li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="media">
                                                <span className="mr-3 font-success">T</span>
                                                <div className="align-self-center media-body">
                                                    <h6 className="mt-0">There isn't anything embarrassing hidden.</h6>
                                                    <ul className="dates">
                                                        <li className="digits">25 July 2017</li>
                                                        <li className="digits">20 hours ago</li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="media">
                                                <span className="mr-3 font-info">C</span>
                                                <div className="align-self-center media-body">
                                                    <h6 className="mt-0">Contrary to popular belief, Lorem Ipsum is not
                                                        simply. </h6>
                                                    <ul className="dates">
                                                        <li className="digits">25 July 2017</li>
                                                        <li className="digits">20 hours ago</li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="media">
                                                <span className="mr-3 font-warning">H</span>
                                                <div className="align-self-center media-body">
                                                    <h6 className="mt-0">H-Code - A premium portfolio template from
                                                        ThemeZaa </h6>
                                                    <ul className="dates">
                                                        <li className="digits">25 July 2017</li>
                                                        <li className="digits">20 hours ago</li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="media">
                                                <div className="align-self-center media-body">
                                                    <ul className="dates">
                                                        <li className="digits">25 July 2017</li>
                                                        <li className="digits">20 hours ago</li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                        <Col xl="4" lg="6 set-col-6">
                            <Card className="custom-card general-user-card">
                                <CardHeader>
                                    <img src={require('../../assets/images/user-card/1.jpg')} className="img-fluid"
                                         alt=""/>
                                </CardHeader>
                                <div className="card-profile">
                                    <img src={require('../../assets/images/user/11.png')} className="rounded-circle"
                                         alt=""/>
                                </div>
                                <ul className="card-social">
                                    <li><a href="#javaScript"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#javaScript"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#javaScript"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#javaScript"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#javaScript"><i className="fa fa-rss"></i></a></li>
                                </ul>
                                <div className="text-center profile-details">
                                    <h4>Mark Jecno</h4>
                                    <h6>Manager</h6>
                                </div>
                                <Row className="card-footer">
                                    <div className="col-4 col-sm-4">
                                        <h6>Follower</h6>
                                        <h3 className="counter">9564</h3>
                                    </div>
                                    <div className="col-4 col-sm-4">
                                        <h6>Following</h6>
                                        <h3><span className="counter">49</span>K</h3>
                                    </div>
                                    <div className="col-4 col-sm-4">
                                        <h6>Total Post</h6>
                                        <h3><span className="counter">96</span>M</h3>
                                    </div>
                                </Row>
                            </Card>
                        </Col>
                        <Col xl="4" lg="6 set-col-6">
                            <Card className="testimonial text-center">
                                <CardBody>
                                    <Slider {...settings}>
                                        <div className="item">
                                            <i className="icon-quote-left"></i>
                                            <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It
                                                has roots in a piece of classical Latin literature from 45 BC, making it
                                                over 2000 years old. Richard McClintock, a Latin professor at
                                                Hampden-Sydney College in Virginia</p>
                                            <img src={require('../../assets/images/user/14.png')}
                                                 className="img-80" alt=""/>
                                            <h5>Poio klot</h5>
                                            <span>Developer</span>
                                        </div>
                                        <div className="item">
                                            <i className="icon-quote-left"></i>
                                            <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It
                                                has roots in a piece of classical Latin literature from 45 BC, making it
                                                over 2000 years old. Richard McClintock, a Latin professor at
                                                Hampden-Sydney College in Virginia</p>
                                            <img src={require('../../assets/images/user/14.png')}
                                                 className="img-80" alt=""/>
                                            <h5>Poio klot</h5>
                                            <span>Developer</span>
                                        </div>
                                    </Slider>
                                </CardBody>
                            </Card>
                            <Card className="xl-none">
                                <div className="ecommerce-widget card-body">
                                    <Row>
                                        <div className="col-6">
                                            <span>New Order</span>
                                            <h3 className="total-num counter">25639</h3>
                                        </div>
                                        <div className="col-6">
                                            <div className="text-md-right">
                                                <ul>
                                                    <li>Profit<span className="product-stts text-info ml-2">8989<i
                                                        className="icon-angle-up f-12 ml-1"></i></span></li>
                                                    <li>Loss<span className="product-stts text-danger ml-2">2560<i
                                                        className="icon-angle-down f-12 ml-1"></i></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Row>
                                    <div className="progress-showcase">
                                        <div className="progress lg-progress-bar">
                                             <Progress bar color="primary" value="70"/> 
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                {/* Container-fluid Ends */}
            </div>
        )
    }
export default GeneralWidget;
