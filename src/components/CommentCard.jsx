import React from "react";

export default function CommentCard({ comment }) {
  console.log("card comment", comment);
  console.log("card comment image", comment.user.image);

  return (
    <div className="comment-card row">
      <div className="col-1">
        <img
          src={comment.user.image}
          alt="profile Picture"
          className="profile-picture"
        />
      </div>
      <div className="col-11">
        <div className="d-flex justify-content-between mb-0 pb-0">
          <h4 className="mb-0">{comment.user.name}</h4>
          <div>Reply</div>
        </div>
        <p>@{comment.user.username}</p>
        <p>{comment.content}</p>
      </div>
      {/* if replies array length is not empty, display replies */}
      {comment.replies?.length > 0 &&
        comment.replies.map((reply) => {
          return (
            <div
              className="comment-card row ms-5 d-flex flex-shrink-1"
              key={reply.id}
            >
              <div className="col-1">
                <img
                  src={reply.user.image}
                  alt="profile Picture"
                  className="profile-picture"
                />
              </div>
              <div className="col-11">
                <div className="d-flex justify-content-between mb-0 pb-0">
                  <h4>{reply.user.name}</h4>
                  <div>Reply</div>
                </div>
                <p>@{reply.user.username}</p>
                <p>
                  <span className="replying-to">@{reply.replyingTo} </span>
                  {reply.content}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
