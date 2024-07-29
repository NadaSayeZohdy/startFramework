import React from "react";

export default function Heading({ text, starbgColor, textColor, bgColor }) {
  return (
    <>
      <h2 className={`text-center ${textColor} my-6 text-4xl font-bold `}>
        {text}
      </h2>
      <div className={`h-1 ${bgColor} w-3/5 mx-auto relative mb-6`}>
        <i
          className={`fa-solid fa-star ${textColor} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 ${starbgColor} center-div`}
        ></i>
      </div>
    </>
  );
}
