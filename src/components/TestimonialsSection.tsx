
import React from 'react';
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-petpals-gray to-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">What Pet Owners Are Saying</h2>
        <p className="section-subtitle">
          Hear from our community of pet lovers who have found support, advice, and friendship on PetPals.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg shadow-md p-8 relative">
            <div className="flex space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic">
              "PetPals helped me connect with other pet owners and get expert advice for my dog's anxiety issues. Within days of using the recommended techniques, Bailey was much calmer on our walks."
            </p>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=100&auto=format&fit=crop" 
                alt="Sarah & Bailey" 
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-bold">Sarah Johnson</p>
                <p className="text-sm text-gray-500">Owner of Bailey, Golden Retriever</p>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=200&auto=format&fit=crop" 
              alt="Dog" 
              className="absolute -bottom-5 -right-5 w-24 h-24 rounded-lg object-cover border-4 border-white shadow-md"
            />
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg shadow-md p-8 relative">
            <div className="flex space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic">
              "The free consultations have been a game-changer for my cat's health! I was so worried about his unusual behavior, but the vet on PetPals identified the issue immediately and saved me an expensive trip."
            </p>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=100&auto=format&fit=crop" 
                alt="Michael & Whiskers" 
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-bold">Michael Chen</p>
                <p className="text-sm text-gray-500">Owner of Whiskers, Maine Coon</p>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?q=80&w=200&auto=format&fit=crop" 
              alt="Cat" 
              className="absolute -bottom-5 -right-5 w-24 h-24 rounded-lg object-cover border-4 border-white shadow-md"
            />
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-white rounded-lg shadow-md p-8 relative">
            <div className="flex space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic">
              "I've made so many friends through PetPals! We now have regular meetups at the local park where our dogs play together. The community here is so supportive and caring."
            </p>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop" 
                alt="Emma & Rocky" 
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-bold">Emma Rodriguez</p>
                <p className="text-sm text-gray-500">Owner of Rocky, Border Collie</p>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=200&auto=format&fit=crop" 
              alt="Dog" 
              className="absolute -bottom-5 -right-5 w-24 h-24 rounded-lg object-cover border-4 border-white shadow-md"
            />
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Button 
            className="btn-primary"
            onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Our Happy Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
