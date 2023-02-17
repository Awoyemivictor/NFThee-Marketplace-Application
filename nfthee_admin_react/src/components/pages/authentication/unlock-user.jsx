import React, { Fragment } from 'react';
import {Container,Row,Col,Card,Form,FormGroup,Button} from 'reactstrap'
const Unlockuser = (props) => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <Container fluid={true}>
                    <div className="authentication-main">
                        <Row>
                            <Col md="4" className="p-0">
                                <div className="auth-innerleft">
                                    <div className="text-center">
                                        <img src={require("../../../assets/images/open-lock.png")} className="img-fluid security-icon" alt=""/>
                                    </div>
                                </div>
                            </Col>
                            <Col md="8" className="p-0">
                                <div className="auth-innerright">
                                    <div className="authentication-box">
                                        <h3>UNLOCK USER</h3>
                                        <Card className="mt-4 p-4 mb-0">
                                            <Form className="theme-form">
                                                <FormGroup>
                                                    <label className="col-form-label">Enter your Password</label>
                                                    <input type="password" className="form-control" placeholder="*******"/>
                                                </FormGroup>
                                                <FormGroup className="form-row mb-2">
                                                    <Col md="3">
                                                        <Button  color="secondary">UNLOCK</Button>
                                                    </Col>
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
}

export default Unlockuser;