import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import images from '../../../constant/images';

const skills = [
    {
        name: 'HTML',
        image: images.htmlLogo,
        description: 'I structure semantic and accessible layouts using clean HTML.',
    },
    {
        name: 'CSS',
        image: images.cssLogo,
        description: 'I style responsive layouts with Flexbox, Grid, and animations.',
    },
    {
        name: 'JavaScript',
        image: images.jsLogo,
        description: 'I build interactive features and handle application logic with JavaScript.',
    },
    {
        name: 'TypeScript',
        image: images.typescriptLogo,
        description: 'I write type-safe code with TypeScript to catch bugs early and improve maintainability.',
    },
    {
        name: 'React',
        image: images.reactLogo,
        description: 'I build modern UI with React using components, hooks, and state management.',
    },
    {
        name: 'Tailwind CSS',
        image: images.tailwindLogo,
        description: 'I quickly design responsive and clean UIs using Tailwind utility classes.',
    },
    {
        name: 'Node.js',
        image: images.nodeJsLogo,
        description: 'I create simple backend servers and APIs with Node.js and Express.',
    },
    {
        name: 'Git',
        image: images.gitLogo,
        description: 'I use Git for version control: branching, merging, and collaborative workflows.',
    },
];

const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    return (
        <div 
            id="skills" 
            ref={ref}
            className="min-h-screen w-full font-mono flex flex-col px-6 py-20 md:py-32 relative overflow-hidden"
            style={{
                background: "radial-gradient(circle, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 100%)",
            }}
        >
            {/* Decorative background elements */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-[#10B981] opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#10B981] opacity-5 rounded-full blur-3xl"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold font-mono text-[#10B981] mb-20 text-center"
                >
                    My Skills 
                    <span className="text-white">(</span>
                    <span className="text-white">)</span>
                </motion.h2>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative group"
                            onMouseEnter={() => setHoveredSkill(index)}
                            onMouseLeave={() => setHoveredSkill(null)}
                        >
                            <motion.div
                                whileHover={{ 
                                    scale: 1.1,
                                    rotate: [0, -5, 5, -5, 0],
                                }}
                                transition={{ 
                                    scale: { duration: 0.3 },
                                    rotate: { duration: 0.5 }
                                }}
                                className="relative flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-black/40 to-[#1F1F1F]/40 backdrop-blur-sm border border-[#10B981]/20 hover:border-[#10B981]/50 transition-all duration-300 cursor-pointer"
                            >
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/0 to-[#10B981]/0 group-hover:from-[#10B981]/10 group-hover:to-[#10B981]/0 rounded-xl transition-all duration-300"></div>
                                
                                <motion.img 
                                    src={skill.image} 
                                    alt={skill.name} 
                                    className="w-20 h-20 md:w-24 md:h-24 object-contain mb-4 relative z-10 filter drop-shadow-lg"
                                    whileHover={{ scale: 1.15 }}
                                    transition={{ duration: 0.2 }}
                                />
                                
                                <h3 className="text-white font-mono text-sm md:text-base font-semibold relative z-10">
                                    {skill.name}
                                </h3>

                                {/* Tooltip */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                    animate={{ 
                                        opacity: hoveredSkill === index ? 1 : 0, 
                                        y: hoveredSkill === index ? 0 : 10,
                                        scale: hoveredSkill === index ? 1 : 0.9
                                    }} 
                                    transition={{ duration: 0.3 }}
                                    className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 z-50 w-64 p-4 rounded-lg bg-gradient-to-br from-black/95 to-[#1F1F1F]/95 backdrop-blur-md border border-[#10B981]/30 shadow-2xl pointer-events-none"
                                >
                                    <p className="text-xs md:text-sm text-white text-center leading-relaxed">
                                        {skill.description}
                                    </p>
                                    {/* Arrow */}
                                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black/95 border-l border-t border-[#10B981]/30 rotate-45"></div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
