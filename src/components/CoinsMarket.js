import React, { useState } from "react";
import Filters from "./Filters";
import SumInfo from "./SumInfo";
import Coin from "./Coin";
import classes from "./styles/CoinMarket.module.css";

const CoinsMarket = (props) => {
  const { data } = props;
  return (
    <>
      <section>
        <div>
          <Filters data={data} />
          <SumInfo data={data} />
        </div>
        <div>
          <div className={classes.card}>
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
            {data.map((coin) => {
              return (
                <Coin
                  key={coin.id}
                  rank={coin.market_cap_rank}
                  name={coin.name}
                  price={coin.current_price}
                  image={coin.image}
                  symbol={coin.symbol}
                  volume={coin.market_cap}
                  dayVolume={coin.high_24h}
                  hourPriceChange={coin.price_change_percentage_1h_in_currency}
                  dayPriceChange={coin.price_change_percentage_24h_in_currency}
                  sevenDayPriceChange={
                    coin.price_change_percentage_7d_in_currency
                  }
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CoinsMarket;
