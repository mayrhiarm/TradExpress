import React from "react";
import "./Main.css";
import apple from "./Images/Group 68.svg";
import play from "./Images/Group 69.svg";
import Footer from "./Footer";

const Section1 = () => {
  return (
    <div>
      <div className="diva11">
        <div>
          <div className="para">
            <h2>Buy, sell and manage your Crpto on TradExpress.</h2>
            <p>
              Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with
              NGN
            </p>
            <button className="btnn">Get Started</button>
          </div>
        </div>
        <div className="play">
          <img className="right" src={apple} alt="" />
          <img className="google" src={play} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
