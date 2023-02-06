import React, { useState } from "react";
import { swal } from "sweetalert";
import axios from "axios";

function Suggestions() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  let name, value;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User:", formData);

    
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/submitSuggestion`, formData)
      .then(function (response) {
        console.log(response);

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
          console.log(error);
        }
      });
  };
  return (
    <>
      <section className="bg-section suggestion-box-section">
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="section-heading text-center mb-lg-5 mb-4">
              <h2 className="section-title mb-1">Suggestions</h2>
              <span>
                <img
                  src="assets/images/path1.png"
                  alt=""
                  className="img-fluid"
                />
              </span>
            </div>
            <div className="col-lg-10 col-md-10 mx-auto p-0">
              <div className="suggestion-box-wrapper">
                <div className="suggestion-box-header mb-4">
                  <h3 className="suggestion-title">Make a Suggestion</h3>
                  <p className="suggestion-title-text">
                    NFThee was started for YOU, so if you have suggestions or
                    feedback on how we can improve, please let us know. If you
                    want to see a specific topic covered, answer to a specific
                    wordpress question, or anything else of this sort, don’t
                    hesitate to ask just let us know. We do our best to keep up!
                  </p>
                </div>
                <div className="suggestion-box-body">
                  <div className="body-content mb-4">
                    <h3 className="title-text">For Questions</h3>
                    <p className="subtitle-text">
                      For questions please be as detailed and thorough as you
                      can, so we can do a write up on our site, and answer your
                      question completely. Not all questions will be answered on
                      this site. If the question is more personal, then we will
                      deal with it through email.
                    </p>
                  </div>
                  <div className="body-content mb-4">
                    <h3 className="title-text">Specific Topic Covered</h3>
                    <p className="subtitle-text">
                      If you want to see a specific topic covered please let us
                      know and also let us know why you want to see it covered,
                      and how it will help the audience. We appreciate all your
                      ideas, so keep them up.
                    </p>
                  </div>
                  <div className="form-content">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor className="form-label">
                            Name <span>*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={name}
                            className="form-control"
                            id
                            placeholder
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor className="form-label">
                            E-mail <span>*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={name}
                            className="form-control"
                            id
                            placeholder
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label htmlFor className="form-label">
                            Your Suggestion <span>*</span>
                          </label>
                          <textarea
                            name="description"
                            onChange={handleChange}
                            value={name}
                            className="form-control"
                            id
                            rows={3}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group mt-lg-4">
                        <button
                          className="btn btn-violet shadow-none px-lg-5 text-uppercase"
                          href="#"
                        >
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
    </>
  );
}

export default Suggestions;
