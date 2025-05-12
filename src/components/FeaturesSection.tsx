
import React from 'react';
import { Button } from "@/components/ui/button";
import { PawPrint, Users, MessageCircle, Image } from "lucide-react";

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Features of PetPals</h2>
        <p className="section-subtitle">
          Discover all the amazing features designed to enhance your pet parenting experience and build connections.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Feature 1 */}
          <div className="flex gap-6 items-start">
            <div className="w-14 h-14 flex-shrink-0 rounded-lg bg-petpals-blue/10 flex items-center justify-center">
              <PawPrint className="h-7 w-7 text-petpals-blue" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Pet Profiles</h3>
              <p className="text-gray-600 mb-4">
                Create personalized profiles for each of your pets including photos, breed information, age, medical history, and fun facts about their personality.
              </p>
              <ul className="space-y-1 text-gray-700">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-petpals-blue mr-2"></span>
                  <span>Multiple pet profiles under one account</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-petpals-blue mr-2"></span>
                  <span>Photo galleries for each pet</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-petpals-blue mr-2"></span>
                  <span>Health records and milestone tracking</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="flex gap-6 items-start">
            <div className="w-14 h-14 flex-shrink-0 rounded-lg bg-petpals-green/10 flex items-center justify-center">
              <Users className="h-7 w-7 text-petpals-green" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
              <p className="text-gray-600 mb-4">
                Connect with like-minded pet parents through a vibrant and supportive community where you can share experiences, ask questions, and make new friends.
              </p>
              <ul className="space-y-1 text-gray-700">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-petpals-green mr-2"></span>
                  <span>Follow other pet owners and their pets</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-petpals-green mr-2"></span>
                  <span>Breed-specific and interest-based groups</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-petpals-green mr-2"></span>
                  <span>Local pet meetups and events</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="flex gap-6 items-start">
            <div className="w-14 h-14 flex-shrink-0 rounded-lg bg-petpals-peach/10 flex items-center justify-center">
              <MessageCircle className="h-7 w-7 text-petpals-peach" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Free Expert Consultations</h3>
              <p className="text-gray-600 mb-4">
                Access complimentary consultations with verified veterinarians, trainers, and pet behavior specialists for all your pet care questions and concerns.
              </p>
              <ul className="space-y-1 text-gray-700">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-petpals-peach mr-2"></span>
                  <span>Direct messaging with pet experts</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-petpals-peach mr-2"></span>
                  <span>Veterinary, training, and nutrition advice</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-petpals-peach mr-2"></span>
                  <span>Emergency care guidance</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Feature 4 */}
          <div className="flex gap-6 items-start">
            <div className="w-14 h-14 flex-shrink-0 rounded-lg bg-petpals-purple/10 flex items-center justify-center">
              <Image className="h-7 w-7 text-petpals-purple" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Content Sharing</h3>
              <p className="text-gray-600 mb-4">
                Share your pet's precious moments through photos, videos, and stories with an engaged community that appreciates your furry friend as much as you do.
              </p>
              <ul className="space-y-1 text-gray-700">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-petpals-purple mr-2"></span>
                  <span>Photo and video posting</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-petpals-purple mr-2"></span>
                  <span>Pet stories and blog creation</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-petpals-purple mr-2"></span>
                  <span>Easy content organization and searchability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            className="btn-primary"
            onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
