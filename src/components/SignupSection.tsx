
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const SignupSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    petName: '',
    petBreed: '',
    password: '',
    confirmPassword: '',
  });
  const [isLogin, setIsLogin] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (isLogin) {
      if (!formData.email || !formData.password) {
        toast({
          title: "Error",
          description: "Please fill in all required fields",
          variant: "destructive",
        });
        return;
      }
    } else {
      if (!formData.name || !formData.email || !formData.petName || !formData.password || !formData.confirmPassword) {
        toast({
          title: "Error",
          description: "Please fill in all required fields",
          variant: "destructive",
        });
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Error",
          description: "Passwords do not match",
          variant: "destructive",
        });
        return;
      }
    }

    // Success message
    toast({
      title: isLogin ? "Login Successful" : "Account Created!",
      description: isLogin 
        ? "Welcome back to PetPals!" 
        : "Welcome to PetPals! Get ready to start your pet's journey.",
    });

    // Clear form
    setFormData({
      name: '',
      email: '',
      petName: '',
      petBreed: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <section id="signup" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="section-title">{isLogin ? "Welcome Back!" : "Join PetPals Today!"}</h2>
          <p className="section-subtitle">
            {isLogin 
              ? "Sign in to reconnect with your pet community." 
              : "Sign up to join a growing community of pet lovers and get free consultations."}
          </p>
          
          <div className="bg-white rounded-xl shadow-xl p-8 mt-8">
            <div className="flex mb-8 border-b">
              <button
                className={`w-1/2 pb-4 text-center font-medium ${!isLogin ? 'text-petpals-blue border-b-2 border-petpals-blue' : 'text-gray-500'}`}
                onClick={() => setIsLogin(false)}
              >
                Create Account
              </button>
              <button
                className={`w-1/2 pb-4 text-center font-medium ${isLogin ? 'text-petpals-blue border-b-2 border-petpals-blue' : 'text-gray-500'}`}
                onClick={() => setIsLogin(true)}
              >
                Log In
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    type="text" 
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              {!isLogin && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="petName">Pet's Name</Label>
                    <Input 
                      id="petName" 
                      name="petName" 
                      type="text" 
                      placeholder="Enter your pet's name"
                      value={formData.petName}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="petBreed">Pet's Breed (Optional)</Label>
                    <Input 
                      id="petBreed" 
                      name="petBreed" 
                      type="text" 
                      placeholder="Enter your pet's breed"
                      value={formData.petBreed}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  name="password" 
                  type="password" 
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    type="password" 
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              )}
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-petpals-blue to-petpals-green text-white py-6 font-semibold mt-6"
              >
                {isLogin ? "Log In" : "Create My Account"}
              </Button>
              
              <div className="text-center mt-4 text-gray-600">
                {isLogin ? (
                  <p>
                    Don't have an account yet?{" "}
                    <button
                      type="button"
                      className="text-petpals-blue font-medium hover:underline"
                      onClick={() => setIsLogin(false)}
                    >
                      Sign Up
                    </button>
                  </p>
                ) : (
                  <p>
                    Already a member?{" "}
                    <button
                      type="button"
                      className="text-petpals-blue font-medium hover:underline"
                      onClick={() => setIsLogin(true)}
                    >
                      Log In
                    </button>
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
