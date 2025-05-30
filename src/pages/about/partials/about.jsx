import { image } from 'framer-motion/client';
import React from 'react';
import images from '../../../constant/images';

const About = () => {
    return (
        <section id="about" className="min-h-screen w-full p-6 py-12 text-[#E5E7EB] font-mono flex flex-col justify-center " style={{
            background: "radial-gradient(circle, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 100%)",
        }}>
            <h2 className="text-4xl font-bold font-mono text-[#10B981] mb-8">
                About Me
                <span className="text-white">(</span>
                <span className="text-white">)</span>
            </h2>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 p-6 rounded-lg">
                <pre className="whitespace-pre-wrap text-lg leading-relaxed bg-black bg-opacity-70 text-white p-6 rounded-md shadow-md">
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
  console.log("Hello! I’m a passionate developer who loves coding and solving problems.");
}`}
                </pre>
                <img src={images.about} alt="" className="rounded-full shadow-lg object-cover max-h-96 w-[400px]" />
            </div>

        </section>
    );
};

export default About;
