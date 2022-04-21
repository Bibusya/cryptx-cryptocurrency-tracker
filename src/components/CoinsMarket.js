import React, { useState } from "react";
import Filters from "./Filters";
import SumInfo from "./SumInfo";
import Coin from "./Coin";
import classes from "./styles/CoinMarket.module.css";

const CoinsMarket = (props) => {
  const fetchedCoins = props.data;
  console.log(fetchedCoins);
  return (
    <>
      <section>
        <div>
          <SumInfo />
          <Filters fetchedCoins={props.data} />
        </div>
        <div className={classes.description}>
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>1h</p>
          <p>24h</p>
          <p>7d</p>
          <p>24h Volume</p>
          <p>Mkt Cap</p>
        </div>
        <div>
          {fetchedCoins.map((coin) => {
            return (
              <Coin
                key={coin.id}
                rank={coin.market_cap_rank}
                name={coin.name}
                price={coin.current_price}
                image={coin.image}
                symbol={coin.symbol}
                volume={coin.market_cap}
                hour={coin.price_change_percentage_1h_in_currency}
                day={coin.price_change_percentage_24h_in_currency}
                sevenDay={coin.price_change_percentage_7d_in_currency}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CoinsMarket;
