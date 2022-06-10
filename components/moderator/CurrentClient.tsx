/* eslint-disable @next/next/no-img-element */
import { SpecClient } from "interfaces/Chat";
import React, { useContext, useEffect, useState } from "react";

export const CurrentClient = ({ currentId }: SpecClient) => {
  const [chatData, setChatData] = useState<any>([]);

  useEffect(() => {
    const req = new XMLHttpRequest();
    req.open(
      "POST",
      `${process.env.NEXT_PUBLIC_API_URL_Generate}api/getClientToConver`,
      true
    );
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let datas = JSON.parse(req.response.trim());
          setChatData(datas);
          console.log(datas);
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Type", "multipart/form-data");
    req.send(`id=${currentId}`);
  }, [currentId]);

  return (
    <>
      {chatData.map((item: SpecClient) => (
        <div
          key={item.id}
          className="w-1/3 pt-16 space-y-4 border-l-2 border-blue-500"
        >
          <div className="flex py-2 rounded-md ml-4 w-4/5 bg-purple-400">
            <div className="w-12 h-12 rounded-full bg-gray-400 ml-3">
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL_Generate}uploads/${item.img}`}
                className="w-12 h-12 object-cover rounded-full"
                alt="profile pic"
              />
            </div>
            <h1 className="font-poppins py-3 text-white pl-6">
              {item.first_name} {item.last_name}
            </h1>
          </div>
        </div>
      ))}
    </>
  );
};
