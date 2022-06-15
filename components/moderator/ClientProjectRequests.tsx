/* eslint-disable @next/next/no-img-element */
import { ProjectDetails } from "@/pages/moderator";
import { CloseOutlined, DownOutlined, PlusOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { SuperUsersData } from 'interfaces/SuperUsers'
export const ClientProjectRequests = ({
  projectName,
  Project_unique_id,
  birefProjectDesc,
  Delivery,
  ProjectDetails,
}: ProjectDetails) => {
  const [assign, setAssign] = useState<boolean>(false);
  const [data, setData] = useState<any>([])
  const [list, setList] = useState<any>([])
  useEffect(() => {
    const req = new XMLHttpRequest();
    req.open("POST", `${process.env.NEXT_PUBLIC_API_URL_Generate}api/getDeves`, true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let response = JSON.parse(req.response);
          setData(response);
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Type", "multipart/form-data");

    req.send();
  }, []);

  const getOnceDev = (e: any) => {
    let id = e.target.value
    const req = new XMLHttpRequest();
    req.open("POST", `${process.env.NEXT_PUBLIC_API_URL_Generate}api/findDevs`, true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let response = JSON.parse(req.response);
          // setList(data);
          console.log(response.data);

        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Type", "multipart/form-data");

    req.send(`id=${id}`);

    console.log(id);

  }
  return (
    <div className="bg-gray-400 w-full flex relative h-[900px] ">
      <div className="2xl:w-3/5 w-3/4 mx-auto bg-white h-96 mt-16 2xl:ml-10 rounded xl:w-5/6 xl:h-fit">
        <div className="xl:flex items-center h-20 border-b-2 border-gray-300">
          <div className="xl:w-fit h-full px-4 items-center flex space-x-2 justify-between py-1">
            <div className="flex space-x-2">
              <h1 className="font-poppins underline underline-offset-2">
                Project Id:{" "}
              </h1>
              <h1 className="font-poppins">
                {"#"}
                {Project_unique_id}
              </h1>
            </div>

          </div>
          <div className=" w-fit h-full px-4 items-center flex space-x-2 justify-between py-1">
            <h1 className="font-poppins underline underline-offset-2">
              Project Name:
            </h1>
            <h1 className="font-poppins">{projectName}</h1>
          </div>
          <div className=" w-fit h-full px-4 items-center flex space-x-2 justify-between py-1">
            <h1 className="font-poppins underline underline-offset-2">
              Project Delivery:
            </h1>
            <h1 className="font-poppins">{Delivery}</h1>
          </div>
          <div className=" w-fit h-full px-4 items-center flex space-x-2 justify-between py-1">
            <h1 className="font-poppins underline underline-offset-2">
              Project Description:
            </h1>
            <h1 className="font-poppins">{birefProjectDesc}</h1>
          </div>

          <div
            className="w-64 bg-blue-400  flex items-center justify-center mx-auto py-3 font-poppins  rounded cursor-pointer space-x-4"
            onClick={() => setAssign(!assign)}
          >
            <h1>Assign a team</h1>
            <DownOutlined className="" />
          </div>
        </div>
        {assign && (
          <div className="w-full inset-0 bg-transparent fixed flex justify-center top-18 ">
            <motion.div className="absolute bg-white shadow-xl w-full md:w-3/4 xl:w-1/2 top-0 h-96 rounded-md"
              initial={{ y: "-100vh" }}
              animate={{ y: "10vh" }}
              transition={{ type: "spring", delay: 0.5 }}
            >
              <div className="ml-auto flex justify-end py-2">
                <CloseOutlined className="mr-4 cursor-pointer" onClick={() => setAssign(!assign)} />
              </div>

              <div className="w-full flex">
                <div className="bg-gray-400 w-2/4 rounded-md py-2 mt-10 ml-4 relative">
                  <h1 className="font-poppins pl-4 uppercase">Developers List</h1>
                  <div className="w-full bg-purple-900 h-56 rounded-b-md absolute list-none">
                    {data.map((item: SuperUsersData) => (
                      <li className="flex mt-2 py-2 w-full bg-white justify-between items-center" key={item.id}>
                        <div className="flex items-center" >
                          <div className="h-10 w-10 bg-gray-500 rounded-full">
                            <img src={`${process.env.NEXT_PUBLIC_API_URL_Generate}adminUploads/${item.img}`} alt="profile pic" className="h-10 w-10 rounded-full object-cover" />
                          </div>
                          <h1 className="pl-3 font-poppins">{item.FirstName}{" "}{item.LastName}</h1>
                        </div>

                        <button className="text-white bg-blue-600 cursor-pointer py-2 px-4 font-poppins mr-2 rounded-md flex items-center" onClick={getOnceDev} value={item.id}>
                          <PlusOutlined className="mr-4" />
                          add
                        </button>
                      </li>
                    ))}
                  </div>
                </div>
                <div className="w-2/4">
                  <div className="w-5/6 rounded-md bg-Teal h-44 mt-10 ml-4">
                    <div className="flex items-center bg-white py-3">
                      <div className="h-10 w-10 bg-gray-500 rounded-full"></div>
                      <h1 className="pl-3 font-poppins">Developer Name</h1>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};


// Todo: work on developer functions
// ? Temp: 1 day

// Todo: make trello and screens for rapport
// ? Temp: morning
