import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCoinData, fetchCoinData } from "../actions/CoinActions";
import TableHeader from "./TableHeader";
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

  // Fetch coin data from the API on load and when the watchList or currency changes
  useEffect(() => {
    if (watchList.length > 0) {
      dispatch(fetchCoinData(currency, watchList, sorting));
    } else {
      dispatch(setCoinData([]));
    }
    // Disable missing dependency error (sorting) since we dont want to fetch data again when we sort
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchList, currency, dispatch]);

  // Sort the data when sorting settings change
  useEffect(() => {
    dispatch(setCoinData(data, sorting));
    // Disable missing dependency error (data) since setCoinData is updating data, and it will cause a loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sorting, dispatch]);

  return (
    <section className="container bg-gray-300 w-full rounded-t-md p-2 relative">
      <Options />

      {/* Table header */}
      <TableHeader />

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
