import React from 'react';
import "./footer.css"
import { FaEnvelope, FaFacebookSquare, FaInstagram, FaLinkedinIn, FaLocationArrow, FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    const date = new Date();
    const presentYear = date.getFullYear();
    return (
        <div className='py-10 px-6 footer-div'>
            <footer className='font-poppins text-white mt-20 md:mt-2'>
                <div className="">
                    <div className='p-10 w-full'>
                        <h3 className='font-bold lg:ml-20 my-2 text-3xl'>Contact US</h3>
                        <div className='flex gap-10 '>
                            <div>
                                <span className='flex gap-4 items-center mt-2'><FaMapMarkerAlt />43/A Mirpur, Dhaka</span>
                                <span className='flex gap-4 items-center mt-2'><FaEnvelope />admin@greenhost.com</span>
                                <span className='flex gap-4 items-center mt-2'><FaPhoneAlt />Call +88 01600000000</span>
                            </div>
                            <ul className='text-semibold mt-2'>
                                <Link to="/"><li>Home</li></Link>
                                <Link to="/"><li>About</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col w-full justify-center items-center'>
                        <div className="flex gap-4 w-full justify-center ">
                            <Link><FaTwitter className='w-10 h-10' /></Link>
                            <Link><FaFacebookSquare className='w-10 h-10' /></Link>
                            <Link><FaInstagram className='w-10 h-10' /></Link>
                            <Link><FaYoutube className='w-10 h-10' /></Link>
                            <Link><FaLinkedinIn className='w-10 h-10' /></Link>
                        </div>

                    </div>
                </div>
                <div>
                    <p className='text-center py-2'>Copyright © {presentYear} - All right reserved by GreenHost</p>
                </div>

            </footer>
        </div>

    );
};

export default Footer;