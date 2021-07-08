import React, { useState } from "react";

function SearchBar({
  handelFilterChange,
  handleNameSort,
  handlePriceSort,
  // priceSort,
}) {
  const [nameSort, setNameSort] = useState(false);
  const [priceSort, setPriceSort] = useState(false);

  const handleSort = (e) => {
    if (e.target.value === "Alphabetically") {
      handleNameSort();
      setNameSort(e.target.checked);
      setPriceSort(false);
    } else if (e.target.value === "Price") {
      handlePriceSort();
      setPriceSort(e.target.checked);
      setNameSort(false);
    }
  };

  console.log(priceSort, nameSort);

  return (
    <div>
      <strong>Sort by:</strong>
      <div>
        <label>
          <input
            type="checkbox"
            value="Alphabetically"
            name="sortName"
            checked={nameSort}
            onChange={handleSort}
          />
          Alphabetically
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="Price"
            name="sortPrice"
            checked={priceSort}
            onChange={handleSort}
          />
          Price
        </label>
      </div>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handelFilterChange}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
