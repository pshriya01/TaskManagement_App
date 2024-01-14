import React, { useState } from 'react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-500 p-4 border-black border-2">
            <div className="container mx-auto flex items-center justify-between border-black border-2">
                <div className="flex items-center">
                    <h1 className="text-white text-xl font-bold">Your Website</h1>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <button className="text-white hover:text-gray-300">My Tasks</button>
                    <button className="text-white hover:text-gray-300">Login/Logout</button>
                    <button className="text-white hover:text-gray-300">Profile</button>
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

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-blue-500 p-4">
                    <button className="block text-white mb-2">My Tasks</button>
                    <button className="block text-white mb-2">Login/Logout</button>
                    <button className="block text-white">Profile</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
