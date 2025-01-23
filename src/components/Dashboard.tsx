import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Armchair, Clock, Users } from "lucide-react";

export const Dashboard = () => {
  const navigate = useNavigate();
  const totalSeats = 200;
  const availableSeats = 150; // This would come from your backend

  return (
    <div className="min-h-screen bg-ibm-gray">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <img
            src="https://www.ibm.com/brand/experience-guides/developer/8f4e3cc4b5/01_8-bar-positive.svg"
            alt="IBM Logo"
            className="h-12 mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold text-ibm-dark mb-4">
            Blu-Reserve System
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Book your cafeteria seat in advance and enjoy a hassle-free lunch
            experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Armchair className="h-8 w-8 text-ibm-blue" />
              <span className="text-3xl font-bold text-ibm-blue">
                {availableSeats}
              </span>
            </div>
            <h3 className="text-lg font-semibold">Available Seats</h3>
            <p className="text-gray-600">Out of {totalSeats} total seats</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Clock className="h-8 w-8 text-ibm-blue" />
              <span className="text-3xl font-bold text-ibm-blue">11:30</span>
            </div>
            <h3 className="text-lg font-semibold">Peak Hours</h3>
            <p className="text-gray-600">11:30 AM - 1:30 PM</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Users className="h-8 w-8 text-ibm-blue" />
              <span className="text-3xl font-bold text-ibm-blue">50+</span>
            </div>
            <h3 className="text-lg font-semibold">Active Users</h3>
            <p className="text-gray-600">Currently using the system</p>
          </div>
        </div>

        <div className="text-center">
          <Button
            onClick={() => navigate("/login")}
            className="bg-ibm-blue hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg"
          >
            Login with w3id
          </Button>
        </div>
      </div>
    </div>
  );
};