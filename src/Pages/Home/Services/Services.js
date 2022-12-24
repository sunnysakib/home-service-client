import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";

import ServiceDetail from "../ServiceDetail/ServiceDetail";

const serviceData = [
  {
    serviceName: "Home Appliances Repair",
    img: "https://d7gh5vrfihrl.cloudfront.net/website/membership/services/apr.svg",
    charge: 1200,
  },
  {
    serviceName: "TV Mounting",
    img: "https://d7gh5vrfihrl.cloudfront.net/website/membership/services/tvi.svg",
    charge: 1000,
  },
  {
    serviceName: "Hadyman Services",
    img: "https://d7gh5vrfihrl.cloudfront.net/website/membership/services/hdm.svg",
    charge: 800,
  },
  {
    serviceName: "iPhone Repair",
    img: "https://d7gh5vrfihrl.cloudfront.net/website/membership/services/mdr.svg",
    charge: 700,
  },
  {
    serviceName: "Plumbing",
    img: "https://d7gh5vrfihrl.cloudfront.net/website/membership/services/plumbing.svg",
    charge: 2000,
  },
  {
    serviceName: "Garage Door",
    img: "https://d7gh5vrfihrl.cloudfront.net/website/membership/services/garage.svg",
    charge: 2500,
  },
];

const Services = ({setOrder, date}) => {
  const formattedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
  return (
    <section className="mt-20 pt-5">
      <div className="text-center">
        <h2 className="text-3xl font-bold" style={{ color: "#46475c" }}>
          OUR SERVICES
        </h2>
        <h4 className="text-lg font-semibold mb-14" style={{ color: "#46475c" }}>
          Solutions to all your home maintenance needs
        </h4>
      </div>
      <div className="flex justify-center">
      <div style={{width: "750px"}}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceDetail
              service={service}
              setOrder={setOrder}
            ></ServiceDetail>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Services;
