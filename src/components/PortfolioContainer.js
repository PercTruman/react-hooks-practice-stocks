import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks}) {
  const portfolioStocks = (stocks.filter((stock)=>
    stock))
  

 
  
  return (
    <div>
      <h2>My Portfolio</h2>
      < Stock />
    </div>
  );
}

export default PortfolioContainer;
