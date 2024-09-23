import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FeedbackListContext } from "../Main";
import RoadmapCard from "./RoadmapCard";

export default function RoadmapPage() {
  const { feedbackList, setFeedbackList } = useContext(FeedbackListContext);
  let feedbackObjectsPlanned = [];
  let feedbackObjectsInProgress = [];
  let feedbackObjectsLive = [];
  //loop through the feedback list ONCE.
  feedbackList.map((feedback) => {
    if (feedback.status === "planned") {
      feedbackObjectsPlanned = [...feedbackObjectsPlanned, feedback];
    } else if (feedback.status === "in-progress") {
      feedbackObjectsInProgress = [...feedbackObjectsInProgress, feedback];
    } else if (feedback.status === "live") {
      feedbackObjectsLive = [...feedbackObjectsLive, feedback];
    }
  });

  return (
    <div className="container mt-5">
      {/* Add the top nav bar */}
      <div className="row add-feedback-header ">
        <div className="col-9 d-flex align-items-center">
          <Link to="/">
            <div className="d-flex align-items-center">
              <div>
                <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 9L2 5l4-4"
                    stroke="#4661E6"
                    stroke-width="2"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="ms-2">Go Back</div>
            </div>
          </Link>
          <div className="mx-5 fw-bolder">Roadmap</div>
        </div>
        <div className="col-3  d-flex justify-content-end">
          <button className="violet-button ">
            <Link to="/create-new-feedback">+ Add Feedback</Link>
          </button>
        </div>
      </div>
      {/* end of top nav bar */}

      <div className="road-map-content mt-5">
        <div className="row">
          <div className="col planned-section">
            <h3> Planned ({feedbackObjectsPlanned.length})</h3>
            <p> Ideas prioritized for research</p>
            {feedbackObjectsPlanned?.map((feedback) => {
              return (
                <RoadmapCard
                  feedback={feedback}
                  key={feedback.id}
                  headerStatus={["Planned"]}
                  cardColor="orange-card"
                />
              );
            })}
          </div>
          <div className="col planned-section ">
            <h3> In-Progress ({feedbackObjectsInProgress.length})</h3>
            <p> Currently being developed</p>
            {feedbackObjectsInProgress?.map((feedback) => {
              return (
                <RoadmapCard
                  feedback={feedback}
                  headerStatus={["In-Progress"]}
                  key={feedback.id}
                  cardColor="purple-card"
                />
              );
            })}
          </div>
          {/* end of planned section column */}
          <div className="col planned-section">
            <h3> Live ({feedbackObjectsLive.length})</h3>
            <p> Currently being developed</p>
            {feedbackObjectsLive?.map((feedback) => {
              return (
                <RoadmapCard
                  feedback={feedback}
                  key={feedback.id}
                  cardColor="light-blue-card"
                  headerStatus={["Live"]}
                />
              );
            })}
          </div>
          {/* end of planned section column */}
        </div>
      </div>
    </div>
  );
}
