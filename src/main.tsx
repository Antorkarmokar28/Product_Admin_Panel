import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { ThemeProvider } from "./components/modules/theme-provider";
import { SidebarProvider } from "./components/ui/sidebar";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode>
);
