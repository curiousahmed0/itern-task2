import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Catagories from "./components/Catagories";
import CatDisplay from "./components/CatDisplay";

const App = () => {
  return (
    <div className="bg-body-secondary pb-5">
      <Header />
      <HeroSection />
      <div className="container-xl ">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <Catagories />
          </div>
          <div className="col-lg-9 col-md-8 col-sm-6 col-12">
            <CatDisplay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
