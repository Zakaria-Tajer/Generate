import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { LeftOutlined } from "@ant-design/icons";
import { AppDispatch } from "store/store";
import { ToggleBar } from "slices/switchSlice";

export const Logo = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const Toggle = () => {
    dispatch(ToggleBar(true));
  };
  return (
    <div className="bg-gray-400 h-28 relative">
      <div
        className="w-8 h-8 -right-4 top-2 cursor-pointer absolute rounded-full flex items-center justify-center bg-white"
        onClick={Toggle}
      >
        <LeftOutlined className="" />
      </div>
      <h1>Logo</h1>
    </div>
  );
};
