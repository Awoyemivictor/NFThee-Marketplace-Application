import React, { Fragment,useState,useEffect } from 'react';

const Loader = (props) => {
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
            {show && 
         
        <div className="spinner">
         <span>Loading...</span>
         <div className="half-spinner"></div>
         </div>
}
        </Fragment>
    );
}

export default Loader;