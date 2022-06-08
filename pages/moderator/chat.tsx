/* eslint-disable @next/next/no-img-element */
import { Chat } from "@/components/moderator/CurrentClient";
import { ModeLayout } from "@/components/moderator/Layouts/ModeLayout";
import { MessageSys } from "@/components/moderator/MessageSys";
import { RightOutlined } from "@ant-design/icons";
import { Chat_Users } from "interfaces/Chat";
import { randColor } from "lib/RandColor";
import { Key, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { ChatData } from "slices/ChatSlice";
import { AppDispatch } from "store/store";
function Home() {
  const [isData, setIsData] = useState<any>([]);
  const [chatData, setChatData] = useState<any>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  let color = randColor();
  const dispatch: AppDispatch = useDispatch();
  const reference = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const id = localStorage.getItem("ids");
    const req = new XMLHttpRequest();
    req.open(
      "POST",
      `${process.env.NEXT_PUBLIC_API_URL_Generate}api/setClientInChat`,
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
    req.send(`id=${id}`);
  }, [dispatch]);

  const getTheClient = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className=" w-full flex">
        <div className="w-1/3 bg-white">
          <div className="h-[909px]  pt-16 space-y-4">
          <h1 className="pl-8 font-poppins text-2xl">All Clients</h1>
            {isData.map((item: Chat_Users, i: Key | null | undefined) => (
              <div
                className={`w-2/3 rounded-md cursor-pointer items-center flex justify-between ml-8 p-2`}
                style={{ background: color }}
                key={i}
                onClick={getTheClient}
              >
                <div className="flex">
                  <input type="hidden" value={item.id} ref={reference} />
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
                <RightOutlined className="text-white cursor-pointer font-bold mr-3" />
              </div>
            ))}
          </div>
        </div>
        {isOpen && <Chat currentId={reference} />}
        <MessageSys />
      </div>
    </>
  );
}

Home.PageLayout = ModeLayout;

export default Home;
