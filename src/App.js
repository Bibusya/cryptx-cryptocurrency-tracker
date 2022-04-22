import React, { useState, useEffect } from "react";

import axios from "axios";
import Title from "./components/Title";

import CoinsMarket from "./components/CoinsMarket";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [filteres, setFilteres] = useState({});
  const filterHandler = (appliedFilters) => {
    setFilteres(appliedFilters);
  };

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"
        )
        .then((res) => {
          setCoins(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

  return (
    <>
      <Title />
      <section>
        {coins.length > 0 && (
          <CoinsMarket fetchedCoins={coins} onFilter={filterHandler} />
        )}
      </section>
    </>
  );
};

export default App;
