
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
              Hello! I'm Sudharaka, a Software Quality Engineer with expertise in blockchain development, 
              web applications, and software quality assurance. I'm passionate about creating secure and 
              efficient applications that solve real-world problems.
            </p>
            <p className="mb-4">
              Currently, I'm working on projects that range from blockchain-based dApps to 
              web applications for government departments. I have experience working with various 
              technologies and programming languages to deliver high-quality software solutions.
            </p>
            <p className="mb-4">
              Here are a few technologies I've been working with recently:
            </p>
            
            <ul className="grid grid-cols-2 gap-2 max-w-md mb-4">
              {["JavaScript", "React", "Node.js", "SQL", "Python", "Solidity"].map((tech) => (
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
                alt="Sudharaka Ashen" 
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
