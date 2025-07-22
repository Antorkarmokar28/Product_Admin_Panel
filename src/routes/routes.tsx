import App from "@/App";
import Dashboard from "@/pages/Dashboard";
import HomePage from "@/pages/Home";
import LoginPage from "@/pages/Login";
import Products from "@/pages/Products";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);

export default router;
