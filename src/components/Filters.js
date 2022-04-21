import React, { useState } from "react";
import classes from "./styles/Filters.module.css";

const Filters = ({ data }) => {
  const [filter, setFilter] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setFilter({
      sorting: e.target[0].value,
      name: e.target[1].value,
      from: e.target[2].value,
      to: e.target[3].value,
    });
  };

  // data = ALL FETCHED COINS array
  // filter = object of applied filters

  return (
    <>
      <form onSubmit={submitHandler} className={classes["filter-form"]}>
        <h1>Apply Filters</h1>
        <select name="sorting" id="sorting">
          <option value="DEFAULT" disabled>
            Sort By
          </option>
          <option value="descending">Price Descending</option>
          <option value="ascending">Price Ascending</option>
        </select>
        <input placeholder="Name / Symbol" />
        <input placeholder="Price from >" type="number" min="0" />
        <input placeholder="< Price to" type="number" />
        <button type="submit">Dive in</button>
      </form>
    </>
  );
};

export default Filters;
