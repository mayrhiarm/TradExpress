import React from "react";
import "./WelcomeBack.css";
import mark from "./Images/Icon awesome-check-circle.svg";

const WelcomeBack = () => {
  return (
    <div>
      <div className="first">
        <h2>Welcome Back!</h2>
        <div className="text">
          <input
            className="input1"
            type="text"
            placeholder="Username"
            name=""
            id=""
          />
          <input
            className="input2"
            type="text"
            placeholder="Password"
            name=""
            id=""
          />
        </div>
        <div className="word">
          <div className="pass">
            <img src={mark} alt="" />
            <p className="rem">Remember Password</p>
          </div>
          <a href="">Forgot Password?</a>
        </div>
        <div>
          <button className="log">Login</button>
        </div>
        <div className="run">
          <p>New User?</p>
          <a className="way" href="">
            Click here
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBack;
