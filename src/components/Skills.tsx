
import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C/C++/C#", "Java", "SQL", "Python", "HTML", "CSS", "PHP", "JavaScript"],
    },
    {
      title: "Core",
      skills: ["Data Structures and Algorithms", "SQL and NoSQL Databases", "Object-Oriented Programming", "Cloud Computing", "Web/Rest API", "AI/ML"],
    },
    {
      title: "Tools & Technologies",
      skills: ["React", "VS Code", "Node", "Docker", "Git Hub", "Xcode", "IntelliJ IDEA", "SQL Developer", "SpringBoot", "MySQL", "Postgre SQL", "Vite", "OpenAI", "Postman"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-portfolio-dark/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">
          <span className="text-portfolio-teal font-mono mr-2">03.</span> Skills
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
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
