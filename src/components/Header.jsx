import React from "react";
import PropTypes from "prop-types";

const Header = ({ title, bgColor, txtColor }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: txtColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  );
};

/**
 * Default props
 * Useful from type checking
 * in development mode
 */
Header.defaultProps = {
  title: "Feedback UI",
  bgColor: "rgba(0, 0, 0, 0.4)",
  txtColor: "#ff6895",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
