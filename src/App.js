import React from "react";
import Header from "./components/Header";
import { useState } from "react";
import FeedbackData from "./data/feedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const title = "Blog Post";
  const body = "This is my blogpost";
  const comments = [
    { id: 1, comment: "Comment one" },
    { id: 2, comment: "Comment two" },
    { id: 3, comment: "Comment three" },
    { id: 4, comment: "Comment four" },
  ];

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const showComments = true;
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList deleteFeedback={deleteFeedback} feedback={feedback} />
        <h1>{title.toUpperCase()}</h1>
        <h2>{body}</h2>
        <h3>Comments: {showComments ? comments.length : 0}</h3>
        {showComments && (
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>{comment.comment}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default App;
