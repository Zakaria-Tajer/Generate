import React, { FC } from "react";
import { HomeOutlined } from "@ant-design/icons";

export const MainSection: FC = () => {
  return (
    <div className="h-56 bg-purple-400 pt-7">
      <ul className="space-y-1">
        <li className="flex items-center rounded-md px-16 cursor-pointer hover:text-white hover:duration-700 bg-gradient-to-r hover:from-indigo-700 hover:via-indigo-500 hover:to-indigo-400 ">
          <HomeOutlined className="mr-3 text-lg mb-2" />
          <a className="font-poppins text-lg py-3">Dashboard</a>
        </li>
        <li className="flex items-center rounded-md px-16 cursor-pointer hover:text-white hover:duration-700 bg-gradient-to-r hover:from-indigo-700 hover:via-indigo-500 hover:to-indigo-400 ">
          <HomeOutlined className="mr-3 text-lg mb-2" />
          <a className="font-poppins text-lg py-3">Dashboard</a>
        </li>
        <li className="flex items-center rounded-md px-16 cursor-pointer hover:text-white hover:duration-700 bg-gradient-to-r hover:from-indigo-700 hover:via-indigo-500 hover:to-indigo-400 ">
          <HomeOutlined className="mr-3 text-lg mb-2" />
          <a className="font-poppins text-lg py-3">Dashboard</a>
        </li>
      </ul>
    </div>
  );
};
