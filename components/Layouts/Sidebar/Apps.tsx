import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store/store";
import { Composing } from "slices/switchSlice";

export const Apps: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const Compose = () => {
    dispatch(Composing(true));
  };
  return (
    <ul className="space-y-3 flex items-center flex-col justify-center">
      <li className="flex items-center w-72 rounded-md px-16 cursor-pointer text-gray-400 hover:bg-gray-400/25 hover:text-blue-700 hover:duration-700">
        <FontAwesomeIcon icon={faMessage} className="mr-3 text-lg" />
        <a className="font-poppins text-lg py-3">Chat</a>
      </li>

      <li
        className="flex items-center w-72 rounded-md px-16 cursor-pointer text-gray-400 hover:bg-gray-400/25 hover:text-blue-700 hover:duration-700"
        onClick={Compose}
      >
        <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-lg" />
        <a className="font-poppins text-lg py-3">Email</a>
      </li>
    </ul>
  );
};
