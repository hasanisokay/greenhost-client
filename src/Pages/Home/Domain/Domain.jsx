import React from 'react';
import "./Domain.css"
const Domain = () => {
    return (
        <div className='domain'>
            <div className='text-center'>
                <h3 className='section-title'>Search Your Domain</h3>
                <p className='md:w-[50%] w-[90%] mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos inventore doloremque vero officia impedit ea autem atque voluptatibus error unde.</p>
            </div>
            <hr className='w-20 border-[.5 px] mt-4 border-black mx-auto  ' />
            <hr className='w-32 border-[.5 px] my-1 border-[#7ebc12] mx-auto  ' />
            <hr className='w-20 border-[.5 px] border-black mx-auto mb-4  ' />
            <div className='text-center'>
                <input type="text" placeholder="search your domain" className="input bg-inherit h-16 input-bordered w-[90%] mx-auto md:w-[800px] relative" />
                <button className='p-2 bg-[#7ebc12] rounded relative  md:-left-20 mt-2 text-white'>Search</button>
            </div>
            <div className='md:flex md:gap-10 gap-6 grid grid-cols-2 justify-center items-center'>
                <div className='text-center'>
                    <p className='text-[#7ebc12] font-bold text-xl'>.com</p>
                    <p>$9.99/year</p>
                </div>
                <div className='text-center'>
                    <p className='text-[#7ebc12] font-bold text-xl'>.org</p>
                    <p>$9.99/year</p>
                </div>
                <div className='text-center'>
                    <p className='text-[#7ebc12] font-bold text-xl'>.net</p>
                    <p>$9.99/year</p>
                </div>
                <div className='text-center'>
                    <p className='text-[#7ebc12] font-bold text-xl'>.us</p>
                    <p>$9.99/year</p>
                </div>
                <div className='text-center'>
                    <p className='text-[#7ebc12] font-bold text-xl'>.eu</p>
                    <p>$9.99/year</p>
                </div>
                <div className='text-center'>
                    <p className='text-[#7ebc12] font-bold text-xl'>.co.uk</p>
                    <p>$9.99/year</p>
                </div>
            </div>
        </div>
    );
};

export default Domain;