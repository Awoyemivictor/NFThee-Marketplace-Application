import React from 'react'

function ApplyVerification() {
  return (
    <> 
 <main>
        <section className="bg-section become-partner-section">
        <section class="apply_verification">
          <div className="become-partner-wrapper">
            <div className="container">
              <div className="section-heading text-center mb-lg-5 mb-4">
                <h2 className="section-title mb-1">Apply For Verification</h2> 
                <span><img src="assets/images/path1.png" alt="" className="img-fluid" /></span>
              </div>
              <div className="col-lg-8 col-md-8 mx-auto p-0">
                <div className="partner-form-wrapper">
                  <div className="partner-form-content">
                    <div className="head-section d-flex align-items-center  ">
                      <h2 className="heading-title mb-0 ">Apply Verification Form </h2><img className='ms-2' style={{height: "35px"}} src="assets/images/icons/star-check.png" alt=""/>
                    </div>
                    <div className="body-section">
                      <div className="form-group mb-3">
                        <label className="form-label">Project Name<span>*</span></label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">Contract address of its NFT</label>
                        <textarea type="text" required="required" className="form-control mb-2" rows={4} defaultValue={""} />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">Which Blockchain is Your Project on?</label>
                        <select className="form-control form-select">
                          <option value>Ethereum</option>
                          <option value>Polygon</option>
                          <option value>Harmony</option>
                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">What is current status of project</label>
                        <select className="form-control form-select">
                          <option value>Sold Out</option>
                          <option value>Mint Now</option>
                          <option value>Before Minting</option>
                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">Tell us more about your project</label>
                        <textarea type="text" required="required" className="form-control mb-2" rows={4} defaultValue={""} />
                      </div>
                      <h5 className="heading-title1 ">Links and description to display on your Collection page </h5>
                      <div className="form-group mb-3">
                        <label className="form-label">Website<span>*</span></label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">Twitter link</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">Discord link</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">Project Description</label>
                        <textarea type="text" required="required" className="form-control mb-2" rows={4} defaultValue={""} />
                      </div>
                      <div className="upload-area mb-3">
                        <h5 className="heading-title1">Project icon (512x512, square version, no gif files)<span>*</span></h5>
                        <label htmlFor="input" id className="img-upload-box">
                          <img src="assets/images/icons/upload.png" alt="" className="img-fluid" />
                          <p>Drop your files here or Click to browse</p>
                          <input id="input" type="file" />
                        </label>
                      </div>
                      <div className="upload-area mb-3">
                        <h5 className="heading-title1">Project banner (A rough size at 1200x400,  safe area is 800x400, no gif files )<span>*</span></h5>
                        <label htmlFor="input" id className="img-upload-box">
                          <img src="assets/images/icons/upload.png" alt="" className="img-fluid" />
                          <p>Drop your files here or Click to browse</p>
                          <input id="input" type="file" />
                        </label>
                      </div>
                      <div className="upload-area mb-3">
                        <h5 className="heading-title1">Project logo (Anysize, transparent, with text of project name) </h5>
                        <label htmlFor="input" id className="img-upload-box">
                          <img src="assets/images/icons/upload.png" alt="" className="img-fluid" />
                          <p>Drop your files here or Click to browse</p>
                          <input id="input" type="file" />
                        </label>
                      </div>
                      <div className="upload-area mb-3">
                        <h5 className="heading-title1">Art Drafts of NFTs (Please attach some images of the production process.) </h5>
                        <label htmlFor="input" id className="img-upload-box">
                          <img src="assets/images/icons/upload.png" alt="" className="img-fluid" />
                          <p>Drop your files here or Click to browse</p>
                          <input id="input" type="file" />
                        </label>
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">Do you want a Royalty fee distribution?<span>*</span></label>
                        <select className="form-control form-select">
                          <option value>Yes</option>
                          <option value>No</option>
                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">Type your desired Royalty fee rate below (Max 3%)</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">Is your NFT's metadata json accessible from tokenURI contract method?</label>
                        <select className="form-control form-select">
                          <option value>Yes</option>
                          <option value>No</option>
                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">How can we Email you?<span>*</span></label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">Are your NFTs original?</label>
                        <select className="form-control form-select">
                          <option value>Yes</option>
                          <option value>No</option>
                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">If previous answer is No, What NFTs are you inspired from?</label>
                        <input type="text" className="form-control" />
                      </div>
                      <h5 className="heading-title1">Because we receive so many inquiries, we will only email you if your application is approved. If your application is not approved, we will not email you. We usually email you within 2-3 business days. </h5>
                      <div className="mt-4">
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
      </main>
    </>
  )
}

export default ApplyVerification;