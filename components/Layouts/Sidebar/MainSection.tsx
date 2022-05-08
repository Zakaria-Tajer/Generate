import React, { FC, useEffect, useState } from "react";
import { HomeOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons";
import Link from "next/link";

export const MainSection: FC = () => {
  const [path, setPath] = useState<string>("");
  useEffect(() => {
    const path = window.location.pathname;
    console.log(path);

    setPath(path);
  }, []);
  return (
    <div className=" pt-7">
      <ul className="space-y-3 flex items-center flex-col justify-center ">
        <Link href="/client" passHref>
          <li className="flex items-center w-72 rounded-md px-16 cursor-pointer text-gray-400 hover:bg-gray-400/25 hover:text-blue-700 hover:duration-700">
            <HomeOutlined className="mr-3 text-lg mb-2" />
            <a className="font-poppins text-lg py-3">Dashboard</a>
          </li>
        </Link>

        <Link href="/client/profile" passHref>
          <li className="flex items-center w-72 rounded-md px-16 cursor-pointer text-gray-400 hover:bg-gray-400/25 hover:text-blue-700 hover:duration-700">
            <UserOutlined className="mr-3 text-lg mb-2" />
            <a className="font-poppins text-lg py-3">Profile</a>
          </li>
        </Link>
      </ul>
    </div>
  );
};
