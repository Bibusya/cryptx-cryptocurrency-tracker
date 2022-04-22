import React, { useEffect, useState } from "react";
import classes from "./styles/Filters.module.css";

const Filters = ({
  onNameFilter,
  onSortingFilter,
  onFromFilter,
  onToFilter,
}) => {
  const [nameFilter, setNameFilter] = useState("");
  const [sortingFilter, setSortingFilter] = useState("descending");
  const [fromFilter, setFromFilter] = useState("");
  const [toFilter, setToFilter] = useState("");
  //Approach 1 - instead of form submission
  //Name Handler
  const nameChangeHandler = (event) => setNameFilter(event.target.value);
  //Sorting Handler
  const sortingFilterHandler = (event) => setSortingFilter(event.target.value);
  //From $ handler
  const fromFilterHandler = (event) => {
    setFromFilter(event.target.value);
  };
  //To $ handler
  const toFilterHandler = (event) => {
    setToFilter(event.target.value);
  };

  useEffect(() => {
    onNameFilter(nameFilter.toLowerCase());
    onSortingFilter(sortingFilter);
    onFromFilter(fromFilter);
    onToFilter(toFilter);
  }, [nameFilter, sortingFilter, fromFilter, toFilter]);

  return (
    <>
      <form className={classes["filter-form"]}>
        <h1>Apply Filters</h1>
        <select
          onChange={sortingFilterHandler}
          value={sortingFilter}
          name="sorting"
          id="sorting"
        >
          <option value="DEFAULT" disabled>
            Sort By
          </option>
          <option value="descending">Mkt Cap ↓</option>
          <option value="ascending">Mkt Cap ↑</option>
        </select>
        <input
          onChange={nameChangeHandler}
          value={nameFilter}
          placeholder="Name / Symbol"
        />
        <input
          onChange={fromFilterHandler}
          placeholder="Price from >"
          type="number"
          min="0"
        />
        <input
          onChange={toFilterHandler}
          placeholder="< Price to"
          type="number"
        />
      </form>
    </>
  );
};

export default Filters;
