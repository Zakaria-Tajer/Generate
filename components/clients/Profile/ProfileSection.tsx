import React from "react";

export const ProfileSection = () => {
  // Todo: Update profile pic
  return (
    <div className="bg-gray-400 space-y-4 2xl:max-w-7xl 2xl:mx-auto 2xl:space-y-0">
      <h1 className="text-3xl font-poppins ml-4 mb-2">Edit Profile</h1>

      <div className="bg-white  xl:ml-28 xl:w-2/4 md:mx-auto rounded-xl 2xl:ml-40 py-3 pr-4 flex-col flex items-center ">
        <div className="w-28 h-28 md:mx-auto mb-2 bg-black rounded-full"></div>
        <form action="" className="space-y-6">
          <div className="flex ml-4 space-x-6">
            <div>
              <label
                htmlFor=""
                className="block font-poppins text-gray-400 mb-2"
              >
                First Name
              </label>
              <div className="bg-[#f6f6f8] font-poppins h-12 border-2 rounded w-44 md:w-56 flex items-center pl-3">
                Jhon
              </div>
            </div>
            <div>
              <label
                htmlFor=""
                className="block font-poppins text-gray-400 mb-2"
              >
                Last Name
              </label>
              <div className="bg-[#f6f6f8] font-poppins h-12 border-2 rounded w-44 md:w-56 flex items-center pl-3">
                Doe
              </div>
            </div>
          </div>
          <div className="ml-4 space-y-3">
            <label htmlFor="" className="block font-poppins text-gray-400 ">
              Email
            </label>
            <input
              className="bg-[#f6f6f8] font-poppins h-12 outline-none ring-2 focus:ring-black focus:ring-offset-4 rounded w-full md:w-[29.6rem] flex items-center pl-3"
              placeholder="Jhon@Doe.com"
            />
            <label htmlFor="" className="block font-poppins text-gray-400 ">
              Contact Number
            </label>
            <input
              className="bg-[#f6f6f8] font-poppins h-12 outline-none ring-2 focus:ring-black focus:ring-offset-4 rounded w-full md:w-[29.6rem] flex items-center pl-3"
              placeholder=" 661-744-9908"
            />
            <label htmlFor="" className="block font-poppins text-gray-400 ">
              Address
            </label>
            <input
              className="bg-[#f6f6f8] font-poppins h-12 outline-none ring-2 focus:ring-black focus:ring-offset-4 rounded w-full md:w-[29.6rem] flex items-center pl-3"
              placeholder="1773 Lane"
            />
          </div>
          <div className="flex ml-4 space-x-6">
            <div>
              <label
                htmlFor=""
                className="block font-poppins text-gray-400 mb-2"
              >
                City
              </label>
              <input
                className="bg-[#f6f6f8] font-poppins h-12 outline-none ring-2 focus:ring-black focus:ring-offset-4 rounded w-44 md:w-56 flex items-center pl-3"
                placeholder="Brc"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block font-poppins text-gray-400 mb-2"
              >
                State
              </label>
              <input
                className="bg-[#f6f6f8] font-poppins h-12 outline-none ring-2 focus:ring-black focus:ring-offset-4 rounded w-44 md:w-56 flex items-center pl-3"
                placeholder="New York"
              />
            </div>
          </div>
          <div className="flex ml-4 space-x-6">
            <div>
              <label
                htmlFor=""
                className="block font-poppins text-gray-400 mb-2"
              >
                Zip code
              </label>
              <input
                className="bg-[#f6f6f8] font-poppins h-12 outline-none ring-2 focus:ring-black focus:ring-offset-4 rounded w-44 md:w-56 flex items-center pl-3"
                placeholder="24000"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block font-poppins text-gray-400 mb-2"
              >
                Country
              </label>
              <input
                className="bg-[#f6f6f8] font-poppins h-12 outline-none ring-2 focus:ring-black focus:ring-offset-4 rounded w-44 md:w-56 flex items-center pl-3"
                placeholder="US"
              />
            </div>
          </div>
        <button className="bg-blue-600 py-4 text-white font-poppins mt-4 px-14 rounded-md ml-4 hover:duration-700 hover:bg-blue-800">
          Save
        </button>
        </form>
      </div>
    </div>
  );
};
