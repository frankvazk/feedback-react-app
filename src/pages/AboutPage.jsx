import React from "react";
import Card from "../components/shared/Card";
import { NavLink } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="container">
      <Card>
        <div className="about">
          <h1>About this project</h1>
          <p>This is a react application</p>
          <p>Version 1.0.0</p>
        </div>
        {/**
         * NavLink has a property
         * called isActive
         * which allow us to check
         * if current nav location is
         * active so we can change
         * style properties
         * (color, background, etc)
         */}
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "red" : "blue" };
          }}
          to="/"
          title="Go back"
        >
          Go Back
        </NavLink>
      </Card>
    </div>
  );
};

export default AboutPage;
