import { Filter } from "@/components/admin/Filter";
import { AdminNav } from "@/components/admin/Layouts/AdminNav";
import { UsersList } from "@/components/admin/UsersList";
import Head from "next/head";
import React from "react";

function User() {
  return (
    <div>
      <Head>
        <title>User</title>
      </Head>

      <Filter />
      <UsersList />
    </div>
  );
}

User.PageLayout = AdminNav;
export default User;
