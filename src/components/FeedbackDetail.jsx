import React, { useContext, useState } from "react";
import { FeedbackListContext, CurrentUserContext } from "../Main";
import { useParams, Link } from "react-router-dom";
import CommentCard from "./CommentCard";

export default function FeedbackDetail() {
  // display the feedback defatils of the feedback id passed
  const { id } = useParams();
  const { feedbackList, setFeedbackList } = useContext(FeedbackListContext);
  const copyOfFeedbackList = [...feedbackList];
  //console.log("copy of feedback list", copyOfFeedbackList);
  const { currentUser } = useContext(CurrentUserContext);
  //console.log("currentUser in feedbackdetail page", currentUser);
  const feedback = feedbackList.find(
    (feedback) => feedback.id === parseInt(id)
  );
  //console.log("feedback does it exist", feedback);
  const currentFeedbackObject = copyOfFeedbackList.find(
    (feedback) => feedback.id === parseInt(id)
  );
  const feedbackArrayIndex = copyOfFeedbackList.findIndex(
    (feedback) => feedback.id === parseInt(id)
  );
  //need to fix new comment functionality
  //1. make the currentUser information a global variable.
  //when adding a new comment, the information should be passed in accordance to the JSON format.
  //decide the ID, add the same info of user, and then just add the content.
  const [newComment, setNewComment] = useState("");

  //console.log("newcomment", newComment);

  function handlePostComment(e) {
    e.preventDefault();

    const newCommentObject = {
      id: currentFeedbackObject.comments.length + 1,
      content: newComment,
      user: currentUser,
    };

    const combinationOfComments = [
      ...currentFeedbackObject.comments,
      newCommentObject,
    ];

    copyOfFeedbackList[feedbackArrayIndex].comments = combinationOfComments;
    setFeedbackList(copyOfFeedbackList);
    alert("Comment Added Successfully");

    document.getElementById("commentInput").value = "";
  }

  return (
    <div className="container mt-5 ">
      <div className="d-flex justify-content-between">
        <Link to="/"> Go Back</Link>
        <button className="blue-button">
          <Link to={`/edit-feedback/:${id}`}>Edit Feedback</Link>
        </button>
      </div>

      <div className="row feedback-card mt-3 mb-3 p-4">
        <div className="col-1 mx-2 d-flex upvote-button-section flex-column align-items-center">
          <div className="upvote-button">
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
        </div>
        <div className="col-9 ">
          <h3 className="semi-bold-font-style">
            {feedback.title} {/*feedback title*/}
          </h3>
          <p>{feedback.description}</p>
          <div>
            <div className="category-button">{feedback.category}</div>
          </div>
        </div>
        <div className="col-2 d-flex align-items-center">
          <span className="mx-3">
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

      <div className="mt-5 comment-section">
        <h3 className="mb-5"> {feedback.comments?.length} Comments</h3>
        {/* if comments array length is not empty, display comment */}

        {feedback?.comments?.map((comment) => {
          //console.log("Processing comment:", comment);
          return <CommentCard comment={comment} key={comment?.id || "no-id"} />;
        })}

        <div className="comment-card"></div>
      </div>

      {/*add comment section*/}
      <div class="container mt-4">
        <form>
          <div class="form-group">
            <label for="commentInput">Your Comment</label>
            <input
              type="text"
              class="form-control"
              id="commentInput"
              placeholder="Enter your comment"
              onChange={(e) => setNewComment(e.target.value)}
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            onClick={handlePostComment}
          >
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
}
