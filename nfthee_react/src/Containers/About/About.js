import React from 'react'
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";

function About() {
  const { t } = useTranslation(); 

  return (
    <>
  <main>
        <section className="about-section bg-section overflow-hidden">
          <div className="container">
            <div className="section-heading text-center mb-5">
              <h2 className="section-title mb-1">About Us</h2>
              <span><img src="assets/images/path1.png" alt="" className="img-fluid" /></span>
            </div>
            <div className="row align-items-center mb-lg-5 mb-4">
              <div className="col-lg-5 col-md-6">
                <div className="about-image">
                  <img src="assets/images/About Us.png" className="img-fluid " alt="" />
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="about-section-wrapper ms-lg-5">
                  <h4 className="section-title mb-4">We develop &amp; create digital art.</h4>
                  <p className="section-text">{parse(t("about.about_content"))} </p>
                  {/* <p className="section-text mb-0">   </p> */}
                </div>
              </div>
            </div>
            <div className="about-team-section">
              <div className="section-heading text-center mb-5">
                <h2 className="section-title mb-1">Our Team</h2>
                <span><img src="assets/images/path1.png" alt="" className="img-fluid" /></span>
              </div>
              <div className="col-lg-8 col-md-8 mx-auto mb-lg-5 mb-4">
                <div className="about-team-header">
                  <h5 className="sub-text">We are a huge marketplace dedicated to connecting great artists of all Nfthee with their fans and unique token collectors!</h5>
                </div>
              </div>
              <div className="col-lg-10 mx-auto">
                <div className="about-team-wrapper">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="team-card">
                        <div className="team-card-wrapper">
                          <img src="assets/images/team1.png" className="card-img-top" alt="" />
                          <div className="button-set">
                            <a href="#" className="button-icon"><img src="assets/images/icons/facebook-icon.png" alt="" /></a>
                            <a href="#" className="button-icon"><img src="assets/images/icons/instagram-icon.png" alt="" /></a>
                            <a href="#" className="button-icon"><img src="assets/images/icons/twitter-icon.png" alt="" /></a>
                          </div>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">John Deo</h5>
                          <p className="card-text">President &amp; Ceo</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="team-card">
                        <div className="team-card-wrapper">
                          <img src="assets/images/team2.png" className="card-img-top" alt="" />
                          <div className="button-set">
                            <a href="#" className="button-icon"><img src="assets/images/icons/facebook-icon.png" alt="" /></a>
                            <a href="#" className="button-icon"><img src="assets/images/icons/instagram-icon.png" alt="" /></a>
                            <a href="#" className="button-icon"><img src="assets/images/icons/twitter-icon.png" alt="" /></a>
                          </div>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">John Deo</h5>
                          <p className="card-text">Manager</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="team-card">
                        <div className="team-card-wrapper">
                          <img src="assets/images/team3.png" className="card-img-top" alt="" />
                          <div className="button-set">
                            <a href="#" className="button-icon"><img src="assets/images/icons/facebook-icon.png" alt="" /></a>
                            <a href="#" className="button-icon"><img src="assets/images/icons/instagram-icon.png" alt="" /></a>
                            <a href="#" className="button-icon"><img src="assets/images/icons/twitter-icon.png" alt="" /></a>
                          </div>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">John Deo</h5>
                          <p className="card-text">Developer</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="team-card">
                        <div className="team-card-wrapper">
                          <img src="assets/images/team4.png" className="card-img-top" alt="" />
                          <div className="button-set">
                            <a href="#" className="button-icon"><img src="assets/images/icons/facebook-icon.png" alt="" /></a>
                            <a href="#" className="button-icon"><img src="assets/images/icons/instagram-icon.png" alt="" /></a>
                            <a href="#" className="button-icon"><img src="assets/images/icons/twitter-icon.png" alt="" /></a>
                          </div>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">John Deo</h5>
                          <p className="card-text">Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       
      </main>
    </>
  )
}

export default About