import React, { useState, useEffect } from "react";

const Section2 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.coinlore.net/api/tickers/?start=0&limit=5")
      .then((response) => response.json())
      .then((json) => setData(json.data));
  });

  return (
    <div className="name">
      {data.map((datum) => {
        return (
          <div className="date" key={datum.id}>
            <div key={datum.id}>
              <h1>{datum.name}</h1>
              <h1>{datum.price_usd}</h1>
            </div>
            <h1>{datum.percent_change_1h}%</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Section2;
