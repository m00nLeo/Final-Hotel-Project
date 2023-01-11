import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai"
import { BiWorld } from "react-icons/bi";

const Email = () => {
  return (
    <div className="mx-auto max-h-screen-xl">
      <div className=" ">
        <div className=" bg-[#FEF4E8]">
          <div className="grid lg:grid-cols-2  px-12 py-12 ">
            <div>
              <div>
                <span className="flex items-center gap-6">
                  <CiLocationOn className="text-[#987648]" />
                  <h className="text-2xl text-[#343a40]  ">Address</h>
                </span>

                <p className="text-gray-600 pl-9 mb-4">
                  202 Hoang Van Thu, Ward 9, District 1, Ho Chi Minh City.
                </p>
              </div>

              <div>
                <span className="flex items-center  gap-6">
                  <BsTelephone className="text-[#987648]" />
                  <h2 className="text-2xl  text-[#343a40]">Phone</h2>
                </span>

                <p className="text-gray-600 pl-9  mb-4">+81 (0) 968150014</p>
              </div>

              <div>
                <span className="flex items-center  gap-6">
                  <AiOutlineMail className="text-[#987648]" />
                  <h2 className="text-2xl  text-[#343a40]">Email</h2>
                </span>

                <p className="text-gray-600 mb-3 pl-9">
                  customer.helpdesk@elysia.com
                </p>
              </div>

              <div>
                <span className="flex items-center  gap-6">
                  <BiWorld className="text-[#987648]" />
                  <h2 className="text-2xl  text-[#343a40]">Website</h2>
                </span>

                <p className="text-gray-600 mb-4 pl-9">
                  www.theealysiahotel.com
                </p>
              </div>
            </div>

            <div className="row " >
              <p className="font-thin mb-4">
                The fields marked with * are required.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <input 
                  className=" p-2 font-thin border-2 h-12 mb-4 text:ml-2   "
                  type="text "
                  placeholder="First Name *" 
                />
                <input
                  className=" p-2  font-thin border-2 h-12 mb-4 text:ml-2   "
                  type="text"
                  placeholder="Last Name *" 
                />
                <input
                  className=" p-2  font-thin border-2 h-12 mb-4 text:ml-2  "
                  type="text"
                  placeholder="Email *" 
                />
                <input
                  className="p-2  font-thin border-2 h-12 mb-4 text:ml-2  "
                  type="text"
                  placeholder=" Phone *" 
                />
              </div>
              <div className=" grid grid-cols-1">
                <input
                  className="p-2  font-thin border-2 h-12 mb-4 text:ml-2  "
                  type="text"
                  placeholder="Subject *"
                />
                <input
                  className=" p-2  font-thin border-2 h-40 mb-4 text:ml-2  "
                  type="text"
                  placeholder="Message *"
                />
              </div>
              <div className=" flex  mb-4  justify-between">
                <div className="flex gap-3 items-center  ">
                  <input className="p-2" type="checkbox" />
                  <label
                    htmlFor="invalidCheck"
                    className="flex gap-2 font-thin"
                  >
                    I agree to
                    <a
                      className="text-[#b18c57] font-thin  hover:text-gray-500 "
                      href=""
                    >
                      terms and policy
                    </a>
                  </label>
                </div>
                <button className="bg-[#987648] hover:bg-slate-500 text-white text-2xl w-48 h-12 ">
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
        className="py-12 pl-12"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1378200353793!2d106.66671311376858!3d10.800754761700095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752930e65c14bf%3A0x6fb8f1972d050a64!2zMjAyIEhvw6BuZyBWxINuIFRo4bulLCBQaMaw4budbmcgOSwgVMOibiBCw6xuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1673338226862!5m2!1svi!2s"
          width="1200"
          height="600"
         
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Email;
