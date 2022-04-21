import React, { useState, useEffect } from "react";

import axios from "axios";
import Title from "./components/Title";
import SumInfo from "./components/SumInfo";
import Filters from "./components/Filters";
import CoinsMarket from "./components/CoinsMarket";

const App = () => {
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Title />
      <section>
        <SumInfo />
        <CoinsMarket />
      </section>
    </>
  );
};

export default App;
