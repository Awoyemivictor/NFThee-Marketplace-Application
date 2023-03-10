import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import $ from 'jquery';
import i18next from 'i18next';
import cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

// Redux
import { useAppSelector } from '../../hooks/useRedux';

// Components
import { MobileMenuSidebar } from './MobileMenuSideBar';
import { ChildMenu, OpenChildMenu } from './ChildMenu';
import { Modal } from './Modal';

// Local Data
import { languages, link_menu_profile, link_main_menu } from './Data';
export const logOut = () => {
  localStorage.clear();

  window.location.href = '/';
};
export const Navbar = () => {
  const [token, setToken] = useState('');
  useEffect(() => {
    const tokenData = JSON.parse(localStorage.getItem('TokenData'));
    setToken(tokenData);
  }, []);

  const user = useAppSelector((state) => state.user.user);
  const metaToken = useAppSelector((state) => state.meta.meta);
  // console.info({user});
  const userId = JSON.parse(localStorage.getItem('userLoggedIn'));

  const [isModalOpen, setIsModalOpen] = useState(false);

  // const [fakeState, setFakeState] = useState(true)
  // useEffect(() => {
  //         setFakeState(!fakeState)
  // }, [user._id])

  // kivegix989@yasiok.com
  // const [Data] = useState(JSON.parse(localStorage.getItem('userData')));
  // console.log(Data)
  // console.log(Data.email_address);
  // console.log(Data.user_name);

  // const [Data] = useState(JSON.parse(localStorage.getItem("emailLogin")));
  // console.log(Data.email_address);
  // const [Data1] = useState(JSON.parse(localStorage.getItem("userNameLogin")));
  // console.log(Data1.email_address);
  // console.log(Data.email_address);
  // const userName=Data.user_name;
  // const userEmail=Data.email_address;

  // console.log(token===null ? window.location.href = "/login":token );
  // useEffect(() => {
  //     $(document).ready(function () {
  //         $("select").niceSelect();
  //     });
  // }, []);

  const { t } = useTranslation();
  const currentLanguageCode = cookies.get('i18next');
  console.log(currentLanguageCode);
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  // useEffect(() => {
  //   console.log('Setting page stuff')
  //   document.body.dir = currentLanguage.dir || 'ltr'
  //   // document.title = t('app_title')
  // }, [currentLanguage, t])

  useEffect(() => {
    $('.switch-mode').on('click', function () {
      $('body').toggleClass('dark-mode');
      if ($('body').hasClass('dark-mode')) {
        $(this).find('.dark-mode').addClass('d-none');
        $(this).find('.light-mode').removeClass('d-none');
      } else {
        $(this).find('.dark-mode').removeClass('d-none');
        $(this).find('.light-mode').addClass('d-none');
      }
    });
  }, []);
  // dark mode save
  // const [isDmode,setisDmode]=useState(false)
  // const DarkM=()=>{
  //   isDmode === true ? setisDmode(false) : setisDmode(true);
  //   localStorage.setItem('dmode', JSON.stringify(isDmode));
  // }
  // let clickedClass = "clicked"
  // const body = document.body
  // const lightTheme = "light-mode"
  // const darkTheme = "dark-mode"
  // let theme

  // if (localStorage) {
  //   theme = localStorage.getItem("theme")
  // }

  // if (theme === lightTheme || theme === darkTheme) {
  //   body.classList.add(theme)
  // } else {
  //   body.classList.add(lightTheme)
  // }

  // const switchTheme = e => {
  //   if (theme === darkTheme) {
  //     body.classList.replace(darkTheme, lightTheme)
  //     e.target.classList.remove(clickedClass)
  //     localStorage.setItem("theme", "light-mode")
  //     theme = lightTheme
  //   } else {
  //     body.classList.replace(lightTheme, darkTheme)
  //     e.target.classList.add(clickedClass)
  //     localStorage.setItem("theme", "dark-mode")
  //     theme = darkTheme
  //   }
  // }

  const currentPath = window.location.pathname;
  const LoginStatis = JSON.parse(localStorage.getItem('LoginInfo'));
  const [isLogin, setIsLogin] = useState(LoginStatis === null ? false : true);
  const [isNotLogin, setIsNotLogin] = useState(
    LoginStatis === null ? true : false && (window.location.href = '/')
  );
  // export const logOut = () => {
  //   localStorage.removeItem('TokenData');    
  //   localStorage.removeItem('userLoggedIn');

  //   window.location.href = '/';
  // };

  function langFlag(currentLanguageCode) {
    switch (currentLanguageCode) {
      case 'en':
        return '../../assets/images/icons/united-states.png';
      case 'dutch':
        return '../../../assets/images/icons/dutch.png';
      case 'fr':
        return '../../assets/images/icons/fr.png';
      case 'ger':
        return '../../assets/images/icons/ger.png';
      case 'cn':
        return '../../assets/images/icons/ch.png';
      case 'span':
        return '../../assets/images/icons/span.png';
      case 'portu':
        return '../../assets/images/icons/portu.png';
      case 'jpn':
        return '../../assets/images/icons/jpn.png';
      case 'arabic':
        return '../../assets/images/icons/arabic.png';
    }
  }

  useEffect(() => {
    MobileSidebar();
  }, []);

  const MobileSidebar = () => {
    if ($('.menu-area li.dropdown .dropdown-menu').length) {
      $('.menu-area .navigation li.dropdown').append(
        '<div className="dropdown-btn"><span className="ri-arrow-down-s-line"></span></div>'
      );
    }
    // if ($(".mobile-menu").length) {
    //     // var mobileMenuContent = $('.menu-area .main-menu').html();
    //     // $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
    //
    //     $(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
    //         $(this).toggleClass("open");
    //         $(this).prev(".dropdown-menu").slideToggle(500);
    //     });
    //     $(".mobile-nav-toggler").on("click", function () {
    //         $("body").addClass("mobile-menu-visible");
    //     });
    //     $(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on(
    //         "click",
    //         function () {
    //             $("body").removeClass("mobile-menu-visible");
    //         }
    //     )
    // }
  };

  // const [isModalOpen, setModalIsOpen] = useState(false);

  // console.log(useState("hello")[1])
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const text=localStorage.getItem('search')
  const [serachTextNav,setSerachTextNav]=useState(text||'')
  // console.log({serachTextNav})
 
  return (
    <>
      {isModalOpen && <Modal onRequestClose={toggleModal} />}
      <header>
        <div
          id="sticky-header"
          className="main-header transparent-header menu-area"
        >
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid px-lg-0">
              <Link
                className={
                  currentPath === '/' ? 'navbar-brand' : ' navbar-brand'
                }
                to="/"
              >
                <img
                  src="/images/icons/light-logo.png"
                  alt=""
                  className="img-fluid light-logo"
                />
                <img
                  src="/images/icons/dark-logo.png"
                  alt=""
                  className="img-fluid dark-logo"
                />
              </Link>
              <div className="d-lg-none d-flex">
                <div className="switch-mode">
                  <span className="dark-mode mode-control">
                    <img src="/assets/images/icons/sun.png" alt="" />
                  </span>
                  <span className="light-mode mode-control d-none">
                    <img src="/assets/images/icons/moon.png" alt="" />
                  </span>
                </div>
                <button
                  className="navbar-toggler mobile-nav-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarToggler"
                  aria-controls="navbarToggler"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon ri-menu-3-line" />
                </button>
              </div>
              <div
                className="collapse navbar-collapse main-menu d-none d-lg-block"
                id="navbarToggler"
              >
                <form
                  className="search-form-wrapper me-auto d-none d-md-block"
                  action="explorenft"
                >
                  <input
                    type="text"
                    name="str"
                    value={serachTextNav}
                    onChange={e=>setSerachTextNav( localStorage.setItem('search',e.target.value))}
                    placeholder={t('navbar.Search')}
                    className="form-control"
                  />
                  <div className="search-icon">
                    <button className="btn">
                      <i className="bx bx-search-alt-2" />
                    </button>
                  </div>
                </form>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navigation">
                  {link_main_menu.map((item) => {
                    return (
                      <li
                        className="nav-item dropdown header-dropdown"
                        key={item.name}
                      >
                        <NavLink
                          className="nav-link"
                          activeClassName="active"
                          to={item.path}
                          exact
                        >
                          {t(item.name)}
                        </NavLink>
                        {item.children && (
                          <OpenChildMenu data={item.children} />
                        )}
                      </li>
                    );
                  })}
                </ul>
                <form className="d-flex align-items-center">
                  <div className="dropdown language-dropdown d-none d-md-block">
                    <span data-bs-toggle="dropdown" aria-expanded="false">
                      <img
                        src={langFlag(currentLanguageCode)}
                        alt=""
                        className="img-fluid"
                      />
                      {currentLanguageCode}
                    </span>
                    <ul className="dropdown-menu">
                      {languages.map(({ code, name, flag, country_code }) => (
                        <li key={country_code}>
                          <a
                            href="#"
                            className={classNames('dropdown-item', {
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
                  </div>
                  {token &&userId._id  ? (
                    <div className="user-icon-box d-none d-md-block dropdown">
                      <a
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="/images/avatar1.png"
                          alt="img"
                          className="img-fluid user-avatar"
                        />
                      </a>

                      <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <div className="drop-heading">
                          <a href="#" style={{ width: '50px' }}>
                            <img
                              src="/images/avatar1.png"
                              alt=""
                              className="img-fluid user-avatar ms-0"
                            />
                          </a>
                          <div className="drop-heading-content">
                            <div className="d-flex align-items-center mt-2">
                              <span className="flag-name">
                                <img
                                  src="/assets/images/icons/eth-icon.png"
                                  alt=""
                                  className="me-2"
                                  style={{ width: '13px' }}
                                />{' '}
                                ETH
                              </span>
                              <span className="price ms-2">$0.00</span>
                            </div>
                          </div>
                        </div>
                        <div className="dropdown-divider m-0" />
                        <Link to="/profile" className="dropdown-item">
                          <span className="dropdown-icon">
                            <img src="/assets/images/icons/profile-icon.png" />
                          </span>{' '}
                          Profile{' '}
                        </Link>{' '}
                        {/*
                                                <ChildMenu data={link_menu_profile} /> */}
                        <Link className="dropdown-item" to="/favorites">
                          <span className="dropdown-icon">
                            <img src="/assets/images/icons/heart-icon.png" />
                          </span>{' '}
                          Favorites{' '}
                        </Link>
                        {/* <a className="dropdown-item" to="#" onClick={toggleModal} > */}
                        <a className="dropdown-item" to="#">
                          <span className="dropdown-icon ">
                            <img src="/assets/images/icons/currency-rate-icon.png" />
                          </span>{' '}
                          Change Currency{' '}
                        </a>
                        <Link className="dropdown-item" to="/mycollections">
                          <span className="dropdown-icon">
                            <img src="/assets/images/icons/grid-icon.png" />
                          </span>{' '}
                          My Collections{' '}
                        </Link>
                        <Link className="dropdown-item" to="/profilesetting">
                          <span className="dropdown-icon">
                            <img src="/assets/images/icons/setting-icon.png" />
                          </span>{' '}
                          Settings{' '}
                        </Link>
                        <Link className="dropdown-item" href="#">
                          <span className="dropdown-icon">
                            <img src="/assets/images/icons/rewardblue.png" />
                          </span>{' '}
                          Rewards to collect{' '}
                        </Link>
                        <Link
                          className="dropdown-item"
                          href="#"
                          onClick={logOut}
                        >
                          <span className="dropdown-icon">
                            <img src="/assets/images/icons/logout-icon.png" />
                          </span>{' '}
                          Sign Out{' '}
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="dropdown login-dropdown d-none d-md-block">
                      <a
                        href="#"
                        id="dropdownMenuButton2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="/assets/images/icons/user-avatar.png"
                          alt="img"
                          className="img-fluid user-avatar-icon"
                        />
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton2"
                      >
                        <li>
                          <Link className="dropdown-item" to="/login">
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/register">
                            Registration
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                  <div className="switch-mode">
                    <span className="dark-mode mode-control">
                      <img src="/images/icons/sun.png" alt="" />
                    </span>
                    <span className="light-mode mode-control d-none">
                      <img src="/images/icons/moon.png" alt="" />
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </nav>
        </div>
        <MobileMenuSidebar />
      </header>
    </>
  );
};
