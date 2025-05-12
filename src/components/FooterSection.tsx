
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { PawPrint, Instagram, Facebook, Twitter, Mail } from "lucide-react";

const FooterSection: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Thank you for subscribing!",
      description: "You'll now receive updates and pet tips directly to your inbox.",
    });
    
    setEmail('');
  };

  return (
    <footer className="bg-petpals-blue/10 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand & Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <PawPrint className="h-8 w-8 text-petpals-blue" />
              <span className="text-2xl font-bold text-gradient">PetPals</span>
            </div>
            <p className="text-gray-600 mb-6">
              Connecting pet owners, sharing experiences, and providing expert guidance for your beloved companions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-petpals-blue/10 flex items-center justify-center text-petpals-blue hover:bg-petpals-blue hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-petpals-blue/10 flex items-center justify-center text-petpals-blue hover:bg-petpals-blue hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-petpals-blue/10 flex items-center justify-center text-petpals-blue hover:bg-petpals-blue hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-600 hover:text-petpals-blue transition-colors">About</a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-petpals-blue transition-colors">Features</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-600 hover:text-petpals-blue transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#consultation" className="text-gray-600 hover:text-petpals-blue transition-colors">Consultations</a>
              </li>
              <li>
                <a href="#community" className="text-gray-600 hover:text-petpals-blue transition-colors">Community</a>
              </li>
            </ul>
          </div>
          
          {/* Legal & Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal & Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-petpals-blue transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-petpals-blue transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-petpals-blue transition-colors">Contact Support</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-petpals-blue transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-petpals-blue transition-colors">Careers</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get Pet Tips & Updates</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for pet care tips, community updates, and exclusive content.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit" className="bg-petpals-blue text-white hover:bg-petpals-blue/90">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} PetPals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
