import React from "react";
import { IoClose } from "react-icons/io5";

const Coin = () => {
  return (
    <article className="grid grid-cols-3 md:grid-cols-5 bg-white w-full h-14 px-4 rounded-md mb-2 place-items-center relative group">
      {/* Coin image & symbol */}
      <div className="grid grid-cols-2 place-items-center">
        {/* <img  className="w-8 h-8 mr-3" /> */}
        <p className="uppercase font-semibold justify-self-start">symbol</p>
      </div>

      {/* Price */}
      <p>price</p>

      {/* 24h change */}
      <p>+/- change</p>

      {/* 24h volume */}
      <p className="hidden md:block ">volume</p>

      {/* Market cap */}
      <p className="hidden md:block ">market cap</p>

      {/* Delete coin button */}
      <IoClose className="opacity-0 absolute top-0 right-0 text-red-500 text-lg cursor-pointer group-hover:opacity-100" />
    </article>
  );
};

export default Coin;
