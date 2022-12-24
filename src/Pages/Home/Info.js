import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl mx-auto px-12 pt-8'>
            <InfoCard cardTitle="Opening Hours" CardText="Best Doctor Available" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard cardTitle="Our Locations" CardText="Gulshan, Link Road, Dhaka" bgClass="bg-gradient-to-r from-accent to-accent" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us" CardText="01621753816" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;