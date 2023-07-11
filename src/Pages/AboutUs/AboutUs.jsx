import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet-async';
import Welcome from '../Home/Welcome/Welcome';

const AboutUs = () => {
    return (
        <div className='mx-6 pt-20'>
              <Helmet>
                <title> GreenHost| About</title>
            </Helmet>
            <h1 className='font-poppins text-3xl text-center font-semibold'>About Us</h1>
            <Welcome></Welcome>
        </div>
    );
};

export default AboutUs;