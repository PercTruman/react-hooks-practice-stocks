import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolioCardArray, setPortfolioCardArray] = useState([]);
  const [isInPortfolio, setIsInPortfolio] = useState(false);
  const [filterKey, setFilterKey]=useState(1)


  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then((stockData) => {
        setStocks(stockData)
        const unchangeableData=stockData
        resetStocksToFullList(unchangeableData)
      });
  }, []);


  function resetStocksToFullList(unchangeableData){
    console.log(unchangeableData)
    setStocks(unchangeableData)
  }
  
  function handleStockFiltering(sortedArray){
   setStocks([...sortedArray])
  }
  function handleStockFilteringByCategory(filteredByCategoryArray){
    setStocks([...filteredByCategoryArray])
  }
  function updateFilterKey(filterKey){
    console.log(filterKey)
    setFilterKey( filterKey => filterKey + 1)
  }

  return (
    <div>
          <SearchBar 
            stocks={stocks}
            filterKey={filterKey}
            updateFilterKey={updateFilterKey}
            setStocks={setStocks}
            resetStocksToFullList={resetStocksToFullList}
            handleStockFiltering={handleStockFiltering}
            handleStockFilteringByCategory={handleStockFilteringByCategory}
          />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={stocks}
            setStocks={setStocks}
            portfolioCardArray={portfolioCardArray}
            setPortfolioCardArray={setPortfolioCardArray}
            isInPortfolio={isInPortfolio}
            setIsInPortfolio={setIsInPortfolio}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            stocks={stocks}
            portfolioCardArray={portfolioCardArray}
            setPortfolioCardArray={setPortfolioCardArray}
            isInPortfolio={isInPortfolio}
            setIsInPortfolio={setIsInPortfolio}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
