import { ClientChat } from "@/components/clients/ClientChat";
import { ComposeEmail } from "@/components/clients/email/ComposeEmail";
import { MainSnc } from "@/components/clients/MainSnc";
import { Layouts } from "interfaces/Layouts";
import React from "react";
import { useSelector } from "react-redux";
import { RooteState } from "store/store";

export function IndexLayout({ children }: Layouts) {
  const isChatTrue = useSelector((state:RooteState) => state.switch.DispalyChat)
  return (
    <div className="min-h-screen bg-[#f6f6f8] flex w-full">
      <div className="w-full flex">
        <MainSnc />
        <div className="w-full mt-28 bg-[#f6f6f8] overflow-y-hidden">
          <ComposeEmail />
          {isChatTrue && <ClientChat />}
          {children}
        </div>
      </div>
    </div>
  );
}
