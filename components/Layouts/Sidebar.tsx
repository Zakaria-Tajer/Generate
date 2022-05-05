import React, { FC } from "react";
import { Apps } from "./Sidebar/Apps";
import { MainSection } from "./Sidebar/MainSection";

export const Sidebar: FC = () => {
  return (
    <>
      <div className="w-72 bg-gray-400 space-y-2">
        <div className="bg-blue-600 h-20">
          <h1 className="">Logo here</h1>
        </div>
        <div>
          <MainSection />
        </div>
        <div className="bg-white">
          <Apps />
        </div>
      </div>
    </>
  );
};
