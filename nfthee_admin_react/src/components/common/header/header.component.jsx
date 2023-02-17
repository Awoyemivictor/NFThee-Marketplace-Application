import React, { useState, useEffect,useLayoutEffect } from 'react';
// import Search from './search.component';
import UserMenu from './user-menu.component';
import Notification from './notification.component';
import Language from './language.component';

const Header = () => {

      const [sidebar,setSidebar] = useState(true) 
      const [navMenus,setNavMenus] = useState(false) 
      const width = useWindowSize()
     
      const goFull = () => {
        if ((document.fullScreenElement && document.fullScreenElement !== null) ||
            (!document.mozFullScreen && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
      }

    const openCloseSidebar = () => {
        if(sidebar){
            setSidebar(false)
            document.querySelector(".page-body-wrapper").classList.add('sidebar-close');
        }else{
            setSidebar(true)
            document.querySelector(".page-body-wrapper").classList.remove('sidebar-close');
        }
    }

    const toggle = () => {
        setNavMenus(!navMenus);
    }


    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }

    useEffect(() => {
        if (width <= 991) {
            setSidebar(false)
            document.querySelector(".page-body-wrapper").classList.add('sidebar-close');
        }
    },[width])

    const ToogleRightSidebar = () => {
        document.querySelector(".quickview-wrapper").classList.add("open")
    }

  
        return (
            <div className="page-main-header">
                <div className="main-header-left">
                    <div className="logo-wrapper">
                        <a href="#javaScript">
                            <img src={require('../../../assets/images/dark-logo.png')}  alt="" className="image-dark img-fluid" style={{width:"160px", height:"37px"}}/>
                            <img src={require('../../../assets/images/light-logo.png')}  alt="" className="image-light img-fluid" style={{width:"160px", height:"37px"}}/>
                        </a>
                    </div>
                </div>
                <div className="main-header-right row">
                    <div className="mobile-sidebar">
                        <div className="media-body text-right switch-sm">
                            <label className="switch">
                                <input type="checkbox" id="sidebar-toggle" defaultChecked={sidebar} onClick={openCloseSidebar}  />
                                <span className="switch-state"></span>
                            </label>
                        </div>
                    </div>
                    <div className="nav-right col">
                        <ul className={"nav-menus " + (navMenus ? 'open' : '')} >
                            {/* <li>
                                <Search />
                            </li> */}
                            <li>
                                <a onClick={goFull} className="text-dark" href="#javaScript">
                                    <img className="align-self-center pull-right mr-2" src={require('../../../assets/images/dashboard/browser.png')} alt="header-browser" />
                                </a>
                            </li>
                            {/* <Language />
                            <Notification /> */}
                            {/* <li onClick={ToogleRightSidebar}>
                                <a href="#javaScript" >
                                    <i className="icon-comments middle"></i>
                                </a>
                            </li> */}
                            <UserMenu />
                        </ul>
                        <div className="d-lg-none mobile-toggle" onClick={() => toggle() }>
                            <i className="icon-more"></i>
                        </div>
                    </div>
                </div>
            </div>
       );
}

export default Header