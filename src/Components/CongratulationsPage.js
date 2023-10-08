import React from "react";
import "./CongratulationsPage.css";
import styled from "styled-components";
import { CheckmarkDoneCircle } from "@styled-icons/ionicons-sharp";

const CongratulationsPage = () => {
  const Completed = styled(CheckmarkDoneCircle)`
    color: blue;
    width: 75px;
    height: 75px;
  `;
  return (
    <>
      <Completed />
      <div>
        <span className="welcome-title">Congratulations, Jane</span>
        <div className="welcome-subTitle">
          You have completed onboarding, you can start using the Eden!
        </div>
      </div>
      <div className="launch-button">
        <a className="button-name">Launch Eden</a>
      </div>
    </>
  );
};

export default CongratulationsPage;
