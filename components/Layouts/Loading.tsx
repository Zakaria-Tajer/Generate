import React from "react";
import { Triangle } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Triangle height="300" width="400" color="grey" ariaLabel="loading" />
    </div>
  );
};
