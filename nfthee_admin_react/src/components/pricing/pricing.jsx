import React, {Fragment} from 'react';
import CountUp from 'react-countup';
import Breadcrumb from '../common/breadcrumb.component';
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap'

const Samplepage = () => {

    return (
        <Fragment>
            <Breadcrumb title="Pricing" parent="Pricing"/>
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Pricing</h5>
                            </CardHeader>
                            <CardBody className="m-auto">
                                <div className="pricing-wrapper-card">
                                    <Row>
                                        <div className="pricing-card col-xl-4">
                                            <div className="card-title">
                                                <h3>Basic</h3>
                                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                                            </div>
                                            <div className="card-price">
                                                <h1>
                                                    <sup>$</sup>
                                                    <span className="counter" ><CountUp end={12}/></span>
                                                    <small>month</small>
                                                </h1>
                                            </div>
                                            <div className="card-description">
                                                <ul>
                                                    <li>Lorem ipsum dolor sit amet</li>
                                                    <li>Pellentesque hendrerit</li>
                                                    <li>Aliquam at orci aliquam</li>
                                                    <li>Praesent non sapien laoreet</li>
                                                </ul>
                                            </div>
                                            <div className="card-action">
                                                <button type="button">Get Basic</button>
                                            </div>
                                        </div>
                                        <div className="pricing-card popular col-xl-4">
                                            <div className="card-ribbon">
                                                <span>most popular</span>
                                            </div>
                                            <div className="card-title">
                                                <h3>Pro</h3>
                                                <h5>Maecenas ut justo molestie, pharetra arcu ac, mollis est.</h5>
                                            </div>
                                            <div className="card-price">
                                                <h1>
                                                    <sup>$</sup>
                                                    <span className="counter"><CountUp end={15}/></span>
                                                    <small>month</small>
                                                </h1>
                                            </div>
                                            <div className="card-description">
                                                <ul>
                                                    <li>Lorem ipsum dolor sit amet</li>
                                                    <li>Pellentesque hendrerit</li>
                                                    <li>Aliquam at orci aliquam</li>
                                                    <li>Praesent non sapien laoreet</li>
                                                </ul>
                                            </div>
                                            <div className="card-action">
                                                <button type="button">Get Pro</button>
                                            </div>
                                        </div>
                                        <div className="pricing-card col-xl-4">
                                            <div className="card-title">
                                                <h3>Premium</h3>
                                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                                            </div>
                                            <div className="card-price">
                                                <h1>
                                                    <sup>$</sup>
                                                    <span className="counter"><CountUp end={20}/></span>
                                                    <small>month</small>
                                                </h1>
                                            </div>
                                            <div className="card-description">
                                                <ul>
                                                    <li>Lorem ipsum dolor sit amet</li>
                                                    <li>Pellentesque hendrerit</li>
                                                    <li>Aliquam at orci aliquam</li>
                                                    <li>Praesent non sapien laoreet</li>
                                                </ul>
                                            </div>
                                            <div className="card-action">
                                                <button type="button">Get Premium</button>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}


export default Samplepage;