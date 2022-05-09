import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React from "react";

export const Expired = () => {
  const router = useRouter()
  const expiredTokenLogout = () => {
    Cookies.remove('token')
    router.push('/')
  }

  return (
    <div className="bg-gray-400/75 fixed inset-0 z-10 flex items-center justify-center">
      <div className="bg-white shadow-xl max-w-2xl px-10 xl:w-2/5 h-56 mx-auto rounded-md flex flex-col items-center space-y-4 justify-center">
        <h1 className="font-poppins text-2xl">Oops Looks like you&apos;re session is expired</h1>
        <button className="font-poppins w-56 py-3 rounded-md text-white bg-blue-600" onClick={expiredTokenLogout}>Ok</button>
      </div>
    </div>
  );
};
