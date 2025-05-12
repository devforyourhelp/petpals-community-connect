
import React from 'react';
import { Button } from "@/components/ui/button";
import { PawPrint, Heart } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-cover bg-center z-0" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546975490-e8b92a360b24?q=80&w=2000&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-petpals-blue/90 to-petpals-green/80 mix-blend-multiply"></div>
      </div>
      
      {/* Floating paw prints (decorative) */}
      <div className="absolute top-20 left-10 animate-float opacity-30">
        <PawPrint className="text-white h-8 w-8" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float opacity-30" style={{ animationDelay: '1s' }}>
        <PawPrint className="text-white h-8 w-8" />
      </div>
      <div className="absolute top-1/2 right-1/4 animate-float opacity-30" style={{ animationDelay: '2s' }}>
        <Heart className="text-white h-6 w-6" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Welcome to PetPals <br />
            <span className="block mt-2">The Ultimate Pet Community</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10">
            Connect, Share, and Get Free Expert Pet Consultations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              size="lg"
              className="btn-primary group relative overflow-hidden bg-white text-petpals-blue hover:text-white"
              onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">Join the Community</span>
              <span className="absolute inset-0 bg-gradient-to-r from-petpals-blue to-petpals-green opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-petpals-blue transition-all"
              onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get a Free Consultation
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-24">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,214.86,131.32,213.86,131.52,293,118.33,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
