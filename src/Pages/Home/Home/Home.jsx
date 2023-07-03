import React from 'react';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet-async';
import Gallery from '../Gallery/Gallery';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import TypewriterText from '../TypeWriter/TypewriterText';
import Feedback from '../Feedback/Feedback';
import { useEffect } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useContext } from 'react';
import Domain from '../Domain/Domain';
import Welcome from '../Welcome/Welcome';
import HostingPlans from '../HostingPlans/HostingPlans';
import SharedVsDedicated from '../SharedVsDedicated/SharedVsDedicated';

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Light & Shadow | Home</title>
            </Helmet>
            <Banner></Banner>
            <Domain></Domain>
            <Welcome></Welcome>
            <HostingPlans></HostingPlans>
            <SharedVsDedicated></SharedVsDedicated>
            {/* 
            <TypewriterText></TypewriterText>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Gallery></Gallery>
            <Feedback></Feedback> */}
        </div>
    );
};

export default Home;