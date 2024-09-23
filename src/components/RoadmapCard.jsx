import React from "react";

export default function RoadmapCard({ headerStatus, feedback, cardColor }) {
  return (
    <>
      <div class={`card roadmap-card ${cardColor} mb-3`}>
        <div class="card-body">
          <ul className="">
            <li>
              <p>{headerStatus[0]}</p>
            </li>
          </ul>
          <h3>{feedback?.title}</h3>

          <p class="card-text">
            It would be great to see more detailed break down!
          </p>
          <div className="category-button mb-3">{feedback?.category}</div>
          <div>
            <div className="d-flex justify-content-between">
              <div className="upvote-button-roadmap  d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                  className="me-2"
                >
                  <path
                    d="M1.33447 6L5.33447 2L9.33447 6"
                    stroke="#4661E6"
                    strokeWidth="2"
                  />
                </svg>
                <div className="upvote-count">{feedback?.upvotes}</div>
              </div>
              <div className="comments-number-section d-flex align-items-center">
                <svg
                  width="18"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  className="me-2"
                >
                  <path
                    d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
                    fill="#CDD2EE"
                    fill-rule="nonzero"
                  />
                </svg>
                <span className="semi-bold-font-style">
                  {feedback?.comments ? feedback?.comments.length : 0}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
