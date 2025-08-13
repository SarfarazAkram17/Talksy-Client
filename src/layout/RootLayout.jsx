import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useAuthStore } from "../store/useAuthStore";
import { Loader } from "lucide-react";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import { useThemeStore } from "../store/useThemeStore";

const RootLayout = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin"></Loader>
      </div>
    );
  }

  return (
    <div>
      <Toaster position="top-right"></Toaster>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayout;
