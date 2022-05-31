import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, setStocks, addToPortfolio}) {
  const cards = stocks.map((stockObj)=>
  <Stock key={stockObj.id} name={stockObj.name} ticker={stockObj.ticker} price={stockObj.price} addToPortfolio={addToPortfolio}/>)
  return (
    <div>
      <h2>Stocks</h2>
      {cards}
    </div>
  );
}

export default StockContainer;
