import React from "react";
import { motion } from "framer-motion";

export const Moderator = () => {
  const submit = () => {
    const req = new XMLHttpRequest();
    req.open("POST", '', true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          // Todo: implement parsing data
          let response = JSON.parse(req.response.trim());
          console.log(response);
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Type", "multipart/form-data");

    req.send(``);
  };
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: "0vw" }}
      transition={{ type: "spring", delay: 0.7 }}
      className=" h-full"
    >
      <form className="mt-10">
        <div className="flex w-3/4 mx-auto space-x-5 items-center justify-center">
          <input
            type="text"
            placeholder="First Name"
            className="w-64 rounded py-2 px-5 font-poppins outline-none border-2 focus:border-[#364F6B]"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-64 rounded py-2 px-5 font-poppins outline-none border-2 focus:border-[#364F6B]"
          />
        </div>
        <div className="flex w-3/4 mx-auto py-2 space-y-3 flex-col items-center justify-center">
          <input
            type="email"
            placeholder="Email"
            className="w-[33.5rem] rounded py-2 px-5 font-poppins outline-none border-2 focus:border-[#364F6B]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[33.5rem] rounded py-2 px-5 font-poppins outline-none border-2 focus:border-[#364F6B]"
          />
          <button
            className="bg-[#364F6B] mr-auto ml-4 text-white w-44 py-3 rounded-md font-poppins"
            onClick={submit}
          >
            Submit
          </button>
        </div>
      </form>
    </motion.div>
  );
};