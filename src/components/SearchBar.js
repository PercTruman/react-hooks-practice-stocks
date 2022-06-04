import React from "react";

function SearchBar({ onChangeFilter, onChangeSortBy}){
  function handleChange(e) {
    onChangeSortBy(e.target.value)
  }

  function handleFilterChange(e) {
    onChangeFilter(e.target.value)
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
        <select  onChange={handleFilterChange}>
          <option value = "(No Selection)">No Selection</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
