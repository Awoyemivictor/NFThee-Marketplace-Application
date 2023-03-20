import React, { Fragment,useState,useEffect } from 'react';

const Loadercomponent = (props) => {
    const [show, setShow] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(false)
          }, 3000);

        return () => {
            clearTimeout(timeout);
         }
       
    },[show]);

    return (
        <Fragment>
        <div className={`loader-wrapper ${show ? '' : 'loderhide'}`}>
            <div className="loader bg-white">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <h4>Have a great day at work today <span>&#x263A;</span></h4>
            </div>
        </div>
        </Fragment>
    );
}

export default Loadercomponent;