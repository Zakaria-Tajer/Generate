import { NextPage } from "next";
import { MainSnc } from "@/components/clients/MainSnc";
import Head from "next/head";
import { Navbar } from "@/components/Layouts/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <MainSnc />
    </>
  );
};

export default Home;
