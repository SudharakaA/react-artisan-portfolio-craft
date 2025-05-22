
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Blockchain Token Transfer dApp",
      description: "Developed a decentralized application (dApp) that enables secure token transfers on the Ethereum blockchain. Implemented a smart contract for handling token balance and transactions using Solidity. Integrated MetaMask wallet authentication for seamless user experience.",
      image: "/placeholder.svg",
      technologies: ["Ethereum", "Solidity", "Web3.js", "MetaMask", "React"],
      githubLink: "https://github.com/SudharakaA",
      demoLink: "https://github.com/SudharakaA/TokenTransfer_dAPP-to-Connect-Blockchain-N",
      date: "JAN 2025"
    },
    {
      title: "TAXGEN",
      description: "Developed and executed tax calculations for in-person and different types of businesses. Users can manage their bank accounts and the payments they made each month. Incorporated payment gateways to facilitate seamless tax payments for users.",
      image: "/placeholder.svg",
      technologies: ["Node.js", "MongoDB", "Express", "Payment Gateways", "Docker"],
      githubLink: "https://github.com/SudharakaA",
      demoLink: "https://github.com/SudharakaA/calculation",
      reversed: true,
      date: "NOV 2024"
    },
    {
      title: "Real Time Water Level In Major Rivers",
      description: "Developed a web application specifically tailored for the Irrigation Department's needs. This application enables them to record their daily water level gauges, providing them with a valuable tool for monitoring and managing their water resources effectively.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "IoT Sensors", "Real-time Data"],
      githubLink: "https://github.com/SudharakaA",
      demoLink: "https://github.com/SudharakaA/Web-Irr",
      date: "MAR 2024"
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-heading">
          <span className="text-portfolio-teal font-mono mr-2">02.</span> Projects
        </h2>

        <div>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              reversed={project.reversed}
              date={project.date}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-portfolio-light italic">**There is more projects on my Github**</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
