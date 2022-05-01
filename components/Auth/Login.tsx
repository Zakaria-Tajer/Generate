/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { display } from "slices/switchSlice";
import { AppDispatch } from "store/store";

export const Login: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const switchToRegister = () => {
    dispatch(display(true));
  };
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="absolute top-10 left-24 xl:left-44 xl:top-2 2xl:top-6">
        <a className="font-poppins text-gray-400">
          New Here?{" "}
          <span className="text-main cursor-pointer" onClick={switchToRegister}>
            Register
          </span>
        </a>
      </div>
      <div className="bg-white py-3 px-10 rounded shadow-xl space-y-4">
        <div className=" space-y-3 text-center">
          <h1 className="font-Lato text-4xl uppercase tracking-wide">
            Welcome to Back
          </h1>
          <p className="font-poppins">Welcome back to dreamers platform</p>
        </div>
        <div className="mt-3">
          <form action="" className="space-y-6">
            <div>
              <label
                htmlFor=""
                className="font-poppins translate-y-2 translate-x-4 w-14 block bg-white text-main"
              >
                E-mail
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="md:w-[460px] w-96 xl:py-4 py-2 rounded pl-4 outline-none border-2 focus:border-blue-600"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="font-poppins translate-y-2 translate-x-4 w-20 block bg-white text-main"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="6+ strong chracter"
                className="md:w-[460px] w-96 xl:py-4 py-2 rounded pl-4 outline-none border-2 focus:border-blue-600"
              />
            </div>
            <button className=" text-white font-poppins hover:bg-blue-900 hover:duration-700 bg-main md:w-[460px] w-96 xl:py-3 py-2 rounded ">
              Login
            </button>
          </form>
          <div className="mt-10 relative">
            <div className="md:w-[460px] w-96 border-[1px]">
              <p className="text-gray-400 absolute -top-3 left-44 font-poppins z-10 w-[120px] bg-white">
                Or sign up with
              </p>
            </div>
            <div className="mt-6 mb-2 flex justify-around">
              <div className="py-3 px-12 border-2 cursor-pointer">
                <img
                  src="/images/icons/icons8-google.svg"
                  height="60px"
                  width="20px"
                  alt="google"
                  className="w-10"
                />
              </div>
              <div className="py-3 px-12 border-2 cursor-pointer">
                <img
                  src="/images/icons/icons8-facebook.svg"
                  height="60px"
                  width="20px"
                  alt="google"
                  className="w-10"
                />
              </div>
              <div className="py-3 px-12 border-2 cursor-pointer">
                <img
                  src="/images/icons/icons8-github.svg"
                  height="60px"
                  width="20px"
                  alt="google"
                  className="w-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
