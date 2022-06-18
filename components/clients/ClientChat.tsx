import React, { useEffect, useState } from "react";

type Text = {
  ModeratorText: string;
  id: string;
  CLientText: string;
};

export const ClientChat = ({ ModeratorText, id, CLientText }: Text) => {
  
  return (
    <>
      {/* <div className="w-80 py-4 rounded-tl-3xl  bg-gray-600 pl-4 text-white font-poppins ml-2 rounded-br-3xl">
        {ModeratorText} {id}
      </div>
        <div className="w-80 py-4 rounded-tl-3xl bg-blue-600 text-white font-poppins ml-auto mr-2 rounded-br-3xl pl-4 mt-2 mb-5">
          <h1>{CLientText}</h1>
        </div> */}
    </>
  );
};
