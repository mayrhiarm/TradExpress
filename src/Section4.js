import React from "react";
import images from "./Images/Group 52.svg";

const Section4 = () => {
  return (
    <div className="section4">
      <div className="buy">
        <h2 className="buyy">
          Buy and Sell your Cryptocurrency in 3 simple steps
        </h2>
      </div>

      <div className="tenny">
        <div className="crate   cd">
          <div className="free">
            <p className="pp">1</p>
            <div>
              <h2>Create a free Account</h2>
              <p>
                Sign up for your free TradExpress Wallet on web, iOS, or Android
                devices and follow our easy process to set up ypur profile
              </p>
            </div>
          </div>
          <div>
            <img className="ima" src={images} alt="" />
          </div>
        </div>

        <div className="deposit  cd">
          <div>
            <img className="ima" src={images} alt="" />
          </div>
          <div className="choose">
            <p className="pp">2</p>
            <div>
              <h2 className="depo">Deposit</h2>
              <p>
                Choose your preferred deposit option like bank transfer,
                credit/debit card or send digital asset directly to your wallet
                for easy funding/withdrawal.
              </p>
            </div>
          </div>
        </div>

        <div className="crypto cd">
          <div className="btnnn force">
            <p className="pp">3</p>
            <div>
              <h2>Buy/Sell Crypto</h2>
              <p>
                Buy BTC,USDT,ETH,LTC,XRP,DOGE and securely store it in your
                wallet or send it easily to friends and family
              </p>
            </div>
          </div>
          <div>
            <img className="ima" src={images} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
