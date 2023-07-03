import React from 'react';
import "./Domain.css"
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
const Domain = () => {
    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, necessitatibus quam nihil quidem eos cum, praesentium reiciendis adipisci ad facere impedit sapiente officia ipsa, tenetur temporibus! Veniam quis nobis facere."
    return (
        <div className='domain'>
            <SectionTitle title={"Search Your Domain"} description={description} />
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