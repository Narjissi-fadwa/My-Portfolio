import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import images from '../../../constant/images';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
    {
        name: 'Bibliotheca',
        image: images.bibliotheca,
        link: 'https://library-two-eta.vercel.app/',
        description: 'This is a website I created for a library, so people can easily browse books and read a bit about them. I really focused on making the design easy on the eyes and encouraging reading.'
    },
    {
        name: 'Restaurantly',
        image: images.restaurantly,
        link: 'https://narjissi-fadwa.github.io/Fadwa_Narjissi_finalproject_dom/',
        description: 'This is a site I built for a restaurant to showcase the food they offer in an appealing way. I wanted visitors to be able to easily see the menu and get in touch with the restaurant.'
    },
    {
        name: 'EasyFolio',
        image: images.easyfolio,
        link: 'https://narjissi-fadwa.github.io/Fadwa_Narjissi_final_project/',
        description: 'This is a portfolio website I built, designed to help someone showcase their digital skills and creative work in a clean and effective way.'
    },
    {
        name: 'moviesiteweb',
        image: images.moviesiteweb,
        link: 'https://moviesiteweb.vercel.app/',
        description: 'This is a website I made for people who love movies, so they can find information about the films they like. It includes a search function and displays movie posters.'
    },
];

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    return (
        <div 
            id='projects' 
            ref={ref}
            className='w-full px-6 py-20 md:py-32 relative overflow-hidden'
            style={{
                background: "radial-gradient(circle, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 100%)",
            }}
        >
            {/* Decorative background elements */}
            <div className="absolute top-0 left-20 w-96 h-96 bg-[#10B981] opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-20 w-96 h-96 bg-[#10B981] opacity-5 rounded-full blur-3xl"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold font-mono text-[#10B981] mb-16 text-center"
                >
                    My Projects
                    <span className="text-white">(</span>
                    <span className="text-white">)</span>
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
                >
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="group relative"
                        >
                            <div className="relative h-full bg-gradient-to-br from-black/40 to-[#1F1F1F]/40 backdrop-blur-sm border border-[#10B981]/20 rounded-xl overflow-hidden hover:border-[#10B981]/50 transition-all duration-300">
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/0 via-[#10B981]/5 to-[#10B981]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {/* Image container */}
                                <div className="relative h-48 md:h-64 overflow-hidden bg-black/20">
                                    <motion.img 
                                        src={project.image} 
                                        alt={project.name} 
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.4 }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8 relative z-10">
                                    <h3 className="text-2xl md:text-3xl font-bold font-mono mb-4 text-[#10B981] group-hover:text-[#34D399] transition-colors duration-300">
                                        {project.name}
                                    </h3>
                                    <p className="text-[#E5E7EB] font-mono text-sm md:text-base leading-relaxed mb-6 text-[#9CA3AF]">
                                        {project.description}
                                    </p>
                                    
                                    {/* Link button */}
                                    <motion.a 
                                        href={project.link} 
                                        target='_blank' 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#10B981] to-[#34D399] text-black font-mono font-semibold rounded-lg hover:shadow-lg hover:shadow-[#10B981]/50 transition-all duration-300 group/link"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span>&#123;</span>
                                        <span>Visit Project</span>
                                        <span>&#125;</span>
                                        <FaExternalLinkAlt className="text-sm group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                                    </motion.a>
                                </div>

                                {/* Decorative corner */}
                                <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[#10B981]/30 rounded-tr-xl"></div>
                                <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-[#10B981]/30 rounded-bl-xl"></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;