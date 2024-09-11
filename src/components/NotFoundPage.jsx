import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="container">
      <div className="d-flex align-items-center">
        404 Not Found.. are you lost..?🏚
      </div>
      <Link to="/"> Click here to come back home 🏡</Link>
    </div>
  );
}
