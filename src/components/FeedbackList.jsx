import React from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

const FeedbackList = ({ feedback, deleteFeedback }) => {
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem
          deleteFeedback={deleteFeedback}
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
