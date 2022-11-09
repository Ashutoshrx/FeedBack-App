import { useEffect } from 'react';
import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    isEdit: false,
  });

  useEffect(() => {
    fetchFeedbackData();
  }, []);

  // Fetching Feedback data from the database
  const fetchFeedbackData = async () => {
    await fetch(`/feedback?_sort=id&_order=desc`)
      .then((response) => response.json())
      .then((data) => {
        setFeedback(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  // Posting a Feedback data to the database
  const appendFeedbackData = async (newFeedbackData) => {
    await fetch(`${process.env.REACT_APP_URL}/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedbackData),
    });
    let fbData = [newFeedbackData, ...feedback];
    setFeedback(fbData);
  };
  // Delete the Feedback data from the database
  const deleteFeedbackData = async (id) => {
    await fetch(`/feedback/${id}`, {
      method: 'DELETE',
    });
    setFeedback(feedback.filter((fd) => fd.id !== id));
  };

  const editFeedbackData = (item) => {
    setFeedbackEdit({
      item,
      isEdit: true,
    });
  };
  // Updating a particular Feedback data
  const updateFeedbackData = async (id, updId) => {
    await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updId),
    });
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
    setFeedbackEdit(
      {
        item: {},
        isEdit: false,
      }
    )
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedbackData,
        editFeedbackData,
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
