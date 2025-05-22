
import React from "react";
import { School, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "National Institute Of Business Management",
      degree: "BSC(Hons) In Computing",
      period: "2022-2026",
    },
    {
      institution: "Science College",
      degree: "Advanced Level (Physical Science Stream)",
      period: "2018-2021",
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">
          <span className="text-portfolio-teal font-mono mr-2">04.</span> Education
        </h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-portfolio-navy/30 border border-portfolio-light/5 p-6 rounded-lg hover:border-portfolio-teal/20 transition-all duration-300">
              <h3 className="text-xl text-portfolio-lightest font-bold mb-2">{edu.institution}</h3>
              <div className="flex items-center text-portfolio-teal mb-3">
                <School size={18} className="mr-2" />
                <span>{edu.degree}</span>
              </div>
              <div className="flex items-center text-portfolio-light/70">
                <Calendar size={18} className="mr-2" />
                <span>{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
