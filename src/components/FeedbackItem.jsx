import React from 'react';
import { useState } from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types'
import FeedbackData from '../data/FeedbackData';


function FeedbackItem({item}) {
  //Use of UseState which is a react hook
  const [rating, setRating] = useState(item.rating);
  const [text, setText] = useState(item.text);

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </Card>
  );
}

FeedbackItem.prototype={
  item:PropTypes.objectOf(FeedbackData),
}

export default FeedbackItem;
