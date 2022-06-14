import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloseOutlined } from "@ant-design/icons";
import { AppDispatch, RooteState } from "store/store";
import { useDispatch, useSelector } from "react-redux";
import { NotificationsHandling } from "slices/ProjectSlice";


interface Project {
  projectName: string
  Delivery: string
  Project_unique_id: string
  confirm: string
  id: string
}
export const Notifications = () => {
  const dispatch: AppDispatch = useDispatch()

  const id = useSelector((state: RooteState) => state.Data.uniqueId)
  const [isData, setIsData] = useState<any>([])
  useEffect(() => {
    const req = new XMLHttpRequest();
    req.open("POST", `${process.env.NEXT_PUBLIC_API_URL_Generate}api/ProjectNoti`, true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          // Todo: implement parsing data
          let data = JSON.parse(req.response.trim());
          setIsData(data)
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Type", "multipart/form-data");

    req.send(`project_id=${id}`);
  }, [id])

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
              dispatch(NotificationsHandling({ Notifiy: false }))
            }
          >
            <CloseOutlined className="text-gray-500 font-bold" />
          </div>

          {isData.map(({ projectName, Delivery, Project_unique_id, confirm, id }: Project) => (
            <div
              key={id}
              className="w-full max-w-lg mb-4  p-4 mx-auto text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300"
              role="alert"
            >
              <div className="flex items-center mb-3">
                <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                  New notification
                </span>

              </div>
              <div className="flex items-center">
                <div className="relative inline-block shrink-0">
                  <h1 className="font-poppins"># {Project_unique_id}</h1>

                </div>
                <div className="ml-3 text-sm font-normal">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                    {/* {`${item.first_name}${" "}${item.last_name}`} */}
                  </h4>
                  <div className="text-sm font-normal font-poppins ">
                    Project Confirmation
                  </div>
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-500">
                    a few seconds ago
                  </span>
                </div>
              </div>

              <div className="pt-4 flex space-x-2">
                <h1 className="font-poppins uppercase">project Name:</h1>
                <h1 className="font-poppins text-blue-500">{projectName}</h1>
              </div>
              <div className="pt-4 flex space-x-2">
                <h1 className="font-poppins uppercase">Delivery</h1>
                <h1 className="font-poppins text-blue-500">{Delivery}</h1>
              </div>
              <div className="pt-4 flex space-x-2">
                <h1 className="font-poppins uppercase">Confirmation:</h1>
                <h1 className="font-poppins text-blue-500">{confirm}</h1>
              </div>

            </div>
          ))}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
