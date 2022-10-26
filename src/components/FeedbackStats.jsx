import React from 'react';
import PropTypes from 'prop-types';


function FeedbackStats({ feedback }) {
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

FeedbackStats.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
};
export default FeedbackStats;
