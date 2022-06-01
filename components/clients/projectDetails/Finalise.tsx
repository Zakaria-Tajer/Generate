import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Finalise = () => {
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
      </div>
    </motion.div>
  );
};
