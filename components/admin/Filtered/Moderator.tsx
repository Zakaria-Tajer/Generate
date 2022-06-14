/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mods } from "interfaces/User";



export const Moderator = () => {

  const [data, setData] = useState<any>([])
  useEffect(() => {
    const req = new XMLHttpRequest();
    req.open("POST", `${process.env.NEXT_PUBLIC_API_URL_Generate}api/getMods`, true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          // Todo: implement parsing data
          let response = JSON.parse(req.response);
          setData(response);
          // const idk = Object.fromEntries(response)
          console.log(req.response);
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Type", "multipart/form-data");

    req.send();
  }, []);

  return (
    <>

      {data.map(({ first_name, last_name, img, unique_id, email, id }: Mods) => (
        <motion.tr
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 5 }}
          key={id}
        >
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10">
                <img
                  className="w-full h-full rounded-full"
                  src={img ? `http://localhost:8000/adminUploads/${img}` : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'}
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  {first_name}{" "}{last_name}
                </p>
              </div>
            </div>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">Moderator</p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{email}</p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{unique_id}</p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
              <span
                aria-hidden
                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
              ></span>
              <span className="relative">New</span>
            </span>
          </td>

        </motion.tr>
      ))}

    </>
  );
};
