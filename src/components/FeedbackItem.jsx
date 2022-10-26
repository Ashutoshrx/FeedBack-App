import React from 'react';
import { useState } from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import FeedbackData from '../data/FeedbackData';

function FeedbackItem({ item, handleDelete }) {
  //Use of UseState which is a react hook
  const [rating, setRating] = useState(item.rating);
  const [text, setText] = useState(item.text);

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">&#128473;</button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

FeedbackItem.prototype = {
  item: PropTypes.objectOf(FeedbackData),
};

export default FeedbackItem;
