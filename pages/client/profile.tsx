import { MainSnc } from "@/components/clients/MainSnc";
import React from "react";
import Head from "next/head";
import { ProfileSection } from "@/components/clients/Profile/ProfileSection";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className="min-h-screen bg-[#f6f6f8] flex w-full">
        <div className="w-full flex">
          <MainSnc />
          <div className="w-full mt-28 bg-[#f6f6f8]">
            <ProfileSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
