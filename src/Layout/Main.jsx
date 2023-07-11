import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

import { AuthContext } from '../Providers/AuthProvider';
import { useContext } from 'react';

const Main = () => {

    const location = useLocation()
    const { setNavBg } = useContext(AuthContext);
    window.addEventListener('scroll', function() {
        if (window.scrollY === 0) {
          setNavBg("bg-inherit text-white duration-300")
        }
        else{
            setNavBg("bg-white text-[#7ebc12] duration-500")
        }
      });
      

    const handleScroll =()=>{
        console.log("scrolledddd");
        // if(window.scrollY !== 0){
        //     // setNavBg("bg-black")
        //     console.log("changes");
        // }
        // if(window.scrollY ===0){
        //     console.log(0);
        //     // setNavBg("bg-white")
        // }
    }
    return (
        <div>
            <Navbar></Navbar>
            <div ><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Main;