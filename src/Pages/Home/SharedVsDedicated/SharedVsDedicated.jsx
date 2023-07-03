import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { FaCog, FaHeadset, FaServer, FaShieldAlt } from 'react-icons/fa';

const SharedVsDedicated = () => {
    const description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae corporis magni quis deserunt, nemo officia nobis quam quidem optio maiores aut rerum, eum repellat et? Odio fuga ipsam ea!"
    return (
        <div className='mx-10 my-10'>
            <SectionTitle title={"Shared Vs Dedicated"} description={description} />
            <div className='flex flex-col md:flex-row'>
                <div>
                    <h3 className='section-title'>Shared Server</h3>
                    <hr className='w-16 border-[.5 px] mt-4 border-black  ' />
                    <hr className='w-24 border-[.5 px] my-1 border-[#7ebc12]  ' />
                    <hr className='w-16 border-[.5 px] border-black  mb-4  ' />
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                        <div>
                            <FaServer className='text-[#7ebc12] w-12 h-12 my-2' />
                            <h4 className='text-2xl font-bold'>99.99% Uptime</h4>
                            <p className='w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, quidem.</p>
                        </div>
                        <div>
                            <FaShieldAlt className='text-[#7ebc12] w-12 h-12 my-2' />
                            <h4 className='text-2xl font-bold'>100% Secured</h4>
                            <p className='w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, quidem.</p>
                        </div>
                        <div>
                            <FaCog className='text-[#7ebc12] w-12 h-12 my-2' />
                            <h4 className='text-2xl font-bold'>Control Pnael</h4>
                            <p className='w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, quidem.</p>
                        </div>
                        <div>
                            <FaHeadset className='text-[#7ebc12] w-12 h-12 my-2' />
                            <h4 className='text-2xl font-bold'>24/7 Support</h4>
                            <p className='w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, quidem.</p>
                        </div>


                    </div>
                </div>
                <div>
                    <h3 className='section-title'>Shared Server</h3>
                    <hr className='w-16 border-[.5 px] mt-4 border-black  ' />
                    <hr className='w-24 border-[.5 px] my-1 border-[#7ebc12]  ' />
                    <hr className='w-16 border-[.5 px] border-black  mb-4  ' />
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                        <div>
                            <FaServer className='text-[#ff0f10] w-12 h-12 my-2' />
                            <h4 className='text-2xl font-bold'>99.99% Uptime</h4>
                            <p className='w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, quidem.</p>
                        </div>
                        <div>
                            <FaShieldAlt className='text-[#ff0f10] w-12 h-12 my-2' />
                            <h4 className='text-2xl font-bold'>100% Secured</h4>
                            <p className='w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, quidem.</p>
                        </div>
                        <div>
                            <FaCog className='text-[#ff0f10] w-12 h-12 my-2' />
                            <h4 className='text-2xl font-bold'>Control Pnael</h4>
                            <p className='w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, quidem.</p>
                        </div>
                        <div>
                            <FaHeadset className='text-[#ff0f10] w-12 h-12 my-2' />
                            <h4 className='text-2xl font-bold'>24/7 Support</h4>
                            <p className='w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, quidem.</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default SharedVsDedicated;