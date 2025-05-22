
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="max-w-4xl animate-fade-in">
        <p className="text-portfolio-teal mb-5 font-mono">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-portfolio-lightest mb-4">
          Sudharaka Ashen.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-portfolio-light mb-8">
          DevOps Engineer.
        </h2>
        <p className="text-portfolio-light max-w-xl text-lg mb-12">
          I'm a DevOps engineer specializing in building and maintaining robust CI/CD pipelines and cloud infrastructure.
          Currently, I'm focused on implementing automated deployment solutions and optimizing cloud resources.
        </p>
        <Button 
          asChild
          className="border border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10 rounded px-7 py-5 text-base"
          variant="outline"
        >
          <a href="#projects" className="flex items-center">
            View My Work <ArrowRight size={16} className="ml-2" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
