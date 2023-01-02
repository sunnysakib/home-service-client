import React from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import appointment from '../../img/contact_bg.png';
const Pricing = () => {
  return (
    <>
      <div className="princing">
        <div style={{
            background:`url(https://d7gh5vrfihrl.cloudfront.net/website/membership/new-banner/1920.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '600px'
        }} >
        <Navbar />
        <div className="mt-40">
        <h1 className="text-6xl text-center font-bold" style={{color: '#000', fontSize: '50px'}}>Home Services Pricing</h1>
        </div>
        </div>
        <div>
            <div className="flex justify-center mt-28">
            <div className="w-1/3">
               <div className="">
                    <h2 className="text-3xl font-semibold text-center">Home Appliances Prices</h2>
                    <p className="text-center my-5">Let us bring you peace of mind today</p>
                    <img className="m-auto mt-8 mb-16" src="https://d7gh5vrfihrl.cloudfront.net/website/pricing/appliance_pricing.svg" alt="" />
               </div>
              <div className="">
              <div className="flex w-100 justify-center border-b">
                <h5 className="w-1/2 py-5 text-center"></h5>
                <p className="w-1/4 font-bold py-5 text-center">Regular Price</p>
                <p className="w-1/4 font-bold py-5 text-center" style={{backgroundColor: '#f7fbff'}}> <span style={{color: '#0060E0'}}>Home+</span> Member</p>
              </div>
              <div className="flex w-100 justify-center border-b">
                <h5 className="w-1/2 py-5 font-semibold">Appliance repair</h5>
                <p className="w-1/4 d py-5 text-center">1000 Tk.</p>
                <p className="w-1/4 py-5 text-center" style={{backgroundColor: '#f7fbff' , color: '#0060E0'}}>900 Tk.</p>
              </div>
              <div className="flex w-100 justify-center ">
                <h5 className="w-1/2 py-5 font-semibold">Inspection</h5>
                <p className="w-1/4  py-5 text-center">1200 Tk.</p>
                <p className="w-1/4 py-5 text-center" style={{backgroundColor: '#f7fbff', color: '#0060E0'}}>1100 Tk.</p>
              </div>
              </div>
            </div>
            </div>

                {/* TV Mounting Prices */}
            <div className="flex justify-center mt-28">
            <div className="w-1/3">
               <div className="">
                    <h2 className="text-3xl font-semibold text-center">TV Mounting Prices</h2>
                    <p className="text-center my-5">Get an upfront quote. We'll do the heavy lifting</p>
                    <img className="m-auto mt-8 mb-16" src="https://d7gh5vrfihrl.cloudfront.net/website/pricing/tv_pricing.svg" alt="" />
               </div>
              <div className="Tv">
              <div className="flex w-100 justify-center border-b">
                <h5 className="w-1/2 py-5 text-center"></h5>
                <p className="w-1/4 font-bold py-5 text-center">Regular Price</p>
                <p className="w-1/4 font-bold py-5 text-center" style={{backgroundColor: '#f7fbff'}}> <span style={{color: '#0060E0'}}>Home+</span> Member</p>
              </div>
              <div className="flex w-100 justify-center border-b">
                <h5 className="w-1/2 py-5 font-semibold">TV Mounting Up to 31"</h5>
                <p className="w-1/4 d py-5 text-center">1000 Tk.</p>
                <p className="w-1/4 py-5 text-center" style={{backgroundColor: '#f7fbff' , color: '#0060E0'}}>900 Tk.</p>
              </div>
              <div className="flex w-100 justify-center border-b">
                <h5 className="w-1/2 py-5 font-semibold">TV Mounting 32" - 60"</h5>
                <p className="w-1/4 d py-5 text-center">1000 Tk.</p>
                <p className="w-1/4 py-5 text-center" style={{backgroundColor: '#f7fbff' , color: '#0060E0'}}>900 Tk.</p>
              </div>
              <div className="flex w-100 justify-center border-b">
                <h5 className="w-1/2 py-5 font-semibold">TV Mounting 61" - 80"</h5>
                <p className="w-1/4 d py-5 text-center">1000 Tk.</p>
                <p className="w-1/4 py-5 text-center" style={{backgroundColor: '#f7fbff' , color: '#0060E0'}}>900 Tk.</p>
              </div>
              <div className="flex w-100 justify-center ">
                <h5 className="w-1/2 py-5 font-semibold">TV Mounting Over 81"</h5>
                <p className="w-1/4  py-5 text-center">1200 Tk.</p>
                <p className="w-1/4 py-5 text-center" style={{backgroundColor: '#f7fbff', color: '#0060E0'}}>1100 Tk.</p>
              </div>
              </div>
            </div>
            </div>

            {/* Handyman Services Prices */}
            <div className="flex justify-center mt-28">
            <div className="w-1/3">
               <div className="">
                    <h2 className="text-3xl font-semibold text-center">Handyman Services Prices</h2>
                    <p className="text-center my-5">Book a service in seconds with Puls local techs</p>
                    <img className="m-auto mt-8 mb-16" src="https://d7gh5vrfihrl.cloudfront.net/website/pricing/handyman.svg" alt="" />
               </div>
              <div className="">
              <div className="flex w-100 justify-center border-b">
                <h5 className="w-1/2 py-5 text-center"></h5>
                <p className="w-1/4 font-bold py-5 text-center">Regular Price</p>
                <p className="w-1/4 font-bold py-5 text-center" style={{backgroundColor: '#f7fbff'}}> <span style={{color: '#0060E0'}}>Home+</span> Member</p>
              </div>
              <div className="flex w-100 justify-center border-b">
                <h5 className="w-1/2 py-5 font-semibold">Drywall repair</h5>
                <p className="w-1/4 d py-5 text-center">1000 Tk.</p>
                <p className="w-1/4 py-5 text-center" style={{backgroundColor: '#f7fbff' , color: '#0060E0'}}>900 Tk.</p>
              </div>
              <div className="flex w-100 justify-center border-b">
                <h5 className="w-1/2 py-5 font-semibold">Appliance install</h5>
                <p className="w-1/4 d py-5 text-center">1000 Tk.</p>
                <p className="w-1/4 py-5 text-center" style={{backgroundColor: '#f7fbff' , color: '#0060E0'}}>900 Tk.</p>
              </div>
              <div className="flex w-100 justify-center border-b">
                <h5 className="w-1/2 py-5 font-semibold">Wall hanging</h5>
                <p className="w-1/4 d py-5 text-center">1000 Tk.</p>
                <p className="w-1/4 py-5 text-center" style={{backgroundColor: '#f7fbff' , color: '#0060E0'}}>900 Tk.</p>
              </div>
              <div className="flex w-100 justify-center border-b">
                <h5 className="w-1/2 py-5 font-semibold">General handyman services</h5>
                <p className="w-1/4 d py-5 text-center">1000 Tk.</p>
                <p className="w-1/4 py-5 text-center" style={{backgroundColor: '#f7fbff' , color: '#0060E0'}}>900 Tk.</p>
              </div>
              <div className="flex w-100 justify-center ">
                <h5 className="w-1/2 py-5 font-semibold">Furniture assembly</h5>
                <p className="w-1/4  py-5 text-center">1200 Tk.</p>
                <p className="w-1/4 py-5 text-center" style={{backgroundColor: '#f7fbff', color: '#0060E0'}}>1100 Tk.</p>
              </div>
              </div>
            </div>
            </div>


            {/* iPhone Repair Prices */}

            <div className="flex justify-center mt-28">
            <div className="w-1/3">
               <div className="">
                    <h2 className="text-3xl font-semibold text-center">iPhone Repair Prices</h2>
                    <p className="text-center my-5">Pick your device and issue for an instant, upfront quote</p>
                    <img className="m-auto mt-8 mb-16" src="https://d7gh5vrfihrl.cloudfront.net/website/pricing/phone_pricing.svg" alt="" />
               </div>
              <div className="">
              <div className="flex w-100 justify-center border-b">
                <h5 className="w-1/2 py-5 text-center"></h5>
                <p className="w-1/4 font-bold py-5 text-center">Regular Price</p>
                <p className="w-1/4 font-bold py-5 text-center" style={{backgroundColor: '#f7fbff'}}> <span style={{color: '#0060E0'}}>Home+</span> Member</p>
              </div>
              <div className="flex w-100 justify-center border-b">
                <h5 className="w-1/2 py-5 font-semibold">+ LCD install</h5>
                <p className="w-1/4 d py-5 text-center">1000 Tk.</p>
                <p className="w-1/4 py-5 text-center" style={{backgroundColor: '#f7fbff' , color: '#0060E0'}}>900 Tk.</p>
              </div>
              <div className="flex w-100 justify-center ">
                <h5 className="w-1/2 py-5 font-semibold">+ Battery</h5>
                <p className="w-1/4  py-5 text-center">1200 Tk.</p>
                <p className="w-1/4 py-5 text-center" style={{backgroundColor: '#f7fbff', color: '#0060E0'}}>1100 Tk.</p>
              </div>
              </div>
            </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
