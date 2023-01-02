import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';
import Loading from '../Shared/Loading';

const AvailableServices = ({ date }) => {
    const [serviceBooking, setServiceBooking] = useState(null);

    const formattedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='my-10 max-w-7xl mx-auto px-12'>
            <h4 className='text-4xl font-bold text-primary text-center my-12'>Book a Home Service on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setServiceBooking={setServiceBooking}
                    ></Service>)
                }
            </div>
            {serviceBooking && <BookingModal
                date={date}
                serviceBooking={serviceBooking}
                setServiceBooking={setServiceBooking}
                refetch = {refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableServices;