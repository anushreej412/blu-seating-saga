import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email format
    if (!email.endsWith("@ibm.com")) {
      toast({
        title: "Invalid w3id",
        description: "Please enter a valid IBM email address",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would handle w3id authentication
    if (email && password) {
      navigate("/booking");
    } else {
      toast({
        title: "Required fields",
        description: "Please fill in all fields",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-ibm-gray flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <img
          src="https://www.ibm.com/brand/experience-guides/developer/8f4e3cc4b5/01_8-bar-positive.svg"
          alt="IBM Logo"
          className="h-8 mx-auto mb-8"
        />
        <h2 className="text-2xl font-bold text-center text-ibm-dark mb-6">
          Sign in with w3id
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              w3id (Email)
            </label>
            <Input
              id="email"
              type="email"
              placeholder="username@ibm.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-ibm-blue hover:bg-blue-700 text-white mt-6"
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};