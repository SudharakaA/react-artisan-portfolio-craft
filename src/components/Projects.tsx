
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and Tailwind CSS. Features a responsive design, smooth animations, and a clean user interface.",
      image: "/placeholder.svg",
      technologies: ["React", "Tailwind CSS", "Vite", "TypeScript"],
      githubLink: "https://github.com",
      demoLink: "https://example.com",
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product catalog, shopping cart, and checkout functionality. Built with modern web technologies.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "TypeScript", "Stripe API", "MongoDB"],
      githubLink: "https://github.com",
      demoLink: "https://example.com",
      reversed: true,
    },
    {
      title: "Task Management App",
      description: "A productivity application that helps users manage tasks, set priorities, and track progress. Features drag-and-drop functionality.",
      image: "/placeholder.svg",
      technologies: ["React", "Redux", "Node.js", "Express"],
      githubLink: "https://github.com",
      demoLink: "https://example.com",
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
