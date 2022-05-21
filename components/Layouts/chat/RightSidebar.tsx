import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faVideo } from "@fortawesome/free-solid-svg-icons";
export const RightSidebar = () => {
  return (
    <div className="w-2/6 bg-PureGrey">
      <div className="bg-gray-400 h-44 mt-10 flex justify-center items-center flex-col">
        <div className="w-24 h-24 rounded-full bg-blue-400"></div>
        <div className="mt-2">
          <h1 className="font-poppins text-2xl">Dianne Vanhorn</h1>
          <p className="font-poppins text-xl text-center">Junior Developer</p>
        </div>
      </div>
      <div className="flex bg-green-600">
        <div className="bg-white border-r-2 h-44 w-1/2 flex-col flex items-center space-y-2 justify-center">
          <div className="w-24 h-24 bg-blue-300 rounded-full flex items-center justify-center">
            <FontAwesomeIcon
              icon={faComment}
              className="text-blue-700 text-4xl"
            />{" "}
          </div>
          <h1 className="font-poppins text-xl">Chat</h1>
        </div>
        <div className="bg-purple-500 h-44 w-1/2 flex-col flex items-center space-y-2 justify-center">
          <div className="w-24 h-24 bg-blue-300 rounded-full flex items-center justify-center">
            <FontAwesomeIcon
              icon={faVideo}
              className="text-blue-700 text-4xl"
            />{" "}
          </div>
          <h1 className="font-poppins text-xl">Video Call</h1>
        </div>
      </div>
      <div className="bg-white h-40">
        <h1 className="font-poppins">Attachments</h1>
        <div className="flex items-center space-x-2 justify-center mt-5 ml-4">
          <div className="w-20 h-24 rounded-md bg-blue-200"></div>
          <div className="w-20 h-24 rounded-md bg-blue-200"></div>
          <div className="w-20 h-24 rounded-md bg-blue-200"></div>
          <div className="w-20 h-24 rounded-md bg-blue-200"></div>
        </div>
      </div>
    </div>
  );
};
