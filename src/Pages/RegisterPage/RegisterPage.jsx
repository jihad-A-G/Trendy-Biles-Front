import React from 'react';
import './RegisterPage.css';
import FullLogo from "../../assets/FullLogo2.jpg";
const RegisterLogin = () => {
  const handleSignUpClick = () => {
    document.getElementById('container').classList.add('right-panel-active');
  };

  const handleSignInClick = () => {
    document.getElementById('container').classList.remove('right-panel-active');
  };

  return (
    <div className='RegisterLoginPage'>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            {/* <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div> */}
            <span>or use your email for registration</span>
            <input className='Registerinput' type="text" placeholder="UserName" />
            <input className='Registerinput' type="email" placeholder="Email" />
            <input className='Registerinput' type="password" placeholder="Password" />
            <input className='Registerinput' type="text" placeholder="PhoneNumber" />
            <input className='Registerinput' type="text" placeholder="Address" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            {/* <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div> */}
            <span> use your account</span>
            <input className='Registerinput' type="email" placeholder="Email" />
            <input className='Registerinput' type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
                <img className='FullLogo' src={FullLogo}></img>
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" onClick={handleSignInClick}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
            <img className='FullLogo' src={FullLogo}></img>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start the journey with us</p>
              <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
</div>
  );
};

export default RegisterLogin;
