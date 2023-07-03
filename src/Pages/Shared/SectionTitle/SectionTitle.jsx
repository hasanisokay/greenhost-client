import React from 'react';

const SectionTitle = ({ title, description }) => {
    return (
        <div>
            <h3 className='section-title text-center'>{title}</h3>
            <p className='md:w-[60%] mx-auto mt-4 text-center'>{description}</p>
            <hr className='w-20 border-[.5 px] mt-4 border-black mx-auto  ' />
            <hr className='w-32 border-[.5 px] my-1 border-[#7ebc12] mx-auto  ' />
            <hr className='w-20 border-[.5 px] border-black mx-auto mb-10 ' />
        </div>
    );
};

export default SectionTitle;