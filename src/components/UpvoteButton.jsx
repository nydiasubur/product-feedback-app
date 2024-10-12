import React, { useState, useContext } from "react";
import { FeedbackListContext } from "../Main";

export default function UpvoteButton({ feedback }) {
  const { feedbackList, setFeedbackList } = useContext(FeedbackListContext);
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const feedbackListCopy = JSON.parse(JSON.stringify([...feedbackList]));
  function handleUpvote(feedback) {
    const feedbackCopy = JSON.parse(JSON.stringify(feedback));

    const position = feedbackList.findIndex(
      (currentFeedback) => currentFeedback.id === feedback.id
    ); //returns index
    if (hasUpvoted) {
      feedbackCopy.upvotes--;
      feedbackListCopy[position] = feedbackCopy;
      setFeedbackList(feedbackListCopy);
      setHasUpvoted(false);
    } else if (!hasUpvoted) {
      feedbackCopy.upvotes++;
      feedbackListCopy[position] = feedbackCopy;
      setFeedbackList(feedbackListCopy);
      setHasUpvoted(true);
    }
  }
  return (
    <>
      <div
        className="upvote-button "
        onClick={(e) => {
          handleUpvote(feedback);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="7"
          viewBox="0 0 11 7"
          fill="none"
        >
          <path
            d="M1.33447 6L5.33447 2L9.33447 6"
            stroke="#4661E6"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="upvote-count">{feedback.upvotes}</div>
    </>
  );
}
