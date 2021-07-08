import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  // const [filter, setFitler] = useState("Sportswear");
  // const [nameSort, setNameSort] = useState(false);
  // const [priceSort, setPriceSort] = useState(false);
  const [stocksToShow, setStocksToShow] = useState(stocks);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then((json) => {
        setStocksToShow(json);
        setStocks(json);
      });
  }, []);

  const handleStocksClick = (stock) => {
    console.log(stock);
    const newPortArr = [...portfolio, stock];
    setPortfolio(newPortArr);
  };

  const handlePorfolioClick = (stock) => {
    const newPortArr = portfolio.filter((port) => port.id !== stock.id);
    setPortfolio(newPortArr);
  };
  const handelFilterChange = (e) => {
    let filtered = e.target.value;

    const stocksfiltered = stocks.filter((stock) => {
      if (filtered === "All") {
        return true;
      } else {
        return stock.type === filtered;
      }
    });
    setStocksToShow(stocksfiltered);
  };
  let freshStocks = [...stocksToShow];

  const handleNameSort = () => {
    const nameSort = freshStocks.sort(function (a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    console.log(nameSort);
    setStocksToShow(nameSort);
  };

  const handlePriceSort = () => {
    const priceSort = freshStocks.sort(function (a, b) {
      return a.price - b.price;
    });
    setStocksToShow(priceSort);
  };

  console.log(portfolio);
  return (
    <div>
      <SearchBar
        handelFilterChange={handelFilterChange}
        handleNameSort={handleNameSort}
        handlePriceSort={handlePriceSort}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={stocksToShow}
            handleStocksClick={handleStocksClick}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolio={portfolio}
            handlePorfolioClick={handlePorfolioClick}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
