import React from "react";
import "./HeaderMain.css";
const HeaderMain = () => {
  return (
    <main>
      <div className="hader-main">
        <div className="">
          <div className="hader-main-contents">
          <h1 style={{ color: "#46475c" }}>Home Repair Services</h1>
          <p className="text-secondary">
            Our local experts in your neighborhood can be there as soon as
            same-day.
          </p>
          <button type="button" class="btn header-btn">
            BOOK SERVICES
          </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;
