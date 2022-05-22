import React, { FC, useState } from "react";
import {
  SearchOutlined,
  FilterOutlined,
  DownOutlined,
} from "@ant-design/icons";
export const Filter: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="bg-white w-1/2 mx-auto rounded-md h-16 mt-8 flex">
      <div className="w-1/2 relative flex items-center">
        <SearchOutlined className="absolute left-4 text-xl text-gray-400" />
        <input
          type="text"
          placeholder="Search for users..."
          className="w-3/4 h-full px-14 outline-none rounded "
        />
      </div>
      <div className="ml-auto flex items-center mr-2 rounded">
        <div className="py-2 px-4 relative border-[1px] rounded flex items-center space-x-2">
          <FilterOutlined className="" />
          <h1 className="font-poppins">Filter</h1>
          <DownOutlined
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen && (
            <div className="absolute z-10 w-44 py-2 bg-white shadow-xl list-none space-y-2 top-14 -right-3 rounded">
              <li className="w-full font-poppins hover:bg-gray-200 py-2 px-5 hover:duration-700 cursor-pointer">
                <a>Clients</a>
              </li>
              <li className="w-full font-poppins hover:bg-gray-200 py-2 px-5 hover:duration-700 cursor-pointer">
                <a>Moderators</a>
              </li>
              <li className="w-full font-poppins hover:bg-gray-200 py-2 px-5 hover:duration-700 cursor-pointer">
                <a>Developers</a>
              </li>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
