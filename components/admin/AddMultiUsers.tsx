import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloseOutlined } from "@ant-design/icons";
import { AppDispatch, RooteState } from "store/store";
import { useDispatch, useSelector } from "react-redux";
import { AddUsers } from "slices/filterSlice";
import { Developer } from "./users/Developer";
import { MultiBtns } from "./MultiBtns";
import { ManageMultiUsers } from "slices/MultiSlice";
import { Moderator } from "./users/Moderator";
import { Admins } from "./users/Admins";

export const AddMultiUsers = () => {
  const dispatch: AppDispatch = useDispatch();
  const Dev = useSelector(
    (state: RooteState) => state.HandleMultiUsers.Developers
  );
  const Mod = useSelector(
    (state: RooteState) => state.HandleMultiUsers.Moderators
  );
  const Admin = useSelector(
    (state: RooteState) => state.HandleMultiUsers.Admins
  );
  const closing = () => {
    dispatch(AddUsers({ AddUser: false }));
    dispatch(
      ManageMultiUsers({ Developers: false, Moderators: false, Admins: false })
    );
  };
  return (
    <AnimatePresence>
      <div className="fixed z-10 inset-0 bg-black/10">
        <motion.div
          className="w-2/5 rounded-md mx-auto h-[400px] bg-white"
          initial={{ y: "-100vh" }}
          animate={{ y: "10vh" }}
          transition={{ type: "spring", delay: 0.5 }}
        >
          {/* {Dev ? <Developer /> : } */}
          <div className="w-10 h-10 rounded ml-auto cursor-pointer flex items-center justify-center">
            <CloseOutlined
              className="text-gray-500 font-bold"
              onClick={closing}
            />
          </div>
          <h1 className="text-center text-2xl font-poppins">
            {(Dev && "ADD A Developer") ||
              (Mod && "ADD A Moderator") ||
              (Admin && "ADD A Admin") ||
              "ADD A USERS"}
          </h1>
          {(Dev && <Developer />) ||
            (Mod && <Moderator />) ||
            (Admin && <Admins />) || <MultiBtns />}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
