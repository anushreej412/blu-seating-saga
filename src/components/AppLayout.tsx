import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";

export const AppLayout = () => {
  return (
    <div className="min-h-screen flex">
      <AppSidebar />
      <main className="flex-1 p-6 bg-ibm-gray">
        <Outlet />
      </main>
    </div>
  );
};