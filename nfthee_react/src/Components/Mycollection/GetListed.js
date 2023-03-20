import React from 'react'
import { Link } from "react-router-dom";
function GetListed() {
  return (
    <>
    <section className="bg-section get-listed-section">
        <div className="container">
          <div className="section-heading text-center mb-lg-5 mb-4">
            <h2 className="section-title mb-1">Get Listed On NFThee</h2>
            <span><img src="assets/images/path1.png" alt="" className="img-fluid" /></span>
          </div>
          <div className="col-lg-10 col-md-10 mx-auto p-0">
            <div className="get-listed-wrapper">
              <div className="get-listed-header mb-4 mb-lg-5">
                <h3 className="title">What phase is your project in ?</h3>
              </div>
              <div className="get-listed-body">
                <div className="row">
                
                  <div className="col-lg-4">
                  <Link to="/steptwo">
                    <div className="card collection-card grad-border">
                      <div className="card-body">
                        <h3 className="card-title">Live on a mainnet</h3>
                        <p className="card-text">We have something and its ready to roll</p>
                      </div>
                    </div>
                    </Link>
                  </div>
                
                  <div className="col-lg-4">
                  <Link to="/steptwo">
                    <div className="card collection-card grad-border">
                      <div className="card-body">
                        <h3 className="card-title">Live on a testnet</h3>
                        <p className="card-text">Its on a testnet and ready to migrate over to a mainnet</p>
                      </div>
                    </div>
                    </Link>
                  </div>
                  <div className="col-lg-4">
                    <div className="card collection-card grad-border mb-0">
                      <div className="card-body">
                        <h3 className="card-title">Not developed</h3>
                        <p className="card-text">We have an idea and a prototype</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></section>
    </>
  )
}

export default GetListed;