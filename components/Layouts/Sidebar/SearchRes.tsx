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
     
    </div>
  );
};
