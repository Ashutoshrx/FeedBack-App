import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import { useState } from 'react';
import FeedbackList from './components/FeedbackList';

function App() {
  //Use of UseState which is a react hook
  const [feedBackData, setFeedBackData] = useState(FeedbackData);
  
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedBackData} />
      </div>
    </>
  );
}
export default App;
