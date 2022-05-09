import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { CloseOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store/store";
import { Searching } from "slices/switchSlice";

export const SearchRes = () => {
  const dispatch: AppDispatch = useDispatch();
  const close = () => {
    dispatch(Searching(false));
  };
  return (
    <div className="fixed inset-0 bg-gray-400/75 z-10 flex items-center justify-center">
      <CloseOutlined className="absolute right-10 text-xl cursor-pointer top-10" onClick={close}/>
      <div className="bg-white  rounded-md relative">
        <input
          type="text"
          className="w-[28rem] outline-none py-3 px-4 rounded-md border-2 focus:border-blue-600"
          placeholder="Search..."
        />

        {/* <div className="bg-gray-400 space-y-2 absolute top-16 w-full h-28 rounded-b-md">
        <li className="py-1 bg-white mt-2 pl-2 list-none">jeelo</li>
        <li className="py-1 bg-white mt-2 pl-2 list-none">jeelo</li>
        <li className="py-1 bg-white mt-2 pl-2 list-none">jeelo</li>
      </div> */}
      </div>
    </div>
  );
};
