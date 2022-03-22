import React from "react";
import app from "./Images/Group 68.svg";
import ply from "./Images/Group 69.svg";

const Section5 = () => {
  return (
    <div>
      <p className="ready">
        Ready to trade Buy/Sell cryptocurrencies in just 10minutes
      </p>
      <h2 className="create">
        Create your account for free and start trading today!
      </h2>
      <button className="started">Get Started</button>
      <div className="apple">
        <img className="dave oo" src={app} alt="" />
        <img className="dave" src={ply} alt="" />
      </div>
    </div>
  );
};

export default Section5;
