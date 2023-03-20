import React, { Fragment } from 'react';
import Header from './common/header/header.component';
import Sidebar from './common/sidebar/sidebar.component';
import Footer from './common/footer/footer.component';
import Loader from "./common/loader/loader.component";
import Rightsidebar from './common/sidebar/right.sidebar'
// import Customizer from './common/customizer.component';
import { ToastContainer } from 'react-toastify';

const App = ({children}) => {
    return (
        <Fragment>
            <Loader/>
        <div className="page-wrapper">
            <Header />
            <div className="page-body-wrapper">
                <Sidebar />
                <div className="page-body">
                    {children}
                    <Footer />
                </div>
                {/* <Customizer /> */}
            </div>
            <Rightsidebar/>
            <ToastContainer/>
        </div>
        </Fragment>
    );
}
export default App