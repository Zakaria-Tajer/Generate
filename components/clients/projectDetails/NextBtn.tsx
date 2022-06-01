import React from "react";
import { useDispatch } from "react-redux";
import { NavigateNextItems } from "slices/ProjectSlice";
import { AppDispatch } from "store/store";

export const NextBtn = () => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <button
      className="w-44 rounded text-white font-poppins py-2 bg-Teal"
      onClick={() => dispatch(NavigateNextItems({ nextItems: true }))}
    >
      Next
    </button>
  );
};
