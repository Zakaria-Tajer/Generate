import React from "react";
import Head from "next/head";
import { ProfileSection } from "@/components/clients/Profile/ProfileSection";
import { IndexLayout } from "Layout";

function Profile() {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <ProfileSection />
    </>
  );
}
Profile.PageLayout = IndexLayout

export default Profile;