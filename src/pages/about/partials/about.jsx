import React from 'react';

const About = () => {
    return (
        <section id="about" className="min-h-screen w-full p-6 text-[#E5E7EB] font-mono flex flex-col justify-center " style={{
                background: "radial-gradient(circle, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 100%)",}}>
                <h2 className="text-4xl font-bold text-[#10B981] mb-8">
                    About Me
                    <span className="text-white">(</span>
                    <span className="text-white">)</span>
                </h2>
            <div className="flex gap-8">
                <pre className="whitespace-pre-wrap text-lg leading-relaxed bg-black bg-opacity-60 p-4 rounded">
                    {`// About Me

const developer = {
  name: "Fadwa Narjissi",
  role: "Front-End Developer",
  skills: [
    "JavaScript (ES6+)",
    "React & React Router",
    "HTML5 & CSS3 (Tailwind CSS)",
    "Git & GitHub"
  ],
  goals: "Create beautiful and performant web applications, continuously learn new technologies."
};

function intro() {
  console.log("Hello! I’m a passionate developer who loves coding and solving problems.");
}`}
                </pre>
                <img src="/path-to-your-photo.jpg" alt="" className="rounded-lg shadow-lg object-cover max-h-80 w-full" />
            </div>
            
        </section>
    );
};

export default About;
