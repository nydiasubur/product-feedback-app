import React, { useContext, useState } from "react";
import { FeedbackListContext, CurrentUserContext } from "/src/Main";
import { useParams, Link } from "react-router-dom";
import CommentCard from "./CommentCard";
import FeedbackCard from "./FeedbackCard";

export default function FeedbackDetail() {
  // display the feedback defatils of the feedback id passed
  const { id } = useParams();
  const { feedbackList, setFeedbackList } = useContext(FeedbackListContext);
  const copyOfFeedbackList = JSON.parse(JSON.stringify([...feedbackList]));

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

  const [newComment, setNewComment] = useState("");

  const maxChars = 250;

  // Handle change in textarea
  const handleInputChange = (e) => {
    const input = e.target.value;
    if (input.length <= maxChars) {
      setNewComment(input);
    }
  };

  //console.log("newcomment", newComment);

  function handlePostComment(e) {
    e.preventDefault();
    //this part is assuming that the comments object is not empty
    let newID = currentFeedbackObject.comments?.length
      ? currentFeedbackObject.comments.length + 1
      : 1;

    const newCommentObject = {
      id: newID,
      content: newComment,
      user: currentUser,
    };

    if (currentFeedbackObject.comments) {
      const combinationOfComments = [
        ...currentFeedbackObject.comments,
        newCommentObject,
      ];

      copyOfFeedbackList[feedbackArrayIndex].comments = combinationOfComments;
      setFeedbackList(copyOfFeedbackList);
    } else if (!currentFeedbackObject.comments) {
      const currentFeedbackObjectWithCommentAdded = {
        ...currentFeedbackObject,
        comments: [newCommentObject],
      };

      copyOfFeedbackList[feedbackArrayIndex] =
        currentFeedbackObjectWithCommentAdded;
      setFeedbackList(copyOfFeedbackList);
    }

    alert("Comment Added Successfully");

    //section below is for when comment object is empty

    document.getElementById("commentInput").value = "";
  }

  return (
    <div className="container mt-5 feedback-detail">
      <div className="d-flex justify-content-between">
        <Link to="/" className="d-flex semi-bold-grey-font-style">
          {" "}
          <div className="me-3">
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
          <div>Go Back</div>
        </Link>
        <button className="blue-button">
          <Link to={`/edit-feedback/:${id}`}>Edit Feedback</Link>
        </button>
      </div>

      <FeedbackCard feedback={feedback} />
      <div className="mt-5 comment-section p-4">
        <h3 className="mb-5"> {feedback.comments?.length} Comments</h3>
        {/* if comments array length is not empty, display comment */}

        {feedback?.comments?.map((comment) => {
          //console.log("Processing comment:", comment);
          return (
            <CommentCard
              comment={comment}
              key={comment?.id || "no-id"}
              copyOfCurrentFeedbackObject={currentFeedbackObject}
              copyOfFeedbackList={copyOfFeedbackList}
              feedbackArrayIndex={feedbackArrayIndex}
              commentID={comment.id}
            />
          );
        })}
      </div>

      {/*add comment section*/}
      <div class="container mt-4 post-comment-section p-4 mb-5 ">
        <form>
          <div class="form-group">
            <h3 className="mb-3">Your Comment</h3>
            <textarea
              class="form-control mb-4"
              id="commentInput"
              placeholder="Enter your comment"
              onChange={handleInputChange}
            />
          </div>
          <div className="d-flex">
            <div className="text-end">
              <p>{maxChars - newComment.length} characters left </p>
            </div>

            <button
              type="submit"
              className="btn btn-primary d-flex ms-auto pe-3 ps-3 violet-button"
              onClick={handlePostComment}
            >
              Post Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
