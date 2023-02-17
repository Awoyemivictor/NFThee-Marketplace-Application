import React, {Fragment} from 'react';
import {Container,Row,Col,Card,Form,FormGroup} from 'reactstrap'
const ForgetPassword = () => {
        const background = require('../../../assets/images/auth-layer.png')
        return (
            <Fragment>
                <div className="page-wrapper">
                    <Container fluid={true}>
                        <div className="authentication-main">
                            <Row>
                                <Col md="4" className="p-0">
                                    <div className="auth-innerleft" style ={{ backgroundImage: "url("+background+")" }}>
                                        <div className="text-center">
                                            <img src={require('../../../assets/images/key.png')} className="img-fluid security-icon" alt=""/>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="8" className="p-0">
                                    <div className="auth-innerright">
                                        <div className="reset-password-box">
                                            <h3>RESET YOUR PASSWORD</h3>
                                            <Card className="mt-4  mb-0">
                                                <Form className="theme-form">
                                                    <FormGroup>
                                                        <label className="col-form-label">Enter Your
                                                            Mobile Number</label>
                                                        <div className="form-row">
                                                            <Col md="2">
                                                                <input type="text" className="form-control digits mb-1" defaultValue="+ 91"/>
                                                            </Col>
                                                            <Col md="7"  xl="8">
                                                                <input type="tel" className="form-control digits mb-1" defaultValue="000-000-0000"/>
                                                            </Col>
                                                            <Col md="2">
                                                                <button type="submit" className="btn btn-primary m-0">Send </button>
                                                            </Col>
                                                        </div>
                                                    </FormGroup>
                                                    <div className="text-center mt-4 mb-4"><span
                                                        className="reset-password-link">If don't receive OTP?&nbsp;&nbsp;
                                                        <a href="#javaScript" className="btn-link text-danger">Resend</a></span>
                                                    </div>
                                                    <FormGroup className="rounded p-4 opt-box">
                                                        <label className="col-form-label pt-0">Enter OTP</label>
                                                        <div className="form-row">
                                                            <div className="col">
                                                                <input type="text" className="form-control digits text-center opt-text" defaultValue="00"/>
                                                            </div>
                                                            <div className="col">
                                                                <input type="text" className="form-control digits text-center opt-text" defaultValue="00"/>
                                                            </div>
                                                            <div className="col">
                                                                <input type="text" className="form-control digits text-center opt-text" defaultValue="00"/>
                                                            </div>
                                                        </div>
                                                    </FormGroup>
                                                    <h6 className="f-14 mt-4 mb-3">CREATE YOUR
                                                        PASSWORD</h6>
                                                    <FormGroup>
                                                        <label className="col-form-label">New
                                                            Password</label>
                                                        <input type="password" className="form-control"/>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <label className="col-form-label">Retype
                                                            Password</label>
                                                        <input type="password" className="form-control"/>
                                                    </FormGroup>
                                                    <FormGroup className="form-row mb-2">
                                                        <Col md="2">
                                                            <button type="submit"
                                                                    className="btn btn-primary">Done
                                                            </button>
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
        )
}
export default ForgetPassword;