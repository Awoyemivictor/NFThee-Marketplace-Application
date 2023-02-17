import React,{useState,useEffect} from 'react';
import {Container,Col,Row,Card,CardHeader,CardBody,Table} from "reactstrap";
import { Sparklines, SparklinesLine} from 'react-sparklines';
// import DonutChart from 'react-donut-chart';
import Slider from "react-slick";
import Breadcrumb from '../../common/breadcrumb.component';
import BoxRowOne from './box-row-one.component';
import { DefaultChartsOptions } from "../chartsData/data";
import CanvasJSReact from '../../../assets/canvas/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Default = () => {
        const primary = localStorage.getItem('primary_color')
        
        const boxMullerRandom = () => {
            let phase = false,
                x1, x2, w;
        
            return (function () {
            // eslint-disable-next-line
                if (phase = !phase) {
                    do {
                        x1 = 2.0 * Math.random() - 1.0;
                        x2 = 2.0 * Math.random() - 1.0;
                        w = x1 * x1 + x2 * x2;
                    } while (w >= 1.0);
        
                    w = Math.sqrt((-2.0 * Math.log(w)) / w);
                    return x1 * w;
                } else {
                    return x2 * w;
                }
            })();
        }
        
        const [chartData,setChartData] = useState([]);
        
        useEffect(() => {
            let interval = null;
            interval = setInterval(() => {
                setChartData(chartData.concat([boxMullerRandom()]))
            }, 500);
            return () => clearInterval(interval);
        },[chartData])

        const settings = {
            className: "center",
            centerMode: true,
            dots: false,
            infinite: true,
            arrows:false,
            speed: 500,
            centerPadding: "5px",
            slidesToShow: 1,
            slidesToScroll: 1
        };

        CanvasJS.addColorSet("greenShades",
            ["#00c292","#26c6da","#ab8ce4"]);

        return (
            <div >
                <Breadcrumb title="Default" parent="Dashboard" />
                <Container fluid={true}>
                    <BoxRowOne />
                    <Row>
                        <Col xl="8" lg="12">
                            <Card>
                                <CardHeader>
                                    <h5>Sales Overview</h5>
                                    <span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span>
                                </CardHeader>
                                <CardBody>
                                    <div className="dashboard-chart-container sales-overview-chart">
                                        <Sparklines data= {chartData} limit={20} >
                                            <SparklinesLine color={primary} style={{ strokeWidth: 0.4 }} />
                                        </Sparklines>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="4" lg="12">
                            <Card className="default-widget-count">
                                <CardBody>
                                    <div className="media">
                                        <div className="mr-3 left b-primary">
                                            <div className="bg bg-primary"></div>
                                            <i className="icon-user"></i>
                                        </div>
                                        <div className="media-body align-self-center">
                                            <h4 className="mt-0 counter">2560146</h4>
                                            <span>Happy Clients </span>
                                            <i className="icon-user icon-bg"></i>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card className="default-widget-count">
                                <CardBody>
                                    <div className="media">
                                        <div className="mr-3 left b-secondary">
                                            <div className="bg bg-secondary"></div>
                                            <i className="icon-package"></i>
                                        </div>
                                        <div className="media-body align-self-center">
                                            <h4 className="mt-0 counter">95314</h4>
                                            <span>Order Complate </span>
                                            <i className="icon-package icon-bg"></i>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card className="default-widget-count">
                                <CardBody>
                                    <div className="media">
                                        <div className="mr-3 left b-success">
                                            <div className="bg bg-success"></div>
                                            <i className="icon-money"></i>
                                        </div>
                                        <div className="media-body align-self-center">
                                            <h4 className="mt-0 counter">1035976</h4>
                                            <span>Early income </span>
                                            <i className="icon-money icon-bg"></i>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="4" lg="6" md="6">
                            <Card>
                                <CardHeader>
                                    <h5>Monthly Visiter</h5>
                                </CardHeader>
                                <CardBody className="donut-chart donut-chart-default">
                                    {/* <DonutChart className="flot-chart-placeholder"
                                        data={[{
                                            value: 30,
                                            label: "USA"
                                        },
                                        {
                                            value: 50,
                                            label: "India"
                                        },
                                        {
                                            value: 10,
                                            label: "Canada"
                                        },
                                        {
                                            value: 10,
                                            label: "UK"
                                        }]}
                                        colors={["#c1ddfd", "#ffc1cc" ,"#e1d5f7" ,"#afeef5" ]} /> */}
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="4" lg="6" md="6">
                            <Card>
                                <CardHeader>
                                    <h5>Daily Visiter</h5>
                                </CardHeader>
                                <CardBody className="donut-chart donut-chart-default">
                                    
                                    {/* <DonutChart className="flot-chart-placeholder"
                                        data={[{
                                            value: 80,
                                            label: "India"
                                        },
                                        {
                                            value: 5,
                                            label: "USA"
                                        },
                                        {
                                            value: 5,
                                            label: "Canada"
                                        },
                                        {
                                            value: 5,
                                            label: "UK"
                                        }]}
                                        colors={["#c1ddfd", "#ffc1cc" ,"#e1d5f7" ,"#afeef5" ]} /> */}
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="4" lg="12" md="12">
                            <Row>
                                <Col lg="12" md="5">
                                    <Card >
                                        <CardBody>
                                            <div className="row social-media-counter">
                                                <div className="col text-center">
                                                    <i className="icofont icofont-social-facebook font-primary"></i>
                                                    <h4 className="font-primary mt-2"><span className="counter">25</span>K</h4>
                                                </div>
                                                <div className="col text-center">
                                                    <i className="icofont icofont-social-twitter font-secondary"></i>
                                                    <h4 className="font-secondary mt-2"><span className="counter">456</span>K</h4>
                                                </div>
                                                <div className="col text-center">
                                                    <i className="icofont icofont-social-instagram font-success"></i>
                                                    <h4 className="font-success mt-2"><span className="counter">22</span>K</h4>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="12" md="7">
                                    <Card>
                                        <CardBody className="default-slider">

                                            <Slider {...settings}>
                                                <div className="cloned">
                                                    <div className="slide--item">
                                                        <div><p className="text-center">I must explain to you how all this mistaken
                                                            idea of denouncing pleasure and praising pain was born and I will give
                                                            you a complete account of the system,Lorem Ipsum is simply dummy text of
                                                            the printing and typesetting industry. Lorem Ipsum has been the
                                                            industry's text ever since the 1500s.</p>
                                                            <div className="text-center">
                                                                <div className="media d-inline-flex">
                                                                    <img className="mr-3 img-60" src={require('../../../assets/images/user/12.png')} alt="Generic placeholder"/>
                                                                    <div className="align-self-center">
                                                                        <div className="media-body"><h6
                                                                            className="mt-2 text-uppercase f-w-700">Mark Jecno</h6>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cloned">
                                                    <div className="slide--item">
                                                        <div><p className="text-center">I must explain to you how all this mistaken
                                                            idea of denouncing pleasure and praising pain was born and I will give
                                                            you a complete account of the system,Lorem Ipsum is simply dummy text of
                                                            the printing and typesetting industry. Lorem Ipsum has been the
                                                            industry's standard dummy text ever since the 1500s.</p>
                                                            <div className="text-center">
                                                                <div className="media d-inline-flex">
                                                                    <img className="mr-3 img-60" src={require('../../../assets/images/user/12.png')} alt="Generic placeholder"/>
                                                                    <div className="align-self-center">
                                                                        <div className="media-body"><h6
                                                                            className="mt-2 text-uppercase f-w-700">Mark Jecno</h6>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cloned">
                                                    <div className="slide--item">
                                                        <div><p className="text-center">I must explain to you how all this mistaken
                                                            idea of denouncing pleasure and praising pain was born and I will give
                                                            you a complete account of the system,Lorem Ipsum is simply dummy text of
                                                            the printing and typesetting industry. Lorem Ipsum has been the
                                                            industry's standard dummy text ever since the 1500s.</p>
                                                            <div className="text-center">
                                                                <div className="media d-inline-flex">
                                                                    <img className="mr-3 img-60" src={require('../../../assets/images/user/12.png')} alt="Generic placeholder"/>
                                                                    <div className="align-self-center">
                                                                        <div className="media-body"><h6
                                                                            className="mt-2 text-uppercase f-w-700">Mark Jecno</h6>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cloned">
                                                    <div className="slide--item">
                                                        <div><p className="text-center">I must explain to you how all this mistaken
                                                            idea of denouncing pleasure and praising pain was born and I will give
                                                            you a complete account of the system,Lorem Ipsum is simply dummy text of
                                                            the printing and typesetting industry. Lorem Ipsum has been the
                                                            industry's standard dummy text ever since the 1500s.</p>
                                                            <div className="text-center">
                                                                <div className="media d-inline-flex">
                                                                    <img className="mr-3 img-60" src={require('../../../assets/images/user/12.png')} alt="Generic placeholder"/>
                                                                    <div className="align-self-center">
                                                                        <div className="media-body"><h6
                                                                            className="mt-2 text-uppercase f-w-700">Mark Jecno</h6>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Slider>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl="8" lg="12">
                            <Card>
                                <CardHeader>
                                    <h5>Top Sale</h5>
                                </CardHeader>
                                <CardBody>
                                    <div className="top-sale-chart">
                                        <CanvasJSChart options = {DefaultChartsOptions}/>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="4" lg="12">
                            <Card className="custom-card default-user-card">
                                <CardHeader>
                                    <img src={require('../../../assets/images/user-card/1.jpg')} className="img-fluid" alt=""/>
                                </CardHeader>
                                <div className="card-profile">
                                    <img src={require('../../../assets/images/user/12.png')} className="rounded-circle" alt=""/>
                                </div>
                                <ul className="card-social">
                                    <li><a href="#javaScript"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#javaScript"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#javaScript"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#javaScript"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#javaScript"><i className="fa fa-rss"></i></a></li>
                                </ul>
                                <div className="text-center profile-details">
                                    <h4 className="m-b-15 m-t-5">Mark Jecno</h4>
                                    <h6 className="m-t-15">Manager</h6>
                                </div>
                                <Row className="card-footer">
                                    <Col sm="4" className="col-4">
                                        <h6 className="dashboard-card">Follower</h6>
                                        <h3 className="counter">9564</h3>
                                    </Col>
                                    <Col sm="4" className="col-4">
                                        <h6 className="dashboard-card">Follows</h6>
                                        <h3><span className="counter">49</span>K</h3>
                                    </Col>
                                    <Col sm="4" className="col-4">
                                        <h6 className="dashboard-card">Total</h6>
                                        <h3><span className="counter">96</span>M</h3>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col xl="6" lg="12">
                            <Card className="height-equal equal-height-lg">
                                <CardHeader>
                                    <h5>PRODUCT CART</h5>
                                </CardHeader>
                                <CardBody>
                                    <div className="user-status height-scroll custom-scrollbar">
                                        <Table borderless>
                                            <thead>
                                            <tr>
                                                <th scope="col" className="pt-0">Details</th>
                                                <th scope="col" className="pt-0">Quantity</th>
                                                <th scope="col" className="pt-0">Status</th>
                                                <th scope="col" className="pt-0">Price</th>
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
                                                <td>Classical Latin literature</td>
                                                <td className="digits">9</td>
                                                <td className="font-info">Return</td>
                                                <td className="digits">$6523</td>
                                            </tr>
                                            <tr>
                                                <td>Long established</td>
                                                <td className="digits">5</td>
                                                <td className="font-danger">Cancle</td>
                                                <td className="digits">$6523</td>
                                            </tr>

                                            </tbody>
                                        </Table>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="6" lg="12">
                            <Card className="height-equal equal-height-lg">
                                <CardHeader>
                                    <h5>Support ticket</h5>
                                </CardHeader>
                                <CardBody>
                                    <div className="support-ticket">
                                        <div className="row table-responsive-sm">
                                            <Table borderless>
                                                <tbody>
                                                <tr>
                                                    <td className="pt-0">
                                                        <div className="bg-primary left">A</div>
                                                    </td>
                                                    <td className="pt-0">
                                                        <span>Aredo jeko </span>
                                                        <h6>25 july 2019</h6>
                                                    </td>
                                                    <td className="pt-0">
                                                        <p>Mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="bg-secondary left">C</div>
                                                    </td>
                                                    <td>
                                                        <span>Aredo jeko </span>
                                                        <h6>25 july 2019</h6>
                                                    </td>
                                                    <td>
                                                        <p>Mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system,  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="pb-0">
                                                        <div className="bg-success left">H</div>
                                                    </td>
                                                    <td className="pb-0">
                                                        <span>Aredo jeko </span>
                                                        <h6>25 july 2019</h6>
                                                    </td>
                                                    <td className="pb-0">
                                                        <p>Mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                                        </p>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
}

export default Default;
