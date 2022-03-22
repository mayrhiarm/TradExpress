import React from "react";
import union from "./Images/Union 1.svg";
import imagee from "./Images/20141205_084338-1.jpg";

const Section6 = () => {
  return (
    <div className="call">
      <h2 className="customer">Customer's Review</h2>

      <div className="ref">
        <div className="Sect">
          <img className="blue" src={union} alt="" />
          <p className="buju">
            "Trading on TradExpress mobile & web platforms has been a smooth
            experience for me quite easy to navigate.
          </p>
          <img className="imagee" src={imagee} alt="" />
        </div>

        <div className="Sect">
          <img className="blue" src={union} alt="" />
          <p className="buju">
            "They have the best rate compare to other platforms with fast payout.
          </p>
          <img className="imageee" src={imagee} alt="" />
        </div>

        <div className="Sect">
          <img className="blue" src={union} alt="" />
          <p className="buju">
            "Easy to fund and withdraw coins or cash on their platform, i will
            definitely trade with them again and again.
          </p>
          <img className="imageeee" src={imagee} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section6;
