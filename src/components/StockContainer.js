import React from "react";
import Stock from "./Stock";

function StockContainer({
  stocks,
  portfolioCardArray,
  setPortfolioCardArray,
  isInPortfolio,
  setIsInPortfolio,
}) {
  const cards = stocks.map((stockObj) => (
    <Stock
      key={stockObj.id}
      stocks={stocks}
      stockObj={stockObj}
      portfolioCardArray={portfolioCardArray}
      setPortfolioCardArray={setPortfolioCardArray}
      isInPortfolio={isInPortfolio}
      setIsInPortfolio={setIsInPortfolio}
    />
  ));
  return (
    <div>
      <h2>Stocks</h2>
      {cards}
    </div>
  );
}

export default StockContainer;
