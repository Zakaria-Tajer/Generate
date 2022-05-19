/* eslint-disable @next/next/no-img-element */
import React, { FC, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faMessage,
  faEnvelope,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import { PoweroffOutlined } from "@ant-design/icons";
import { UserContext } from "context/AuthContext";
import { useMediaQuery } from "react-responsive";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RooteState } from "store/store";

export const Navbar: FC = () => {
  const Mobile = useMediaQuery({ query: "(max-width: 425px)" });
  const Tablet = useMediaQuery({ query: "(max-width: 768px)" });
  const router = useRouter();

  const Logout = () => {
    Cookies.remove("token");
    router.reload();
  };
  
  const data = useSelector((state:RooteState)=> state.Data)
  return (
    <div className="flex">
      <div className="flex items-center space-x-6 ml-3 w-1/2">
        <FontAwesomeIcon icon={faListCheck} className=" text-lg" />
        <FontAwesomeIcon icon={faMessage} className=" text-lg" />
        <FontAwesomeIcon icon={faEnvelope} className=" text-lg" />
        <FontAwesomeIcon icon={faCalendarDay} className=" text-lg" />
      </div>

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
                ? "w-44 h-[65px] flex ml-auto items-center"
                : "bg-white rounded-md w-44 h-[65px] flex items-center md:ml-auto"
            }
          >
            <div className="ml-auto">
              <h1 className="font-poppins">
                {data.fName} {data.lName}
              </h1>
              <p className="font-poppins">Active</p>
            </div>
            <div className="w-14 h-14 bg-gray-400 rounded-full ml-auto mr-2">
              <img
                src={`http://localhost:8000/uploads/${data.img}`}
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
