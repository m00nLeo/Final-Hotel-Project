import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineMenuFold } from "react-icons/ai";
import { SiAerlingus } from "react-icons/si";
import { Link } from "react-router-dom";

const NavMenu = ({ className }) => {
  return (
    <>
      <li>
        <Link to="" className={className}>
          Home
        </Link>
      </li>
      <li>
        <Link to="" className={className}>
          Rooms & Suites
        </Link>
      </li>
      <li>
        <Link to="" className={className}>
          Contact
        </Link>
      </li>
      <li className="lg:bg-yellow-600 rounded lg:p-2">
        <Link to="" className={`${className} flex gap-2 items-center`}>
          <span className="hidden lg:flex">
            <SiAerlingus />
          </span>{" "}
          Booking
        </Link>
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
      className={`mx-auto p-4 lg:px-28 fixed text-white z-20 w-full ${
        colorChange ? "bg-white lg:text-black" : ""
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
            <input
              id="drawer"
              type="checkbox"
              className={`${menu ? "drawer-toggle" : "hidden"}`}
              // hidden={true}
            />
            <div className="drawer-content flex flex-col items-end justify-center">
              <label
                htmlFor="drawer"
                className="bg-amber-300 p-4 rounded-xl cursor-pointer hover:bg-amber-400/75"
                onClick={handleChange}
              >
                <div className="" hidden={!menu}>
                  <AiOutlineMenuFold />
                </div>
                <div className="" hidden={menu}>
                  <AiOutlineMenu />
                </div>
              </label>
            </div>
            <div className={`drawer-side pt-9 -translate-x-10 absolute w-screen h-screen opacity-90 ${menu ? "" : "hidden"}`}>
              <label htmlFor="drawer" className="drawer-overlay"></label>
              <ul className="menu py-4 px-10 w-96 bg-black/75 text-2xl">
                <NavMenu className="hover:bg-gray-800 hover:bg-opacity-75" />
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

