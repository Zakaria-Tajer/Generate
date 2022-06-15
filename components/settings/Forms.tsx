/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { SettingOutlined, BellOutlined, KeyOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RooteState } from "store/store";
import axios from "axios";
import toast from "react-hot-toast";
import { useMediaQuery } from "react-responsive";

export const Forms = () => {

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [isImg, setIsImg] = useState<string>("");
  // const [id, setId] = useState<string>("");

  const [isAdressEmail, setAdressEmail] = useState<string>("");
  const [isUsername, setIsUsername] = useState<string>("");
  const [isPhoneNumber, setIsPhoneNumber] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const id = useSelector((state: RooteState) => state.SuperUsers.id)
  const user = useSelector((state: RooteState) => state.SuperUsers)
  useEffect(() => {


    const req = new XMLHttpRequest();
    req.open("POST", `${process.env.NEXT_PUBLIC_API_URL_Generate}api/CheckAdditionalInfo`, true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          // Todo: implement parsing data
          let data = JSON.parse(req.response.trim());
          // let data = req.response.trim();
          if (data.data !== null) {
            const { Email_Address, Phone_number, Username } = data.data;
            setIsPhoneNumber(Phone_number);
            setAdressEmail(Email_Address);
            setIsUsername(Username);
            setIsDisabled(true);
          }
          console.log(data);
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Type", "multipart/form-data");

    req.send(`user_id=${id}`);
  }, [id]);
  const getFile = (e: any) => {
    setImg(e.target.files[0]);
  };
  const save = () => {
    if (username == "" || email == "" || number == "") {
      toast.error("All fields are required");
    } else {
      let formdata = new FormData();
      formdata.append("file", img);
      formdata.append("id", id as string);
      formdata.append("username", username);
      formdata.append("number", number);
      formdata.append("emailAdress", email);

      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL_Generate}api/AdditionalInfo`, formdata, {})
        .then((res) => {
          const { data } = res;
          console.log(data);
        });
    }
  };
  const imgs = useSelector((state: RooteState) => state.SuperUsers)
  const Mobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div className="flex">

      <div className="bg-[#F8FAFC] h-[900px] w-full  2xl:pt-14 space-y-4">
        <div className="w-full py-4 text-center xl:text-left xl:pl-44 2xl:pl-56">
          <h1 className="text-2xl font-poppins font-semibold">Account</h1>
          <h3 className="font-poppins text-lg ">Profile</h3>
        </div>
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="md:flex space-y-5 md:space-y-0 ml-4 2xl:ml-[14.5rem] md:space-x-6 md:ml-5 lg:w-3/4 lg:mx-auto ">
            <div>
              <label htmlFor="" className="block mb-1 font-poppins">
                First name
              </label>
              <div className="w-96 md:w-80 py-2 px-6 font-poppins border-2 outline-none rounded-md">
                <h1>{user.FirstName}</h1>
              </div>
            </div>

            <div className="lg:space-x-7">
              <label htmlFor="" className="block mb-1 2xl:ml-8 md:ml-0 font-poppins">
                Last name
              </label>
              <div className="w-96 py-2 md:w-80 px-6 font-poppins border-2 outline-none rounded-md">
                <h1>{user.LastName}</h1>
              </div>
            </div>
          </div>
          <div className="mt-6 ml-4 md:ml-5 lg:pl-[6.5rem] xl:pl-40 2xl:pl-[13.5rem]">
            <label htmlFor="" className="block mb-1 font-poppins">
              Username
            </label>
            {isUsername ? (
              <div className="w-96 md:w-80 py-2 px-6 font-poppins border-2 outline-none rounded-md">
                <h1>{isUsername}</h1>
              </div>
            ) : (
              <input
                type="text"
                placeholder=""
                className="w-96 py-2 px-6 font-poppins border-2 outline-none rounded-md"
                onChange={(e) => setUsername(e.target.value)}
              />
            )}
          </div>
          <div className="mt-6 pl-6 lg:pl-32 xl:pl-44 xl:pt-4 2xl:pl-[14.5rem] 2xl:pt-2 flex items-center space-x-10">
            <div>
              <label htmlFor="" className="block mb-1 font-poppins">
                Photo
              </label>
              <div className="w-14 h-14 rounded-full bg-blue-400">
                <img
                  src={`http://localhost:8000/adminUploads/${imgs ? imgs.img : imgs}`}
                  className="object-cover h-full w-full rounded-full"
                  alt="profile"
                />
              </div>
            </div>
            <div className="flex bg-grey-lighter">
              <label className=" flex flex-col items-center px-10 py-2 bg-white text-blue hover:text-blue-400 hover:duration-700 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue ">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span className="mt-2 font-poppins leading-normal">Select</span>
                {isDisabled ? (
                  ""
                ) : (
                  <input
                    type="file"
                    className="hidden"
                    name="file"
                    onChange={getFile}
                    multiple
                  />
                )}
              </label>
            </div>
          </div>
          {!Mobile && <div className="xl:ml-44 w-1/2 bg-gray-400 h-[1px] mt-14"></div>}
          <div className="mt-6 space-y-6 ml-4 pt-4 lg:pl-24 2xl:pl-[12rem] xl:pl-[9.4rem]">
            <h1 className="text-xl font-poppins lg:ml-3">Personal informations</h1>
            <div className=" space-y-3  lg:flex xl:block xl:space-y-4 lg:relative lg:space-x-3">
              <label htmlFor="" className="block mb-1 lg:ml-3 font-poppins xl:relative lg:absolute xl:bottom-0 bottom-10">
                Email Address
              </label>
              {isAdressEmail ? (
                <div className="w-96 py-2 px-6 font-poppins border-2 outline-none rounded-md">
                  <h1>{isAdressEmail}</h1>
                </div>
              ) : (
                <input
                  type="text"
                  placeholder=""
                  className="w-96 py-2 px-6 font-poppins border-2 outline-none rounded-md"
                  onChange={(e) => setEmail(e.target.value)}
                />
              )}

              <div className="relative xl:space-y-4">
                <label htmlFor="" className="block mb-1 lg:absolute xl:relative lg:bottom-10 xl:bottom-0 font-poppins">
                  Phone number
                </label>
                {isPhoneNumber ? (
                  <div className="w-96 py-2 px-6 font-poppins border-2 outline-none rounded-md">
                    <h1>{isPhoneNumber}</h1>
                  </div>
                ) : (
                  <input
                    type="text"
                    placeholder=""
                    className="w-96 py-2 px-6  font-poppins border-2 outline-none rounded-md"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                )}
              </div>
            </div>
          </div>
          {!Mobile && <div className="xl:ml-44 w-1/2 bg-gray-400 h-[1px] mt-14"></div>}
          <button
            className="px-6 py-2 ml-4 lg:ml-[7.7rem] mt-4 xl:ml-[11rem] 2xl:ml-[13.8rem] 2xl:px-14 bg-blue-600 text-white rounded-md font-poppins"
            onClick={save}
            disabled={isDisabled}
          >
            save
          </button>
        </form>
      </div>
    </div>
  );
};
