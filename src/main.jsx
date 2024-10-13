import { StrictMode, createContext, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
  const originalFeedbackListRef = useRef([]);
  const [feedbackList, setFeedbackList] = useLocalStorage(
    "feedbackList",
    data.productRequests
  );
  const currentUser = data.currentUser;

  //this is just to add hasUpvoted property to the feedback objcts in feedbackList
  //needed for upvote button functionality to work properly
  useEffect(() => {
    const updatedFeedbackList = feedbackList.map((feedback) => {
      if (feedback.hasUpvoted === undefined) {
        return { ...feedback, hasUpvoted: false }; // Create a new object with hasUpvoted property
      }
      return feedback; // If hasUpvoted already exists, return as is
    });
    // Only update if there's a change
    if (JSON.stringify(updatedFeedbackList) !== JSON.stringify(feedbackList)) {
      setFeedbackList(updatedFeedbackList);
    }
  }, [feedbackList, setFeedbackList]); // Use feedbackList to trigger effect when it changes

  //this is to store the original feedbackList in a ref to be used later. for filtering.
  useEffect(() => {
    if (feedbackList.length > 0) {
      originalFeedbackListRef.current = JSON.parse(
        JSON.stringify(feedbackList)
      );
    }
  }, [originalFeedbackListRef]); // Empty dependency array ensures this runs only once

  return (
    <StrictMode>
      <CurrentUserContext.Provider value={{ currentUser }}>
        <FeedbackListContext.Provider
          value={{ feedbackList, setFeedbackList, originalFeedbackListRef }}
        >
          <RouterProvider router={router} />
        </FeedbackListContext.Provider>
      </CurrentUserContext.Provider>
    </StrictMode>
  );
}
//render the app
createRoot(document.getElementById("root")).render(<Main />);
