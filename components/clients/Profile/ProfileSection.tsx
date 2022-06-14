/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { RooteState } from "store/store";

export const ProfileSection = () => {
  // Todo: Update profile pic
  const [Email, setEmail] = useState<string>("");
  const [Number, setNumber] = useState<string>("");
  const [Address, setAddress] = useState<string>("");
  const [City, setCity] = useState<string>("");
  const [State, setState] = useState<string>("");
  const [ZipCode, setZipCode] = useState<string>("");
  const [Country, setCountry] = useState<string>("");

  const data = useSelector((state: RooteState) => state.Data);
  console.log(data);

  const SaveChanges = () => {
    const req = new XMLHttpRequest();
    req.open("POST", `${process.env.NEXT_PUBLIC_API_URL_Generate}api/updateCredential`, true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          // Todo: implement parsing data
          let datas = JSON.parse(req.response.trim())
          const { status, bodyMessage } = datas
          if(status == 201 && bodyMessage == 'success'){
            toast.success(bodyMessage)
          }else {
            toast.error(bodyMessage)
          }
          console.log(datas);
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Type", "multipart/form-data");
    req.send(
      `email=${Email}&number=${Number}&address=${Address}&city=${City}&state=${State}&zipCode=${ZipCode}&Country=${Country}&client_id=${data.uniqueId}`
    );
  };
  return (
    <div className=" space-y-4 2xl:max-w-7xl 2xl:mx-auto 2xl:space-y-0">
      <h1 className="text-3xl font-poppins ml-4 mb-2">Edit Profile</h1>

      <div className="bg-white  xl:ml-28 xl:w-2/4 md:mx-auto rounded-xl 2xl:ml-40 py-3 pr-4 flex-col flex items-center space-y-4">
        <div className="w-28 h-28 md:mx-auto mb-2  rounded-full">
          <img
            src={`http://localhost:8000/uploads/${data.img}`}
            width="200"
            height="200"
            alt="profile"
            className="object-cover rounded-full w-28 h-28 "
          />
        </div>
        <form action="" className="space-y-6" onSubmit={e => e.preventDefault()}>
          <div className="flex ml-4 space-x-6">
            <div>
              <label
                htmlFor=""
                className="block font-poppins text-gray-400 mb-2"
              >
                First Name
              </label>
              <div className="bg-[#f6f6f8] font-poppins h-12 border-2 rounded w-44 md:w-56 flex items-center pl-3">
                {data.fName}
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
                {data.lName}
              </div>
            </div>
          </div>
          <div className="ml-4 space-y-3">
            <label htmlFor="" className="block font-poppins text-gray-400 ">
              Email
            </label>
            <input
              className="bg-[#f6f6f8] font-poppins h-12 outline-none focus:ring-2 focus:ring-black focus:ring-offset-4 rounded w-full md:w-[29.6rem] flex items-center pl-3"
              placeholder="Jhon@Doe.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="" className="block font-poppins text-gray-400 ">
              Contact Number
            </label>
            <input
              className="bg-[#f6f6f8] font-poppins h-12 outline-none focus:ring-2 focus:ring-black focus:ring-offset-4 rounded w-full md:w-[29.6rem] flex items-center pl-3"
              placeholder=" 661-744-9908"
              type="number"
              onChange={(e) => setNumber(e.target.value)}
            />
            <label htmlFor="" className="block font-poppins text-gray-400 ">
              Address
            </label>
            <input
              className="bg-[#f6f6f8] font-poppins h-12 outline-none focus:ring-2 focus:ring-black focus:ring-offset-4 rounded w-full md:w-[29.6rem] flex items-center pl-3"
              placeholder="1773 Lane"
              onChange={(e) => setAddress(e.target.value)}
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
                className="bg-[#f6f6f8] font-poppins h-12 outline-none focus:ring-2 focus:ring-black focus:ring-offset-4 rounded w-44 md:w-56 flex items-center pl-3"
                placeholder="Brc"
                onChange={(e) => setCity(e.target.value)}
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
                className="bg-[#f6f6f8] font-poppins h-12 outline-none focus:ring-2 focus:ring-black focus:ring-offset-4 rounded w-44 md:w-56 flex items-center pl-3"
                placeholder="New York"
                onChange={(e) => setState(e.target.value)}
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
                className="bg-[#f6f6f8] font-poppins h-12 outline-none focus:ring-2 focus:ring-black focus:ring-offset-4 rounded w-44 md:w-56 flex items-center pl-3"
                placeholder="24000"
                onChange={(e) => setZipCode(e.target.value)}
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
                className="bg-[#f6f6f8] font-poppins h-12 outline-none focus:ring-2 focus:ring-black focus:ring-offset-4 rounded w-44 md:w-56 flex items-center pl-3"
                placeholder="US"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>
          <button
            className="bg-blue-600 py-4 text-white font-poppins mt-4 px-14 rounded-md ml-4 hover:duration-700 hover:bg-blue-800"
            onClick={SaveChanges}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
