import React from "react";
import Heading from "../Heading/Heading";

export default function Notfound() {
  return (
    <>
      <div className="min-h-screen pt-24 flex justify-center items-center">
        <div className="container">
          <div className="w-fit mx-auto">
          <Heading
                text={"NOT FOUND PAGE"}
                starbgColor={"bg-white"}
                textColor={"text-navColor"}
                bgColor={"bg-navColor"}
              />
          </div>
          <p className="text-center text-6xl text-navColor font-semibold">This page not found <i className="fa-solid fa-ban text-mainColor"></i></p>
        </div>
      </div>
    </>
  );
}
