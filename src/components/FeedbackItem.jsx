import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import FeedbackData from '../data/FeedbackData';
import FeedbackContext from '../context/FeedbackContext';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

function FeedbackItem({ item }) {
  //Use of UseState which is a react hook
  const [rating, setRating] = useState(item.rating);
  const [text, setText] = useState(item.text);
  const { deleteFeedbackData, editFeedbackData } = useContext(FeedbackContext);


  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button onClick={() => deleteFeedbackData(item.id)} className="close"><AiFillDelete /></button>
      <button className="edit" onClick={() => editFeedbackData(item)}><AiFillEdit /></button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

FeedbackItem.prototype = {
  item: PropTypes.objectOf(FeedbackData),
};

export default FeedbackItem;
