
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SignupSection from '@/components/SignupSection';
import ConsultationSection from '@/components/ConsultationSection';
import CommunitySection from '@/components/CommunitySection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "PetPals - The Ultimate Pet Community";

    // Handle fragment links for smooth scrolling
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Initial check for hash in URL
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialsSection />
      <SignupSection />
      <ConsultationSection />
      <CommunitySection />
      <FooterSection />
    </div>
  );
};

export default Index;
