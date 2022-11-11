import React from "react";
import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header";

const App = () => {
  const title = "Blog Post";
  const body = "This is my blogpost";
  const comments = [
    { id: 1, comment: "Comment one" },
    { id: 2, comment: "Comment two" },
    { id: 3, comment: "Comment three" },
    { id: 4, comment: "Comment four" },
  ];

  const showComments = true;
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackItem />
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
