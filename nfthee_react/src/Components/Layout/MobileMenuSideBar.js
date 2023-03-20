import { link_main_menu } from "./Data";
import { Link } from "react-router-dom";
import $ from "jquery";
import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { languages } from "./Data";
import { OpenChildMenu, GlobalSearch } from "./ChildMenu";

function langFlag(currentLanguageCode) {
  switch (currentLanguageCode) {
    case "en":
      return "images/icons/united-states.png";
    case "fr":
      return "images/icons/fr.png";
    case "ger":
      return "images/icons/ger.png";
    case "cn":
      return "images/icons/ch.png";
    case "span":
      return "images/icons/span.png";
    case "portu":
      return "images/icons/portu.png";
    case "jpn":
      return "images/icons/jpn.png";
    case "arabic":
      return "images/icons/arabic.png";
  }
}

export const MobileMenuSidebar = () => {
  const { t } = useTranslation();
  const currentLanguageCode = cookies.get("i18next");

  const onCloseSideMenu = () => {
    $("body").removeClass("mobile-menu-visible");
  };

  return (
    <div className="mobile-menu">
      <div className="menu-backdrop" />
      <div className="close-btn">
        <i className="ri-close-fill" />
      </div>
      <nav className="menu-box">
        <div className="nav-logo">
          <Link to="/">
            <img
              src="assets/images/icons/light-logo.png"
              alt=""
              className="img-fluid light-logo"
            />
            <img
              src="assets/images/icons/dark-logo.png"
              alt=""
              className="img-fluid dark-logo"
            />
          </Link>
        </div>

        <GlobalSearch />
        {<div className="menu-outer">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navigation ">
            {link_main_menu.map((item) => {
              return (
                <li
                  className={`nav-item ${
                    item.children && "dropdown header-dropdown"
                  }`}
                  key={item.name}
                >
                  <Link className="nav-link" onClick={onCloseSideMenu} to={item.path}>
                    
                    {t(item.name)}
                  </Link>
                  {item.children && (
                    <OpenChildMenu data={item.children} isMobile={true} onHideSideBar={onCloseSideMenu} />
                  )}
                  {item.children && (
                    <div className="dropdown-btn">
                      <span className="ri-arrow-down-s-line" />
                    </div>
                  )}
                </li>
              );
            })}
            <li className="nav-item dropdown header-dropdown language-dropdown">
              <span 
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className="nav-link"
              >
                <img src={langFlag(currentLanguageCode)}  alt="" className="img-fluid"  /> 
                {currentLanguageCode}
                </span>
              <ul className="dropdown-menu">
                {languages.map(({ code, name, flag, country_code }) => (
                  <li key={country_code}>
                    <a
                      href="#"
                      className={classNames("dropdown-item", {
                        disabled: currentLanguageCode === code,
                      })}
                      onClick={() => {
                        i18next.changeLanguage(code);
                      }}
                    >
                      <img src={flag} alt="" className="img-fluid" />
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="dropdown-btn">
                <span className="ri-arrow-down-s-line"></span>
              </div>
            </li>

            {/* <li className="d-flex justify-content-center align-items-center">
            <div> 
            <div className="row"style={{ alignItems: "center"}}> 
                <div className="col-6">
                <Link to="/login" onClick={onCloseSideMenu}> 
                  <button className=" btn btn-violet btn-white-v text-uppercase mt-5 fs-6 "style={{ width: "150px" }}>
                  Login
                  </button></Link>  
                </div> 
             
                <div className="col-6">
                <Link className="nav-link" to="/register"  onClick={onCloseSideMenu}> 
                  <button className=" btn btn-violet btn-white-v text-uppercase mt-5 fs-6 "style={{ width: "150px" }}>
                  Register
                  </button>  
                  </Link>
                </div> 
             </div>
             </div>
            </li> */}
        <li className="nav-item">
        <div className="col-lg-12">
          <div style={{marginTop: '150px'}}>
            <div className="row align-items-center">
              <div className="col-6">
                <Link to="/login" onClick={onCloseSideMenu}>
                  <button className=" btn btn-violet btn-white-v text-uppercase mt-5 fs-6 " style={{width: '100%'}}>Login</button></Link></div>
              <div className="col-6">
                <Link className="nav-link" to="/register" onClick={onCloseSideMenu}>
                  <button className=" btn btn-violet btn-white-v text-uppercase mt-5 fs-6 " style={{width: '100%'}}>Register</button></Link></div>
            </div>
          </div>
        </div>
      </li>



          </ul>
        </div>}
      </nav>
    </div>
  );
};
