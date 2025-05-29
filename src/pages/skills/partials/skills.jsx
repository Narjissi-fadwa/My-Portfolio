import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

    return (
        <div id="skills" className="min-h-screen w-full font-mono flex flex-col p-6"
            style={{background: "radial-gradient(circle, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 100%)",}}>
            <h2 className="text-4xl font-bold text-[#10B981] mb-32">
                My Skills 
                <span className="text-white">(</span>
                <span className="text-white">)</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {skills.map((skill, index) => (
                    <div key={index} className="relative group flex flex-col items-center" 
                        onMouseEnter={() => setHoveredSkill(index)}
                        onMouseLeave={() => setHoveredSkill(null)}>
                        <img src={skill.image} alt={skill.name} className="w-[100px] transition-transform duration-300 group-hover:scale-105"/>
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: hoveredSkill === index ? 1 : 0, y: hoveredSkill === index ? 0 : 10 }}
                            transition={{ duration: 0.3 }}
                            className="absolute  rounded-full bg-black/90 p-15 z-40 w-[250px] h-[250px] text-sm text-white text-center px-4"
                        >
                            {skill.description}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
