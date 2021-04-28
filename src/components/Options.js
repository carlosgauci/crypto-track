import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoinData, setCoinData } from "../actions/CoinActions";
import DropdownMenu from "./DropdownMenu";
import coins from "../constants/coinList";
import currency from "../constants/currencyList";
import { BiRefresh } from "react-icons/bi";

const Options = () => {
  const dispatch = useDispatch();
  const watchList = useSelector((state) => state.tracking);
  const currentCurrency = useSelector((state) => state.currency);

  // Remove the currently watched coins from the list of available coins
  const filteredCoins = coins.filter((coin) => !watchList.includes(coin.id));

  // Remove the currently selected currency from the list of available currencies
  const filteredCurrency = currency.filter(
    (curr) => currentCurrency.name !== curr.id
  );

  // Refresh button click
  const handleRefresh = () => {
    if (watchList.length > 0) {
      dispatch(fetchCoinData(currentCurrency, watchList));
    } else {
      dispatch(setCoinData([]));
    }
  };

  return (
    <section className="mb-2 flex w-full">
      {/* Coin selector */}
      <DropdownMenu name="Add Coin" data={filteredCoins} />

      {/* Currency selector */}
      <DropdownMenu name="Currency" data={filteredCurrency} />

      {/* Refresh button */}
      <button
        onClick={handleRefresh}
        className="px-2 bg-green-500 text-white font-semibold text-2xl rounded-md ml-2 "
      >
        <BiRefresh />
      </button>
    </section>
  );
};

export default Options;
