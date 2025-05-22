
import React from "react";
import { FileText, Calendar } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Rest API (Intermediate)",
      issuer: "Hackerrank",
      year: "2025"
    },
    {
      title: "Frontend Development (React)",
      issuer: "Hackerrank",
      year: "2024"
    },
    {
      title: "Introduction To Generative AI",
      issuer: "Google Cloud Skills Boost",
      year: "2024"
    },
    {
      title: "Introduction To Cybersecurity",
      issuer: "Cisco Networking Academy",
      year: "2022"
    }
  ];

  return (
    <section id="certificates" className="py-20 px-6 bg-portfolio-dark/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">
          <span className="text-portfolio-teal font-mono mr-2">05.</span> Certificates
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-portfolio-navy/30 border border-portfolio-light/5 p-5 rounded-lg hover:border-portfolio-teal/20 transition-all duration-300">
              <h3 className="text-lg text-portfolio-lightest font-bold mb-2 flex items-center">
                <FileText size={18} className="mr-2 text-portfolio-teal" />
                {cert.title}
              </h3>
              <div className="flex flex-col">
                <span className="text-portfolio-light">{cert.issuer}</span>
                <div className="flex items-center text-portfolio-light/70 mt-2">
                  <Calendar size={16} className="mr-2" />
                  <span>{cert.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-portfolio-light italic">**There is more certification licenses on my LinkedIn**</p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
