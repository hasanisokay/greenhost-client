import React from 'react';
import { FaBars, FaCheck, FaCog, FaServer, FaShareAlt } from 'react-icons/fa';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const HostingPlans = () => {
    const description = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos sint dolorem, debitis cum iure aliquam quia earum nam sapiente beatae pariatur excepturi delectus? Quia libero ab fuga reprehenderit impedit delectus?"
    return (
        <div className='mx-10 pt-20'>

            <SectionTitle title={"Our Hosting Plan"} description={description}/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='border-t-[#7ebc12] border-t-8 rounded-t-lg flex flex-col items-center relative rounded-b-lg pt-4 pb-2 shadow-2xl'>
                    <div className='bg-[#7ebc12] rounded-full border-0 h-12 w-12 absolute -top-7 justify'>
                        <FaShareAlt className=' text-white h-full w-full p-2' />
                    </div>
                    <div>
                        <div className='text-center pt-4 px-4'>
                            <h4 className='text-3xl font-bold'>Share Hosting</h4>
                            <p className='my-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, laborum!</p>
                        </div>
                        <hr className='my-2 border-[1px]' />
                        <div className='text-center my-4'>
                            <p className='text-[#7ebc12]'>Latest Offer- <span className='font-bold'>Save 30%</span> </p>
                            <h4 className='font-bold'>$ <span className='text-3xl'>2.49</span>/Month</h4>
                            <button className='bg-[#7ebc12] p-2 text-white font-semibold rounded-lg my-3'>Buy Now</button>
                        </div>
                        <hr className='my-2 border-[1px]' />
                        <div className='px-4'>
                            <div>
                                <FaCheck className='text-[#7ebc12] inline' /> <span>100 GB Disk Space</span>
                                <hr className='my-2 border-[1px]' />
                            </div>
                            <div>
                                <FaCheck className='text-[#7ebc12] inline' /> <span>Unlimited Bandwith</span>
                                <hr className='my-2 border-[1px]' />
                            </div>
                            <div>
                                <FaCheck className='text-[#7ebc12] inline' /> <span>Upgrde to Positive SSL</span>
                                <hr className='my-2 border-[1px]' />
                            </div>
                            <div>
                                <FaCheck className='text-[#7ebc12] inline' /> <span>Automatic Malware Removal</span>
                                <hr className='my-2 border-[1px]' />
                            </div>
                            <div>
                                <FaCheck className='text-[#7ebc12] inline' /> <span>30 Days Money Back Guarantee</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-t-[#ff0f10] border-t-8 rounded-t-lg flex flex-col items-center relative rounded-b-lg pt-4 pb-2 shadow-2xl'>
                    <div className='bg-[#ff0f10] rounded-full border-0 h-12 w-12 absolute -top-7 justify'>
                        <FaServer className=' text-white h-full w-full p-2' />
                    </div>
                    <div>
                        <div className='text-center pt-4 px-4'>
                            <h4 className='text-3xl font-bold'>Share Hosting</h4>
                            <p className='my-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, laborum!</p>
                        </div>
                        <hr className='my-2 border-[1px]' />
                        <div className='text-center my-4'>
                            <p className='text-[#ff0f10]'>Latest Offer- <span className='font-bold'>Save 30%</span> </p>
                            <h4 className='font-bold'>$ <span className='text-3xl'>2.49</span>/Month</h4>
                            <button className='bg-[#ff0f10] p-2 text-white font-semibold rounded-lg my-3'>Buy Now</button>
                        </div>
                        <hr className='my-2 border-[1px]' />
                        <div className='px-4'>
                            <div>
                                <FaCheck className='text-[#7ebc12] inline' /> <span>100 GB Disk Space</span>
                                <hr className='my-2 border-[1px]' />
                            </div>
                            <div>
                                <FaCheck className='text-[#7ebc12] inline' /> <span>Unlimited Bandwith</span>
                                <hr className='my-2 border-[1px]' />
                            </div>
                            <div>
                                <FaCheck className='text-[#7ebc12] inline' /> <span>Upgrde to Positive SSL</span>
                                <hr className='my-2 border-[1px]' />
                            </div>
                            <div>
                                <FaCheck className='text-[#7ebc12] inline' /> <span>Automatic Malware Removal</span>
                                <hr className='my-2 border-[1px]' />
                            </div>
                            <div>
                                <FaCheck className='text-[#7ebc12] inline' /> <span>30 Days Money Back Guarantee</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-t-[#7ebc12] border-t-8 rounded-t-lg flex flex-col items-center relative rounded-b-lg pt-4 pb-2 shadow-2xl'>
                    <div className='bg-[#7ebc12] rounded-full border-0 h-12 w-12 absolute -top-7 justify'>
                        <FaCog className=' text-white h-full w-full p-2' />
                    </div>
                    <div>
                        <div className='text-center pt-4 px-4'>
                            <h4 className='text-3xl font-bold'>Share Hosting</h4>
                            <p className='my-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, laborum!</p>
                        </div>
                        <hr className='my-2 border-[1px]' />
                        <div className='text-center my-4'>
                            <p className='text-[#7ebc12]'>Latest Offer- <span className='font-bold'>Save 30%</span> </p>
                            <h4 className='font-bold'>$ <span className='text-3xl'>2.49</span>/Month</h4>
                            <button className='bg-[#7ebc12] p-2 text-white font-semibold rounded-lg my-3'>Buy Now</button>
                        </div>
                        <hr className='my-2 border-[1px]' />
                        <div className='px-4'>
                            <div>
                                <FaCheck className='text-[#7ebc12] inline' /> <span>100 GB Disk Space</span>
                                <hr className='my-2 border-[1px]' />
                            </div>
                            <div>
                                <FaCheck className='text-[#7ebc12] inline' /> <span>Unlimited Bandwith</span>
                                <hr className='my-2 border-[1px]' />
                            </div>
                            <div>
                                <FaCheck className='text-[#7ebc12] inline' /> <span>Upgrde to Positive SSL</span>
                                <hr className='my-2 border-[1px]' />
                            </div>
                            <div>
                                <FaCheck className='text-[#7ebc12] inline' /> <span>Automatic Malware Removal</span>
                                <hr className='my-2 border-[1px]' />
                            </div>
                            <div>
                                <FaCheck className='text-[#7ebc12] inline' /> <span>30 Days Money Back Guarantee</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HostingPlans;