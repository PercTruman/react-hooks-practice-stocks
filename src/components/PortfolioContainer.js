import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioCard, setPortfolioCard}) {
  console.log(portfolioCard)
  const [name,ticker,price]= portfolioCard


  

 
  
  return (
    <div>
      <h2>My Portfolio</h2>
      <div className="card"  >
        <div className="card-body" >
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}:{price}</p>
        </div>
      </div>
    </div>
  )
  
}

export default PortfolioContainer;
