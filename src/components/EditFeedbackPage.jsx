import React, { useContext, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FeedbackListContext } from "/src/Main";

export default function EditFeedbackPage() {
  const { id } = useParams();
  const cleanId = id.replace(":", "");

  const { feedbackList, setFeedbackList } = useContext(FeedbackListContext);
  let copyOfFeedbackList = JSON.parse(JSON.stringify([...feedbackList]));

  console.log("edit feedback copy of feedbacklist", copyOfFeedbackList);
  const selectedFeedback = copyOfFeedbackList?.find(
    (feedback) => feedback.id === parseInt(cleanId)
  );
  const indexOfSelectedFeedback = copyOfFeedbackList?.findIndex(
    (feedback) => feedback.id === parseInt(cleanId)
  );
  const [newTitle, setNewTitle] = useState(selectedFeedback?.title);
  const [newDescription, setNewDescription] = useState(
    selectedFeedback?.description
  );
  //ref for userInput in the right JSON format
  const newFeedbackRef = useRef({ ...selectedFeedback });

  function handleDeleteFeedback() {
    alert("deleting feedback..");
    setTimeout(() => {
      copyOfFeedbackList = copyOfFeedbackList.filter(
        (feedback) => feedback.id !== parseInt(cleanId)
      );
      setFeedbackList(copyOfFeedbackList);
      alert("Feedback deleted successfully");
      window.location.href = "/";
    }, 2000);
  }

  function handleTitleInput(e) {
    // Update the ref's current value
    setNewTitle(e.target.value);
    newFeedbackRef.current = {
      ...newFeedbackRef.current,
      title: newTitle,
    };
  }

  function handleSortCategoryInput(e) {
    newFeedbackRef.current = {
      ...newFeedbackRef.current,
      category: e.target.value,
    };
  }

  function handleFeedbackStatusInput(e) {
    newFeedbackRef.current = {
      ...newFeedbackRef.current,
      status: e.target.value,
    };
  }

  function handleDescriptionInput(e) {
    setNewDescription(e.target.value);
    newFeedbackRef.current = {
      ...newFeedbackRef.current,
      description: newDescription,
    };
  }

  function handleAddFeedbackSubmit(e) {
    e.preventDefault();
    //select the specific feedback object, replace it to new one
    //update the feedbackList
    alert("saving your changes..⏳");
    setTimeout(() => {
      copyOfFeedbackList[indexOfSelectedFeedback] = newFeedbackRef.current;

      console.log(
        "updated feedbackList after replacing with new edit",
        copyOfFeedbackList
      );
      setFeedbackList(copyOfFeedbackList);
      alert("Your changes is updated successfully!");
      window.location.href = "/";
    }, 2000);
  }

  return (
    <div className="feedback-page-form-container container d-flex flex-column align-items-center  pt-5 mt-5">
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
          src="/public/assets/shared/icon-edit-feedback.svg"
          alt="add feedback icon"
          className="form-icon-position"
        />
        <h1 className="pb-4 pt-4">Editing '{selectedFeedback?.title}'</h1>
        <div class="form-section">
          <label for="feedback-title" class="form-label">
            <h3 className="mt-4 mb-0">Feedback Title</h3>
          </label>
          <p class="description">Add a short, descriptive headline</p>
          <input
            value={newTitle}
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
            value={selectedFeedback.category}
            onChange={handleSortCategoryInput}
          >
            <option value="all">All</option>
            <option value="UI">UI</option>
            <option value="UX">UX</option>
            <option value="enhancement">Enhancement</option>
            <option value="bug">Bug</option>
            <option value="feature">Feature</option>
          </select>
        </div>

        <div class="form-section">
          <label for="feedback-title" class="form-label">
            <h3 className="mt-4 mb-0">Feedback Status</h3>
          </label>
          <p class="description">Change feedback state</p>
          <select
            name="feedback-status"
            class="form-select"
            id="feedback-status"
            onChange={handleFeedbackStatusInput}
            value={selectedFeedback?.status}
          >
            <option value="suggestion">Suggestion</option>
            <option value="planned">Planned</option>
            <option value="in-Progress">In-Progress</option>
            <option value="live">Live</option>
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
            value={newDescription}
          ></textarea>
        </div>

        <div class="d-flex mt-4 justify-content-end buttons-container">
          <button
            type="button"
            className="btn red-button delete-button justify-content-start order-3 order-md-1"
            onClick={handleDeleteFeedback}
          >
            Delete
          </button>
          <button
            type="button"
            className="btn dark-blue-button cancel-button order-2 order-md-2"
          >
            <Link to="/">Cancel</Link>
          </button>
          <button
            type="submit"
            className="btn btn-primary violet-button order-1 order-md-3"
            onClick={handleAddFeedbackSubmit}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
