import React from "react";
import classes from "./styles/SumInfo.module.css";

const SumInfo = () => {
  return (
    <>
      <container className={classes.container}>
        <div className={classes.sum}>
          Market Capitalization<span>$29,560,000</span>
        </div>
        <div className={classes.sum}>
          24h Trading Volume<span>$239,630,000</span>
        </div>
        <div className={classes.sum}>
          # of Coins<span>8,850</span>
        </div>
      </container>
    </>
  );
};

export default SumInfo;
