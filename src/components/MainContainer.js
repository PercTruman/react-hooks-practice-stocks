import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolioCardArray, setPortfolioCardArray] = useState([]);
  const [isInPortfolio, setIsInPortfolio] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then((stockData) => setStocks(stockData));
  }, []);

  

  const filteredAndSortedStocks = stocks
    .filter((stock) => !filterValue || stock.type === filterValue)
    .sort((a, b) => sortBy === "Alphabetically" ? (a.name< b.name) ? -1 : 1
          : (a.price <b.price) ? -1 : 1);
    

  return (
    <div>
      <SearchBar onChangeFilter={setFilterValue} onChangeSortBy={setSortBy} />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={filteredAndSortedStocks}
            setStocks={setStocks}
            portfolioCardArray={portfolioCardArray}
            setPortfolioCardArray={setPortfolioCardArray}
            isInPortfolio={isInPortfolio}
            setIsInPortfolio={setIsInPortfolio}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            stocks={stocks}
            portfolioCardArray={portfolioCardArray}
            setPortfolioCardArray={setPortfolioCardArray}
            s
            isInPortfolio={isInPortfolio}
            setIsInPortfolio={setIsInPortfolio}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
