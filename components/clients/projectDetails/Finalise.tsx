import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AppDispatch, RooteState } from "store/store";
import { useDispatch, useSelector } from "react-redux";
import { projectCreator } from "slices/ProjectSlice";
import { BasicRequest } from "lib/RequestApi";

export const Finalise = () => {
  const dispatch:AppDispatch = useDispatch()
  const id = useSelector((state:RooteState) => state.Data.uniqueId)
    console.log(id);
    
  const updateState = () => {
    BasicRequest("POST", `${process.env.NEXT_PUBLIC_API_URL_Generate}api/updateState`,`id=${id}`)
    setTimeout(()=> {
      dispatch(projectCreator({isOpened: false}))
    },1200)
  }
  return (
    <motion.div
      className=" rounded-md   mx-auto  bg-white"
      initial={{ opacity: "0" }}
      animate={{ opacity: "1" }}
      transition={{ type: "spring", delay: 0.5 }}
    >
      <div className="mx-auto flex-col flex items-center justify-center w-96">
        <Image
          src="/images/little-bot-with-bitcoin-4017859-3342633.webp"
          width="300"
          height="300"
          alt="robot"
        />
        <h1 className="text-xl font-poppins">
          We will contact you soon stay tuned!
        </h1>
        <button onClick={updateState} className="text-blue-400 underline underline-offset-2 font-poppins mt-2">get back to your work</button>
      </div>
    </motion.div>
  );
};
