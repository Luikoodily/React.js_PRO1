import React, { useState } from "react";
import "./SignUp.css";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import validateSignUp from "../validation/SignUpvalidation";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const err = validateSignUp(values);
    setErrors(err);
    if (Object.values(err).every((error) => error === "")) {
      axios
        .post("http://localhost:8081/signup", values)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="page-container">
      <div className="color-section">
        <img className="logo1" src={logo} alt="logo" width={400} />
      </div>
      <div className="white-section">
        <div className="white-content">
          <h1>WELCOME !!</h1>
          <p className="p1">Please register to continue</p>
          <form action="" onSubmit={handleSubmit} autoComplete="off">
            <div className="input-field-with-label">
              <label htmlFor="username" className="input-label">
                Username <span className="asterisk">*</span>
              </label>
              <div className="input-container">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  onChange={handleInput}
                  className="input-field"
                />
              </div>
              {errors.username && (
                <span className="text-danger" /*  style={{ color: 'red', fontSize: '16px', paddingRight: '47%', whitespace: 'normal', wordwrap: 'breakword' }} */
                >{errors.username}</span>
              )}
            </div>
            <div className="input-field-with-label">
              <label htmlFor="username" className="input-label-2">
                Email Address <span className="asterisk">*</span>
              </label>
              <div className="input-container">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={handleInput}
                  className="input-field"
                />
              </div>
              {errors.email && (
                <span className="text-danger" style={{ color: 'red', fontSize: '16px', paddingRight: '52%' }}
                >{errors.email}</span>
              )}
            </div>
            <div className="input-field-with-label">
              <label htmlFor="username" className="input-label">
                Password <span className="asterisk">*</span>
              </label>
              <div className="input-container">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleInput}
                  className="input-field"
                />
              </div>
              {errors.password && (
                <span className="text-danger" style={{ color: 'red', fontSize: '16px', paddingRight: '47%' }}
                >{errors.password}</span>
              )}
            </div>
            <div className="input-field-with-label">
              <label htmlFor="username" className="input-label-4">
                Confirm Password <span className="asterisk">*</span>
              </label>
              <div className="input-container">
                <input
                  type="password"
                  name="confirm_password"
                  placeholder="Re-enter your password"
                  onChange={handleInput}
                  className="input-field"
                />
              </div>
              {errors.confirm_password && (
                <span className="text-danger" style={{ color: 'red', fontSize: '16px', paddingRight: '36%' }}
                >
                  {errors.confirm_password}
                </span>
              )}
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
            <Link to="/" className="already-registered">
              Already Registered, Sign in
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
