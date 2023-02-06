import React, { Fragment } from "react";
import Breadcrumb from "../../common/breadcrumb.component";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const addPartner = () => {
  return (
    <Fragment>
      <Breadcrumb title="Add Partner" parent="Partner" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Add Partner</h5>
              </CardHeader>
              <Form className="form theme-form">
                <CardBody>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label htmlFor="exampleFormControlInput1">
                          Project name
                        </Label>
                        <Input
                          className="form-control"
                          type="text"
                          placeholder="project name"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup>
                        <Label htmlFor="exampleFormControlInput1">
                          Project Description
                        </Label>
                        <Input
                          type="textarea"
                          className="form-control"
                          rows="3"
                          placeholder="project_desc"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup>
                        <Label htmlFor="exampleFormControlInput1">
                          Website
                        </Label>
                        <Input
                          type="email"
                          className="form-control"
                          placeholder="website"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup className="row mb-0">
                        <Label className="col-sm-3 col-form-label">
                          Status
                        </Label>
                        <Col sm="9">
                          <Input
                            type="select"
                            name="select"
                            className="custom-select form-control"
                          >
                            <option select="">Select your status</option>
                            <option defaultValue="1">Pending</option>
                            <option defaultValue="2">Active</option>
                            <option defaultValue="3">Completed</option>
                          </Input>
                        </Col>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup>
                        <Label htmlFor="exampleFormControlInput1">
                          Status Description
                        </Label>
                        <Input
                          type="textarea"
                          className="form-control"
                          rows="3"
                          placeholder="Discription"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup>
                        <Label htmlFor="exampleFormControlInput1">
                          Minted item count
                        </Label>
                        <Input
                          type="number"
                          className="form-control"
                          placeholder="Minted item count"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup>
                        <Label htmlFor="exampleFormControlInput1">
                          End day
                        </Label>
                        <Input
                          type="date"
                          className="form-control"
                          placeholder="dd/mm/yyyy"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">NFT</Label>
                        <Col sm="9">
                          <Input className="form-control" type="file" />
                        </Col>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">
                          Banner
                        </Label>
                        <Col sm="9">
                          <Input className="form-control" type="file" />
                        </Col>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Icon</Label>
                        <Col sm="9">
                          <Input className="form-control" type="file" />
                        </Col>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button
                    color="primary"
                    // onClick={() => onAddCategorySubmit()}
                  >
                    Submit form
                  </Button>
                </CardBody>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default addPartner;
