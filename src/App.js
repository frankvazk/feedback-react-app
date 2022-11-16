import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import FeedbackData from "./data/feedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FaQuestionCircle } from "react-icons/fa";
import PostPage from "./pages/PostPage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id =
      feedback.reduce((prev, cur) => (+prev > +cur.id ? +prev : +cur.id), 0) +
      1;
    setFeedback((prev) => [newFeedback, ...prev]);
  };

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm addFeedback={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  deleteFeedback={deleteFeedback}
                  feedback={feedback}
                />

                <div className="about-link">
                  <NavLink to="/about">
                    <FaQuestionCircle size={30} />
                  </NavLink>
                </div>
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          {/** Passing parameters to routes using :param */}
          <Route path="/post/:id/:name" element={<PostPage />} />
          <Route path="/profile" element={<ProfilePage />}>
            {/**Nested Route */}
            <Route path=":id" element={<h1>Francisco</h1>} />
            {/**
             * Nested Routes allow us to inyect components depending of the url route
             * To do this, the parent component needs to implement
             * the component <Outlet>.
             * Into this component is gonna be rendered the nestes route
             * */}
            <Route path=":id/:age" element={<h1>67</h1>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
