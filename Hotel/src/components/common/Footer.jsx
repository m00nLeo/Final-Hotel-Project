import React from "react";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { SiZalo } from "react-icons/si";
import { AiOutlineGoogle, AiOutlineArrowRight } from "react-icons/ai";
import { BiCopyright } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="bg-black ">
      <div className="mx-auto max-w-screen-xl pl-4 pt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-between mb-8 ">
          <div className="">
            <img
              className="w-full h-16 mb-4"
              src="https://360.agencewebcom.com/web/uploads/api/site-413/42a9f5a2934936263e0ccf2d2799f5d2124cc206.svg"
              alt=""
            />

            <p className="mb-4 text-md text-gray-500">
              The hotel has a new look and feel. Spacious lobby and warm
              welcome. Staff were knowledgeable. It is near Ben Thanh Market and
              other attractions which is valued for money.
            </p>
            <div className="flex items-center text-white gap-3 ">
              <a href="" className="text-base hover:text-gray-400 flex items-center gap-2">
                Read More
                <span>
                  <AiOutlineArrowRight />
                </span>
              </a>
            </div>
          </div>
          <div>
            <h1 className="mt-4 text-white  mb-6 text-3xl">Contact Info</h1>
            <ul>
              <li className="items-center mb-4 text-gray-500 flex gap-2">
                <span className="">
                  <CiLocationOn />
                </span>
                <p>202 Hoang Van Thu, Ward 9, District 1, Ho Chi Minh City.</p>
              </li>
              <li className="items-center mb-4 text-md text-gray-500 flex gap-2 ">
                <CiPhone />
                +81(0) 968150014
              </li>
              <li className=" items-center gap-3 text-white mb-4 flex">
                <MdOutlineMail />
                <a className="hover:text-gray-400" href="">
                  {" "}
                  Booking@example.com
                </a>
              </li>
              <li className=" items-center gap-3 mt-3 mb-3 text-white flex">
                <TbWorld />
                <a className="hover:text-gray-400" href="">
                  www.bilurygalleryhotel.com
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-white mt-4 mb-3 text-3xl ">Quick Links</h1>
            <div className="flex gap-10 text-white">
              <ul className="mb-3 ">
                <li className="mb-3 mt-3 ">
                  <a className="hover:text-gray-400" href="">
                    Bilury's Story
                  </a>
                </li>
                <li className="mb-3 ">
                  <a className="hover:text-gray-400" href="">
                    Team
                  </a>
                </li>
                <li className="mb-3 ">
                  <a className="hover:text-gray-400" href="">
                    News
                  </a>
                </li>
                <li className="mb-3 ">
                  <a className="hover:text-gray-400" href="">
                    Gallery
                  </a>
                </li>
                <li className="mb-3 ">
                  <a className="hover:text-gray-400" href="">
                    Contact Us
                  </a>
                </li>
              </ul>
              <ul>
                <li className="mb-3 mt-3  ">
                  <a className="hover:text-gray-400" href="">
                    Rooms & Suites
                  </a>
                </li>
                <li className="mb-3 ">
                  <a className="hover:text-gray-400" href="">
                    Spa
                  </a>
                </li>
                <li className="mb-3 ">
                  <a className="hover:text-gray-400" href="">
                    Restaurant
                  </a>
                </li>
                <li className="mb-3 ">
                  <a className="hover:text-gray-400" href="">
                    Tours
                  </a>
                </li>
                <li className="mb-3 ">
                  <a className="hover:text-gray-400" href="">
                    Extra Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:flex gap-4 flex-col">
            <div className="mb-4">
              <h1 className=" text-white mb-4 mt-4 text-3xl">Subscribe</h1>
              <div className="flex ">
                <input
                  className="outline-none py-2 px-4 w-40"
                  text="input"
                  placeholder="Your Email"
                />
                <button
                  className="bg-[#B18C57]  py-2 px-4 text-white"
                  value="submit"
                >
                  Submit
                </button>
              </div>
            </div>
            <div className=" text-xl text-gray-500 ">
              <h1>Connect social</h1>
              <div className="flex mt-4 items-center font-semibold gap-4  text-base">
                <a className="hover:text-gray-100" href="">
                  {" "}
                  <FaFacebookF />
                </a>
                <a className="hover:text-gray-100" href="">
                  <BsTwitter />
                </a>
                <a className="hover:text-gray-100" href="">
                  {" "}
                  <SiZalo />
                </a>
                <a className="hover:text-gray-100" href="">
                  <AiOutlineGoogle />
                </a>
                <a className="hover:text-gray-100" href="">
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex py-8 flex-col lg:flex-row justify-between p-3 text-gray-300 text-between ">
          <p className=" flex items-center text-base text-gray-400">
            <span>
              <BiCopyright />
            </span>
            2023 Elysia Holtel. All right reserved.
          </p>
          <div className="">
            <ul className="flex flex-row gap-10 text-white">
              <li>
                <a className="hover:text-gray-400" href="">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="">
                  Terms of Use{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
