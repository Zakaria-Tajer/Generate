import { requestCreator } from "lib/requestCreator";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Vector } from "./Vector";
import axios from "axios";
import Cookies from "js-cookie";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const Login = () => {
    let formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);

    axios
      .post("http://localhost:8000/api/adminLogin", formdata, {})
      .then((res) => {
        console.log(res);
        const { bodyMessage, status,token } = res.data;

        if (status == 400) {
          toast.error(bodyMessage);
        }else if(status == 201){
            Cookies.set('token', token)
            router.push('/Admin/dashboard')
        }
      });
    
  };

  return (
    <div className="flex min-h-screen items-center ">
      <Vector />
      <div className="bg-white p-3 ml-14 w-1/2 flex justify-center">
        <div className="shadow-2xl rounded-md w-3/4 py-4">
          <form
            action=""
            className="space-y-4 flex flex-col items-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="text-center">
              <Image
                src="/images/icons/key-lock-password-svgrepo-com.svg"
                width="45px"
                height="45px"
                alt="lock"
              />
              <h1 className="font-poppins text-lg">Login</h1>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3">
              <input
                type="email"
                className="w-96 py-3 px-10 rounded-md border-2 focus:border-blue-600 outline-none"
                placeholder="E-mail Address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="w-96 py-3 px-10 rounded-md border-2 focus:border-blue-600 outline-none"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="rounded-md text-white hover:bg-blue-800 hover:duration-700 px-20 mt-4 py-3 font-poppins bg-blue-600"
              onClick={Login}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
