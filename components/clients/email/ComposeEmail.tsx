import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMinus, faGrin } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RooteState } from "store/store";
import { useDispatch } from "react-redux";
import { Composing, ShowEmoji } from "slices/switchSlice";
import { AppDispatch } from "store/store";
import Picker from "emoji-picker-react";
import { sendEmails } from "lib/RequestApi";

export const ComposeEmail = () => {
  const [recipent, setRecipent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [show, setShow] = useState<boolean>(false);
  const compsoeEmail = useSelector(
    (state: RooteState) => state.ComposeEmail.Compose
  );
  const showEmoji = useSelector(
    (state: RooteState) => state.EmojiSwitcher.Emojis
  );
  const userData = useSelector((state: RooteState) => state.Data);
  console.log(userData.uniqueId);

  const dispatch: AppDispatch = useDispatch();
  const Compose = () => {
    dispatch(Composing(false));
  };
  useEffect(()=> {

  },[])
  

  const sendEmail = () => {
    const req = new XMLHttpRequest();
    req.open("POST", "http://localhost:8000/api/Emailing", true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          // Todo: implement parsing data
          let data = req.response.trim();

          console.log(data);
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Type", "multipart/form-data");

    req.send(`recipents=${recipent}&title=${title}&message=${message}`);

  };

  return (
    <div className="relative z-10">
      <Transition
        as="div"
        className="w-2/5 bg-white shadow-xl p-4 right-2 rounded-lg top-80 absolute"
        show={compsoeEmail}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-700"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className=" w-fit flex items-center space-x-4 px-3 ml-auto">
          <div className="px-5 py-1 rounded hover:bg-gray-300 cursor-pointer hover:duration-700">
            <FontAwesomeIcon icon={faMinus} className="cursor-pointer" />
          </div>
          <div className="px-5 py-1 rounded hover:bg-gray-300 cursor-pointer hover:duration-700">
            <FontAwesomeIcon
              icon={faXmark}
              className="cursor-pointer text-gray-500"
              onClick={Compose}
            />
          </div>
        </div>
        <div className="w-full h-14 mt-4 space-x-4 flex items-center  border-b-[1px] border-gray-400">
          <h1 className="font-poppins">To:</h1>
          <input
            type="text"
            className="h-full w-1/2 outline-none font-poppins"
            onChange={(e) => setRecipent(e.target.value)}
          />
        </div>

        <div className="w-full h-14 mt-4 space-x-4 flex items-center bg-gray-400 border-b-[1px] border-gray-400">
          <input
            type="text"
            className="h-full outline-none w-full font-poppins px-5"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <textarea
          className="outline-none w-full h-64 mt-2"
          onChange={(e) => setMessage(e.target.value)}
        >
        </textarea>
        <div className="w-full bg-PureGrey relative flex items-center justify-end py-2 space-x-4 pr-3">
          <div className="w-10 h-10 rounded-full hover:bg-gray-400 hover:duration-700 cursor-pointer flex items-center justify-center">
           
          </div>
          <button
            className="bg-DarkOne rounded-md text-white px-10 py-3 font-poppins"
            onClick={sendEmail}
          >
            Send Now
          </button>
        </div>
        
      </Transition>
    </div>
  );
};
