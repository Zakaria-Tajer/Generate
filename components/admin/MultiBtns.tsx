import React from "react";
import { AppDispatch } from "store/store";
import { useDispatch } from "react-redux";
import { ManageMultiUsers } from "slices/MultiSlice";
import { motion } from "framer-motion";
import { ArrowRightOutlined } from "@ant-design/icons";

export const MultiBtns = () => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className=" w-3/4 mx-auto mt-10 space-y-4 flex flex-col items-center justify-center">
      <motion.div
        className="w-96 py-3 bg-DarkOne text-white rounded-md flex items-center justify-between hover:bg-DarkGrey hover:duration-700 cursor-pointer"
        initial={{ x: "100vw" }}
        animate={{ x: "0vw" }}
        transition={{ type: "spring", delay: 1.1 }}
        onClick={() => dispatch(ManageMultiUsers({ Admins: true }))}
      >
        <h1 className="font-poppins ml-4 ">Add New Admin</h1>
        <ArrowRightOutlined className="mr-4" />
      </motion.div>
      <motion.div
        className="w-96 py-3 bg-[#0F4C75] rounded-md flex text-white items-center justify-between hover:bg-[#3282B8] hover:duration-700 cursor-pointer"
        initial={{ x: "-100vw" }}
        animate={{ x: "0vw" }}
        transition={{ type: "spring", delay: 1.2 }}
        onClick={() => dispatch(ManageMultiUsers({ Moderators: true }))}
      >
        <h1 className="font-poppins ml-4">Add New Moderator</h1>
        <ArrowRightOutlined className="mr-4" />
      </motion.div>
      <motion.div
        className="w-96 py-3 bg-[#364F6B] text-white rounded-md flex items-center justify-between hover:bg-[#035397] hover:duration-700 cursor-pointer"
        initial={{ x: "100vw" }}
        animate={{ x: "0vw" }}
        transition={{ type: "spring", delay: 1.3 }}
        onClick={() => dispatch(ManageMultiUsers({ Developers: true }))}
      >
        <h1 className="font-poppins ml-4">Add New Developer</h1>
        <ArrowRightOutlined className="mr-4" />
      </motion.div>
    </div>
  );
};
