import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../../../assets/logo.png";

const Navbar = () => {
    
    // Nav links gulo ekta constant e rakhle manage kora shohoj
    const navOptions = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/item1">Item 1</NavLink></li>
            <li><NavLink to="/item3">Item 3</NavLink></li>
        </>
    );

    return (
        <nav className="navbar bg-base-100 shadow-sm px-4 md:px-8">
            {/* Navbar Start: Logo & Mobile Menu */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" aria-label="Menu">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>
                
                <Link to="/" className="flex items-center gap-2">
                    <img className="w-10 md:w-12" src={logo} alt="Company Logo" />
                </Link>
            </div>

            {/* Navbar Center: Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navOptions}
                </ul>
            </div>
ß
            {/* Navbar End: Action Button */}ß
            <div className="navbar-end">
                <button className="btn btn-primary text-white">Login</button>
            </div>
        </nav>
    );
};

export default Navbar;