import { CloseOutlined } from "@ant-design/icons";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import { showNotifications } from "slices/filterSlice";
// import { NotificationsDataHandler } from "slices/NotificationSlice";
import { AppDispatch } from "store/store";
import { ClientNotifications } from "./ClientNotifications";

export const NotificationsMod = () => {
  const dispatch: AppDispatch = useDispatch();
  const notificationController = () => {
    dispatch(showNotifications({ Notifications: false }));
    // dispatch(NotificationsDataHandler({ showDetails: false }));
  };
  return (
    <AnimatePresence>
      <div className="fixed z-10 inset-0 bg-black/10">
        <motion.div
          className="2xl:w-2/5 xl:w-3/5 md:w-3/4 overflow-y-auto overflow-x-hidden rounded-md mx-auto h-[600px] bg-white"
          initial={{ y: "-100vh" }}
          animate={{ y: "10vh" }}
          transition={{ type: "spring", delay: 0.5 }}
        >
          <div
            className="w-10 h-10 rounded ml-auto cursor-pointer flex items-center justify-center"
            onClick={notificationController}
          >
            <CloseOutlined className="text-gray-500 font-bold" />
          </div>
          <div className=" pt-4 sapce-y-4">
            <ClientNotifications />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
