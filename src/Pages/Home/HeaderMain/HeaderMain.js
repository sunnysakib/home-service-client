import React from "react";
import { Link } from "react-router-dom";
import "./HeaderMain.css";
const HeaderMain = () => {
  return (
    <main>
      <div className="hader-main">
        <div className="max-w-7xl mx-auto px-12">
          <div className="hader-main-contents">
            <h1 className="text-6xl font-bold" style={{ color: "#000" }}>
              Home Repair Services
            </h1>
            <p className="w-1/2 my-5">
              We make your home work so you can make everything else work. From
              home warranty coverage to handyman services, our priority is
              quality installations and repairs, so you can focus on what
              matters most.
            </p>
           <Link to='/services'> <button type="button" className="btn btn-primary text-white mr-5">
              BOOK SERVICES
            </button></Link>
           <Link to='/contact'> <button type="button" className="btn btn-primary text-white">
              Contact us
            </button></Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;
