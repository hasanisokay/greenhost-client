import React from 'react';
import { useContext } from 'react';
import { NavLink, Link, useLocation, useParams } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaChalkboardTeacher, FaGraduationCap, FaHome, FaMoon, FaSearch, FaShoppingCart, FaUserTie } from "react-icons/fa"



const Navbar = () => {

    // const [handleThemeSwitch] = useThemeSwitch()
    const { navBg, setNavBg } = useContext(AuthContext)
    const {pathname} = useLocation()
    const navOptions = <>
        <li ><NavLink className={`hover:text-red-500 ${pathname !=="/" && "text-black" } `} to={"/"}>Home</NavLink></li>
        <li ><NavLink className={`hover:text-red-500 ${pathname !=="/" && "text-black" } `} to={"/about"} >About</NavLink></li>
        <li ><NavLink className={`hover:text-red-500 ${pathname !=="/" && "text-black" } `} to={"/domain"}  >Domain</NavLink></li>
        <li ><NavLink className={`hover:text-red-500 ${pathname !=="/" && "text-black" } `} to={"/hosting"} >Hosting</NavLink></li>
        {/* <li ><NavLink className={`hover:text-red-500 ${pathname !=="/" && "text-black" } `} to={"/pages"} >Pages</NavLink></li> */}
        {/* <li ><NavLink className={`hover:text-red-500 ${pathname !=="/" && "text-black" } `} to={"contact"} >Contact</NavLink></li> */}
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
                    <FaSearch className='text-[#ff0f10] mr-4 border-0'></FaSearch>
                    <a className="p-2 rounded-xl bg-[#ff0f10] text-white">Register</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;