import { v4 as uuid4 } from 'uuid';
import React from 'react';
import { useState } from 'react';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';
import PropTypes from 'prop-types';


function FeedbackForm({ handleAppend }) {

    const [rating, setRating] = useState();
    const [textInput, setTextInput] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const changeTextInput = (textInput) => {
        if (textInput.target.value === null) {
            setIsDisabled(true);
            setMessage('');
        }
        else if (textInput.target.value !== null) {
            if (textInput.target.value.length <= 10) {
                setIsDisabled(true);
                setMessage('Input value must be greater than 10 characters');
            }
            else {
                setIsDisabled(false);
                setMessage('');
            }
        }
        setTextInput(textInput.target.value);
    };
    
    const appendData = () => {
        const newFeedbackData = {
            'id': uuid4(),
            'rating': rating,
            'text': textInput
        };
        handleAppend(newFeedbackData);
    };

    return (
        <Card>
            <h2>How would rate this website?</h2>
            <RatingSelect select={(rating) => { setRating(rating); }} />
            <div className="input-group" >
                <input onChange={changeTextInput} type="text" className='message'
                    placeholder='Please write a review' />
                <Button type="submit" disabled={isDisabled} onAppend={appendData}>Submit Review</Button>
            </div>
            <div className="message">{message && message}</div>

        </Card>
    );
}

FeedbackForm.propTypes = {
    handleAppend: PropTypes.func.isRequired,
};

export default FeedbackForm;
