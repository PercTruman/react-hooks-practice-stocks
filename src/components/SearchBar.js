import React from "react";

function SearchBar({ stocks, setStocks, updateFilterKey,filterKey, handleStockFiltering, handleStockFilteringByCategory, stockData, resetStocksToFullList }) {
  function handleChange(e) {
    e.target.value === "Alphabetically"
      ? sortByName(stocks)
      : sortByPrice(stocks);
  }

    function sortByName(stocks) {
      const stocksSortedByName = stocks.sort((a, b) =>
        a.name < b.name ? -1 : 1
      );
      handleStockFiltering(stocksSortedByName);
    }

    function sortByPrice(stocks) {
      const stocksSortedByPrice = stocks.sort((a, b) =>
        a.price < b.price ? -1 : 1
      );
     handleStockFiltering(stocksSortedByPrice);
    }

  

    function handleFilterChange(e){
      resetStocksToFullList()
      updateFilterKey(filterKey)
      const category = e.target.value
      if (category === "Tech"){
        filterByTech(stocks)
        
      }else if (category === "Sportswear"){
        filterBySportswear(stocks)
        
      }else {
        filterByFinance(stocks)
      }
    }

    function filterByTech(stocks){
      const stocksFilteredByCategory = stocks.filter(stock=>stock.type === "Tech")
      handleStockFilteringByCategory(stocksFilteredByCategory)
    }
    function filterBySportswear(stocks){
      const stocksFilteredByCategory = stocks.filter(stock=>stock.type === "Sportswear")
      handleStockFilteringByCategory(stocksFilteredByCategory)
    }
    function filterByFinance(stocks){
      const stocksFilteredByCategory = stocks.filter(stock=>stock.type === "Finance")
      handleStockFilteringByCategory(stocksFilteredByCategory)
    }
  
     
  
  
    
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={handleChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={handleChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select key={filterKey} onChange={handleFilterChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
