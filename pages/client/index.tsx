import { NextPage } from "next";
import { MainSnc } from "@/components/clients/MainSnc";
import Head from "next/head";

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
