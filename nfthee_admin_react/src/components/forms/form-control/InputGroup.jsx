import React,{Fragment} from 'react';
import Breadcrumb from '../../common/breadcrumb.component';
import {Container,Row,Col,Card,CardHeader,CardBody,CardFooter,Button,Form,FormGroup,Label,Input,InputGroup,InputGroupAddon ,InputGroupText} from 'reactstrap'
const InputGroups = (props) =>  {
    return (
      <Fragment>
        <Breadcrumb title="Input Groups" parent="Form"/>
        <Container fluid={true}>
            <Row>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>Basic Input groups</h5>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col>
                        <Form>
                          <FormGroup className=" m-form__group">
                            <Label>Left Addon</Label>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend"><InputGroupText>@</InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" placeholder="Email"/>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <Label>Right Addon</Label>
                            <InputGroup>
                              <Input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username"/>
                              <InputGroupAddon addonType="append"><InputGroupText>@example.com</InputGroupText></InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className="">
                            <Label>Joint Addon</Label>
                            <InputGroup>
                               <InputGroupAddon addonType="prepend"><InputGroupText>$</InputGroupText><InputGroupText>0.00</InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" aria-label="Amount (to the nearest dollar)"/>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className=" mb-0">
                            <Label>Left & Right Addon</Label>
                            <InputGroup className="mb-3">
                               <InputGroupAddon addonType="prepend"><InputGroupText>$</InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" aria-label="Amount (to the nearest dollar)"/>
                              <InputGroupAddon addonType="append"><InputGroupText>.00</InputGroupText></InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className=" input-group-solid">
                            <Label>Solid style</Label>
                            <InputGroup>
                               <InputGroupAddon addonType="prepend"><InputGroupText>@</InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" placeholder="Email"/>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className=" input-group-square">
                            <Label>Square style</Label>
                            <InputGroup>
                               <InputGroupAddon addonType="prepend"><InputGroupText>+</InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" placeholder="Email"/>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className=" input-group-square">
                            <Label>Raise style</Label>
                            <InputGroup className="input-group-air">
                               <InputGroupAddon addonType="prepend"><InputGroupText>#</InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" placeholder="Email"/>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className=" mb-0">
                            <Label>Left & Right Addon</Label>
                            <InputGroup className="pill-input-group">
                               <InputGroupAddon addonType="prepend"><InputGroupText>$</InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" aria-label="Amount (to the nearest dollar)"/>
                              <InputGroupAddon addonType="append"><InputGroupText>.00</InputGroupText></InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                        </Form>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <Button color="primary" className="m-r-15">Submit</Button>
                    <Button color="light">Cancel</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <h5>Basic Input groups</h5>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col>
                        <Form>
                          <FormGroup className=" m-form__group">
                            <Label>Left Addon</Label>
                            <InputGroup>
                               <InputGroupAddon addonType="prepend"><InputGroupText><i className="icofont icofont-pencil-alt-5"></i></InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" placeholder="Email"/>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className="">
                            <Label>Right Addon</Label>
                            <InputGroup>
                              <Input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username"/>
                              <InputGroupAddon addonType="append"><InputGroupText><i className="icofont icofont-ui-dial-phone"></i></InputGroupText></InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className="">
                            <Label>Joint Addon</Label>
                            <InputGroup>
                               <InputGroupAddon addonType="prepend"><InputGroupText><i className="icofont icofont-unlink"></i></InputGroupText><InputGroupText>0.00</InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" aria-label="Amount (to the nearest dollar)"/>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className="">
                            <Label>Left & Right Addon</Label>
                            <InputGroup className="mb-3">
                               <InputGroupAddon addonType="prepend"><InputGroupText><i className="icofont icofont-ui-zoom-out"></i></InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" aria-label="Amount (to the nearest dollar)"/>
                              <InputGroupAddon addonType="append"><InputGroupText><i className="icofont icofont-ui-zoom-in"></i></InputGroupText></InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className=" input-group-solid">
                            <Label>Solid style</Label>
                            <InputGroup>
                               <InputGroupAddon addonType="prepend"><InputGroupText><i className="icofont icofont-users"></i></InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" placeholder="999999"/>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className=" input-group-square">
                            <Label>Flat style</Label>
                            <InputGroup>
                               <InputGroupAddon addonType="prepend"><InputGroupText><i className="icofont icofont-credit-card"></i></InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" placeholder=""/>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className=" input-group-square">
                            <Label>Raise style</Label>
                            <InputGroup>
                               <InputGroupAddon addonType="prepend"><InputGroupText><i className="icofont icofont-download"></i></InputGroupText></InputGroupAddon>
                              <Input className="form-control input-group-air" type="text" placeholder="https://www.example.com"/>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className=" mb-0">
                            <Label>Left & Right Addon</Label>
                            <InputGroup className="pill-input-group">
                               <InputGroupAddon addonType="prepend"><InputGroupText><i className="icofont icofont-ui-copy"></i></InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" aria-label="Amount (to the nearest dollar)"/>
                              <InputGroupAddon addonType="append"><InputGroupText><i className="icofont icofont-stock-search"></i></InputGroupText></InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                        </Form>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <Button color="primary"  className="m-r-15">Submit</Button>
                    <Button color="light">Cancel</Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
          </Fragment>
    );
}

export default InputGroups;