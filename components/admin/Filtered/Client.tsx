/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const Client = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const req = new XMLHttpRequest();
    req.open("POST", "http://localhost:8000/api/getClients", true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          // Todo: implement parsing data
          let response = JSON.parse(req.response);
          setData(response);
          // const idk = Object.fromEntries(response)
          console.log(response);
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Type", "multipart/form-data");

    req.send();
  }, []);

  return (
    <>
      {data.map(
        (items: {
          id: React.Key | null | undefined;
          img: any;
          first_name:
            | boolean
            | React.ReactChild
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
          last_name:
            | boolean
            | React.ReactChild
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
          role:
            | boolean
            | React.ReactChild
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
          email:
            | boolean
            | React.ReactChild
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
          unique_id:
            | boolean
            | React.ReactChild
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
          status:
            | boolean
            | React.ReactChild
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
        }) => (
          <tr key={items.id}>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10">
                  <img
                    src={`http://localhost:8000/uploads/${items.img}`}
                    alt="profile"
                    className="rounded-full w-12 h-10 object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {items.first_name} {items.last_name}
                  </p>
                </div>
              </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">{items.role}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">{items.email}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                {items.unique_id}t
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                <span
                  aria-hidden
                  className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                ></span>
                <span className="relative">{items.status}</span>
              </span>
            </td>
          </tr>
        )
      )}
    </>
  );
};
