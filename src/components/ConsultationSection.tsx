
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PawPrint } from "lucide-react";

const ConsultationSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    petName: '',
    petType: '',
    consultationType: '',
    description: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.petName || !formData.petType || !formData.consultationType || !formData.description) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Consultation Request Sent!",
      description: "We've received your request and a pet expert will contact you soon.",
    });
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      petName: '',
      petType: '',
      consultationType: '',
      description: '',
    });
  };

  return (
    <section id="consultation" className="py-20 bg-petpals-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help? Get a Free Consultation</h2>
            <p className="text-xl text-gray-600 mb-6">
              PetPals connects you with professional veterinarians and pet experts for free consultations on various issues:
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-petpals-blue/10 flex items-center justify-center mt-1 mr-4">
                  <PawPrint className="h-5 w-5 text-petpals-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Health Concerns</h4>
                  <p className="text-gray-600">Get advice on symptoms, preventative care, and when to visit a vet</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-petpals-green/10 flex items-center justify-center mt-1 mr-4">
                  <PawPrint className="h-5 w-5 text-petpals-green" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Behavior Issues</h4>
                  <p className="text-gray-600">Address training challenges, anxiety, aggression, and more</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-petpals-peach/10 flex items-center justify-center mt-1 mr-4">
                  <PawPrint className="h-5 w-5 text-petpals-peach" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Nutrition & Diet</h4>
                  <p className="text-gray-600">Expert guidance on feeding, dietary needs, and weight management</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-petpals-purple/10 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-petpals-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="font-bold text-lg">Our Commitment</p>
              </div>
              <p className="text-gray-600">
                While our free consultations provide valuable guidance, they're not a substitute for in-person veterinary care in emergencies. We recommend seeking immediate professional help for urgent situations.
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Request a Free Consultation</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="petName">Pet's Name</Label>
                    <Input 
                      id="petName" 
                      name="petName" 
                      placeholder="Enter pet's name"
                      value={formData.petName}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="petType">Pet Type</Label>
                    <Select 
                      value={formData.petType} 
                      onValueChange={(value) => handleSelectChange('petType', value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select pet type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dog">Dog</SelectItem>
                        <SelectItem value="cat">Cat</SelectItem>
                        <SelectItem value="bird">Bird</SelectItem>
                        <SelectItem value="rabbit">Rabbit</SelectItem>
                        <SelectItem value="fish">Fish</SelectItem>
                        <SelectItem value="reptile">Reptile</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="consultationType">Consultation Type</Label>
                  <Select 
                    value={formData.consultationType} 
                    onValueChange={(value) => handleSelectChange('consultationType', value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select consultation type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="health">Health Issue</SelectItem>
                      <SelectItem value="behavior">Behavior Problem</SelectItem>
                      <SelectItem value="nutrition">Nutrition & Diet</SelectItem>
                      <SelectItem value="grooming">Grooming</SelectItem>
                      <SelectItem value="training">Training</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Describe Your Concern</Label>
                  <Textarea 
                    id="description" 
                    name="description" 
                    placeholder="Please provide details about your pet's issue..."
                    rows={5}
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-petpals-blue to-petpals-green text-white py-6 font-semibold"
                >
                  Request Consultation
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
