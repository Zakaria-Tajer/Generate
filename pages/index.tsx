/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Login } from "@/components/Auth/Login";
import { Register } from "@/components/Auth/Register";
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { RooteState } from "store/store";
import Head from "next/head";

const Home: NextPage = () => {
  const show = useSelector((state: RooteState) => state.switch.show);

  return (
    <div className="xl:flex overflow-y-hidden">
      <Head>
        <title>Login</title>
      </Head>
      <div className="xl:w-1/2">{show ? <Register /> : <Login />}</div>
      <div className="xl:w-1/2">
        <img
          src="/images/register.png"
          alt="dream"
          className="object-cover min-h-screen"
        />
      </div>
    </div>
  );
};

export default Home;
