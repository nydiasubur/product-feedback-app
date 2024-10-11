import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FeedbackListContext } from "../Main";
import FeedbackCard from "./FeedbackCard";

export default function FeedbackCards() {
  const { feedbackList, setFeedbackList } = useContext(FeedbackListContext);

  // if feedback is clicked, route me to feedbackdetail page and pass on the feedback id
  if (!feedbackList) {
    return (
      <div className="container">
        <div className="d-flex direction-col flex-column align-items-center mt-5">
          <img
            src="/public/assets/suggestions/illustration-empty.svg"
            alt="empty page icon"
            className=" mb-5"
          ></img>
          <h3 className="mb-3"> There is no feedback yet.</h3>
          <p className="mb-3 text-center">
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </p>
          <button className="violet-button">
            <Link to="/create-new-feedback">+ Add Feedback</Link>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <>
        {feedbackList?.map((feedback) => (
          <FeedbackCard feedback={feedback} />
        ))}
      </>
    );
  }
}
