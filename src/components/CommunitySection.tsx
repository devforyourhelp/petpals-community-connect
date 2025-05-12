
import React from 'react';
import { Button } from "@/components/ui/button";
import { Camera, Share } from "lucide-react";

const CommunitySection: React.FC = () => {
  // Sample pet images
  const petImages = [
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=400&auto=format&fit=crop"
  ];

  return (
    <section id="community" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Share Your Pet's Journey</h2>
        <p className="section-subtitle">
          Join thousands of pet owners sharing their pet's precious moments, milestones, and everyday adventures.
        </p>
        
        <div className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {petImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img 
                  src={image} 
                  alt={`Community pet ${index + 1}`} 
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <p className="text-white font-bold">@petlover{index + 1}</p>
                    <p className="text-white/80 text-sm">{index % 2 === 0 ? "My best friend ❤️" : "Weekend adventures 🐾"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              className="btn-primary group relative overflow-hidden"
              onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="flex items-center gap-2">
                <Camera className="h-5 w-5" />
                <span>Share Your Pet</span>
              </div>
            </Button>
            
            <div className="mt-12 p-8 bg-petpals-gray/60 rounded-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Ready to show off your furry friend?</h3>
                  <p className="text-gray-600">
                    Create a profile for your pet and start sharing their journey with our supportive community.
                  </p>
                </div>
                <Button 
                  className="flex items-center gap-2 bg-gradient-to-r from-petpals-blue to-petpals-green text-white px-8 h-12 rounded-full hover:shadow-lg transition-all"
                  onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Share className="h-5 w-5" />
                  <span>Get Started</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
