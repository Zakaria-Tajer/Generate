import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
export const ProjectDeadline = () => {
  return (
    <div className="space-y-3">
      <div className="bg-blue-400 lg:w-[28rem] xl:w-[30rem] py-2 xl:pl-2 flex 2xl:flex-row flex-col items-center rounded">
        <div className="space-y-3 w-1/3">
          <h1 className="font-poppins">Total Hours</h1>
          <h1 className="font-poppins text-xl">68:34</h1>
          <div className="flex space-x-4 py-4">
            <div className="bg-black w-6 rounded-full h-6 flex items-center justify-center">
              <ArrowRightOutlined className="-rotate-45 text-white" />
            </div>
            <h1 className="font-poppins">+15%</h1>
          </div>
        </div>
        <div className="w-full xl:w-full xl:mx-auto h-44 bg-blue-900">
          <h1 className="text-poppins text-white">Chart here</h1>
        </div>
      </div>
      <div className="bg-blue-400 lg:w-[28rem] xl:w-[30rem] py-2 xl:pl-2 flex 2xl:flex-row flex-col items-center rounded">
        <div className="space-y-3 w-1/3">
          <h1 className="font-poppins">Total Hours</h1>
          <h1 className="font-poppins text-xl">68:34</h1>
          <div className="flex space-x-4 py-4">
            <div className="bg-black w-6 rounded-full h-6 flex items-center justify-center">
              <ArrowRightOutlined className="-rotate-45 text-white" />
            </div>
            <h1 className="font-poppins">+15%</h1>
          </div>
        </div>
        <div className="w-full xl:w-full xl:mx-auto h-44 bg-blue-900">
          <h1 className="text-poppins text-white">Chart here</h1>
        </div>
      </div>
    </div>
  );
};
