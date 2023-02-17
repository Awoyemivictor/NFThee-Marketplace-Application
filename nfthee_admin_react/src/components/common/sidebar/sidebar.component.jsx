import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {MENUITEMS} from './menu'
// import UserPanel from './user-panel.component';
import { translate } from 'react-switch-lang';

const Sidebar = (props) => {

    const [mainmenu, setMainMenu] = useState(MENUITEMS);

    useEffect(() => {
        var currentUrl = window.location.pathname;

        mainmenu.filter(items => {
            if (!items.children){ 
                if (items.path === currentUrl)
                    setNavActive(items)
                return false 
            }
            items.children.filter(subItems => {
                if (subItems.path === currentUrl)
                    setNavActive(subItems)
                if (!subItems.children) return false
                subItems.children.filter(subSubItems => {
                    if (subSubItems.path === currentUrl){
                        setNavActive(subSubItems)
                        return true
                    }else{
                        return false
                    }
                })
                return subItems
            })
            return items
        })
         // eslint-disable-next-line
    },[])

    const setNavActive = (item) => {
        
        MENUITEMS.filter(menuItem => {
            if(menuItem !== item)
                menuItem.active = false
            if(menuItem.children && menuItem.children.includes(item))
                menuItem.active = true
            if(menuItem.children){
                 // eslint-disable-next-line
                menuItem.children.filter(submenuItems => {
                    if(submenuItems.children && submenuItems.children.includes(item)){
                        menuItem.active = true
                    }
                    if(submenuItems !== item){
                        submenuItems.active = false
                    }
                })
            }
            return menuItem
        })
        item.active = !item.active
        setMainMenu({ mainmenu: MENUITEMS })
    }


    const mainmenus = MENUITEMS.map((menuItem, i) => {
        return(
        <li className={`${menuItem.active?'active':''}`} key={i}>
            { (menuItem.sidebartitle)?
                <div className="sidebar-title">{menuItem.sidebartitle}</div>
                :''}
            { (menuItem.type === 'sub' )?
            <a className="sidebar-header " href="#javaScript" onClick={() => setNavActive(menuItem)}>
                <i className={`icon-${props.t(menuItem.icon)}`}></i>
                <span>{props.t(menuItem.title)}</span>
                <i className="fa fa-angle-right pull-right"></i>
            </a>
                :''}
            { (menuItem.type === 'link' )?
                <Link 
                    to={`${process.env.PUBLIC_URL}${menuItem.path}`} 
                    className={`sidebar-header ${menuItem.active?'Active':''}`} 
                    onClick={() => setNavActive(menuItem)}
                    >
                    <i className={`icon-${menuItem.icon}`}></i><span>{props.t(menuItem.title)}</span>
                    {menuItem.children?
                    <i className="fa fa-angle-right pull-right"></i>:''}
                </Link>
                :''}
            {menuItem.children?
            <ul 
            className={`sidebar-submenu ${menuItem.active?'menu-open':''}`} 
            style={ menuItem.active?{ opacity: 1, transition: 'opacity 500ms ease-in' }: {}}
            >
                {menuItem.children.map((childrenItem, index) =>
                    <li key={index} className={childrenItem.children?childrenItem.active?'active':'':''}>
                        { (childrenItem.type === 'sub' )?
                        <a href="#javaScript" onClick={() => setNavActive(childrenItem)} >
                            <i className="fa fa-angle-right"></i>
                            {props.t(childrenItem.title)}
                            <i className="fa fa-angle-down pull-right"></i>
                        </a>
                            :''}

                        { (childrenItem.type === 'link' )?
                            <Link
                                to={`${process.env.PUBLIC_URL}${childrenItem.path}`}
                                className={childrenItem.active?'active':''}
                                onClick={() => setNavActive(childrenItem)}
                            >
                                <i className="fa fa-angle-right"></i>{props.t(childrenItem.title)} </Link>
                            :''}
                        {childrenItem.children?
                            <ul className={`sidebar-submenu ${childrenItem.active?'menu-open':''}`}>
                                {childrenItem.children.map((childrenSubItem, key) =>
                                    <li className={childrenSubItem.active?'active':''} key={key}>
                                        { (childrenSubItem.type === 'link' )?
                                            <Link
                                                to={`${process.env.PUBLIC_URL}${childrenSubItem.path}`}
                                                className={childrenSubItem.active?'active':''}
                                            >
                                                <i className="fa fa-angle-right"></i>{props.t(childrenSubItem.title)}</Link>
                                        :''}
                                    </li>
                                    )}
                            </ul>
                            :''}
                    </li>
                )}
            </ul>
                :''}
        </li>
        )})

        return (
            <div className="page-sidebar custom-scrollbar page-sidebar-open">
                {/* <UserPanel /> */}
                <ul className="sidebar-menu">
                    {mainmenus}
                </ul>
                {/* <div className="sidebar-widget text-center">
                    <div className="sidebar-widget-top">
                        <h6 className="mb-2 fs-14">Need Help</h6>
                        <i className="icon-bell"></i>
                    </div>
                    <div className="sidebar-widget-bottom p-20 m-20">
                        <p>+1 234 567 899 help@pixelstrap.com <a href="#javaScript">Visit FAQ</a></p>
                    </div>
                </div> */}
            </div>
        );
}

export default translate(Sidebar);
