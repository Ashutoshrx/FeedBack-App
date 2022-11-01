import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';


function FeedbackStats() {
    const { feedback } = useContext(FeedbackContext);

    let feedbackIds = feedback.map(fb => fb.rating);
    let sumOfIds = feedbackIds.reduce((total, id) =>
        total + id, 0
    );
    let avgOfIds = sumOfIds / feedback.length; // average rating
    if (feedback.length === 0) {
        return;
    } else {
        return (
            <div className='feedback-stats'>
                <h4>{feedback.length} Reviews</h4>
                <h4>Average Ratings : {avgOfIds.toFixed(2)}</h4>
            </div>
        );
    }
}


export default FeedbackStats;
