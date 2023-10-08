import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const SetupPage = () => {
  const navigate = useNavigate();

  const [workspaceName, setWorkspaceName] = useState("");

  const [workspaceError, setWorkspaceError] = useState("");

  const handleWorkspaceNameChange = (e) => {
    setWorkspaceName(e.target.value);
    setWorkspaceError(e.target.value ? "" : "Full Name is required");
  };

  const handleClick = () => {
    if (!workspaceName) {
      setWorkspaceError(workspaceName ? "" : "Workspace name is required");
    } else {
      navigate("/PlanningPage");
    }
  };
  return (
    <>
      <span className="welcome-title">
        Let's set up a home for all your work
      </span>
      <div className="welcome-subTitle">
        You can always create another workspace later.
      </div>
      <div className="input-field">
        <div className="names">Workspace Name</div>
        <input
          className="input-name"
          placeholder="Workspace Name"
          value={workspaceName}
          onChange={handleWorkspaceNameChange}
        />
      </div>
      <div className="error-message">{workspaceError}</div>
      <div className="url-Field">
        <div className="names">Workspace Url (Optional)</div>
        <span className="url-wrapper">
          <div className="url-fixed">www.wden.com/</div>
          <input className="url-input" placeholder="Workspace Name" />
        </span>
      </div>
      <Button onClick={handleClick} />
    </>
  );
};

export default SetupPage;
