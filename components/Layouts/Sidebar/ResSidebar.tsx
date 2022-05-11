import React, { useState } from "react";
import {
  RightOutlined,
  UserOutlined,
  HomeOutlined,
  SettingOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";

import { AppDispatch } from "store/store";
import { Searching, ToggleBar } from "slices/switchSlice";

import {
  faMagnifyingGlass,
  faBell,
  faListCheck,
  faMessage,
  faEnvelope,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RooteState } from "store/store";
import { SearchRes } from "./SearchRes";

const Menu = [
  {
    id: 2,
    title: "Dashboard",
    icon: <HomeOutlined />,
    Link: "/client",
  },
  { id: 3, title: "Profile", icon: <UserOutlined />, Link: "/client/profile" },
  {
    id: 4,
    title: "Todo",
    icon: <FontAwesomeIcon icon={faListCheck} />,
    Link: "",
  },
  {
    id: 5,
    title: "Chat",
    icon: <FontAwesomeIcon icon={faMessage} />,
    Link: "",
  },
  {
    id: 6,
    title: "Email",
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    Link: "",
  },
  {
    id: 7,
    title: "Calendar",
    icon: <FontAwesomeIcon icon={faCalendarDay} />,
    Link: "",
  },
  {
    id: 8,
    title: "Settings",
    icon: <SettingOutlined />,
    Link: "/client/settings",
  },
  {
    id: 9,
    title: "Notifications",
    icon: <FontAwesomeIcon icon={faBell} />,
    Link: "",
  },
];

export const ResSidebar = () => {
  const search = useSelector((state: RooteState) => state.Searched.Search);
  const dispatch: AppDispatch = useDispatch();
  const Toggle = () => {
    dispatch(ToggleBar(false));
  };
  const router = useRouter();
  const Logout = () => {
    Cookies.remove("token");
    router.reload();
  };
  const Search = () => {
    dispatch(Searching(true));
  };
  const Mobile = useMediaQuery({ query: "(max-width: 425px)" });
  return (
    <>
      {search ? <SearchRes /> : ""}

      <div className="bg-white w-24 h-screen space-y-4 ">
        <div className="bg-gray-400 h-28 relative">
          {Mobile ? (
            <div
              className={
                Mobile
                  ? "w-8 h-8 left-20 top-[100%] cursor-pointer absolute rounded-full flex items-center justify-center bg-white"
                  : "w-8 h-8 -right-4 top-2 cursor-pointer absolute rounded-full flex items-center justify-center bg-white"
              }
              onClick={Toggle}
            >
              <RightOutlined className={Mobile ? "" : ""} />
            </div>
          ) : (
            ""
          )}

          <h1>Logo</h1>
        </div>
        <div className="flex flex-col justify-center items-center space-y-6">
          <li
            className="list-none flex relative items-center justify-center text-xl cursor-pointer hover:bg-gray-400/25 hover:text-blue-700 hover:duration-700 text-gray-500 w-[4.7rem] rounded-md py-3"
            onClick={Search}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </li>
          {Menu.map((items) => (
            <>
              <Link href={items.Link} passHref>
                <li
                  key={items.id}
                  className="list-none flex relative items-center justify-center text-xl cursor-pointer hover:bg-gray-400/25 hover:text-blue-700 hover:duration-700 text-gray-500 w-[4.7rem] rounded-md py-3"
                >
                  {items.icon}
                </li>
              </Link>
            </>
          ))}
          <li className="list-none flex relative items-center justify-center text-xl cursor-pointer hover:bg-gray-400/25 hover:text-blue-700 hover:duration-700 text-gray-500 w-[4.7rem] rounded-md py-3">
            <PoweroffOutlined onClick={Logout} />
          </li>
        </div>
      </div>
    </>
  );
};
