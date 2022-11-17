import React, { createContext, useState } from "react";
import FeedbackData from "../data/feedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackItem, setFeedbackItem] = useState({
    item: { text: "", rating: 10 },
    editionMode: false,
  });

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id =
      feedback.reduce((prev, cur) => (+prev > +cur.id ? +prev : +cur.id), 0) +
      1;
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = (newFeedback) => {
    const newList = [...feedback];
    const index = newList.findIndex((item) => item.id === newFeedback.id);
    newList[index] = newFeedback;
    setFeedback(newList);
    setFeedbackItem({ item: { text: "", rating: 10 }, editionMode: false });
  };

  const data = {
    feedback,
    feedbackItem,
    deleteFeedback,
    addFeedback,
    setFeedbackItem,
    editFeedback,
  };
  return (
    <FeedbackContext.Provider value={data}>{children}</FeedbackContext.Provider>
  );
};

export default FeedbackContext;
