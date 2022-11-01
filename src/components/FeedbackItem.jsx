import React, { useContext } from 'react';
import { useState } from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import FeedbackData from '../data/FeedbackData';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {
  //Use of UseState which is a react hook
  const [rating, setRating] = useState(item.rating);
  const [text, setText] = useState(item.text);
  const { deleteFeedbackData } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button onClick={() => deleteFeedbackData(item.id)} className="close">&#128473;</button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

FeedbackItem.prototype = {
  item: PropTypes.objectOf(FeedbackData),
};

export default FeedbackItem;
