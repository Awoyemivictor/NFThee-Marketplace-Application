import React, { useState } from "react";
import { swal } from "sweetalert";
import axios from "axios";
import Moment from "react-moment";

function Partners() {
  const [formData, setFormData] = useState({
    project_name: "",
    project_desc: "",
    project_website: "",
    project_status: "",
    project_status_desc: "",
    nft_artwork: "",
    minted_item_count: "",
    blockchain_mint: "",
    mint_price: "",
    is_minting_page: "",
    partnership: "",
    end_day: "",
    banner_image: "",
    icon_image: "",
    send_email_to: "",
  });

  const [dateValue, setDateValue] = useState({ end_day: "" });

  let name, value;

  // const handleIconImg = (e) => {
  //   const file = e.target.files;

  //   setFormData({
  //     ...formData,
  //     icon_image: file.length === 0 ? "abc.png" : file,
  //   });
  // };

  // const handleNftART = (e) => {
  //   const file = e.target.files;

  //   setFormData({
  //     ...formData,
  //     nft_artwork: file.length === 0 ? "abc.png" : file,
  //   });
  // };
  // const handleBanner = (e) => {
  //   const file = e.target.files;

  //   setFormData({
  //     ...formData,
  //     banner_image: file.length === 0 ? "abc.png" : file,
  //   });
  // };
  const handleNftART = (e) => {
    const file = e.target.files[0];
    // setArtImg(URL.createObjectURL(file))
    setFormData({
      ...formData,
      nft_artwork: file.length === 0 ? "abc.png" : file,
    });
  };
  const handleBanner = (e) => {
    const file = e.target.files[0];
    // setArtImg(URL.createObjectURL(file))
    setFormData({
      ...formData,
      banner_image: file.length === 0 ? "abc.png" : file,
    });
  };
  const handleIconImg = (e) => {
    const file = e.target.files[0];
    // setArtImg(URL.createObjectURL(file))
    setFormData({
      ...formData,
      icon_image: file.length === 0 ? "abc.png" : file,
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

  const onChangeDate = (e) => {
    const newDate = Moment(new Date(e.target.value)).format("YYYY-MM-DD");
    setDateValue(newDate);
    console.log(newDate); //value picked from date picker
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User:", formData);

    const formdataN = new FormData();

    formdataN.append("project_name", formData.project_name);
    formdataN.append("project_desc", formData.project_desc);
    formdataN.append("project_website", formData.project_website);
    formdataN.append("project_status", formData.project_status);
    formdataN.append("project_status_desc", formData.project_status_desc);
    formdataN.append("nft_artwork", formData.nft_artwork);
    formdataN.append("minted_item_count", formData.minted_item_count);
    formdataN.append("blockchain_mint", formData.blockchain_mint);
    formdataN.append("mint_price", formData.mint_price);
    formdataN.append("is_minting_page", formData.is_minting_page);
    formdataN.append("partnership", formData.partnership);
    formdataN.append("end_day", formData.end_day);
    formdataN.append("banner_image", formData.banner_image);
    formdataN.append("icon_image", formData.icon_image);
    formdataN.append("send_email_to", formData.send_email_to);

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/addPartner`, formdataN, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(function (response) {
        //handle success
        console.log(response);
        swal({
          title: "Success!",
          text: "Successfully submited",
          //  text: response.data.response,
          icon: "success",
          button: "Ok",
        });
      })
      .catch((error) => {
        if (!error.response) {
          // network error
          this.errorStatus = "Error: Network Error";
        } else {
          this.errorStatus = error.response.data.message;
        }
      });
      // setFormData({
      //   project_name: "",
      //   project_desc: "",
      //   project_website: "",
      //   project_status: "",
      //   project_status_desc: "",
      //   nft_artwork: "",
      //   minted_item_count: "",
      //   blockchain_mint: "",
      //   mint_price: "",
      //   is_minting_page: "",
      //   partnership: "",
      //   end_day: "",
      //   banner_image: "",
      //   icon_image: "",
      //   send_email_to: "",
      // })
  };

  return (
    <>
      <section className="bg-section become-partner-section">
        <section className="become-partner-banner">
          <form onSubmit={handleSubmit}>
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
                          <input
                            type="text"
                            name="project_name"
                            onChange={handleChange}
                            value={formData.project_name}
                            className="form-control"
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label className="form-label">
                            Description About Your Project<span>*</span>
                          </label>
                          <textarea
                            type="text"
                            name="project_desc"
                            onChange={handleChange}
                            value={name}
                            required="required"
                            className="form-control mb-2"
                            rows={4}
                            defaultValue={""}
                          />
                          <span className="subtitle-text mt-3">
                            The More the better. Will be displayed on the New
                            Drop. Markdown format Supported, you can put image
                            or video too.
                          </span>
                        </div>
                        <div className="form-group mb-3">
                          <label className="form-label">
                            Project Website<span>*</span>
                          </label>
                          <input
                            name="project_website"
                            onChange={handleChange}
                            value={name}
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label className="form-label" for="project_status">
                            What is the status of project<span>*</span>
                          </label>
                          <select
                            className="form-control form-select"
                            name="project_status"
                            onChange={handleChange}
                            value={name}
                          >
                            <option selected disabled>
                              Select
                            </option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                            <option value="In Working">In Working</option>
                          </select>
                        </div>
                        <div className="form-group mb-3">
                          <label className="form-label">
                            Describe status of the Project<span>*</span>
                          </label>
                          <textarea
                            name="project_status_desc"
                            onChange={handleChange}
                            value={name}
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
                          <label
                            htmlFor="nft_artwork"
                            id
                            className="img-upload-box"
                          >
                            <img
                              src="assets/images/icons/upload.png"
                              alt=""
                              className="img-fluid"
                            />
                            <p>Drop your files here or Click to browse</p>
                            <input
                              type="file"
                              id="nft_artwork"
                              name="nft_artwork"
                              onChange={handleNftART}
                            />
                          </label>
                        </div>
                        <div className="form-group mb-3">
                          <label className="form-label">
                            How many items will be minted?<span>*</span>
                          </label>
                          <input
                            type="text"
                            name="minted_item_count"
                            onChange={handleChange}
                            value={name}
                            className="form-control"
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label className="form-label">
                            What Blockchain to mint them on?
                          </label>
                          <select
                            className="form-control form-select"
                            name="blockchain_mint"
                            onChange={handleChange}
                          >
                            <option selected disabled>
                              Select
                            </option>
                            <option value="Ethereum">Ethereum</option>
                            <option value="Polygon">Polygon</option>
                            <option value="Solana">Solana</option>
                          </select>
                        </div>
                        <div className="form-group mb-3">
                          <label className="form-label">
                            How much will the mint price be?
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="mint_price"
                            onChange={handleChange}
                            value={name}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label className="form-label">
                            Have you Prepared minting page on your Website?
                          </label>
                          <select
                            className="form-control form-select"
                            name="is_minting_page"
                            onChange={handleChange}
                            value={name}
                          >
                            <option selected disabled>
                              Select
                            </option>
                            <option value="yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="form-group mb-3">
                          <label className="form-label">
                            Have you submited <strong>Partnership</strong> as
                            well?
                          </label>
                          <input
                            type="text"
                            name="partnership"
                            onChange={handleChange}
                            value={name}
                            className="form-control"
                          />
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
                          <input
                            name="end_day"
                            onChange={handleChange}
                            value={name}
                            type="date"
                            className="form-control"
                          />
                        </div>
                        <div className="upload-area mb-3">
                          <h5 className="heading-title1">Banner Image</h5>
                          <label
                            htmlFor="banner_image"
                            id
                            className="img-upload-box"
                          >
                            <img
                              src="assets/images/icons/upload.png"
                              alt=""
                              className="img-fluid"
                            />
                            <p>Drop your files here or Click to browse</p>
                            <input
                              type="file"
                              id="banner_image"
                              name="banner_image"
                              onChange={handleBanner}
                            />
                          </label>
                        </div>
                        <div className="upload-area mb-3">
                          <h5 className="heading-title1">Icon Image</h5>
                          <label
                            htmlFor="icon_image"
                            id
                            className="img-upload-box"
                          >
                            <img
                              src="assets/images/icons/upload.png"
                              alt=""
                              className="img-fluid"
                            />
                            <p>Drop your files here or Click to browse</p>
                            <input
                              type="file"
                              id="icon_image"
                              name="icon_image"
                              onChange={handleIconImg}
                            />
                          </label>
                        </div>
                        <div className="form-group mb-3">
                          <label className="form-label">
                            How Should We Email You?
                          </label>
                          <input
                            name="send_email_to"
                            onChange={handleChange}
                            value={name}
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Email"
                          />
                          {/* <select className="form-control form-select">
                          <option value selected>Select An Option</option>
                          <option value>Instagram</option>
                          <option value>Discord</option>
                          <option value>Twitter</option>
                        </select> */}
                        </div>
                        <div className="mt-4">
                          <button className="btn btn-violet w-100">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </section>
    </>
  );
}

export default Partners;
