import React from "react";
import Stock from "./Stock";

function PortfolioContainer({
  stocks,
  portfolioCardArray,
  setPortfolioCardArray,
  isInPortfolio,
  setIsInPortfolio,
}) {
  const portfolioCards = portfolioCardArray.map((stockObj) => (
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
      <h2>My Portfolio</h2>
      {portfolioCards}
    </div>
  );
}

export default PortfolioContainer;
