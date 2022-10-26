import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';

function App() {
  //Use of UseState which is a react hook
  const [feedBackData, setFeedBackData] = useState(FeedbackData);
  const deleteFeedbackData = (id) => {
    // console.log(`The feedback data has been deleted with id ${id}`);
    setFeedBackData(feedBackData.filter((fd) => fd.id !== id));
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedBackData} />
        <FeedbackList
          feedback={feedBackData}
          handleDelete={deleteFeedbackData}
        />
      </div>
    </>
  );
}
export default App;
