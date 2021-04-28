import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCoinData, fetchCoinData } from "../actions/CoinActions";
import Coin from "./Coin";
import Options from "./Options";
import Loader from "./Loader";

const CoinList = () => {
  const watchList = useSelector((state) => state.tracking);
  const data = useSelector((state) => state.coinData);
  const currency = useSelector((state) => state.currency);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  // Fetch coin data from the CoinGecko API on load and when the watchList changes
  useEffect(() => {
    if (watchList.length > 0) {
      dispatch(fetchCoinData(currency, watchList));
    } else {
      dispatch(setCoinData([]));
    }
  }, [watchList, currency, dispatch]);

  return (
    <section className="container bg-gray-300 w-full rounded-md p-2 relative">
      <Options />

      {/* Coin list header */}
      <div className="grid grid-cols-3 md:grid-cols-5 place-items-center font-semibold mb-2  bg-gray-700 text-white w-full py-2 px-4 rounded-md">
        <p className="">Coin</p>
        <p>Price</p>
        <p className="">24h Change</p>
        <p className="hidden md:block">24h Volume</p>
        <p className="hidden md:block">Market Cap</p>
      </div>

      {/* Coins */}
      {data.map((coin) => (
        <Coin key={coin.id} coin={coin} />
      ))}

      {/* Loader */}
      {loading && <Loader />}
    </section>
  );
};

export default CoinList;
