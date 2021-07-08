import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleStocksClick }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => {
        return (
          <Stock
            key={stock.id}
            stock={stock}
            handleStocksClick={handleStocksClick}
          />
        );
      })}
    </div>
  );
}

export default StockContainer;
