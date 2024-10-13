import React from "react";
import { Link } from "react-router-dom";

import UpvoteButton from "./UpvoteButton";

export default function FeedbackCard({ feedback }) {
  //console.log("feedbackListCopy cards", feedbackList);

  return (
    <>
      {" "}
      <div className="row feedback-card mt-3 mb-3 p-4 " key={feedback.id}>
        <div className="col-lg-1 col-md-2 col-4 order-md-1 order-2 mx-2 upvote-button-section  align-items-center">
          <UpvoteButton feedback={feedback} />
        </div>
        <div className="col-lg-9 col-md-8 col-4 order-md-2 order-1 feedback-description">
          <Link to={`/feedback/${feedback.id}`}>
            <h3 className="semi-bold-font-style">
              {feedback.title} {/*feedback title*/}
            </h3>
            <p>{feedback.description}</p>
            <div>
              <div className="category-button">{feedback.category}</div>
            </div>
          </Link>
        </div>

        <div className="col-lg-2 col-md-2 col-4  d-flex align-items-center order-3 order-md-2 comment-button-section">
          <span className=" pe-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
            >
              <path
                d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z"
                fill="#CDD2EE"
              />
            </svg>
          </span>
          <span className="semi-bold-font-style">
            {feedback.comments ? feedback.comments.length : 0}
          </span>
        </div>
      </div>
    </>
  );
}
