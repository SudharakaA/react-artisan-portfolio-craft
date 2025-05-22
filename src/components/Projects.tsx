
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Cloud Infrastructure Automation",
      description: "Designed and implemented a comprehensive infrastructure as code solution using Terraform and AWS CloudFormation. Reduced deployment time by 70% and improved infrastructure consistency across multiple environments with automated testing and validation.",
      image: "/placeholder.svg",
      technologies: ["Terraform", "AWS", "CloudFormation", "Python", "GitHub Actions"],
      githubLink: "https://github.com/SudharakaA",
      demoLink: "https://portfolio-lemon-delta-53.vercel.app",
    },
    {
      title: "Containerized Microservices Platform",
      description: "Developed a Kubernetes-based platform for deploying and managing microservices. Implemented auto-scaling, service mesh with Istio, and comprehensive monitoring using Prometheus and Grafana dashboards for real-time visibility into application performance.",
      image: "/placeholder.svg",
      technologies: ["Kubernetes", "Docker", "Istio", "Prometheus", "Grafana"],
      githubLink: "https://github.com/SudharakaA",
      demoLink: "https://portfolio-lemon-delta-53.vercel.app",
      reversed: true,
    },
    {
      title: "CI/CD Pipeline Optimization",
      description: "Created an optimized CI/CD pipeline using Jenkins and GitLab CI that reduced build times by 45% and enabled zero-downtime deployments. Implemented automated security scanning, code quality checks, and integration testing to ensure robust releases.",
      image: "/placeholder.svg",
      technologies: ["Jenkins", "GitLab CI", "Docker", "Ansible", "SonarQube"],
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
