import React, { Fragment } from "react";
import { Container, Row, Col, Form, FormGroup, Card } from "reactstrap";
import axios from "axios";
import instance from "../../../axios";

const Samplepage = () => {
  const [currentPass, setCurrentPass] = React.useState("");
  const [newPass, setNewPass] = React.useState("");
  const [confirmPass, setConfirmPass] = React.useState("");

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const onSubmit = () => {
    const body = {
      pass: currentPass,
      newPass: newPass,
      conirmPass: confirmPass,
    };
    instance
      .post("api/user/changePassword", body)
      .then((ress) => {
        console.log(ress.data);
        if (ress.data) {
          //   setdata(ress.data.data);
          console.log(ress.data);
          //   setLoading(false);
        }
      });
  };
  const background = require("../../../assets/images/auth-layer.png");

  return (
    <Fragment>
      <div className="page-wrapper">
        <Container fluid={true}>
          <div className="authentication-main">
            <Row>
              <Col md="4" className="p-0">
                <div
                  className="auth-innerleft"
                  style={{ backgroundImage: "url(" + background + ")" }}
                >
                  <div className="text-center">
                    <img
                      src={require("../../../assets/images/key.png")}
                      className="img-fluid security-icon"
                      alt=""
                    />
                  </div>
                </div>
              </Col>
              <Col md="8" className="p-0">
                <div className="auth-innerright">
                  <div className="authentication-box">
                    <h3>RESET YOUR PASSWORD</h3>
                    <Card className="mt-4 p-4">
                      <Form className="theme-form">
                        <h5 className="f-16 mb-3">CREATE YOUR PASSWORD</h5>
                        <FormGroup>
                          <label className="col-form-label">
                            Current Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="*****"
                            onChange={(e) => {
                              setCurrentPass(e.target.value);
                            }}
                            value={currentPass}
                          />
                        </FormGroup>
                        <FormGroup>
                          <label className="col-form-label">New Password</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="*****"
                            onChange={(e) => {
                              setNewPass(e.target.value);
                            }}
                            value={newPass}
                          />
                        </FormGroup>
                        <FormGroup>
                          <label className="col-form-label">
                            Retype Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="*****"
                            onChange={(e) => {
                              setConfirmPass(e.target.value);
                            }}
                            value={confirmPass}
                          />
                        </FormGroup>
                        <FormGroup className="form-row mb-0">
                          <div className="col-md-2">
                            <button
                              type="submit"
                              className="btn btn-secondary"
                              onClick={onSubmit}
                            >
                              Done
                            </button>
                          </div>
                        </FormGroup>
                      </Form>
                    </Card>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default Samplepage;
