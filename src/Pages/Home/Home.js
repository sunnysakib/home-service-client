import React from 'react';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import AboutHome from './AboutHome';
import Services from './Services/Services';
import Testimonials from './Testimonials';
import FeaturedService from './FeaturedService';
import HeaderMain from './HeaderMain/HeaderMain';
import Navbar from '../Shared/Navbar';

const Home = ({setOrder, date}) => {
    return (
        <div>
            <Navbar/>
            <HeaderMain/>
            <Services date={date} setOrder={setOrder}/>
            <FeaturedService></FeaturedService>
            <AboutHome></AboutHome>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;