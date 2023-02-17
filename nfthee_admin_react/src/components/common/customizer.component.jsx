import React, { useState, Fragment, useEffect } from 'react';
import {Container, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col,Modal, ModalHeader, ModalBody, ModalFooter,Button } from 'reactstrap';
import classnames from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import {useDispatch,useSelector} from 'react-redux'
import {
        ADD_LAYOUT,
        ADD_SIDEBAR_TYPES,
        ADD_SIDEBAR_SETTINGS,
        ADD_COLOR,
        ADD_COSTOMIZER,
        ADD_MIX_LAYOUT,
        ADD_HEADER_COLOR,
        ADD_BRAND_COLOR,
        ADD_NAV_COLOR,
        ADD_SIDEBAR_BACKGROUND
     } from '../../redux/actionTypes'

const Customizer = (props) => {

    const dispatch = useDispatch();
    const configDB = useSelector(content => content.Customizer.customizer);
    const [modal, setModal] = useState();
    const mix_background_layout = configDB.color.mix_background_layout;
    const [firstTab,setfirstTab] = useState('1')
    const [secondTab,setsecondTab] = useState('1')
    const [thirdTab,setthirdTab] = useState('1')
    const [layout_type, setLayout_type] = useState(configDB.settings.layout_type);
    const [sidebar_type,setSidebar_type] = useState(configDB.settings.sidebar.type);
    
    
    const sidebar_setting = configDB.settings.sidebar_setting;
    const primary_color = localStorage.getItem('primary_color');
    const secondary_color = localStorage.getItem('secondary_color');
    const layout_version = localStorage.getItem('layout_version');
    const color = localStorage.getItem('color')
    const config_primary = configDB.color.primary_color;
    const config_secondary = configDB.color.secondary_color;
    const config_color = configDB.color.color;
    const config_layout_version = localStorage.getItem('layout_version')
    
    const header_color = configDB.headercolor.header.color
    const brand_color = configDB.headercolor.brandcolor.onlybrandcolor
    const nav_color = configDB.headercolor.navcolor.onlynavcolor
    const sidebar_background_color = configDB.settings.sidebar_background_setting;
    


    useEffect(() => {

    dispatch({ type: ADD_COSTOMIZER });

    dispatch({
        type: ADD_COLOR,
        payload: {
            color,
            primary_color,
            secondary_color,
            layout_version,
        }
    })

    if (localStorage.getItem('primary_color') == null || localStorage.getItem('secondary_color') == null || localStorage.getItem('color') == null || localStorage.getItem('layout_version') == null) {
        document.documentElement.className = config_color;
        localStorage.setItem('primary_color', config_primary)
        localStorage.setItem('secondary_color', config_secondary);
        localStorage.setItem('color', config_color);
        localStorage.setItem('layout_version', config_layout_version)
        dispatch({
            type: ADD_COLOR,
            payload: {
                color: config_color,
                primary_color: config_primary,
                secondary_color: config_secondary,
                layout_version: config_layout_version
            }
        })
    }

    //set layout_type
   // document.body.setAttribute('main-theme-layout', layout_type);
    if(layout_type === "rtl"){
        document.getElementsByTagName('html')[0].setAttribute("dir", layout_type);
        document.body.className =  `${config_layout_version} ${layout_type}`;
    }else if(layout_type === "box-layout"){
        document.querySelector('.page-wrapper').classList.add('box-layout');
        document.body.className = config_layout_version;
    }else{
         // layout version
        document.body.className = config_layout_version;
    }
    

    if(config_layout_version === "dark-only"){
        document.body.setAttribute("main-theme-layout", "main-theme-layout-4");
    }else{
        document.body.setAttribute("main-theme-layout", mix_background_layout);
    }
    
    // sidebar Type
    document.querySelector(".page-body-wrapper").className = 'page-body-wrapper ' + sidebar_type;
    
    // sidebar color 
    // document.querySelector(".page-sidebar").className = 'page-sidebar custom-scrollbar ' + sidebar_background_color;
    document.querySelector('.page-sidebar').setAttribute("sidebar-color", sidebar_background_color);
   
    //set sidebar setting
    document.querySelector(".page-sidebar").classList = "page-sidebar custom-scrollbar page-sidebar-open  " + sidebar_setting;
    
  
    

   
    
    // color 
    document.documentElement.className = color;

    if(brand_color === ''  && nav_color === ''){
        document.querySelector('.main-header-left').setAttribute("semilight-bg-color", header_color);
        document.querySelector('.main-header-right').setAttribute("header-bg-color", header_color);
    }else if(header_color === '' && nav_color === ''){
        document.querySelector('.main-header-left').setAttribute("semilight-bg-color", brand_color);
        document.querySelector('.main-header-right').setAttribute("header-bg-color", "");
    }else if(header_color === '' && brand_color === ''){
        document.querySelector('.main-header-right').setAttribute("header-bg-color", nav_color);
        document.querySelector('.main-header-left').setAttribute("semilight-bg-color", "");
    }else{
        document.querySelector('.main-header-right').setAttribute("header-bg-color", "");
        document.querySelector('.main-header-left').setAttribute("semilight-bg-color", "");
    }
     // eslint-disable-next-line
    },[])

    const toggle = () => {
        setModal(!modal)
    }

    const toggleCustomize = () => {
        document.querySelector(".floated-customizer-panel").classList.toggle('active');
    }

    const firsttoggle = (tab) => {
        if (firstTab !== tab) {
            setfirstTab(tab);
        }
    }
    const secondtoggle = (tab) => {
        if (secondTab !== tab) {
            setsecondTab(tab);
        }
    }
    const thirdtoggle = (tab) => {
        if (thirdTab !== tab) {
            setthirdTab(tab);
        }
    }

    const changeMainTheme = (e) => {
        var main_theme_layout = e.target.getAttribute("theme-layout");
        document.querySelector(".main-header-left").setAttribute("semilight-bg-color", "");
        document.querySelector(".main-header-right").setAttribute("header-bg-color", "");
        document.body.setAttribute("main-theme-layout", main_theme_layout);
        dispatch({ type: ADD_MIX_LAYOUT, payload: e.target.getAttribute("theme-layout") });
    }

    const handle_sidebar_Layout = (e) => {
        // e.preventDefault();
        var type = e.target.value;
        setSidebar_type(type)

        if(type === "sidebar-close")
        {
            document.querySelector('.page-body-wrapper').classList.add('sidebar-close');
        }else{
            document.querySelector('.page-body-wrapper').classList.remove('sidebar-close');
        }
        dispatch({ type: ADD_SIDEBAR_TYPES, payload: { type } })
    }

    const handleHeaderColor = (header_value) => {
        document.querySelector('.main-header-left').setAttribute("semilight-bg-color", header_value);
        document.querySelector('.main-header-right').setAttribute("header-bg-color", header_value);
        dispatch({type:ADD_HEADER_COLOR,payload:header_value})
    }

    const handleSemiColor = (semi_value) => {
        document.querySelector('.main-header-left').setAttribute("semilight-bg-color", semi_value);
        document.querySelector('.main-header-right').setAttribute("header-bg-color", "");
        dispatch({type:ADD_BRAND_COLOR,payload:semi_value})
    }

    const handleNavColor = (nav_value) => {
        document.querySelector('.main-header-right').setAttribute("header-bg-color", nav_value);
        document.querySelector('.main-header-left').setAttribute("semilight-bg-color", "");
        dispatch({type:ADD_NAV_COLOR,payload:nav_value})
    }

    const closeCustomizer = () => {
        document.querySelector('.floated-customizer-panel').classList.remove('active');
    }

    const handleLayout = (e) => {
       // e.preventDefault();
        const layout = e.target.value
        setLayout_type(layout)
        if(layout === "box-layout"){
            document.querySelector('.page-wrapper').classList.add('box-layout');
            document.getElementsByTagName('html')[0].setAttribute("dir", "");
            document.body.classList.remove("rtl");
        }else if(layout === "rtl"){
            document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");
            document.body.classList.add("rtl");
            document.querySelector('.page-wrapper').classList.remove('box-layout');
        }else{
            document.getElementsByTagName('html')[0].setAttribute("dir", "");
            document.body.classList.remove("rtl");
            document.querySelector('.page-wrapper').classList.remove('box-layout');
        }
        dispatch({ type: ADD_LAYOUT, payload: layout });
    }

    const handleSidebarNav = (e) => {
        var naviagation = document.querySelectorAll('input[name=naviagation-layout-checkbox]:checked');

            naviagation.forEach((edhi) =>{
                var sidebar_setting = edhi.value;

                document.querySelector('.page-sidebar').classList.add(sidebar_setting)

                if (document.querySelector(".page-sidebar").classList.contains("native-scroll")) {
                    document.querySelector('.page-sidebar').classList.remove("custom-scrollbar")
                }
                if(document.querySelector(".page-sidebar").classList.contains("native-image-bg")){
                    var square = document.getElementsByClassName("native-image-bg");
                    const background = require('../../assets/images/sidebar-bg.jpg');
                    square[0].style.backgroundImage = "url("+background+")";
                }

                if (sidebar_setting === "native-default") {
                    document.getElementById("navigation_bordered_check").checked = false;
                    document.getElementById("navigation_rightside_check").checked = false;
                    document.getElementById("navigation_scroll_check").checked = false;
                    document.getElementById("navigation_back_image_check").checked = false;
                }
                dispatch({ type: ADD_SIDEBAR_SETTINGS, payload: sidebar_setting })
            })
           

        var notCheckedNav = document.querySelectorAll('input[name=naviagation-layout-checkbox]:not(:checked)');
            notCheckedNav.forEach((item) =>{
                var nav = item.value;
                document.querySelector('.page-sidebar').classList.remove(nav)
                if (nav === "native-image-bg") {
                    document.querySelector('.page-sidebar').style.backgroundImage = '';
                }
                if (nav === "native-scroll") {
                    document.querySelector('.page-sidebar').classList.add('custom-scrollbar')
                }
            })
    }

    const colorChangeTheme = (value) => {

        if (value === 'light-1') {
            localStorage.setItem('color', 'color-1');
            localStorage.setItem('layout_version', 'light');
            localStorage.setItem('primary_color', '#ab8ce4');
            localStorage.setItem('secondary_color', '#26c6da');
           
        } if (value === 'light-2') {
            localStorage.setItem('color', 'color-2');
            localStorage.setItem('layout_version', 'light');
            localStorage.setItem('primary_color', '#0288d1');
            localStorage.setItem('secondary_color', '#26c6da');
        } if (value === 'light-3') {
            localStorage.setItem('color', 'color-3');
            localStorage.setItem('layout_version', 'light');
            localStorage.setItem('primary_color', '#386e62db');
            localStorage.setItem('secondary_color', '#ba895dcc');
        } if (value === 'light-4') {
            localStorage.setItem('color', 'color-4');
            localStorage.setItem('layout_version', 'light');
            localStorage.setItem('primary_color', '#4c2fbf');
            localStorage.setItem('secondary_color', '#2e9de4');
        } if (value === 'light-5') {
            localStorage.setItem('color', 'color-5');
            localStorage.setItem('layout_version', 'light');
            localStorage.setItem('primary_color', '#7c4dff');
            localStorage.setItem('secondary_color', '#7b1fa2');
        } if (value === 'light-6') {
            localStorage.setItem('color', 'color-6');
            localStorage.setItem('layout_version', 'light');
            localStorage.setItem('primary_color', '#3949ab');
            localStorage.setItem('secondary_color', '#4fc3f7');
        } if (value === 'dark-1') {
            localStorage.setItem('color', 'color-1');
            localStorage.setItem('layout_version', 'dark-only');
            localStorage.setItem('primary_color', '#4466f2');
            localStorage.setItem('secondary_color', '#1ea6ec');
            
        } if (value === 'dark-2') {
            localStorage.setItem('layout_version', 'dark-only');
            localStorage.setItem('primary_color', '#0288d1');
            localStorage.setItem('secondary_color', '#26c6da');
            localStorage.setItem('color', 'color-2');
        } if (value === 'dark-3') {
            localStorage.setItem('layout_version', 'dark-only');
            localStorage.setItem('primary_color', '#386e62db');
            localStorage.setItem('secondary_color', '#ba895dcc');
            localStorage.setItem('color', 'color-3');
        } if (value === 'dark-4') {
            localStorage.setItem('layout_version', 'dark-only');
            localStorage.setItem('primary_color', '#4c2fbf');
            localStorage.setItem('secondary_color', '#2e9de4');
            localStorage.setItem('color', 'color-4');
        } if (value === 'dark-5') {
            localStorage.setItem('layout_version', 'dark-only');
            localStorage.setItem('primary_color', '#7c4dff');
            localStorage.setItem('secondary_color', '#7b1fa2');
            localStorage.setItem('color', 'color-5');
        } if (value === 'dark-6') {
            localStorage.setItem('layout_version', 'dark-only');
            localStorage.setItem('primary_color', '#3949ab');
            localStorage.setItem('secondary_color', '#4fc3f7');
            localStorage.setItem('color', 'color-6');
        }
        window.location.reload();
    }

    const handleSidebarColor = (e,sidebar_background_setting) => {
        document.querySelectorAll(".sidebar-bg-settings li").forEach((item) => {
            item.classList.remove('active');
        });
        // document.querySelector(".page-sidebar").className = 'page-sidebar custom-scrollbar ' + sidebar_background_setting;
        document.querySelector('.page-sidebar').setAttribute("sidebar-color", sidebar_background_setting);
        e.target.classList.add('active');
        dispatch({ type: ADD_SIDEBAR_BACKGROUND, payload: sidebar_background_setting })
    }

    return(
        <Fragment>
            <div className="floated-customizer-btn third-floated-btn" onClick={toggleCustomize}>
                <div className="icon-w"> <i className="fa fa-cog fa-spin"></i> </div>
                <span>Customizer</span>
            </div>
            <div className="floated-customizer-panel">
                <div className="fcp-content">
                    <div className="close-customizer-btn" onClick={closeCustomizer}><i className="icon-close"></i></div>
                    <div className="customizer-title">
                        <h5>Template Customizer</h5>
                        <p className="mb-0">Customize &amp; Preview Real Time</p>
                        <Button color="primary" className="plus-popup mt-2" onClick={() => setModal(!modal)}>Configuration</Button>
                        <Modal isOpen={modal} toggle={toggle} className="modal-body"  centered={true}>
                            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                            <ModalBody>
                                <Container fluid={true} className="bd-example-row">
                                    <Row>
                                        <p>To replace our design with your desired theme. Please do configuration as mention </p>
                                        <p> <b> Path : data > customizer > config.jsx </b> </p>
                                    </Row>
                                    <pre>
                                        <code>
                                            <div> export class ConfigDB &#123;</div>
                                            <div>  static data = &#123;</div>
                                                    <div>       settings&#58; &#123;</div>
                                                    <div>           layout_type&#58;  '{configDB.settings.layout_type}',</div>

                                                    <div>       sidebar&#58; &#123;</div>
                                                    <div>           type&#58; '{configDB.settings.sidebar.type}',</div>
                                                    <div>       &#125;,</div>
                                                    <div>       sidebar_setting&#58; '{configDB.settings.sidebar_setting}', </div>
                                                    <div>       sidebar_background_setting&#58; '{configDB.settings.sidebar_background_setting}'</div>
                                                    <div>       &#125;,</div>
                                            <div>       color&#58; &#123;</div>
                                            <div>           layout_version&#58; '{configDB.color.layout_version}', </div>
                                            <div>           color&#58; '{configDB.color.color}', </div>
                                            <div>           primary_color&#58; '{configDB.color.primary_color}', </div>
                                            <div>           secondary_color&#58; '{configDB.color.secondary_color}', </div>
                                            <div>           mix_background_layout&#58; '{configDB.color.mix_background_layout}', </div>
                                            <div>       &#125;,</div>

                                            <div>       headercolor&#58; &#123;</div>
                                            <div>           header&#58; &#123;</div>
                                            <div>               color&#58; '{configDB.headercolor.header.color}' </div>
                                            <div>           &#125;,</div>
                                            <div>           brandcolor&#58; &#123;</div>
                                            <div>               onlybrandcolor&#58; '{configDB.headercolor.brandcolor.onlybrandcolor}' </div>
                                            <div>           &#125;,</div>
                                            <div>           navcolor&#58; &#123;</div>
                                            <div>               onlynavcolor&#58; '{configDB.headercolor.navcolor.onlynavcolor}' </div>
                                            <div>           &#125;</div>
                                    <div>       &#125;</div>
                                    <div>   &#125;</div>
                                    <div>&#125;</div>
                                        
                                        </code>
                                    </pre>
                                    
                                </Container>
                            </ModalBody>
                            <ModalFooter>
                                <CopyToClipboard text={JSON.stringify(configDB)}>
                                    <Button 
                                        color="primary" 
                                        className="notification"
                                        onClick={() => toast.success("Code Copied to clipboard !", {
                                        position: toast.POSITION.BOTTOM_RIGHT
                                        })}
                                    >Copy text</Button>
                                </CopyToClipboard>
                                 <Button color="secondary" onClick={toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                    <div className="customizer-body">
                    <div className="fcp-group">
                        <div className="fcp-group-contents">
                            <div className="main-option">
                                <div className="row">
                                        <div className="col">
                                            <div className="main-theme-layout-container">
                                            <a href="#javaScript" className="main-theme-layout" title="Light Layout" onClick={(e) => changeMainTheme(e)}>
                                                <img src={require('../../assets/images/customizer/light.png')} alt="Light Layout" theme-layout="main-theme-layout-5" />
                                            </a>
                                            <a href="#javaScript" className="main-theme-layout" title="Dark Sidebar" onClick={(e) => changeMainTheme(e)}>
                                                <img src={require('../../assets/images/customizer/sidebar-dark.png')} alt="Dark Sidebar" theme-layout="main-theme-layout-1" />
                                            </a>
                                            <a href="#javaScript" className="main-theme-layout" title="Dark Page-body" onClick={(e) => changeMainTheme(e)}>
                                                <img src={require('../../assets/images/customizer/page-bosy-dark.png')} alt="Dark Page-body" theme-layout="main-theme-layout-2" />
                                            </a>
                                            <a href="#javaScript" className="main-theme-layout" title="Dark Page-body & Sidebar" onClick={(e) => changeMainTheme(e)}>
                                                <img src={require('../../assets/images/customizer/page-body-sidebar.png')} alt="Dark Page-body & Sidebar" theme-layout="main-theme-layout-3" />
                                            </a>
                                            <a href="#javaScript" className="main-theme-layout" title="Dark Layout" onClick={(e) => changeMainTheme(e)}>
                                                <img src={require('../../assets/images/customizer/dark.png')} alt="Dark Layout" theme-layout="main-theme-layout-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fcp-options">
                        <div className="fcp-group">
                            <div className="fcp-group-contents">
                                <div className="layout-option">
                                <Nav tabs className="border-tab nav-primary">
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: firstTab === '1' })}
                                                onClick={() => { firsttoggle('1'); }}
                                            >
                                                Layout Type
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: firstTab === '2' })}
                                                onClick={() => { firsttoggle('2'); }}
                                            >
                                                Sidebar Type
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: firstTab === '3' })}
                                                onClick={() => { firsttoggle('3'); }}
                                            >
                                                Sidebar Settings
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={firstTab}>
                                        <TabPane tabId="1">
                                                <Row>
                                                    <Col sm="12">
                                                        <div className="form-group mb-0">
                                                            <div className="radio radio-primary m-t-5 m-b-5">
                                                                <input type="radio" 
                                                                       name="layout-one" 
                                                                       id="ltr_layout" 
                                                                       value="ltr" 
                                                                       checked={layout_type === 'ltr'}  
                                                                       onChange={(e) => handleLayout(e)} />
                                                                <label htmlFor="ltr_layout">LTR</label>
                                                            </div>
                                                            <div className="radio radio-primary m-t-5 m-b-5">
                                                                <input type="radio" 
                                                                       name="layout-two" 
                                                                       id="boxed_layout" 
                                                                       value="box-layout" 
                                                                       checked={layout_type === 'box-layout'}  
                                                                       onChange={(e) => handleLayout(e)} />
                                                                <label htmlFor="boxed_layout">Boxed</label>
                                                            </div>
                                                            <div className="radio radio-primary">
                                                                <input type="radio" 
                                                                       name="layout-three" 
                                                                       id="rtl_layout" 
                                                                       value="rtl" 
                                                                       checked={layout_type === 'rtl'}  
                                                                       onChange={(e) => handleLayout(e)} />
                                                                <label htmlFor="rtl_layout">RTL</label>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <Row>
                                                <Col sm="12">
                                                    <div className="form-group mb-0">
                                                        <div className="radio radio-primary m-t-5 m-b-5">
                                                            <input type="radio" 
                                                                   name="menu-layouts" 
                                                                   id="default_menu" 
                                                                   value="default" 
                                                                   defaultChecked={sidebar_type === 'default'}  
                                                                   onChange={(e) => handle_sidebar_Layout(e)} 
                                                                />
                                                            <label htmlFor="default_menu">Default</label>
                                                        </div>
                                                        <div className="radio radio-primary">
                                                            <input type="radio" 
                                                                   name="menu-layouts" 
                                                                   id="collapsed_menu" 
                                                                   value="sidebar-close" 
                                                                   defaultChecked={sidebar_type === 'sidebar-close'}
                                                                   onChange={(e) => handle_sidebar_Layout(e)} 
                                                                />
                                                            <label htmlFor="collapsed_menu">Collapsed Menu</label>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <Row>
                                                <Col sm="12">
                                                    <div className="form-group mb-0">
                                                        <div className="checkbox checkbox-primary m-squar">
                                                            <input id="navigation_scroll_check" type="checkbox" onChange={(e) => handleSidebarNav(e)} name="naviagation-layout-checkbox" value="native-scroll" />
                                                            <label htmlFor="navigation_scroll_check" className="mt-0">Nativ Scroll</label>
                                                        </div>
                                                        <div className="checkbox checkbox-primary m-squar">
                                                            <input id="navigation_bordered_check" type="checkbox" onChange={(e) => handleSidebarNav(e)} name="naviagation-layout-checkbox" value="navigation-bordered" />
                                                            <label htmlFor="navigation_bordered_check">Bordered Navigation</label>
                                                        </div>
                                                        <div className="checkbox checkbox-primary m-squar">
                                                            <input id="navigation_rightside_check" type="checkbox" onChange={(e) => handleSidebarNav(e)} name="naviagation-layout-checkbox" value="navigation-rightside" />
                                                            <label htmlFor="navigation_rightside_check">Right Side Icons</label>
                                                        </div>
                                                        <div className="checkbox checkbox-primary m-squar">
                                                            <input id="navigation_back_image_check" type="checkbox" onChange={(e) => handleSidebarNav(e)} name="naviagation-layout-checkbox" value="native-image-bg" />
                                                            <label htmlFor="navigation_back_image_check">Background Image</label>
                                                        </div>
                                                        <div className="checkbox checkbox-primary m-squar">
                                                            <input id="navigation_default_check" type="checkbox" onChange={(e) => handleSidebarNav(e)} name="naviagation-layout-checkbox" value="native-default" />
                                                            <label htmlFor="navigation_default_check">Default Navigation</label>
                                                            <p className="mb-0"><b>Note : </b>For trying other option need to please uncheck all option</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>
                        </div>
                        <div className="fcp-group">
                        <div className="fcp-group-header">Layout Color Options</div>
                        <div className="fcp-group-contents">
                                <div className="navigation-color-option">
                                <Row>
                                <Col sm="12">
                                    <div className="fcp-group-header-sub">Light Layout</div>
                                    <div className="form-group layout-colors">
                                        <div className="radio radio-default">
                                            <input type="radio" name="navu-light" id="color1" value="bg-default" onChange={() => colorChangeTheme('light-1')}/>
                                            <label htmlFor="color1"></label>
                                        </div>
                                        <div className="radio radio-color2">
                                            <input type="radio" name="navu-light" id="color2" value="bg-primary" onChange={() => colorChangeTheme('light-2')}/>
                                            <label htmlFor="color2"></label>
                                        </div>
                                        <div className="radio radio-color3">
                                            <input type="radio" name="navu-light" id="color3" value="bg-secondary" onChange={() => colorChangeTheme('light-3')}/>
                                            <label htmlFor="color3"></label>
                                        </div>
                                        <div className="radio radio-color4">
                                            <input type="radio" name="navu-light" id="color4" value="bg-danger" onChange={() => colorChangeTheme('light-4')}/>
                                            <label htmlFor="color4"></label>
                                        </div>
                                        <div className="radio radio-color5">
                                            <input type="radio" name="navu-light" id="color5" value="bg-success" onChange={() => colorChangeTheme('light-5')}/>
                                            <label htmlFor="color5"></label>
                                        </div>
                                        <div className="radio radio-color6">
                                            <input type="radio" name="navu-light" id="color6" value="bg-info" onChange={() => colorChangeTheme('light-6')}/>
                                            <label htmlFor="color6"></label>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="12">
                                    <div className="fcp-group-header-sub">Dark Layout</div>
                                    <div className="form-group layout-colors">
                                        <div className="radio radio-default">
                                            <input type="radio" name="navu-light" id="dark-color-1" value="bg-default-light-color" onChange={() => colorChangeTheme('dark-1')}  />
                                            <label htmlFor="dark-color-1"></label>
                                        </div>
                                        <div className="radio radio-color2">
                                            <input type="radio" name="navu-light" id="dark-color-2" value="bg-primary-light-color"  onChange={() => colorChangeTheme('dark-2')} />
                                            <label htmlFor="dark-color-2"></label>
                                        </div>
                                        <div className="radio radio-color3">
                                            <input type="radio" name="navu-light" id="dark-color-3" value="bg-secondary-light-color" onChange={() => colorChangeTheme('dark-3')}  />
                                            <label htmlFor="dark-color-3"></label>
                                        </div>
                                        <div className="radio radio-color4">
                                            <input type="radio" name="navu-light" id="dark-color-4" value="bg-danger-light-color" onChange={() => colorChangeTheme('dark-4')} />
                                            <label htmlFor="dark-color-4"></label>
                                        </div>
                                        <div className="radio radio-color5">
                                            <input type="radio" name="navu-light" id="dark-color-5" value="bg-success-light-color" onChange={() => colorChangeTheme('dark-5')} />
                                            <label htmlFor="dark-color-5"></label>
                                        </div>
                                        <div className="radio radio-color6">
                                            <input type="radio" name="navu-light" id="dark-color-6" value="bg-info-light-color" onChange={() => colorChangeTheme('dark-6')} />
                                            <label htmlFor="dark-color-6"></label>
                                        </div>
                                    </div>
                                </Col>
                                </Row>
                                </div>
                        </div>
                        </div>

                        <div className="fcp-group">
                            <div className="fcp-group-header">Header Color Options</div>
                            <div className="fcp-group-contents">
                                <div className="navigation-color-option">
                                    <Nav tabs className="border-tab nav-primary">
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: secondTab === '1' })}
                                                onClick={() => { secondtoggle('1'); }}
                                            >
                                                Header
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: secondTab === '2' })}
                                                onClick={() => { secondtoggle('2'); }}
                                            >
                                                Brand
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: secondTab === '3' })}
                                                onClick={() => { secondtoggle('3'); }}
                                            >
                                                Only nav
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={secondTab}>
                                        <TabPane tabId="1">
                                            <Row>
                                                <Col sm="12">
                                                    <div className="fcp-group-header-sub">Light Version</div>
                                                    <div className="form-group">
                                                        <div className="radio radio-default">
                                                            <input type="radio" name="navu-light" id="nav_light_default" value="bg-default" onChange={(e) => handleHeaderColor(e.target.value)} />
                                                            <label htmlFor="nav_light_default"></label>
                                                        </div>
                                                        <div className="radio radio-primary">
                                                            <input type="radio" name="navu-light" id="nav_light_primary" value="bg-primary" onChange={(e) => handleHeaderColor(e.target.value)} />
                                                            <label htmlFor="nav_light_primary"></label>
                                                        </div>
                                                        <div className="radio radio-secondary">
                                                            <input type="radio" name="navu-light" id="nav_light_secondary" value="bg-secondary" onChange={(e) => handleHeaderColor(e.target.value)} />
                                                            <label htmlFor="nav_light_secondary"></label>
                                                        </div>
                                                        <div className="radio radio-danger">
                                                            <input type="radio" name="navu-light" id="nav_light_danger" value="bg-danger" onChange={(e) => handleHeaderColor(e.target.value)} />
                                                            <label htmlFor="nav_light_danger"></label>
                                                        </div>
                                                        <div className="radio radio-success">
                                                            <input type="radio" name="navu-light" id="nav_light_success" value="bg-success" onChange={(e) => handleHeaderColor(e.target.value)} />
                                                            <label htmlFor="nav_light_success"></label>
                                                        </div>
                                                        <div className="radio radio-info">
                                                            <input type="radio" name="navu-light" id="nav_light_info" value="bg-info" onChange={(e) => handleHeaderColor(e.target.value)} />
                                                            <label htmlFor="nav_light_info"></label>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col sm="12">
                                                    <div className="fcp-group-header-sub">Dark Version</div>
                                                    <div className="form-group">
                                                        <div className="radio radio-default">
                                                            <input type="radio" name="navu-light" id="nav_light_default_light_color" value="bg-default-light-colo" onChange={(e) => handleHeaderColor(e.target.value)} />
                                                            <label htmlFor="nav_light_default_light_color"></label>
                                                        </div>
                                                        <div className="radio radio-primary">
                                                            <input type="radio" name="navu-light" id="nav_light_primary_light_color" value="bg-primary-light-color" onChange={(e) => handleHeaderColor(e.target.value)} />
                                                            <label htmlFor="nav_light_primary_light_color"></label>
                                                        </div>
                                                        <div className="radio radio-secondary">
                                                            <input type="radio" name="navu-light" id="nav_light_secondary_light_color" value="bg-secondary-light-color" onChange={(e) => handleHeaderColor(e.target.value)} />
                                                            <label htmlFor="nav_light_secondary_light_color"></label>
                                                        </div>
                                                        <div className="radio radio-danger">
                                                            <input type="radio" name="navu-light" id="nav_light_danger_light_color" value="bg-danger-light-color" onChange={(e) => handleHeaderColor(e.target.value)} />
                                                            <label htmlFor="nav_light_danger_light_color"></label>
                                                        </div>
                                                        <div className="radio radio-success">
                                                            <input type="radio" name="navu-light" id="nav_light_success_light_color" value="bg-success-light-color" onChange={(e) => handleHeaderColor(e.target.value)} />
                                                            <label htmlFor="nav_light_success_light_color"></label>
                                                        </div>
                                                        <div className="radio radio-info">
                                                            <input type="radio" name="navu-light" id="nav_light_info_light_color" value="bg-info-light-color" onChange={(e) => handleHeaderColor(e.target.value)} />
                                                            <label htmlFor="nav_light_info_light_color"></label>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <Row>
                                                <Col sm="12">
                                                    <div className="form-group">
                                                        <div className="fcp-group-header-sub">Light Version</div>
                                                        <div className="radio radio-default">
                                                            <input type="radio" name="semi-light" id="semi_light_default" value="bg-default" onChange={(e) => handleSemiColor(e.target.value)}/>
                                                            <label htmlFor="semi_light_default"></label>
                                                        </div>
                                                        <div className="radio radio-primary">
                                                            <input type="radio" name="semi-light" id="semi_light_primary" value="bg-primary" onChange={(e) => handleSemiColor(e.target.value)} />
                                                            <label htmlFor="semi_light_primary"></label>
                                                        </div>
                                                        <div className="radio radio-secondary">
                                                            <input type="radio" name="semi-light" id="semi_light_secondary" value="bg-secondary" onChange={(e) => handleSemiColor(e.target.value)} />
                                                            <label htmlFor="semi_light_secondary"></label>
                                                        </div>
                                                        <div className="radio radio-danger">
                                                            <input type="radio" name="semi-light" id="semi_light_danger" value="bg-danger" onChange={(e) => handleSemiColor(e.target.value)} />
                                                            <label htmlFor="semi_light_danger"></label>
                                                        </div>
                                                        <div className="radio radio-success">
                                                            <input type="radio" name="semi-light" id="semi_light_success" value="bg-success" onChange={(e) => handleSemiColor(e.target.value)} />
                                                            <label htmlFor="semi_light_success"></label>
                                                        </div>
                                                        <div className="radio radio-info">
                                                            <input type="radio" name="semi-light" id="semi_light_info" value="bg-info" onChange={(e) => handleSemiColor(e.target.value)} />
                                                            <label htmlFor="semi_light_info"></label>
                                                        </div>
                                                        <div className="radio radio-light">
                                                            <input type="radio" name="semi-light" id="semi_light_light" value="bg-light" onChange={(e) => handleSemiColor(e.target.value)} />
                                                            <label htmlFor="semi_light_light"></label>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col sm="12">
                                                    <div>
                                                        <div className="fcp-group-header-sub">Dark Version</div>
                                                        <div className="radio radio-default">
                                                            <input type="radio" name="semi-light" id="semi_light_default_light" value="bg-default-light-color" onChange={(e) => handleSemiColor(e.target.value)} />
                                                            <label htmlFor="semi_light_default_light"></label>
                                                        </div>
                                                        <div className="radio radio-primary">
                                                            <input type="radio" name="semi-light" id="semi_light_primary_light" value="bg-primary-light-color" onChange={(e) => handleSemiColor(e.target.value)} />
                                                            <label htmlFor="semi_light_primary_light"></label>
                                                        </div>
                                                        <div className="radio radio-secondary">
                                                            <input type="radio" name="semi-light" id="semi_light_secondary_light" value="bg-secondary-light-color" onChange={(e) => handleSemiColor(e.target.value)} />
                                                            <label htmlFor="semi_light_secondary_light"></label>
                                                        </div>
                                                        <div className="radio radio-danger">
                                                            <input type="radio" name="semi-light" id="semi_light_danger_light" value="bg-danger-light-color" onChange={(e) => handleSemiColor(e.target.value)} />
                                                            <label htmlFor="semi_light_danger_light"></label>
                                                        </div>
                                                        <div className="radio radio-success">
                                                            <input type="radio" name="semi-light" id="semi_light_success_light" value="bg-success-light-color" onChange={(e) => handleSemiColor(e.target.value)} />
                                                            <label htmlFor="semi_light_success_light"></label>
                                                        </div>
                                                        <div className="radio radio-info">
                                                            <input type="radio" name="semi-light" id="semi_light_info_light" value="bg-info-light-color" onChange={(e) => handleSemiColor(e.target.value)} />
                                                            <label htmlFor="semi_light_info_light"></label>
                                                        </div>
                                                        <div className="radio radio-light">
                                                            <input type="radio" name="semi-light" id="semi_light_light_light" value="bg-light-light-color" onChange={(e) => handleSemiColor(e.target.value)} />
                                                            <label htmlFor="semi_light_light_light"></label>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <Row>
                                                <Col sm="12">
                                                    <div className="form-group">
                                                        <div className="fcp-group-header-sub">Light Version</div>
                                                        <div className="radio radio-default">
                                                            <input type="radio" name="header-light" id="header_light_default" value="bg-default" onChange={(e) => handleNavColor(e.target.value)} />
                                                            <label htmlFor="header_light_default"></label>
                                                        </div>
                                                        <div className="radio radio-primary">
                                                            <input type="radio" name="header-light" id="header_light_primary" value="bg-primary" onChange={(e) => handleNavColor(e.target.value)}/>
                                                            <label htmlFor="header_light_primary"></label>
                                                        </div>
                                                        <div className="radio radio-secondary">
                                                            <input type="radio" name="header-light" id="header_light_secondary" value="bg-secondary" onChange={(e) => handleNavColor(e.target.value)}/>
                                                            <label htmlFor="header_light_secondary"></label>
                                                        </div>
                                                        <div className="radio radio-danger">
                                                            <input type="radio" name="header-light" id="header_light_danger" value="bg-danger" onChange={(e) => handleNavColor(e.target.value)}/>
                                                            <label htmlFor="header_light_danger"></label>
                                                        </div>
                                                        <div className="radio radio-success">
                                                            <input type="radio" name="header-light" id="header_light_success" value="bg-success" onChange={(e) => handleNavColor(e.target.value)}/>
                                                            <label htmlFor="header_light_success"></label>
                                                        </div>
                                                        <div className="radio radio-info">
                                                            <input type="radio" name="header-light" id="header_light_info" value="bg-info" onChange={(e) => handleNavColor(e.target.value)}/>
                                                            <label htmlFor="header_light_info"></label>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col sm="12">
                                                    <div className="form-group">
                                                        <div className="fcp-group-header-sub">Dark Version</div>
                                                        <div className="radio radio-default">
                                                            <input type="radio" name="header-light" id="header_light_default_light" value="bg-default-light-colo] " onChange={(e) => handleNavColor(e.target.value)}/>
                                                            <label htmlFor="header_light_default_light"></label>
                                                        </div>
                                                        <div className="radio radio-primary">
                                                            <input type="radio" name="header-light" id="header_light_primary_light" value="bg-primary-light-color" onChange={(e) => handleNavColor(e.target.value)}/>
                                                            <label htmlFor="header_light_primary_light"></label>
                                                        </div>
                                                        <div className="radio radio-secondary">
                                                            <input type="radio" name="header-light" id="header_light_secondary_light" value="bg-secondary-light-color" onChange={(e) => handleNavColor(e.target.value)}/>
                                                            <label htmlFor="header_light_secondary_light"></label>
                                                        </div>
                                                        <div className="radio radio-danger">
                                                            <input type="radio" name="header-light" id="header_light_danger_light" value="bg-danger-light-color" onChange={(e) => handleNavColor(e.target.value)}/>
                                                            <label htmlFor="header_light_danger_light"></label>
                                                        </div>
                                                        <div className="radio radio-success">
                                                            <input type="radio" name="header-light" id="header_light_success_light" value="bg-success-light-color" onChange={(e) => handleNavColor(e.target.value)} />
                                                            <label htmlFor="header_light_success_light"></label>
                                                        </div>
                                                        <div className="radio radio-info">
                                                            <input type="radio" name="header-light" id="header_light_info_light" value="bg-info-light-color" onChange={(e) => handleNavColor(e.target.value)} />
                                                            <label htmlFor="header_light_info_light"></label>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>
                        </div>

                        <div className="fcp-group">
                            <div className="fcp-group-header">Sidebar Background Setting</div>
                            <div className="fcp-group-contents">
                                <div className="navigation-color-option">
                                    <Nav tabs className="border-tab nav-primary">
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: thirdTab === '1' })}
                                                onClick={() => { thirdtoggle('1'); }}
                                            >
                                                Color
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: thirdTab === '2' })}
                                                onClick={() => { thirdtoggle('2'); }}
                                            >
                                                Pattern
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: thirdTab === '3' })}
                                                onClick={() => { thirdtoggle('3'); }}
                                            >
                                                Image
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={thirdTab}>
                                        <TabPane tabId="1">
                                            <ul className="sidebar-bg-settings"> 
                                                <li className="bg-light active" data-attr="light-sidebar" onClick={(e) => handleSidebarColor(e,"light-sidebar")}></li>
                                                <li className="bg-color1" data-attr="color1-sidebar" onClick={(e) => handleSidebarColor(e,"color1-sidebar")}></li>
                                                <li className="bg-color2" data-attr="color2-sidebar" onClick={(e) => handleSidebarColor(e,"color2-sidebar")}></li>
                                                <li className="bg-color3" data-attr="color3-sidebar" onClick={(e) => handleSidebarColor(e,"color3-sidebar")}></li>
                                                <li className="bg-color4" data-attr="color4-sidebar" onClick={(e) => handleSidebarColor(e,"color4-sidebar")}></li>
                                                <li className="bg-color5" data-attr="color5-sidebar" onClick={(e) => handleSidebarColor(e,"color5-sidebar")}></li>
                                            </ul> 
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <ul className="sidebar-bg-settings"> 
                                                <li className="bg-pattern1" data-attr="sidebar-pattern1" onClick={(e) => handleSidebarColor(e,"sidebar-pattern1")}></li>
                                                <li className="bg-pattern2" data-attr="sidebar-pattern2" onClick={(e) => handleSidebarColor(e,"sidebar-pattern2")}></li>
                                                <li className="bg-pattern3" data-attr="sidebar-pattern3" onClick={(e) => handleSidebarColor(e,"sidebar-pattern3")}></li>
                                                <li className="bg-pattern4" data-attr="sidebar-pattern4" onClick={(e) => handleSidebarColor(e,"sidebar-pattern4")}></li>
                                                <li className="bg-pattern5" data-attr="sidebar-pattern5" onClick={(e) => handleSidebarColor(e,"sidebar-pattern5")}></li>
                                                <li className="bg-pattern6" data-attr="sidebar-pattern6" onClick={(e) => handleSidebarColor(e,"sidebar-pattern6")}></li>
                                            </ul> 
                                        </TabPane>
                                        <TabPane tabId="3">
                                           <ul className="sidebar-bg-settings"> 
                                                <li className="bg-img1" data-attr="sidebar-img1" onClick={(e) => handleSidebarColor(e,"sidebar-img1")}></li>
                                                <li className="bg-img2" data-attr="sidebar-img2" onClick={(e) => handleSidebarColor(e,"sidebar-img2")}></li>
                                                <li className="bg-img3" data-attr="sidebar-img3" onClick={(e) => handleSidebarColor(e,"sidebar-img3")}></li>
                                                <li className="bg-img4" data-attr="sidebar-img4" onClick={(e) => handleSidebarColor(e,"sidebar-img4")}></li>
                                                <li className="bg-img5" data-attr="sidebar-img5" onClick={(e) => handleSidebarColor(e,"sidebar-img5")}></li>
                                                <li className="bg-img6" data-attr="sidebar-img6" onClick={(e) => handleSidebarColor(e,"sidebar-img6")}></li>
                                            </ul>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default Customizer;