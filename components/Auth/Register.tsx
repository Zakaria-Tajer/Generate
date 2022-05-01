import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { display } from "slices/switchSlice";
import { AppDispatch } from "store/store";

export const Register: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const switchToLogin = () => {
    dispatch(display(false));
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
          className="flex flex-col items-center justify-center space-y-6"
        >
          <div className="md:flex xl:mt-4 md:space-x-4 ml-4 xl:ml-[3rem] md:ml-0 space-y-2 md:space-y-0 justify-center">
            <input
              type="text"
              className="py-2 pl-4 w-96 xl:py-3 md:w-[223px] border-2 xl:-ml-1 rounded font-poppins outline-none focus:border-blue-600"
              placeholder="First Name"
            />
            <input
              type="text"
              className="py-2 pl-4 w-96 xl:py-3 md:w-[223px] rounded border-2 font-poppins outline-none focus:border-blue-600"
              placeholder="Last Name"
            />
          </div>
          <div className="flex flex-col py-3 space-y-3 mt-3 md:ml-4 xl:ml-16 md:-translate-x-2">
            <input
              type="email"
              className="md:w-[460px] w-96 xl:py-3 py-2 rounded pl-4 outline-none border-2 focus:border-blue-600"
              placeholder="Email"
            />
            <input
              type="password"
              className="md:w-[460px] w-96 xl:py-3 py-2 rounded pl-4 outline-none border-2 focus:border-blue-600"
              placeholder="password"
            />
            <input
              type="password"
              className="md:w-[460px] w-96 xl:py-3 py-2 rounded pl-4 outline-none border-2 focus:border-blue-600"
              placeholder="Confirm password"
            />
            <label className="w-64 flex flex-col items-center px-4 py-2 hover:duration-700 hover:bg-blue-800 text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="mt-2 text-base leading-normal">
                Select a profile image
              </span>
              <input type="file" className="hidden" />
            </label>
          </div>
          <div>
            <button className=" text-white font-poppins hover:bg-blue-900 hover:duration-700 bg-main md:w-[460px] w-96 xl:py-3 py-2 rounded ">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
