import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: 'This is feedback Item 1',
    },
    {
      id: 2,
      rating: 6,
      text: 'This is feedback item 2',
    },
    {
      id: 3,
      rating: 8,
      text: 'This is feedback item 3',
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    isEdit: false,
  });

  const deleteFeedbackData = (id) => {
    setFeedback(feedback.filter((fd) => fd.id !== id));
  };

  const editFeedbackData = (item) => {
    setFeedbackEdit({
      item,
      isEdit: true,
    });
  };

  const updateFeedbackData = (id, updId) => {
    console.log(updId);
    console.log(id);
    setFeedback(
      feedback.map((feed) =>
        feed.id === id
          ? {
              ...feed,
              ...updId,
            }
          : feed
      )
    );
    console.log('data updated');
  };

  const appendFeedbackData = (newFeedbackData) => {
    let fbData = [newFeedbackData, ...feedback];
    setFeedback(fbData);
    console.log('Data saved');
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedbackData,
        appendFeedbackData,
        editFeedbackData,
        updateFeedbackData,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
