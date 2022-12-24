import React from 'react';
import { toast } from 'react-toastify';
import bikash from '../../../assets/images/bkash_payment.png';
import bikash1 from '../../../assets/images/input_bg.png'

const Bikash = ({serviceBooking, fees}) => {
    const handlePayment = () => {
        toast("Payment Successful")
    }
    return (
        <div>
            <label htmlFor="my-modal-3" className="btn modal-button btn-xs">Bikash</label>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    
                    <img src={bikash} alt="" style={{height: "150px", margin: "auto"}} />
                    <hr style={{
                        border:" 3px solid #e44b6f",
                        marginTop: "1px",
                        marginBottom: "1px",
                    }}/>
                    <div >
                    <p className="flex justify-center font-bold text-xl my-4">For {serviceBooking} Your total {fees}</p>
                    </div>
                    <div style={{
                        background: `url(${bikash1})`,
                        height: "250px",
                        alignItems: "center",
                        flexDirection: "column"
                    }} className="flex justify-center">
                    <span className="text-white text-xm my-3 font-bold">Pay In this number 01621763816</span>
                    <span className="text-white text-xm mb-0 mt-2 ">Your Bikash Account Number</span>
                    <input  type="text" placeholder="e.g 01XXXXXXXXX" style={{
                        height: "30px",
                        marginTop: "15px",
                        width: "70%",
                        textAlign: "center",
                        outline: "none"
                    }} />
                    <span className="text-white text-xm mb-0 mt-2">Your Bikash Transaction Id</span>
                    <input  type="text" placeholder="e.g XXXXXXXXX" style={{
                        height: "30px",
                        marginTop: "15px",
                        width: "70%",
                        textAlign: "center",
                        outline: "none"
                    }} />
                    <button className="btn btn-base-300 btn-sm my-2 modal-action" onClick={() =>{handlePayment()}}>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bikash;