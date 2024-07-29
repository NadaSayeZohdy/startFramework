import React, { useState } from "react";
import Heading from "../Heading/Heading";
import poet1 from "../../assets/images/poert1.png";
import poet2 from "../../assets/images/port2.png";
import poet3 from "../../assets/images/port3.png";

export default function Portfolio() {
  const [show, setShow] = useState(false);
  const [src, setSrc] = useState("");
  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="w-fit mx-auto">
          <Heading
            text={"PORTFOLIO COMPONENT"}
            bgColor={"bg-navColor"}
            textColor={"text-navColor"}
            starbgColor={"bg-white"}
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            onClick={() => {
              setShow(true);
              setSrc(poet1);
            }}
            className="rounded-lg overflow-hidden relative group cursor-pointer"
          >
            <img src={poet1} className="w-full" alt="poet" />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-mainColor flex justify-center items-center opacity-0 duration-500 group-hover:opacity-85">
              <i className="fa-solid fa-plus text-8xl text-white"></i>
            </div>
          </div>
          <div
            onClick={() => {
              setShow(true);
              setSrc(poet2);
            }}
            className="rounded-lg overflow-hidden relative group cursor-pointer"
          >
            <img src={poet2} className="w-full" alt="poet" />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-mainColor flex justify-center items-center opacity-0 duration-500 group-hover:opacity-85">
              <i className="fa-solid fa-plus text-8xl text-white"></i>
            </div>
          </div>
          <div
            onClick={() => {
              setShow(true);
              setSrc(poet3);
            }}
            className="rounded-lg overflow-hidden relative group cursor-pointer"
          >
            <img src={poet3} className="w-full" alt="poet" />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-mainColor flex justify-center items-center opacity-0 duration-500 group-hover:opacity-85">
              <i className="fa-solid fa-plus text-8xl text-white"></i>
            </div>
          </div>
          <div
            onClick={() => {
              setShow(true);
              setSrc(poet1);
            }}
            className="rounded-lg overflow-hidden relative group cursor-pointer"
          >
            <img src={poet1} className="w-full" alt="poet" />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-mainColor flex justify-center items-center opacity-0 duration-500 group-hover:opacity-85">
              <i className="fa-solid fa-plus text-8xl text-white"></i>
            </div>
          </div>
          <div
            onClick={() => {
              setShow(true);
              setSrc(poet2);
            }}
            className="rounded-lg overflow-hidden relative group cursor-pointer"
          >
            <img src={poet2} className="w-full" alt="poet" />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-mainColor flex justify-center items-center opacity-0 duration-500 group-hover:opacity-85">
              <i className="fa-solid fa-plus text-8xl text-white"></i>
            </div>
          </div>
          <div
            onClick={() => {
              setShow(true);
              setSrc(poet3);
            }}
            className="rounded-lg overflow-hidden relative group cursor-pointer"
          >
            <img src={poet3} className="w-full" alt="poet" />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-mainColor flex justify-center items-center opacity-0 duration-500 group-hover:opacity-85">
              <i className="fa-solid fa-plus text-8xl text-white"></i>
            </div>
          </div>
          <div
            onClick={(e) => e.target.id == "screen" && setShow(false)}
            id="screen"
            className={`screen bg-navColor/25 fixed top-0 left-0 h-full w-full flex justify-center items-center z-50 ${
              show ? "" : "hidden"
            }`}
          >
            <img src={src} className=" w-3/4 md:w-2/5" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
