import React from "react";
import "./Buy.css";
import { Link } from "react-router-dom";

const Buy = () => {
  return (
    <div>
      <div className="buyandsell">
        <h2>Buy/Sell Instantly</h2>

        <div className="links">
          <Link to="./Buy">
            <button className="link"> Buy</button>
          </Link>
          <Link to="./Sell_Instantly">
            <button className="link"> Sell</button>
          </Link>
        </div>

        <div className="btc">
          <h3>Coin to Buy</h3>
          <select className="btc1" name="" id="">
            <option className="optionn" value="">
              Bitcoin (BTC)
            </option>
            <option value="">XRP</option>
            <option value="">BNB</option>
          </select>
        </div>

        <div className="btc">
          <h3>Currency</h3>
          <select className="btc2" name="" id="">
            <option className="optionn" value="">
              Naira (NGN)
            </option>
            <option value="">KOBO</option>
            <option value="">BNB</option>
          </select>
        </div>

        <div className="btc">
          <h3>Amount</h3>

          <input className="nig" type="text" value="NGN" disabled />
          <input className="amount" type="text" placeholder="3,000,000.00" />
        </div>

        <div className="btc">
          <button className="btcc btn"> Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Buy;
