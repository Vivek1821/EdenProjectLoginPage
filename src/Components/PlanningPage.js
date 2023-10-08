import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "./PlanningPage.css";
import styled from "styled-components";
import { Person } from "@styled-icons/bootstrap";
import { PersonPlus } from "@styled-icons/bootstrap";

const PlanningPage = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const SinglePerson = styled(Person)`
    color: grey;
    width: 50px;
    height: 50px;
    padding: 10px;
  `;

  const MultiplePerson = styled(PersonPlus)`
    color: grey;
    width: 50px;
    height: 50px;
    padding: 10px 20px 10px 20px;
  `;

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
    setErrorMessage("");
  };

  const handleClick = () => {
    if (selectedCard === null) {
      setErrorMessage("Please select a card");
    } else {
      navigate("/CongratulationsPage");
    }
  };
  return (
    <>
      <span className="welcome-title">How are you planning to use Eden?</span>
      <div className="welcome-subTitle">
        We'll streamline your setup experience accordingly
      </div>
      <div className="cards">
        <div
          className={`planning-card ${selectedCard === 1 ? "selected" : ""}`}
          onClick={() => handleCardClick(1)}
        >
          <SinglePerson className="styled" />
          <div className="planning-card-discription">
            <span className="card-title">For Myself</span>
            <p className="card-para">
              Write better Think more clearly. Stay organized.
            </p>
          </div>
        </div>
        <div
          className={`planning-card ${selectedCard === 2 ? "selected" : ""}`}
          onClick={() => handleCardClick(2)}
        >
          <MultiplePerson />
          <div className="planning-card-discription">
            <span className="card-title">With my team</span>
            <p className="card-para">
              Wikis, docs , tasks & projects, all in one place
            </p>
          </div>
        </div>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <Button onClick={handleClick} />
    </>
  );
};

export default PlanningPage;
