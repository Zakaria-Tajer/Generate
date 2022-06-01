import { AdminNav } from "@/components/admin/Layouts/AdminNav";
import { Forms } from "@/components/settings/Forms";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";

export const getServerSideProps: GetServerSideProps = async () => {
  
  return {
      props: {
          data: {}
      },
  }
}


function Settings() {
  return (
    <div className="">
      <Head>
        <title>Settings</title>
      </Head>
      <Forms />
    </div>
  );
}

Settings.PageLayout = AdminNav;
export default Settings;
