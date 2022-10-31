import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import AboutPageLink from './components/AboutPageLink';

function App() {
  //Use of UseState which is a react hook
  const [feedBackData, setFeedBackData] = useState(FeedbackData);
  const deleteFeedbackData = (id) => {
    // console.log(`The feedback data has been deleted with id ${id}`);
    setFeedBackData(feedBackData.filter((fd) => fd.id !== id));
  };

  const appendFeedbackData = (newFeedbackData) => {
    let fbData = [newFeedbackData, ...feedBackData];
    setFeedBackData(fbData);
  };
  /*
Before adding routes
return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm
          feedback={feedBackData}
          handleAppend={appendFeedbackData}
        />
        <FeedbackStats feedback={feedBackData} />
        <FeedbackList
          feedback={feedBackData}
          handleDelete={deleteFeedbackData}
        />
      </div>
    </>
  );*/
  // After adding routes
  return (
    <Routes>
      <Route
        path="/about"
        element={
          <div className="container">
            <AboutPage />
          </div>
        }
      ></Route>
      <Route
        path="/"
        element={
          <>
            <Header />
            <div className="container">
              <FeedbackForm
                feedback={feedBackData}
                handleAppend={appendFeedbackData}
              />
              <FeedbackStats feedback={feedBackData} />
              <FeedbackList
                feedback={feedBackData}
                handleDelete={deleteFeedbackData}
              />
            </div>
            <AboutPageLink />
          </>
        }
      ></Route>
    </Routes>
  );
}
export default App;
