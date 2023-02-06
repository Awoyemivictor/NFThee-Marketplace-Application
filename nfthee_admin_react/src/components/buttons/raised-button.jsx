import React,{Fragment} from 'react';
import Breadcrumb from '../common/breadcrumb.component';
import {Container,Row,Col,Card,CardHeader,CardBody,Button} from 'reactstrap'

const RaisedButton = () => {
    return (
      <Fragment>
       <Breadcrumb title="Raised Buttons" parent="Buttons"/>
      <Container fluid={true}>
          <Row>
              <Col sm="12">
                  <Card>
                      <CardHeader>
                          <h5>Default buttons</h5>
                          <span>Add <code>.btn-pill</code> and <code>.btn-air-*</code> class  for raised button</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button className="btn-pill btn-air-primary" color="primary" >Primary Button</Button>
                          <Button className="btn-pill btn-air-secondary" color="secondary">Secondary Button</Button>
                          <Button className="btn-pill btn-air-success" color="success">Success Button</Button>
                          <Button className="btn-pill btn-air-info" color="info">Info Button</Button>
                          <Button className="btn-pill btn-air-warning" color="warning">Warning Button</Button>
                          <Button className="btn-pill btn-air-danger" color="danger">Danger Button</Button>
                          <Button className="btn-pill btn-air-light" color="light">Light Button</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>Large buttons</h5>
                          <span>Add <code>.btn-pill</code>,<code>.btn-air-*</code> and <code>.btn-lg</code> class for large button</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button className="btn-pill btn-air-primary" size="lg" color="primary">Primary Button</Button>
                          <Button className="btn-pill btn-air-secondary" size="lg" color="secondary">Secondary Button</Button>
                          <Button className="btn-pill btn-air-success" size="lg" color="success">Success Button</Button>
                          <Button className="btn-pill btn-air-info" size="lg" color="info">Info Button</Button>
                          <Button className="btn-pill btn-air-warning" size="lg" color="warning">Warning Button</Button>
                          <Button className="btn-pill btn-air-danger" size="lg" color="danger">Danger Button</Button>
                          <Button className="btn-pill btn-air-light" size="lg" color="light">Light Button</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>Small buttons</h5>
                          <span>Add <code>.btn-pill</code>,<code>.btn-air-*</code> and <code>.btn-sm</code> class for small button</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button   className="btn-pill btn-air-primary"   color="primary" size="sm">Primary Button</Button>
                          <Button   className="btn-pill btn-air-secondary"  color="secondary" size="sm">Secondary Button</Button>
                          <Button   className="btn-pill btn-air-success"  color="success" size="sm">Success Button</Button>
                          <Button   className="btn-pill btn-air-info"  color="info" size="sm">Info Button</Button>
                          <Button   className="btn-pill btn-air-warning"  color="warning" size="sm">Warning Button</Button>
                          <Button   className="btn-pill btn-air-danger"  color="danger" size="sm">Danger Button</Button>
                          <Button   className="btn-pill btn-air-light" color="light" size="sm">Light Button</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>Extra Small buttons</h5>
                          <span>Add <code>.btn-pill</code>,<code>.btn-air-*</code> and <code>.btn-xs</code> class for extra small button</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button  className="btn-pill btn-air-primary"   color="primary" size="xs">Primary Button</Button>
                          <Button  className="btn-pill btn-air-secondary"  color="secondary" size="xs">Secondary Button</Button>
                          <Button  className="btn-pill btn-air-success"  color="success" size="xs">Success Button</Button>
                          <Button  className="btn-pill btn-air-info"  color="info" size="xs">Info Button</Button>
                          <Button  className="btn-pill btn-air-warning"  color="warning" size="xs">Warning Button</Button>
                          <Button  className="btn-pill btn-air-danger"  color="danger" size="xs">Danger Button</Button>
                          <Button  className="btn-pill btn-air-light" color="light" size="xs">Light Button</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>Active Buttons</h5>
                          <span>Add <code>.active</code> for active state</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button  className="btn-pill btn-air-primary"   color="primary" active >Active</Button>
                          <Button  className="btn-pill btn-air-secondary"  color="secondary" active >Active</Button>
                          <Button  className="btn-pill btn-air-success"  color="success" active >Active</Button>
                          <Button  className="btn-pill btn-air-info"  color="info" active >Active</Button>
                          <Button  className="btn-pill btn-air-warning"  color="warning" active >Active</Button>
                          <Button  className="btn-pill btn-air-danger"  color="danger" active >Active</Button>
                          <Button  className="btn-pill btn-air-light" color="light  txt-dark" active >Active</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>Disabled buttons</h5>
                          <span>Add <code>.disabled</code> class or <code>disabled="disabled"</code> attribute for disabled button</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button  className="btn-pill btn-air-primary"   color="primary" disabled>Disabled</Button>
                          <Button  className="btn-pill btn-air-secondary"  color="secondary" disabled>Disabled</Button>
                          <Button  className="btn-pill btn-air-success"  color="success" disabled>Disabled</Button>
                          <Button  className="btn-pill btn-air-info"  color="info" disabled>Disabled</Button>
                          <Button  className="btn-pill btn-air-warning"  color="warning" disabled>Disabled</Button>
                          <Button  className="btn-pill btn-air-danger"  color="danger" disabled>Disabled</Button>
                          <Button  className="btn-pill btn-air-light" color="light" disabled>Disabled</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>Custom state buttons</h5>
                          <span>The <code>.btn</code> class used with <code>&lt;button&gt;</code>, <code>&lt;a&gt;</code> and <code>&lt;input&gt;</code> elements.</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                            <Button className="btn btn-pill btn-air-primary" color="primary">Link</Button>
                            <input className="btn btn-pill btn-air-secondary btn-secondary" type="button" value="Input" data-toggle="tooltip" title="btn btn-secondary" />
                            <input className="btn btn-pill btn-air-success btn-success" type="submit" value="Submit" data-toggle="tooltip" title="btn btn-success" />
                          <Button className="btn btn-pill btn-air-info" color="info">Button</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>outline buttons</h5>
                          <span>Add <code>.btn-pill</code>,<code>.btn-air-*</code> and <code>.btn-outline-*</code> class for button with outline</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button   className="btn-pill btn-air-primary"   outline color="primary">Primary Button</Button>
                          <Button   className="btn-pill btn-air-secondary"  outline color="secondary">Secondary Button</Button>
                          <Button   className="btn-pill btn-air-success"  outline color="success">Success Button</Button>
                          <Button   className="btn-pill btn-air-info"  outline color="info">Info Button</Button>
                          <Button   className="btn-pill btn-air-warning"  outline color="warning">Warning Button</Button>
                          <Button   className="btn-pill btn-air-danger"  outline color="danger">Danger Button</Button>
                          <Button   className="btn-pill btn-air-light" outline color="light txt-dark">Light Button</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>bold Border outline buttons</h5>
                          <span>Add <code>.btn-pill</code>,<code>.btn-air-*</code> and <code>.btn-outline-*-2x</code> class for button with bold outline</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button  className="btn-pill btn-air-primary"   outline color="primary-2x">Primary Button</Button>
                          <Button  className="btn-pill btn-air-secondary"  outline color="secondary-2x">Secondary Button</Button>
                          <Button  className="btn-pill btn-air-success"  outline color="success-2x">Success Button</Button>
                          <Button  className="btn-pill btn-air-info"  outline color="info-2x">Info Button</Button>
                          <Button  className="btn-pill btn-air-warning"  outline color="warning-2x">Warning Button</Button>
                          <Button  className="btn-pill btn-air-danger"  outline color="danger-2x">Danger Button</Button>
                          <Button  className="btn-pill btn-air-light" outline color="light-2x txt-dark">Light Button</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>outline Large buttons</h5>
                          <span><code>.btn-pill</code>,<code>.btn-air-*</code>,<code>.btn-outline-*</code> and <code>.btn-lg</code> class for large button with outline</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button  className="btn-pill btn-air-primary"    outline color="primary" size="lg">Primary Button</Button>
                          <Button  className="btn-pill btn-air-secondary"   outline color="secondary" size="lg">Secondary Button</Button>
                          <Button  className="btn-pill btn-air-success"   outline color="success" size="lg">Success Button</Button>
                          <Button  className="btn-pill btn-air-info"   outline color="info" size="lg">Info Button</Button>
                          <Button  className="btn-pill btn-air-warning"   outline color="warning" size="lg">Warning Button</Button>
                          <Button  className="btn-pill btn-air-danger"   outline color="danger" size="lg">Danger Button</Button>
                          <Button  className="btn-pill btn-air-light"  outline color="light txt-dark" size="lg">Light Button</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>outline small buttons</h5>
                          <span><code>.btn-pill</code>,<code>.btn-air-*</code>,<code>.btn-outline-*</code> and <code>.btn-sm</code> class for small button with outline</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button  className="btn-pill btn-air-primary"   outline color="primary" size="sm">Primary Button</Button>
                          <Button  className="btn-pill btn-air-secondary"  outline color="secondary" size="sm" >Secondary Button</Button>
                          <Button  className="btn-pill btn-air-success"  outline color="success" size="sm">Success Button</Button>
                          <Button  className="btn-pill btn-air-info"  outline color="info" size="sm">Info Button</Button>
                          <Button  className="btn-pill btn-air-warning"  outline color="warning" size="sm">Warning Button</Button>
                          <Button  className="btn-pill btn-air-danger"  outline color="danger" size="sm">Danger Button</Button>
                          <Button  className="btn-pill btn-air-light" outline color="light txt-dark" size="sm">Light Button</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>outline Extra small buttons</h5>
                          <span><code>.btn-pill</code>,<code>.btn-air-*</code>,<code>.btn-outline-*</code> and <code>.btn-xs</code> class for extra small button with outline</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button  className="btn-pill btn-air-primary"   outline color="primary " size="xs">Primary Button</Button>
                          <Button  className="btn-pill btn-air-secondary"  outline color="secondary " size="xs">Secondary Button</Button>
                          <Button  className="btn-pill btn-air-success"  outline color="success " size="xs">Success Button</Button>
                          <Button  className="btn-pill btn-air-info"  outline color="info " size="xs">Info Button</Button>
                          <Button  className="btn-pill btn-air-warning"  outline color="warning " size="xs">Warning Button</Button>
                          <Button  className="btn-pill btn-air-danger"  outline color="danger " size="xs">Danger Button</Button>
                          <Button  className="btn-pill btn-air-light" outline color="light txt-dark" size="xs">Light Button</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>Disabled outline buttons</h5>
                          <span>Add <code>.disabled</code> class or <code>disabled="disabled"</code> attribute for disabled button</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button  className="btn-pill btn-air-primary"   outline color="primary" disabled >Disabled</Button>
                          <Button  className="btn-pill btn-air-secondary"  outline color="secondary" disabled >Disabled</Button>
                          <Button  className="btn-pill btn-air-success"  outline color="success" disabled >Disabled</Button>
                          <Button  className="btn-pill btn-air-info"  outline color="info" disabled >Disabled</Button>
                          <Button  className="btn-pill btn-air-warning"  outline color="warning" disabled >Disabled</Button>
                          <Button  className="btn-pill btn-air-danger"  outline color="danger" disabled >Disabled</Button>
                          <Button  className="btn-pill btn-air-light" outline color="light txt-dark" disabled >Disabled</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>Gradien buttons</h5>
                          <span><code>.btn-pill</code>,<code>.btn-air-*</code>,<code>.btn-*</code> and <code>.btn-*-gradien</code> class for gradien button</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button className="btn-pill btn-air-primary"  color="primary-gradien" >Primary Button</Button>
                          <Button className="btn-pill btn-air-secondary"  color="secondary-gradien" >Secondary Button</Button>
                          <Button className="btn-pill btn-air-success"  color="success-gradien" >Success Button</Button>
                          <Button className="btn-pill btn-air-info"  color="info-gradien" >Info Button</Button>
                          <Button className="btn-pill btn-air-warning"  color="warning-gradien" >Warning Button</Button>
                          <Button className="btn-pill btn-air-danger"  color="danger-gradien" >Danger Button</Button>
                          <Button className="btn-pill btn-air-light"  color="danger-gradien" >Light Button</Button>
                      </CardBody>
                  </Card>
              </Col>
          </Row>
      </Container>
      </Fragment>
    );
};

export default RaisedButton;