import React from "react";

const VideoTitle = (props) => {
  return (
    <div className="absolute w-screen aspect-video bg-gradient-to-r from-black via-transparent to-transparent text-white pt-64 px-20">
      <h1 className="font-bold text-3xl">{props.title}</h1>
      <p className="py-6 text-lg w-1/4">{props.description}</p>
      <div className=" text-lg font-medium flex justify-start  ">
        <button className="flex  content-center leading-none py-4 px-10 bg-white hover:bg-white/75 text-black rounded   shadow-sm shadow-black">
          <span className="mx-2">
            <svg
              className="ml-1 w-4"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 1.01267e-06 17.4678 1.07997e-06 15.9282L1.68565e-06 2.0718C1.75295e-06 0.532196 1.66667 -0.430054 3 0.339746L15 7.26795Z"
                fill="black"
              />
            </svg>
          </span>
          <span className="self-center">Play</span>
        </button>
        <button className=" leading-none mx-3 py-4 px-10 bg-gray-600/60 hover:bg-gray-600/40  text-white rounded   shadow-sm shadow-black">
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
