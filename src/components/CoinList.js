import React from "react";
import Coin from "./Coin";

const CoinList = () => {
  return (
    <section className="container bg-gray-300 w-full rounded-md p-2 relative">
      {/* Coin list header */}
      <div className="grid grid-cols-3 md:grid-cols-5 place-items-center font-semibold mb-2  bg-gray-700 text-white w-full py-2 px-4 rounded-md">
        <p className="">Coin</p>
        <p>Price</p>
        <p className="">24h Change</p>
        <p className="hidden md:block">24h Volume</p>
        <p className="hidden md:block">Market Cap</p>
      </div>

      {/* Coins */}
      <Coin />
    </section>
  );
};

export default CoinList;
