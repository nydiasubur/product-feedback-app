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
    status: "",
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
    <div>
      <Link to="/"> Go Back</Link>
      <form id="add-feedback-form" className="create-edit-card">
        <h2>Create New Feedback</h2>
        <div class="form-section">
          <label for="feedback-title" class="form-label">
            <h3>Feedback Title</h3>
          </label>
          <p class="description">Add a short, descriptive headline</p>
          <input
            type="text"
            class="form-control"
            id="feedback-title"
            placeholder="Enter feedback title"
            onChange={handleTitleInput}
          />
        </div>

        <div class="form-section">
          <label for="sort-category" class="form-label">
            <h3>Category</h3>
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
            <h3>Feedback Description</h3>
          </label>
          <p class="description">
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <input
            type="text"
            class="form-control"
            id="feedback-description"
            placeholder="Enter feedback description"
            onChange={handleDescriptionInput}
          />
        </div>

        <div class="d-flex justify-content-between mt-4">
          <button type="button" class="btn btn-secondary">
            Cancel
          </button>
          <button
            type="submit"
            class="btn btn-primary"
            onClick={handleAddFeedbackSubmit}
          >
            Add Feedback
          </button>
        </div>
      </form>
    </div>
  );
}
