import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: 'Hi I am coming from context, developed by Ashutosh Satapathy',
    },
  ]);

  const deleteFeedbackData = (id) => {
    setFeedback(feedback.filter((fd) => fd.id !== id));
  };

  const appendFeedbackData = (newFeedbackData) => {
    let fbData = [newFeedbackData, ...feedback];
    setFeedback(fbData);
  };

  return (
    <FeedbackContext.Provider
      value={{ deleteFeedbackData, appendFeedbackData, feedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
