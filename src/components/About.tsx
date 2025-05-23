
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
              Hello! I'm Sudharaka, a DevOps Engineer with expertise in cloud infrastructure, CI/CD pipelines,
              and containerization. I'm passionate about automating deployment processes and building scalable,
              resilient systems that solve real-world problems.
            </p>
            <p className="mb-4">
              Currently, I'm working on projects that involve setting up infrastructure as code,
              implementing monitoring solutions, and optimizing cloud resource utilization. I have experience
              with various cloud providers and container orchestration platforms.
            </p>
            <p className="mb-4">
              Here are a few technologies I've been working with recently:
            </p>
            
            <ul className="grid grid-cols-2 gap-2 max-w-md mb-4">
              {["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins", "GitHub Actions"].map((tech) => (
                <li key={tech} className="flex items-center">
                  <span className="text-portfolio-teal mr-2">▹</span> {tech}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative group mx-auto md:mx-0">
            <div className="relative z-10 bg-portfolio-navy border-2 border-portfolio-teal rounded overflow-hidden w-64 h-64">
              <img 
                src="/uploads/38b8e14c-420a-45d5-ae6b-c006f4418da5.png" 
                alt="Sudharaka Ashen" 
                className="w-full h-full object-cover transition-all duration-300"
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
