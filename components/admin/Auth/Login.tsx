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
    const req = new XMLHttpRequest();
    req.open("POST", `${process.env.NEXT_PUBLIC_API_URL_Generate}api/SupersUsersLogin`, true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let response = JSON.parse(req.response.trim());
          console.log(response);
          if (response.bodyMessage == "Password Incorrect") {
            toast.error("Password Incorrect");
          } else if (response.bodyMessage == "success") {
            const {
              token,
              data: { role, unique_id },
            } = response;
            Cookies.set("token", token);
            Cookies.set("role", role);
            Cookies.set("unique_id", unique_id);
            if (role == "Moderator") {
              router.push("/moderator");
            } else if (role == "admin") {
              router.push("/Admin/dashboard");
            } else if (role == "Developer") {
              router.push("/developer");
            }
          } else {
            toast.error(response.bodyMessage);
          }
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Type", "multipart/form-data");

    req.send(`email=${email}&password=${password}`);
  };

  return (
    <div className="flex min-h-screen items-center ">
      <Vector />
      <div className="bg-white p-3 ml-14 w-1/2 flex justify-center">
        <div className="shadow-2xl rounded-md w-3/4 py-4">
          <form
            action=""
            className="space-y-4 py-4 flex flex-col items-center"
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
