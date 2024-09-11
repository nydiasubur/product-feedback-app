import "./styles/App.css";
import "./styles/Navbar.css";
import "./styles/AddFeedbackHeader.css";
import React, { useState, createContext, useContext } from "react";
import Mainpage from "./components/Mainpage";
import Navbar from "./components/Navbar";
import { FeedbackListContext } from "./main";

function App() {
  const { feedbackList, setFeedbackList } = useContext(FeedbackListContext);
  return (
    <>
      <div className="container mt-5 d-flex justify-content-center">
        <div className="row">
          <div className="col navbar mx-2 p-0">
            <Navbar />
          </div>
          <div className="col">
            <Mainpage
              feedbackList={feedbackList}
              setFeedbackList={setFeedbackList}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
