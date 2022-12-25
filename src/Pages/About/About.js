import React from "react";
import Navbar from "../Shared/Navbar";
import about_img from "../../img/office-trans.png";
import about_img2 from "../../img/about_image2.png";
import media_logo from "../../img/media_logo.png";
import Footer from "../Shared/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-100 max-w-7xl mx-auto px-12 mt-20">
        <div className="w-2/5">
          <h1 className="text-3xl font-bold text-center">
            OUR <span style={{ color: "#0060E0" }}>STORY</span>
          </h1>
          <div className="mt-12">
            <h3 className="text-2xl mb-5 font-semibold">We are home service Provider</h3>
            <p className="mb-2">
              We connect users with verified service providers like professional
              cleaners, handymen, packers & movers and more. Besides, we ensure
              end-to-end service fulfilment .{" "}
              <p className="mt-2">
                One of our greatest achievements is creating employments for
                thousands of people. We created powerful stories of our service
                providers who started small and now making it big.
              </p>
            </p>
          </div>
        </div>
        <div className="w-3/5 flex justify-center">
          <div className="w-3/4">
            <img src={about_img} alt="" />
          </div>
        </div>
      </div>

      <div className="flex w-100 max-w-7xl mx-auto px-12 my-40">
        <div className="w-2/4 flex justify-start">
          <div className="w-3/4">
            <img src={about_img2} alt="" />
          </div>
        </div>
        <div className="w-2/4 flex justify-start">
          <div className="mt-12">
            <h3 className="text-2xl mb-5 font-semibold">Economically Empowering Thousands</h3>
            <p className="mb-2">
              One of our greatest achievements is creating employments for
              thousands of people. We created powerful stories of our service
              providers who started small and now making it big.
              <p className="mt-2">
                Over 3,000 service providers are now serving thousands of
                households, helping our customers with their everyday needs to
                help them make their lives hassle-free.
              </p>
            </p>
          </div>
        </div>
      </div>
      <div style={{backgroundColor: 'rgba(0, 96, 224, 0.15)', height: '200px'}} className="flex justify-center items-center mb-40" >
        <div>
            <img src={media_logo} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
