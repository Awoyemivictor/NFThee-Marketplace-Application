import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb.component';
import {Container,Row,Col,Card,CardBody,CardHeader,Table} from 'reactstrap'
import CountUp from 'react-countup';
import ChartistGraph from 'react-chartist';
import {totalsalesData,totalsalesOption,totalvenderData,totalvenderOption,comboData} from './chart-data'
const  Crm = (props) => {
    return (
        <Fragment>
        <Breadcrumb title="Crm" parent="Dashboard" />
        <Container fluid={true}>
            <Card className="border-widgets">
                <Row className="m-0">
                    <Col xl="3" className="col-6 xs-width-100">
                        <CardBody className="crm-top-widget">
                            <div className="media">
                                <i className="icon-user font-primary align-self-center mr-3"></i>
                                <div className="media-body">
                                    <span className="mt-0">All Visiter</span>
                                    <h4 className="counter"><CountUp  end={25647} /></h4>
                                </div>
                            </div>
                        </CardBody>
                    </Col>
                    <Col xl="3" className="col-6 xs-width-100">
                        <CardBody className="crm-top-widget">
                            <div className="media">
                                <i className="icon-email font-secondary align-self-center mr-3"></i>
                                <div className="media-body">
                                    <span className="mt-0">Subscribe</span>
                                    <h4 className="counter"><CountUp  end={46887} /></h4>
                                </div>
                            </div>
                        </CardBody>
                    </Col>
                    <Col xl="3" className="col-6 xs-width-100">
                        <CardBody className="crm-top-widget">
                            <div className="media">
                                <i className="icon-package font-success align-self-center mr-3"></i>
                                <div className="media-body">
                                    <span className="mt-0">Products</span>
                                    <h4 className="counter"><CountUp  end={78936} /></h4>
                                </div>
                            </div>
                        </CardBody>
                    </Col>
                    <Col xl="3" className="col-6 xs-width-100">
                        <CardBody className="crm-top-widget">
                            <div className="media">
                                <i className="icon-direction-alt font-info align-self-center mr-3"></i>
                                <div className="media-body">
                                    <span className="mt-0">All Post</span>
                                    <h4 className="counter"><CountUp  end={4569} /></h4>
                                </div>
                            </div>
                        </CardBody>
                    </Col>
                </Row>
            </Card>
            <Row>
                <Col xl="6 xl-100">
                    <Card>
                        <CardHeader>
                            <h5>Total sales</h5>
                        </CardHeader>
                        <CardBody>
                            <ChartistGraph 
                                className="ct-10 total-chart"
                                data={totalsalesData} 
                                options={totalsalesOption}
                                type={'Bar'} 
                                listener={{
                                    'draw': function(data) {
                                        if(data.type === 'bar') {
                                            data.element.attr({
                                                style: 'stroke-width: 14px'
                                            });
                                        }
                                    }
                                }}  />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl="6 xl-100">
                    <Card>
                        <CardHeader>
                            <h5>Total Vender</h5>
                        </CardHeader>
                        <CardBody>
                            <ChartistGraph 
                                className="ct-1 total-chart"
                                data={totalvenderData} 
                                options={totalvenderOption}
                                type={'Line'} 
                                 />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl="8" lg="12 set-col-12">
                    <Card>
                        <CardHeader>
                            <h5>Combo Chart</h5>
                        </CardHeader>
                        <CardBody>
                            <ChartistGraph 
                                data={comboData.data} 
                                options={comboData.options} 
                                responsiveOptions={comboData.responsiveOptions} 
                                type={'Bar'} 
                                className="ct-12 total-chart"/>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl="4" lg="12 set-col-12">
                    <Card>
                        <div className="whether-widget">
                            <div className="whether-widget-top card-header">
                                <Row>
                                    <Col sm="6">
                                        <img src={require("../../../assets/images/dashboard/sun.png")} alt=""/>
                                        <span className="block_whether_bottom">Cool Day</span>
                                    </Col>
                                    <Col sm="6">
                                        <div className="details">
                                            <span>India, Surat</span>
                                            <h4><span className="counter">36</span><sup>o</sup>F</h4>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="whether-widget-bottom card-body">
                                <Row>
                                    <div className="col-6 p-0">
                                        <div className="media pt-0">
                                            <div className="mr-3">
                                                <svg
                                                        version="1.1"
                                                        id="cloudRainMoonFill"
                                                        className="climacon climacon_cloudRainMoonFill"
                                                        viewBox="15 15 70 70">
                                                    <g className="climacon_iconWrap climacon_iconWrap-cloudRainMoonFill">
                                                        <g className="climacon_wrapperComponent climacon_wrapperComponent-moon climacon_componentWrap-moon_cloud">
                                                            <path
                                                                    className="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                                                                    d="M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z"/>
                                                            <path
                                                                    className="climacon_component climacon_component-fill climacon_component-fill_moon"
                                                                    fill="#FFFFFF"
                                                                    d="M59.235,30.851c-3.556,0.813-6.211,3.989-6.211,7.792c0,4.417,3.581,7.999,7.999,7.999c3.802,0,6.979-2.655,7.791-6.211C63.961,39.527,60.139,35.705,59.235,30.851z"/>
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
                                                        <g className="climacon_componentWrap climacon_componentWrap_cloud">
                                                            <path
                                                                    className="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
                                                                    d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z"/>
                                                            <path
                                                                    className="climacon_component climacon_component-fill climacon_component-fill_cloud"
                                                                    fill="#FFFFFF"
                                                                    d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"/>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="align-self-center  media-body">
                                                <h5 className="mt-0"><span className="counter digits"><CountUp  end={25} /></span><sup>o</sup>C</h5>
                                                <span>Newyork , USA</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 p-0">
                                        <div className="media pt-0">
                                            <div className="mr-3">
                                                <svg
                                                        version="1.1"
                                                        id="cloudDrizzleMoonFillAlt"
                                                        className="climacon climacon_cloudDrizzleMoonFillAlt"
                                                        viewBox="15 15 70 70">
                                                    <g className="climacon_iconWrap climacon_iconWrap-cloudDrizzleMoonFillAlt">
                                                        <g className="climacon_wrapperComponent climacon_wrapperComponent-moon climacon_componentWrap-moon_cloud">
                                                            <path
                                                                    className="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                                                                    d="M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z"/>
                                                            <path
                                                                    className="climacon_component climacon_component-fill climacon_component-fill_moon"
                                                                    fill="#FFFFFF"
                                                                    d="M59.235,30.851c-3.556,0.813-6.211,3.989-6.211,7.792c0,4.417,3.581,7.999,7.999,7.999c3.802,0,6.979-2.655,7.791-6.211C63.961,39.527,60.139,35.705,59.235,30.851z"/>
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
                                                        <g className="climacon_componentWrap climacon_componentWrap_cloud">
                                                            <path
                                                                    className="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
                                                                    d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z"/>
                                                            <path
                                                                    className="climacon_component climacon_component-fill climacon_component-fill_cloud"
                                                                    fill="#FFFFFF"
                                                                    d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"/>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="align-self-center  media-body">
                                                <h5 className="mt-0"><span className="counter digits"><CountUp  end={95} /></span><sup>o</sup>F</h5>
                                                <span>Peris , London</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 p-0">
                                        <div className="media">
                                            <div className="mr-3">
                                                <svg
                                                        version="1.1"
                                                        id="cloudHailAltMoonFill"
                                                        className="climacon climacon_cloudHailAltMoonFill"
                                                        viewBox="15 15 70 70">
                                                    <g className="climacon_iconWrap climacon_iconWrap-cloudHailAltMoon">
                                                        <g className="climacon_wrapperComponent climacon_wrapperComponent-moon climacon_componentWrap-moon_cloud">
                                                            <path
                                                                    className="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                                                                    d="M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z"/>
                                                            <path
                                                                    className="climacon_component climacon_component-fill climacon_component-fill_moon"
                                                                    fill="#FFFFFF"
                                                                    d="M59.235,30.851c-3.556,0.813-6.211,3.989-6.211,7.792c0,4.417,3.581,7.999,7.999,7.999c3.802,0,6.979-2.655,7.791-6.211C63.961,39.527,60.139,35.705,59.235,30.851z"/>
                                                        </g>
                                                        <g className="climacon_wrapperComponent climacon_wrapperComponent-hailAlt">
                                                            <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-left">
                                                                <circle cx="42" cy="65.498" r="2"/>
                                                            </g>
                                                            <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-middle">
                                                                <circle cx="49.999" cy="65.498" r="2"/>
                                                            </g>
                                                            <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-right">
                                                                <circle cx="57.998" cy="65.498" r="2"/>
                                                            </g>
                                                            <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-left">
                                                                <circle cx="42" cy="65.498" r="2"/>
                                                            </g>
                                                            <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-middle">
                                                                <circle cx="49.999" cy="65.498" r="2"/>
                                                            </g>
                                                            <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-right">
                                                                <circle cx="57.998" cy="65.498" r="2"/>
                                                            </g>
                                                        </g>
                                                        <g className="climacon_componentWrap climacon_componentWrap_cloud">
                                                            <path
                                                                    className="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
                                                                    d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z"/>
                                                            <path
                                                                    className="climacon_component climacon_component-fill climacon_component-fill_cloud"
                                                                    fill="#FFFFFF"
                                                                    d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"/>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="media-body align-self-center">
                                                <h5 className="mt-0"><span className="counter digits"><CountUp  end={50} /></span><sup>o</sup>C</h5>
                                                <span>Surat , India</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 p-0">
                                        <div className="media">
                                            <div className="mr-3">
                                                <svg
                                                        version="1.1"
                                                        id="cloudSnowAltFill"
                                                        className="climacon climacon_cloudSnowAltFill"
                                                        viewBox="15 15 70 70">
                                                    <g className="climacon_iconWrap climacon_iconWrap-cloudSnowAltFill">
                                                        <g className="climacon_wrapperComponent climacon_wrapperComponent-snowAlt">
                                                            <g className="climacon_component climacon_component climacon_component-snowAlt">
                                                                <path
                                                                        className="climacon_component climacon_component-stroke climacon_component-stroke_snowAlt"
                                                                        d="M43.072,59.641c0.553-0.957,1.775-1.283,2.732-0.731L48,60.176v-2.535c0-1.104,0.896-2,2-2c1.104,0,2,0.896,2,2v2.535l2.195-1.268c0.957-0.551,2.18-0.225,2.73,0.732c0.553,0.957,0.225,2.18-0.73,2.731l-2.196,1.269l2.196,1.268c0.955,0.553,1.283,1.775,0.73,2.732c-0.552,0.954-1.773,1.282-2.73,0.729L52,67.104v2.535c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2v-2.535l-2.195,1.269c-0.957,0.553-2.18,0.226-2.732-0.729c-0.552-0.957-0.225-2.181,0.732-2.732L46,63.641l-2.195-1.268C42.848,61.82,42.521,60.598,43.072,59.641z"/>
                                                                <circle
                                                                        className="climacon_component climacon_component-fill climacon_component-fill_snowAlt"
                                                                        fill="#FFFFFF"
                                                                        cx="50"
                                                                        cy="63.641"
                                                                        r="2"/>
                                                            </g>
                                                        </g>
                                                        <g className="climacon_componentWrap climacon_componentWrap_cloud">
                                                            <path
                                                                    className="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
                                                                    d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z"/>
                                                            <path
                                                                    className="climacon_component climacon_component-fill climacon_component-fill_cloud"
                                                                    fill="#FFFFFF"
                                                                    d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"/>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="align-self-center  media-body">
                                                <h5 className="mt-0"><span className="counter digits"><CountUp  end={35} /></span><sup>o</sup>F</h5>
                                                <span>Lahor , Pakistan</span>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl="3 xl-50 set-col-6" sm="6">
                    <Card className="bg-primary">
                        <CardBody>
                            <Row className="social-media-counter">
                                <div className="col text-center">
                                    <i className="icofont icofont-social-facebook"></i>
                                </div>
                                <div className="col text-center">
                                    <h4 className="counter"><CountUp  end={256} /></h4>
                                    <p>Friend</p>
                                </div>
                                <div className="col text-center">
                                    <h4 className="counter"><CountUp  end={364} /></h4>
                                    <p>Post</p>
                                </div>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>

                <Col xl="3 xl-50 set-col-6" sm="6">
                    <Card className="bg-secondary">
                        <CardBody>
                            <Row className="social-media-counter">
                                <div className="col text-center">
                                    <i className="icofont icofont-social-twitter"></i>
                                </div>
                                <div className="col text-center">
                                    <h4 className="counter"><CountUp  end={698} /></h4>
                                    <p>Friend</p>
                                </div>
                                <div className="col text-center">
                                    <h4 className="counter"><CountUp  end={7018} /></h4>
                                    <p>Post</p>
                                </div>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>

                <Col xl="3 xl-50 set-col-6" sm="6">
                    <Card className="bg-success">
                        <CardBody>
                            <Row className="social-media-counter">
                                <div className="col text-center">
                                    <i className="icofont icofont-brand-linkedin"></i>
                                </div>
                                <div className="col text-center">
                                    <h4 className="counter"><CountUp  end={156} /></h4>
                                    <p>Friend</p>
                                </div>
                                <div className="col text-center">
                                    <h4 className="counter"><CountUp  end={985} /></h4>
                                    <p>Post</p>
                                </div>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>

                <Col xl="3 xl-50 set-col-6" sm="6">
                    <Card className="bg-info">
                        <CardBody>
                            <Row className="social-media-counter">
                                <div className="col text-center">
                                    <i className="icofont icofont-social-instagram"></i>
                                </div>
                                <div className="col text-center">
                                    <h4 className="counter"><CountUp  end={1489} /></h4>
                                    <p>Friend</p>
                                </div>
                                <div className="col text-center">
                                    <h4 className="counter"><CountUp  end={9875} /></h4>
                                    <p>Post</p>
                                </div>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md="6" sm="12">
                    <div className="">
                        <Card className="height-equal" >
                            <CardHeader>
                                <h5 className="text-uppercase">Recent Activity</h5>
                            </CardHeader>
                            <CardBody>
                                <ul className="crm-activity equal-height-xl">
                                    <li className="media">
                                        <span className="mr-3 font-primary">E</span>
                                        <div className="align-self-center media-body">
                                            <h6 className="mt-0">Established fact that a reader will be distracted</h6>
                                            <ul className="dates">
                                                <li className="digits">25 July 2017</li>
                                                <li className="digits">20 hours ago</li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="media">
                                        <span className="mr-3 font-secondary">A</span>
                                        <div className="align-self-center media-body">
                                            <h6 className="mt-0">Any desktop publishing packages and web page editors.</h6>
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
                                            <h6 className="mt-0">Contrary to popular belief, Lorem Ipsum is not simply. </h6>
                                            <ul className="dates">
                                                <li className="digits">25 July 2017</li>
                                                <li className="digits">20 hours ago</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="media">
                                        <span className="mr-3 font-warning">H</span>
                                        <div className="align-self-center media-body">
                                            <h6 className="mt-0">H-Code - A premium portfolio template from ThemeZaa </h6>
                                            <ul className="dates">
                                                <li className="digits">25 July 2017</li>
                                                <li className="digits">20 hours ago</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="media">
                                        <span className="mr-3 font-danger">T</span>
                                        <div className="align-self-center media-body">
                                            <h6 className="mt-0">There isn't anything embarrassing hidden.</h6>
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
                <Col md="6" sm="12">
                    <Card className="height-equal">
                        <CardHeader>
                            <h5>Product Cart</h5>
                        </CardHeader>
                        <CardBody>
                            <div className="user-status table-responsive product-chart">
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
                                        <td>Simply dummy text of the</td>
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
                                        <td>Sometimes by accident</td>
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
                                        <td className="pb-1">Sometimes by accident</td>
                                        <td className="digits">8</td>
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
                                        <td>Sometimes by accident</td>
                                        <td className="digits">10</td>
                                        <td className="font-danger">Cancle</td>
                                        <td className="digits">$6523</td>
                                    </tr>
                                    <tr>
                                        <td>Long established</td>
                                        <td className="digits">1</td>
                                        <td className="font-secondary">Pending</td>
                                        <td className="digits">$6523</td>
                                    </tr>
                                    <tr>
                                        <td>Simply dummy text of the</td>
                                        <td className="digits">8</td>
                                        <td className="font-secondary">Pending</td>
                                        <td className="digits">$6523</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
        </Fragment>
    );
}

export default Crm;