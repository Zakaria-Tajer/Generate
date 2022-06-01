import { CloseOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showNotifications } from "slices/filterSlice";
import { AppDispatch } from "store/store";
import { motion, AnimatePresence } from "framer-motion";

export const Notifications = () => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <AnimatePresence>
      <div className="fixed z-10 inset-0 bg-black/10">
        <motion.div
          className="w-2/5 rounded-md mx-auto h-[600px] bg-white"
          initial={{ y: "-100vh" }}
          animate={{ y: "10vh" }}
          transition={{ type: "spring", delay: 0.5 }}
        >
          <div
            className="w-10 h-10 rounded ml-auto cursor-pointer flex items-center justify-center"
            onClick={() =>
              dispatch(showNotifications({ Notifications: false }))
            }
          >
            <CloseOutlined className="text-gray-500 font-bold" />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
