import React, { useEffect, useState } from "react";
import classes from "./styles/Coin.module.css";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  dayVolume,
  hourPriceChange,
  dayPriceChange,
  sevenDayPriceChange,
}) => {
  return (
    <>
      <div className={classes["coin-container"]}>
        <div className={classes["coin-row"]}>
          <div className={classes.coin}>
            <li className={classes.rank} />

            <img src={image} alt="crypto logo" />
            <h1>{name}</h1>
            <p className={classes["coin-symbol"]}>{symbol}</p>
          </div>
          <div className={classes["coin-data"]}>
            <p className={classes["coin-price"]}>$ {price.toLocaleString()}</p>
            {hourPriceChange < 0 ? (
              <p className={classes["price-changed-red"]}>
                {hourPriceChange.toFixed(2)} %
              </p>
            ) : (
              <p className={classes["price-changed-green"]}>
                {hourPriceChange.toFixed(2)} %
              </p>
            )}

            {dayPriceChange < 0 ? (
              <p className={classes["price-changed-red"]}>
                {dayPriceChange.toFixed(2)} %
              </p>
            ) : (
              <p className={classes["price-changed-green"]}>
                {dayPriceChange.toFixed(2)} %
              </p>
            )}
            {sevenDayPriceChange < 0 ? (
              <p className={classes["price-changed-red"]}>
                {sevenDayPriceChange.toFixed(2)} %
              </p>
            ) : (
              <p className={classes["price-changed-green"]}>
                {sevenDayPriceChange.toFixed(2)} %
              </p>
            )}

            <p className={classes["coin-volume"]}>
              $ {dayVolume.toLocaleString()}
            </p>
            <p className={classes["mkt-cap"]}>$ {volume.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coin;
