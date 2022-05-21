import React, { FC, useState } from "react";

import {
  HeartOutlined,
  BellOutlined,
  SearchOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
export const InfoSection: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full bg-white h-32 flex justify-between">
      <div className="flex bg-gray-400 w-1/4 items-center justify-center space-x-2">
        <div className="w-24 h-24 rounded-full bg-white mr-3"></div>
        <h1 className="font-poppins text-xl">Dianne Vanhorn</h1>
        <div className="w-4 h-4 rounded-full bg-green-600"></div>
      </div>
      <div className="bg-purple-400 px-10 flex items-center space-x-6">
        <SearchOutlined className="text-3xl" />
        <HeartOutlined className="text-3xl" />
        <BellOutlined className="text-3xl" />
      </div>
    </div>
  );
};
