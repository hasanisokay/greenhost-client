import React from 'react';
import image from "../../../assets/img/bg-bottom-hero.png";
import hero from "../../../assets/img/hero.png";
import "./banner.css"
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
const Banner = () => {

    return (
        <div className='banner'>
            <div className='md:px-40 py-20 flex  text-white md:flex-row flex-col'>
                <div className='md:w-[60%] w-full'>
                    <h3 className='md:text-7xl text-3xl font-bold'>Shared Hosting</h3>
                    <p className='my-4 text-lg'>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, facere! sit amet consectetur adipisicing elit. Qui, voluptate.</p>
                    <p className='flex items-center mb-2'>Starting: <span className='font-bold text-4xl'>$2.49</span> <span>/Mo</span> </p>
                    <button className='bg-[#ff0f10] p-4 rounded'>Get Sttarted Now</button>
                </div>
                <div>
                    <img src={hero} className='w-[300px] pb-20' alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;