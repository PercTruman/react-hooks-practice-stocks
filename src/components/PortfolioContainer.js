import React from "react";
import Stock from "./Stock";

function PortfolioContainer() {
 function handleAddPortfolioStock(){
    console.log('hi')
  }
 
  
  return (
    <div>
      <h2>My Portfolio</h2>
      <Stock handleAddPortfolioStock={handleAddPortfolioStock}/>
    </div>
  );
}

export default PortfolioContainer;
