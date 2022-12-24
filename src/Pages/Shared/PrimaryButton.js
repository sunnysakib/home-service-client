import React from "react";

const PrimaryButton = ({ children, headerBtn, ...otherProps }) => {
  return (
    <button
      className={`btn ${
        headerBtn
          ? "bannerBtn uppercase text-white font-bold"
          : "border-none uppercase text-white font-bold"
      } `}
      
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
