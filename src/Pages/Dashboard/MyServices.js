import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  useNavigate } from 'react-router-dom';
import Bikash from '../../Component/Payment/Bikash/Bikash';
import StripeButton from '../../Component/StripeButton';
import auth from '../../firebase.init';



const MyServices = () => {

    const [serviceBookings, setServiceBookings] = useState([]);
    // console.log(serviceBookings);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()


    useEffect(() => {
        if (user) {
            fetch(`https://home-service-4vkz.onrender.com/booking?customerEmail=${user.email}`,{
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => {
                console.log('res', res);
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
                .then(data => setServiceBookings(data));
        }
    }, [user])

    return (
        <div className='mr-5'>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>serviceBooking</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            serviceBookings.map((a, index) =><tr>
                                <th style={{backgroundColor:"#EEF1FF"}}>{index + 1}</th>
                                <td style={{backgroundColor:"#EEF1FF"}}>{a.customerName}</td>
                                <td style={{backgroundColor:"#EEF1FF"}}>{a.date}</td>
                                <td style={{backgroundColor:"#EEF1FF"}}>{a.slot}</td>
                                <td style={{backgroundColor:"#EEF1FF"}}>{a.serviceBooking}</td>
                                
                                <td style={{backgroundColor:"#EEF1FF"}}>
                                <StripeButton fees={a.fees}/>
                                <Bikash serviceBooking={a.serviceBooking} fees={a.fees}></Bikash>
                                    
                                    {(a.fees && a.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                    </div>}
                                </td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyServices;