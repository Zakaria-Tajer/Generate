import { AdminNav } from "@/components/admin/Layouts/AdminNav";
import Head from "next/head";
import React from "react";

function Settings() {
  return (
    <div>
      <Head>
        <title>Settings</title>
      </Head>
      settings
    </div>
  );
}

Settings.PageLayout = AdminNav;
export default Settings;
