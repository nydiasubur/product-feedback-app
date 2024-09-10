import "./styles/App.css";
import "./styles/Navbar.css";
import "./styles/AddFeedbackHeader.css";
import data from "../data.json";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Mainpage from "./components/Mainpage";

function App() {
  const [user, setUser] = useState(data.user);
  const [feedbackList, setFeedbackList] = useState(data.productRequests);
  console.log("feedbackList state", feedbackList);
  return (
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
  );
}

export default App;
