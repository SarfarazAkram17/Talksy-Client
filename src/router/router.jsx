import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/HomePage/HomePage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/signup",
        Component: SignUpPage,
      },
      {
        path: "/login",
        Component: LoginPage,
      },
      {
        path: "/settings",
        Component: SettingsPage,
      },
      {
        path: "/profile",
        Component: ProfilePage,
      },
    ],
  },
]);
