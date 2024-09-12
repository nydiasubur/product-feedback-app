import { StrictMode, createContext, useContext, useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";
import CreateNewFeedbackPage from "./components/CreateNewFeedbackPage.jsx";
import data from "../data.json";
import useLocalStorage from "use-local-storage";

export const FeedbackListContext = createContext();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/create-new-feedback",
    element: <CreateNewFeedbackPage />,
    errorElement: <NotFoundPage />,
  },
]);

function Main() {
  const [feedbackList, setFeedbackList] = useLocalStorage(
    "feedbackList",
    data.productRequests
  );
  return (
    <StrictMode>
      <FeedbackListContext.Provider value={{ feedbackList, setFeedbackList }}>
        <RouterProvider router={router} />
      </FeedbackListContext.Provider>
    </StrictMode>
  );
}
//render the app
createRoot(document.getElementById("root")).render(<Main />);
