import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faMessage,
  faEnvelope,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const Apps: FC = () => {
  return (
    <ul className="space-y-3 flex items-center flex-col justify-center">
      {/* <li className="flex items-center w-72 rounded-md px-16 cursor-pointer text-gray-400 hover:bg-gray-400/25 hover:text-blue-700 hover:duration-700">
        <FontAwesomeIcon icon={faListCheck} className="mr-3 text-lg" />
        <a className="font-poppins text-lg py-3">Todo</a>
      </li> */}

      <li className="flex items-center w-72 rounded-md px-16 cursor-pointer text-gray-400 hover:bg-gray-400/25 hover:text-blue-700 hover:duration-700">
        <FontAwesomeIcon icon={faMessage} className="mr-3 text-lg" />
        <a className="font-poppins text-lg py-3">Chat</a>
      </li>

      <Link href="/client/email" passHref>
        <li className="flex items-center w-72 rounded-md px-16 cursor-pointer text-gray-400 hover:bg-gray-400/25 hover:text-blue-700 hover:duration-700">
          <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-lg" />
          <a className="font-poppins text-lg py-3">Email</a>
        </li>
      </Link>

      {/* <li className="flex items-center w-72 rounded-md px-16 cursor-pointer text-gray-400 hover:bg-gray-400/25 hover:text-blue-700 hover:duration-700">
        <FontAwesomeIcon icon={faCalendarDay} className="mr-3 text-lg" />
        <a className="font-poppins text-lg py-3">Calendar</a>
      </li> */}
    </ul>
  );
};
