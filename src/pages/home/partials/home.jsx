import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../../../layouts/navbar';
import SocialLinks from '../../../layouts/socials';
import AboutPage from '../../about/about';
import SkillsPge from '../../skills/skills';
import ProjectsPage from '../../projects/projects';

const Home = () => {
    const [showUI, setShowUI] = useState(false)
    

    useEffect(() => {
         document.body.style.overflow = showUI ? '' : 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, [showUI]);

    const handleClick = () => {
        document.body.style.overflow = ''
        setShowUI(true);
    };

    return (
        <div>
            <motion.div
                initial={{ backgroundPosition: "50% 0%" }}
                animate={{ backgroundPosition: "50% 100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-screen w-full flex flex-col justify-center items-center text-white relative"
                style={{
                    backgroundImage: "linear-gradient(180deg, #0D0D0D, #111827, #0f766e, #1F1F1F, #0D0D0D)",
                    backgroundSize: "100% 300%",
                }}
            >
                {!showUI && (
                    <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-5xl font-bold cursor-pointer flex flex-col text-center select-none text-[#10B981]"
                    onClick={handleClick}
                    >
                        <span className='text-white'>Welcome to My Portfolio</span>
                        &lt;/&gt;
                    </motion.h1>
                )}

                <AnimatePresence>
                    {showUI && (
                        <>
                            
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.7 }}
                                className="absolute top-0 left-0 right-0"
                            >
                                <Navbar />
                            </motion.div>

                            
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="absolute left-4 bottom-6"
                            >
                                <SocialLinks />
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.3, duration: 0.7 }}
                                className="text-4xl sm:text-5xl flex flex-col text-center font-bold text-white mt-8"
                            >
                                <span>Hi I'm </span>
                                <div>

                                <span className="text-[#10B981]">&lt;</span>
                                <span className="mx-2">Fadwa Narjissi</span>
                                <span className="text-[#10B981]">/&gt;</span>
                                </div>
                            </motion.h1>
                        </>
                    )}
                </AnimatePresence>
            </motion.div>
            
            {showUI && (
                <>
                    <AboutPage />
                    <SkillsPge />
                    <ProjectsPage />
                </>
            )}
        </div>
    );
};

export default Home;