/* eslint-disable @next/next/no-img-element */
import {
  MailOutlined,
  MessageOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { BasicRequest } from "lib/RequestApi";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { showNotifications } from "slices/filterSlice";
import { NotificationsDataHandler } from "slices/NotificationSlice";
import { confirmingProject } from "slices/ProjectSlice";
import { Composing } from "slices/switchSlice";
import { AppDispatch, RooteState } from "store/store";

export const ClientNotifications = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [isChat, setIsChat] = useState<string>("");
  const [isData, setIsData] = useState<any>([]);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const req = new XMLHttpRequest();
    req.open(
      "POST",
      `${process.env.NEXT_PUBLIC_API_URL_Generate}api/ModNotifications`,
      true
    );
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let data = JSON.parse(req.response.trim());

          console.log(req.response.trim());
          setIsData(data);

          dispatch(NotificationsDataHandler({ ClientData: data }));
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Type", "multipart/form-data");
    req.send();
  }, [dispatch]);
  const router = useRouter();
  const VideoCall = () => {
    // Todo: Generate a key for client to join calls
  };
  const addToChat = (e:any) => {
    const value = e.target.value
    console.log(value);
    
    BasicRequest(
      "POST",
      `${process.env.NEXT_PUBLIC_API_URL_Generate}api/confirmProject`,
      `id=${value}`
    );
    dispatch(confirmingProject({ isConfirmed: true }));
    dispatch(showNotifications({ Notifications: false}))

  };

  return (
    <>
      {isData.map(
        (
          item: {
            id: React.Key | readonly string[] | null | undefined;
            img: any;
            first_name: any;
            last_name: any;
          },
          i: React.Key | null | undefined
        ) => {
          return (
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
                  <button
                    value={item.id ? item.id : ""}
                    onClick={addToChat}
                    className="font-poppins py-2 bg-blue-600 text-md px-10 text-white rounded-md"
                  >
                    Confirm
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

              <div className="w-full mt-2 flex pt-3">
                <PhoneOutlined className="w-1/2 py-4 bg-white border-r-[1px] cursor-pointer hover:bg-gray-100 duration-700" />
                <MailOutlined
                  className="w-1/2 py-4 bg-white border-r-[1px] cursor-pointer hover:bg-gray-100 duration-700"
                  onClick={() => dispatch(Composing(true))}
                />
              </div>
            </div>
          );
        }
      )}
    </>
  );
};
