import React from "react";
import { ProjectDeadline } from "./projectDetails/ProjectDeadline";
import { ProjectStatus } from "./projectDetails/ProjectStatus";
import { TeamMem } from "./projectDetails/TeamMem";

export const MainProject = () => {
  return (
    <div className="bg-gray-400 w-5/6 py-3 mx-auto mt-10 space-y-7">
      {/* <ProjectStatus /> */}
      <div className="w-3/4 ml-3 bg-white flex justify-between">
        {/* <div className="p-2">
          <ProjectDeadline />
        </div> */}
        {/* <TeamMem /> */}
      </div>
    </div>
  );
};
