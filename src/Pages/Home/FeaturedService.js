import React from "react";
import booking_icon from "../../img/booking-icon 1.png"
import confirm_icon from "../../img/file-checkmark-icon 1.png"
import service_icon from "../../img/24-hour-icon 1.png"
const FeaturedService = () => {
  return (
    <div className="featuredService mt-32 mb-44">
      <h1 className="featuredService_title text-3xl font-bold" style={{ color: "#46475c" }}>How Home Service Works</h1>
      <div className="featuredService_features mt-16">
        <div className="featuredService_feature">
          <div>
            <img className="mt-5" src={booking_icon} alt="" />
          </div>
          <p className="font-bold text-xl mt-5 mb-6">Easy Booking</p>
          <p>Book any service instantly using a secure mobile app and website.</p>
        </div>
        <div className="featuredService_feature">
          <div>
          <img src={confirm_icon} alt="" />

          </div>
          <p className="font-bold text-xl mt-5 mb-6">Service Warranty</p>
          <p>You get a 7 days service warranty. No questions asked.</p>
        </div>
        <div className="featuredService_feature">
          <div>

          <img src={service_icon} alt="" />
          </div>
          <p className="font-bold text-xl mt-5 mb-6">fast Response</p>
          <p>We respond instantly and send help in 2 hours, Max.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedService;
