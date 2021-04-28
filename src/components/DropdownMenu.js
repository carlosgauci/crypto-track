import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCoin, changeCurrency } from "../actions/CoinActions";
import { useDetectOutsideClick } from "../hooks/useDetectOutsideClick";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const DropdownMenu = ({ name, data }) => {
  // useRef & hook to detect when we click outside of the dropdown
  const dropdownRef = useRef(null);
  const [dropdownActive, setDropdownActive] = useDetectOutsideClick(
    dropdownRef,
    false
  );

  const currency = useSelector((state) => state.currency);
  const dispatch = useDispatch();

  // Item select
  const handleClick = (id, symbol) => {
    if (name === "Add Coin") {
      dispatch(addCoin(id));
      setDropdownActive(false);
    }

    if (name === "Currency") {
      dispatch(changeCurrency(id, symbol));
      setDropdownActive(false);
    }
  };

  return (
    <div className={`relative w-36 h-8 ${name !== "Add Coin" && "ml-2"}`}>
      {/* Dropdown button */}
      <button
        className="bg-indigo-700 w-full h-full rounded font-semibold text-white text-sm flex items-center justify-center"
        onClick={() => setDropdownActive(!dropdownActive)}
      >
        {name} {name === "Currency" && `(${currency.name.toUpperCase()})`}
        {/* Caret arrows */}
        {dropdownActive ? (
          <AiFillCaretDown className="ml-1 text-xs " />
        ) : (
          <AiFillCaretUp className="ml-1 text-xs " />
        )}
      </button>

      {/* Dropdown list */}
      {dropdownActive && (
        <ul
          className="absolute top-10 left-0 w-full bg-blue-600 z-10 rounded-md p-2 text-white flex flex-col items-center"
          ref={dropdownRef}
        >
          {data.map((item) => (
            <li
              key={item.id}
              onClick={() => handleClick(item.id, item.symbol)}
              className="cursor-pointer"
            >
              {name === "Add Coin" && item.name}
              {name === "Currency" && item.name + " " + item.symbol}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
