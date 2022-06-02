import React, { JSXElementConstructor, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CloseOutlined, DownOutlined } from "@ant-design/icons";
import { AppDispatch, RooteState } from "store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  NavigateNextItems,
  projectCreator,
  projectDatas,
} from "slices/ProjectSlice";
import Image from "next/image";
import { NextBtn } from "./NextBtn";
import { Finalise } from "./Finalise";
import toast from "react-hot-toast";
import { createProject } from "lib/RequestApi";
import { nanoid } from "nanoid";
export const Create = () => {
  const dispatch: AppDispatch = useDispatch();
  const [isTimed, setIsTimed] = useState<boolean>(false);
  const [isOpend, setIsOpend] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [tnxCom, setTnxCom] = useState<boolean>(false);
  const [isType, setIsType] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [projectName, setProjectName] = useState<string>("");

  setTimeout(() => {
    setIsTimed(true);
  }, 3500);

  const datas = useSelector((state: RooteState) => state.Data);
  const client_id = useSelector((state: RooteState) => state.Data.uniqueId);

  const nextItem = useSelector(
    (state: RooteState) => state.ProjectDetails.nextItems
  );
  const NextItemPlay = () => {
    if (nextItem == false) {
      if (isType && projectName !== "") {
        dispatch(NavigateNextItems({ nextItems: true }));
        setIsEmpty(!isEmpty);
      } else {
        setIsEmpty(true);
        toast.error(" All fields are required");
      }
    } else {
      if (description == "") {
        setIsEmpty(true);
        toast.error(" All fields are required");
      } else {
        const uniqueId = nanoid(10);
        dispatch(
          projectDatas({
            projectName: projectName,
            projectDesc: description,
            deliverType: isType,
          })
        );
        createProject(
          "POST",
          "http://localhost:8000/api/createProject",
          `projectName=${projectName}&Delivery=${isType}&birefProjectDesc=${description}&Project_unique_id=${uniqueId}&client_id=${client_id}`
        );
        setTnxCom(true);
      }
    }
  };

  const closeDrop = () => {
    setIsType("Github");
    setIsOpend(!isOpend);
  };

  return (
    <AnimatePresence>
      <div className="fixed z-10 inset-0 bg-black/10">
        <motion.div
          className="w-2/5 rounded-md mx-auto h-[600px] bg-white"
          initial={{ y: "-100vh" }}
          animate={{ y: "10vh" }}
          transition={{ type: "spring", delay: 0.5 }}
        >
          <div
            className="w-10 h-10 rounded ml-auto cursor-pointer flex items-center justify-center"
            onClick={() => dispatch(projectCreator({ isOpened: false }))}
          >
            <CloseOutlined className="text-gray-500 font-bold" />
          </div>
          {tnxCom ? (
            <Finalise />
          ) : (
            <>
              <div className="w-full mx-auto flex ">
                <Image
                  src="/images/hi-notification-by-robot-4017868-3342631.png"
                  width="250"
                  height="250"
                  alt="robot"
                  className=""
                />

                {isTimed ? (
                  <div className="bg-Teal w-fit px-4 items-center space-x-1 h-fit mt-14 ml-4 text-white pl-5 font-poppins rounded-md py-3">
                    <h1 className="text-lg">Now fill the blank fields</h1>
                  </div>
                ) : (
                  <div className="bg-Teal w-fit px-4 items-center space-x-1 h-fit mt-14 ml-4 text-white pl-5 font-poppins rounded-md py-3 flex">
                    <h1 className="text-xl underline underline-offset-2">
                      {datas.fName} {datas.lName}
                    </h1>
                    <h1 className="text-lg">
                      Let me walk you trough the process
                    </h1>
                  </div>
                )}
              </div>
              {isTimed && (
                <div className="pl-5 mt-8 flex flex-col space-y-3">
                  <>
                    {nextItem == false ? (
                      <>
                        <label className="block font-poppins">
                          Project Name
                        </label>
                        <input
                          type="text"
                          className="border-2 focus:border-Teal px-8 rounded-md w-1/2 py-2 outline-none"
                          onChange={(e) => setProjectName(e.target.value)}
                        />
                        <div className="relative">
                          <label className="block font-poppins">
                            Delivery type
                          </label>
                          <div
                            className="w-64 bg-PureGrey py-2 pl-4 rounded-t-md flex items-center justify-between cursor-pointer"
                            onClick={() => setIsOpend(!isOpend)}
                          >
                            <h1 className="font-poppins">
                              {isType ? "Github" : "type"}
                            </h1>
                            <DownOutlined className="mr-3" />
                          </div>
                          {isOpend && (
                            <div
                              className="w-64 mt-1 absolute rounded-b-md shadow-lg bg-PureGrey cursor-pointer"
                              onClick={closeDrop}
                            >
                              <h1 className="w-full py-2 bg-white pl-4 font-poppins cursor-pointer hover:bg-gray-100 hover:duration-700">
                                Github
                              </h1>
                            </div>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <label htmlFor="" className="font-poppins text-lg">
                          Give us a short description of the project
                        </label>
                        <textarea
                          className="w-96 outline-none h-40 font-poppins p-2 border-2 focus:border-Teal"
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </>
                    )}
                  </>

                  {/* <NextBtn /> */}
                  <button
                    className="w-44 rounded text-white font-poppins py-2 bg-Teal"
                    onClick={NextItemPlay}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
