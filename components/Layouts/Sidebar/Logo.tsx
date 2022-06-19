import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { LeftOutlined } from "@ant-design/icons";
import { AppDispatch } from "store/store";
import { ToggleBar } from "slices/switchSlice";
import { useMediaQuery } from "react-responsive";

export const Logo = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const Toggle = () => {
    dispatch(ToggleBar(true));
  };
  const Devices = useMediaQuery({ query: "(max-width: 425px)" });

  return (
    <div className=" h-28 relative flex items-center">
      {Devices ? (
        <div
          className="w-8 h-8 -right-4 top-2 cursor-pointer absolute rounded-full flex items-center justify-center bg-white"
          onClick={Toggle}
        >
          <LeftOutlined className="" />
        </div>
      ) : (
        ""
      )}
      <img src="/Gener8.png" className="w-full h-[12rem] translate-y-10 object-cover"/>
    </div>
  );
};
