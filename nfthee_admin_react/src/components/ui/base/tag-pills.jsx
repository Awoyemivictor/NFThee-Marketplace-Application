import React, {Fragment} from 'react';
import Breadcrumb from '../../common/breadcrumb.component';
import {Container,Row,Col,Card,CardHeader,CardBody,Button,Badge} from 'reactstrap'

const TagPills = () => {
        return (
            <Fragment>
                <Breadcrumb title="Tag & Pills" parent="Base" />
                <Container fluid={true}>
                    <Row>
                        <Col sm="12" xl="6">
                            <Card>
                                <CardHeader>
                                    <h5>Contextual variations</h5>
                                </CardHeader>
                                <CardBody>
                                    <Badge color="primary">Primary</Badge>
                                    <Badge color="secondary">Secondary</Badge>
                                    <Badge color="success">Success</Badge>
                                    <Badge color="info">Info</Badge>
                                    <Badge color="warning">Warning</Badge>
                                    <Badge color="danger">Danger</Badge>
                                    <Badge color="light">Light</Badge>
                                    <Badge color="dark tag-pills-sm-mb mr-0">Dark</Badge>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" xl="6">
                            <Card>
                                <CardHeader>
                                    <h5>Contextual variations</h5>
                                </CardHeader>
                                <CardBody>
                                    <Badge pill color="primary">Primary</Badge>
                                    <Badge pill color="secondary">Secondary</Badge>
                                    <Badge pill color="success">Success</Badge>
                                    <Badge pill color="info">Info</Badge>
                                    <Badge pill color="warning">Warning</Badge>
                                    <Badge pill color="danger">Danger</Badge>
                                    <Badge pill color="light">Light</Badge>
                                    <Badge pill color="dark tag-pills-sm-mb mr-0">Dark</Badge>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" xl="6">
                            <Card>
                                <CardHeader>
                                    <h5>Tags with number</h5>
                                </CardHeader>
                                <CardBody className="digits">
                                    <Badge href="#javaScript" color="primary">1</Badge>
                                    <Badge href="#javaScript" color="secondary">2</Badge>
                                    <Badge href="#javaScript" color="success">3</Badge>
                                    <Badge href="#javaScript" color="info">4</Badge>
                                    <Badge href="#javaScript" color="warning">5</Badge>
                                    <Badge href="#javaScript" color="danger">6</Badge>
                                    <Badge href="#javaScript" color="light">7</Badge>
                                    <Badge href="#javaScript" color="dark mr-0">8</Badge>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" xl="6">
                            <Card>
                                <CardHeader>
                                    <h5>Pills with number</h5>
                                </CardHeader>
                                <CardBody className="digits">
                                    <Badge pill color="primary">1</Badge>
                                    <Badge pill color="secondary">2</Badge>
                                    <Badge pill color="success">3</Badge>
                                    <Badge pill color="info">4</Badge>
                                    <Badge pill color="warning">5</Badge>
                                    <Badge pill color="danger">6</Badge>
                                    <Badge pill color="light">7</Badge>
                                    <Badge pill color="dark mr-0">8</Badge>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" xl="6">
                            <Card>
                                <CardHeader>
                                    <h5>Tags With icon</h5>
                                </CardHeader>
                                <CardBody>
                                    <Badge href="#javaScript" color="primary"><i className="icofont icofont-cur-dollar"></i></Badge>
                                    <Badge href="#javaScript" color="secondary"><i className="icofont icofont-headphone-alt"></i></Badge>
                                    <Badge href="#javaScript" color="success"><i className="icofont icofont-link"></i></Badge>
                                    <Badge href="#javaScript" color="info"><i className="icofont icofont-brainstorming"></i></Badge>
                                    <Badge href="#javaScript" color="warning"><i className="icofont icofont-safety-pin"></i></Badge>
                                    <Badge href="#javaScript" color="danger"><i className="icofont icofont-ui-laoding"></i></Badge>
                                    <Badge href="#javaScript" color="light"><i className="icofont icofont-heart"></i></Badge>
                                    <Badge href="#javaScript" color="dark mr-0"><i className="icofont icofont-envelope"></i></Badge>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" xl="6">
                            <Card>
                                <CardHeader>
                                    <h5>Pills with number</h5>
                                </CardHeader>
                                <CardBody>
                                    <Badge href="#javaScript" pill color="primary"><i className="icofont icofont-cur-dollar"></i></Badge>
                                    <Badge href="#javaScript" pill color="secondary"><i className="icofont icofont-headphone-alt"></i></Badge>
                                    <Badge href="#javaScript" pill color="success"><i className="icofont icofont-link"></i></Badge>
                                    <Badge href="#javaScript" pill color="info"><i className="icofont icofont-brainstorming"></i></Badge>
                                    <Badge href="#javaScript" pill color="warning"><i className="icofont icofont-safety-pin"></i></Badge>
                                    <Badge href="#javaScript" pill color="danger"><i className="icofont icofont-ui-laoding"></i></Badge>
                                    <Badge href="#javaScript" pill color="light"><i className="icofont icofont-heart"></i></Badge>
                                    <Badge href="#javaScript" pill color="dark mr-0"><i className="icofont icofont-envelope"></i></Badge>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" xl="6">
                            <Card className="height-equal">
                                <CardHeader>
                                    <h5>Badges Example</h5>
                                </CardHeader>
                                <CardBody>
                                    <h1>heading <span className="badge badge-primary">New</span></h1>
                                    <h2>heading <span className="badge badge-primary">New</span></h2>
                                    <h3>heading <span className="badge badge-primary">New</span></h3>
                                    <h4>heading <span className="badge badge-primary">New</span></h4>
                                    <h5>heading <span className="badge badge-primary">New</span></h5>
                                    <h6>heading <span className="badge badge-primary mr-0">New</span></h6>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" xl="6">
                            <Card className="height-equal">
                                <CardHeader>
                                    <h5>Badges as part buttons</h5>
                                </CardHeader>
                                <CardBody>
                                    <div className="mb-3">
                                        <Button  color="primary">
                                            Messages <Badge pill color="light mr-0"><i className="icofont icofont-envelope"></i></Badge>
                                        </Button>
                                    </div>
                                    <div className="mb-3">
                                        <Button  color="secondary">
                                            Notifications <Badge color="light mr-0"><i className="icofont icofont-notification"></i></Badge>
                                        </Button>
                                    </div>
                                    <div className="mb-3">
                                        <Button  color="success">
                                            Update available <Badge color="light mr-0"><i className="icofont icofont-settings"></i></Badge>
                                        </Button>
                                    </div>
                                    <div className="mb-3">
                                        <Button type="button" color="info">
                                            Playing Now <Badge pill color="light mr-0"><i className="icofont icofont-ui-music"></i></Badge>
                                        </Button>
                                    </div>
                                    <div className="mb-3">
                                        <Button type="button" color="warning">
                                            1.2 GB Used <Badge pill color="light mr-0"><i className="icofont icofont-exclamation-tringle"></i></Badge>
                                        </Button>
                                    </div>
                                    <div className="">
                                        <Button type="button" color="danger">
                                            Alert <Badge pill color="light"><i className="icofont icofont-danger-zone"></i></Badge>
                                        </Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
export default TagPills;