import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import img1 from '../../../assets/img/team-1.jpg';
import img2 from '../../../assets/img/team-2.jpg';
import img3 from '../../../assets/img/team-3.jpg';
import img4 from '../../../assets/img/team-4.jpg';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const OurTeam = () => {
    const description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam eum exercitationem fuga nostrum ullam, ab pariatur minus reprehenderit ipsam tempore, corporis, voluptas deleniti fugiat. Hic at voluptates illum sint, veritatis explicabo esse unde nesciunt eius totam enim doloremque non, fugiat iusto exercitationem quibusdam aut asperiores repudiandae vitae sapiente qui ipsam."
    return (
        <div className='mx-10 my-10'>
            <SectionTitle title={"Our Team Members"} description={description} />
            <div className='grid gap-4 grid-cols-1 md:grid-cols-4'>
                <div className='rounded-2xl shadow-2xl  hover:border-t-[#ff0f10] hover:bg-[#ff0f10] bg-[#7ebc12] border-t-[#7ebc12]  duration-700'>
                    <div className='mt-2 bg-white px-6 py-6'>
                        <img src={img1} className='rounded-full' />
                    </div>
                    <div className='bg-white text-center'>
                        <h4 className='font-semibold text-2xl'>Habib</h4>
                        <p className='text-lg'>Manager</p>
                    </div>
                    <div className='flex gap-4 items-center justify-center py-4  duration-700'>
                        <FaFacebook  className='w-12 h-12 bg-[inherit] text-white' />
                        <FaTwitter   className='w-12 h-12 bg-[inherit] text-white' />
                        <FaInstagram className='w-12 h-12 bg-[inherit] text-white' />
                        </div>
                </div>
                <div className='rounded-2xl shadow-2xl  hover:border-t-[#ff0f10] hover:bg-[#ff0f10] bg-[#7ebc12] border-t-[#7ebc12]  duration-700'>
                    <div className='mt-2 bg-white px-6 py-6'>
                        <img src={img2} className='rounded-full' />
                    </div>
                    <div className='bg-white text-center'>
                        <h4 className='font-semibold text-2xl'>Al Jabir</h4>
                        <p className='text-lg'>CEO</p>
                    </div>
                    <div className='flex gap-4 items-center justify-center py-4  duration-700'>
                        <FaFacebook  className='w-12 h-12 bg-[inherit] text-white' />
                        <FaTwitter   className='w-12 h-12 bg-[inherit] text-white' />
                        <FaInstagram className='w-12 h-12 bg-[inherit] text-white' />
                        </div>
                </div>
                <div className='rounded-2xl shadow-2xl  hover:border-t-[#ff0f10] hover:bg-[#ff0f10] bg-[#7ebc12] border-t-[#7ebc12]  duration-700'>
                    <div className='mt-2 bg-white px-6 py-6'>
                        <img src={img3} className='rounded-full' />
                    </div>
                    <div className='bg-white text-center'>
                        <h4 className='font-semibold text-2xl'>Fahad</h4>
                        <p className='text-lg'>CTO</p>
                    </div>
                    <div className='flex gap-4 items-center justify-center py-4  duration-700'>
                        <FaFacebook  className='w-12 h-12 bg-[inherit] text-white' />
                        <FaTwitter   className='w-12 h-12 bg-[inherit] text-white' />
                        <FaInstagram className='w-12 h-12 bg-[inherit] text-white' />
                        </div>
                </div>
                <div className='rounded-2xl shadow-2xl  hover:border-t-[#ff0f10] hover:bg-[#ff0f10] bg-[#7ebc12] border-t-[#7ebc12]  duration-700'>
                    <div className='mt-2 bg-white px-6 py-6'>
                        <img src={img4} className='rounded-full' />
                    </div>
                    <div className='bg-white text-center'>
                        <h4 className='font-semibold text-2xl'>Jishan</h4>
                        <p className='text-lg'>HR</p>
                    </div>
                    <div className='flex gap-4 items-center justify-center py-4  duration-700'>
                        <FaFacebook  className='w-12 h-12 bg-[inherit] text-white' />
                        <FaTwitter   className='w-12 h-12 bg-[inherit] text-white' />
                        <FaInstagram className='w-12 h-12 bg-[inherit] text-white' />
                        </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;