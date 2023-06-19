import React from "react";
import { useNavigate } from "react-router-dom";
import "./autographatranslate.css";
import logo from "../../images/Translate_logo.png";

const AutographTranslate = () => {
  const navigate = useNavigate();

  const handleTranslatorClick = () => {
    navigate("/translator");
  };

  return (
    <div className="topheader">
      <header className="header">
        <h2 className="header-text">Autograph Translate</h2>
      </header>
      <div className="page-container">
        <div className="color-section">
          <img className="logo1" src={logo} alt="logo" width={800} />
        </div>
        <div className="white-section">
          <div className="white-content">
            <h1>YOUR ROLE</h1>
            <p className="p1">Please select what best defines your role</p>
            <button className="translate-button" onClick={handleTranslatorClick}>
              TRANSLATOR
            </button>
            <button className="translate-button">QUALITY CHECKER</button>
            <button className="translate-button">CONSULTANT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutographTranslate;
