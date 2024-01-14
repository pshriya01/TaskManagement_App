import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-custom-green px-6 py-3 ">
            <div className="container mx-auto flex items-center justify-between ">
                <div className="flex items-center">
                    <Link to={'/'} className="text-white text-lg font-bold">Home</Link>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <button onClick={()=>navigate('/tasks')} className="text-custom-green bg-white px-4 py-1 rounded-full text-lg hover:text-custom-pink">My Tasks</button>
                    <button onClick={()=>navigate('/login')} className="text-custom-green bg-white px-4 py-1 rounded-full text-lg hover:text-custom-pink">Login</button>
                    <button onClick={()=>navigate('/profile')} className="text-custom-green bg-white px-4 py-1 rounded-full text-lg hover:text-custom-pink">Profile</button>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleNavbar} className="text-white">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-custom-green p-4">
                    <button className="block text-white mb-2">My Tasks</button>
                    <button className="block text-white mb-2">Login/Logout</button>
                    <button className="block text-white">Profile</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
