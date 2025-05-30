import React from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_jaf0973', 'template_tdm7754', e.target, 'RVLtZ8b5ggP-q_rax')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message.");
            });
    };

    return (
        <div
    id='contact'
    className="min-h-screen w-full py-12 p-6 text-[#E5E7EB] font-mono flex flex-col justify-center items-center"
    style={{
        background: "radial-gradient(circle, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 100%)",
    }}
>
    <h2 className="text-4xl font-bold font-mono text-[#10B981] mb-8 text-center">
        Contact Me
    </h2>
    <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-lg shadow-lg p-6 w-[90%] max-w-2xl">
        <h1 className="text-3xl font-bold font-mono text-white text-center mb-10 mt-6">
            Get In Touch
        </h1>
        <form onSubmit={sendEmail}>
            <div className="flex flex-col md:flex-row justify-between gap-10 mb-4">
                <input type="text" name="name" id="Fullname" placeholder="Enter your full name"className="block font-mono w-full mb-4 p-2 border rounded text-white bg-transparent md:w-1/2"/>
                <input type="email" name="email" id="email" placeholder="Enter your email address" className="block font-mono w-full mb-4 p-2 border rounded text-white bg-transparent md:w-1/2"/>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-10 mb-4">
                <input type="tel" name="phone" id="phone" placeholder="Enter your phone number" className="block font-mono w-full mb-4 p-2 border rounded text-white bg-transparent md:w-1/2"/>
                <input type="text" name="subject" id="subject" placeholder="Subject" className="block font-mono w-full mb-4 p-2 border rounded text-white bg-transparent md:w-1/2"/>
            </div>
            <textarea placeholder="Message" name="message" className="mt-1 block w-full border rounded-md py-2 mb-4 text-white bg-transparent" rows={4}
            />
            <button type="submit" className="w-full py-2 px-4 rounded-md font-mono transition-colors duration-300 bg-[#10B981] hover:bg-white text-gray-900">
                Send Email
            </button>
        </form>
    </div>
</div>
    );
};

export default Contact;
