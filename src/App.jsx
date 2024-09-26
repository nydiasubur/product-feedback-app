import "./styles/App.css";
import "./styles/Navbar.css";
import "./styles/AddFeedbackHeader.css";
import "./styles/Comments.css";
import "./styles/Forms.css";
import "./styles/RoadmapPage.css";
import React from "react";
import Mainpage from "./components/Mainpage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="container mt-5 d-flex justify-content-center">
        <div className="row">
          <div className="col navbar mx-2 p-0 align-items-start">
            <Navbar />
          </div>
          <div className="col">
            <Mainpage />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
