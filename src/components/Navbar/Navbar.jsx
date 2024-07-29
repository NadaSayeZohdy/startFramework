import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>
      <div  className={`bg-navColor z-50 text-white fixed w-full top-0 left-0 duration-500 ${scrolled?"py-3":"py-6"}`}>
        <div className="container flex justify-between uppercase items-center font-bold flex-wrap">
          <h1 className="sm:text-3xl text-2xl">
            <Link to="">Start FrameWork</Link>
          </h1>
          <div
            onClick={() => {
              setShow(!show);
            }}
            className="icon px-3 py-1 border rounded-md cursor-pointer md:hidden "
          >
            <i className="fa-solid fa-bars text-2xl"></i>
          </div>
          <ul
            id="links"
            className={`list-none text-lg  md:flex flex-col basis-full md:flex-row md:basis-auto ${
              show ? "flex" : "hidden"
            }`}
          >
            <li className="md:p-2 my-4 md:my-0">
              <NavLink className="p-2" to="about">
                About
              </NavLink>
            </li>
            <li className="md:p-2 my-4 md:my-0">
              <NavLink className="p-2" to="portfolio">
                Portfolio
              </NavLink>
            </li>
            <li className="md:p-2 my-4 md:my-0">
              <NavLink className="p-2" to="contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
