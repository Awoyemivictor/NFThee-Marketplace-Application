import React, { Fragment } from "react";

const Loader = () => {
  return (
    <Fragment>
      <div className={`loader-wrapper `}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </Fragment>
  );
};

export default Loader;
