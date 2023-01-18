import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";

// Config baseURL for axios (page URL)
axios.defaults.baseURL = "http://localhost:4000";

// Create a query client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Reac - Query */}
    <QueryClientProvider client={queryClient}>
      {/* React-router-dom */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
