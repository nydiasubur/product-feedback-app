import React from "react";
import { useParams } from "react-router-dom";

export default function EditFeedbackPage() {
  const { id } = useParams();
  return <div>EditFeedbackPage {id}</div>;
}
