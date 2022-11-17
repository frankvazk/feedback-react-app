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
    const res = await fetch("/feedback/");
    const data = await res.json();
    setIsLoading(false);
    setFeedback(data);
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`feedback/${id}`, {
        method: "DELETE",
      });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = async (newFeedback) => {
    /**
     * No need to generate ID
     * cause backend server generates it
     * automatically
     * newFeedback.id =
      feedback.reduce((prev, cur) => (+prev > +cur.id ? +prev : +cur.id), 0) +
      1;
     */
    const res = await fetch("feedback", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await res.json();
    setFeedback([data, ...feedback]);
  };

  const editFeedback = async (newFeedback) => {
    const newList = [...feedback];
    const index = newList.findIndex((item) => item.id === newFeedback.id);
    newList[index] = newFeedback;
    await fetch(`feedback/${newFeedback.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(newFeedback),
    });

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
