import React, { FC, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { display } from "slices/switchSlice";
import { AppDispatch } from "store/store";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import ReactLoading from 'react-loading';
import shortUUID from "short-uuid";

export const Register: FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [LastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmationPassword, setConfirmationPassword] = useState<string>("");
  const [files, setFile] = useState<string>("");

  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const switchToLogin = () => {
    dispatch(display(false));
  };

  const fileSave = (e: any) => {
    setFile(e.target.files[0]);
  };
  const getRegisterData = () => {
    const unique_id = shortUUID.generate()
    if (
      firstName !== "" &&
      LastName !== "" &&
      email !== "" &&
      password !== "" &&
      confirmationPassword !== "" &&
      files !== ""
    ) {
      if (password.length < 8 && confirmationPassword.length < 8) {
        toast.error("password to short");
      } else if (password !== confirmationPassword) {
        toast.error("passwords not matching");
      } else {
        let formdata = new FormData();
        formdata.append("file", files);
        formdata.append("firstName", firstName);
        formdata.append("LastName", LastName);
        formdata.append("email", email);
        formdata.append("password", password);
        formdata.append("confirmationPassword", confirmationPassword);
        formdata.append("unique_id", unique_id);

        axios.post("http://localhost:8000/api/user", formdata, {}).then((res) => {
          const { data } = res;
          console.log(data);
          if(data.bodyMessage == 'success'){
              Cookies.set('token', data.token)
              router.push('/client')
              console.log(unique_id);
          }else {
            toast.error(data.bodyMessage)
          }
        });
    
      }
    } else {
      toast.error("All fields are required");
      
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative space-y-10">
      <div className="absolute top-10 left-24 xl:left-44 xl:top-2 2xl:top-6">
        <a className="font-poppins text-gray-400">
          Have an account?{" "}
          <span className="text-main cursor-pointer" onClick={switchToLogin}>
            Sign In
          </span>
        </a>
      </div>
      <div className="bg-white shadow-xl md:w-4/5 xl:w-3/5 xl:py-6  mx-auto py-3 rounded space-y-3">
        <div className=" space-y-3 text-center">
          <h1 className="font-Lato text-4xl uppercase tracking-wide">
            Welcome to Gener8
          </h1>
          <p className="font-poppins">Welcome to dreamers platform</p>
        </div>

        {/* form here */}

        <form
          action=""
          className="flex flex-col items-center justify-center "
          encType="multipart/form-data"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="2xl:space-x-1 md:flex xl:mt-4 md:space-x-4 ml-4 xl:ml-[3rem] md:ml-0 space-y-2 md:space-y-0 justify-center">
            <input
              type="text"
              className="py-2 pl-4 w-96 xl:py-3 md:w-[223px] border-2 xl:-ml-1 rounded font-poppins outline-none focus:border-blue-600"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className="py-2 pl-4 w-96 xl:py-3 md:w-[223px] rounded border-2 font-poppins outline-none focus:border-blue-600"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-3 space-y-3 md:ml-4 xl:ml-16 md:-translate-x-2">
            <input
              type="email"
              className="md:w-[460px] w-96 xl:py-3 py-2 rounded pl-4 outline-none border-2 focus:border-blue-600"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="md:w-[460px] w-96 xl:py-3 py-2 rounded pl-4 outline-none border-2 focus:border-blue-600"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              className="md:w-[460px] w-96 xl:py-3 py-2 rounded pl-4 outline-none border-2 focus:border-blue-600"
              placeholder="Confirm password"
              onChange={(e) => setConfirmationPassword(e.target.value)}
            />
            <input
              type="file"
              name="upload_file"
              onChange={fileSave}
              multiple
            />
          </div>
          <div className="xl:ml-10">
            <button
              className=" text-white font-poppins hover:bg-blue-900 hover:duration-700 bg-main md:w-[460px] w-96 xl:py-3 py-2 rounded "
              onClick={getRegisterData}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
