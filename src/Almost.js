import React from "react";
import "./Almost.css";
import mail from "./Images/mailing.svg";

const Almost = () => {
  return (
    <div>
      <div className="almost">
        <p>You're Almost In!</p>
        <h3>Welcome Iretiayo</h3>
        <img src={mail} alt="" />
        <div>
          <p>
            An activation link has been sent to{" "}
            <span>
              <a href="">Ireti4tech@gmail.com</a>
            </span>
          </p>

          <p>
            Please click on the link to verify your email and activate your
            TradExpress account.
          </p>
        </div>
        <button>Continue</button>
        <div>
          <p>
            Didn't get an email? Kindly click{" "}
            <span>
              <a href="">resend email</a>
            </span>
          </p>

          <p>
            Wrong email supplied?{" "}
            <span>
              <a href="">Edit email address</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Almost;
