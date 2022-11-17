import React, { useContext, useEffect, useState } from "react";
import FeedbackContext from "../context/feedbackContext";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

const FeedbackForm = () => {
  const { addFeedback, editFeedback, feedbackItem } =
    useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (feedbackItem.editionMode) {
      setText(feedbackItem.item.text);
      setRating(feedbackItem.item.rating);
      setIsDisabled(false);
    }
  }, [feedbackItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackItem.editionMode) {
        newFeedback.id = feedbackItem.item.id;
        editFeedback(newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      resetForm();
    }
  };

  const resetForm = () => {
    setText("");
    setRating(10);
    setIsDisabled(true);
    setMessage(null);
  };

  const handleTextChange = (e) => {
    let data = e.target.value;
    if (data === "") {
      setIsDisabled(true);
      setMessage(null);
    } else if (data !== "" && data.trim().length < 10) {
      setMessage("Text must be at least 10 characters");
      setIsDisabled(true);
    } else {
      setMessage(null);
      setIsDisabled(false);
    }
    setText(data);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How you rate your service with us?</h2>
        <RatingSelect rating={rating} setRating={setRating} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" disabled={isDisabled}>
            Send
          </Button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </Card>
  );
};

export default FeedbackForm;
