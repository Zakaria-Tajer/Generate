/* eslint-disable @next/next/no-img-element */
import {
  MailOutlined,
  MessageOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const ClientNotifications = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [isChat, setIsChat] = useState<boolean>(false);
  const [isData, setIsData] = useState<any>([]);

  useEffect(() => {
    const req = new XMLHttpRequest();
    req.open("POST", "http://localhost:8000/api/ModNotifications", true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let data = JSON.parse(req.response.trim());

          console.log(data);
          setIsData(data);
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Type", "multipart/form-data");
    req.send();
  }, []);
  const Message = () => {
    // Todo: Invite the client to a room
  };
  const VideoCall = () => {
    // Todo: Generate a key for client to join calls
  };
  const Mail = () => {
    // Todo: Send Emails for clients
  };
  return (
    <>
      {isData.map(
        (
          item: {
            img: any;
            first_name: any;
            CLientLastName: any;
            email: any;
            last_name: any;
          },
          i: React.Key | null | undefined
        ) => (
          <div
            key={i}
            className="w-full max-w-lg mb-4  p-4 mx-auto text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300"
            role="alert"
          >
            <div className="flex items-center mb-3">
              <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                New notification
              </span>
              <div className="flex ml-auto space-x-2">
                {/* Todo:click event */}
                <span
                  className="mb-1 ml-auto cursor-pointer text-sm font-semibold text-gray-900 dark:text-white"
                  onClick={() => setIsShowing(!isShowing)}
                >
                  <Image
                    src="/images/icons/5107639.png"
                    width="20"
                    height="20"
                    alt="info"
                  />
                </span>
                <button
                  type="button"
                  className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                  data-dismiss-target="#toast-notification"
                  aria-label="Close"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative inline-block shrink-0">
                <img
                  className="w-12 h-12 rounded-full"
                  src={`http://localhost:8000/uploads/${item.img}`}
                  width="12"
                  height="12"
                  alt="Jese Leos image"
                />
                <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="ml-3 text-sm font-normal">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {`${item.first_name}${" "}${item.last_name}`}
                </h4>
                <div className="text-sm font-normal font-poppins ">
                  Requesting new project
                </div>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-500">
                  a few seconds ago
                </span>
              </div>
            </div>
            {isShowing && (
              <motion.div
                className=" w-full max-w-lg p-4 text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", delay: 0.4 }}
              >
                <div className="py-3 border-b-[1px] flex space-x-3">
                  <div className="w-14 h-14 rounded-full">
                    <img
                      className="w-14 h-14 object-cover rounded-full"
                      width="14"
                      height="14"
                      alt="profile pic"
                      src={`http://localhost:8000/uploads/${item.img}`}
                    />
                  </div>
                  <div className="">
                    <h1 className="text-lg font-poppins">{item.email}</h1>
                    <p className="text-sm font-normal font-poppins">Client</p>
                  </div>
                </div>
                <div className="w-full mt-2 flex">
                  <MessageOutlined
                    className="w-1/3 py-4 bg-white border-r-[1px] cursor-pointer"
                    onClick={Message}
                  />
                  <PhoneOutlined
                    className="w-1/3 py-4 bg-white border-r-[1px] cursor-pointer"
                    onClick={VideoCall}
                  />
                  <MailOutlined
                    className="w-1/3 py-4 bg-white border-r-[1px] cursor-pointer"
                    onClick={Mail}
                  />
                </div>
              </motion.div>
            )}
          </div>
        )
      )}
    </>
  );
};
