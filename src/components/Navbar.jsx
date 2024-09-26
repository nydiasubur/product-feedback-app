import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FeedbackListContext } from "../Main";

export default function Navbar() {
  let planned = 0;
  let inProgress = 0;
  let live = 0;
  const { feedbackList, setFeedbackList } = useContext(FeedbackListContext);

  feedbackList.map((feedback) => {
    switch (feedback.status) {
      case "planned":
        planned++;
        break;
      case "in-progress":
        inProgress++;
        break;
      case "live":
        live++;
        break;
    }
  });

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="header mb-3">
        <h2>Frontend Mentor</h2>
        <div>Feedback Board</div>
      </div>
      <div className="tags regular-font-style-2 d-flex justify-content-between flex-wrap mb-3">
        <div className=" category-button m-2">All</div>
        <div className=" category-button m-2">UI</div>
        <div className=" category-button m-2">UX</div>
        <div className=" category-button m-2">Enhancement</div>
        <div className=" category-button m-2">Bug</div>
        <div className=" category-button m-2">Feature</div>
      </div>
      <div className="roadmap">
        <div className="d-flex justify-content-between mb-3">
          <h3> Roadmap</h3>
          <Link to="/roadmap" id="view">
            View
          </Link>
        </div>
        <ul>
          <li className="orange-bulletpoint">
            <div className="d-flex justify-content-between ">
              <p>Planned</p>
              <h3>{planned}</h3>
            </div>
          </li>
          <li className="purple-bulletpoint">
            <div className="d-flex justify-content-between ">
              <p>In-Progress</p>
              <h3>{inProgress}</h3>
            </div>
          </li>
          <li className="blue-bulletpoint">
            <div className="d-flex justify-content-between">
              <p>Live</p>
              <h3>{live}</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
