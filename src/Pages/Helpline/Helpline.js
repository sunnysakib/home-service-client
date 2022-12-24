import React from 'react';
import Contact from "../Home/Contact";
import Footer from "../Shared/Footer";
import call from '../../assets/images/call.webp';
import Navbar from '../Shared/Navbar';



const Helpline = () => {
    return (
        <div>
             <div>
                <Navbar></Navbar>
                {/* <div className="hero-content flex-col lg:flex-row-reverse mt-10 mb-10 max-w-7xl mx-auto px-12">
                    <img src={call} className="max-w rounded-lg" />
                    <div>
                        <h1 className="text-5xl  font-bold text-sky-400/100  ">Call a Doctor </h1>
                        <p className="py-6">MediCare is a user friendly way to request for a  video call. In case of any emergency our doctors are here. You can communicate with them face to face. Here doctors are waiting for you. You can get service 24/7. There is no extra charge. It's free service. Thank you</p>
                        <a href="https://meet.google.com/ref-xnat-ktr"
                            class="p-2 pl-5 pr-5 transition-colors duration-700 transform bg-blue-400 hover:bg-green-400 text-gray-100 text-lg rounded-lg focus:border-4 border-indigo-300">Make a Video Call</a>

                    </div>
                </div> */}
            </div>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Helpline;