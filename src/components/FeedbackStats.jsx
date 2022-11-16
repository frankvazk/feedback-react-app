import React, { useContext } from "react";
import FeedbackContext from "../context/feedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  const avg = (
    feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length
  )
    .toFixed(2)
    .replace(/[.,]00$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(avg) ? 0 : avg}</h4>
    </div>
  );
};

export default FeedbackStats;
