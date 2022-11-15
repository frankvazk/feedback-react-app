import React, { useState } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const handleTextChange = (e) => {
    let data = e.target.value;
    console.log(data.length);
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
      <form>
        <h2>How you rate your service with us?</h2>
        {/** @todo - rating select component  */}
        <RatingSelect rating={rating} setRating={setRating} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            value={text}
            onChange={handleTextChange}
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
