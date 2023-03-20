import React, { useState, Fragment } from "react";
import axios from "axios";
import Breadcrumb from "../../common/breadcrumb.component";
import { useLocation,useHistory } from "react-router";
import moment from "moment";

import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  TabContent,
  Button,
  Form,
  FormGroup,
  TabPane,
  Media,
} from "reactstrap";
import instance from "../../../axios";
// import { Container, Row, Col, Card } from "reactstrap";

const viewSuggestion = () => {
  const history = useHistory();
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  //   console.log(useLocation());
  //   console.log(useParams());
  const query = new URLSearchParams(useLocation().search);
  const suggestion_id = query.get("suggestionId");
  //   console.log(suggestion_id);

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  React.useEffect(() => {
    console.log(process.env.REACT_APP_BASE_URL)
    instance
      .get(`api/getSuggestion?id=${suggestion_id}`)
      .then((ress) => {
        console.log(ress.data);
        if (ress.data) {
          setdata(ress.data.data);
          console.log(ress.data);
          // setLoading(false);
        }
      });
  }, []);
  console.log(data);
  return (
    <Fragment>
      <Breadcrumb title="Suggestion Detail" parent="Suggestion" />
      <Container fluid={true}>
        <Row>
          <Col sm="12" xl="12">
            <Card>
              <CardHeader>
                <h5>Suggestion</h5>
              </CardHeader>
              {data.map((suggestion) => (
                <CardBody key={suggestion._id}>
                  <Row>
                    <Col md="12">
                      <Form className="theme-form">
                        <FormGroup className="form-row">
                          <h6 className="col-sm-3 col-form-label text-right f-w-700">
                            Name:
                          </h6>
                          <div className="col-xl-5 col-sm-9 col-form-label text-left">
                            <p>{suggestion.name}</p>
                          </div>
                        </FormGroup>
                        <FormGroup className="form-row">
                          <h6 className="col-sm-3 col-form-label text-right f-w-700">
                            Email:
                          </h6>
                          <div className="col-xl-5 col-sm-9 col-form-label text-left">
                            <p>{suggestion.email}</p>
                          </div>
                        </FormGroup>
                        <FormGroup className="form-row">
                          <h5 className="col-sm-3 col-form-label text-right f-w-700">
                            Description:
                          </h5>
                          <div className="col-xl-5 col-sm-9 col-form-label text-left">
                            <p>{suggestion.description}</p>
                          </div>
                        </FormGroup>
                        <FormGroup className="form-row">
                          <h6 className="col-sm-3 col-form-label text-right f-w-700">
                            Created AT:
                          </h6>
                          <div className="col-xl-5 col-sm-9 col-form-label text-left">
                            <p>
                              {" "}
                              {moment(suggestion.createdAt).format(
                                "DD/MM/YYYY"
                              )}
                            </p>
                          </div>
                        </FormGroup>
                      </Form>
                    </Col>
                  </Row>
                  <Button
                    color="primary"
                    onClick={() => history.goBack()}
                  >
                    Back
                  </Button>
                </CardBody>
              ))}
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default viewSuggestion;
