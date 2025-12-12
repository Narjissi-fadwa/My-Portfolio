import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import images from '../../../constant/images';

const About = () => {
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
        hidden: { opacity: 0, y: 30 },
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
        <section 
            id="about" 
            ref={ref}
            className="min-h-screen w-full px-6 py-20 md:py-32 text-[#E5E7EB] font-mono flex flex-col justify-center relative overflow-hidden"
            style={{
                background: "radial-gradient(circle, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 100%)",
            }}
        >
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#10B981] opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#10B981] opacity-5 rounded-full blur-3xl"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold font-mono text-[#10B981] mb-16 text-center"
                >
                    About Me
                    <span className="text-white">(</span>
                    <span className="text-white">)</span>
                </motion.h2>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-16"
                >
                    <motion.div
                        variants={itemVariants}
                        className="w-full lg:w-1/2 order-2 lg:order-1"
                    >
                        <motion.pre 
                            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)" }}
                            transition={{ duration: 0.3 }}
                            className="whitespace-pre-wrap text-base md:text-lg leading-relaxed bg-gradient-to-br from-black/90 to-[#1F1F1F]/90 backdrop-blur-sm text-white p-6 md:p-8 rounded-lg shadow-2xl border border-[#10B981]/20 overflow-x-auto"
                        >
                            {`// About Me

const developer = {
  name: "Fadwa Narjissi",
  role: "Aspiring Full Stack Developer",
  skills: [
    "JavaScript (ES6+)",
    "React & React Router",
    "HTML5 & CSS3 (Tailwind CSS)",
    "Git & GitHub",
    "node.js"
  ],
  goals: "Create beautiful and performant web applications, continuously learn new technologies."
};

function intro() {
  console.log("Hello! I'm a passionate developer who loves coding and solving problems.");
}`}
                        </motion.pre>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#10B981] to-[#34D399] rounded-full blur-xl opacity-30 animate-pulse"></div>
                            <motion.img 
                                src={images.about} 
                                alt="Fadwa Narjissi" 
                                className="relative rounded-full shadow-2xl object-cover max-h-96 w-[300px] md:w-[400px] border-4 border-[#10B981]/30"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Additional info section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-[#9CA3AF] font-mono text-lg max-w-3xl mx-auto leading-relaxed">
                        Passionate about creating elegant solutions to complex problems, 
                        I combine creativity with technical expertise to build applications 
                        that are both beautiful and functional.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
