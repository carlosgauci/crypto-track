import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCoinData, fetchCoinData, setSorting } from "../actions/CoinActions";
import Coin from "./Coin";
import Options from "./Options";
import Loader from "./Loader";

const CoinList = () => {
  const watchList = useSelector((state) => state.tracking);
  const data = useSelector((state) => state.coinData);
  const currency = useSelector((state) => state.currency);
  const loading = useSelector((state) => state.loading);
  const sorting = useSelector((state) => state.sorting);
  const dispatch = useDispatch();

  // Fetch coin data from the CoinGecko API on load and when the watchList changes
  useEffect(() => {
    if (watchList.length > 0) {
      dispatch(fetchCoinData(currency, watchList, sorting));
    } else {
      dispatch(setCoinData([]));
    }
  }, [watchList, currency, dispatch]);

  // Sort the data when sorting settings change
  useEffect(() => {
    dispatch(setCoinData(data, sorting));
  }, [sorting, dispatch]);

  return (
    <section className="container bg-gray-300 w-full rounded-t-md p-2 relative">
      <Options />

      {/* Coin list header */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center font-semibold mb-2  bg-gray-700 text-white w-full py-2 px-4 rounded-md">
        <p onClick={() => dispatch(setSorting("symbol", !sorting.order))}>
          Coin
        </p>
        <p
          onClick={() => dispatch(setSorting("current_price", !sorting.order))}
        >
          Price
        </p>
        <p
          onClick={() =>
            dispatch(setSorting("price_change_percentage_24h", !sorting.order))
          }
        >
          24h Change
        </p>
        <p
          className="hidden lg:block"
          onClick={() => dispatch(setSorting("total_volume", !sorting.order))}
        >
          24h Volume
        </p>
        <p
          className="hidden md:block"
          onClick={() => dispatch(setSorting("market_cap", !sorting.order))}
        >
          Market Cap
        </p>
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
