import React, { useEffect } from "react";
import "./Button.css";

const Button = ({ onClick }) => {
  return (
    <div className="button-container">
      <div className="button" onClick={onClick}>
        <a className="button-name">Create Workspace</a>
      </div>
    </div>
  );
};

export default Button;
