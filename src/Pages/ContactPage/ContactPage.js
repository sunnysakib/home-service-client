import React from "react";
import contact_bg from '../../img/contact_bg.png';
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import PrimaryButton from "../Shared/PrimaryButton";

const ContactPage = () => {
  return (
    <>
    <Navbar/>
        <div style={{
      background: `url(${contact_bg})`
    }} className='bg-primary px-10 py-14 '>
      <div className='text-center pb-14 text-white'>
        <p className='text-3xl font-bold bg-clip-text bg-gradient-to-br from-accent to-secondary'>
          Contact Us
        </p>
        <h1 className='text-4xl'>Stay connected with us</h1>
      </div>
      <div className='grid grid-cols-1 justify-items-center gap-5'>
        <input
          type='text'
          placeholder='Email Address'
          className='input w-full max-w-md'
        />
        <input
          type='text'
          placeholder='Subject'
          className='input w-full max-w-md'
        />
        <textarea
          className='textarea w-full max-w-md'
          placeholder='Your message'
          rows={6}
        ></textarea>
        <PrimaryButton>Submit</PrimaryButton>
      </div>
      <div>
        
      </div>
    </div>
    <Footer/>
    </>
  

  );
};

export default ContactPage;