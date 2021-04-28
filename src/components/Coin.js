import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCoin } from "../actions/CoinActions";
import { IoClose } from "react-icons/io5";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Coin = ({
  coin: {
    id,
    symbol,
    name,
    image,
    current_price,
    price_change_percentage_24h: change,
    total_volume,
    market_cap,
  },
}) => {
  const dispatch = useDispatch();

  const currency = useSelector((state) => state.currency.symbol);

  // Remove the coin from the watchList
  const handleRemoveCoin = (e) => {
    dispatch(removeCoin(id));
  };

  return (
    <article className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 bg-white w-full h-14 px-4 rounded-md mt-2 place-items-center relative group">
      {/* Coin image & symbol */}
      <div className="grid grid-cols-2 place-items-center">
        <img src={image} alt={name} className="w-8 h-8 mr-3" />
        <p className="uppercase font-semibold justify-self-start">{symbol}</p>
      </div>

      {/* Price */}
      <p>
        {currency}
        {current_price.toLocaleString()}
      </p>

      {/* 24h change */}
      <p
        className={`flex items-center ${
          change > 0 ? "text-green-600" : "text-red-500"
        }`}
      >
        {change >= 0 ? (
          <AiFillCaretUp className="mr-1" />
        ) : (
          <AiFillCaretDown className="mr-1" />
        )}
        {Math.abs(change).toFixed(2)}%
      </p>

      {/* 24h volume */}
      <p className="hidden lg:block ">
        {currency}
        {total_volume.toLocaleString()}
      </p>

      {/* Market cap */}
      <p className="hidden md:block ">
        {currency}
        {market_cap.toLocaleString()}
      </p>

      {/* Remove coin button */}
      <IoClose
        className="opacity-0 absolute top-0 right-0 text-red-500 text-lg cursor-pointer group-hover:opacity-100"
        onClick={handleRemoveCoin}
      />
    </article>
  );
};

export default Coin;
