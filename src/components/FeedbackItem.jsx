import React from 'react';
import { useState } from 'react';
import FeedbackData from '../data/FeedbackData';

function FeedbackItem() {
  //Use of UseState which is a react hook
  const [feedBackData, setFeedBackData] = useState({ FeedbackData });
  console.log(feedBackData);

  return (
    <div className="container">
      <h1>Feedback data</h1>
      {/* <p>{FeedBackData}</p> */}
    </div>
  );
}

export default FeedbackItem;
