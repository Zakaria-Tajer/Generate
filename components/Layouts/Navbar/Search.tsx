import React, { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";

export const Search: FC = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  return (
    <div className="mr-3 flex items-center ">
      <div className="mr-10 relative">
        <FontAwesomeIcon icon={faBell} className='text-2xl cursor-pointer'/>
        <div className="w-4 h-4 rounded-full bg-blue-600 absolute -top-1 -right-1 flex items-center justify-center">
          <p className="text-white text-sm">1</p>
        </div>
      </div>
      {showSearch ? (
        <div className="bg-white w-72 rounded h-10 mr-4 absolute right-52">
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-full px-10 outline-none focus:border-blue-600 border-2 rounded font-poppins"
          />
        </div>
      ) : (
        ""
      )}
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="text-2xl cursor-pointer"
        onClick={() => setShowSearch(!showSearch)}
      />
    </div>
  );
};
