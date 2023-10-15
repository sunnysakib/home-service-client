// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import React from 'react';
// import { useQuery } from 'react-query';
// import { useParams } from 'react-router-dom';
// import StripeCheckout from 'react-stripe-checkout';
// import Loading from '../../Pages/Shared/Loading';
// import CheckoutForm from '../CheckoutForm/CheckoutForm';

// const stripePromise = loadStripe('pk_test_51IeMUWJGf7fXr1M7XVX5D81rPOz3s02wdux2Dw3TXIeUhLXOkgJdWSEIxIHeA0ruWgZddte083bfmfFAdzOykKek00QobmeD0j');

// const Payment = () =>{
//     const priceForStripe = price * 100;
//     const { id } = useParams();
//     const url = `https://home-service-4vkz.onrender.com/booking/${id}`;

//     return(
//         <StripeCheckout
//         label = "Pay Now"
//         name = 'CRWN Clothing Ltd. '
//         billingAddress
//         shippingAddress
//         image="https://svgshare.com/i/CUz.svg"
//         description = {`Your Total is $ ${price}`}
//         amount ={priceForStripe}
//         panelLabel = "Pay Now"
//         token ={onToken}
//         stripeKey={PUBLISHABLE_stripekey}
//         />
//     )
// }


// const Payment = () => {
//     const { id } = useParams();
//     const url = `https://home-service-4vkz.onrender.com/booking/${id}`;

//     const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
//         method: 'GET',
//         headers: {
//             'authorization': `Bearer ${localStorage.getItem('accessToken')}`
//         }
//     }).then(res => res.json()));

//     if (isLoading) {
//         return <Loading></Loading>
//     }

//     return (
//         <div>
//             <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
//                 <div class="card-body">
//                     <p className="text-success font-bold">Hello, {appointment.customerName}</p>
//                     <h2 class="card-title">Please Pay for {appointment.serviceBooking}</h2>
//                     <p>Your Appointment: <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p>
//                     <p>Please pay: ${appointment.fees}</p>
//                 </div>
//             </div>
//             <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
//                 <div class="card-body">
//                     <Elements stripe={stripePromise}>
//                         <CheckoutForm appointment={appointment} />
//                     </Elements>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Payment;