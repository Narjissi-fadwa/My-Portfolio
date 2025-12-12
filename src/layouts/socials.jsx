import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
    const socialLinks = [
        {
            icon: FaGithub,
            href: 'https://github.com/Narjissi-fadwa',
            label: 'GitHub',
            delay: 0.1
        },
        {
            icon: FaLinkedin,
            href: 'https://www.linkedin.com/in/fadwa-narjissi-28b21422b/',
            label: 'LinkedIn',
            delay: 0.2
        }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="fixed bottom-6 left-4 md:left-6 z-40 flex flex-col gap-4"
        >
            {/* Vertical line decoration */}
            <div className="absolute left-1/2 top-0 w-[1px] h-16 bg-gradient-to-b from-[#10B981] to-transparent transform -translate-x-1/2 -translate-y-full"></div>
            
            {socialLinks.map((social, index) => (
                <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="relative group"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                        duration: 0.5, 
                        delay: social.delay,
                        type: "spring",
                        stiffness: 200
                    }}
                    whileHover={{ scale: 1.2, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-[#10B981] rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
                    
                    {/* Icon container */}
                    <div className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-br from-black/40 to-[#1F1F1F]/40 backdrop-blur-sm border border-[#10B981]/30 rounded-full text-white group-hover:text-[#10B981] group-hover:border-[#10B981] transition-all duration-300">
                        <social.icon className="text-xl" />
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                        <div className="bg-black/90 text-white text-xs font-mono px-3 py-2 rounded-lg border border-[#10B981]/30 shadow-lg">
                            {social.label}
                            <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-black/90"></div>
                        </div>
                    </div>
                </motion.a>
            ))}
        </motion.div>
    );
};

export default SocialLinks;
