import React from "react";

const Service = ({ service, setServiceBooking }) => {
  const { name, slots, fees, img2 } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 drop-shadow-lg">
      <div className="card-body text-center">
        <div className="flex justify-center">
            <div className="w-40">
          <img className="" src={img2} alt="" />
            </div>
        </div>
        <h2 className="text-xl font-bold text-secondary">{name}</h2>
        <p>Service Cost: {fees}</p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            disabled={slots.length === 0}
            onClick={() => setServiceBooking(service)}
            className="btn btn-sm btn-primary text-white uppercase  border-none"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
