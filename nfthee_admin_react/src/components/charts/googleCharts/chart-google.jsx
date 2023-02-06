import React, {Fragment} from 'react';
import {GooglePieChart1,GooglePieChart3,GooglePieChart4,GoogleAreaChart1,GoogleAreaChart2,GoogleBarChart1,GoogleBarChart2,GoogleColumnChart1,GooglePieChart2,GoogleLineChart,GoogleComboChart, GoogleColumnChart2} from "./chart-google-data"
import Breadcrumb from '../../common/breadcrumb.component';
import {Container,Col,Row,Card,CardHeader,CardBody} from 'reactstrap'

const GoogleCharts = () => {

        return (
            <Fragment>
                <Breadcrumb title="Google-Chart" parent="Charts" />
                <Container fluid={true}>
                    <Row>
                        <Col sm="12" xl="6">
                            <Card>
                                <CardHeader>
                                    <h5>Pie Chart <span className="digits">1</span></h5>
                                </CardHeader>
                                <CardBody className="chart-block">
                                    <div id="pie-chart1" className="chart-overflow"></div>
                                    <GooglePieChart1/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" xl="6">
                            <Card>
                                <CardHeader>
                                    <h5>Pie Chart <span className="digits">2</span></h5>
                                </CardHeader>
                                <CardBody className="chart-block">
                                    <GooglePieChart2/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" xl="6">
                            <Card>
                                <CardHeader>
                                    <h5>Pie Chart <span className="digits">3</span></h5>
                                </CardHeader>
                                <CardBody className="chart-block">
                                 <GooglePieChart3/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" xl="6">
                            <Card>
                                <CardHeader>
                                    <h5>Pie Chart <span className="digits">4</span></h5>
                                </CardHeader>
                                <CardBody className="chart-block">
                                <GooglePieChart4/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" xl="6">
                            <Card>
                                <CardHeader>
                                    <h5>Area Chart <span className="digits">1</span></h5>
                                </CardHeader>
                                <CardBody className="chart-block">
                                <GoogleAreaChart1/>   
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" xl="6">
                            <Card>
                                <CardHeader>
                                    <h5>Area Chart <span className="digits">2</span></h5>
                                </CardHeader>
                                <CardBody className="chart-block">
                                <GoogleAreaChart2/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" xl="6">
                            <Card>
                                <CardHeader>
                                    <h5>Column Chart <span className="digits">1</span></h5>
                                </CardHeader>
                                <CardBody className="chart-block">
                                <GoogleColumnChart1/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" xl="6">
                            <Card>
                                <CardHeader>
                                    <h5>Column Chart <span className="digits">2</span></h5>
                                </CardHeader>
                                <CardBody className="chart-block">
                                <GoogleColumnChart2/> 
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" xl="6">
                            <Card>
                                <CardHeader>
                                    <h5>Bars Chart <span className="digits">1</span></h5>
                                </CardHeader>
                                <CardBody className="chart-block">
                                <GoogleBarChart1/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" xl="6">
                            <Card>
                                <CardHeader>
                                    <h5>Bars Chart <span className="digits">2</span></h5>
                                </CardHeader>
                                <CardBody className="chart-block">
                                <GoogleBarChart2/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>Line Chart</h5>
                                </CardHeader>
                                <CardBody className="chart-block">
                                <GoogleLineChart/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>Combo Chart</h5>
                                </CardHeader>
                                <CardBody className="chart-block">
                                <GoogleComboChart/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
}


export default GoogleCharts;