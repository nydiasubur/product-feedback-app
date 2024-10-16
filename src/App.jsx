import "./styles/App.css";
import "./styles/Navbar.css";
import "./styles/AddFeedbackHeader.css";
import "./styles/Comments.css";
import "./styles/Forms.css";
import "./styles/RoadmapPage.css";
import "./styles/FeedbackDetail.css";
import React from "react";
import Mainpage from "./components/Mainpage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="app justify-content-center  d-flex">
        <div className="row align-items-start">
          <div className="col-12 col-lg-auto navbar-column-at-app-page">
            <Navbar />
          </div>
          <div className="col-12 col-lg-auto container">
            <Mainpage />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
