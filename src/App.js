import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FaQuestionCircle } from "react-icons/fa";
import PostPage from "./pages/PostPage";
import ProfilePage from "./pages/ProfilePage";
import { FeedbackProvider } from "./context/feedbackContext";

const App = () => {
  return (
    <BrowserRouter>
      <FeedbackProvider>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />

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
      </FeedbackProvider>
    </BrowserRouter>
  );
};

export default App;
