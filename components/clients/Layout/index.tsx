import { ClientChat } from "@/components/clients/ClientChat";
import { ComposeEmail } from "@/components/clients/email/ComposeEmail";
import { MainSnc } from "@/components/clients/MainSnc";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
  updateDoc,
  addDoc,
  doc,
  collectionGroup
} from "firebase/firestore";
import { Layouts } from "interfaces/Layouts";
import { db } from "lib/firebase";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RooteState } from "store/store";
import { motion } from "framer-motion";

interface ChatText {
  CLientText: string;
  CurrentModeratorId: string;
  ModeratorText: string;
  CurrentClientId: string;
  createdAt: string;
  id: string;
}

export function IndexLayout({ children }: Layouts) {
  const isChatTrue = useSelector(
    (state: RooteState) => state.switch.DispalyChat
  );
  const [messages, setMessages] = useState<any>([]);
  const [clientMessages, setClientMessage] = useState<string>("");
  const [docId, setDocId] = useState<any>("");
  const MessageCollection = collection(db, "messages");

  const id = useSelector((state: RooteState) => state.Data.uniqueId);
  const date = new Date();

  useEffect(() => {
    const ref = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      where("CurrentClientId", "==", id)
      
      // limit(50)
      // where("createdAt", "<=", date),
    );
    onSnapshot(ref, (snapshot) => {
      setMessages(snapshot.docs.map((doc) =>  doc.data()));
      setDocId(snapshot.docs.map((doc) => doc.id))
    });
  }, [id]);

  const sendMsg = async () => {
    
    await addDoc(MessageCollection,{
      CurrentClientId: id,
      createdAt: date,
      ClientText: clientMessages,
    })
    
  };
  return (
    <div className="min-h-screen bg-[#f6f6f8] flex w-full">
      <div className="w-full flex">
        <MainSnc />
        <div className="w-full mt-28 bg-[#f6f6f8] overflow-y-hidden">
          <ComposeEmail />
          {isChatTrue && (
            <motion.div
              className="w-1/3 bg-white shadow-xl z-10 h-1/2 rounded absolute bottom-4 right-0 pt-6"
              initial={{ opacity: "0" }}
              animate={{ opacity: "1" }}
              transition={{ type: "spring", delay: 0.7 }}
            >
              <div className="h-3/4 bg-gray-400 overflow-auto">
              {/* {messages.map(
                ({
                  CLientText,
                  CurrentClientId,
                  ModeratorText,
                  CurrentModeratorId,
                  createdAt,
                }: ChatText) => (
                  <ClientChat key={docId} ModeratorText={ModeratorText} id={id} CLientText={CLientText}/>
                )
              )} */}
              </div>
              <div className="bottom-5 absolute w-full flex justify-center items-center space-x-4">
                <input
                  type="text"
                  className="w-3/4 py-3 border-2 outline-none px-4 focus:border-Teal rounded-md focus:duration-500"
                  placeholder="message here..."
                  onChange={(e) => setClientMessage(e.target.value)}
                  // value={ModMessage}
                />
                <button
                  className="bg-[#4169e1] text-white py-3 focus:ring-offset-2 ring-Teal focus:ring-2 focus:duration-500 px-10 rounded-md"
                  onClick={sendMsg}
                >
                  Send
                </button>
              </div>
            </motion.div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
