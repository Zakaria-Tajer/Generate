import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
// Todo: Progress bar
// Todo: getserverSideProps => index => getData in page => redux => display it in Here
export const ProjectStatus = () => {
  return (
    <div className="space-y-4">
      <div className="pl-3">
        <h1 className="font-poppins text-2xl">Dashboard</h1>
      </div>
      <div className="lg:flex lg:w-11/12 lg:mx-auto xl:ml-4 2xl:max-w-5xl justify-between bg-white 2xl:w-4/5 rounded lg:pl-10">
        <div className="flex flex-col lg:w-fit space-y-6 mb-7">
          <h1 className="pt-6 font-poppins pl-4 lg:pl-0">Project Status</h1>
          <div className="flex py-4 items-center bg-gray-400 mx-auto">
            <div className="py-3 p-4">
              <h1 className="text-6xl ">16</h1>
            </div>
            <div className=" space-y-3 px-4 py-2">
              <h1 className="font-poppins">Total Projects</h1>
              <div className="flex space-x-4">
                <div className="bg-black w-6 rounded-full h-6 flex items-center justify-center">
                  <ArrowRightOutlined className="-rotate-45 text-white" />
                </div>
                <h1 className="font-poppins">+1 New</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-400 pl-2  lg:w-1/2 rounded flex items-center">
          <div className="flex md:mx-auto xl:ml-5 space-x-4">
            <div className="w-24 h-24 rounded-full p-2 bg-white my-auto"></div>
            <div className="lg:w-56 bg-white p-4 space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-12 rounded-md h-4 bg-blue-400"></div>
                <h1>In Progress</h1>
                <h1 className="font-mono">4</h1>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 rounded-md h-4 bg-purple-600"></div>
                <h1>Completed</h1>
                <h1 className="font-mono">10</h1>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 rounded-md h-4 bg-yellow-300"></div>
                <h1>Yet to start</h1>
                <h1 className="font-mono">2</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
