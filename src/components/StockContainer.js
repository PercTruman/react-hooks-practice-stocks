import React from "react";
import Stock from "./Stock";

function StockContainer({stocks}) {
  console.log({stocks})
  const stockCards= stocks.map((stockCard)=>
  <Stock stockCard={stockCard}/>)
  return (
    <div>
      <h2>Stocks</h2>
      {stockCards}
    </div>
  );
}

export default StockContainer;
