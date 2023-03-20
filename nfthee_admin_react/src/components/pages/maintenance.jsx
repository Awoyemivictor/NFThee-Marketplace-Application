import React, {Fragment} from 'react';
import {Container} from 'reactstrap'
const ComingSoon = () => {
        return (
            <Fragment>
                <div className="error-wrapper">
                    <Container>
                        <ul className="maintenance-icons">
                            <li><i className="fa fa-cog"></i></li>
                            <li><i className="fa fa-cog"></i></li>
                            <li><i className="fa fa-cog"></i></li>
                        </ul>
                        <div className="maintenance-heading">
                            <img src={require('../..//assets/images/cloud-bg-1.png')} className="cloud-first" alt=""/>
                                <h2 className="headline">MAINTENANCE</h2>
                                <img src={require('../../assets/images/cloud-bg-2.png')} className="cloud-second" alt=""/>
                        </div>
                        <h4 className="sub-content">Our Site is Currently under maintenance We will be back Shortly<br/> Thank You For Patience</h4>
                        <div>
                            <a href="/dashboard/default" className="btn btn-info-gradien btn-lg text-light">BACK TO HOME PAGE</a>
                        </div>
                    </Container>
                </div>
            </Fragment>
        )
}
export default ComingSoon;