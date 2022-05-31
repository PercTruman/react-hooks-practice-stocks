import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [addToPortfolio, setAddToPortfolio]= useState(false)
  
  useEffect(()=>{
    fetch ('http://localhost:3001/stocks')
    .then(res=>res.json())
    .then(stockData=>setStocks(stockData))
  },[])

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} setStocks={setStocks} addToPortfolio={addToPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={stocks} addToPortfolio={addToPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
