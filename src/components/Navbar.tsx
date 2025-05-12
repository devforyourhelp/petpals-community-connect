
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#hero" className="flex items-center gap-2">
            <PawPrint className="h-8 w-8 text-petpals-blue" />
            <span className="text-2xl font-bold text-gradient">PetPals</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-700 hover:text-petpals-blue transition-colors">About</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-petpals-blue transition-colors">How It Works</a>
            <a href="#features" className="text-gray-700 hover:text-petpals-blue transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-700 hover:text-petpals-blue transition-colors">Testimonials</a>
            <a href="#consultation" className="text-gray-700 hover:text-petpals-blue transition-colors">Consultation</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="outline" 
              className="border-petpals-blue text-petpals-blue hover:bg-petpals-blue hover:text-white"
              onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Log In
            </Button>
            <Button 
              className="bg-gradient-to-r from-petpals-blue to-petpals-green text-white hover:shadow-lg"
              onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg mt-4 py-4 px-4 rounded-lg">
            <div className="flex flex-col gap-4">
              <a 
                href="#about" 
                className="text-gray-700 hover:text-petpals-blue transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-700 hover:text-petpals-blue transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#features" 
                className="text-gray-700 hover:text-petpals-blue transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-petpals-blue transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#consultation" 
                className="text-gray-700 hover:text-petpals-blue transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Consultation
              </a>
              <div className="flex flex-col gap-2 mt-2">
                <Button 
                  variant="outline" 
                  className="border-petpals-blue text-petpals-blue hover:bg-petpals-blue hover:text-white w-full"
                  onClick={() => {
                    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }}
                >
                  Log In
                </Button>
                <Button 
                  className="bg-gradient-to-r from-petpals-blue to-petpals-green text-white hover:shadow-lg w-full"
                  onClick={() => {
                    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
