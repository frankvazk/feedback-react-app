import React, { createContext, useState } from "react";
import FeedbackData from "../data/feedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id =
      feedback.reduce((prev, cur) => (+prev > +cur.id ? +prev : +cur.id), 0) +
      1;
    setFeedback((prev) => [newFeedback, ...prev]);
  };

  const data = {
    feedback,
    deleteFeedback,
    addFeedback,
  };
  return (
    <FeedbackContext.Provider value={data}>{children}</FeedbackContext.Provider>
  );
};

export default FeedbackContext;
