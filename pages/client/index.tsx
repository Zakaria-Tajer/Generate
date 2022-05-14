import { NextPage } from "next";
import Head from "next/head";
import { MainProject } from "@/components/clients/MainProject";
import { IndexLayout } from "Layout";

function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <MainProject />
    </>
  );
}

Home.PageLayout = IndexLayout;

export default Home;
