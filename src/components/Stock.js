import React, { useState } from "react";

function Stock({ stock, handleStocksClick }) {
  const [added, setAdded] = useState(false);
  const switchState = () => {
    setAdded(true);
  };
  return (
    <div>
      <div
        className="card"
        onClick={() => {
          !added ? handleStocksClick(stock) : console.log("bought already!");
          switchState();
        }}
      >
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">
            {stock.ticker}: {stock.price}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
