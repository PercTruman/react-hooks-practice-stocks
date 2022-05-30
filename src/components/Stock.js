import React from "react";

function Stock({stocks}) {
  console.log(stocks)
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{" Name"}</h5>
          <p className="card-text">{"Stock Price"}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
