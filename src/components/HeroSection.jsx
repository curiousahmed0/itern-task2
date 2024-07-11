import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-body-secondary w-100 pb-5 pt-5 h-auto">
      <div className="container-xl hero-container  ">
        <div className="row">
          <div className="col-lg-3 col-1"></div>
          <div className="col-10 col-lg-6 d-flex justify-content-center align-items-center flex-column align-items-center">
            <p className="text-white fs-3 mt-5">
              Browse 1000+ free training courses
            </p>

            <div class="container ">
              <div class="input-group mb-3 ">
                <span class="input-group-text">
                  <img src="/images/search.png" width={20} height={20} alt="" />
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search anything"
                />
              </div>
            </div>

            <div className="container w-75">
              <div className="row  text-white d-flex justify-content-center align-content-center ">
                <div className="col-sm-4 col-12 d-flex flex-row align-items-center justify-content-center ps-0 pe-0">
                  <p className="mb-0 me-2  custom-text">Editable Content</p>
                  <img src="/images/pen.png" width={15} height={15} alt="" />
                </div>
                <div className="col-sm-4 col-12 d-flex flex-row align-items-center justify-content-center ps-0 pe-0 ">
                  <p className="mb-0 me-2 custom-text">Created By Experts</p>
                  <img
                    src="/images/checkmark.png"
                    width={15}
                    height={15}
                    alt=""
                  />
                </div>
                <div className="col-sm-4 col-12 d-flex flex-row align-items-center justify-content-center ps-0 pe-0">
                  <p className="mb-0 me-2 custom-text">
                    Supported on all devices
                  </p>
                  <img
                    src="/images/smartphone.png"
                    width={15}
                    height={19}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-1"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
