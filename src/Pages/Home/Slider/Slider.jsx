import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaQuoteLeft } from 'react-icons/fa';
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import img1 from "../../../assets/img/team-1.jpg"
import img2 from "../../../assets/img/team-2.jpg"
import img3 from "../../../assets/img/team-3.jpg"
import img4 from "../../../assets/img/team-4.jpg"
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleCarouselChange = (index) => {
        setCurrentSlide(index);
    };
    let variableToChange;
    window.addEventListener('resize', function() {
        const vw = window.innerWidth;
        if(vw < 576){
            variableToChange = 90
        }      
        if(vw>756){
            variableToChange = 40
        }
          console.log(variableToChange);
      });
    return (
        <div>
            <div className="md:w-[50%] mx-auto rounded lg:pt-20">
                <Carousel
                    centerSlidePercentage={90}
                    centerMode={true}
                    autoPlay={true}
                    infiniteLoop={true}
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    interval={356500}
                    transitionTime={500}
                    selectedItem={currentSlide}
                    onChange={handleCarouselChange}
                    
                    responsive={[
                        { breakpoint: 0, settings: { centerMode: false } },
                        { breakpoint: 772, settings: { centerMode: false } },
                        { breakpoint: 1020, settings: { centerMode: true } }
                      ]}
                >
                    <div className={`relative  mt-10 mx-1`}>
                        <div className={`absolute duration-1000 -top-4 left-4 rounded-full border-0 h-12 w-12 ${currentSlide === 0 ? "bg-[#ff0f10]" : "bg-[#7ebc12 ]"}`}>
                            <FaQuoteLeft className={`h-full w-full p-2  text-white `} />
                        </div>
                        <div className={`rounded-lg duration-1000 pt-10  border-t-4 p-6 ${currentSlide === 0 ? "border-t-[#ff0f10] bg-[#7ebc12]" : "border-t-[#7ebc12] bg-gray-300"}`}>
                            <p className=' mb-4 text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, ratione?</p>
                            <div className='flex gap-4 items-center'>
                                <div className='h-16 w-16'>
                                    <img src={img1} className='rounded-full' />
                                </div>
                                <div className='text-start'>
                                    <h5 className='font-semibold text-black'>Hasan
                                    </h5>
                                    <p className='font-thin'>Businessman</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`relative mt-10 mx-1`}>
                        <div className={`absolute duration-1000 -top-4 left-4 rounded-full border-0 h-12 w-12 ${currentSlide === 1 ? "bg-[#ff0f10]" : "bg-[#7ebc12]"}`}>
                            <FaQuoteLeft className={`h-full w-full p-2  text-white `} />
                        </div>
                        <div className={`rounded-lg duration-1000 pt-10  border-t-4 p-6 ${currentSlide === 1 ? "border-t-[#ff0f10] bg-[#7ebc12]" : "border-t-[#7ebc12] bg-gray-300"}`}>
                            <p className=' mb-4 text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, ratione?</p>
                            <div className='flex gap-4 items-center'>
                                <div className='h-16 w-16'>
                                    <img src={img2} className='rounded-full' />
                                </div>
                                <div className='text-start'>
                                    <h5 className='font-semibold text-balck'>Nahian
                                    </h5>
                                    <p className='font-thin'>Student</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`relative mt-10 mx-1`}>
                        <div className={`absolute duration-1000 -top-4 left-4 rounded-full border-0 h-12 w-12 ${currentSlide === 2 ? "bg-[#ff0f10]" : "bg-[#7ebc12]"}`}>
                            <FaQuoteLeft className={`h-full w-full p-2  text-white `} />
                        </div>
                        <div className={`rounded-lg duration-1000 pt-10  border-t-4 p-6 ${currentSlide === 2 ? "border-t-[#ff0f10] bg-[#7ebc12]" : "border-t-[#7ebc12] bg-gray-300"}`}>
                            <p className=' mb-4 text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, ratione?</p>
                            <div className='flex gap-4 items-center'>
                                <div className='h-16 w-16'>
                                    <img src={img3} className='rounded-full' />
                                </div>
                                <div className='text-start'>
                                    <h5 className='font-semibold text-black'>Habib
                                    </h5>
                                    <p className='font-thin'>Teacher</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`relative  mt-10 mx-1`}>
                        <div className={`absolute duration-1000 -top-4 left-4 rounded-full border-0 h-12 w-12 ${currentSlide === 3 ? "bg-[#ff0f10]" : "bg-[#7ebc12]"}`}>
                            <FaQuoteLeft className={`h-full w-full p-2  text-white `} />
                        </div>
                        <div className={`rounded-lg duration-1000 pt-10  border-t-4 p-6 ${currentSlide === 3 ? "border-t-[#ff0f10] bg-[#7ebc12]" : "border-t-[#7ebc12] bg-gray-300"}`}>
                            <p className=' mb-4 text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, ratione?</p>
                            <div className='flex gap-4 items-center'>
                                <div className='h-16 w-16'>
                                    <img src={img4} className='rounded-full' />
                                </div>
                                <div className='text-start'>
                                    <h5 className='font-semibold text-black'>Mahbub
                                    </h5>
                                    <p className='font-thin'>IT Specialist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                </Carousel>

               
            </div>
            <div className=' mx-6 my-2'>

<div className="flex justify-center items-center ">
    {[0, 1, 2, 3].map((index) => (
        <div
            onClick={() => setCurrentSlide(index)}
            key={index}
            className={`h-4 mx-1 cursor-pointer duration-500 rounded-full ${currentSlide === index ? 'bg-[#7ebc12] w-8' : 'w-4 bg-gray-400'
                }`}>

        </div>
    ))}
</div>
</div>

        </div>
    );
};

export default Slider;