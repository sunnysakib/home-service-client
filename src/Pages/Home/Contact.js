import React from "react";
import appointment from '../../img/contact_bg.png';
import PrimaryButton from "../Shared/PrimaryButton";

const Contact = () => {
  return (
    <div style={{
        background:`url(${appointment})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
    }} className='px-10 py-14'>
      <div className='text-center pb-14 text-white'>
        <p className='text-4xl font-bold bg-clip-text bg-gradient-to-br from-accent to-secondary' style={{color: '#000'}}>
          Contact Us
        </p>
        <h1 className='text-3xl'>Stay connected with us</h1>
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
        <PrimaryButton headerBtn>Submit</PrimaryButton>
      </div>
    </div>
  );
};

export default Contact;