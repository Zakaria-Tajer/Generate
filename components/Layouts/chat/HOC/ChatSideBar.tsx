import React, { FC } from "react";
import { Layouts } from "interfaces/Layouts";
// Todo: Fetch Persons list api in the page first
export default function ChatSideBar({children}: Layouts){
  return (
    <div className="w-1/5 bg-white h-screen">
      <div className="bg-gray-200 h-44 flex items-center space-x-4 pl-4">
        <div className="bg-gray-500 rounded-full w-24 h-24"></div>
        <div className="bg-blue-500">
          <h1 className="text-xl font-poppins">Gravid Cristofer</h1>
          <p>Developer</p>
        </div>
      </div>
      {children}
    </div>
  );
};
