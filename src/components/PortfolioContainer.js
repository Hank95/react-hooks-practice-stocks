import React from "react";
// import Stock from "./Stock";
import PortfolioStock from "./PortfolioStock";

function PortfolioContainer({ portfolio, handlePorfolioClick }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map((stock) => {
        return (
          <PortfolioStock
            key={stock.id}
            stock={stock}
            handlePorfolioClick={handlePorfolioClick}
          />
        );
      })}
    </div>
  );
}

export default PortfolioContainer;
