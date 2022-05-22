import {
  SearchOutlined,
  BellOutlined,
  MessageOutlined,
  DownOutlined,
  PlusOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layouts } from "interfaces/Layouts";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export function AdminNav({ children }: Layouts) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hoverdDash, setHoverdDash] = useState<boolean>(false);
  const [hoverdPlus, setHoverdPlus] = useState<boolean>(false);
  const [hoverdChat, setHoverdChat] = useState<boolean>(false);
  const [hoverdSett, setHoverdSett] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-PureGrey">
      <div className="bg-white h-[70px] flex  justify-between">
        <div className="flex space-x-10 w-1/2">
          <div className="bg-gray-400 w-28">
            <h1>Logo here</h1>
          </div>
          <div className="w-2/5 flex items-center relative">
            <input
              type="text"
              placeholder="Search for new Clients etc..."
              className="w-full py-3 bg-gray-100 px-14 font-poppins outline-none rounded"
            />
            <SearchOutlined className="absolute left-4 top-4.1 text-xl text-gray-500" />
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
                <li className="w-full bg-white py-2 px-4 hover:bg-gray-100 hover:duration-700 cursor-pointer">
                  <a className="font-poppins">Logout</a>
                </li>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-28 h-[907px] flex flex-col items-center bg-white">
          <div className=" mt-10 space-y-6 w-full flex flex-col items-center py-2">
            <div className="relative flex items-center ">
              <Link href="/Admin/dashboard" passHref>
                <div
                  className="px-8 bg-white py-3 rounded flex items-center hover:bg-gray-200 hover:duration-700 cursor-pointer"
                  onMouseOver={() => setHoverdDash(true)}
                  onMouseOut={() => setHoverdDash(false)}
                >
                  <Image
                    src="/images/icons/dashboard-5481.svg"
                    width="20"
                    height="20"
                    alt="idk"
                    className=""
                  />
                </div>
              </Link>
              {hoverdDash ? (
                <li className="absolute list-none w-40 text-center py-2 bg-white shadow-xl hover:bg-gray-200 hover:duration-700 left-[6.2rem] rounded cursor-pointer font-poppins text-sm">
                  Dashboard
                </li>
              ) : (
                ""
              )}
            </div>
            <div className="relative flex items-center ">
              <Link href="/Admin/user" passHref>
                <div
                  className="w-20 bg-white  py-2 rounded flex hover:text-blue-700 items-center justify-center hover:bg-gray-100 hover:duration-700 cursor-pointer"
                  onMouseOver={() => setHoverdPlus(true)}
                  onMouseOut={() => setHoverdPlus(false)}
                >
                  <PlusOutlined className="text-gray-400 text-lg" />
                </div>
              </Link>
              {hoverdPlus ? (
                <li className="absolute list-none w-40 text-center py-2 bg-white shadow-xl hover:bg-gray-200 hover:duration-700 left-[6.1rem] rounded cursor-pointer font-poppins text-sm">
                  Add users
                </li>
              ) : (
                ""
              )}
            </div>
            <div className="relative flex items-center ">
              <Link href="/Admin/chat" passHref>
                <div
                  className="w-20 bg-white  py-2 rounded flex hover:text-blue-700 items-center justify-center hover:bg-gray-100 hover:duration-700 cursor-pointer"
                  onMouseOver={() => setHoverdChat(true)}
                  onMouseOut={() => setHoverdChat(false)}
                >
                  <MessageOutlined className="text-gray-400 text-lg" />
                </div>
              </Link>
              {hoverdChat ? (
                <li className="absolute list-none w-40 text-center py-2 bg-white shadow-xl hover:bg-gray-100 hover:duration-700 left-[6.1rem] rounded cursor-pointer font-poppins text-sm">
                  Chat
                </li>
              ) : (
                ""
              )}
            </div>
            <div className="relative flex items-center ">
              <Link href="/Admin/settings" passHref>
                <div
                  className="w-20 bg-white  py-2 rounded flex hover:text-blue-700 items-center justify-center hover:bg-gray-100 hover:duration-700 cursor-pointer"
                  onMouseOver={() => setHoverdSett(true)}
                  onMouseOut={() => setHoverdSett(false)}
                >
                  <SettingOutlined className="text-gray-400 text-lg" />
                </div>
              </Link>
              {hoverdSett ? (
                <li className="absolute list-none w-40 text-center py-2 bg-white shadow-xl hover:bg-gray-100 hover:duration-700 left-[6.1rem] rounded cursor-pointer font-poppins text-sm">
                  Settings
                </li>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}

{
  /* <SettingOutlined />} */
}
