import React from "react";
import { SettingOutlined, PoweroffOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store/store";
import { NotificationsHandling } from "slices/ProjectSlice";

export const Account = () => {
  const router = useRouter();
  const Logout = () => {
    Cookies.remove("token");
    router.reload();
  };
  
  const Tablet = useMediaQuery({ query: "(max-width: 768px)" });
  const dispatch: AppDispatch = useDispatch();
  const notificationsBtn = () => {
    dispatch(NotificationsHandling({ Notifiy: true }));
  };
  return (
    <>
      <li
        className="flex items-center w-72 rounded-md mx-auto px-16 cursor-pointer text-gray-400 hover:bg-gray-400/25 hover:text-blue-700 hover:duration-700"
        onClick={notificationsBtn}
      >
        <FontAwesomeIcon icon={faBell} className="mr-3 text-lg " />
        <a className="font-poppins text-lg py-3">Notifications</a>
      </li>

      <li className="flex items-center w-72 rounded-md mx-auto px-16 cursor-pointer text-gray-400 hover:bg-gray-400/25 hover:text-blue-700 hover:duration-700">
        <PoweroffOutlined className="mr-3 text-xl mb-2 cursor-pointer " />
        <a className="font-poppins text-lg py-3 mb-1" onClick={Logout}>
          Logout
        </a>
      </li>
    </>
  );
};
