import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb.component'
import { Container,Col,Row,Card,CardHeader,CardBody,Progress,Table } from "reactstrap";
import BoxRowOne from './box-row-one.component';
import CountUp from 'react-countup';
import ChartistGraph from 'react-chartist';
import { EcommerceCharts } from "../chartsData/data";
// import DonutChart from 'react-donut-chart';

const Ecommecrce = () => {
        const primary = localStorage.getItem('primary_color') 
        const secondary = localStorage.getItem('secondary_color') 
        return (
            <Fragment>
            <Breadcrumb title="E-commerce " parent="Dashboard" />
            <Container fluid={true}>
                <BoxRowOne/>
            </Container>

              <Container fluid={true}>
                <Row>
                    <Col xl="8 xl-60" md="12 set-col-6">
                        <Card>
                            <CardHeader>
                                <h5>Yearly Report</h5>
                                <span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span>
                            </CardHeader>
                            <CardBody>
                                <div className="yearly-chart">
                                    <div className="ct-6 flot-chart-container">
                                        <ChartistGraph  data={EcommerceCharts.series} options={EcommerceCharts.options} type={'Line'} />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl="4 xl-40" md="12 set-col-6">
                        <Card>
                            <CardHeader>
                                <h5>Over All</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="crm-numbers">
                                    <Row>
                                        <div className="col">
                                            <span>Yearly</span>
                                            <h4 className="txt-info"><span className="counter"><CountUp end={25.6}/></span>%</h4>
                                        </div>
                                        <div className="col">
                                            <span>Monthly</span>
                                            <h4 className="txt-danger"><span className="counter"><CountUp end={36.4}/></span>%</h4>
                                        </div>
                                        <div className="col">
                                            <span>weekly</span>
                                            <h4 className="txt-info"><span className="counter"><CountUp end={22.8}/></span>%</h4>
                                        </div>
                                        <div className="col">
                                            <span>Daily</span>
                                            <h4 className="txt-danger"><span className="counter"><CountUp end={24.9}/></span>%</h4>
                                        </div>
                                    </Row>
                                </div>
                                <div className="crm-overall">
                                    <div className="flot-chart-container-small donut-chart">
                                        {/* <DonutChart 
                                            className="flot-chart-placeholder" 
                                            height = {483}
                                            data={[{value: 30,label: "USA"},{value: 50,label: "India"},{value: 10,label: "Canada"},{value: 10,label: "UK"}]}
                                            colors={[secondary, primary ,"#FF5370" ,"#4099FF" ]} 
                                        /> */}
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="browser-widget p-0">
                            <CardBody>
                                <div className="media">
                                    <i className="icofont icofont-presentation-alt font-info align-self-center f-70"></i>
                                    <i className="align-self-center mr-3"></i>
                                    <div className="media-body align-self-center">
                                        <div>
                                            <span>Product</span>
                                            <h4><span className="counter"><CountUp end={90}/></span>%</h4>
                                        </div>
                                        <div className="inline-block-sm">
                                            <span>Projects</span>
                                            <h4><span className="counter"><CountUp end={80}/></span>%</h4>
                                        </div>
                                        <div>
                                            <span>Income</span>
                                            <h4><span className="counter"><CountUp end={85}/></span>%</h4>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xl="4" lg="12">
                        <Card>
                            <div className="ecommerce-widget card-body">
                                <Row>
                                    <div className="col-6">
                                        <span>New Order</span>
                                        <h3 className="total-num counter"><CountUp end={25639}/></h3>
                                    </div>
                                    <div className="col-6">
                                        <div className="text-md-right">
                                            <ul>
                                                <li>Profit<span className="product-stts txt-success ml-2">8989<i className="icon-angle-up f-12 ml-1"></i></span></li>
                                                <li>Loss<span className="product-stts txt-danger ml-2">2560<i className="icon-angle-down f-12 ml-1"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Row>
                                <div className="progress-showcase">
                                    <div className="progress lg-progress-bar">
                                        <Progress bar color="info" value="70"/>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col xl="4" lg="12">
                        <Card>
                            <div className="ecommerce-widget card-body">
                                <Row>
                                    <div className="col-6">
                                        <span>Pending</span>
                                        <h3 className="total-num counter"><CountUp end={89432}/></h3>
                                    </div>
                                    <div className="col-6">
                                        <div className="text-md-right">
                                            <ul>
                                                <li>Profit<span className="product-stts txt-success ml-2">8989<i className="icon-angle-up f-12 ml-1"></i></span></li>
                                                <li>Loss<span className="product-stts txt-danger ml-2">2560<i className="icon-angle-down f-12 ml-1"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Row>
                                <div className="progress-showcase">
                                    <div className="progress lg-progress-bar">
                                        <Progress bar color="danger" value="60"/>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col xl="4" lg="12">
                        <Card>
                            <div className="ecommerce-widget card-body">
                                <Row>
                                    <div className="col-6">
                                        <span>Cancle</span>
                                        <h3 className="total-num counter"><CountUp end={25600}/></h3>
                                    </div>
                                    <div className="col-6">
                                        <div className="text-md-right">
                                            <ul>
                                                <li>Profit<span className="product-stts txt-success ml-2">8989<i className="icon-angle-up f-12 ml-1"></i></span></li>
                                                <li>Loss<span className="product-stts txt-danger ml-2">2560<i className="icon-angle-down f-12 ml-1"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Row>
                                <div className="progress-showcase">
                                    <div className="progress lg-progress-bar">
                                        <Progress bar color="secondary" value="80"/>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>


                <Row>
                    <Col xl="12" md="12" sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Latest Products</h5>
                                <span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span>
                            </CardHeader>
                            <CardBody>
                                <div className="table-responsive text-center user-status">
                                    <Table borderless>
                                        <thead>
                                        <tr>
                                            <th scope="col">Images</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th className="bd-t-none" scope="row"><img src={require('../../../assets/images/dashboard/1.png')} alt="product-1" className=""/></th>
                                            <td>New USA Home Appliances
                                                Whaer
                                            </td>
                                            <td className="digits">01</td>
                                            <td>Mark Jecno</td>
                                            <td>Padding</td>
                                        </tr>
                                        <tr>
                                            <th className="bd-t-none" scope="row"><img src={require('../../../assets/images/dashboard/2.png')} alt="product-1"/></th>
                                            <td>New Smart Samsung Touch
                                                Mobile
                                            </td>
                                            <td className="digits">01</td>
                                            <td>Dolbi Volo</td>
                                            <td>Return</td>
                                        </tr>
                                        <tr>
                                            <th className="bd-t-none" scope="row"><img src={require('../../../assets/images/dashboard/3.png')} alt="product-1"/></th>
                                            <td>Men Fashion 30% Fashion
                                                Men-TSHIRT
                                            </td>
                                            <td className="digits">06</td>
                                            <td>Donalt Hili</td>
                                            <td>Delievered</td>
                                        </tr>
                                        <tr>
                                            <th className="bd-t-none pb-0" scope="row"><img src={require('../../../assets/images/dashboard/4.png')} alt="product-1"/></th>
                                            <td>Sport Wear Rebiz Sport
                                                Shoes  for men
                                            </td>
                                            <td className="digits">03</td>
                                            <td>Animkl solo</td>
                                            <td>cancle</td>
                                        </tr>

                                        </tbody>
                                    </Table>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xl="3" sm="6">
                        <Card>
                            <div className="product-box">
                                <div className="product-img">
                                    <img src={require('../../../assets/images/ecommerce/product/01.jpg')} className="img-fluid" alt=""/>
                                    <div className="product-hover">
                                        <ul>
                                            <li><i className="icon-shopping-cart"></i></li>
                                            <li><i className="icon-eye"></i></li>
                                            <li><i className="icofont icofont-law-alt-2"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <h6>Woman</h6>
                                    <span>Simply dummy text of the printing.</span>
                                    <div className="product-price">
                                        <del>$350.00    </del>$26.00
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col xl="3" sm="6">
                        <Card>
                            <div className="product-box">
                                <div className="product-img">
                                    <div className="ribbon ribbon-danger">Sale</div>
                                    <img src={require('../../../assets/images/ecommerce/product/02.jpg')} className="img-fluid" alt=""/>
                                    <div className="product-hover">
                                        <ul>
                                            <li><i className="icon-shopping-cart"></i></li>
                                            <li><i className="icon-eye"></i></li>
                                            <li><i className="icofont icofont-law-alt-2"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <h6>Woman</h6>
                                    <span>Simply dummy text of the printing.</span>
                                    <div className="product-price">
                                        <del>$350.00    </del>$26.00
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col xl="3" sm="6">
                        <Card>
                            <div className="product-box">
                                <div className="product-img">
                                    <img src={require('../../../assets/images/ecommerce/product/03.jpg')} className="img-fluid" alt=""/>
                                    <div className="product-hover">
                                        <ul>
                                            <li><i className="icon-shopping-cart"></i></li>
                                            <li><i className="icon-eye"></i></li>
                                            <li><i className="icofont icofont-law-alt-2"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <h6>Woman</h6>
                                    <span>Simply dummy text of the printing.</span>
                                    <div className="product-price">
                                        <del>$350.00    </del>$26.00
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col xl="3" sm="6">
                        <Card>
                            <div className="product-box">
                                <div className="product-img">
                                    <div className="ribbon ribbon-success ribbon-right">50%</div>
                                    <img src={require('../../../assets/images/ecommerce/product/04.jpg')} className="img-fluid" alt=""/>
                                    <div className="product-hover">
                                        <ul>
                                            <li><i className="icon-shopping-cart"></i></li>
                                            <li><i className="icon-eye"></i></li>
                                            <li><i className="icofont icofont-law-alt-2"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <h6>Woman</h6>
                                    <span>Simply dummy text of the printing.</span>
                                    <div className="product-price">
                                        <del>$350.00    </del>$26.00
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl="12" md="12" sm="12">
                        <Card>
                            <CardHeader>
                                <h5>User Status</h5>
                                <span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span>
                            </CardHeader>
                            <CardBody>
                                <div className="user-status table-responsive">
                                    <Table borderless>
                                        <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Country</th>
                                            <th scope="col">Popular</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="bd-t-none">
                                                <div className="d-inline-block align-middle">
                                                    <img src={require('../../../assets/images/user/4.jpg')} alt="blog" className="img-radius img-40 align-top m-r-15 rounded-circle"/>
                                                    <div className="d-inline-block">
                                                        <h6>John Deo <span className="text-muted digits">(14+ Online)</span></h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>USA</td>
                                            <td>
                                                <div className="progress-showcase">
                                                    <div className="progress sm-progress-bar">
                                                        <Progress bar color="primary" value="50"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="action">
                                                    <ul className="list-inline text-muted">
                                                        <li className="list-inline-item"><i className="icon-close"></i></li>
                                                        <li className="list-inline-item"><i className="icon-na"></i></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="bd-t-none">
                                                <div className="d-inline-block align-middle">
                                                    <img src={require('../../../assets/images/user/1.jpg')} alt="blog" className="img-radius img-40 align-top m-r-15 rounded-circle"/>
                                                    <div className="d-inline-block">
                                                        <h6>Holio Mako <span className="text-muted digits">(250+ Online)</span></h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Angola</td>
                                            <td>
                                                <div className="progress-showcase">
                                                    <div className="progress sm-progress-bar">
                                                        <Progress bar color="danger" value="70"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="action">
                                                    <ul className="list-inline text-muted">
                                                        <li className="list-inline-item"><i className="icon-close"></i></li>
                                                        <li className="list-inline-item"><i className="icon-na"></i></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="bd-t-none">
                                                <div className="d-inline-block align-middle">
                                                    <img src={require('../../../assets/images/user/5.jpg')} alt="blog" className="img-radius img-40 align-top m-r-15 rounded-circle"/>
                                                    <div className="d-inline-block">
                                                        <h6>Mohsib lara<span className="text-muted digits">(99+ Online)</span></h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Cuba</td>
                                            <td>
                                                <div className="progress-showcase">
                                                    <div className="progress sm-progress-bar">
                                                        <Progress bar color="info" value="70"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="action">
                                                    <ul className="list-inline text-muted">
                                                        <li className="list-inline-item"><i className="icon-close"></i></li>
                                                        <li className="list-inline-item"><i className="icon-na"></i></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="bd-t-none">
                                                <div className="d-inline-block align-middle">
                                                    <img src={require('../../../assets/images/user/6.jpg')} alt="blog" className="img-radius img-40 align-top m-r-15 rounded-circle"/>
                                                    <div className="d-inline-block">
                                                        <h6>Hileri Soli <span className="text-muted digits">(150+ Online)</span></h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Italy</td>
                                            <td>
                                                <div className="progress-showcase">
                                                    <div className="progress sm-progress-bar">
                                                        <Progress bar color="secondary" value="70"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="action">
                                                    <ul className="list-inline text-muted">
                                                        <li className="list-inline-item"><i className="icon-close"></i></li>
                                                        <li className="list-inline-item"><i className="icon-na"></i></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="bd-t-none">
                                                <div className="d-inline-block align-middle">
                                                    <img src={require('../../../assets/images/user/7.jpg')} alt="blog" className="img-radius img-40 align-top m-r-15 rounded-circle"/>
                                                    <div className="d-inline-block">
                                                        <h6>Pusiz bianb <span className="text-muted digits">(14+ Online)</span></h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Kenya</td>
                                            <td>
                                                <div className="progress-showcase">
                                                    <div className="progress sm-progress-bar">
                                                        <Progress bar color="info" value="70"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="action">
                                                    <ul className="list-inline text-muted">
                                                        <li className="list-inline-item"><i className="icon-close"></i></li>
                                                        <li className="list-inline-item"><i className="icon-na"></i></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>


                <Row>
                    <Col xl="6" md="12" sm="12 set-col-12">
                        <Card className="height-equal">
                            <CardHeader>
                                <h5>Customer Review</h5>
                                <span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span>
                            </CardHeader>
                            <CardBody>
                                <div className="customer-review">
                                    <div className="media">
                                        <img className="align-self-start rounded-circle img-90"  alt="Universal-review" src={require('../../../assets/images/user/12.png')}/>
                                        <div className="media-body">
                                            <label className="cust-name">Mark Jenco</label><label className="cust-des">Designer</label>
                                            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin </p>
                                        </div>
                                    </div>
                                    <div className="media mb-0">
                                        <img className="align-self-start rounded-circle img-90"  alt="Universal-review" src={require('../../../assets/images/user/13.png')}/>
                                        <div className="media-body">
                                            <label className="cust-name">Heloi Jobuc</label><label className="cust-des">Student</label>
                                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.Lorem Ipsum as their default model</p>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl="6" md="12" sm="12 set-col-12">
                        <Row>
                            <Col sm="6">
                                <Card className="height-equal equal-height-lg">
                                    <div className="blog-box blog-grid text-center">
                                        <img src={require('../../../assets/images/blog/blog-5.png')} className="img-fluid top-radius-blog" alt=""/>
                                        <div className="blog-details-main">
                                            <ul className="blog-social">
                                                <li className="digits">9 April</li>
                                                <li className="digits">by: Admin</li>
                                                <li className="digits">0 Hits</li>
                                            </ul>
                                            <hr/>
                                            <h6 className="blog-bottom-details">Perspiciatis unde omnis iste natus error sit.Dummy text</h6>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="6">
                                <Card className="height-equal equal-height-lg">
                                    <div className="blog-box blog-grid text-center">
                                        <img src={require('../../../assets/images/blog/blog-6.png')} className="img-fluid top-radius-blog" alt=""/>
                                        <div className="blog-details-main">
                                            <ul className="blog-social">
                                                <li className="digits">9 April</li>
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
                </Row>
            </Container>
        </Fragment>
        )
    }

export default Ecommecrce;