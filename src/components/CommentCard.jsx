import React, { useState, useContext } from "react";
import { FeedbackListContext, CurrentUserContext } from "../Main";
import ReplyCard from "./ReplyCard";

export default function CommentCard({
  comment,
  copyOfCurrentFeedbackObject,
  copyOfFeedbackList,
  feedbackArrayIndex,
  commentID,
}) {
  //copy the comment object
  //after i update the comment object to the copied feedback object
  //set the new feedback to the state
  const { currentUser } = useContext(CurrentUserContext);
  const { feedbackList, setFeedbackList } = useContext(FeedbackListContext);
  const [isVisible, setIsVisible] = useState(false);
  const [replyInput, setReplyInput] = useState("");
  let copyOfCurrentCommentObject = JSON.parse(JSON.stringify(comment));

  const commentArrayIndex = copyOfCurrentFeedbackObject.comments.findIndex(
    (comment) => comment.id === commentID
  );

  let formattedReplyOBject = null;

  function handleDisplayReply() {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }

  function handleReplyComment(e) {
    setReplyInput(e.target.value);
  }

  function handlePostReply(e, username) {
    e.preventDefault();
    //1. if there's no reply object, create key and object
    formattedReplyOBject = [
      {
        content: replyInput,
        replyingTo: username,
        user: currentUser,
      },
    ];
    if (!copyOfCurrentCommentObject.replies) {
      copyOfCurrentCommentObject.replies = [];
    }
    copyOfCurrentCommentObject.replies.push(formattedReplyOBject[0]);

    copyOfFeedbackList[feedbackArrayIndex].comments[commentArrayIndex] = {
      ...copyOfCurrentCommentObject, // Spread the existing properties
    };

    setFeedbackList(copyOfFeedbackList);
    setIsVisible(false);
  }

  return (
    <div className="comment-card row mb-3">
      <div className="col-md-1 col-2">
        <img
          src={comment.user.image}
          alt="profile Picture"
          className="profile-picture"
        />
      </div>
      <div className="col-md-11 col-10">
        <div className="d-flex justify-content-between mb-0 pb-0">
          <h4 className="mb-0">{comment.user.name}</h4>
          <div onClick={handleDisplayReply} id="reply-button">
            Reply
          </div>
        </div>
        <p id="username">@{comment.user.username}</p>
        <p>{comment.content}</p>
        {/*add comment section*/}
        <div
          className="container reply-comment-section"
          style={{ display: isVisible ? "block" : "none" }}
        >
          <form>
            <div class="form-group">
              <textarea
                class="form-control mb-4"
                id="commentInput"
                placeholder="Enter your reply"
                onChange={handleReplyComment}
              />
            </div>
            <div className="d-flex">
              <button
                type="submit"
                className="btn btn-primary d-flex ms-auto pe-3 ps-3 violet-button"
                onClick={(e) => handlePostReply(e, comment.user.username)}
              >
                Post Reply
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* if replies array length is not empty, display replies */}
      {comment.replies?.length > 0 &&
        comment.replies.map((reply) => {
          return (
            <ReplyCard
              reply={reply}
              comment={comment}
              key={reply.id}
              handlePostReply={handlePostReply}
              handleReplyComment={handleReplyComment}
            />
          );
        })}
    </div>
  );
}
