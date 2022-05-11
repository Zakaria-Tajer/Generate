import { NextPage } from "next";
import { MainSnc } from "@/components/clients/MainSnc";
import Head from "next/head";
import { Navbar } from "@/components/Layouts/Navbar";
import { MainProject } from "@/components/clients/MainProject";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="min-h-screen bg-[#f6f6f8] flex w-full">
        <div className="w-full flex">
          <MainSnc />
          <div className="w-full mt-28 bg-[#f6f6f8]">
            <MainProject />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
