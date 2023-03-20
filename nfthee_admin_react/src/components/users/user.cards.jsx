import React, {Fragment} from 'react';
import CountUp from 'react-countup';
import Breadcrumb from '../common/breadcrumb.component'
import { Container,Row,Col,Card,CardHeader} from 'reactstrap'

const UserCards = () => {
    return(
        <Fragment>
            <Breadcrumb title="User Cards" parent="Users" />
            <Container fluid={true}>
                <Row>

                    <Col md="6" lg="6" xl="4 set-col-6">
                        <Card className="custom-card">
                            <CardHeader>
                                <img src={require('../../assets/images/user-card/1.jpg')} className="img-fluid" alt=""/>
                            </CardHeader>
                            <div className="card-profile">
                                <img src={require('../../assets/images/avtar/3.jpg')} className="rounded-circle" alt=""/>
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
                                <Col className="col-4" sm="4">
                                    <h6>Follower</h6>
                                    <h3 className="counter"><CountUp end={9564} duration={5} /></h3>
                                </Col>
                                <Col className="col-4" sm="4">
                                    <h6>Following</h6>
                                    <h3><span className="counter"><CountUp end={49} duration={2} /></span>K</h3>
                                </Col>
                                <Col className="col-4" sm="4">
                                    <h6>Total Post</h6>
                                    <h3><span className="counter"><CountUp end={96} duration={3} /></span>M</h3>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col md="6" lg="6" xl="4 set-col-6">
                        <Card className="custom-card">
                            <CardHeader>
                                <img src={require('../../assets/images/user-card/2.jpg') } className="img-fluid" alt=""/>
                            </CardHeader>
                            <div className="card-profile">
                                <img src={require('../../assets/images/avtar/16.jpg')} className="rounded-circle" alt=""/>
                            </div>
                            <ul className="card-social">
                                <li><a href="#javaScript"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#javaScript"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#javaScript"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#javaScript"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#javaScript"><i className="fa fa-rss"></i></a></li>
                            </ul>
                            <div className="text-center profile-details">
                                <h4>Johan Deo</h4>
                                <h6>Designer</h6>
                            </div>
                            <Row className="card-footer">
                                <Col className="col-4" sm="4">
                                    <h6>Follower</h6>
                                    <h3 className="counter"><CountUp end={2578} duration={5} /></h3>
                                </Col>
                                <Col className="col-4" sm="4">
                                    <h6>Following</h6>
                                    <h3><span className="counter"><CountUp end={26} duration={2} /></span>K</h3>
                                </Col>
                                <Col className="col-4" sm="4">
                                    <h6>Total Post</h6>
                                    <h3><span className="counter"><CountUp end={96} duration={3} /></span>M</h3>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col md="6" lg="6" xl="4 set-col-6">
                        <Card className="custom-card">
                            <CardHeader>
                                <img src={require('../../assets/images/user-card/3.jpg')} className="img-fluid" alt=""/>
                            </CardHeader>
                            <div className="card-profile">
                                <img src={require('../../assets/images/avtar/11.jpg')} className="rounded-circle" alt=""/>
                            </div>
                            <ul className="card-social">
                                <li><a href="#javaScript"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#javaScript"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#javaScript"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#javaScript"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#javaScript"><i className="fa fa-rss"></i></a></li>
                            </ul>
                            <div className="text-center profile-details">
                                <h4>Dev John</h4>
                                <h6>Devloper</h6>
                            </div>
                            <Row className="card-footer">
                                <Col className="col-4" sm="4">
                                    <h6>Follower</h6>
                                    <h3 className="counter"><CountUp end={6545} duration={5} /></h3>
                                </Col>
                                <Col className="col-4" sm="4">
                                    <h6>Following</h6>
                                    <h3><span className="counter"><CountUp end={91} duration={3} /></span>K</h3>
                                </Col>
                                <Col className="col-4" sm="4">
                                    <h6>Total Post</h6>
                                    <h3><span className="counter"><CountUp end={21} duration={2} /></span>M</h3>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col md="6" lg="6" xl="4 set-col-6">
                        <Card className="custom-card">
                            <CardHeader>
                                <img src={require('../../assets/images/user-card/4.jpg')} className="img-fluid" alt=""/>
                            </CardHeader>
                            <div className="card-profile">
                                <img src={require('../../assets/images/avtar/16.jpg')} className="rounded-circle" alt=""/>
                            </div>
                            <ul className="card-social">
                                <li><a href="#javaScript"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#javaScript"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#javaScript"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#javaScript"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#javaScript"><i className="fa fa-rss"></i></a></li>
                            </ul>
                            <div className="text-center profile-details">
                                <h4>Johan Deo</h4>
                                <h6>Designer</h6>
                            </div>
                            <Row className="card-footer">
                                <Col className="col-4" sm="4">
                                    <h6>Follower</h6>
                                    <h3 className="counter"><CountUp end={2578} duration={5} /></h3>
                                </Col>
                                <Col className="col-4" sm="4">
                                    <h6>Following</h6>
                                    <h3><span className="counter"><CountUp end={26} duration={2} /></span>K</h3>
                                </Col>
                                <Col className="col-4" sm="4">
                                    <h6>Total Post</h6>
                                    <h3><span className="counter"><CountUp end={96} duration={3} /></span>M</h3>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col md="6" lg="6" xl="4 set-col-6">
                        <Card className="custom-card">
                            <CardHeader>
                                <img src={require('../../assets/images/user-card/2.jpg')} className="img-fluid" alt=""/>
                            </CardHeader>
                            <div className="card-profile">
                                <img src={require('../../assets/images/avtar/11.jpg')} className="rounded-circle" alt=""/>
                            </div>
                            <ul className="card-social">
                                <li><a href="#javaScript"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#javaScript"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#javaScript"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#javaScript"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#javaScript"><i className="fa fa-rss"></i></a></li>
                            </ul>
                            <div className="text-center profile-details">
                                <h4>Dev John</h4>
                                <h6>Devloper</h6>
                            </div>
                            <Row className="card-footer">
                                <Col className="col-4" sm="4">
                                    <h6>Follower</h6>
                                    <h3 className="counter"><CountUp end={6545} duration={5} /></h3>
                                </Col>
                                <Col className="col-4" sm="4">
                                    <h6>Following</h6>
                                    <h3><span className="counter"><CountUp end={96} duration={3} /></span>K</h3>
                                </Col>
                                <Col className="col-4" sm="4">
                                    <h6>Total Post</h6>
                                    <h3><span className="counter"><CountUp end={25} duration={2} /></span>M</h3>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col md="6" lg="6" xl="4 set-col-6">
                        <Card className="custom-card">
                            <CardHeader>
                                <img src={require('../../assets/images/user-card/1.jpg') } className="img-fluid" alt=""/>
                            </CardHeader>
                            <div className="card-profile">
                                <img src={require('../../assets/images/avtar/3.jpg')} className="rounded-circle" alt=""/>
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
                                <Col className="col-4" sm="4">
                                    <h6>Follower</h6>
                                    <h3 className="counter"><CountUp end={9564} duration={5} /></h3>
                                </Col>
                                <Col className="col-4" sm="4">
                                    <h6>Following</h6>
                                    <h3><span className="counter"><CountUp end={49} duration={2} /></span>K</h3>
                                </Col>
                                <Col className="col-4" sm="4">
                                    <h6>Total Post</h6>
                                    <h3><span className="counter"><CountUp end={98} duration={4} /></span>M</h3>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}
export default UserCards