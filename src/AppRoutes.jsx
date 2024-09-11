import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "create-new-feedback",
    element: <CreateNewFeedbackPage />,
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
