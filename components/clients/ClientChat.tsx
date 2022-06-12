import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  addDoc,
  collection,
  doc,
  query,
  onSnapshot,
  orderBy,
  limit,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "lib/firebase";
import { useSelector } from "react-redux";
import { RooteState } from "store/store";
export const ClientChat = () => {

  const clientId = useSelector((state:RooteState) => state.Data.uniqueId)
   

  const [messages,setMessages] = useState<any>([])
  const ref = query(
    collection(db, "messages"),
    orderBy("createdAt"),
    // where("CurrentClientId", "==", isId)
    // limit(50)
    // where("createdAt", "<=", date),
  );

  useEffect(() => {
    onSnapshot(ref, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, [ref]);

  return (
    <motion.div
      className="w-1/3 bg-white shadow-xl z-10 h-1/2 rounded absolute bottom-4 right-0 pt-6"
      initial={{ opacity: "0" }}
      animate={{ opacity: "1" }}
      transition={{ type: "spring", delay: 0.7 }}
    >
      <div className="w-80 py-4 rounded-tl-3xl  bg-gray-600 pl-4 text-white font-poppins ml-2 rounded-br-3xl">
        Moderator response {clientId}
      </div>
      <div className="w-80 py-4 rounded-tl-3xl bg-blue-600 text-white font-poppins ml-auto mr-2 rounded-br-3xl pl-4 mt-2 mb-5">
        client msg
      </div>

      <div className="bottom-5 absolute w-full flex justify-center items-center space-x-4">
        <input
          type="text"
          className="w-3/4 py-3 border-2 outline-none px-4 focus:border-Teal rounded-md focus:duration-500"
          placeholder="message here..."
          // onChange={(e) => setModMessage(e.target.value)}
          // value={ModMessage}
        />
        <button
          className="bg-[#4169e1] text-white py-3 focus:ring-offset-2 ring-Teal focus:ring-2 focus:duration-500 px-10 rounded-md"
          // onClick={sendMsg}
        >
          Send
        </button>
      </div>
    </motion.div>
  );
};
