import React from 'react';
import { useState } from 'react';

function FeedbackItem({textData,ratingData}) {
  //Use of UseState which is a react hook
  const [rating, setRating] = useState(ratingData);
  const [text, setText] = useState(textData);

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  );
}

export default FeedbackItem;
