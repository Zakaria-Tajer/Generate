import { Layouts } from "interfaces/Layouts";
import React, { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { LeftOutlined,RightOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store/store";
import { showSidebar } from "slices/switchSlice";
import { useSelector } from 'react-redux'
import { RooteState } from 'store/store'

export const MainChatSection: FC = ({ children }: Layouts) => {
  const dispatch:AppDispatch = useDispatch()
  const sidebar = useSelector((state:RooteState) => state.Sidebar.showBar)
  const [IsOpen,SetisOpen] = useState<boolean>(true)
  const showSideBar = () => {
    SetisOpen(!IsOpen)
    dispatch(showSidebar(!IsOpen))
  }
  return (
    <div className="w-4/5 h-screen">
      {children}
      <div className="bg-white h-[730px] relative">
        <div className="w-fit h-14 bg-black flex items-center justify-center cursor-pointer absolute right-0 top-56" onClick={showSideBar}>
          {/* <LeftOutlined className="text-white"/> */}
          {sidebar ? <RightOutlined className="text-white"/> : <LeftOutlined className="text-white" />}
        </div>
        <div className="pt-16 pl-14  space-x-2 ">
          {/* {reciver} */}
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-green-600"></div>
            <div className="bg-gray-400 rounded py-2 px-8 max-w-md ml-1">
              hey
            </div>
          </div>
          {/* {reciver} */}

          {/* {sender} */}
          <div className="flex items-center pt-5 pr-14 justify-end">
            <div className="bg-gray-400 rounded py-2 px-8 max-w-md mr-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum
            </div>
            <div className="w-6 h-6 rounded-full bg-green-600"></div>
          </div>
          {/* {sender} */}
          {/* {reciver} */}
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-green-600"></div>
            <div className="bg-gray-400 rounded py-2 px-8 max-w-md ml-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum
            </div>
          </div>
          {/* {reciver} */}

          {/* {sender} */}
          <div className="flex items-center pt-5 pr-14 justify-end">
            <div className="bg-gray-400 rounded py-2 px-8 max-w-md mr-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum
            </div>
            <div className="w-6 h-6 rounded-full bg-green-600"></div>
          </div>
          {/* {sender} */}
          {/* {reciver} */}
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-green-600"></div>
            <div className="bg-gray-400 rounded py-2 px-8 max-w-md ml-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum
            </div>
          </div>
          {/* {reciver} */}

          {/* {sender} */}
          <div className="flex items-center pt-5 pr-14 justify-end">
            <div className="bg-gray-400 rounded py-2 px-8 max-w-md mr-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum
            </div>
            <div className="w-6 h-6 rounded-full bg-green-600"></div>
          </div>
          {/* {sender} */}
          {/* {reciver} */}
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-green-600"></div>
            <div className="bg-gray-400 rounded py-2 px-8 max-w-md ml-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum
            </div>
          </div>
          {/* {reciver} */}

          {/* {sender} */}
          <div className="flex items-center pt-5 pr-14 justify-end">
            <div className="bg-gray-400 rounded py-2 px-8 max-w-md mr-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum
            </div>
            <div className="w-6 h-6 rounded-full bg-green-600"></div>
          </div>
          {/* {sender} */}
        </div>
      </div>
      <div className="border-t-[1px] border-blue-400">
        <div className="rounded-xl w-3/4 flex items-center h-16 mx-auto mt-4 bg-PureGrey relative">
          <input
            type="text"
            placeholder="Write Something...1"
            className="h-full px-10 w-full rounded font-poppins outline-none"
          />
          <div className="flex justify-end relative h-full w-1/2  space-x-1 items-center">
            <FontAwesomeIcon icon={faPaperclip} className="text-xl cursor-pointer"/>
            <div className="w-16 -right-6 h-full relative bg-blue-600 cursor-pointer rounded-full flex items-center justify-center ">
              <FontAwesomeIcon icon={faPaperPlane} className="rotate-45 text-white"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
