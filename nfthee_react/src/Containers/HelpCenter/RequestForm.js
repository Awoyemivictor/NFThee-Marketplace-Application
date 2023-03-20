import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import $ from "jquery";

function RequestForm() {
    useEffect(()=>{
        $(document).ready(function() {
            $('select').niceSelect();      
          });
    })
    const [tabvalue, setTabvalue]=useState(1)
     
    const formTab =(id)=>{  
        // console.log(id) 
        setTabvalue(id)
    }
    console.log(tabvalue) 

  return (
    <>
  <section className="bg-section">      
        <section className="help-center-form">
          <div className="container-fluid px-lg-4">
            <div className="row align-items-start">
              <div className="col-lg-3 col-md-3">
                <h4 className="title-name">Help Center Form</h4>
                <div className="nav flex-column nav-pills">
                  <div className="nav-link" tabIndex={1} onClick={() => formTab(1)}>My Account</div>
                  <div className="nav-link" tabIndex={2} onClick={() => formTab(2)}>Wallet And Transaction Issues</div>
                  <div className="nav-link"tabIndex={3}onClick={() => formTab(3)}>Buying and Selling NFTs</div>
                  <div className="nav-link"tabIndex={4}onClick={() => formTab(4)}>Developer Help</div>
                  <div className="nav-link"tabIndex={5}onClick={() => formTab(5)}>Report an Error Message</div>
                  <div className="nav-link"tabIndex={6}onClick={() => formTab(6)}>Report Fraudulent Activity</div>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <div className="tab-content">
                  <div className="help-center-detail-wrapper">
                    <div className="help-center-detail mb-4">
                      <div className="mb-4">
                        <h3 className="title mb-0">Enter Your Details</h3>                                           
                      </div>
                      <form>
                        <div className="mb-3">
                          <label className="form-label">Email Address<span>*</span></label>
                          <input type="email" className="form-control" id="email" placeholder="Email address" />
                        </div>
                        <div className="mb-3">
                        {tabvalue==1 &&
                          <div>
                            <label className="form-label">My Account has an issue<span>*</span></label>
                            <select className="form-select" aria-label="Default select example">
                               <option value={1}>Getting Started</option>
                              <option value={2}>Login Issue</option>
                              <option value={3}>Collection or NFT Display Issues</option>
                            </select>
                          </div>}
                          {tabvalue==2 &&
                          <div>
                            <label className="form-label">I am having a wallet and transaction issue<span>*</span></label>
                            <select className="form-select" aria-label="Default select example">
                               <option value={1}>Connecting and Using Wallets</option>
                              <option value={2}>Transation Issue</option>
                              <option value={3}>Payments</option>
                            </select>
                          </div>}
                          {tabvalue==3 &&
                          <div>
                            <label className="form-label">I have an issue buying and selling NFTs<span>*</span></label>
                            <select className="form-select" aria-label="Default select example">
                               <option value={1}>Buying</option>
                              <option value={2}>Selling</option>
                
                            </select>
                          </div>}
                          {tabvalue==4 &&
                          <div>
                            <label className="form-label">I need developer help<span>*</span></label>
                            <select className="form-select" aria-label="Default select example">
                               <option value={1}>API Request</option>
                              <option value={2}>My API isn't working</option>
                          
                            </select>
                          </div>}
                          {tabvalue==5 &&
                          <div>
                            <label className="form-label">Report a Bug or Error Message<span>*</span></label>
                            <select className="form-select" aria-label="Default select example">
                               <option value={1}>404 Error</option>
                              <option value={2}>Oops Something Went Wrong</option>
                              <option value={3}>There was a problem completing your request</option>
                              <option value={3}>1020 Error</option>
                              <option value={3}>API Error 400 </option>
                            </select>
                          </div>}
                          {tabvalue==6 &&
                          <div>
                            <label className="form-label">Report Fraudulent Activity<span>*</span></label>
                            <select className="form-select" aria-label="Default select example">
                               <option value={1}>My NFT was stolen</option>
                              <option value={2}>I was scammed</option>
                              <option value={3}>I'm reporting a fake collection</option>
                              <option value={3}>Someone is using my images without my permission</option>
                              <option value={3}>I'm reporting explicit content </option>
                              <option value={3}>I'm reporting a phishing attempt </option>
                            </select>
                          </div>}
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Subject<span>*</span></label>
                          <input type="text" className="form-control" id="subject" placeholder="Subject" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Description<span>*</span></label>
                          <textarea name id="description" rows={3} className="form-control" placeholder="Description" defaultValue={""} />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Attachments(optional)</label>
                          <div className="create-item-content">
                            <div className="file-drop"><h4 id="file_name">PNG, GIF, WEBP, MP4, Max 100Mb.</h4><input type="button" id="get_file" className="btn btn-violet" defaultValue="Choose File" /><input type="file" id="upload_file" className="d-none" /></div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="row mb-4">
                      <div className="col-lg-12 col-md-12">
                        <button className="btn btn-violet w-100">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default RequestForm;