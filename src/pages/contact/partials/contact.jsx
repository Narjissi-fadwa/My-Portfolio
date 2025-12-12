import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        emailjs.sendForm('service_jaf0973', 'template_tdm7754', e.target, 'RVLtZ8b5ggP-q_rax')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
                setIsSubmitting(false);
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message. Please try again.");
                setIsSubmitting(false);
            });
    };

    const inputVariants = {
        focus: {
            scale: 1.02,
            borderColor: '#10B981',
            boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.1)',
        }
    };

    return (
        <div
            id='contact'
            ref={ref}
            className="min-h-screen w-full py-20 md:py-32 px-6 text-[#E5E7EB] font-mono flex flex-col justify-center items-center relative overflow-hidden"
            style={{
                background: "radial-gradient(circle, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 100%)",
            }}
        >
            {/* Decorative background elements */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-[#10B981] opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#10B981] opacity-5 rounded-full blur-3xl"></div>

            <div className="container mx-auto max-w-3xl relative z-10">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold font-mono text-[#10B981] mb-4 text-center"
                >
                    Contact Me
                    <span className="text-white">(</span>
                    <span className="text-white">)</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center text-[#9CA3AF] font-mono mb-12 text-lg"
                >
                    Let's work together to bring your ideas to life
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-gradient-to-br from-black/60 to-[#1F1F1F]/60 backdrop-blur-md rounded-xl shadow-2xl border border-[#10B981]/20 p-8 md:p-10 w-full"
                >
                    <h3 className="text-2xl md:text-3xl font-bold font-mono text-white text-center mb-10">
                        Get In Touch
                    </h3>
                    
                    <form onSubmit={sendEmail}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <motion.div
                                variants={inputVariants}
                                whileFocus="focus"
                            >
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="Fullname" 
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="block font-mono w-full p-3 md:p-4 border border-[#10B981]/30 rounded-lg text-white bg-black/30 focus:outline-none focus:bg-black/50 transition-all duration-300 placeholder-[#6B7280]"
                                />
                            </motion.div>
                            
                            <motion.div
                                variants={inputVariants}
                                whileFocus="focus"
                            >
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="Enter your email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="block font-mono w-full p-3 md:p-4 border border-[#10B981]/30 rounded-lg text-white bg-black/30 focus:outline-none focus:bg-black/50 transition-all duration-300 placeholder-[#6B7280]"
                                />
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <motion.div
                                variants={inputVariants}
                                whileFocus="focus"
                            >
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    id="phone" 
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="block font-mono w-full p-3 md:p-4 border border-[#10B981]/30 rounded-lg text-white bg-black/30 focus:outline-none focus:bg-black/50 transition-all duration-300 placeholder-[#6B7280]"
                                />
                            </motion.div>
                            
                            <motion.div
                                variants={inputVariants}
                                whileFocus="focus"
                            >
                                <input 
                                    type="text" 
                                    name="subject" 
                                    id="subject" 
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="block font-mono w-full p-3 md:p-4 border border-[#10B981]/30 rounded-lg text-white bg-black/30 focus:outline-none focus:bg-black/50 transition-all duration-300 placeholder-[#6B7280]"
                                />
                            </motion.div>
                        </div>

                        <motion.div
                            variants={inputVariants}
                            whileFocus="focus"
                            className="mb-8"
                        >
                            <textarea 
                                placeholder="Your message..." 
                                name="message" 
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="block w-full p-3 md:p-4 border border-[#10B981]/30 rounded-lg text-white bg-black/30 focus:outline-none focus:bg-black/50 transition-all duration-300 resize-none placeholder-[#6B7280] font-mono"
                            />
                        </motion.div>

                        <motion.button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full py-4 px-6 rounded-lg font-mono font-semibold text-lg bg-gradient-to-r from-[#10B981] to-[#34D399] text-black hover:shadow-lg hover:shadow-[#10B981]/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                {isSubmitting ? (
                                    <>
                                        <span>Sending...</span>
                                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                    </>
                                ) : (
                                    <>
                                        <span>&#123;</span>
                                        <span>Send Message</span>
                                        <span>&#125;</span>
                                    </>
                                )}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#34D399] to-[#10B981] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
