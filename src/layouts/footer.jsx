import React from 'react';

const Footer = () => {
    return (
        <>

            <footer className=" text-white py-4 text-center font-mono text-sm"
            style={{
            background: "radial-gradient(circle, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 100%)"}}>
                <p><span className='text-[#10B981]'>&copy; {new Date().getFullYear()}</span> Fadwa Narjissi. All Rights Reserved.</p>
            </footer>

        </>
    );
};

export default Footer;
