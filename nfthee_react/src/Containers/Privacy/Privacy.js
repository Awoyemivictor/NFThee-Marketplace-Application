import { useEffect } from "react";

function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main>
        <section className="bg-section privacy-policy-section">
          <div className="container">
            <div className="section-heading text-center mb-5">
              <h2 className="section-title mb-1">Privacy Statement</h2>
              <span>
                <img
                  src="assets/images/path1.png"
                  alt=""
                  className="img-fluid"
                />
              </span>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <div className="privacy-policy-wrapper">
                  <p className="mb-0">
                    This is the privacy statement of NFThee b.v., trading under
                    the name <a href="#">www.nfthee.com</a>, hereafter referred
                    to as <a href="#">www.nfthee.com</a>. <br />{" "}
                    <a href="#">www.nfthee.com</a> is registered at the
                    Netherlands Chamber of Commerce (KvK) with registration
                    number [fill in number] and is located at [fill in address]
                    in [fill in city]. <br />
                    This document explains how <a href="#">
                      www.nfthee.com
                    </a>{" "}
                    handles the processing of your personal data. When
                    processing your personal data,{" "}
                    <a href="#">www.nfthee.com</a> takes the greatest possible
                    care.
                  </p>
                </div>
                <div className="accordion mt-4" id="privacystatement">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button border-0 bg-transparent"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Collection of personal data :
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse border-0 collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#privacystatement"
                    >
                      <div className="accordion-body bg-transparent">
                        <p>
                          {" "}
                          When you make use of <a href="#">
                            www.nfthee.com
                          </a>{" "}
                          services, you provide some of your personal data to{" "}
                          <a href="#">www.nfthee.com</a>. In addition, personal
                          data may be collected from you as part of the
                          agreement. Personal data are defined as all data that
                          relate to an identified or identifiable natural
                          person.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button border-0 bg-transparent collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Personal data per category :
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse border-0 collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#privacystatement"
                    >
                      <div className="accordion-body bg-transparent">
                        <p>
                          <a href="#">www.nfthee.com</a> processes the following
                          categories of personal data:
                        </p>
                        <ul>
                          <li>
                            personal details and contact details, including name
                            and address, location, telephone number, e-mail
                            address;
                          </li>
                          <li>
                            company details, including VAT number and
                            Netherlands Chamber of Commerce (KvK) registration
                            number;
                          </li>
                          <li>financial details;</li>
                          <li>
                            account details, including your password and
                            username;
                          </li>
                          <li>customer number;</li>
                          <li>ryptocurrency (wallet) address;</li>
                          <li>IP-address;</li>
                          <li>transaction details;</li>
                          <li>verification documents;</li>
                          <li>other personal details provided by you.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button border-0 bg-transparent collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Purposes of data processing :
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse border-0 collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#privacystatement"
                    >
                      <div className="accordion-body bg-transparent">
                        <p>
                          Personal data are processed by{" "}
                          <a href="#">www.nfthee.com</a> for the purpose of
                        </p>
                        <ul>
                          <li>
                            contacting you with information about your purchased
                            services and the performance thereof;
                          </li>
                          <li>performing professional duties;</li>
                          <li>improving services;</li>
                          <li>making payments;</li>
                          <li>fulfilling legal obligations;</li>
                          <li>
                            promotional and communication statements, including
                            the improvement of the website by means of visitor
                            behaviour analysis;
                          </li>
                          <li>sending out newsletters;</li>
                          <li>
                            exchanging data with third parties in as far as this
                            is necessary for the performance of services.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button border-0 bg-transparent collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Bases for data processing :
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse border-0 collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#privacystatement"
                    >
                      <div className="accordion-body bg-transparent">
                        <p>
                          Processing personal data is only possible on the
                          following bases: (i) legal obligation, (ii)
                          realisation of an agreement, (iii) obtained consent of
                          the parties involved and (iv) legitimate interest.{" "}
                          <br /> <a href="#">www.nfthee.com</a> processes
                          personal data in order to perform its services. <br />{" "}
                          <a href="#">www.nfthee.com</a> exclusively processes
                          the data it considers necessary to the performance or
                          improvement of its services and handles personal data
                          which it has collected about you and your use of its
                          services with the utmost care . <br /> The basis for
                          processing these data is the agreement you have made
                          with
                          <a href="#">www.nfthee.com</a>. <br /> Your data may
                          also be processed by visiting the{" "}
                          <a href="#">www.nfthee.com</a> website and granting
                          your consent.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button border-0 bg-transparent collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Necessity of data processing :
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse border-0 collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#privacystatement"
                    >
                      <div className="accordion-body bg-transparent">
                        <p>
                          {" "}
                          Processing your personal data is necessary for{" "}
                          <a href="#">www.nfthee.com</a> to perform its
                          services. <br /> The services offered by{" "}
                          <a href="#">www.nfthee.com</a> cannot be fully
                          performed without processing your personal data. In
                          case your explicit consent regarding your personal
                          data is required for specific purposes, you will be
                          asked to grant permission separately.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button
                        className="accordion-button border-0 bg-transparent collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        Automated decision-making :
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse border-0 collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#privacystatement"
                    >
                      <div className="accordion-body bg-transparent">
                        <p>
                          {" "}
                          At this moment <a href="#">www.nfthee.com</a> does not
                          use automated decision-making.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button
                        className="accordion-button border-0 bg-transparent collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        Retention period :
                      </button>
                    </h2>
                    <div
                      id="collapseSeven"
                      className="accordion-collapse border-0 collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#privacystatement"
                    >
                      <div className="accordion-body bg-transparent">
                        <p>
                          Personal data processed by{" "}
                          <a href="#">www.nfthee.com</a> are retained in
                          accordance with the relevant laws and regulations. In
                          case a longer retention period is required by laws or
                          regulations, the personal data will be retained longer
                          to meet these requirements. All collected personal
                          data are only retained for as long as this is strictly
                          necessary
                        </p>
                        <p>
                          <a href="#">www.nfthee.com</a> has a legal obligation
                          to retain personal data that are used for
                          identification, verification, research activities and
                          FIU reports for a duration of 5 years after the
                          business relationship has been terminated, as
                          stipulated in article 33, paragraph 3 and article 34
                          of the Wwft (the Dutch Anti-Money Laundering and
                          Anti-Terrorist Financing Act). Data relating to
                          transactions are retained by{" "}
                          <a href="#">www.nfthee.com</a> for a period of 7 years
                          after the last relevant calendar year, as stipulated
                          in article 52 of the Dutch General Tax Act.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button
                        className="accordion-button border-0 bg-transparent collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEight"
                        aria-expanded="false"
                        aria-controls="collapseEight"
                      >
                        Data exchange with third parties :
                      </button>
                    </h2>
                    <div
                      id="collapseEight"
                      className="accordion-collapse border-0 collapse"
                      aria-labelledby="headingEight"
                      data-bs-parent="#privacystatement"
                    >
                      <div className="accordion-body bg-transparent">
                        <p>
                          <a href="#">www.nfthee.com</a> only exchanges personal
                          data with third parties if this is strictly necessary
                          to the realisation of an agreement and to comply with
                          the relevant laws and regulations. Personal data are
                          not sold. <br /> <a href="#">www.nfthee.com</a> may be
                          under a legal obligation to exchange personal data
                          with third parties. When personal data are exchanged
                          with third parties, data processing agreements are
                          concluded for this purpose. Third parties with whom
                          personal data are shared include:
                        </p>
                        <ul>
                          <li>
                            the payment provider, for the purpose of realising
                            an agreement. The category of personal data which is
                            processed concerns financial details.
                          </li>
                          <li>
                            the accountant, for the purpose of realising an
                            agreement. The categories of personal data which are
                            processed concern personal details and financial
                            details.
                          </li>
                          <li>
                            software suppliers, for the purpose of realising an
                            agreement. The categories of personal data which are
                            processed concern personal details and contact
                            details.
                          </li>
                          <li>
                            the website operator, for the purpose of realising
                            an agreement. The categories of personal data which
                            are processed concern personal details and contact
                            details.
                          </li>
                          <li>
                            third parties, for the purpose of realising an
                            agreement. The categories of personal data which are
                            processed concern personal details and contact
                            details.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNine">
                      <button
                        className="accordion-button border-0 bg-transparent collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseNine"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                      >
                        Security of personal data :
                      </button>
                    </h2>
                    <div
                      id="collapseNine"
                      className="accordion-collapse border-0 collapse"
                      aria-labelledby="headingNine"
                      data-bs-parent="#privacystatement"
                    >
                      <div className="accordion-body bg-transparent">
                        <p>
                          <a href="#">www.nfthee.com</a> takes the protection of
                          your personal data seriously and in this respect takes
                          appropriate technical and organisational measures to
                          ensure a risk-adapted security level. <br />{" "}
                          <a href="#">www.nfthee.com</a> hereby takes into
                          consideration the available technology, operating
                          costs, as well as the nature, scope, context and
                          processing purposes. It likewise considers risks to
                          personal rights and freedoms of various degrees of
                          probability and severity.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTen">
                      <button
                        className="accordion-button border-0 bg-transparent collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTen"
                        aria-expanded="false"
                        aria-controls="collapseTen"
                      >
                        Disclaimer :
                      </button>
                    </h2>
                    <div
                      id="collapseTen"
                      className="accordion-collapse border-0 collapse"
                      aria-labelledby="headingTen"
                      data-bs-parent="#privacystatement"
                    >
                      <div className="accordion-body bg-transparent">
                        <p>
                          By using the website you agree to the disclaimer.{" "}
                          <a href="#">www.nfthee.com</a> reserves the right to
                          at all times amend the content of its website and/or
                          this disclaimer without informing its customers and/or
                          users of the website about this amendment. The content
                          of the website is created with the greatest care, but
                          may nevertheless be incomplete or contain possible
                          inaccuracies. <a href="#">www.nfthee.com</a> does not
                          in any way accept responsibility for damage caused by
                          or resulting from use of the website.
                        </p>
                        <p>
                          The trade of digital currency carries a significant
                          risk. Every digital currency may be subject to large
                          price fluctuations and may change any time of day.
                          Please make sure you are aware of the risks involved
                          in trading crypto currency. We advise you to obtain
                          information from an impartial, competent person or
                          organisation before you start trading.
                        </p>
                        <p>
                          The use of the website is entirely at the risk and
                          expense of the website user. No rights can be derived
                          from the website content. All the website texts are
                          protected by copyright and are owned by{" "}
                          <a href="#">www.nfthee.com</a> insofar as these are
                          not property of third parties.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEleven">
                      <button
                        className="accordion-button border-0 bg-transparent collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEleven"
                        aria-expanded="false"
                        aria-controls="collapseEleven"
                      >
                        Cookie statement :
                      </button>
                    </h2>
                    <div
                      id="collapseEleven"
                      className="accordion-collapse border-0 collapse"
                      aria-labelledby="headingEleven"
                      data-bs-parent="#privacystatement"
                    >
                      <div className="accordion-body bg-transparent">
                        <p>
                          <a href="#">www.nfthee.com</a> makes use of technical
                          and functional cookies in order to optimise the
                          website. Cookies are small text files placed by
                          websites in order to make user experience more
                          efficient. <a href="#">www.nfthee.com</a> is
                          authorised by law to save cookies to your device if
                          these cookies are strictly necessary to use the
                          website. For other types of cookies your permission is
                          required. <a href="#">www.nfthee.com</a> advises you
                          to accept cookies to enhance user-friendliness of the
                          website. Website visitors have a check in option.
                        </p>
                        <p>
                          The cookies used by <a href="#">www.nfthee.com</a> are
                          functional cookies: these cookies ensure the website
                          functions properly. These cookies have no consequence
                          for your personal environment, hence it is not
                          required for you to grant permission. These cookies,
                          for instance, save your browser settings in order to
                          optimise the website view, to keep the website
                          accessible (load-balancing) or to ensure that no other
                          cookies are placed (no follow).{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwelve">
                      <button
                        className="accordion-button border-0 bg-transparent collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwelve"
                        aria-expanded="false"
                        aria-controls="collapseTwelve"
                      >
                        Use of social media :
                      </button>
                    </h2>
                    <div
                      id="collapseTwelve"
                      className="accordion-collapse border-0 collapse"
                      aria-labelledby="headingTwelve"
                      data-bs-parent="#privacystatement"
                    >
                      <div className="accordion-body bg-transparent">
                        <p>
                          <a href="#">www.nfthee.com</a> makes use of third
                          party cookies in order to optimise the website. Some
                          cookies are placed by third party services displayed
                          on the website. Third parties include Google Analytics
                          and social media (Twitter, Discord, e-mail, YouTube,
                          Instagram). <br /> The use of third-party cookies is
                          subject to the privacy and cookie policy of the
                          company concerned. When you click on a social media
                          button on the website, a social media cookie is
                          placed. This allows the social media channel to
                          recognise your IP-address as soon as you share an
                          article from the website. For information about social
                          media cookies and the personal data that they collect,{" "}
                          <a href="#">www.nfthee.com</a> refers you to the
                          privacy and cookie statements of these parties.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThirteen">
                      <button
                        className="accordion-button border-0 bg-transparent collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThirteen"
                        aria-expanded="false"
                        aria-controls="collapseThirteen"
                      >
                        E-mail newsletter and other promotional mails :
                      </button>
                    </h2>
                    <div
                      id="collapseThirteen"
                      className="accordion-collapse border-0 collapse"
                      aria-labelledby="headingThirteen"
                      data-bs-parent="#privacystatement"
                    >
                      <div className="accordion-body bg-transparent">
                        <p>
                          Via the website, you may register for a newsletter
                          and/or other commercial offers. When you register{" "}
                          <a href="#">www.nfthee.com</a> asks for your
                          permission to process your e-mail address with the
                          purpose of sending you promotional e-mails containing
                          the most recent information regarding products and
                          services, special offers and marketing campaigns. You
                          will only receive promotional e-mails if you grant
                          your permission.
                        </p>
                        <p>
                          Your permission entails your approval of receiving
                          personalised content, in accordance with your needs
                          and interests as derived from the user profile
                          potentially created for you by{" "}
                          <a href="#">www.nfthee.com</a>.
                        </p>
                        <p>
                          Your permission to receive promotional e-mails may be
                          withdrawn at any desired moment by clicking
                          ‘’unsubscribe’’ at the bottom of the promotional
                          e-mail. Withdrawing permission does not influence the
                          legitimacy of data processing prior to the permission
                          withdrawal.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFourteen">
                      <button
                        className="accordion-button border-0 bg-transparent collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFourteen"
                        aria-expanded="false"
                        aria-controls="collapseFourteen"
                      >
                        Browser settings :
                      </button>
                    </h2>
                    <div
                      id="collapseFourteen"
                      className="accordion-collapse border-0 collapse"
                      aria-labelledby="headingFourteen"
                      data-bs-parent="#privacystatement"
                    >
                      <div className="accordion-body bg-transparent">
                        <p>
                          If you do not want websites to place cookies on the
                          device which you are using to view the website, you
                          can adjust your browser settings. Before a cookie is
                          placed, you receive a warning and are required to
                          grant your permission for the cookie. If you do not
                          consent, a possible consequence is that the website
                          will function less well. You can adjust the settings
                          of your browser to reject all cookies and third party
                          cookies. You can also delete cookies that have already
                          been placed. In order to do this, go to your browser
                          settings and select your preferred privacy settings.
                        </p>
                        <p>
                          This privacy statement does not apply to third party
                          websites connected to the{" "}
                          <a href="#">www.nfthee.com</a> website via links.{" "}
                          <a href="#">www.nfthee.com</a> cannot guarantee that
                          these third parties handle your personal data in a
                          confidential or safe manner.{" "}
                          <a href="#">www.nfthee.com</a> advises you to read the
                          privacy statements of these websites prior to using
                          them.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFifteen">
                      <button
                        className="accordion-button border-0 bg-transparent collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFifteen"
                        aria-expanded="false"
                        aria-controls="collapseFifteen"
                      >
                        Rights of data subjects :
                      </button>
                    </h2>
                    <div
                      id="collapseFifteen"
                      className="accordion-collapse border-0 collapse"
                      aria-labelledby="headingFifteen"
                      data-bs-parent="#privacystatement"
                    >
                      <div className="accordion-body bg-transparent">
                        <p>
                          Being a data subject you have the following rights:
                        </p>
                        <ul>
                          <li>
                            <strong>Right of access</strong>
                            <p>
                              Being a data subject, you have the right to verify
                              whether or not your personal data are being
                              processed and if this is indeed the case, you have
                              the right to inspect the processing of your data.
                            </p>
                          </li>
                          <li>
                            <strong>Right to erasure</strong>
                            <p>
                              You have the right to rectification of incorrect
                              data and addition of missing data.
                            </p>
                          </li>
                          <li>
                            <strong>Right to erasure </strong>
                            <p>
                              A data subject has the right to removal of data
                              relating to them, without unreasonable delay.
                            </p>
                          </li>
                          <li>
                            <strong>Right to restriction of processing</strong>
                            <p>
                              Being a data subject, you have the right to block
                              the processing of your personal data. In order to
                              do this, please contact{" "}
                              <a href="#">www.nfthee.com</a>.
                            </p>
                          </li>
                          <li>
                            <strong>Right to data portability</strong>
                            <p>
                              A data subject has the right to obtain the data
                              relating to them and which they have provided to{" "}
                              <a href="#">www.nfthee.com</a>, in a structured,
                              conventional and machine readable form in order to
                              potentially transfer these personal data to a
                              third party. A data subject can likewise instruct{" "}
                              <a href="#">www.nfthee.com</a> to transfer these
                              data directly to a third party.
                            </p>
                          </li>
                          <li>
                            <strong>Right to appeal</strong>
                            <p>
                              A data subject, at all times and for the reasons
                              pertaining to their specific situation, has the
                              right to object to the processing of data related
                              to them. This includes profiling on the basis of
                              these data. <br /> <a href="#">www.nfthee.com</a>{" "}
                              will cease the processing of personal data, unless
                              there are compelling legitimate grounds for
                              processing, which outweigh the interests, freedoms
                              and rights of the data subject and are necessary
                              for the establishment, exercise or defence of
                              legal claims.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSixteen">
                      <button
                        className="accordion-button border-0 bg-transparent collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSixteen"
                        aria-expanded="false"
                        aria-controls="collapseSixteen"
                      >
                        Complaints :
                      </button>
                    </h2>
                    <div
                      id="collapseSixteen"
                      className="accordion-collapse border-0 collapse"
                      aria-labelledby="headingSixteen"
                      data-bs-parent="#privacystatement"
                    >
                      <div className="accordion-body bg-transparent">
                        <p>
                          If you have a complaint about the manner in which{" "}
                          <a href="#">www.nfthee.com</a> handles your personal
                          data or if you want to exercise one of the
                          above-mentioned rights, please contact{" "}
                          <a href="#">www.nfthee.com</a> via the website or
                          e-mail <a href="#">support@nfthee.com</a> . <br /> To
                          confirm that you would like to exercise a right,{" "}
                          <a href="#">www.nfthee.com</a> asks you to send a copy
                          of your identity document. In order to protect your
                          privacy, you may black out your passport photo and MRZ
                          (this is the bar of numbers at the bottom). <br />{" "}
                          <a href="#">www.nfthee.com</a> will respond to your
                          request as soon as possible, but no later than within
                          4 weeks. In addition, you may submit a complaint to
                          the Dutch Data Protection Authority. This is the
                          competent enforcement authority. You can contact them
                          via this link:{" "}
                          <a href="#">
                            https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeventeen">
                      <button
                        className="accordion-button border-0 bg-transparent collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeventeen"
                        aria-expanded="false"
                        aria-controls="collapseSeventeen"
                      >
                        Amendments to the privacy statement :
                      </button>
                    </h2>
                    <div
                      id="collapseSeventeen"
                      className="accordion-collapse border-0 collapse"
                      aria-labelledby="headingSeventeen"
                      data-bs-parent="#privacystatement"
                    >
                      <div className="accordion-body bg-transparent">
                        <p>
                          <a href="#">www.nfthee.com</a> may amend the privacy
                          statement at all times. The latest version is
                          published on the website. In order to stay up to date,
                          please pay attention to the website. Provided the new
                          privacy statement has consequences for the manner in
                          which <a href="#">www.nfthee.com</a> processes already
                          collected data relating to you,{" "}
                          <a href="#">www.nfthee.com</a> will inform you of this
                          via e-mail.
                        </p>
                        <p>This version was last modified on 17 March 2022</p>
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

export default Privacy;
