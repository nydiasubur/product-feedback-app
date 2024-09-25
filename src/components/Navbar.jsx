import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FeedbackListContext } from "../Main";

export default function Navbar() {
  let planned = 0;
  let inProgress = 0;
  let live = 0;
  const { feedbackList, setFeedbackList } = useContext(FeedbackListContext);

  /*feedbackList.map((feedback) => {
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
  });*/

  return (
    <>
      <div className="header mb-3">
        <h2>Frontend Mentor</h2>
        <div>Feedback Board</div>
      </div>
      <div className="tags regular-font-style-2 d-flex justify-content-between flex-wrap mb-3">
        <div className=" category-button mx-2">All</div>
        <div className=" category-button mx-2">UI</div>
        <div className=" category-button mx-2">UX</div>
        <div className=" category-button mx-2">Enhancement</div>
        <div className=" category-button mx-2">Bug</div>
        <div className=" category-button mx-2">Feature</div>
      </div>
      <div className="roadmap">
        <div className="row">
          <div className="col">
            <div> Roadmap</div>
            <ul>
              <li>Planned</li>
              <li>In-Progress</li>
              <li>Live</li>
            </ul>
          </div>
          <div className="col">
            <Link to="/roadmap">View</Link>
            <ul>
              <li>{planned}</li>
              <li>{inProgress}</li>
              <li>{live}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
