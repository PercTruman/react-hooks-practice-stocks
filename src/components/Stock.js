import React from "react";

function Stock({name, ticker, price, addToPortfolio}) {


  return (
    <div >
      <div className="card" onClick={()=>addToPortfolio=!addToPortfolio} >
        <div className="card-body" >
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}:{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
