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
      <div className="pt-20 space-y-4">
        <MainSection />
        <Apps />
        <Account />
      </div>
    </div>
  );
};
