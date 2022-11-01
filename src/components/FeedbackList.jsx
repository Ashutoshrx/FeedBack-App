import React from 'react';
import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';


function FeedbackList() {
    const { feedback } = useContext(FeedbackContext);
    if (!feedback || feedback.length === 0) {
        return (
            <h1 style={{ color: 'red' }}>NO FEEDBACK YET</h1>
        );
    }
    return (
        <div className="feedback-list">
            {feedback.map(element => (
                <FeedbackItem
                    key={element.id}
                    item={element}
                />
            ))
            }
        </div >
    );

}

export default FeedbackList;
