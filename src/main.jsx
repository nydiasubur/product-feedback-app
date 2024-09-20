import { StrictMode, createContext, useContext, useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import data from "../data.json";
import useLocalStorage from "use-local-storage";

import NotFoundPage from "./components/NotFoundPage.jsx";
import CreateNewFeedbackPage from "./components/CreateNewFeedbackPage.jsx";
import EditFeedbackPage from "./components/EditFeedbackPage.jsx";
import FeedbackDetail from "./components/FeedbackDetail.jsx";
import RoadmapPage from "./components/RoadmapPage.jsx";

export const FeedbackListContext = createContext();
export const CurrentUserContext = createContext();

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
  {
    path: "/feedback/:id",
    element: <FeedbackDetail />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/edit-feedback/:id",
    element: <EditFeedbackPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/roadmap",
    element: <RoadmapPage />,
    errorElement: <NotFoundPage />,
  },
]);

function Main() {
  const [feedbackList, setFeedbackList] = useLocalStorage(
    "feedbackList",
    data.productRequests
  );
  const currentUser = data.currentUser;
  //console.log("main page curr user", currentUser);
  return (
    <StrictMode>
      <CurrentUserContext.Provider value={{ currentUser }}>
        <FeedbackListContext.Provider value={{ feedbackList, setFeedbackList }}>
          <RouterProvider router={router} />
        </FeedbackListContext.Provider>
      </CurrentUserContext.Provider>
    </StrictMode>
  );
}
//render the app
createRoot(document.getElementById("root")).render(<Main />);
