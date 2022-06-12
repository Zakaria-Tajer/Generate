/* eslint-disable @next/next/no-img-element */
import { CurrentClient } from "@/components/moderator/CurrentClient";
import { ModeLayout } from "@/components/moderator/Layouts/ModeLayout";
import { MessageSys } from "@/components/moderator/MessageSys";
import { RightOutlined } from "@ant-design/icons";
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
import { Chat_Users, SpecClient } from "interfaces/Chat";
import Cookies from "js-cookie";
import { db } from "lib/firebase";
import { randColor } from "lib/RandColor";
import { Key, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChatData } from "slices/ChatSlice";
import { AppDispatch, RooteState } from "store/store";
import Image from "next/image";

export interface Text {
  ModeratorText: string;
  CLientText: string;
  id: string;
}

function Chat() {
  const [isData, setIsData] = useState<any>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMsg, setIsMsg] = useState<boolean>(false);
  const [isId, setIsId] = useState<string>("");
  const [Fname, setFname] = useState<string>("");
  const [Lname, setLname] = useState<string>("");
  const [modId, setModId] = useState<string>("");
  const MessageCollection = collection(db, "messages");
  const [ModMessage, setModMessage] = useState<string>("");
  const [messages, setMessages] = useState<any>([]);
  const clientText = "bruueedededjuh";
  // let color = randColor();
  const dispatch: AppDispatch = useDispatch();
  const date = new Date();

  const ref = query(
    collection(db, "messages"),
    orderBy("createdAt"),
    where("CurrentClientId", "==", isId)
    // limit(50)
    // where("createdAt", "<=", date),
  );

  useEffect(() => {
    onSnapshot(ref, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, [ref]);

  useEffect(() => {
    const { fname, lname, id } = JSON.parse(
      localStorage.getItem("dats") || "{}"
    );
    setFname(fname);
    setLname(lname);
    setModId(id);
    console.log(messages);
  }, [messages]);

  useEffect(() => {
    const req = new XMLHttpRequest();
    req.open(
      "POST",
      `${process.env.NEXT_PUBLIC_API_URL_Generate}api/AddedClinets`,
      true
    );
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let datas = JSON.parse(req.response.trim());
          console.log(datas);

          setIsData(datas);

          dispatch(ChatData({ Chat_Data_Users: datas }));
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Type", "multipart/form-data");
    req.send(`id=${isId}`);
  }, [dispatch, isId]);

  const getTheClient = () => {
    setIsOpen(true);
  };

  const sendMsg = async () => {
    await addDoc(MessageCollection, {
      CurrentClientId: isId,
      CurrentModeratorId: modId,
      ModeratorText: ModMessage,
      CLientText: "",
      createdAt: date,
    });
  };

  return (
    <>
      <div className=" w-full flex">
        <div className="w-1/3 bg-white">
          <div className="h-[909px]  pt-16 space-y-4">
            <h1 className="pl-8 font-poppins text-2xl">All Clients</h1>
            {isData.map((item: SpecClient, i: Key | null | undefined) => (
              <div
                className={`w-2/3 bg-blue-400 rounded-md cursor-pointer items-center flex justify-between ml-8 p-2`}
                // style={{ background: color }}
                key={item.id}
                onClick={() => setIsId(item.id)}
              >
                <div className="flex">
                  <div className="w-12 h-12 rounded-full bg-gray-400">
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL_Generate}uploads/${item.img}`}
                      className="w-12 h-12 object-cover rounded-full"
                      alt="profile pic"
                    />
                  </div>
                  <h1 className="font-poppins py-3 text-white pl-6">
                    {item.first_name} {item.last_name}
                  </h1>
                </div>
                <RightOutlined
                  className="text-white cursor-pointer font-bold mr-3"
                  onClick={getTheClient}
                />
              </div>
            ))}
          </div>
        </div>
        {isOpen ? (
          <div className="bg-white w-2/3 flex">
            <CurrentClient id="1" currentId={isId} />
            <div className="h-[908px] w-3/5 ml-auto relative">
              <div className="mt-6 w-full h-[800px] overflow-auto overflow-x-hidden scrollBar track thumb">
                {messages.map(({ ModeratorText, CLientText, id }: Text) => (
                  <MessageSys
                    ModeratorText={ModeratorText}
                    CLientText={CLientText}
                    key={id}
                    id={id}
                  />
                ))}
              </div>
              <div className="bottom-5 absolute w-full flex justify-center items-center space-x-4">
                <input
                  type="text"
                  className="w-3/4 py-3 border-2 outline-none px-4 focus:border-Teal rounded-md focus:duration-500"
                  placeholder="message here..."
                  onChange={(e) => setModMessage(e.target.value)}
                  value={ModMessage}
                />
                <button
                  className="bg-[#4169e1] text-white py-3 focus:ring-offset-2 ring-Teal focus:ring-2 focus:duration-500 px-10 rounded-md"
                  onClick={sendMsg}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white w-2/3 flex justify-center items-center">
            <div className="">
              <Image
                src="/images/cheerful-positive-smiling-standing-boy-sportive-clothing_213110-2471.webp"
                width={500}
                height={500}
                alt="message"
              />
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-poppins font-semibold">
                  It&apos;s nice to chat with someone
                </h1>
                <p className="text-xl font-poppins text-gray-500 font-semibold">
                  Pick a person from left menu<br></br>and start your
                  conversation
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

Chat.PageLayout = ModeLayout;

export default Chat;
