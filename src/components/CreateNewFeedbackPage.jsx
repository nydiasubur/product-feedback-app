import React, { useContext } from "react";

import { FeedbackListContext } from "../Main";

export default function CreateNewFeedbackPage() {
  const { feedbackList, setFeedbackList } = useContext(FeedbackListContext);
  console.log("feedback from createnewfeedbackpage", feedbackList);
  return <div>CreateNewFeedbackPage form here</div>;
}
