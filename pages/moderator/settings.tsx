import { ModeLayout } from "@/components/admin/Layouts/ModeLayout";
import { Forms } from "@/components/settings/Forms";
import Head from "next/head";

function Settings() {
  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <Forms />
    </>
  );
}

Settings.PageLayout = ModeLayout;

export default Settings;
