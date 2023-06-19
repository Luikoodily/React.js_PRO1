import React from "react";
import logo from "../images/logo.png";

const forgotpassword = () => {
  return (
    <div className="page-container">
      <div className="color-section">
        <img className="logo1" src={logo} alt="logo" width={400} />
      </div>
      <div className="white-section">
        <div className="white-content">
          <h1>FORGOT PASSWORD</h1>         
          <div className="input-field-with-label">
            <label htmlFor="username" className="input-label">
              Username <span className="asterisk">*</span>
            </label>
            <div className="input-container">
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="input-field"
              />
            </div>
          </div>
          <div className="input-field-with-label">
            <label htmlFor="password" className="input-label">
              Password <span className="asterisk">*</span>
            </label>
            <div className="input-container">
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="input-field"
              />
            </div>
          </div>
          <button className="submit-button">RESET</button>
        </div>
      </div>
    </div>
  );
};

export default forgotpassword;
