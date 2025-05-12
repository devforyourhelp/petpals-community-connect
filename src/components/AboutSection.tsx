
import React from 'react';
import { Button } from "@/components/ui/button";
import { PawPrint, Heart, Users } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Why PetPals?</h2>
        <p className="section-subtitle">
          We're on a mission to create the most supportive and engaging community for pet owners around the world. 
          PetPals is where your pet's journey becomes a shared experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="feature-card text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-petpals-blue/10">
              <Heart className="h-8 w-8 text-petpals-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Share Your Pet's Journey</h3>
            <p className="text-gray-600">
              Upload images, stories, and experiences of your furry, feathery, or scaly friends with a community that cares.
            </p>
          </div>
          
          <div className="feature-card text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-petpals-green/10">
              <Users className="h-8 w-8 text-petpals-green" />
            </div>
            <h3 className="text-xl font-bold mb-3">Global Pet Community</h3>
            <p className="text-gray-600">
              Connect with pet owners worldwide who share your passion, challenges, and love for animals.
            </p>
          </div>
          
          <div className="feature-card text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-petpals-peach/10">
              <PawPrint className="h-8 w-8 text-petpals-peach" />
            </div>
            <h3 className="text-xl font-bold mb-3">Expert Consultations</h3>
            <p className="text-gray-600">
              Get free advice from certified veterinarians and pet experts on health, behavior, and care questions.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button
            className="btn-primary"
            onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
