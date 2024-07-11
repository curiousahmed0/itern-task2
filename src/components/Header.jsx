import React from "react";

const Header = () => {
  return (
    <div className="container-fluid custom-nav-height bg-white ">
      <div className="col-12 d-flex flex-row align-items-center h-100">
        <div className="d-flex justify-content-center align-items-center h-100 ms-lg-4 ms-md-3 ms-xs-3">
          <img src="/images/back.png" width={30} height={30} alt="" />
        </div>
        <div className="d-flex justify-content-center align-items-center h-100">
          <p className="mb-0 ms-3 fw-normal">Course Library</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
