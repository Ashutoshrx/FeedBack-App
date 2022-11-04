import { v4 as uuid4 } from 'uuid';
import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';


function FeedbackForm() {

    const { appendFeedbackData, feedbackEdit, updateFeedbackData } = useContext(FeedbackContext);
    const [rating, setRating] = useState();
    const [textInput, setTextInput] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (feedbackEdit.isEdit === true) {
            setIsDisabled(false);
            setRating(feedbackEdit.item.rating);
            setTextInput(feedbackEdit.item.text);
        }
    }, [feedbackEdit]);

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
        feedbackEdit.isEdit === true ? updateFeedbackData(feedbackEdit.item.id, newFeedbackData) : appendFeedbackData(newFeedbackData);
        setTextInput('');
    };

    return (

        feedbackEdit.isEdit === true ?
            <Card>
                <h2>How would you want to update your rating?</h2>
                <RatingSelect select={(rating) => { setRating(rating); }} defaultChecked={feedbackEdit.item.rating} />
                <div className="input-group" >
                    <input onChange={changeTextInput} type="text" className='message'
                        defaultValue={feedbackEdit.item.text} />
                    <Button type="submit" disabled={isDisabled} onAppend={appendData}>Update Review</Button>
                </div>
                <div className="message">{message && message}</div>
            </Card> :
            <Card>
                <h2>How would  you rate this website?</h2>
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


export default FeedbackForm;
