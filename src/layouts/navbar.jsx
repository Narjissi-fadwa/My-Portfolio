import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 p-4 shadow-md  " style={{
                background: "radial-gradient(circle, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 100%)",}}>
            <div className="flex gap-x-6 container mx-auto justify-center items-center">
                <Link to="/" className="text-[#E5E7EB] hover:text-[#10B981] font-serif transition-colors duration-300">
                    Home
                </Link>
                <a href="#about" to="/about" className="text-[#E5E7EB] hover:text-[#10B981] font-serif transition-colors duration-300">
                    About
                </a>
                <a href="#skills" to="/skills" className="text-[#E5E7EB] hover:text-[#10B981] font-serif transition-colors duration-300">
                    Skills
                </a>
                <a to="/projects" href='#projects' className="text-[#E5E7EB] hover:text-[#10B981] font-serif transition-colors duration-300">
                    Projects
                </a>
                <Link to="/contact" className="text-[#E5E7EB] hover:text-[#10B981] font-serif transition-colors duration-300">
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
