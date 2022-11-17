import React, { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackItem, setFeedbackItem] = useState({
    item: { text: "", rating: 10 },
    editionMode: false,
  });

  //Load Feedback Data
  const fetchFeedback = async () => {
    const res = await fetch("http://192.168.0.17:4000/feedback/");
    const data = await res.json();
    setIsLoading(false);
    setFeedback(data);
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

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
    isLoading,
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
