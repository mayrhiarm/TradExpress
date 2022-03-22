import React from "react";
import group from "./Images/Group 52.svg";

const Section3 = () => {
  return (
    <div className="section3">
      <h2 className="why">Why do people get involved with Cryptocurrencies</h2>

      <div>
        <div className="flat">
          <div className="easy">
            <img src={group} alt="" />
            <h2>Easy Mode Of Payment</h2>
            <p>
              People can now easily send and receive money from anywhere in the
              world to purchase goods and pay for services.
            </p>
          </div>
          <div className="easy">
            <img src={group} alt="" />
            <h2>Financial Freedom</h2>
            <p>
              Just like the internet no single entity controls the Crypto
              network which provides users transparency and privacy, which puts
              you in absolute control of your money
            </p>
          </div>
          <div className="easy">
            <img src={group} alt="" />
            <h2>Investment</h2>
            <p>
              The constant demand as made Cryptocurrencies a Digital Gold used
              for alternative store of wealth on long term investments.
            </p>
          </div>
        </div>
        <div>
          <button className="but">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Section3;
