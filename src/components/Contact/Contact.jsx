import React, { useState } from "react";
import Heading from "../Heading/Heading";

export default function Contact() {
  const [topName, setTopName] = useState(false);
  const [topAge, setTopAge] = useState(false);
  const [topMail, setTopMail] = useState(false);
  const [topPass, setTopPass] = useState(false);
  return (
    <>
      <div className="min-h-screen pt-24 ">
        <div className="container">
          <div className="w-fit mx-auto">
            <Heading
              text={"CONATCT SECTION"}
              starbgColor={"bg-white"}
              textColor={"text-navColor"}
              bgColor={"bg-navColor"}
            />
          </div>
          <div className="form w-full lg:w-3/5 mx-auto mt-16">
            <div className="name my-2">
              <label
                htmlFor="name"
                className={`block text-mainColor relative duration-500 ${
                  topName ? "top-0 z-10" : "top-10 -z-10"
                } `}
              >
                userName:
              </label>
              <input
                onInput={(e) =>
                  e.target.value == "" ? setTopName(false) : setTopName(true)
                }
                id="name"
                type="text"
                placeholder="userName"
                className="z-30 w-full border-b p-4 focus:outline-none"
              />
            </div>
            <div className="age my-2">
              <label
                htmlFor="age"
                className={`block text-mainColor relative duration-500 ${
                  topAge ? "top-0 z-10" : "top-10 -z-10"
                } `}
              >
                userAge:
              </label>
              <input
                onInput={(e) =>
                  e.target.value == "" ? setTopAge(false) : setTopAge(true)
                }
                id="age"
                type="text"
                placeholder="userAge"
                className="z-30 w-full border-b p-4 focus:outline-none"
              />
            </div>
            <div className="mail my-2">
              <label
                htmlFor="mail"
                className={`block text-mainColor relative duration-500 ${
                  topMail ? "top-0 z-10" : "top-10 -z-10"
                } `}
              >
                userEmail:
              </label>
              <input
                onInput={(e) =>
                  e.target.value == "" ? setTopMail(false) : setTopMail(true)
                }
                id="mail"
                type="text"
                placeholder="userEmail"
                className="z-30 w-full border-b p-4 focus:outline-none"
              />
            </div>
            <div className="pass my-2">
              <label
                htmlFor="pass"
                className={`block text-mainColor relative duration-500 ${
                  topPass ? "top-0 z-10" : "top-10 -z-10"
                } `}
              >
                userPassword:
              </label>
              <input
                onInput={(e) =>
                  e.target.value == "" ? setTopPass(false) : setTopPass(true)
                }
                id="pass"
                type="text"
                placeholder="userPassword"
                className="z-30 w-full border-b p-4 focus:outline-none"
              />
            </div>
            <button className="bg-mainColor text-white py-2 px-4 rounded-lg mt-4">send Message</button>
          </div>
        </div>
      </div>
    </>
  );
}
