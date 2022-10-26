import React from 'react';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback }) {
    if (!feedback || feedback.length === 0) {
        return (
            <p>No FeedBack Yet</p>
        );
    }

    return (
        <div className="feedback-list">
            {feedback.map(element => (
                <FeedbackItem key={element.id} item={element} />
            ))
            }
        </div >
    );

}


export default FeedbackList;
