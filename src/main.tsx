import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./components/providers/theme-provider.tsx";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";
import "./index.css";
import NotificationFirebase from "./components/notification/NotificationFirebase.tsx";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <NotificationFirebase />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
