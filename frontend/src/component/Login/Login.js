import React, { useState } from "react";
import "./Login.css";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import validateLogin from "../validation/Loginvalidation";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const err = validateLogin(values);
    setErrors(err);
    if (Object.values(err).every((error) => error === "")) {
      axios
        .post("http://localhost:8081/agmr_3.0", values)
        .then((res) => {
          if (res.data === "Login successful.") {
            navigate("/autographtranslate");
          } else {
            alert("No record existed");
          }
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
        <div className="white-content-2">
          <h1>LOGIN</h1>
          <p className="p1">Please login to continue.</p>
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
                <span className="text-danger">{errors.username}</span>
              )}
            </div>
            <div className="input-field-with-label">
              <label htmlFor="password" className="input-label">
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
                <span className="text-danger">{errors.password}</span>
              )}
            </div>
            <button type="submit" className="submit-button">
              Login
            </button>
            <p className="already-registered">
              <Link to="/signup" className="already-registered">
                {" "}
                New User? Register{" "}
              </Link>{" "}
              |
              <Link to="/forgotpassword" className="already-registered">
                Forgot Password
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
