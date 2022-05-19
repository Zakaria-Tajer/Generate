import { ComposeEmail } from "@/components/clients/email/ComposeEmail";
import { MainSnc } from "@/components/clients/MainSnc";
import { Layouts } from "interfaces/Layouts";
import React from "react";

export function IndexLayout({ children }: Layouts) {
  
  return (
    <div className="min-h-screen bg-[#f6f6f8] flex w-full">
      <div className="w-full flex">
        <MainSnc />
        <div className="w-full mt-28 bg-[#f6f6f8] overflow-y-hidden">
          <ComposeEmail /> 
            {children}
        </div>
      </div>
    </div>
  );
}
