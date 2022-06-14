import React, { FC, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getLoginSuccess } from "slices/switchSlice";
import { AppDispatch } from "store/store";

export const Reference: FC = () => {
  const [key, setKey] = useState<string>("");

  const dispatch: AppDispatch = useDispatch();

  const chekKey = () => {
    if (key === "") {
      toast.error("Please fill out the field");
    } else {
      const req = new XMLHttpRequest();
      req.open("POST", `${process.env.NEXT_PUBLIC_API_URL_Generate}api/ReferenceKey`, true);
      req.onload = () => {
        if (req.readyState === XMLHttpRequest.DONE) {
          if (req.status === 200) {
            let data = JSON.parse(req.response.trim());
            const { bodyMessage } = data;
            console.log(data);

            if (bodyMessage == "success") {
              dispatch(getLoginSuccess(true));
            } else {
              toast.error(bodyMessage);
            }
          }
        }
      };
      req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      req.setRequestHeader("Content-Type", "multipart/form-data");

      req.send(`Key=${key}`);
    }
  };
  return (
    <div className="fixed inset-0 min-h-screen bg-PureGrey flex flex-col items-center justify-center">
      <div className="bg-white p-2 rounded space-y-4  px-10 py-5 flex flex-col items-center justify-center">
        <h1 className="text-center font-poppins uppercase">For Security Purpuses</h1>

        <div className="w-96 py-2">
          <input
            type="text"
            className="border-2 focus:border-blue-600 w-96 py-2 px-7 rounded font-poppins outline-none"
            placeholder="Reference..."
            onChange={(e) => setKey(e.target.value)}
          />
        </div>
        <button
          className="px-14 py-2 bg-blue-600 text-white rounded-md font-poppins"
          onClick={chekKey}
        >
          check
        </button>
      </div>
    </div>
  );
};
