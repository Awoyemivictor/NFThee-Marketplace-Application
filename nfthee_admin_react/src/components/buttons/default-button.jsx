import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb.component';
import {Container,Row,Col,Card,CardHeader,CardBody,Button} from 'reactstrap'
const DefaultButton = () => {
    return (
        <Fragment>
            <Breadcrumb title="Default Style" parent="Buttons"/>
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Default buttons</h5>
                                <span>Bootstrap state buttons</span>
                            </CardHeader>
                            <CardBody className="btn-showcase">
                                <Button color="primary">Primary Button</Button>
                                <Button color="secondary">Secondary Button</Button>
                                <Button color="success">Success Button</Button>
                                <Button color="info">Info Button</Button>
                                <Button color="warning">Warning Button</Button>
                                <Button color="danger">Danger Button</Button>
                                <Button color="light">Light Button</Button>
                            </CardBody>
                        </Card>
                        <Card id="large-btn">
                            <CardHeader>
                                <h5>Large buttons</h5>
                                <span>Add <code>.btn-lg</code> class for large size buttons</span>
                            </CardHeader>
                            <CardBody className="btn-showcase">
                                <Button color="primary" size="lg" >Primary Button</Button>
                                <Button color="secondary" size="lg">Secondary Button</Button>
                                <Button color="success" size="lg">Success Button</Button>
                                <Button color="info" size="lg">Info Button</Button>
                                <Button color="warning" size="lg">Warning Button</Button>
                                <Button color="danger" size="lg">Danger Button</Button>
                                <Button color="light" size="lg">Light Button</Button>
                            </CardBody>
                        </Card>
                        <Card id="small-btn">
                            <CardHeader>
                                <h5>Small buttons</h5>
                                <span>Add <code>.btn-sm</code> class for small size buttons</span>
                            </CardHeader>
                            <CardBody className=" btn-showcase">
                                <Button color="primary" size="sm">Primary Button</Button>
                                <Button color="secondary" size="sm">Secondary Button</Button>
                                <Button color="success" size="sm">Success Button</Button>
                                <Button color="info" size="sm">Info Button</Button>
                                <Button color="warning" size="sm">Warning Button</Button>
                                <Button color="danger" size="sm">Danger Button</Button>
                                <Button color="light" size="sm">Light Button</Button>
                            </CardBody>
                        </Card>
                        <Card id="ex-small-btn">
                            <CardHeader>
                                <h5>Extra Small buttons</h5>
                                <span>Add <code>.btn-xs</code> class for extra small size buttons</span>
                            </CardHeader>
                            <CardBody className=" btn-showcase">
                                <Button color="primary" size="xs">Primary Button</Button>
                                <Button color="secondary" size="xs">Secondary Button</Button>
                                <Button color="success" size="xs">Success Button</Button>
                                <Button color="info" size="xs">Info Button</Button>
                                <Button color="warning" size="xs">Warning Button</Button>
                                <Button color="danger" size="xs">Danger Button</Button>
                                <Button color="light" size="xs">Light Button</Button>
                            </CardBody>
                        </Card>
                        <Card id="active-btn">
                            <CardHeader>
                                <h5>Active Buttons</h5>
                                <span>Add <code>.active</code> class for active state</span>
                            </CardHeader>
                            <CardBody className=" btn-showcase">
                                <Button color="primary" active >Active</Button>
                                <Button color="secondary" active >Active</Button>
                                <Button color="success" active >Active</Button>
                                <Button color="info" active >Active</Button>
                                <Button color="warning" active >Active</Button>
                                <Button color="danger" active >Active</Button>
                                <Button color="light  txt-dark" active >Active</Button>
                            </CardBody>
                        </Card>
                        <Card id="disabled-btn">
                            <CardHeader>
                                <h5>Disabled buttons</h5>
                                <span>Add <code>.disabled</code> class or <code>disabled="disabled"</code> attribute for disabled button</span>
                            </CardHeader>
                            <CardBody className=" btn-showcase">
                                <Button color="primary" disabled>Disabled</Button>
                                <Button color="secondary" disabled>Disabled</Button>
                                <Button color="success" disabled>Disabled</Button>
                                <Button color="info" disabled>Disabled</Button>
                                <Button color="warning" disabled>Disabled</Button>
                                <Button color="danger" disabled>Disabled</Button>
                                <Button color="light" disabled>Disabled</Button>
                            </CardBody>
                        </Card>
                        <Card id="custom-state-button">
                            <CardHeader>
                                <h5>Custom state buttons</h5>
                                <span>The <code>.btn</code> class used with <code>&lt;button&gt;</code>, <code>&lt;a&gt;</code> and <code>&lt;input&gt;</code> elements.</span>
                            </CardHeader>
                            <CardBody className=" btn-showcase">
                                <Button color="primary">Link</Button>
                                <input className="btn btn-secondary" style={{width:""}} type="button" value="Input" data-toggle="tooltip" title="btn btn-secondary" />
                                <input className="btn btn-success" type="submit" value="Submit" data-toggle="tooltip" title="btn btn-success" />
                                <Button color="info" type="submit">Button</Button>
                            </CardBody>
                        </Card>
                        <Card id="outline-button">
                            <CardHeader>
                                <h5>outline buttons</h5>
                                <span>Add <code>.btn-outline-*</code> class for border button</span>
                            </CardHeader>
                            <CardBody className=" btn-showcase">
                                <Button outline color="primary">Primary Button</Button>
                                <Button outline color="secondary">Secondary Button</Button>
                                <Button outline color="success">Success Button</Button>
                                <Button outline color="info">Info Button</Button>
                                <Button outline color="warning">Warning Button</Button>
                                <Button outline color="danger">Danger Button</Button>
                                <Button outline color="light txt-dark">Light Button</Button>
                            </CardBody>
                        </Card>
                        <Card id="outline-bold-button">
                            <CardHeader>
                                <h5>bold Border outline buttons</h5>
                                <span>Add <code>.btn-outline-*-2x</code> class for bold outline</span>
                            </CardHeader>
                            <CardBody className=" btn-showcase">
                                <Button outline color="primary-2x">Primary Button</Button>
                                <Button outline color="secondary-2x">Secondary Button</Button>
                                <Button outline color="success-2x">Success Button</Button>
                                <Button outline color="info-2x">Info Button</Button>
                                <Button outline color="warning-2x">Warning Button</Button>
                                <Button outline color="danger-2x">Danger Button</Button>
                                <Button outline color="light-2x txt-dark">Light Button</Button>
                            </CardBody>
                        </Card>
                        <Card id="outline-large-button">
                            <CardHeader>
                                <h5>outline Large buttons</h5>
                                <span>Add <code>.btn-outline-*</code> class for outline and <code>.btn-lg</code> class for large button</span>
                            </CardHeader>
                            <CardBody className=" btn-showcase">
                                <Button outline color="primary" size="lg">Primary Button</Button>
                                <Button outline color="secondary" size="lg">Secondary Button</Button>
                                <Button outline color="success" size="lg">Success Button</Button>
                                <Button outline color="info" size="lg">Info Button</Button>
                                <Button outline color="warning" size="lg">Warning Button</Button>
                                <Button outline color="danger" size="lg">Danger Button</Button>
                                <Button outline color="light txt-dark" size="lg">Light Button</Button>
                            </CardBody>
                        </Card>
                        <Card id="outline-small-button">
                            <CardHeader>
                                <h5>outline small buttons</h5>
                                <span>Add <code>.btn-outline-*</code> class for outline and <code>.btn-sm</code> class for small button</span>
                            </CardHeader>
                            <CardBody className=" btn-showcase">
                                <Button outline color="primary" size="sm">Primary Button</Button>
                                <Button outline color="secondary" size="sm" >Secondary Button</Button>
                                <Button outline color="success" size="sm">Success Button</Button>
                                <Button outline color="info" size="sm">Info Button</Button>
                                <Button outline color="warning" size="sm">Warning Button</Button>
                                <Button outline color="danger" size="sm">Danger Button</Button>
                                <Button outline color="light txt-dark" size="sm">Light Button</Button>
                            </CardBody>
                        </Card>
                        <Card id="ex-outline-small-button">
                            <CardHeader>
                                <h5>Outline extra small buttons</h5>
                                <span>Add <code>.btn-outline-*</code> class for outline and <code>.btn-xs</code> class for extra small button</span>
                            </CardHeader>
                            <CardBody className=" btn-showcase">
                                <Button outline color="primary " size="xs">Primary Button</Button>
                                <Button outline color="secondary " size="xs">Secondary Button</Button>
                                <Button outline color="success " size="xs">Success Button</Button>
                                <Button outline color="info " size="xs">Info Button</Button>
                                <Button outline color="warning " size="xs">Warning Button</Button>
                                <Button outline color="danger " size="xs">Danger Button</Button>
                                <Button outline color="light txt-dark" size="xs">Light Button</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h5>Disabled outline buttons</h5>
                                <span>Add <code>.disabled</code> class or <code>disabled="disabled"</code> attribute for disabled state</span>
                            </CardHeader>
                            <CardBody className=" btn-showcase">
                                <Button outline color="primary" disabled >Disabled</Button>
                                <Button outline color="secondary" disabled >Disabled</Button>
                                <Button outline color="success" disabled >Disabled</Button>
                                <Button outline color="info" disabled >Disabled</Button>
                                <Button outline color="warning" disabled >Disabled</Button>
                                <Button outline color="danger" disabled >Disabled</Button>
                                <Button outline color="light txt-dark" disabled >Disabled</Button>
                            </CardBody>
                        </Card>
                        <Card id="gradiant">
                            <CardHeader>
                                <h5>Gradien buttons</h5>
                                <span>Add <code>.btn-*-gradien</code> class for gradien button</span>
                            </CardHeader>
                            <CardBody className=" btn-showcase">
                                <Button color="primary-gradien" >Primary Button</Button>
                                <Button color="secondary-gradien" >Secondary Button</Button>
                                <Button color="success-gradien" >Success Button</Button>
                                <Button color="info-gradien" >Info Button</Button>
                                <Button color="warning-gradien" >Warning Button</Button>
                                <Button color="danger-gradien" >Danger Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default DefaultButton;