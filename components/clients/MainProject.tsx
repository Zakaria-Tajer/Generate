import React from "react";
import { Empty } from "./Empty";
import { ProjectDeadline } from "./projectDetails/ProjectDeadline";
import { ProjectStatus } from "./projectDetails/ProjectStatus";
import { TeamMem } from "./projectDetails/TeamMem";

export const MainProject = () => {

  return (
    <div className=" lg:w-full 2xl:max-w-7xl sm:w-5/6 py-3 mx-auto mt-10 space-y-7">
       <div className="pl-3">
        <h1 className="font-poppins text-2xl">Dashboard</h1>
      </div>
      {/* <ProjectStatus />
      <div className=" lg:w-full md:mx-auto lg:mx-0 xl:w-full  bg-white lg:flex justify-between">
        <div className="p-2">
          <ProjectDeadline />
        </div>
        <TeamMem />
      </div> */}
      <Empty />
    </div>
  );
};
