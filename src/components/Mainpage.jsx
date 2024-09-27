import React, { useContext } from "react";
import FeedbackCards from "./FeedbackCards.jsx";
import AddFeedbackHeader from "./AddFeedbackHeader.jsx";
import { Link } from "react-router-dom";
import { FeedbackListContext } from "../Main.jsx";

export default function Mainpage() {
  const { feedbackList, setFeedbackList } = useContext(FeedbackListContext);
  return (
    <>
      <section className="main">
        {/*<AddFeedbackHeader>*/}
        <AddFeedbackHeader />

        {/*</AddFeedbackHeader>*/}

        <FeedbackCards
          feedbackList={feedbackList}
          setFeedbackList={setFeedbackList}
        />
      </section>
    </>
  );
  function handleSortByUpvotesAndComments(e) {
    e.preventDefault();
    switch (e.target.value) {
      case "most-upvotes":
        setFeedbackList(feedbackList.toSorted((a, b) => b.upvotes - a.upvotes));

        break;
      case "least-upvotes":
        setFeedbackList(feedbackList.toSorted((a, b) => a.upvotes - b.upvotes));

        break;
      case "most-comments":
        setFeedbackList(
          feedbackList.toSorted(
            (a, b) => (b.comments?.length || 0) - (a.comments?.length || 0)
          )
        );
        break;
      case "least-comments":
        setFeedbackList(
          feedbackList.toSorted((a, b) => {
            const aCommentsLength = a.comments ? a.comments.length : 0;
            const bCommentsLength = b.comments ? b.comments.length : 0;
            return aCommentsLength - bCommentsLength;
          })
        );
        break;
    }
  }

  function handleAddFeedback() {
    navigate("/create-new-feedback");
  }
}
