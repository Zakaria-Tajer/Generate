import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faMessage,
  faEnvelope,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
export const Apps: FC = () => {
  return (
    <ul className="py-3 space-y-1">
      <li className="flex items-center rounded-md px-16 cursor-pointer hover:text-white hover:duration-700 bg-gradient-to-r hover:from-indigo-700 hover:via-indigo-500 hover:to-indigo-400">
        <FontAwesomeIcon icon={faListCheck} className="mr-3 text-lg" />
        <a className="font-poppins text-lg py-3">Todo</a>
      </li>
      <li className="flex items-center rounded-md px-16 cursor-pointer hover:text-white hover:duration-700 bg-gradient-to-r hover:from-indigo-700 hover:via-indigo-500 hover:to-indigo-400">
        <FontAwesomeIcon icon={faMessage} className="mr-3 text-lg" />
        <a className="font-poppins text-lg py-3">Chat</a>
      </li>
      <li className="flex items-center rounded-md px-16 cursor-pointer hover:text-white hover:duration-700 bg-gradient-to-r hover:from-indigo-700 hover:via-indigo-500 hover:to-indigo-400">
        <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-lg" />
        <a className="font-poppins text-lg py-3">Email</a>
      </li>
      <li className="flex items-center rounded-md px-16 cursor-pointer hover:text-white hover:duration-700 bg-gradient-to-r hover:from-indigo-700 hover:via-indigo-500 hover:to-indigo-400">
        <FontAwesomeIcon icon={faCalendarDay} className="mr-3 text-lg" />
        <a className="font-poppins text-lg py-3">Calendar</a>
      </li>
    </ul>
  );
};
