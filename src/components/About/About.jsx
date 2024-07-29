import React from "react";
import Heading from "../Heading/Heading";

export default function About() {
  return (
    <>
      <div className="home min-h-screen bg-mainColor center-div pt-20 md:pt-0">
          <div className="container">
            <div className="w-fit mx-auto"><Heading text={"ABOUT COMPONENT"} starbgColor={"bg-mainColor"} textColor={"text-white"} bgColor={"bg-white"} /></div>
            <div className="grid md:grid-cols-2 gap-4">
              <p className="md:p-4  text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              <p className="md:p-4 text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
      </div>
    </>
  );
}
