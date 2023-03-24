import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Swal from 'sweetalert2'
import instance from "../../axios";
export const Footer = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleEmail = event => {
    if (!isValidEmail(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Enter Valid Email!',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      instance.post('/api/emailSubsription', { email })
        .then(res => {
          console.log(res, 'footer res')
          if (res.status === 200) {
            Swal.fire({
              icon: 'success',
              title: 'Subscribed Successfully',
              showConfirmButton: false,
              timer: 2500
            }
            )
            setEmail('')
          }
          else {
            Swal.fire({
              icon: 'error',
              title: 'Check your email again',
              showConfirmButton: false,
              timer: 2500
            })
          }
        })

    }

    ;
  };
  return (
    <>
      <section className="newsletter-section">
        <div className="container">
          <div className="col-lg-11 col-md-11 mx-auto">
            <div className="row">
              <div className="col-lg-8 col-md-8 mb-4 mb-lg-0">
                <h4 className="head-title">{t("footer.Never Miss A Drop")}</h4>
                <div className="email-form">
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="email-input" placeholder={t("footer.Enter your email address")} />
                  <div className="email-button">
                    <button className="btn" onClick={handleEmail}><span>{t("footer.Subscribe")}</span></button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <h4 className="head-title">{t("footer.Join The Community")}</h4>
                <div className="widget-social">
                  <ul>
                    <li ><a href="#" data-toggle="tooltip" title="Discord"><img src="/assets/images/icons/discord-icon.png" alt="" /> </a></li>
                    <li><a href="#" data-toggle="tooltip" title="twitter"><img src="/assets/images/icons/twitter-icon.png" alt="" /></a></li>
                    <li><a href="#" data-toggle="tooltip" title="Instagram"><img src="/assets/images/icons/instagram-icon-large.png" alt="" /></a></li>
                    <li><a href="#" data-toggle="tooltip" title="Youtube"><img src="/assets/images/icons/youtube-icon2.png" alt="" /></a></li>
                    <li><a href="#" data-toggle="tooltip" title="Email"><img src="/assets/images/icons/mail-icon.png" alt="" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-12">
                <div className="widget widget-logo">
                  <div className="logo-footer">
                    <a href="index.html"><img src="/assets/images/icons/light-logo.png" alt="" className="light-logo" /></a>
                    <a href="index.html"><img src="/assets/images/icons/dark-logo.png" alt="" className="dark-logo" /></a>
                  </div>
                  <p className="sub-widget-title">{t("footer.footer_content")}</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-5 col-5">
                <div className="widget widget-menu ">
                  <h5 className="title-widget">{t("footer.MarketPlace")}</h5>
                  <ul>
                    <li><a href="#">{t("footer.Art")}</a></li>
                    <li><a href="#">{t("footer.Collectibles")}</a></li>
                    <li><a href="#">{t("footer.Domain Names")}</a></li>
                    <li><a href="#">{t("footer.Music")}</a></li>
                    <li><a href="#">{t("footer.Photography")}</a></li>
                    <li><a href="#">{t("footer.Sports")}</a></li>
                    <li><a href="#">{t("footer.Trading Cards")}</a></li>
                    <li><a href="#">{t("footer.Utility")}</a></li>
                    <li><a href="#">{t("footer.Virtual Words")}</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-7 col-7">
                <div className="widget widget-menu">
                  <h5 className="title-widget">{t("footer.My Account")}</h5>
                  <ul>
                    <li><Link to="/profile">{t("footer.Profile")}</Link></li>
                    <li><a href="#">{t("footer.Favorite")}</a></li>
                    <li><Link to="/mycollections">{t("footer.My Collection")}</Link></li>
                    <li><a href="#">{t("footer.Settings")}</a></li>
                    <li><a href="#">{t("footer.Notifications")}</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-5 col-5">
                <div className="widget widget-menu">
                  <h5 className="title-widget">{t("footer.Community1")}</h5>
                  <ul>
                    <li><Link to="/helpcenter"> {t("footer.Help Desk")}</Link></li>
                    <li><Link to="/blog">{t("footer.Blog")}</Link></li>
                    <li><a href="#">{t("footer.News Letter")}</a></li>
                    <li><Link to="/partners">{t("footer.Become A Partner")}</Link></li>
                    <li><Link to="/suggestions">{t("footer.Suggestions")}</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-1 col-md-4 col-sm-5 col-5">
                <div className="widget widget-menu">
                  <h5 className="title-widget">{t("footer.Company")}</h5>
                  <ul>
                    <li><Link to="/about">{t("footer.About")}</Link></li>
                    <li><a href="#">{t("footer.Careers")}</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-7 col-12">
                <div className="widget widget-apps ps-lg-5">
                  <h5 className="title-widget">{t("footer.NFThee Apps")}</h5>
                  <p className="subtitle-widget">{t("footer.Download the NFThee app. and discover special NFTs anytime, anywhere")}</p>
                  <div className="widget-social">
                    <ul>
                      <li><a href="#"><img src="/assets/images/icons/play-store.png" alt="" className="w-75" /></a></li>
                      <li><a href="#"><img src="/assets/images/icons/app-store.png" alt="" className="w-75" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-12 col-lg-5"><p><a href="#">©2022 {t("footer.copy rights")}</a></p></div>
              <div className="col-12 col-lg-7 text-end"><ul>
                <li><Link to="/termscondition">{t("footer.Terms & Conditions")}</Link></li>
                <li><Link to="/privacy">{t("footer.Privacy Policy")}</Link></li>
              </ul></div>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
};
