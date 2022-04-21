import React from "react";
import classes from "./Filter.module.css";

const Filters = () => {
  return (
    <>
      <form className={classes["filter-form"]}>
        <input placeholder="Search by coin" />
        <input placeholder="Price from (USD) >" type="number" />
        <input placeholder="< Price to" type="number" />
      </form>
    </>
  );
};

export default Filters;
