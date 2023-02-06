import React, {Fragment} from 'react';
import { Container,Row,Col,Form,FormGroup,Card } from 'reactstrap';

const Samplepage = () => {
        const background = require('../../../assets/images/auth-layer.png')
        return (
            <Fragment>
                <div className="page-wrapper">
                    <Container fluid={true}>
                        <div className="authentication-main" >
                            <Row>
                                <Col md="4" className="p-0">
                                    <div className="auth-innerleft" style ={ { backgroundImage: "url("+background+")" } }>
                                        <div className="text-center">
                                            <img src={require('../../../assets/images/logo-login.png')}
                                                 className="logo-login" alt=""/>
                                            <hr/>
                                            <div className="social-media">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><i
                                                        className="fa fa-facebook txt-fb" aria-hidden="true"></i></li>
                                                    <li className="list-inline-item"><i
                                                        className="fa fa-google-plus txt-google-plus"
                                                        aria-hidden="true"></i></li>
                                                    <li className="list-inline-item"><i
                                                        className="fa fa-twitter txt-twitter" aria-hidden="true"></i>
                                                    </li>
                                                    <li className="list-inline-item"><i
                                                        className="fa fa-linkedin txt-linkedin" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>+
                                    </div>
                                </Col>
                                <Col md="8" className="p-0">
                                    <div className="auth-innerright">
                                        <div className="authentication-box">
                                            <h4>LOGIN</h4>
                                            <h6>Enter your Username and Password For Login or Signup</h6>
                                            <Card className="mt-4 p-4 mb-0">
                                                <Form className="theme-form" action={'/'} >
                                                    <FormGroup>
                                                        <label className="col-form-label pt-0">Your Name</label>
                                                        <input required type="text" className="form-control form-control-lg"/>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <label className="col-form-label">Password</label>
                                                        <input required  type="password" className="form-control form-control-lg"/>
                                                    </FormGroup>
                                                    <div className="checkbox p-0">
                                                        <input id="checkbox1" type="checkbox"/>
                                                        <label htmlFor="checkbox1">Remember me</label>
                                                    </div>
                                                    <FormGroup className="form-row mt-3">
                                                        <Col md="3">
                                                            <button type="submit" className="btn btn-secondary">LOGIN
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


export default Samplepage;
