import React from "react";
import immage from "./Images/Group 79.svg";
import "./Footer.css";
import imey from "./Images/Group 78.svg";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="back">
          <div className="none">
            <h3>Products</h3>
            <p>Bitcoin</p>
            <p>Alt</p>
            <p>Fiat</p>
            <p>Refill</p>
            <p>P2P</p>
          </div>

          <div className="one">
            <h3>Learn</h3>
            <p>Blog</p>
            <p>Help Center</p>
          </div>

          <div className="two">
            <h3>Contact</h3>
            <p>hello@tradeexpress.com</p>
            <p>support@tradeexpress.com</p>
            <div>
              <img src={immage} alt="" />
            </div>
          </div>

          <div className="three">
            <h3>Company</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Rates</p>
            <p>Mobile</p>
          </div>

          <div className="four">
            <h3>Legal</h3>
            <p>Privacy Policy</p>
            <p>Anti-Money Laundering</p>
            <p>Terms and Condition</p>
            <p>Mobile</p>
          </div>
        </div>
      </div>
      <div className="copyright">
        {" "}
        <img className="lasttext" src={imey} alt="" />
      </div>{" "}
    </div>
  );
};

export default Footer;
