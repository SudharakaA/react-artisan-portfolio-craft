
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-portfolio-navy/90 backdrop-blur-md shadow-md" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center">
        <a 
          href="#" 
          className="text-portfolio-teal text-2xl font-bold"
          aria-label="Home"
        >
          JD
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-portfolio-teal mr-1">0{index + 1}.</span> {link.name}
            </a>
          ))}
          <Button
            asChild
            className="border border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10 rounded px-4 py-2"
            variant="outline"
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-portfolio-teal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-portfolio-dark z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <nav className="flex flex-col items-center space-y-8 p-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="text-portfolio-lightest text-lg hover:text-portfolio-teal transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-portfolio-teal mr-1">0{index + 1}.</span> {link.name}
            </a>
          ))}
          <Button
            asChild
            className="mt-4 border border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10 rounded w-full"
            variant="outline"
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
