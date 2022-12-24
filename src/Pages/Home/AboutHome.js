import React from "react";
import image from "../../img/office.jpg"

const AboutHome = () => {
  return (
    <section className="aboutHome max-w-7xl mx-auto px-12 flex w-full">
      <div className="w-6/12">
        <h1 className="text-3xl font-bold mb-9">About<span style={{color: '#0060E0'}}> HomeService</span></h1>
        <p style={{color: '#414B63'}}>
          Home service is the leading on-demand professional services provider
          of Bangladesh. 
          <p className="my-5">We provide professional cleaning, handymen, packers &
          movers, appliance repair and other essential services to the
          households and workplaces. We launched in mid-2015.</p> 
          So far we havecreated jobs for over 3,000 service professionals, who have served
          over 200,000 households and 6,000 businesses. Our Mission is to
          deliver an amazing service experience to everyone by consistently
          delighting and empowering people in our community.
        </p>
      </div>
      <div className="ml-5 flex justify-end w-6/12">
        <div className="w-11/12">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
