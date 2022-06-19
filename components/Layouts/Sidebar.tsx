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
    <div className={Mobile ? "bg-white absolute left-[6rem] z-10 min-h-screen space-y-4" : "bg-white w-[320px] -z-10 h-screen space-y-4"}>
      <Logo />
      <div className="pt-4 space-y-4">
      <div className="space-y-4">
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
    </div>
  );
};
