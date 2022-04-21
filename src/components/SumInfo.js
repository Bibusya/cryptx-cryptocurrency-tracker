import React, { useState, useEffect } from "react";
import classes from "./styles/SumInfo.module.css";

const SumInfo = ({ data }) => {
  const [numCoins, setNumCoins] = useState("");
  const [marketCap, setMarketCap] = useState("");
  const [totalVolume, setTotalVolume] = useState("");
  let capSum = 0;
  let volSum = 0;

  for (let i = 0; i < data.length; i++) {
    capSum = +data[i].market_cap;
    volSum = +data[i].total_volume;
  }

  useEffect(() => {
    setNumCoins(data.length);
    setMarketCap(capSum);
    setTotalVolume(volSum);
  }, []);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.sum}>
          Market Capitalization<span>$ {marketCap.toLocaleString()}</span>
        </div>
        <div className={classes.sum}>
          24h Trading Volume<span>$ {totalVolume.toLocaleString()}</span>
        </div>
        <div className={classes.sum}>
          # of Coins<span>{numCoins}</span>
        </div>
      </div>
    </>
  );
};

export default SumInfo;
