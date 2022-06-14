import { ProjectDetails } from "@/pages/moderator";
import { DownOutlined } from "@ant-design/icons";
import { GetStaticProps } from "next";
import React, { useState } from "react";

export const ClientProjectRequests = ({
  projectName,
  Project_unique_id,
  birefProjectDesc,
  Delivery,
  ProjectDetails,
}: ProjectDetails) => {
  const [assign, setAssign] = useState<boolean>(false);
  const [dev, setDev] = useState<boolean>(false);
  const [desg, setDesgn] = useState<boolean>(false);
  return (
    <div className="bg-gray-400 w-full flex h-[900px] ">
      <div className="w-3/5 bg-white h-20 mt-16 ml-10 rounded">
        <div className="flex items-center h-20 border-b-2 border-gray-300">
          <div className=" w-fit h-full px-4 items-center flex space-x-2 justify-between py-1">
            <h1 className="font-poppins underline underline-offset-2">
              Project Id:{" "}
            </h1>
            <h1 className="font-poppins">
              {"#"}
              {Project_unique_id}
            </h1>
          </div>
          <div className=" w-fit h-full px-4 items-center flex space-x-2 justify-between py-1">
            <h1 className="font-poppins underline underline-offset-2">
              Project Name
            </h1>
            <h1 className="font-poppins">{projectName}</h1>
          </div>
          <div className=" w-fit h-full px-4 items-center flex space-x-2 justify-between py-1">
            <h1 className="font-poppins underline underline-offset-2">
              Project Delivery
            </h1>
            <h1 className="font-poppins">{Delivery}</h1>
          </div>
          <div className=" w-fit h-full px-4 items-center flex space-x-2 justify-between py-1">
            <h1 className="font-poppins underline underline-offset-2">
              Project Description
            </h1>
            <h1 className="font-poppins">{birefProjectDesc}</h1>
          </div>

          <div
            className="px-10 bg-blue-400 ml-auto flex items-center py-3 font-poppins mr-2 rounded cursor-pointer space-x-4"
            onClick={() => setAssign(!assign)}
          >
            <h1>Assign a team</h1>
            <DownOutlined className="" />
          </div>
        </div>
        {assign && (
          <div className="h-40 bg-white rounded-b flex items-start pt-4">
            <div className="bg-blue-500 relative w-fit px-4 rounded py-2 ml-3 flex items-center  cursor-pointer" onClick={() => setDev(!dev)}>
              <h1 className="font-poppins">Select Developers</h1>
              <DownOutlined className="ml-4" />
              {dev && <div className="absolute bg-gray-400 top-10 w-full left-0 rounded-b">
                <div className="flex items-center py-3 bg-gray-100 px-2  space-x-4">
                  <input type="checkbox" />
                  <h1 className="font-poppins text-sm">Developer 1</h1>
                </div>
                <div className="flex items-center py-3 bg-gray-100 px-2  space-x-4">
                  <input type="checkbox" />
                  <h1 className="font-poppins text-sm">Developer 1</h1>
                </div>
                <div className="flex items-center py-3 bg-gray-100 px-2  space-x-4">
                  <input type="checkbox" />
                  <h1 className="font-poppins text-sm">Developer 1</h1>
                </div>
              </div>}
            </div>
            <div className="bg-blue-500 relative w-fit px-4 rounded py-2 ml-3 flex items-center  cursor-pointer" onClick={() => setDesgn(!desg)}>
              <h1 className="font-poppins">Select Developers</h1>
              <DownOutlined className="ml-4" />
              {desg && <div className="absolute bg-gray-400 top-10 w-full left-0 rounded-b">
                <div className="flex items-center py-3 bg-gray-100 px-2  space-x-4">
                  <input type="checkbox" />
                  <h1 className="font-poppins text-sm">Developer 1</h1>
                </div>
                <div className="flex items-center py-3 bg-gray-100 px-2  space-x-4">
                  <input type="checkbox" />
                  <h1 className="font-poppins text-sm">Developer 1</h1>
                </div>
                <div className="flex items-center py-3 bg-gray-100 px-2  space-x-4">
                  <input type="checkbox" />
                  <h1 className="font-poppins text-sm">Developer 1</h1>
                </div>
              </div>}
            </div>

            <button className="bg-blue-500 text-white font-poppins px-14 py-2 rounded mx-auto my-auto">Confirm</button>
          </div>
        )}

      </div>
        <div className="w-44 bg-white h-44 mt-16 ml-10">
          Developer working on project list

        </div>
    </div>
  );
};


// Todo: work on developer functions
// ? Temp: 1 day

// Todo: make trello and screens for rapport
// ? Temp: morning
