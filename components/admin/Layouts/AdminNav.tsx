import {
  PlusOutlined,
  BellOutlined,
  MessageOutlined,
  DownOutlined,
  UserOutlined,
  SettingOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Layouts } from "interfaces/Layouts";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RooteState } from "store/store";
import { Notifications } from "../Notifications";
import { AddUsers, showNotifications } from "slices/filterSlice";
import { AddMultiUsers } from "../AddMultiUsers";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export function AdminNav({ children }: Layouts) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const notified = useSelector(
    (state: RooteState) => state.UsersFiltiring.Notifications
  );

  const AddingUsers = useSelector(
    (state: RooteState) => state.UsersFiltiring.AddUser
  );

  const Logout = () => {
    Cookies.remove('token')
    router.push('/Admin')
  };
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="min-h-screen bg-PureGrey">
      <div className="bg-white h-[70px] flex  justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-gray-400 w-28">
            <h1>Logo here</h1>
          </div>
          <div className="pl-10 flex">
            <Link href="/Admin/dashboard" passHref>
              <div className="cursor-pointer space-x-2 px-10 py-2.5 rounded-md  hover:duration-700 hover:bg-gray-200/75 flex">
                <Image
                  src="/images/icons/dashboard-5481.svg"
                  width="20"
                  height="20"
                  alt="idk"
                  className="pr-2"
                />
                <h1 className="font-poppins">Dashboard</h1>
              </div>
            </Link>
            <Link href="/Admin/user" passHref>
              <div className="cursor-pointer space-x-2 w-44  py-2.5 rounded-md  hover:duration-700 hover:bg-gray-200/75 flex items-center justify-center">
                <UserOutlined className="text-gray-500 " />
                <h1 className="font-poppins">Users</h1>
              </div>
            </Link>
            <Link href="/Admin/chat" passHref>
              <div className="cursor-pointer space-x-2 px-10 py-2.5 rounded-md  hover:duration-700 hover:bg-gray-200/75 flex items-center justify-center">
                <MessageOutlined className="text-gray-500" />
                <h1 className="font-poppins">Chat</h1>
              </div>
            </Link>
            <Link href="/Admin/settings" passHref>
              <div className="cursor-pointer space-x-2 px-10 py-2.5 rounded-md  hover:duration-700 hover:bg-gray-200/75 flex items-center justify-center">
                <SettingOutlined className="text-gray-500" />
                <h1 className="font-poppins">Settings</h1>
              </div>
            </Link>
            <div
              className="cursor-pointer space-x-2 px-10 py-2.5 rounded-md  hover:duration-700 hover:bg-gray-200/75 flex items-center justify-center"
              onClick={() =>
                dispatch(showNotifications({ Notifications: true }))
              }
            >
              <NotificationOutlined className="text-gray-500" />
              <h1 className="font-poppins">notifications</h1>
            </div>
            <div
              className="cursor-pointer space-x-2 w-44 py-2.5 rounded-md  hover:duration-700 hover:bg-gray-200/75 flex items-center justify-center"
              onClick={() => dispatch(AddUsers({ AddUser: true }))}
            >
              <PlusOutlined className="text-gray-500" />
              <h1 className="font-poppins">Add users</h1>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-end space-x-4">
          <div className="relative w-8">
            <div className="w-3 h-3 rounded-full bg-red-600 absolute right-0"></div>
            <MessageOutlined className="text-gray-500 text-2xl" />
          </div>
          <div className="relative w-8">
            <div className="w-3 h-3 rounded-full bg-red-600 absolute right-0"></div>
            <BellOutlined className="text-gray-500 text-2xl" />
          </div>
          <div className="flex w-44 h-full items-center justify-evenly relative">
            <div className="bg-gray-400 w-14 h-14 rounded-full"></div>
            <DownOutlined
              className="text-gray-500 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
            {isOpen && (
              <div className="bg-gray-400 py-2 w-full right-8 rounded absolute top-[4.4rem] list-none space-y-3">
                <li
                  className="w-full bg-white py-2 px-4 hover:bg-gray-100 hover:duration-700 cursor-pointer"
                  onClick={Logout}
                >
                  <a className="font-poppins">Logout</a>
                </li>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="">
        <AnimatePresence>
          {notified && (
            <motion.div
              exit={{ y: "-100vh", opacity: 0, transition: { duration: 0.6 } }}
              className=""
            >
              <Notifications />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {AddingUsers && (
            <motion.div
              exit={{ y: "-100vh", opacity: 0, transition: { duration: 0.6 } }}
              className=""
            >
              <AddMultiUsers />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="w-full ">{children}</div>
      </div>
    </div>
  );
}

{
  /* <SettingOutlined />} */
}
