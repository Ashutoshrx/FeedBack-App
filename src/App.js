import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import AboutPageLink from './components/AboutPageLink';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  // After adding routes
  return (
    <FeedbackProvider>
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
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </div>
              <AboutPageLink />
            </>
          }
        ></Route>
      </Routes>
    </FeedbackProvider>
  );
}
export default App;
