import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet-async';
import Domain from '../Domain/Domain';
import Welcome from '../Welcome/Welcome';
import HostingPlans from '../HostingPlans/HostingPlans';
import SharedVsDedicated from '../SharedVsDedicated/SharedVsDedicated';
import AOS from 'aos';
import 'aos/dist/aos.css';
import OurTeam from '../OurTeam/OurTeam';
import Slider from '../Slider/Slider';
import Footer from '../../Shared/Footer/Footer';
// import HomeSlider from '../Slider/HomeSlider';

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <Helmet>
                <title>GreenHost | Home</title>
            </Helmet>
            <Banner></Banner>
            <Welcome></Welcome>
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100" >
                <Domain></Domain>
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100" >
                <HostingPlans></HostingPlans>
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100" >
                <SharedVsDedicated></SharedVsDedicated>
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100" >
                <Slider></Slider>
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100" >
                <OurTeam></OurTeam>
            </div>

        </div>
    );
};

export default Home;