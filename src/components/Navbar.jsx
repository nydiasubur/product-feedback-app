import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="">
        <div className="header mb-3">
          <h2>Frontend Mentor</h2>
          <div>Feedback Board</div>
        </div>
        <div className="tags regular-font-style-2 d-flex justify-content-between flex-wrap mb-3">
          <div className=" category-button mx-2">All</div>
          <div className=" category-button mx-2">UI</div>
          <div className=" category-button mx-2">UX</div>
          <div className=" category-button mx-2">Enhancement</div>
          <div className=" category-button mx-2">Bug</div>
          <div className=" category-button mx-2">Feature</div>
        </div>
        <div className="roadmap">
          <div className="row">
            <div className="col">
              <div> Roadmap</div>
              <ul>
                <li>Planned</li>
                <li>In-Progress</li>
                <li>Live</li>
              </ul>
            </div>
            <div className="col">
              View
              <ul>
                <li>2</li>
                <li>3</li>
                <li>1</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* closing tag of nav bar */}
      {/* closing tag of nav bar */}
    </>
  );
}
