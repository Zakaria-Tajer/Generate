import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { MainSection } from "./Sidebar/MainSection";
import { Apps } from "./Sidebar/Apps";
import { Account } from "./Sidebar/Account";
import { useMediaQuery } from "react-responsive";
import { Logo } from "./Sidebar/Logo";

export const Sidebar: FC = () => {
  const Mobile = useMediaQuery({ query: "(max-width: 425px)" });
  return (
    <div className={Mobile ? "bg-white absolute left-[6rem] z-10 h-screen space-y-4" : "bg-white w-[320px] -z-10 h-screen space-y-4"}>
      <Logo />
      <div className=" py-2 flex items-center justify-center relative">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute left-6 text-xl text-gray-500"
        />
        <input
          type="text"
          className="bg-gray-100 w-72 py-[8px] text-gray-600 rounded-md px-10 font-poppins outline-none border-2 focus:border-blue-600"
          placeholder="Search"
        />
      </div>
      <div className="">
        <h1 className="text-xl font-poppins ml-4">Pages</h1>
        <MainSection />
      </div>
      <div className="space-y-4">
        <h1 className="text-xl font-poppins ml-4 ">Apps</h1>
        <Apps />
      </div>
      <div className="space-y-4">
        <h1 className="text-xl font-poppins ml-4 ">Account</h1>
        <Account />
      </div>
    </div>
  );
};
