import React, { useState } from "react";

export default function ReplyCard({
  reply,
  comment,
  handlePostReply,
  handleReplyComment,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [replyInput, setReplyInput] = useState("");

  function handleDisplayReply() {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }

  return (
    <>
      <div
        className="comment-card reply-card row ms-5 d-flex flex-shrink-1"
        key={reply.id}
      >
        <div className="col-md-1 col-2">
          <img
            src={reply.user.image}
            alt="profile Picture"
            className="profile-picture"
          />
        </div>
        <div className="col-md-11 col-10">
          <div className="d-flex justify-content-between mb-0 pb-0">
            <h4>{reply.user.name}</h4>
            <div onClick={handleDisplayReply} id="reply-button">
              Reply
            </div>
          </div>

          <p id="username">@{reply.user.username}</p>
          <p>
            <span className="replying-to">@{reply.replyingTo} </span>
            {reply.content}
          </p>
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
                  onClick={(e) => handlePostReply(e, reply.user.username)}
                >
                  Post Reply
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
