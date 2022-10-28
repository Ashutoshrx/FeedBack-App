import React from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';


function FeedbackList({ feedback, handleDelete }) {
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
                    handleDelete={(id) => handleDelete(id)} />
            ))
            }
        </div >
    );

}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
            }
        )
    )
};

export default FeedbackList;
