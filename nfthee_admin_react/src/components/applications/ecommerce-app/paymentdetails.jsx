import React, { Fragment } from "react";
import Breadcrumb from '../../common/breadcrumb.component'
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  Button
} from "reactstrap";
const Productdetails = props => {
  return (
    <Fragment>
      <Breadcrumb title="Payment Details" parent="Ecommerce"/>
      <Container fluid={true} className="credit-card">
        <Row>
          <Col xl="8" className="set-col-12">
            <Card className="height-equal credit-form">
              <CardHeader>
                <h5>Credit card </h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="4" className="text-center">
                    <img
                      className="img-fluid"
                      src={require("../../../assets/images/ecommerce/card.png")}
                      alt=""
                    />
                  </Col>
                  <Col md="8">
                    <Form className="theme-form mega-form">
                      <FormGroup>
                        <Input
                          className="form-control"
                          type="text"
                          placeholder="Card number"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          className="form-control"
                          type="text"
                          placeholder="First Name"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input className="form-control" type="date" />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          className="form-control"
                          type="text"
                          placeholder="Full Name"
                        />
                      </FormGroup>
                    </Form>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4" lg="6" className="set-col-6 debit-card">
            <Card className="height-equal">
              <CardHeader>
                <h5>Debit card </h5>
              </CardHeader>
              <CardBody>
                <Row className="theme-form e-commerce-form" form>
                  <FormGroup className="col-6 p-r-0">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Full name here"
                    />
                  </FormGroup>
                  <FormGroup className="col-6">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Card number"
                    />
                  </FormGroup>
                  <FormGroup className="col-6 p-r-0">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="CVV number"
                    />
                  </FormGroup>
                  <FormGroup className="col-6">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="CVC"
                    />
                  </FormGroup>
                  <div className="col-12">
                    <label className="col-form-label p-t-0">
                      Expiration Date
                    </label>
                  </div>
                  <FormGroup className="col-6 p-r-0">
                    <select className="form-control" size="1">
                      <option>Select Month</option>
                      <option>Jan</option>
                      <option>Fab</option>
                      <option>March</option>
                      <option>April</option>
                    </select>
                  </FormGroup>
                  <FormGroup className="col-6">
                    <select className="form-control" size="1">
                      <option>Select Year</option>
                      <option>2015</option>
                      <option>2016</option>
                      <option>2017</option>
                      <option>2018</option>
                      <option>2021</option>
                    </select>
                  </FormGroup>
                  <div className="col-12">
                    <Button color="primary-gradien" className="btn-block">
                      Submit
                    </Button>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4" lg="6" className="set-col-6">
            <Card>
              <CardHeader>
                <h5>COD</h5>
              </CardHeader>
              <CardBody>
                <Row className="theme-form" form>
                  <FormGroup className="col-6 p-r-0">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                    />
                  </FormGroup>
                  <FormGroup className="col-6">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Last name"
                    />
                  </FormGroup>
                  <FormGroup className="col-6 p-r-0">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Pincode"
                    />
                  </FormGroup>
                  <FormGroup className="col-6">
                    <Input
                      className="form-control"
                      type="number"
                      placeholder="Enter mobile number"
                    />
                  </FormGroup>
                  <FormGroup className="col-6 p-r-0">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="State"
                    />
                  </FormGroup>
                  <FormGroup className="col-6">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="City"
                    />
                  </FormGroup>
                  <FormGroup className="col-12">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Address"
                    ></textarea>
                  </FormGroup>
                  <div className="col-12">
                    <Button color="primary-gradien" className="btn-block">
                      Submit
                    </Button>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4" lg="6" className="set-col-6">
            <Card>
              <CardHeader>
                <h5>EMI</h5>
              </CardHeader>
              <CardBody>
                <Row className="theme-form" form>
                  <FormGroup className="col-6 p-r-0">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                    />
                  </FormGroup>
                  <FormGroup className="col-6">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Last name"
                    />
                  </FormGroup>
                  <FormGroup className="col-6 p-r-0">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Pincode"
                    />
                  </FormGroup>
                  <FormGroup className="col-6">
                    <select className="form-control" size="1">
                      <option>Bank Name</option>
                      <option>SBI</option>
                      <option>ICICI</option>
                      <option>KOTAK</option>
                      <option>BOB</option>
                    </select>
                  </FormGroup>
                  <FormGroup className="col-12">
                    <select className="form-control" size="1">
                      <option>Select Card</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </FormGroup>
                  <FormGroup className="col-12">
                    <select className="form-control" size="1">
                      <option>Select Duration</option>
                      <option>2015-2016</option>
                      <option>2016-2017</option>
                      <option>2017-2018</option>
                      <option>2018-2021</option>
                    </select>
                  </FormGroup>
                  <FormGroup className="col-12">
                    <ul className="payment-opt">
                      <li>
                        <img
                          src={require("../../../assets/images/ecommerce/payment-option/mastercard.png")}
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/images/ecommerce/payment-option/visa.png")}
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/images/ecommerce/payment-option/paypal.png")}
                          alt=""
                        />
                      </li>
                    </ul>
                  </FormGroup>
                  <div className="col-12">
                    <Button color="primary-gradien" className="btn-block">
                      Submit
                    </Button>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4" lg="6" className="set-col-6">
            <Card>
              <CardHeader>
                <h5>Net Banking</h5>
              </CardHeader>
              <CardBody>
                <Row className="theme-form" form>
                  <FormGroup className="col-12">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="AC Holder name"
                    />
                  </FormGroup>
                  <FormGroup className="col-12">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Account number"
                    />
                  </FormGroup>
                  <FormGroup className="col-6 p-r-0">
                    <select className="form-control" size="1">
                      <option>Select Bank</option>
                      <option>SBI</option>
                      <option>ICICI</option>
                      <option>KOTAK</option>
                      <option>BOB</option>
                    </select>
                  </FormGroup>
                  <FormGroup className="col-6">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="ICFC code"
                    />
                  </FormGroup>
                  <FormGroup className="col-12">
                    <Input
                      className="form-control"
                      type="number"
                      placeholder="Enter mobile number"
                    />
                  </FormGroup>
                  <FormGroup className="col-12">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Other Details"
                    />
                  </FormGroup>
                  <div className="col-12">
                    <Button color="primary-gradien" className="btn-block">
                      Submit
                    </Button>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Productdetails;
