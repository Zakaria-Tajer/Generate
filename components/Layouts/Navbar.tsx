/* eslint-disable @next/next/no-img-element */
import React, { FC, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faMessage,
  faEnvelope,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";

import { UserContext } from "context/AuthContext";
import { useMediaQuery } from "react-responsive";

export const Navbar: FC = () => {
  const Mobile = useMediaQuery({ query: "(max-width: 425px)" });
  const Tablet = useMediaQuery({ query: "(max-width: 768px)" });
  const { fName, lName, img } = useContext(UserContext);

  return (
    <div className="flex">
      {Mobile ? (
        ""
      ) : (
        <div
          className={
            Tablet
              ? "w-11/12 h-[65px] flex space-x-7 items-center pl-8"
              : "w-1/4 h-[65px] flex space-x-7 items-center pl-8"
          }
        >
          <FontAwesomeIcon icon={faListCheck} className=" text-lg" />
          <FontAwesomeIcon icon={faMessage} className=" text-lg" />
          <FontAwesomeIcon icon={faEnvelope} className=" text-lg" />
          <FontAwesomeIcon icon={faCalendarDay} className=" text-lg" />
        </div>
      )}

      <div className={Tablet ? "w-full h-[65px]" : "w-3/4 h-[65px] "}>
        <div
          className={
            Tablet
              ? "relative flex md:ml-6 "
              : "relative flex justify-end items-center"
          }
        >
          <div
            className={
              Mobile
                ? "w-64 h-[65px] flex items-center"
                : "bg-white w-44 h-[65px] flex items-center"
            }
          >
            <div className="ml-auto">
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
