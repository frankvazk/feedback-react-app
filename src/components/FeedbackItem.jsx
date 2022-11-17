import React, { useContext } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaEdit, FaTimes } from "react-icons/fa";
import FeedbackContext from "../context/feedbackContext";

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, setFeedbackItem } = useContext(FeedbackContext);
  const handleEdit = (item) => {
    setFeedbackItem({
      item,
      editionMode: true,
    });
  };
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => handleEdit(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
