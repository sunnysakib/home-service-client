import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = ({service, setOrder}) => {
    const handleOrder=() => {
        setOrder(service);
    }

    return (
        
        <Link onClick={handleOrder} to="./booking">
            <div className="card w-60 h-48 bg-base-100 drop-shadow-lg">
                <div className="card-body mt-5">
                    <img style={{height: '50px'}} src={service.img1} alt="" />
                    <p style={{textAlign: "center"}}>{service.name}</p>
                </div>
            </div>
        </Link>
    );
};

export default ServiceDetail;

