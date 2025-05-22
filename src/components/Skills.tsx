
import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & Infrastructure",
      skills: ["AWS", "Azure", "GCP", "Terraform", "CloudFormation", "Ansible", "Packer"],
    },
    {
      title: "CI/CD & Automation",
      skills: ["Jenkins", "GitHub Actions", "GitLab CI", "CircleCI", "ArgoCD", "Bash Scripting", "Python"],
    },
    {
      title: "Containers & Orchestration",
      skills: ["Docker", "Kubernetes", "Helm", "Istio", "Docker Compose", "Harbor", "Podman"],
    },
    {
      title: "Monitoring & Observability",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "Jaeger", "New Relic", "CloudWatch"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-portfolio-dark/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">
          <span className="text-portfolio-teal font-mono mr-2">03.</span> Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-portfolio-navy border border-portfolio-light/10 rounded-lg p-6 hover:border-portfolio-teal/30 transition-all duration-300">
              <h3 className="text-portfolio-teal text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="text-portfolio-teal mr-2">▹</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
