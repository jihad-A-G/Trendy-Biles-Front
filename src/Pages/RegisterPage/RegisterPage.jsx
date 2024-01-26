import React from "react";
import "./RegisterPage.css";
import { useNavigate } from "react-router-dom";
import FullLogo from "../../assets/FullLogo2.jpg";

const RegisterLogin = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    document.getElementById("container").classList.add("right-panel-active");
  };

  const handleSignInClick = () => {
    document.getElementById("container").classList.remove("right-panel-active");
  };

  const handleGoHomeClick = () => {
    navigate("/");
  };

  return (
    <>
      <button className="go-home" onClick={handleGoHomeClick}>
        Go Home
      </button>
      <div className="RegisterLoginPage">
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form action="#">
              <h2>Create Account</h2>
              <span>or use your email for registration</span>
              <input
                className="Registerinput"
                type="text"
                placeholder="Username"
              />
              <input
                className="Registerinput"
                type="email"
                placeholder="Email"
              />
              <input
                className="Registerinput"
                type="password"
                placeholder="Password"
              />
              <input
                className="Registerinput"
                type="text"
                placeholder="PhoneNumber"
              />
              <input
                className="Registerinput"
                type="text"
                placeholder="Address"
              />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h2>Sign in</h2>
              <span> use your account</span>
              <input
                className="Registerinput"
                type="email"
                placeholder="Email"
              />
              <input
                className="Registerinput"
                type="password"
                placeholder="Password"
              />
              <a href="#">Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <img className="FullLogo" src={FullLogo} alt="Logo" />
                <h2>Welcome Back!</h2>
                <p>To keep connected with us please login with your personal info</p>
                <button className="ghost" onClick={handleSignInClick}>
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <img className="FullLogo" src={FullLogo} alt="Logo" />
                <h2>Hello, Friend!</h2>
                <p>Enter your personal details and start the journey with us</p>
                <button className="ghost" onClick={handleSignUpClick}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterLogin;
