import React from "react";
import classes from "./styles/CoinMarket.module.css";

const Description = () => {
  return (
    <div className={classes["coin-container"]}>
      <div className={classes["coin-row"]}>
        <div className={classes.coin}>
          <p className={classes.rank}>#</p>
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Ic_arrow_drop_down_36px.svg/1200px-Ic_arrow_drop_down_36px.svg.png"
            }
            alt="crypto logo"
          />
          <h1>Coin</h1>
          <p className={classes["coin-symbol"]}>@</p>
        </div>
        <div className={classes["coin-data"]}>
          <p className={classes["coin-price"]}>Price</p>
          <p className={classes["1h"]}>1h</p>
          <p className={classes["24h"]}>24h</p>
          <p className={classes["7d"]}>7d</p>
          <p className={classes["coin-volume"]}>24h Volume</p>
          <p className={classes["mkt-cap"]}>Mkt Cap</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
