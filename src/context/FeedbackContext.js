import { useEffect } from 'react';
import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetchFeedbackData();
  }, []);

  // Fetching Feedback data from the server
  const fetchFeedbackData = async () => {
    fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
      .then((response) => response.json())
      .then((data) => {
        setFeedback(data);
      })
      .catch((err) => console.log(err));
  };

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
