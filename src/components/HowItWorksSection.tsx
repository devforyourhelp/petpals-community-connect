
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-petpals-gray">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">How PetPals Works</h2>
        <p className="section-subtitle">
          Join thousands of pet owners in just a few simple steps and start your pet's social journey today.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mt-12">
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-md p-8 h-full flex flex-col">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-petpals-blue to-petpals-green flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <div className="flex-1">
                <img 
                  src="https://images.unsplash.com/photo-1553322396-0c9cd410935e?q=80&w=500&auto=format&fit=crop" 
                  alt="Create Profile" 
                  className="w-full h-40 object-cover rounded-md mb-6"
                />
                <h3 className="text-xl font-bold mb-3 text-center">Create Your Pet's Profile</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-petpals-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Sign up with your details</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-petpals-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Add your pet's name, breed, age and photo</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-petpals-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Customize your profile with pet details</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#6ED1B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-md p-8 h-full flex flex-col">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-petpals-blue to-petpals-green flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <div className="flex-1">
                <img 
                  src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?q=80&w=500&auto=format&fit=crop" 
                  alt="Share Content" 
                  className="w-full h-40 object-cover rounded-md mb-6"
                />
                <h3 className="text-xl font-bold mb-3 text-center">Share & Connect</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-petpals-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Post photos and stories about your pet</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-petpals-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Follow other pet owners</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-petpals-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Engage with the community through likes and comments</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#6ED1B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          {/* Step 3 */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 h-full flex flex-col">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-petpals-blue to-petpals-green flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <div className="flex-1">
                <img 
                  src="https://images.unsplash.com/photo-1623605931891-d5b95ee98459?q=80&w=500&auto=format&fit=crop" 
                  alt="Get Consultations" 
                  className="w-full h-40 object-cover rounded-md mb-6"
                />
                <h3 className="text-xl font-bold mb-3 text-center">Get Expert Advice</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-petpals-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Request free consultations with pet experts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-petpals-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Describe your pet's issue or question</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-petpals-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Receive personalized advice and recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="btn-primary"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
