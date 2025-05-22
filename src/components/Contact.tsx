
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="text-portfolio-teal font-mono mb-4">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-portfolio-lightest mb-6">Get In Touch</h2>
        <p className="text-portfolio-light text-lg mb-12 mx-auto max-w-lg">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </p>
        
        <Button
          asChild
          className="border-2 border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10 rounded-md px-8 py-6 text-base mb-16"
          variant="outline"
        >
          <a href="mailto:hello@example.com">
            Say Hello
          </a>
        </Button>
        
        <div className="flex justify-center space-x-8">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-portfolio-light hover:text-portfolio-teal transition-all transform hover:-translate-y-1"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-portfolio-light hover:text-portfolio-teal transition-all transform hover:-translate-y-1"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:hello@example.com" 
            className="text-portfolio-light hover:text-portfolio-teal transition-all transform hover:-translate-y-1"
            aria-label="Email me"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
