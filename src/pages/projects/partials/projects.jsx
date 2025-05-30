import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import images from '../../../constant/images';
import { div } from 'framer-motion/client';

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

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const containerRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        const sections = sectionsRef.current;
        const totalSections = sections.length;
        const container = containerRef.current;

    gsap.to(sections, {
        xPercent: -100 * (totalSections - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            snap: 1 / (totalSections - 1),
            end: () => "+=" + container.offsetWidth,
            invalidateOnRefresh: true,
        },
    });

    return () => {
        ScrollTrigger.getAll().forEach(trigger => {
            if (trigger.trigger === container) {
                trigger.kill();
            }
        });
    };
}, []);

    return (
        
        <div id='projects' className='w-full p-6 py-12' style={{background: "radial-gradient(circle, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 100%)",}}>
            <h2 className="text-4xl font-bold font-mono text-[#10B981] mb-8">
                    My projects
                    <span className="text-white">(</span>
                    <span className="text-white">)</span>
                </h2>
            <div
            ref={containerRef}
            className="w-full h-[70vh] overflow-hidden flex "
            
        >

            {projectsData.map((project, index) => (
                <div key={index} ref={(el) => (sectionsRef.current[index] = el)} className="w-screen h-full flex flex-col items-center justify-center text-white text-center p-6">
                    <img src={project.image} alt={project.name} className="max-w-md max-h-48 object-contain mb-4 rounded-md shadow-md" />
                    <h3 className="text-2xl font-bold font-mono mb-2 text-[#10B981]">{project.name}</h3>
                    <p className="text-lg font-mono">{project.description}</p>
                    <a className="text-lg font-mono hover:text-blue-700" href={project.link} target='_blank'>
                        <span>&#123;</span>visit<span>&#125;</span></a>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Projects;