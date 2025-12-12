import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../../../layouts/navbar';
import SocialLinks from '../../../layouts/socials';
import AboutPage from '../../about/about';
import SkillsPge from '../../skills/skills';
import ProjectsPage from '../../projects/projects';
import ContactPage from '../../contact/contact';
import Footer from '../../../layouts/footer';

const Home = () => {
    const [showUI, setShowUI] = useState(false)

    useEffect(() => {
        if (!showUI) {
            document.body.style.overflow = 'hidden';
        } else {
            setTimeout(() => {
                document.body.style.overflow = '';
            }, 100);
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [showUI]);

    const handleClick = () => {
        setShowUI(true);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
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
        <div id='home' className="overflow-x-hidden">
            <motion.div 
                initial={{ backgroundPosition: "50% 0%" }} 
                animate={{ backgroundPosition: "50% 100%" }} 
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                className="h-screen w-full flex flex-col justify-center items-center text-white relative overflow-hidden"
                style={{
                    backgroundImage: "linear-gradient(180deg, #0D0D0D, #111827, #0f766e, #1F1F1F, #0D0D0D)",
                    backgroundSize: "100% 300%",
                }}
            >
                {/* Animated background particles */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => {
                        const width = typeof window !== 'undefined' ? window.innerWidth : 1920;
                        const height = typeof window !== 'undefined' ? window.innerHeight : 1080;
                        return (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-[#10B981] rounded-full opacity-30"
                                initial={{
                                    x: Math.random() * width,
                                    y: Math.random() * height,
                                }}
                                animate={{
                                    y: [null, Math.random() * height],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: Math.random() * 3 + 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                }}
                            />
                        );
                    })}
                </div>

                {!showUI && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        className="relative z-10"
                    >
                        <motion.h1 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-5xl md:text-6xl font-bold font-mono cursor-pointer flex flex-col text-center select-none mb-6"
                            onClick={handleClick}
                        >
                            <motion.span 
                                className='text-white mb-2'
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                Welcome to My Portfolio
                            </motion.span>
                            <motion.span 
                                className="text-[#10B981] text-4xl md:text-5xl"
                                animate={{ 
                                    opacity: [1, 0.7, 1],
                                }}
                                transition={{ 
                                    duration: 2, 
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                &lt;/&gt;
                            </motion.span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-[#9CA3AF] font-mono text-sm md:text-base text-center mt-4"
                        >
                            Click anywhere to enter
                        </motion.p>
                    </motion.div>
                )}

                <AnimatePresence>
                    {showUI && (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="relative z-10 w-full"
                        >
                            <motion.div 
                                variants={itemVariants}
                                className="fixed top-0 left-0 right-0 z-50"
                            >
                                <Navbar />
                            </motion.div>

                            <motion.div 
                                variants={itemVariants}
                                className="fixed left-4 bottom-6 z-40"
                            >
                                <SocialLinks />
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col items-center justify-center min-h-screen px-4"
                            >
                                <motion.h1 
                                    variants={itemVariants}
                                    className="text-4xl sm:text-5xl md:text-6xl flex flex-col text-center font-bold font-mono text-white mb-6"
                                >
                                    <motion.span
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                    >
                                        Hi I'm 
                                    </motion.span>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
                                        className="mt-2"
                                    >
                                        <span className="text-[#10B981]">&lt;</span>
                                        <span className="mx-2 bg-gradient-to-r from-white to-[#10B981] bg-clip-text text-transparent">
                                            Fadwa Narjissi
                                        </span>
                                        <span className="text-[#10B981]">/&gt;</span>
                                    </motion.div>
                                </motion.h1>
                                <motion.span 
                                    variants={itemVariants}
                                    className='p-5 font-mono text-lg md:text-xl text-center max-w-2xl'
                                >
                                    <span className="text-[#10B981]">&#123;</span>
                                    <span className="mx-2 text-[#E5E7EB]">
                                        I build clean, responsive UIs with a touch of JavaScript magic
                                    </span>
                                    <span className="text-[#10B981]">&#125;</span>
                                </motion.span>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
            
            {showUI && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="relative z-0"
                >
                    <AboutPage />
                    <SkillsPge />
                    <ProjectsPage />
                    <ContactPage />
                    <Footer />
                </motion.div>
            )}
        </div>
    );
};

export default Home;