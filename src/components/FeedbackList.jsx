import React from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const FeedbackList = ({ feedback, deleteFeedback }) => {
  //With Animation List
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
          >
            <FeedbackItem
              deleteFeedback={deleteFeedback}
              key={item.id}
              item={item}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  //Without Animation List
  /* 
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
  */
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
