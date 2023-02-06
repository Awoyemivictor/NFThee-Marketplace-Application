import React, {Fragment} from 'react';
import {Container,Col} from 'reactstrap'

const Samplepage  = () => {
       return (
            <Fragment>
                <div className="page-wrapper">
                    <div className="error-wrapper">
                        <Container>
                            <img src={require('../../../assets/images/sad.png')} className="img-100" alt=""/>
                                <div className="error-heading">
                                    <img src={require('../../../assets/images/cloud-bg-1.png')} className="cloud-first" alt=""/>
                                        <h2 className="headline font-danger">404</h2>
                                    <img src={require('../../../assets/images/cloud-bg-2.png')} className="cloud-second" alt=""/>
                                </div>
                                <Col md="8" className="offset-md-2">
                                    <p className="sub-content">The page you are attempting to reach is currently not
                                        available. This may be because the page does not exist or has been moved.
                                    </p>
                                </Col>
                                <div className="">
                                    <a href="/dashboard/default" className="btn btn-danger-gradien btn-lg">BACK TO HOME PAGE</a>
                                </div>
                        </Container>
                    </div>
                </div>
            </Fragment>
        )
}


export default Samplepage;