import React from "react";
import classes from "./styles/Coin.module.css";

const Coin = ({
  rank,
  name,
  image,
  symbol,
  price,
  volume,
  hour,
  day,
  sevenDay,
  capitalization,
}) => {
  return (
    <>
      <div className={classes["coin-container"]}>
        <div className={classes["coin-row"]}>
          <div className={classes.coin}>
            <p className={classes.rank}>{rank}</p>
            <img src={image} alt="crypto logo" />
            <h1>{name}</h1>
            <p className={classes["coin-symbol"]}>{symbol}</p>
          </div>
          <div className={classes["coin-data"]}>
            <p className={classes["coin-price"]}>$ {price}</p>
            <p className={classes["1h"]}>
              {hour.toLocaleString(undefined, {
                style: "percent",
              })}
            </p>
            <p className={classes["24h"]}>
              {day.toLocaleString(undefined, {
                style: "percent",
              })}
            </p>
            <p className={classes["7d"]}>
              {sevenDay.toLocaleString(undefined, {
                style: "percent",
              })}
            </p>
            <p className={classes["coin-volume"]}>
              $ {volume.toLocaleString()}
            </p>
            <p className={classes["mkt-cap"]}></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coin;
