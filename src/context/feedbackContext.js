import React, { createContext, useState } from "react";
import FeedbackData from "../data/feedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [itemId, setItemId] = useState(null);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const resetForm = () => {
    setItemId(null);
    setText("");
    setRating(10);
  };

  const addFeedback = (newFeedback) => {
    let newList = [...feedback];
    if (itemId) {
      const todoIndex = newList.findIndex((item) => item.id === itemId);
      newList[todoIndex].text = newFeedback.text;
      newList[todoIndex].rating = newFeedback.rating;
    } else {
      newFeedback.id =
        feedback.reduce((prev, cur) => (+prev > +cur.id ? +prev : +cur.id), 0) +
        1;
      newList = [newFeedback, ...feedback];
    }

    setFeedback(newList);
    resetForm();
  };

  const data = {
    feedback,
    text,
    rating,
    itemId,
    setText,
    setRating,
    deleteFeedback,
    addFeedback,
    setItemId,
  };
  return (
    <FeedbackContext.Provider value={data}>{children}</FeedbackContext.Provider>
  );
};

export default FeedbackContext;
