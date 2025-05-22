
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">
          <span className="text-portfolio-teal font-mono mr-2">01.</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 text-lg">
            <p className="mb-4">
              Hello! I'm John, a passionate web developer with a love for creating beautiful, 
              functional digital experiences. My journey in web development started back in 
              2018 when I decided to try editing custom Tumblr themes — turns out hacking together 
              a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p className="mb-4">
              Fast-forward to today, and I've had the privilege of working at an advertising agency, 
              a start-up, and a large corporation. My main focus these days is building accessible, 
              inclusive products and digital experiences for a variety of clients.
            </p>
            <p className="mb-4">
              Here are a few technologies I've been working with recently:
            </p>
            
            <ul className="grid grid-cols-2 gap-2 max-w-md mb-4">
              {["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS"].map((tech) => (
                <li key={tech} className="flex items-center">
                  <span className="text-portfolio-teal mr-2">▹</span> {tech}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative group mx-auto md:mx-0">
            <div className="relative z-10 bg-portfolio-navy border-2 border-portfolio-teal rounded overflow-hidden w-64 h-64">
              <img 
                src="/placeholder.svg" 
                alt="John Doe" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="absolute top-4 left-4 w-64 h-64 border-2 border-portfolio-teal rounded z-0 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
