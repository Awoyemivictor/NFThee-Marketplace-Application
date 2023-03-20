import {useEffect} from 'react'
import $ from "jquery";
import { Link } from "react-router-dom";
 

function HelpCenter() {
  useEffect(()=>{
    workScript();
  })
  
  const workScript =()=>{
    $(document).ready(function() {
      $(".panel-set h5").on("click", function () {
        if ($(this).hasClass("active")) {
              $(this).removeClass("active");
              $(this)
                  .siblings(".panel-content")
                  .slideUp(200);
              $(".panel-set  a i")
                  .removeClass("bx-minus")
                  .addClass("bx-plus");
          } else {
              $(".panel-set  a i")
                  .removeClass("bx-minus")
                  .addClass("bx-plus");
              $(this)
                  .find("i")
                  .removeClass("bx-plus")
                  .addClass("bx-minus");
              $(".panel-set  a").removeClass("active");
              $(this).addClass("active");
              $(".panel-content").slideUp(200);
              $(this)
                  .siblings(".panel-content")
                  .slideDown(200);
          }
          return false
      });
    })
   }
  return (
    <>

      
    <main>
        <section className="bg-section help-center-section">
          <div className="container">
            <div className="section-heading text-center mb-5">
              <h2 className="section-title mb-1">Hello, how can we help?</h2>
              <span><img src="assets/images/path1.png" alt="" className="img-fluid" /></span>
            </div>
            <div className="row mb-5">
              <div className="col-md-8 col-lg-8 mx-auto">
                <div className="help-center-searchbar">
                  <div className="input-group">
                    <span className="bx bx-search-alt-2 form-control-feedback" />
                    <input type="text" className="form-control" placeholder="Ask a question..." />
                    <div className="input-group-append">
                      <button className="btn" type="button">Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-10 col-lg-10 mx-auto p-0">
              <div className="help-center-tabs mb-lg-5 mb-4">
                <h3>Or Choose A Category To Quickly Find The Help You Need</h3>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item col-lg-3 col-md-3" role="presentation">
                    <button className="nav-link" id="pills-card-tab1" data-bs-toggle="pill" data-bs-target="#card-tab1" type="button" role="tab" aria-selected="true"><div><img src="assets/images/icons/flags.png" alt="" /></div>Getting Started</button>
                  </li>
                  <li className="nav-item col-lg-3 col-md-3" role="presentation">
                    <button className="nav-link active" id="pills-card-tab2" data-bs-toggle="pill" data-bs-target="#card-tab2" type="button" role="tab" aria-selected="false"><div><img src="assets/images/icons/price-tag-dark.png" alt="" /></div>Pricing &amp; Plans</button>
                  </li>
                  <li className="nav-item col-lg-3 col-md-3" role="presentation">
                    <button className="nav-link" id="pills-card-tab3" data-bs-toggle="pill" data-bs-target="#card-tab3" type="button" role="tab" aria-selected="false"><div><img src="assets/images/icons/shopping-cart.png" alt="" /></div>Selling</button>
                  </li>
                  <li className="nav-item col-lg-3 col-md-3" role="presentation">
                    <button className="nav-link" id="pills-card-tab4" data-bs-toggle="pill" data-bs-target="#card-tab4" type="button" role="tab" aria-selected="false"><div><img src="assets/images/icons/create.png" alt="" /></div>Creating</button>
                  </li>
                  <li className="nav-item col-lg-3 col-md-3" role="presentation">
                    <button className="nav-link" id="pills-card-tab5" data-bs-toggle="pill" data-bs-target="#card-tab5" type="button" role="tab" aria-selected="false"><div><img src="assets/images/icons/security.png" alt="" /></div>Security</button>
                  </li>
                  <li className="nav-item col-lg-3 col-md-3" role="presentation">
                    <button className="nav-link" id="pills-card-tab6" data-bs-toggle="pill" data-bs-target="#card-tab6" type="button" role="tab" aria-selected="false"><div><img src="assets/images/icons/blockchain.png" alt="" /></div>Blockchains</button>
                  </li>
                  <li className="nav-item col-lg-3 col-md-3" role="presentation">
                    <button className="nav-link" id="pills-card-tab7" data-bs-toggle="pill" data-bs-target="#card-tab7" type="button" role="tab" aria-selected="false"><div><img src="assets/images/icons/message.png" alt="" /></div>FAQ</button>
                  </li>
                  <li className="nav-item col-lg-3 col-md-3" role="presentation">
                    <button className="nav-link" id="pills-card-tab8" data-bs-toggle="pill" data-bs-target="#card-tab8" type="button" role="tab" aria-selected="false"><div><img src="assets/images/icons/create.png" alt="" /></div>Creating</button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade" id="card-tab1" role="tabpanel">1</div>
                  <div className="tab-pane fade show active" id="card-tab2" role="tabpanel">
                    <div className="tab-content-area">
                      <div className="pricing-tab-content">
                        <div className="pricing-tab-content-header">
                          <h2>Pricing Plan</h2>
                          <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                        </div>
                      </div>
                      <div className="accordion-panel-wrapper">
                        <div className="panel-set">
                          <h5><a className="active" href="#">Purchasing Process <i className="bx bx-minus" /></a></h5>
                          <div className="panel-content" style={{display: 'block'}}>
                            <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged It Was Popularised In The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum Passages, And More Recently With Desktop Publishing Software Like Aldus Pagemaker Including Versions Of Lorem Ipsum</p>
                          </div>
                        </div>
                        <div className="panel-set">
                          <h5><a href="#">How Secure Are Your Payment Information <i className="bx bx-plus" /></a></h5>
                          <div className="panel-content">
                            <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged It Was Popularised In The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum Passages, And More Recently With Desktop Publishing Software Like Aldus Pagemaker Including Versions Of Lorem Ipsum</p>
                          </div>
                        </div>
                        <div className="panel-set">
                          <h5><a href="#">How to apply for a prepaid card? <i className="bx bx-plus" /></a></h5>
                          <div className="panel-content">
                            <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged It Was Popularised In The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum Passages, And More Recently With Desktop Publishing Software Like Aldus Pagemaker Including Versions Of Lorem Ipsum</p>
                          </div>
                        </div>
                        <div className="panel-set">
                          <h5><a href="#">How Secure Is My Data In App? <i className="bx bx-plus" /></a></h5>
                          <div className="panel-content">
                            <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged It Was Popularised In The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum Passages, And More Recently With Desktop Publishing Software Like Aldus Pagemaker Including Versions Of Lorem Ipsum</p>
                          </div>
                        </div>
                        <div className="panel-set">
                          <h5><a href="#">How Do I Know Of I Have Latest Version? <i className="bx bx-plus" /></a></h5>
                          <div className="panel-content">
                            <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged It Was Popularised In The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum Passages, And More Recently With Desktop Publishing Software Like Aldus Pagemaker Including Versions Of Lorem Ipsum</p>
                          </div>
                        </div>
                        <div className="panel-set">
                          <h5><a href="#">Download Offline &amp; Documentation <i className="bx bx-plus" /></a></h5>
                          <div className="panel-content">
                            <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged It Was Popularised In The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum Passages, And More Recently With Desktop Publishing Software Like Aldus Pagemaker Including Versions Of Lorem Ipsum</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="card-tab3" role="tabpanel">3</div>
                  <div className="tab-pane fade" id="card-tab4" role="tabpanel">4</div>
                  <div className="tab-pane fade" id="card-tab5" role="tabpanel">5</div>
                  <div className="tab-pane fade" id="card-tab6" role="tabpanel">6</div>
                  <div className="tab-pane fade" id="card-tab7" role="tabpanel">7</div>
                  <div className="tab-pane fade" id="card-tab8" role="tabpanel">8</div>
                </div>
              </div>
              <div className="help-center-contact">
                <div className="help-center-contact-header mb-lg-5">
                  <h2>You Still Have A Question ?</h2>
                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                </div>
                <div className="col-lg-12 col-md-12 mx-auto">
                  <div className="help-center-contact-body">
                    <div className="row">
                      {/* <div className="col-lg-4 col-md-4">
                        <div className="card-wrapper mb-4 mb-lg-0">
                          <div className="card-body">
                            <img src="assets/images/icons/phone.png" alt="" className="mb-4" />
                            <h4 className="card-title card-title1">+(856) 09658585</h4>
                            <p className="card-text">We Always Ready To Help</p>
                          </div>
                        </div>
                      </div> */}
                      <div className="col-lg-6 col-md-6">
                        <div className="card-wrapper mb-4 mb-lg-0">
                          <div className="card-body">
                            <img src="assets/images/icons/mail.png" alt="" className="mb-4" />
                            <h4 className="card-title"> support@nfthee.com </h4>
                            <p className="card-text">The Best Way To Get Answer Faster</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <Link to="/profilesetting">
                        <div className="card-wrapper mb-4 mb-lg-0">
                        <div className="card-body">
                            <img src="assets/images/icons/submit-form.png" alt="" className="mb-4" />
                            <h4 className="card-title">Account Support</h4>
                            <p className="card-text">The Best Way To Get Answer Faster</p>
                          </div>
                        </div>
                        </Link>
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

export default HelpCenter