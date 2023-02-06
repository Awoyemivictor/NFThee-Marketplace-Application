import React, { useEffect } from "react";
import $ from "jquery";

function HowItWorks() {
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
        <section className="work-section bg-section overflow-hidden">
          <div className="container-fluid">
            <div className="section-heading text-center mb-5">
              <h2 className="section-title mb-1">How It Works</h2>
              <span><img src="assets/images/path1.png" alt="" className="img-fluid" /></span>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <div className="work-section-wrapper">
                  <div className="row align-items-start">
                    <div className="col-lg-4 col-md-4">
                      <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active" id="work-tab1-tab" data-bs-toggle="pill" data-bs-target="#work-tab1" type="button" role="tab" aria-selected="true">
                          <h3>General Inquiries</h3>
                          <p>New Around Here? Start With The Basics</p>
                        </a>
                        <a className="nav-link" id="work-tab2-tab" data-bs-toggle="pill" data-bs-target="#work-tab2" type="button" role="tab" aria-selected="false">
                          <h3>Safety, Security, And Policies</h3>
                          <p>New Around Here? Start With The Basics</p>
                        </a>
                        <a className="nav-link" id="work-tab3-tab" data-bs-toggle="pill" data-bs-target="#work-tab3" type="button" role="tab" aria-selected="false">
                          <h3>Using Rarible</h3>
                          <p>New Around Here? Start With The Basics</p>
                        </a>
                        <a className="nav-link" id="work-tab4-tab" data-bs-toggle="pill" data-bs-target="#work-tab4" type="button" role="tab" aria-selected="false">
                          <h3>Troubleshooting</h3>
                          <p>New Around Here? Start With The Basics</p>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-8">
                      <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="work-tab1" role="tabpanel">
                          <div className="content-heading text-center mt-lg-2 pb-lg-3">
                            <h2>General Inquiries</h2>
                          </div>
                          <div className="content-body">
                            <div className="accordion-panel-wrapper">
                              <div className="panel-set">
                                <h5><a className="active" href="#">Purchasing Process <i className="bx bx-minus" /></a></h5>
                                <div className="panel-content" style={{display: 'block'}}>
                                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
                                    Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing And
                                    Typesetting Industry. But Also The Leap Into Electronic Typesetting,
                                    Remaining Essentially Unchanged It Was Popularised In The 1960S With The
                                    Release Of Letraset Sheets Containing Lorem Ipsum Passages, And More
                                    Recently With Desktop Publishing Software Like Aldus Pagemaker Including
                                    Versions Of Lorem Ipsum</p>
                                </div>
                              </div>
                              <div className="panel-set">
                                <h5><a href="#">How Secure Are Your Payment Information <i className="bx bx-plus" /></a></h5>
                                <div className="panel-content">
                                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
                                    Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing And
                                    Typesetting Industry. But Also The Leap Into Electronic Typesetting,
                                    Remaining Essentially Unchanged It Was Popularised In The 1960S With The
                                    Release Of Letraset Sheets Containing Lorem Ipsum Passages, And More
                                    Recently With Desktop Publishing Software Like Aldus Pagemaker Including
                                    Versions Of Lorem Ipsum</p>
                                </div>
                              </div>
                              <div className="panel-set">
                                <h5><a href="#">How to apply for a prepaid card? <i className="bx bx-plus" /></a></h5>
                                <div className="panel-content">
                                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
                                    Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing And
                                    Typesetting Industry. But Also The Leap Into Electronic Typesetting,
                                    Remaining Essentially Unchanged It Was Popularised In The 1960S With The
                                    Release Of Letraset Sheets Containing Lorem Ipsum Passages, And More
                                    Recently With Desktop Publishing Software Like Aldus Pagemaker Including
                                    Versions Of Lorem Ipsum</p>
                                </div>
                              </div>
                              <div className="panel-set">
                                <h5><a href="#">How Secure Is My Data In App? <i className="bx bx-plus" /></a>
                                </h5>
                                <div className="panel-content">
                                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
                                    Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing And
                                    Typesetting Industry. But Also The Leap Into Electronic Typesetting,
                                    Remaining Essentially Unchanged It Was Popularised In The 1960S With The
                                    Release Of Letraset Sheets Containing Lorem Ipsum Passages, And More
                                    Recently With Desktop Publishing Software Like Aldus Pagemaker Including
                                    Versions Of Lorem Ipsum</p>
                                </div>
                              </div>
                              <div className="panel-set">
                                <h5><a href="#">How Do I Know Of I Have Latest Version? <i className="bx bx-plus" /></a></h5>
                                <div className="panel-content">
                                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
                                    Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing And
                                    Typesetting Industry. But Also The Leap Into Electronic Typesetting,
                                    Remaining Essentially Unchanged It Was Popularised In The 1960S With The
                                    Release Of Letraset Sheets Containing Lorem Ipsum Passages, And More
                                    Recently With Desktop Publishing Software Like Aldus Pagemaker Including
                                    Versions Of Lorem Ipsum</p>
                                </div>
                              </div>
                              <div className="panel-set">
                                <h5><a href="#">Download Offline &amp; Documentation <i className="bx bx-plus" /></a></h5>
                                <div className="panel-content">
                                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
                                    Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing And
                                    Typesetting Industry. But Also The Leap Into Electronic Typesetting,
                                    Remaining Essentially Unchanged It Was Popularised In The 1960S With The
                                    Release Of Letraset Sheets Containing Lorem Ipsum Passages, And More
                                    Recently With Desktop Publishing Software Like Aldus Pagemaker Including
                                    Versions Of Lorem Ipsum</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="work-tab2" role="tabpanel">
                          <div className="content-heading text-center mt-lg-2 pb-lg-3">
                            <h2>Safety, Security, And Policies</h2>
                          </div>
                          <div className="content-body">
                            <div className="accordion-panel-wrapper">
                              <div className="panel-set">
                                <h5><a className="active" href="#">Purchasing Process <i className="bx bx-minus" /></a></h5>
                                <div className="panel-content" style={{display: 'block'}}>
                                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
                                    Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing
                                    And Typesetting Industry. But Also The Leap Into Electronic
                                    Typesetting, Remaining Essentially Unchanged It Was Popularised In
                                    The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum
                                    Passages, And More Recently With Desktop Publishing Software Like
                                    Aldus Pagemaker Including Versions Of Lorem Ipsum</p>
                                </div>
                              </div>
                              <div className="panel-set">
                                <h5><a href="#">How Secure Are Your Payment Information <i className="bx bx-plus" /></a></h5>
                                <div className="panel-content">
                                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
                                    Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing
                                    And Typesetting Industry. But Also The Leap Into Electronic
                                    Typesetting, Remaining Essentially Unchanged It Was Popularised In
                                    The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum
                                    Passages, And More Recently With Desktop Publishing Software Like
                                    Aldus Pagemaker Including Versions Of Lorem Ipsum</p>
                                </div>
                              </div>
                              <div className="panel-set">
                                <h5><a href="#">How to apply for a prepaid card? <i className="bx bx-plus" /></a></h5>
                                <div className="panel-content">
                                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
                                    Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing
                                    And Typesetting Industry. But Also The Leap Into Electronic
                                    Typesetting, Remaining Essentially Unchanged It Was Popularised In
                                    The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum
                                    Passages, And More Recently With Desktop Publishing Software Like
                                    Aldus Pagemaker Including Versions Of Lorem Ipsum</p>
                                </div>
                              </div>
                              <div className="panel-set">
                                <h5><a href="#">How Secure Is My Data In App? <i className="bx bx-plus" /></a></h5>
                                <div className="panel-content">
                                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
                                    Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing
                                    And Typesetting Industry. But Also The Leap Into Electronic
                                    Typesetting, Remaining Essentially Unchanged It Was Popularised In
                                    The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum
                                    Passages, And More Recently With Desktop Publishing Software Like
                                    Aldus Pagemaker Including Versions Of Lorem Ipsum</p>
                                </div>
                              </div>
                              <div className="panel-set">
                                <h5><a href="#">How Do I Know Of I Have Latest Version? <i className="bx bx-plus" /></a></h5>
                                <div className="panel-content">
                                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
                                    Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing
                                    And Typesetting Industry. But Also The Leap Into Electronic
                                    Typesetting, Remaining Essentially Unchanged It Was Popularised In
                                    The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum
                                    Passages, And More Recently With Desktop Publishing Software Like
                                    Aldus Pagemaker Including Versions Of Lorem Ipsum</p>
                                </div>
                              </div>
                              <div className="panel-set">
                                <h5><a href="#">Download Offline &amp; Documentation <i className="bx bx-plus" /></a></h5>
                                <div className="panel-content">
                                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
                                    Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing
                                    And Typesetting Industry. But Also The Leap Into Electronic
                                    Typesetting, Remaining Essentially Unchanged It Was Popularised In
                                    The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum
                                    Passages, And More Recently With Desktop Publishing Software Like
                                    Aldus Pagemaker Including Versions Of Lorem Ipsum</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="work-tab3" role="tabpanel">
                          <div className="content-heading text-center mt-lg-2 pb-lg-3">
                            <h2>Using Rarible</h2>
                          </div>
                          <div className="content-body">
                            <div className="accordion-panel-wrapper">
                              <div className="panel-set">
                                <h5><a className="active" href="#">Purchasing Process <i className="bx bx-minus" /></a></h5>
                                <div className="panel-content" style={{display: 'block'}}>
                                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
                                    Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing
                                    And Typesetting Industry. But Also The Leap Into Electronic
                                    Typesetting, Remaining Essentially Unchanged It Was Popularised In
                                    The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum
                                    Passages, And More Recently With Desktop Publishing Software Like
                                    Aldus Pagemaker Including Versions Of Lorem Ipsum</p>
                                </div>
                              </div>
                              <div className="panel-set">
                                <h5><a href="#">How Secure Are Your Payment Information <i className="bx bx-plus" /></a></h5>
                                <div className="panel-content">
                                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
                                    Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing
                                    And Typesetting Industry. But Also The Leap Into Electronic
                                    Typesetting, Remaining Essentially Unchanged It Was Popularised In
                                    The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum
                                    Passages, And More Recently With Desktop Publishing Software Like
                                    Aldus Pagemaker Including Versions Of Lorem Ipsum</p>
                                </div>
                              </div>
                              <div className="panel-set">
                                <h5><a href="#">How to apply for a prepaid card? <i className="bx bx-plus" /></a></h5>
                                <div className="panel-content">
                                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
                                    Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing
                                    And Typesetting Industry. But Also The Leap Into Electronic
                                    Typesetting, Remaining Essentially Unchanged It Was Popularised In
                                    The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum
                                    Passages, And More Recently With Desktop Publishing Software Like
                                    Aldus Pagemaker Including Versions Of Lorem Ipsum</p>
                                </div>
                              </div>
                              <div className="panel-set">
                                <h5><a href="#">How Secure Is My Data In App? <i className="bx bx-plus" /></a></h5>
                                <div className="panel-content">
                                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
                                    Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing
                                    And Typesetting Industry. But Also The Leap Into Electronic
                                    Typesetting, Remaining Essentially Unchanged It Was Popularised In
                                    The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum
                                    Passages, And More Recently With Desktop Publishing Software Like
                                    Aldus Pagemaker Including Versions Of Lorem Ipsum</p>
                                </div>
                              </div>
                              <div className="panel-set">
                                <h5><a href="#">How Do I Know Of I Have Latest Version? <i className="bx bx-plus" /></a></h5>
                                <div className="panel-content">
                                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
                                    Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing
                                    And Typesetting Industry. But Also The Leap Into Electronic
                                    Typesetting, Remaining Essentially Unchanged It Was Popularised In
                                    The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum
                                    Passages, And More Recently With Desktop Publishing Software Like
                                    Aldus Pagemaker Including Versions Of Lorem Ipsum</p>
                                </div>
                              </div>
                              <div className="panel-set">
                                <h5><a href="#">Download Offline &amp; Documentation <i className="bx bx-plus" /></a></h5>
                                <div className="panel-content">
                                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
                                    Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing
                                    And Typesetting Industry. But Also The Leap Into Electronic
                                    Typesetting, Remaining Essentially Unchanged It Was Popularised In
                                    The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum
                                    Passages, And More Recently With Desktop Publishing Software Like
                                    Aldus Pagemaker Including Versions Of Lorem Ipsum</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="work-tab4" role="tabpanel">
                          <div className="content-heading text-center mt-lg-2 pb-lg-3">
                            <h2>Troubleshooting</h2>
                          </div>
                          <div className="content-body">
                            <div className="accordion-panel-wrapper">
                              <div className="panel-set">
                                <h5><a className="active" href="#">Purchasing Process <i className="bx bx-minus" /></a></h5>
                                <div className="panel-content" style={{display: 'block'}}>
                                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
                                    Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing
                                    And Typesetting Industry. But Also The Leap Into Electronic
                                    Typesetting, Remaining Essentially Unchanged It Was Popularised In
                                    The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum
                                    Passages, And More Recently With Desktop Publishing Software Like
                                    Aldus Pagemaker Including Versions Of Lorem Ipsum</p>
                                </div>
                              </div>
                              <div className="panel-set">
                                <h5><a href="#">How Secure Are Your Payment Information <i className="bx bx-plus" /></a></h5>
                                <div className="panel-content">
                                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
                                    Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing
                                    And Typesetting Industry. But Also The Leap Into Electronic
                                    Typesetting, Remaining Essentially Unchanged It Was Popularised In
                                    The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum
                                    Passages, And More Recently With Desktop Publishing Software Like
                                    Aldus Pagemaker Including Versions Of Lorem Ipsum</p>
                                </div>
                              </div>
                              <div className="panel-set">
                                <h5><a href="#">How to apply for a prepaid card? <i className="bx bx-plus" /></a></h5>
                                <div className="panel-content">
                                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
                                    Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing
                                    And Typesetting Industry. But Also The Leap Into Electronic
                                    Typesetting, Remaining Essentially Unchanged It Was Popularised In
                                    The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum
                                    Passages, And More Recently With Desktop Publishing Software Like
                                    Aldus Pagemaker Including Versions Of Lorem Ipsum</p>
                                </div>
                              </div>
                              <div className="panel-set">
                                <h5><a href="#">How Secure Is My Data In App? <i className="bx bx-plus" /></a></h5>
                                <div className="panel-content">
                                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
                                    Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing
                                    And Typesetting Industry. But Also The Leap Into Electronic
                                    Typesetting, Remaining Essentially Unchanged It Was Popularised In
                                    The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum
                                    Passages, And More Recently With Desktop Publishing Software Like
                                    Aldus Pagemaker Including Versions Of Lorem Ipsum</p>
                                </div>
                              </div>
                              <div className="panel-set">
                                <h5><a href="#">How Do I Know Of I Have Latest Version? <i className="bx bx-plus" /></a></h5>
                                <div className="panel-content">
                                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
                                    Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing
                                    And Typesetting Industry. But Also The Leap Into Electronic
                                    Typesetting, Remaining Essentially Unchanged It Was Popularised In
                                    The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum
                                    Passages, And More Recently With Desktop Publishing Software Like
                                    Aldus Pagemaker Including Versions Of Lorem Ipsum</p>
                                </div>
                              </div>
                              <div className="panel-set">
                                <h5><a href="#">Download Offline &amp; Documentation <i className="bx bx-plus" /></a></h5>
                                <div className="panel-content">
                                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
                                    Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing
                                    And Typesetting Industry. But Also The Leap Into Electronic
                                    Typesetting, Remaining Essentially Unchanged It Was Popularised In
                                    The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum
                                    Passages, And More Recently With Desktop Publishing Software Like
                                    Aldus Pagemaker Including Versions Of Lorem Ipsum</p>
                                </div>
                              </div>
                            </div>
                          </div>
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
  );
}

export default HowItWorks;
