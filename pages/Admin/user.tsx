import { AdminNav } from "@/components/admin/Layouts/AdminNav";
import Head from "next/head";
import React from "react";

function User() {
  return (
    <div>
      <Head>
        <title>User</title>
      </Head>
      User
    </div>
  );
}

User.PageLayout = AdminNav;
export default User;
