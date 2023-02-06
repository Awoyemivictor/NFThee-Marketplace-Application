import React, { Fragment } from 'react';

const Loginbgimage = (props) => {
    return (
        <Fragment>
        <div className="page-wrapper">
            <div className="auth-bg">
            <div className="authentication-box">
                <h4 className="text-center">LOGIN</h4>
                <h6 className="text-center">Enter your Username and Password For Login or Signup</h6>
                <div className="card mt-4 p-4 mb-0">
                    <form className="theme-form">
                        <div className="form-group">
                            <label className="col-form-label pt-0">Your Name</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="col-form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Password"/>
                        </div>
                        <div className="checkbox p-0">
                            <input id="checkbox1" type="checkbox"/>
                            <label htmlFor="checkbox1">Remember me</label>
                        </div>
                        <div className="form-group form-row mt-3 mb-0">
                            <div className="col-md-4">
                                <button type="submit" className="btn btn-primary">LOGIN</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
            <div className="auth-bg-effect">
                <div className="first-effect"></div>
                <div className="second-effect"></div>
                <div className="third-effect"></div>
                <div className="fourth-effect"></div>
            </div>
        </div>
        </Fragment>
    );
}

export default Loginbgimage;