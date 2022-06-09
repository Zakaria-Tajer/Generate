import React, { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  getDocs,
  query,
  addDoc,
  getFirestore,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "lib/firebase";
import { MessagesData } from "interfaces/Chat";
import { dispatch } from "react-hot-toast/dist/core/store";

export const MessageSys = ({ CurrentClientId }: MessagesData) => {
  const [messages, setMessages] = useState<any>([]);
  const [ModMessage, setModMessage] = useState<string>("");
  const MessageCollection = collection(db, "messages");
  const [Fname, setFname] = useState<string>("");
  const [Lname, setLname] = useState<string>("");
  const [modId, setModId] = useState<string>("");

  useEffect(() => {
    const { fname, lname, id } = JSON.parse(
      localStorage.getItem("dats") || "{}"
    );
    console.log(fname, lname, id);
    setFname(fname);
    setLname(lname);
    setModId(id);
  }, []);

  useEffect(() => {
    // MessageCollection
    const getMessages = async () => {
      // const msg = await getDocs(MessageCollection);
      // console.log(msg.docs);
      // setMessages(
      //   msg.docs.map((doc) => ({ ...doc.data(), id: doc.id || null }))
      // );
      onSnapshot(MessageCollection, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          setMessages((prev:any) => [...prev, doc.data()])
          console.log("onsnapshot", doc.data())
        });
      });
    };
    getMessages();
    
  }, []);
 
// 
  const sendMsg = async () => {
    console.log(CurrentClientId);

    await addDoc(MessageCollection, {
      CurrentClientId: CurrentClientId,
      CurrentModeratorId: modId,
      ModeratorText: ModMessage,
      CLientText: "bruueedededjuh",
    });

    // dispatch(ModCliChatData({ChatModClientData: }))
  };

  return (
    <div className="h-[908px] bg-gray-400 w-2/5 ml-auto relative">
      <div className="mt-6 w-full">
        {messages.map((msg: MessagesData) => {
          return (
            <>
              <div key={msg.id} className="w-80 py-4 rounded bg-white ml-2">
                {msg.CLientText}
              </div>
              <div className="w-80 py-4 rounded bg-white ml-auto mr-2">
                {msg.ModeratorText}
              </div>
            </>
          );
        })}
      </div>

      <div className="bottom-5 absolute w-full flex justify-center items-center space-x-4">
        <input
          type="text"
          className="w-3/4 py-3 border-2 outline-none px-4 focus:border-Teal focus:duration-500"
          placeholder="message here..."
          onChange={(e) => setModMessage(e.target.value)}
        />
        <button
          className="bg-[#4169e1] text-white py-3 focus:ring-offset-2 ring-Teal focus:ring-2 focus:duration-500 px-10 rounded-md"
          onClick={sendMsg}
        >
          Send
        </button>
      </div>
    </div>
  );
};
