import React from "react";

function Stock({stockCard}) {
  console.log(stockCard)
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stockCard.name}</h5>
          <p className="card-text">{stockCard.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
