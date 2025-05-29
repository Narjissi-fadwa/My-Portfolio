import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import images from '../../../constant/images';

const projectsData = [
    {
        name: 'Bibliotheca',
        image: images.bibliotheca,
        description: 'I structure semantic and accessible layouts using clean HTML.',
    },
    {
        name: 'Bibliotheca',
        image: images.bibliotheca,
        description: 'I structure semantic and accessible layouts using clean HTML.',
    },
    {
        name: 'Bibliotheca',
        image: images.bibliotheca,
        description: 'I structure semantic and accessible layouts using clean HTML.',
    },
    {
        name: 'Bibliotheca',
        image: images.bibliotheca,
        description: 'I structure semantic and accessible layouts using clean HTML.',
    },
    {
        name: 'Bibliotheca',
        image: images.bibliotheca,
        description: 'I structure semantic and accessible layouts using clean HTML.',
    },
    {
        name: 'Bibliotheca',
        image: images.bibliotheca,
        description: 'I structure semantic and accessible layouts using clean HTML.',
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
                end: () => `+=${container.offsetWidth}`,
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
        <section
            ref={containerRef}
            className="w-full h-screen overflow-hidden flex bg-gray-900"
        >
            {projectsData.map((project, index) => (
                <div
                    key={index}
                    ref={(el) => (sectionsRef.current[index] = el)}
                    className="w-screen h-full flex flex-col items-center justify-center text-white text-center p-6"
                    
                >
                    <img src={project.image} alt={project.name} className="max-w-md max-h-48 object-contain mb-4 rounded-md shadow-md" />
                    <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                    <p className="text-lg">{project.description}</p>
                </div>
            ))}
        </section>
    );
};

export default Projects;