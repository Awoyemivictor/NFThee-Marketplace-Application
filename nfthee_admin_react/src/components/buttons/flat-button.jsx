import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb.component';
import {Container,Row,Col,Card,CardHeader,CardBody,Button} from 'reactstrap'

const FlatButton = () => {
    return (
        <Fragment>
            <Breadcrumb title="Flat Buttons" parent="Buttons"/>
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Default buttons</h5>
                                <span>Add <code>.btn-square</code> class for flat button</span>
                            </CardHeader>
                            <CardBody className="btn-showcase">
                                <Button className="btn-square" color="primary" >Primary Button</Button>
                                <Button className="btn-square" color="secondary">Secondary Button</Button>
                                <Button className="btn-square" color="success">Success Button</Button>
                                <Button className="btn-square" color="info">Info Button</Button>
                                <Button className="btn-square" color="warning">Warning Button</Button>
                                <Button className="btn-square" color="danger">Danger Button</Button>
                                <Button className="btn-square" color="light">Light Button</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h5>Large buttons</h5>
                                <span>Add <code>.btn-square</code> and <code>.btn-lg</code> class for large button</span>
                            </CardHeader>
                            <CardBody className="btn-showcase">
                                <Button className="btn-square" size="lg" color="primary">Primary Button</Button>
                                <Button className="btn-square" size="lg" color="secondary">Secondary Button</Button>
                                <Button className="btn-square" size="lg" color="success">Success Button</Button>
                                <Button className="btn-square" size="lg" color="info">Info Button</Button>
                                <Button className="btn-square" size="lg" color="warning">Warning Button</Button>
                                <Button className="btn-square" size="lg" color="danger">Danger Button</Button>
                                <Button className="btn-square" size="lg" color="light">Light Button</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h5>Small buttons</h5>
                                <span>Add <code>.btn-square</code> and <code>.btn-sm</code> class for small button</span>
                            </CardHeader>
                            <CardBody className="btn-showcase">
                                <Button  className="btn-square" color="primary" size="sm">Primary Button</Button>
                                <Button  className="btn-square" color="secondary" size="sm">Secondary Button</Button>
                                <Button  className="btn-square" color="success" size="sm">Success Button</Button>
                                <Button  className="btn-square" color="info" size="sm">Info Button</Button>
                                <Button  className="btn-square" color="warning" size="sm">Warning Button</Button>
                                <Button  className="btn-square" color="danger" size="sm">Danger Button</Button>
                                <Button  className="btn-square" color="light" size="sm">Light Button</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h5>Extra Small buttons</h5>
                                <span>Add <code>.btn-square</code> and <code>.btn-xs</code> class for extra small button</span>
                            </CardHeader>
                            <CardBody className="btn-showcase">
                                <Button className="btn-square" color="primary" size="xs">Primary Button</Button>
                                <Button className="btn-square" color="secondary" size="xs">Secondary Button</Button>
                                <Button className="btn-square" color="success" size="xs">Success Button</Button>
                                <Button className="btn-square" color="info" size="xs">Info Button</Button>
                                <Button className="btn-square" color="warning" size="xs">Warning Button</Button>
                                <Button className="btn-square" color="danger" size="xs">Danger Button</Button>
                                <Button className="btn-square" color="light" size="xs">Light Button</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h5>Active Buttons</h5>
                                <span>Add <code>.active</code> for active state</span>
                            </CardHeader>
                            <CardBody className="btn-showcase">
                                <Button className="btn-square" color="primary" active >Active</Button>
                                <Button className="btn-square" color="secondary" active >Active</Button>
                                <Button className="btn-square" color="success" active >Active</Button>
                                <Button className="btn-square" color="info" active >Active</Button>
                                <Button className="btn-square" color="warning" active >Active</Button>
                                <Button className="btn-square" color="danger" active >Active</Button>
                                <Button className="btn-square" color="light  txt-dark" active >Active</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h5>Disabled buttons</h5>
                                <span>Add <code>.disabled</code> class or <code>disabled="disabled"</code> attribute for disabled button</span>
                            </CardHeader>
                            <CardBody className="btn-showcase">
                                <Button className="btn-square" color="primary" disabled>Disabled</Button>
                                <Button className="btn-square" color="secondary" disabled>Disabled</Button>
                                <Button className="btn-square" color="success" disabled>Disabled</Button>
                                <Button className="btn-square" color="info" disabled>Disabled</Button>
                                <Button className="btn-square" color="warning" disabled>Disabled</Button>
                                <Button className="btn-square" color="danger" disabled>Disabled</Button>
                                <Button className="btn-square" color="light" disabled>Disabled</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h5>Custom state buttons</h5>
                                <span>The <code>.btn</code> class used with <code>&lt;button&gt;</code>, <code>&lt;a&gt;</code> and <code>&lt;input&gt;</code> elements.</span>
                            </CardHeader>
                            <CardBody className="btn-showcase"><a className="btn btn-square btn-primary" href="#javaScript" data-toggle="tooltip" title="btn btn-primary" role="button">Link</a>
                                <input className="btn btn-square btn-secondary" type="button" value="Input" data-toggle="tooltip" title="btn btn-secondary" />
                                <input className="btn btn-square btn-success" type="submit" value="Submit" data-toggle="tooltip" title="btn btn-success" />
                                <button className="btn btn-square btn-info" type="submit">Button</button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h5>outline buttons</h5>
                                <span>Add <code>.btn-square</code> and <code>.btn-outline-*</code> class for button with outline</span>
                            </CardHeader>
                            <CardBody className="btn-showcase">
                                <Button  className="btn-square" outline color="primary">Primary Button</Button>
                                <Button  className="btn-square" outline color="secondary">Secondary Button</Button>
                                <Button  className="btn-square" outline color="success">Success Button</Button>
                                <Button  className="btn-square" outline color="info">Info Button</Button>
                                <Button  className="btn-square" outline color="warning">Warning Button</Button>
                                <Button  className="btn-square" outline color="danger">Danger Button</Button>
                                <Button  className="btn-square" outline color="light txt-dark">Light Button</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h5>bold Border outline buttons</h5>
                                <span>Add <code>.btn-square</code> and <code>.btn-outline-*-2x</code> class for button with bold outline</span>
                            </CardHeader>
                            <CardBody className="btn-showcase">
                                <Button className="btn-square" outline color="primary-2x">Primary Button</Button>
                                <Button className="btn-square" outline color="secondary-2x">Secondary Button</Button>
                                <Button className="btn-square" outline color="success-2x">Success Button</Button>
                                <Button className="btn-square" outline color="info-2x">Info Button</Button>
                                <Button className="btn-square" outline color="warning-2x">Warning Button</Button>
                                <Button className="btn-square" outline color="danger-2x">Danger Button</Button>
                                <Button className="btn-square" outline color="light-2x txt-dark">Light Button</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h5>outline Large buttons</h5>
                                <span>Add <code>.btn-square</code>,<code>.btn-outline-*</code> and <code>.btn-lg</code> class for large button</span>
                            </CardHeader>
                            <CardBody className="btn-showcase">
                                <Button className="btn-square"  outline color="primary" size="lg">Primary Button</Button>
                                <Button className="btn-square"  outline color="secondary" size="lg">Secondary Button</Button>
                                <Button className="btn-square"  outline color="success" size="lg">Success Button</Button>
                                <Button className="btn-square"  outline color="info" size="lg">Info Button</Button>
                                <Button className="btn-square"  outline color="warning" size="lg">Warning Button</Button>
                                <Button className="btn-square"  outline color="danger" size="lg">Danger Button</Button>
                                <Button className="btn-square"  outline color="light txt-dark" size="lg">Light Button</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h5>outline small buttons</h5>
                                <span>Add <code>.btn-square</code>,<code>.btn-outline-*</code> and <code>.btn-sm</code> class for small button</span>
                            </CardHeader>
                            <CardBody className="btn-showcase">
                                <Button className="btn-square" outline color="primary" size="sm">Primary Button</Button>
                                <Button className="btn-square" outline color="secondary" size="sm" >Secondary Button</Button>
                                <Button className="btn-square" outline color="success" size="sm">Success Button</Button>
                                <Button className="btn-square" outline color="info" size="sm">Info Button</Button>
                                <Button className="btn-square" outline color="warning" size="sm">Warning Button</Button>
                                <Button className="btn-square" outline color="danger" size="sm">Danger Button</Button>
                                <Button className="btn-square" outline color="light txt-dark" size="sm">Light Button</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h5>outline Extra small buttons</h5>
                                <span>Add <code>.btn-square</code>,<code>.btn-outline-*</code> and <code>.btn-xs</code> class for extra small button</span>
                            </CardHeader>
                            <CardBody className="btn-showcase">
                                <Button className="btn-square" outline color="primary " size="xs">Primary Button</Button>
                                <Button className="btn-square" outline color="secondary " size="xs">Secondary Button</Button>
                                <Button className="btn-square" outline color="success " size="xs">Success Button</Button>
                                <Button className="btn-square" outline color="info " size="xs">Info Button</Button>
                                <Button className="btn-square" outline color="warning " size="xs">Warning Button</Button>
                                <Button className="btn-square" outline color="danger " size="xs">Danger Button</Button>
                                <Button className="btn-square" outline color="light txt-dark" size="xs">Light Button</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h5>Disabled outline buttons</h5>
                                <span>Add <code>.disabled</code> class or <code>disabled="disabled"</code> attribute for disabled button</span>
                            </CardHeader>
                            <CardBody className="btn-showcase">
                                <Button className="btn-square" outline color="primary" disabled >Disabled</Button>
                                <Button className="btn-square" outline color="secondary" disabled >Disabled</Button>
                                <Button className="btn-square" outline color="success" disabled >Disabled</Button>
                                <Button className="btn-square" outline color="info" disabled >Disabled</Button>
                                <Button className="btn-square" outline color="warning" disabled >Disabled</Button>
                                <Button className="btn-square" outline color="danger" disabled >Disabled</Button>
                                <Button className="btn-square" outline color="light txt-dark" disabled >Disabled</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h5>Gradien buttons</h5>
                                <span>Add <code>.btn-square</code> and <code>.btn-*-gradien</code> class for gradien button</span>
                            </CardHeader>
                            <CardBody className="btn-showcase">
                                <Button className="btn-square"  color="primary-gradien" >Primary Button</Button>
                                <Button className="btn-square"  color="secondary-gradien" >Secondary Button</Button>
                                <Button className="btn-square"  color="success-gradien" >Success Button</Button>
                                <Button className="btn-square"  color="info-gradien" >Info Button</Button>
                                <Button className="btn-square"  color="warning-gradien" >Warning Button</Button>
                                <Button className="btn-square"  color="danger-gradien" >Danger Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default FlatButton;