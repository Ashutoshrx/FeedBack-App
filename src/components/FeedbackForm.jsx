import React from 'react';
import { useState } from 'react';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';

function FeedbackForm() {

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

    return (

        <Card>
            <h2>How would rate this website?</h2>
            <RatingSelect select={(rating) => { setRating(rating); }} />
            <div className="input-group" >
                <input onChange={changeTextInput} type="text" className='message' placeholder='Please write a review' /><br />
                <Button type="submit" disabled={isDisabled}>Submit Review</Button>
            </div>
            <div className="message">{message && message}</div>

        </Card>
    );
}

export default FeedbackForm;
