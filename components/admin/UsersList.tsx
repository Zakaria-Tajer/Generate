import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RooteState } from "store/store";
import { Client } from "./Filtered/Client";
import { Developer } from "./Filtered/Developer";
import { Moderator } from "./Filtered/Moderator";

export const UsersList: FC = () => {
  const userFilter = useSelector((state: RooteState) => state.UsersFiltiring);
  return (
    <div className="">
      <div className="container mx-auto px-4 sm:px-8 ">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Unique_id
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>

                  </tr>
                </thead>
                <tbody>
                  {(userFilter.Client && <Client />) ||
                    (userFilter.Developer && <Developer />) ||
                    (userFilter.Moderator && <Moderator />) || <Client />}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
