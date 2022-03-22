import React from "react";
import { Link } from "react-router-dom";
import "./Individual.css";

const Individual = () => {
  return (
    <div>
      <div className="buyandsell">
        <h2>Welcome!</h2>

        <div className="individual">
          <Link to="./Individual">
            <button className="business"> Individual</button>
          </Link>
          <Link to="./Business">
            <button className="business"> Business</button>
          </Link>
        </div>

        <div>
          <input className="inpw" type="text" placeholder="Username" />
          <input className="inpw" type="text" placeholder="Full Name" />
          <input className="inpw" type="text" placeholder="Email" />
          <input className="inpw" type="text" placeholder="Phone Number" />
          <input
            className="inpw"
            type="text"
            placeholder="Referral Code (optional)"
          />
        </div>
        <div className="sign">
          <p>
            By clicking the Sign Up button below, you agree to TradExpress{" "}
            <span>
              <a className="terms" href="">
                {" "}
                terms and services
              </a>
            </span>
          </p>
        </div>
        <div>
          <button className="pop">Sign Up</button>
        </div>
        <div className="account">
          <p>Already have an account?</p>

          <a className="click" href="">
            Click here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Individual;
