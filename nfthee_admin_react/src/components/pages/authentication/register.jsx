import React, {Fragment} from 'react';
import {Container,Row,Col , Card, Form,FormGroup } from 'reactstrap';

const Samplepage = () => {

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
                                            <img src={require('../../../assets/images/logo-auth.gif')} className="logo-login" alt=""/>
                                                <hr/>
                                                 <div className="social-media">
                                                     <ul className="list-inline">
                                                         <li className="list-inline-item"><i className="fa fa-facebook" aria-hidden="true"></i></li>
                                                         <li className="list-inline-item"><i className="fa fa-google-plus" aria-hidden="true"></i></li>
                                                         <li className="list-inline-item"><i className="fa fa-twitter" aria-hidden="true"></i></li>
                                                         <li className="list-inline-item"><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                                         <li className="list-inline-item"><i className="fa fa-rss" aria-hidden="true"></i></li>
                                                     </ul>
                                                 </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="8" className="p-0">
                                    <div className="auth-innerright">
                                        <div className="authentication-box">
                                            <h3 className="text-center">NEW USER</h3>
                                            <h6 className="text-center">Enter your Username and Password For Login or Signup</h6>
                                            <Card className="mt-4 p-4">
                                                <Form action='/' className="theme-form">
                                                    <div className="form-row">
                                                        <Col md="6">
                                                            <FormGroup>
                                                                <label className="col-form-label">First Name</label>
                                                                <input required type="text" className="form-control" placeholder="John"/>
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md="6">
                                                            <FormGroup>
                                                                <label className="col-form-label">Last Name</label>
                                                                <input required type="text" className="form-control" placeholder="Deo"/>
                                                            </FormGroup>
                                                        </Col>
                                                    </div>
                                                    <FormGroup>
                                                        <label className="col-form-label">User Name</label>
                                                        <input type="text" required className="form-control" placeholder="John Deo"/>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <label className="col-form-label">Password</label>
                                                        <input type="password" required className="form-control" placeholder="**********"/>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <label className="col-form-label">BOD</label>
                                                        <div className="form-row">
                                                            <Col sm="4">
                                                                <select required className="form-control mb-1">
                                                                    <option>DD</option>
                                                                    <option>01</option>
                                                                    <option>02</option>
                                                                    <option>03</option>
                                                                    <option>04</option>
                                                                </select>
                                                            </Col>
                                                            <Col sm="4">
                                                                <select required className="form-control mb-1">
                                                                    <option>MM</option>
                                                                    <option>01</option>
                                                                    <option>02</option>
                                                                    <option>03</option>
                                                                    <option>04</option>
                                                                </select>
                                                            </Col>
                                                            <Col sm="4">
                                                                <select required className="form-control mb-1">
                                                                    <option>YYYY</option>
                                                                    <option>1990</option>
                                                                    <option>1991</option>
                                                                    <option>1992</option>
                                                                    <option>1993</option>
                                                                </select>
                                                            </Col>
                                                        </div>
                                                    </FormGroup>
                                                    <div className="form-row">
                                                        <Col sm="3">
                                                            <button type="submit" className="btn btn-secondary">Sign
                                                                Up
                                                            </button>
                                                        </Col>
                                                        <Col sm="8">
                                                            <div className="text-left mt-2 m-l-20">
                                                                Are you already user?&nbsp;&nbsp;<a href="login.html" className="btn-link text-capitalize">Login</a>
                                                            </div>
                                                        </Col>

                                                    </div>
                                                    <div className="form-divider"></div>
                                                    <div className="social mt-3">
                                                        <div className="form-row">
                                                            <Col sm="4">
                                                                <button
                                                                    className="btn social-btn btn-fb mb-2">Facebook
                                                                </button>
                                                            </Col>
                                                            <Col sm="4">
                                                                <button
                                                                    className="btn social-btn btn-twitter mb-2">Twitter
                                                                </button>
                                                            </Col>
                                                            <Col sm="4">
                                                                <button
                                                                    className="btn social-btn btn-google mb-2">Google +
                                                                </button>
                                                            </Col>
                                                        </div>
                                                    </div>
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


export default Samplepage;