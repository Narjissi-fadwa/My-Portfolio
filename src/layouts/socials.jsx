import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
    return (
        <div className="fixed bottom-4 left-4 z-40 flex flex-col gap-4">
            <a href="" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-[#10B981] text-2xl transition-colors duration-300"
            >
                <FaGithub />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-[#10B981] text-2xl transition-colors duration-300"
            >
                <FaLinkedin />
            </a>
        </div>
    );
};

export default SocialLinks;
