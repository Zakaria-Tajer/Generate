import { Login } from "@/components/admin/Auth/Login";
import { Reference } from "@/components/security/Reference";
import { NextPage } from "next";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RooteState } from 'store/store';

const Index: NextPage = () => {

  const successKey = useSelector((state:RooteState)=> state.sucessRef.success)

  return <>{successKey ? <Login /> : <Reference />}</>;
};

export default Index;

// ? check role of the user then redirect him to specific page
