import React from "react";
import Lottie from "lottie-react";
import { MoonLoader } from "react-spinners";

const LottieLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <MoonLoader />
    </div>
  );
};

export default LottieLoader;
