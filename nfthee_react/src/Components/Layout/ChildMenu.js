import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { link_main_menu, langFlag } from "./Data";
import classNames from "classnames";
import { languages } from "./Data";
import i18next from "i18next";
import cookies from "js-cookie";

export const ChildMenu = ({ data }) => {
  {
    data.map((item) => {
      return <MenuItem {...item} />;
    });
  }
};

export const OpenChildMenu = ({ data, isMobile, onHideSideBar }) => {
  const onStopPropagation = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <div className="dropdown-menu dropdown-menu-start">
      {data.map((item,i) => {
        return (
          <MenuItem key={i}
            {...item}
            className={`${
              item.children && isMobile
                ? "dropdown header-dropdown"
                : "nested-dropdown" || ""
            }`}
            onHideSideBar={onHideSideBar}
          >
            {item.children && (
              <ul
                className={`${
                  isMobile
                    ? "dropdown-menu dropdown-menu-start"
                    : "nested-dropdown-menu"
                }`}
              >
                {item.children.map((child) => {
                  return (
                    <li key={child.name}>
                      <MenuItem {...child} onHideSideBar={onHideSideBar} />
                    </li>
                  );
                })}
              </ul>
            )}
            {isMobile && item.children && (
              <div className="dropdown-btn" onClick={onStopPropagation}>
                <span className="ri-arrow-down-s-line" />
              </div>
            )}
          </MenuItem>
        );
      })}
    </div>
  );
};

export const MenuItem = ({
  path,
  name,
  icon,
  className,
  children,
  onHideSideBar,
  value,
}) => {
  const { t } = useTranslation();
  return (
    <Link
      className={`dropdown-item ${className}`}
      onClick={onHideSideBar}
      to={path}
      exact='true'
      key={value}
    >
      {icon && (
        <span className="dropdown-icon">
          <img src={icon} alt={icon} />
        </span>
      )}
      {t(name)}
      {children}
    </Link>
  );
};

export const GlobalSearch = ({ isMobile }) => {
  const { t } = useTranslation();
  return (
    <form
      className={`search-form-wrapper ${
        isMobile ? "d-block d-lg-block" : " me-auto d-none d-md-block"
      }`}
    >
      <input
        type="text"
        placeholder={t("navbar.Search")}
        className="form-control"
      />
      <div className="search-icon">
        <button className="btn">
          <i className="bx bx-search-alt-2" />
        </button>
      </div>
    </form>
  );
};

export const MainMenu = ({ isMobile = false, onHideSideBar }) => {
  const { t } = useTranslation();
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navigation">
      {link_main_menu.map((item) => {
        return (
          <li className="nav-item dropdown header-dropdown" key={item.name}>
            <NavLink
              className="nav-link"
              onClick={onHideSideBar}
              activeClassName="active"
              to={item.path}
              key={item.name}
            >
              {t(item.name)}
            </NavLink>
            {item.children && (
              <OpenChildMenu
                data={item.children}
                isMobile={isMobile}
                onHideSideBar={onHideSideBar}
              />
            )}
            {item.children && isMobile && (
              <div className="dropdown-btn" >
                <span className="ri-arrow-down-s-line" />
              </div>
            )}
          </li>
        );
      })}
      <LanguageMenu />
    </ul>
  );
};

const LanguageMenu = () => {
  const currentLanguageCode = cookies.get("i18next");

  return (
    <li className="nav-item dropdown header-dropdown language-dropdown">
      <span
        data-bs-toggle="dropdown"
        aria-expanded="false"
        className="nav-link"
      >
        <img src={langFlag(currentLanguageCode)} alt="" className="img-fluid" />
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
        <span className="ri-arrow-down-s-line"> </span>
      </div>
    </li>
  );
};
