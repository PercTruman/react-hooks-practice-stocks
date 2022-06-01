import React from "react";

function Stock({name, ticker, price, setPortfolioCard}, portfolioCard) {

function handleClick(){
  const newCard = [name,ticker,price]
  console.log(newCard)
  setPortfolioCard((portfolioCard)=>portfolioCard = newCard)
}
  return (
    <div >
      <div className="card"  >
        <div className="card-body" onClick={handleClick}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}:{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
