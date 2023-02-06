import React,{Fragment} from 'react';
import {Container,Col,Form,FormGroup,Button} from 'reactstrap'
import myimage from '../../../assets/images/auth-bg.jpg'
import myvideo from "../../../assets/video/auth-bg.mp4"
const  Registerbgvideo = (props) => {
    return (
        <Fragment>
            <div className="page-wrapper">
            <Container fluid={true} className="p-0">
                <div className="auth-bg-video">
                    <video poster={myimage} id="bgvid" playsInline="" autoPlay={true} muted="" loop="">
                            <source src={myvideo} type="video/mp4"/>
                        </video>
                    <div className="authentication-box">
                        <h3 className="text-center">NEW USER</h3>
                        <h6 className="text-center">Enter your Username and Password For Login or Signup</h6>
                        <div className="card mt-4 p-4">
                            <Form className="theme-form">
                                <div className="form-row">
                                    <Col md="6">
                                        <FormGroup>
                                            <label className="col-form-label">First Name</label>
                                            <input type="text" className="form-control" placeholder="John"/>
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <label className="col-form-label">Last Name</label>
                                            <input type="text" className="form-control" placeholder="Deo"/>
                                        </FormGroup>
                                    </Col>
                                </div>
                                <FormGroup>
                                    <label className="col-form-label">User Name</label>
                                    <input type="text" className="form-control" placeholder="John Deo"/>
                                </FormGroup>
                                <FormGroup>
                                    <label className="col-form-label">Password</label>
                                    <input type="password" className="form-control" placeholder="**********"/>
                                </FormGroup>
                                <FormGroup>
                                    <label className="col-form-label">BOD</label>
                                    <div className="form-row">
                                        <Col sm="4">
                                            <select className="form-control mb-1">
                                                <option>DD</option>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                                <option>04</option>
                                            </select>
                                        </Col>
                                        <Col sm="4">
                                            <select className="form-control mb-1">
                                                <option>MM</option>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                                <option>04</option>
                                            </select>
                                        </Col>
                                        <Col sm="4">
                                            <select className="form-control mb-1">
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
                                        <Button  color="secondary">Sign Up</Button>
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
                                            <Button color="btn social-btn btn-fb mb-2">Facebook</Button>
                                        </Col>
                                        <Col sm="4">
                                            <Button color="btn social-btn btn-twitter mb-2">Twitter</Button>
                                        </Col>
                                        <Col sm="4">
                                            <Button color="btn social-btn btn-google mb-2">Google +</Button>
                                        </Col>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </Container>
            </div>
        </Fragment>
    );
}

export default Registerbgvideo;