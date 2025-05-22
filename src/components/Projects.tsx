
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Blockchain Token Transfer dApp",
      description: "Developed a decentralized application (dApp) that enables secure token transfers on the Ethereum blockchain. Implemented a smart contract for handling token balance and transactions using Solidity. Integrated MetaMask wallet authentication for seamless user experience.",
      image: "/placeholder.svg",
      technologies: ["Solidity", "Ethereum", "MetaMask", "React", "Web3.js"],
      githubLink: "https://github.com/SudharakaA",
      demoLink: "https://portfolio-lemon-delta-53.vercel.app",
    },
    {
      title: "TAXGEN",
      description: "Built a tax calculation application to develop and execute tax calculations for in-person and different types of businesses. Users can manage their bank accounts and the payments they made each month, with integrated payment gateways for seamless tax payments.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "PostgreSQL", "Payment Gateways"],
      githubLink: "https://github.com/SudharakaA",
      demoLink: "https://portfolio-lemon-delta-53.vercel.app",
      reversed: true,
    },
    {
      title: "Real Time Water Level In Major Rivers",
      description: "Developing a web application specifically tailored for the Irrigation Department's needs. This application enables them to record daily water level gauges, providing a valuable tool for monitoring and managing water resources effectively.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Data Visualization"],
      githubLink: "https://github.com/SudharakaA",
      demoLink: "https://portfolio-lemon-delta-53.vercel.app",
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
