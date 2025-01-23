import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // In a real app, this would handle w3id authentication
    navigate("/booking");
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
        <Button
          onClick={handleLogin}
          className="w-full bg-ibm-blue hover:bg-blue-700 text-white"
        >
          Continue with w3id
        </Button>
      </div>
    </div>
  );
};