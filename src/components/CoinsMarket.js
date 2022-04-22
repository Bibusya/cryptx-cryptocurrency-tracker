import React, { useState } from "react";
import Filters from "./Filters";
import SumInfo from "./SumInfo";
import Coin from "./Coin";
import Description from "./Description";
import classes from "./styles/CoinMarket.module.css";

const CoinsMarket = ({ fetchedCoins, onFilter }) => {
  const [nameSearch, setNameSearch] = useState("");
  //name
  const nameFilterHandler = (name) => {
    setNameSearch(name);
  };
  //sorting
  const sortingFilterHandler = (sorting) => {
    console.log(sorting);
  };
  //From
  const fromFilterHandler = (from) => {
    console.log(from);
  };
  //To
  const toFilterHandler = (to) => {
    console.log(to);
  };

  const filteredCoins = fetchedCoins.filter((coin) => {
    return (
      coin.name.toLowerCase().indexOf(nameSearch) >= 0 ||
      coin.symbol.indexOf(nameSearch) == 0
    );
  });

  return (
    <>
      <section>
        <div>
          <SumInfo data={filteredCoins} />
        </div>
        <div>
          <div className={classes.card}>
            <Filters
              data={fetchedCoins}
              onNameFilter={nameFilterHandler}
              onSortingFilter={sortingFilterHandler}
              onFromFilter={fromFilterHandler}
              onToFilter={toFilterHandler}
            />
            <Description />
            {filteredCoins.map((coin) => {
              return (
                <Coin
                  key={coin.id}
                  rank={coin.market_cap_rank}
                  name={coin.name}
                  price={coin.current_price}
                  image={coin.image}
                  symbol={coin.symbol}
                  volume={coin.market_cap}
                  dayVolume={coin.total_volume}
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
