import React from "react";

function Stock({ stockObj, portfolioCardArray, setPortfolioCardArray, isInPortfolio, setIsInPortfolio }) {
  const {name, ticker, price} = stockObj


 function handleClick(){
  toggleIsInPortfolio();
   const newObj = stockObj
   const newPortfolioCardArray = [...portfolioCardArray, newObj]

  if  (portfolioCardArray.includes(newObj))  {
    return null 
   }else {
    setPortfolioCardArray(newPortfolioCardArray)
   }
 }
function toggleIsInPortfolio(){
  setIsInPortfolio((isInPortfolio) => isInPortfolio = !isInPortfolio)
}
  return (
    <div >
      <div className="card" onClick={handleClick} >
        <div className="card-body" >
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}:{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
