import React from "react";

const FilterBox = ({ filter, onFilterChange }) => {
  return (
    <input
      type="text"
      placeholder="Filter users by name"
      value={filter}
      onChange={onFilterChange}
    />
  );
};

export default FilterBox;
