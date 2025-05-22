
import React from "react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  reversed?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubLink,
  demoLink,
  reversed = false,
}) => {
  return (
    <div className={`relative flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} mb-24`}>
      {/* Project Image */}
      <div className="w-full md:w-3/5 h-80 relative group">
        <a 
          href={demoLink || githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block relative h-full overflow-hidden rounded"
          aria-label={`View ${title} project`}
        >
          <div className="absolute inset-0 bg-portfolio-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </a>
      </div>
      
      {/* Project Content */}
      <div 
        className={`relative z-20 flex flex-col ${
          reversed ? 'md:items-start md:text-left md:mr-auto' : 'md:items-end md:text-right md:ml-auto'
        } w-full md:w-1/2 mt-4 md:mt-0`}
      >
        <p className="text-portfolio-teal font-mono mb-1">Featured Project</p>
        <h3 className="text-2xl font-bold text-portfolio-lightest mb-4">{title}</h3>
        <div className="bg-portfolio-dark/80 backdrop-blur p-6 rounded shadow-xl mb-4 w-full">
          <p className="text-portfolio-light">{description}</p>
        </div>
        <ul className={`flex flex-wrap gap-x-4 gap-y-2 mb-6 ${reversed ? 'md:justify-start' : 'md:justify-end'}`}>
          {technologies.map((tech) => (
            <li key={tech} className="text-sm text-portfolio-light font-mono">
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-lightest hover:text-portfolio-teal transition-colors"
              aria-label={`${title} GitHub repository`}
            >
              <Github size={20} />
            </a>
          )}
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-lightest hover:text-portfolio-teal transition-colors"
              aria-label={`${title} live demo`}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
