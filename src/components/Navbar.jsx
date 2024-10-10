import React, { useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FeedbackListContext } from "../Main";

export default function Navbar() {
  let planned = 0;
  let inProgress = 0;
  let live = 0;
  const { feedbackList, setFeedbackList } = useContext(FeedbackListContext);
  const feedbackLength = feedbackList.length;
  const originalFeedbackListRef = useRef([]);

  useEffect(() => {
    if (feedbackList.length > 0) {
      originalFeedbackListRef.current = JSON.parse(
        JSON.stringify(feedbackList)
      );
    }
  }, []); // Empty dependency array ensures this runs only once
  console.log("originalfeedbacklist", originalFeedbackListRef);

  feedbackList.map((feedback) => {
    switch (feedback.status) {
      case "planned":
        planned++;
        break;
      case "in-progress":
        inProgress++;
        break;
      case "live":
        live++;
        break;
    }
  });

  function handleCategoryClick(e) {
    const categorySelected = e.target.innerText.toLowerCase().trim();
    console.log("category selected", categorySelected);

    if (categorySelected === "all") {
      setFeedbackList(originalFeedbackListRef.current); //return the original feedbacklist.
      return;
    }
    const filteredFeedbackList = originalFeedbackListRef.current.filter(
      (feedback) => feedback.category === categorySelected
    );

    setFeedbackList(filteredFeedbackList);
  }

  function showMobileNavbar() {
    const navbarMobileSubContainer = document.querySelector(
      ".navbar-mobile-sub-container"
    );
    const isVisible = navbarMobileSubContainer.getAttribute("data-visible");
    const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
    const hamburgerToggleButton = mobileNavToggle.getAttribute(
      "hamburgerToggleButton"
    );
    if (isVisible.trim() === "false") {
      navbarMobileSubContainer.setAttribute("data-visible", "true");
      mobileNavToggle.setAttribute("hamburgerToggleButton", "false");
    } else {
      navbarMobileSubContainer.setAttribute("data-visible", "false");
      mobileNavToggle.setAttribute("hamburgerToggleButton", "true");
    }
  }

  return (
    <div className="navbar">
      <button
        className="mobile-nav-toggle"
        onClick={showMobileNavbar}
        hamburgerToggleButton="true"
      ></button>
      <div className="header ps-3 ">
        <h2>Frontend Mentor</h2>
        <div>Feedback Board</div>
      </div>
      <div className="navbar-mobile-sub-container" data-visible="false">
        <div className="tags regular-font-style-2 d-flex justify-content-between flex-wrap mb-3">
          <div className=" category-button m-2" onClick={handleCategoryClick}>
            All
          </div>
          <div className=" category-button m-2" onClick={handleCategoryClick}>
            UI
          </div>
          <div className=" category-button m-2" onClick={handleCategoryClick}>
            UX
          </div>
          <div className=" category-button m-2" onClick={handleCategoryClick}>
            Enhancement
          </div>
          <div className=" category-button m-2" onClick={handleCategoryClick}>
            Bug
          </div>
          <div className=" category-button m-2" onClick={handleCategoryClick}>
            Feature
          </div>
        </div>
        <div className="roadmap">
          <div className="d-flex justify-content-between mb-3">
            <h3> Roadmap</h3>
            <Link to="/roadmap" id="view">
              View
            </Link>
          </div>
          <ul>
            <li className="orange-bulletpoint">
              <div className="d-flex justify-content-between ">
                <p>Planned</p>
                <h3>{planned}</h3>
              </div>
            </li>
            <li className="purple-bulletpoint">
              <div className="d-flex justify-content-between ">
                <p>In-Progress</p>
                <h3>{inProgress}</h3>
              </div>
            </li>
            <li className="blue-bulletpoint">
              <div className="d-flex justify-content-between">
                <p>Live</p>
                <h3>{live}</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
