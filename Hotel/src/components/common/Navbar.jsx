import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineMenuFold } from "react-icons/ai";
import { SiAerlingus } from "react-icons/si";

const NavMenu = () => {
  return (
    <>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Rooms & Suites</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li className="lg:bg-yellow-600 rounded lg:p-2">
        <a href="#" className="flex gap-2 items-center">
          <span className="hidden lg:flex">
            <SiAerlingus />
          </span>{" "}
          Booking
        </a>
      </li>
    </>
  );
};

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div
      className={`mx-auto p-4 lg:px-28 fixed text-black dark:text-white z-20 w-full ${
        colorChange ? "bg-white lg:dark:text-black" : ""
      }`}
    >
      <div className=" w-full p-4 bg-inherit ">
        <div className=" flex justify-between items-center ">
          {/* Logo */}
          <div className="">
            <img
              src="https://360.agencewebcom.com/web/uploads/api/site-413/42a9f5a2934936263e0ccf2d2799f5d2124cc206.svg"
              alt=""
              className="w-32 "
            />
          </div>

          {/* Menu Drawer*/}
          <div className="fixed w-11/12 lg:hidden">
            <input id="drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-end justify-center">
              <label
                htmlFor="drawer"
                className="border bg-amber-200 p-4 rounded-xl cursor-pointer hover:bg-amber-300"
                onClick={handleChange}
              >
                <div className="" hidden={menu}>
                  <AiOutlineMenu />
                </div>
                <div className="" hidden={!menu}>
                  <AiOutlineMenuFold />
                </div>
              </label>
            </div>
            <div className="drawer-side pt-9 -translate-x-10 absolute w-screen h-screen opacity-90">
              <label htmlFor="drawer" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 bg-black/75 text-2xl">
                <NavMenu />
              </ul>
            </div>
          </div>

          {/* Menu lg-screen */}
          <div className="hidden list-none gap-10 text-xl lg:flex lg:items-center">
            <NavMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
