import Image from "next/image";
import React from "react";

export const Empty = () => {
  return (
    <div className="w-1/2 mx-auto py-2">
      <Image
        src="/images/cart-is-empty-5119267-4276058 (1).png"
        width="700"
        height="550"
        alt="space"
      />
      <div className="mt-4 space-y-4">
        <h1 className="text-2xl font-poppins text-center">
          There is nothing in here
        </h1>
        <p className="text-xl font-poppins text-center text-gray-400">Fill me up</p>
      </div>
    </div>
  );
};
