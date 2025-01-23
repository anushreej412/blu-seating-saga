import { NavLink } from "react-router-dom";
import { Calendar, History, User, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export const AppSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col">
      <div className="mb-8">
        <img
          src="https://www.ibm.com/brand/experience-guides/developer/8f4e3cc4b5/01_8-bar-positive.svg"
          alt="IBM Logo"
          className="h-8"
        />
      </div>
      
      <nav className="space-y-2 flex-1">
        <NavLink
          to="/booking"
          className={({ isActive }) =>
            `flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              isActive
                ? "bg-ibm-blue text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <Calendar className="h-5 w-5" />
          <span>Book Seat</span>
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            `flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              isActive
                ? "bg-ibm-blue text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <History className="h-5 w-5" />
          <span>Booking History</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              isActive
                ? "bg-ibm-blue text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <User className="h-5 w-5" />
          <span>Profile</span>
        </NavLink>
      </nav>

      <Button
        variant="ghost"
        className="mt-auto flex items-center space-x-2 w-full justify-start"
        onClick={handleLogout}
      >
        <LogOut className="h-5 w-5" />
        <span>Logout</span>
      </Button>
    </div>
  );
};