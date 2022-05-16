import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const SearchAndComposing = () => {
  return (
    <div className="w-96 h-10 ml-2 flex items-center relative">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400 absolute left-3" />
      <input
        type="text"
        className="font-poppins h-8 px-10 outline-none w-full focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        placeholder="Search..."
      />
    </div>
  );
};
