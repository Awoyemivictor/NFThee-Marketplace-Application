import React from "react";

function BecomePartner() {
  return (
    <>
      <section className="bg-section become-partner-section">
        <section className="become-partner-banner">
          <div className="become-partner-wrapper">
            <div className="container">
              <div className="section-heading text-center mb-lg-5 mb-4">
                <h2 className="section-title mb-1">Become A Partner</h2>
                <span>
                  <img
                    src="assets/images/path1.png"
                    alt=""
                    className="img-fluid"
                  />
                </span>
              </div>
              <div className="col-lg-8 col-md-8 mx-auto p-0">
                <div className="partner-form-wrapper">
                  <div className="partner-form-content">
                    <div className="head-section">
                      <h2 className="heading-title">Become A Partner Form</h2>
                    </div>
                    <div className="body-section">
                      <div className="form-group mb-3">
                        <label className="form-label">
                          Project Name<span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">
                          Description About Your Project<span>*</span>
                        </label>
                        <textarea
                          type="text"
                          required="required"
                          className="form-control mb-2"
                          rows={4}
                          defaultValue={""}
                        />
                        <span className="subtitle-text mt-3">
                          The More the better. Will be displayed on the launch
                          page. Markdown format Supported, you can put image or
                          video too.
                        </span>
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">
                          Project Website<span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">
                          What is the status of project<span>*</span>
                        </label>
                        <select className="form-control form-select">
                          <option value>Pending</option>
                          <option value>Completed</option>
                          <option value>In Working</option>
                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">
                          Describe status of the Project<span>*</span>
                        </label>
                        <textarea
                          type="text"
                          required="required"
                          className="form-control mb-2"
                          rows={4}
                          defaultValue={""}
                        />
                      </div>
                      <div className="upload-area mb-3">
                        <h5 className="heading-title1">
                          Please upload an example of the NFT artwork (if you
                          have one)
                        </h5>
                        <label htmlFor="input" id className="img-upload-box">
                          <img
                            src="assets/images/icons/upload.png"
                            alt=""
                            className="img-fluid"
                          />
                          <p>Drop your files here or Click to browse</p>
                          <input id="input" type="file" />
                        </label>
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">
                          How many items will be minted?<span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">
                          What Blockchain to mint them on?
                        </label>
                        <select className="form-control form-select">
                          <option value>Ethereum</option>
                          <option value>Polygon</option>
                          <option value>Solana</option>
                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">
                          How much will the mint price be?
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">
                          Have you Prepared minting page on your Website?
                        </label>
                        <select className="form-control form-select">
                          <option value>Yes</option>
                          <option value>No</option>
                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">
                          Have you submited <strong>Partnership</strong> as
                          well?
                        </label>
                        <input type="text" className="form-control" />
                        <span className="subtitle-text mt-3">
                          It is a Condition of use of launchpad to make an
                          announcement with Nfthee as your official secondary
                          Market.
                        </span>
                      </div>
                      <div className="form-group mb-3">
                        <h5 className="heading-title1">
                          Choose Your Preferred Launch Day And End Day (UTC
                          Time)<span>*</span>
                        </h5>
                        <input type="date" className="form-control" />
                      </div>
                      <div className="upload-area mb-3">
                        <h5 className="heading-title1">Banner Image</h5>
                        <label htmlFor="input" id className="img-upload-box">
                          <img
                            src="assets/images/icons/upload.png"
                            alt=""
                            className="img-fluid"
                          />
                          <p>Drop your files here or Click to browse</p>
                          <input id="input" type="file" />
                        </label>
                      </div>
                      <div className="upload-area mb-3">
                        <h5 className="heading-title1">Icon Image</h5>
                        <label htmlFor="input" id className="img-upload-box">
                          <img
                            src="assets/images/icons/upload.png"
                            alt=""
                            className="img-fluid"
                          />
                          <p>Drop your files here or Click to browse</p>
                          <input id="input" type="file" />
                        </label>
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">
                          How Should We Contact You?
                        </label>
                        <select className="form-control form-select">
                          <option value selected>
                            Select An Option
                          </option>
                          <option value>Instagram</option>
                          <option value>Discord</option>
                          <option value>Twitter</option>
                        </select>
                      </div>
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
    </>
  );
}

export default BecomePartner;
