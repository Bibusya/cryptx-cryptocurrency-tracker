import React from "react";
import Filters from "./Filters";
import classes from "./CoinMarket.module.css";

const CoinsMarket = () => {
  return (
    <>
      <section>
        <div>
          <Filters />
        </div>
        <div className={classes["coin-app"]}></div>
      </section>
    </>
  );
};

export default CoinsMarket;
