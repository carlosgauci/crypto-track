import React from "react";
import { useSelector } from "react-redux";
import DropdownMenu from "./DropdownMenu";
import coins from "../constants/coinList";
import currency from "../constants/currencyList";

const Options = () => {
  const watchList = useSelector((state) => state.tracking);
  const currentCurrency = useSelector((state) => state.currency);

  // Remove the currently watched coins from the list of available coins
  const filteredCoins = coins.filter((coin) => !watchList.includes(coin.id));

  // Remove the currently selected currency from the list of available currencies
  const filteredCurrency = currency.filter(
    (curr) => currentCurrency.name !== curr.id
  );

  return (
    <section className="mb-2 flex w-full">
      {/* Coin selector */}
      <DropdownMenu name="Add Coin" data={filteredCoins} />

      {/* Currency selector */}
      <DropdownMenu name="Currency" data={filteredCurrency} />
    </section>
  );
};

export default Options;
