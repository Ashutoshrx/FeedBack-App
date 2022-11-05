import React from 'react';
import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Loading from './shared/Loading';


function FeedbackList() {
    const { feedback, isLoading } = useContext(FeedbackContext);
    if (!isLoading && (!feedback || feedback.length === 0)) {
        return (
            <>
                <h1 style={{ color: 'red' }}>NO FEEDBACK YET</h1>
            </>

        );
    }
    return (
        isLoading ?
            <Loading />
            :
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
