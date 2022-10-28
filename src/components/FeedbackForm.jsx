import React from 'react';
import { useState } from 'react';
import Button from './shared/Button';
import Card from './shared/Card';

function FeedbackForm() {
    const [textInput, setTextInput] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const changeTextInput = (textInput) => {
        console.log(textInput.target.value);
        if (textInput.target.value === null) {
            setIsDisabled(true);
            setMessage('');
        }
        else if (textInput.target.value.trim.length >= 10) {
            setIsDisabled(false);
            console.log(message);
        }
        else {
            setIsDisabled(false);
            setMessage('Review must be at least 10 characters');
        }
        setTextInput(textInput.target.value);
        // If statement not working properly
    };

    return (

        <Card>
            <h2>How would rate this website?</h2>
            <div className="input-group">
                <input onChange={changeTextInput} type="text" className='message' placeholder='Please write a review' /><br />
                <Button type="submit" disabled={isDisabled}>Submit Review</Button>
            </div>
            <div className="message">{message && message}</div>

        </Card>
    );
}

export default FeedbackForm;
