import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

const Loader = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-start bg-black bg-opacity-20">
      <div className="flex flex-col items-center bg-blue-600 p-4 rounded-md mt-32">
        <BiLoaderCircle className="text-4xl text-white mb-2 animate-spin-slow" />
        <p className="text-white font-semibold">Loading Data..</p>
      </div>
    </div>
  );
};

export default Loader;
