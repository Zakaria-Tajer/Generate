/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { SettingOutlined, BellOutlined, KeyOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RooteState } from "store/store";
import axios from "axios";
import toast from "react-hot-toast";

export const Forms = () => {
  const datas = useSelector((state: RooteState) => state.SuperUsers);
  const [fName, setFname] = useState<string>("");
  const [lName, setLname] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [isImg, setIsImg] = useState<string>("");

  const [isAdressEmail, setAdressEmail] = useState<string>("");
  const [isUsername, setIsUsername] = useState<string>("");
  const [isPhoneNumber, setIsPhoneNumber] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  useEffect(() => {
    const datas = localStorage.getItem("dats") || "{}";
    const { fname, lname, id, image } = JSON.parse(datas);
    setFname(fname);
    setLname(lname);
    setId(id);
    setIsImg(image);

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
  }, []);
  const getFile = (e: any) => {
    setImg(e.target.files[0]);
  };
  const save = () => {
    if (username == "" || email == "" || number == "") {
      toast.error("All fields are required");
    } else {
      let formdata = new FormData();
      formdata.append("file", img);
      formdata.append("id", id);
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
  return (
    <div className="flex">
      
      <div className="bg-[#F8FAFC] h-[900px] w-full pl-40 pt-14 space-y-4">
        <h1 className="text-2xl font-poppins font-semibold">Account</h1>
        <div className="h-14">
          <h3 className="font-poppins text-lg">Profile</h3>
          <p className="text-gray-400 text-sm font-poppins">
            This infoThis infoThis infoThis infoThis info
          </p>
        </div>
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="flex">
            <div>
              <label htmlFor="" className="block mb-1 font-poppins">
                First name
              </label>
              <div className="w-96 py-2 px-6 font-poppins border-2 outline-none rounded-md">
                <h1>{datas.FirstName == "" ? fName : datas.FirstName}</h1>
              </div>
            </div>

            <div className="space-x-7">
              <label htmlFor="" className="block mb-1 ml-8 font-poppins">
                Last name
              </label>
              <div className="w-96 py-2 px-6 font-poppins border-2 outline-none rounded-md">
                <h1>{datas.LastName == "" ? lName : datas.LastName}</h1>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="" className="block mb-1 font-poppins">
              Username
            </label>
            {isUsername ? (
              <div className="w-96 py-2 px-6 font-poppins border-2 outline-none rounded-md">
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
          <div className="mt-6 flex items-center space-x-10">
            <div>
              <label htmlFor="" className="block mb-1 font-poppins">
                Photo
              </label>
              <div className="w-14 h-14 rounded-full bg-blue-400">
                <img
                  src={
                    datas.img == ""
                      ? `http://localhost:8000/adminUploads/${isImg}`
                      : `http://localhost:8000/adminUploads/${datas.img}`
                  }
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
          <div className="w-1/2 bg-gray-400 h-[1px] mt-14"></div>
          <div className="mt-6 space-y-6">
            <h1 className="text-xl font-poppins">Personal informations</h1>
            <div className=" space-y-3">
              <label htmlFor="" className="block mb-1  font-poppins">
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

              <label htmlFor="" className="block mb-1  font-poppins">
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
                  className="w-96 py-2 px-6 font-poppins border-2 outline-none rounded-md"
                  onChange={(e) => setNumber(e.target.value)}
                />
              )}
            </div>
          </div>
          <div className="w-1/2 bg-gray-400 h-[1px] mt-14"></div>
          <button
            className="px-6 py-2 mt-4 bg-blue-600 text-white rounded-md font-poppins"
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
