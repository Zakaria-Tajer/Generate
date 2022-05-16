import React from "react";
import Head from "next/head";
import { IndexLayout } from "Layout";
import { SearchAndComposing } from "@/components/clients/email/SearchAndComposing";
import { Emails } from "@/components/clients/email/Emails";
import { ComposeEmail } from "@/components/clients/email/ComposeEmail";
import { useDispatch } from "react-redux";
import { Composing } from "slices/switchSlice";
import { AppDispatch } from "store/store";

function Email() {

  const dispatch:AppDispatch = useDispatch()
  const Compose = () => {
    dispatch(Composing(true))
  }
  return (
    <>
      <Head>
        <title>Email</title>
      </Head>
      <div className="w-full bg-white py-2 flex justify-around">
        <SearchAndComposing />
        <button className="py-3 mb-4 px-10 bg-DarkGrey text-white rounded-md font-poppins" onClick={Compose}>
          Compose
        </button>
      </div>
      <Emails />
      <ComposeEmail />
    </>
  );
}
Email.PageLayout = IndexLayout;
export default Email;
