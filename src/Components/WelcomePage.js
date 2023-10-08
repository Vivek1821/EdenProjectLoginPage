import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./WelcomePage.css";
import Button from "./Button";


const WelcomePage = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [displayNameError, setDisplayNameError] = useState("");
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    console.log(params.get("currentIndex"));
  });

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
    setFullNameError(e.target.value ? "" : "Full Name is required");
  };

  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
    setDisplayNameError(e.target.value ? "" : "Display Name is required");
  };

  const handleClick = () => {
    if (!fullName || !displayName) {
      setFullNameError(fullName ? "" : "Full Name is required");
      setDisplayNameError(displayName ? "" : "Display Name is required");
    } else {
      navigate("/SetupPage");
    }
  };

  

  return (
    <div className="welcome-container">
      
      <span className="welcome-title">Welcome! First Things First...</span>
      <div className="welcome-subTitle">You can always change them later.</div>
      <div className="input-field">
        <span className="names">Full Name</span>
        <input
          className="input-name"
          placeholder="SteveJobs"
          value={fullName}
          onChange={handleFullNameChange}
        />
      </div>
      <div className="error-message">{fullNameError}</div>
      <div className="input-field">
        <span className="names">Display Name</span>
        <input
          className="input-name"
          placeholder="Steve"
          value={displayName}
          onChange={handleDisplayNameChange}
        />
      </div>
      <div className="error-message">{displayNameError}</div>
      <Button onClick={handleClick} />
    </div>
  );
};

export default WelcomePage;
