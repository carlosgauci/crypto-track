import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="container flex flex-col items-center bg-gray-900 rounded-b-md rounded-l-mb py-4 text-white md:mb-4">
      <a
        href="https://github.com/carlosgauci/crypto-track"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineGithub className="mb-2 text-3xl" />
      </a>
      <p className="text-xs">
        Powered by React &{" "}
        <a
          href="https://www.coingecko.com/en/api"
          target="_blank"
          rel="noreferrer"
        >
          CoinGecko API
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
