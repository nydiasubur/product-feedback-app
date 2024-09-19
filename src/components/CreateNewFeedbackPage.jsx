import React, { useContext, useRef, useState } from "react";

import { FeedbackListContext } from "../Main";
import { Link } from "react-router-dom";

export default function CreateNewFeedbackPage() {
  const { feedbackList, setFeedbackList } = useContext(FeedbackListContext);

  // Create a ref for userInput
  const userInputRef = useRef({
    id: 100,
    title: "",
    category: "",
    upvotes: 0,
    status: "suggestion",
    description: "",
  });

  function handleTitleInput(e) {
    // Update the ref's current value
    userInputRef.current = { ...userInputRef.current, title: e.target.value };
  }

  function handleSortCategoryInput(e) {
    // Update the ref's current value
    userInputRef.current = {
      ...userInputRef.current,
      category: e.target.value,
    };
  }

  function handleDescriptionInput(e) {
    // Update the ref's current value
    userInputRef.current = {
      ...userInputRef.current,
      description: e.target.value,
    };
  }

  function handleIDupdate() {
    const maxID = feedbackList.reduce((accumulator, currentFeedback) => {
      return accumulator.id > currentFeedback.id
        ? accumulator.id
        : currentFeedback.id;
    });
    userInputRef.current = { ...userInputRef.current, id: maxID + 1 };
  }
  function handleAddFeedbackSubmit(e) {
    //set the state of

    e.preventDefault();
    handleIDupdate();
    setFeedbackList([...feedbackList, userInputRef.current]);
    alert("Feedback added successfully");
    // Reset the form

    document.getElementById("feedback-description").value = "";
    document.getElementById("feedback-title").value = "";
  }

  return (
    <div className="container d-flex flex-column align-items-center  pt-5 mt-5">
      <form
        id="add-feedback-form"
        className="create-edit-card p-5 mt-5 form-header-color position-relative"
      >
        <Link
          to="/"
          className="d-flex align-self-start go-back-position semi-bold-grey-font-style"
        >
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
        <img
          src="/public/assets/shared/icon-new-feedback.svg"
          alt="add feedback icon"
          className="form-icon-position"
        />
        <h1 className="pb-4 pt-4">Create New Feedback</h1>
        <div class="form-section">
          <label for="feedback-title" class="form-label">
            <h3 className="mt-4 mb-0">Feedback Title</h3>
          </label>
          <p class="description">Add a short, descriptive headline</p>
          <input
            type="text"
            class="form-control"
            id="feedback-title"
            onChange={handleTitleInput}
          />
        </div>

        <div class="form-section">
          <label for="sort-category" class="form-label">
            <h3 className="mt-4 mb-0">Category</h3>
          </label>
          <p class="description">Choose a category for your feedback</p>
          <select
            name="sort-category"
            class="form-select"
            id="sort-category"
            onChange={handleSortCategoryInput}
          >
            <option value="most-upvotes">All</option>
            <option value="least-upvotes">UI</option>
            <option value="most-comments">UX</option>
            <option value="least-comments">Enhancement</option>
            <option value="most-comments">Bug</option>
            <option value="least-comments">Feature</option>
          </select>
        </div>

        <div class="form-section">
          <label for="feedback-description" class="form-label">
            <h3 className="mt-4 mb-0">Feedback Detail</h3>
          </label>
          <p class="description">
            Include any specific comments on what should be improved, added,
            etc.
          </p>

          <textarea
            onChange={handleDescriptionInput}
            class="form-control"
            id="feedback-description"
          ></textarea>
        </div>

        <div class="d-flex mt-4 justify-content-end">
          <button type="button" className="btn dark-blue-button mx-4">
            <Link to="/">Cancel</Link>
          </button>
          <button
            type="submit"
            className="btn btn-primary violet-button"
            onClick={handleAddFeedbackSubmit}
          >
            Add Feedback
          </button>
        </div>
      </form>
    </div>
  );
}
