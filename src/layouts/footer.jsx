import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer 
            className="text-white py-8 md:py-12 text-center font-mono relative overflow-hidden"
            style={{
                background: "radial-gradient(circle, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 100%)"
            }}
        >
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/50 to-transparent"></div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#10B981] rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#10B981] rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                >
                    <p className="text-sm md:text-base">
                        <span className='text-[#10B981] font-semibold'>&copy; {new Date().getFullYear()}</span>
                        <span className="mx-2 text-[#E5E7EB]">Fadwa Narjissi.</span>
                        <span className="text-[#9CA3AF]">All Rights Reserved.</span>
                    </p>
                    
                    <div className="flex items-center justify-center gap-2 text-[#9CA3AF] text-xs md:text-sm">
                        <span className="text-[#10B981]">&#123;</span>
                        <span>Built with React, Tailwind CSS & Framer Motion</span>
                        <span className="text-[#10B981]">&#125;</span>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
