import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            
            // Update active section based on scroll position
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e, section) => {
        e.preventDefault();
        const element = document.getElementById(section);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${
                scrolled ? 'py-3 shadow-lg shadow-[#10B981]/10' : 'py-4'
            }`}
            style={{
                background: scrolled 
                    ? "linear-gradient(180deg, rgba(31,31,31,0.95) 0%, rgba(13,13,13,0.95) 100%)"
                    : "radial-gradient(circle, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 100%)",
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
            }}
        >
            <div className="container mx-auto px-6">
                <div className="flex gap-x-2 md:gap-x-6 justify-center items-center">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => handleClick(e, item.id)}
                            className={`relative px-4 py-2 font-mono transition-all duration-300 rounded-lg ${
                                activeSection === item.id
                                    ? 'text-[#10B981]'
                                    : 'text-[#E5E7EB] hover:text-[#10B981]'
                            }`}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="activeSection"
                                    className="absolute inset-0 bg-[#10B981]/10 border border-[#10B981]/30 rounded-lg"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{item.name}</span>
                        </motion.a>
                    ))}
                </div>
            </div>
            
            {/* Bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/50 to-transparent"></div>
        </motion.nav>
    );
};

export default Navbar;
