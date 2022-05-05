/* eslint-disable @next/next/no-img-element */
import React, { FC, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faMessage,
  faEnvelope,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import { Search } from "./Navbar/Search";
import { UserContext } from "context/AuthContext";
import Image from "next/image";

export const Navbar: FC = () => {
  const { fName, lName, img } = useContext(UserContext);
  // window.btoa
  return (
    <div className="flex">
      <div className="w-1/4 h-[65px] flex space-x-7 items-center pl-8">
        <FontAwesomeIcon icon={faListCheck} className=" text-lg" />
        <FontAwesomeIcon icon={faMessage} className=" text-lg" />
        <FontAwesomeIcon icon={faEnvelope} className=" text-lg" />
        <FontAwesomeIcon icon={faCalendarDay} className=" text-lg" />
      </div>
      <div className="w-3/4 h-[65px] ">
        <div className="relative flex justify-end items-center">
          <Search />
          <div className="bg-white w-44 h-[65px] flex items-center">
            <div className=" ml-auto">
              <h1 className="font-poppins">
                {fName} {lName}
              </h1>
              <p className="font-poppins">Active</p>
            </div>
            <div className="w-14 h-14 bg-gray-400 rounded-full ml-auto mr-2">
              <img
                src={`http://localhost:8000/uploads/${img}`}
                alt="profile"
                className="object-cover rounded-full w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
