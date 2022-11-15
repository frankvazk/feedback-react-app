import React from "react";
import PropTypes from "prop-types";

const FeedbackStats = ({ feedback }) => {
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

FeedbackStats.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      rating: PropTypes.number,
    })
  ),
};

export default FeedbackStats;
