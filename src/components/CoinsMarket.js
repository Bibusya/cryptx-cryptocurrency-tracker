import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import SumInfo from "./SumInfo";
import Coin from "./Coin";
import Description from "./Description";
import classes from "./styles/CoinMarket.module.css";

const CoinsMarket = ({ fetchedCoins, onFilter }) => {
  const [nameSearch, setNameSearch] = useState("");
  const [sortingSearch, setSortingSearch] = useState("");
  const [fromSearch, setFromSearch] = useState("");
  const [toSearch, setToSearch] = useState("");

  //name
  const nameFilterHandler = (name) => {
    setNameSearch(name);
  };
  //sorting
  const sortingFilterHandler = (sorting) => {
    setSortingSearch(sorting);
  };
  //From
  const fromFilterHandler = (from) => {
    setFromSearch(from);
  };
  //To
  const toFilterHandler = (to) => {
    setToSearch(to);
  };

  console.log(nameSearch);
  //Filtering
  const filteredCoins = fetchedCoins.filter((coin) => {
    return (
      (coin.name.toLowerCase().indexOf(nameSearch) >= 0 ||
        coin.symbol.indexOf(nameSearch) == 0) &&
      coin.current_price > fromSearch &&
      coin.current_price < toSearch
    );
  });

  //Reset ToSearch
  useEffect(() => {
    if (+toSearch <= 0) {
      setToSearch("999999999");
    }
  }, [toSearch]);

  if (sortingSearch === "descending") {
    filteredCoins.sort(function (a, b) {
      return parseFloat(b.current_price) - parseFloat(a.current_price);
    });
  }
  if (sortingSearch === "ascending") {
    filteredCoins.sort(function (a, b) {
      return parseFloat(a.current_price) - parseFloat(b.current_price);
    });
  }

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
            <ol>
              {filteredCoins.map((coin) => {
                return (
                  <Coin
                    key={coin.id}
                    name={coin.name}
                    price={coin.current_price}
                    image={coin.image}
                    symbol={coin.symbol}
                    volume={coin.market_cap}
                    dayVolume={coin.total_volume}
                    hourPriceChange={
                      coin.price_change_percentage_1h_in_currency
                    }
                    dayPriceChange={
                      coin.price_change_percentage_24h_in_currency
                    }
                    sevenDayPriceChange={
                      coin.price_change_percentage_7d_in_currency
                    }
                  />
                );
              })}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoinsMarket;
