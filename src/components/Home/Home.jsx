import React from "react";
import avatar from "../../assets/avataaars.svg";
import Heading from "../Heading/Heading";
export default function Home() {
  return (
    <>
      <div className="home min-h-screen bg-mainColor center-div pt-20 md:pt-0">
        <div>
          <img src={avatar} alt="avatar" className="size-64 mx-auto" />
          <Heading text={"START FRAMEWORK"} starbgColor={"bg-mainColor"} textColor={"text-white"} bgColor={"bg-white"}/>
          <p className="text-center text-white">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </>
  );
}
