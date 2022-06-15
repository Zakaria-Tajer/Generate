import React, { FC, useState } from "react";
import {
  SearchOutlined,
  FilterOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { AppDispatch, RooteState } from "store/store";
import { useDispatch, useSelector } from "react-redux";
import { Filtring } from "slices/filterSlice";
export const Filter: FC = () => {
  const [Open, setOpen] = useState<boolean>(false);

  const dispatch: AppDispatch = useDispatch();
  
  const FliterClient = () => {
    dispatch(Filtring({ Client: true }));
  };
  const FliterDeveloper = () => {
    dispatch(Filtring({ Developer: true }));
  };
  const FliterModerator = () => {
    dispatch(Filtring({ Moderator: true }));
  };
  return (
    <div className="xl:w-5/6 mx-auto rounded-md h-16 mt-8 flex">
      <div className="ml-auto flex items-center mr-5 md:mr-7 xl:mr-2 2xl:mr-14 rounded">
        <div className="py-2 bg-white px-4 relative border-[1px] rounded flex items-center space-x-2">
          <FilterOutlined className="" />
          <h1 className="font-poppins">Filter</h1>
          <DownOutlined
            className="cursor-pointer"
            onClick={() => setOpen(!Open)}
          />
          {Open && (
            <div className="absolute z-10 w-44 py-2 bg-white shadow-xl list-none space-y-2 top-14 -right-3 rounded">
              <li
                className="w-full font-poppins hover:bg-gray-200 py-2 px-5 hover:duration-700 cursor-pointer"
                onClick={FliterClient}
              >
                <a>Clients</a>
              </li>
              <li
                className="w-full font-poppins hover:bg-gray-200 py-2 px-5 hover:duration-700 cursor-pointer"
                onClick={FliterModerator}
              >
                <a>Moderators</a>
              </li>
              <li
                className="w-full font-poppins hover:bg-gray-200 py-2 px-5 hover:duration-700 cursor-pointer"
                onClick={FliterDeveloper}
              >
                <a>Developers</a>
              </li>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
