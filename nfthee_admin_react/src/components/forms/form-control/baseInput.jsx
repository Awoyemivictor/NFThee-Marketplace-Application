import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb.component';
import {Container,Row,Col,Card,CardHeader,CardBody,CardFooter,Button,Form,FormGroup,Label,Input} from 'reactstrap'
const BaseInput = () => {
  return (
    <Fragment>
      <Breadcrumb title="Basic Input" parent="Form"/>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Basic form control</h5>
              </CardHeader>
              <Form className="form theme-form">
                <CardBody>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label htmlFor="exampleFormControlInput1">Email address</Label>
                        <Input className="form-control"  type="email" placeholder="name@example.com" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label htmlFor="exampleInputPassword2">Password</Label>
                        <Input className="form-control"  type="password" placeholder="Password" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label htmlFor="exampleFormControlSelect9">Example select</Label>
                        <Input type="select" name="select" className="form-control digits" defaultValue="1">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label htmlFor="exampleFormControlSelect3">Example multiple select</Label>
                        <Input type="select" name="select" className="form-control digits"  multiple="" defaultValue="1">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Label>Example textarea</Label>
                        <Input type="textarea" className="form-control"  rows="3"/>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <Button  color="primary" className="mr-1" >Submit</Button>
                  <Button className="btn btn-light" type="reset" >Cancel</Button>
                </CardFooter>
              </Form>
            </Card>
            <Card>
              <CardHeader>
                <h5>Basic HTML input control</h5>
              </CardHeader>
              <Form className="form theme-form">
                <CardBody>
                  <Row>
                    <Col>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Simple Input</Label>
                        <Col sm="9">
                          <Input className="form-control" type="text" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Placeholder</Label>
                        <Col sm="9">
                          <Input className="form-control" type="text" placeholder="Type your title in Placeholder" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Password</Label>
                        <Col sm="9">
                          <Input className="form-control" type="password" placeholder="Password input" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Number</Label>
                        <Col sm="9">
                          <Input className="form-control digits" type="number" placeholder="Number" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Telephone</Label>
                        <Col sm="9">
                          <Input className="form-control m-input digits" type="tel" defaultValue="91-(999)-999-999" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">URL</Label>
                        <Col sm="9">
                          <Input className="form-control" type="url" defaultValue="https://getbootstrap.com" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Date and time</Label>
                        <Col sm="9">
                          <Input className="form-control digits" id="example-datetime-local-input" type="datetime-local" defaultValue="2018-01-19T18:45:00" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Date</Label>
                        <Col sm="9">
                          <Input className="form-control digits" type="date" defaultValue="2018-01-01" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Month</Label>
                        <Col sm="9">
                          <Input className="form-control digits" type="month" defaultValue="2018-01" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Week</Label>
                        <Col sm="9">
                          <Input className="form-control digits" type="week" defaultValue="2018-W09" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Time</Label>
                        <Col sm="9">
                          <Input className="form-control digits" type="time" defaultValue="21:45:00" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label pt-0">Color picker</Label>
                        <Col sm="9">
                          <Input className="form-control" style={{ height: '35px' }} type="color" defaultValue="#563d7c" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">
                          Maximum
                          Length
                        </Label>
                        <Col sm="9">
                          <Input className="form-control" type="text" placeholder="Content must be in 6 characters" maxLength="6" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label pt-0">Static Text</Label>
                        <Col sm="9">
                          <div className="form-control-static">
                            Hello !... This is
                            static text
                          </div>
                        </Col>
                      </FormGroup>
                      <FormGroup className="row mb-0">
                        <Label className="col-sm-3 col-form-label">Textarea</Label>
                        <Col sm="9">
                          <textarea className="form-control" rows="5" cols="5" placeholder="Default textarea"></textarea>
                        </Col>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <Col sm="9 offset-sm-3">
                    <Button  color="primary" className="mr-1">Submit</Button>
                    <Button className="btn btn-light" type="reset" >Cancel</Button>
                  </Col>
                </CardFooter>
              </Form>
            </Card>
            <Card>
              <CardHeader>
                <h5>Edges input style</h5>
              </CardHeader>
              <Form className="form theme-form">
                <CardBody>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>Email address</Label>
                        <Input className="form-control btn-pill" id="exampleFormControlInput5" type="email" placeholder="name@example.com" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>Password</Label>
                        <Input className="form-control btn-pill" id="exampleInputPassword6" type="password" placeholder="Password" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>Example select</Label>
                        <Input type="select" name="select" className="form-control btn-pill digits" id="exampleFormControlSelect7">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>Example multiple select</Label>
                        <Input type="select" name="select" className="form-control btn-pill digits" multiple="">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Label htmlFor="exampleFormControlTextarea9">Example textarea</Label>
                        <Input type="textarea" className="form-control btn-pill"  rows="3"/>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <Button color="primary" className="mr-1">Submit</Button>
                  <Button className="btn btn-light" type="reset" >Cancel</Button>
                </CardFooter>
              </Form>
            </Card>
            <Card>
              <CardHeader>
                <h5>Flat input style</h5>
              </CardHeader>
              <Form className="form theme-form">
                <CardBody>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>Email address</Label>
                        <Input className="form-control btn-square"  type="email" placeholder="name@example.com" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>Password</Label>
                        <Input className="form-control btn-square"  type="password" placeholder="Password" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>Example select</Label>
                        <Input type="select" name="select" className="form-control btn-square digits" >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>Example multiple select</Label>
                        <Input type="select" name="select" className="form-control btn-square digits"  multiple="">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Label>Example textarea</Label>
                        <Input type="textarea" className="form-control btn-square"  rows="3"/>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <Button color="primary" className="mr-1">Submit</Button>
                  <Button className="btn btn-light" type="reset" >Cancel</Button>
                </CardFooter>
              </Form>
            </Card>
            <Card>
              <CardHeader>
                <h5>Raise input style</h5>
              </CardHeader>
              <Form className="form theme-form">
                <CardBody>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>Email address</Label>
                        <Input className="form-control input-air-primary"  type="email" placeholder="name@example.com" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>Password</Label>
                        <Input className="form-control input-air-primary"  type="password" placeholder="Password" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>Example select</Label>
                        <Input type="select" name="select" className="form-control input-air-primary digits">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>Example multiple select</Label>
                        <Input type="select" name="select" className="form-control input-air-primary digits"  multiple="">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Label>Example textarea</Label>
                        <Input type="textarea" className="form-control input-air-primary"  rows="3" />
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <Button color="primary" className="mr-1">Submit</Button>
                  <Button className="btn btn-light" type="reset" >Cancel</Button>
                </CardFooter>
              </Form>
            </Card>
            <Card>
              <CardHeader>
                <h5>Solid input style</h5>
              </CardHeader>
              <Form className="form theme-form">
                <CardBody>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>Email address</Label>
                        <Input className="form-control" type="email" placeholder="name@example.com" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>Password</Label>
                        <Input className="form-control"  type="password" placeholder="Password" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>Disabled</Label>
                        <Input className="form-control"  type="text" disabled="" placeholder="Disabled" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>Example select</Label>
                        <Input type="select" name="select" className="form-control digits">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>Example multiple select</Label>
                        <Input type="select" name="select" className="form-control digits" multiple="">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Label >Example textarea</Label>
                        <Input type="textarea" className="form-control"  rows="3"/>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <Button color="primary" className="mr-1">Submit</Button>
                  <Button className="btn btn-light" type="reset" >Cancel</Button>
                </CardFooter>
              </Form>
            </Card>
            <Card>
              <CardHeader>
                <h5>Input sizing</h5>
              </CardHeader>
              <Form className="form theme-form">
                <CardBody>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label className="col-form-label-sm">Large input</Label>
                        <Input className="form-control form-control-lg"  type="text" placeholder="col-form-label-lg" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>Default input</Label>
                        <Input className="form-control"  type="text" placeholder="form-control" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label className="col-form-label-sm">Small input</Label>
                        <Input className="form-control form-control-sm"  type="text" placeholder="col-form-label-sm" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>Large select</Label>
                        <Input type="select" name="select" className="form-control form-control-lg digits">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>Default select</Label>
                        <Input type="select" name="select" className="form-control digits" >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Label>Small select</Label>
                        <Input type="select" name="select" className="form-control form-control-sm digits">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <Button color="primary" className="mr-1">Submit</Button>
                  <Button className="btn btn-light" type="reset" >Cancel</Button>
                </CardFooter>
              </Form>
            </Card>
            <Card>
              <CardHeader>
                <h5>Custom controls</h5>
              </CardHeader>
              <Form className="form theme-form">
                <CardBody>
                  <Row>
                    <Col>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Upload File</Label>
                        <Col sm="9">
                          <Input className="form-control" type="file" />
                        </Col>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="row mb-0">
                        <Label className="col-sm-3 col-form-label">Custom select</Label>
                        <Col sm="9">
                          <Input type="select" name="select" className="custom-select form-control">
                            <option select="">Open this select menu</option>
                            <option defaultValue="1">One</option>
                            <option defaultValue="2">Two</option>
                            <option defaultValue="3">Three</option>
                          </Input>
                        </Col>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <Button color="primary" className="mr-1">Submit</Button>
                  <Button className="btn btn-light" type="reset" >Cancel</Button>
                </CardFooter>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default BaseInput;