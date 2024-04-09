import React from "react";
import "./CSS/LoginSignup.css";

const loginsignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="your name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />\
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already havre an account? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>
            By continuing, I agree to use the terms of use and privecy policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default loginsignup;
