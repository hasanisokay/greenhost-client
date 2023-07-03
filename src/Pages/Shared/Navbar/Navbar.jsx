import React from 'react';
import { useContext } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaChalkboardTeacher, FaGraduationCap, FaHome, FaMoon, FaShoppingCart, FaUserTie } from "react-icons/fa"
import logo from "../../../assets/logo.png"
import useInstructor from '../../../Hooks/useInstructor';
import useAdmin from '../../../Hooks/useAdmin';
import useThemeSwitch from '../../../Hooks/useThemeSwitch';
import { useState } from 'react';

const Navbar = () => {

    // const [handleThemeSwitch] = useThemeSwitch()
    const { navBg, setNavBg } = useContext(AuthContext)
    const { pathname } = useLocation()
    const [isAdmin, isAdminLoading] = useAdmin()
    const [isInstructor, isInstructorLoading] = useInstructor()


    const navOptions = <>
        <li ><NavLink className="hover:text-red-500" to={"/"}>Home</NavLink></li>
        <li ><NavLink className="hover:text-red-500 " to={"/about"} >About</NavLink></li>
        <li ><NavLink className="hover:text-red-500 " to={"/domain"}  >Domain</NavLink></li>
        <li ><NavLink className="hover:text-red-500 " to={"/hosting"} >Hosting</NavLink></li>
        <li ><NavLink className="hover:text-red-500 " to={"/pages"} >Pages</NavLink></li>
        <li ><NavLink className="hover:text-red-500 " to={"contact"} >Contact</NavLink></li>
    </>
    return (
        <>
            <div className={`z-10 navbar fixed ${navBg}`} >
                <div className="navbar-start">
                    <div className="dropdown text-black">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Green Host</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="text-lg font-semibold menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;