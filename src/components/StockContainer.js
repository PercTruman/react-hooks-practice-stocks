import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, setStocks}) {
  const cards = stocks.map((stockObj)=>
  <Stock key={stockObj.id} name={stockObj.name} ticker={stockObj.ticker} price={stockObj.price} />)
  return (
    <div>
      <h2>Stocks</h2>
      {cards}
    </div>
  );
}

export default StockContainer;
