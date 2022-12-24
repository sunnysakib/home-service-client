import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import ServicesPageBanner from './ServicesPageBanner';
import AvailableServices from './AvailableServices';

const ServicesPage = ({date, setDate}) => {
    return (
        <>
        <div className='servicesPage'>
            <ServicesPageBanner date={date} setDate={setDate}></ServicesPageBanner>
            <AvailableServices date={date}></AvailableServices>
            <Footer></Footer>
            
        </div>
        </>
    );
};

export default ServicesPage;