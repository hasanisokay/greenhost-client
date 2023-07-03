import React from 'react';
import CountUp from 'react-countup';
import { FaCheck, FaUser, FaUserAlt, FaUserFriends, FaUsers, FaUsersCog } from 'react-icons/fa';
import welcomeimg from "../../../assets/img/about.png"
const Welcome = () => {
    return (
        <div className='mx-10 my-10 items-center justify-center flex flex-col md:flex-row'>
            <div className='flex-1'>
                <h3 className='section-title'>Welcome to GreenHost</h3>
                <hr className='w-16 border-[.5 px] mt-4 border-black  ' />
                <hr className='w-24 border-[.5 px] my-1 border-[#7ebc12]  ' />
                <hr className='w-16 border-[.5 px] border-black  mb-4  ' />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas nisi impedit explicabo optio, assumenda fuga distinctio quasi dolor saepe aspernatur, aperiam est odit provident, qui molestiae tenetur reiciendis porro rerum corporis vitae labore obcaecati numquam? Ut, ab. Animi, suscipit itaque. Sed, dignissimos enim sequi nam rerum qui autem facere voluptates?</p>
                <div className='flex md:flex-row flex-col md:gap-8 mt-4 gap-4'>
                    <div className='bg-gray-200 py-4 px-12 text-center rounded-lg flex items-center flex-col'>
                        <FaUsersCog className='w-8 h-8 text-[#7ebc12]' />
                        <CountUp start={1}
                            end={4000}
                            duration={10}
                            separator=""
                            className='font-bold text-2xl'
                        />
                        <p>Experts</p>
                    </div>

                    <div className='bg-gray-200 py-4 px-12 text-center rounded-lg flex items-center flex-col'>
                        <FaUsers className='w-8 h-8 text-[#7ebc12]' />
                        <CountUp start={1}
                            end={6000}
                            duration={10}
                            separator=""
                            className='font-bold text-2xl'
                        />
                        <p>Clients</p>
                    </div>
                    <div className='bg-gray-200 py-4 px-12 text-center rounded-lg flex items-center flex-col'>
                        <FaCheck className='w-8 h-8 text-[#7ebc12]' />
                        <CountUp start={1}
                            end={10000}
                            duration={10}
                            separator=""
                            className='font-bold text-2xl'
                        />
                        <p>Projects</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <img className='w-[70%] mt-4' src={welcomeimg} alt="" />
            </div>
        </div>
    );
};

export default Welcome;