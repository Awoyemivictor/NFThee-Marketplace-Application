import React, { Fragment } from 'react';
import {Container,Card,Form,FormGroup} from 'reactstrap'
import myimage from '../../../assets/images/auth-bg.jpg'
import myvideo from "../../../assets/video/auth-bg.mp4"
const  Loginbgvideo = (props) => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <Container fluid={true} className="p-0">
                    <div className="auth-bg-video">
                        <video poster={myimage} id="bgvid" playsInline="" autoPlay={true} muted="" loop="">
                            <source src={myvideo} type="video/mp4"/>
                        </video>
                        <div className="authentication-box">
                            <h4 className="text-center">LOGIN</h4>
                            <h6 className="text-center">Enter your Username and Password For Login or Signup</h6>
                            <Card className="mt-4 p-4 mb-0">
                                <Form className="theme-form">
                                    <FormGroup>
                                        <label className="col-form-label pt-0">Your Name</label>
                                        <input type="text" className="form-control" placeholder="John Deo"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <label className="col-form-label">Password</label>
                                        <input type="password" className="form-control" placeholder="*****"/>
                                    </FormGroup>
                                    <div className="checkbox p-0">
                                        <input id="checkbox1" type="checkbox"/>
                                        <label htmlFor="checkbox1">Remember me</label>
                                    </div>
                                    <FormGroup className="form-row mt-3 mb-0">
                                        <div className="col-md-4">
                                            <button type="submit" className="btn btn-primary">LOGIN</button>
                                        </div>
                                    </FormGroup>
                                </Form>
                            </Card>
                        </div>
                    </div>
                </Container>
            </div>
            
        </Fragment>
    );
}

export default Loginbgvideo;