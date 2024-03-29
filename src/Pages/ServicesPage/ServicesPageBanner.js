import React from 'react';
import chair from '../../img/gif.gif';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Navbar from '../Shared/Navbar';

const ServicesPageBanner = ({date, setDate}) => {
    
    return (
        <div>
            <Navbar></Navbar>
        <div className="w-full mb-36" >
            <div className="flex justify-center items-center flex-wrap lg:flex-row-reverse mt-1">
                <img src={chair} className="" alt='Dentist Chair' />
                <div>
                    <DayPicker className="pr-14"
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>

        </div>
        </div>
    );
};

export default ServicesPageBanner;