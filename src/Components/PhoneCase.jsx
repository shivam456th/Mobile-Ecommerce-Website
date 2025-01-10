import React, { useContext } from "react";
import { Context } from "../Store";
import Video_ from "../assets/IphoneVideo.mp4";
import IphoneVideo from "../assets/iphoneImage.jpg";

const PhoneCase = () => {
    const {PhoneCaseData} = useContext(Context)
  return (
    <div>
      
      <p className="md:text-2xl font-semibold text-center my-5">Exploring a Website on Phone</p>
      <div className="flex w-full justify-center px-5">
        <div className="w-full h-[20vh] md:h-[80vh] md:w-full relative group">
          <video
            className=" w-full h-full rounded-xl absolute top-0 left-0 object-cover transition-opacity duration-300 group-hover:opacity-100"
            autoPlay
            loop
            muted
            src={Video_}
          ></video>
          <img
            className="w-full h-full absolute rounded-xl top-0 left-0 object-cover group-hover:opacity-0 transition-opacity duration-300"
            src={IphoneVideo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneCase;
