import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSorting } from "../actions/CoinActions";
import headings from "../constants/tableHeadings";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const TableHeader = () => {
  const sorting = useSelector((state) => state.sorting);
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center font-semibold mb-2  bg-gray-700 text-white w-full py-2 px-4 rounded-md">
      {headings.map((heading, i) => (
        <p
          key={heading.key}
          onClick={() => dispatch(setSorting(heading.key, !sorting.order))}
          className={`flex items-center cursor-pointer ${
            i === 3 && "hidden lg:flex"
          } ${i === 4 && "hidden md:flex "}`}
        >
          {heading.name}
          {sorting.heading === heading.key && !sorting.order && (
            <AiFillCaretDown className="ml-1 text-xs" />
          )}
          {sorting.heading === heading.key && sorting.order && (
            <AiFillCaretUp className="ml-1 text-xs" />
          )}
        </p>
      ))}
    </div>
  );
};

export default TableHeader;
