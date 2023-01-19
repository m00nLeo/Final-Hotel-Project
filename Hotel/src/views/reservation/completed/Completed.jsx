import React from "react";
import SubHero from "../../contact/SubHero";
import { FaHeart, FaMale, FaRegHeart } from "react-icons/fa";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { GoCalendar } from "react-icons/go";
const Completed = () => {
  return (
    <div>
      {/* Hero */}
      <SubHero title="Reservation" path="Reservation" />

      {/* Content */}
      <div className=" md:mx-20 font-serif p-14 mt-10">
        <div className=" lg:grid lg:grid-cols-12 md:grid-cols-12">
          <div className=" mx-auto w-full lg:col-span-8 lg:col-start-3 md:col-span-10">
            {/* thẻ customer infor */}
            <div className="  border-solid border border-gray-200  px-8 bg-[#f8f9fA]">
              <h3 className="py-5 text-2xl font-medium tracking-wide">
                Rooms & Services
              </h3>
            </div>
            {/* input */}
            <div className="px-8 border-solid border border-gray-200 pt-5 font-sans">
              <div className="border-b-2 mb-3 pb-3">
                <div>
                  <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 font-serif text-sm md:mb-2">
                    {/* check in */}
                    <div className="flex gap-1 mb-1">
                      <GoCalendar className="w-5 h-5" />
                      <span className="text-[#495057] font-thin ">
                        Check-In Date:
                      </span>
                      <strong className="font-sans ">19 Feb 2023</strong>
                    </div>
                    {/* check out */}
                    <div className="flex gap-1 mb-1">
                      <GoCalendar className="w-5 h-5" />
                      Check-Out Date:
                      <strong className="font-sans ">20 Feb 2023</strong>
                    </div>
                    <div>
                      <p className="font-sans mb-1">
                        (Duration of stay:{" "}
                        <strong className="font-sans">1 Night</strong> )
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div>{<FaMale className="w-5 h-5" />}</div>
                  <div className="font-sans ">
                    <span>
                      Adults: <strong>1</strong>
                    </span>
                    <span>-</span>
                    <span>
                      Children: <strong>0</strong>
                    </span>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="border-b-2  mb-3 pb-3">
                <div className="mb-2">
                  <span className=" text-lg font-medium font-serif ">
                    Executive Deluxe Double or Twin Room
                  </span>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-[#495057] font-light  ">
                      Quantity:{" "}
                      <strong className="font-semibold">1 Room</strong>
                    </span>
                    <span className="text-[#b18c57]">
                      <small>US$</small> 69.00
                    </span>
                  </div>
                  <div className="flex justify-between text-sm ">
                    <span className="text-[#495057] font-light  ">
                      Extra beds:
                      <strong className="font-semibold">1 Bed</strong>
                    </span>
                    <span className="text-[#b18c57]">
                      <small>US$</small> 10.00
                    </span>
                  </div>
                </div>
                <div>
                  <span className=" text-lg font-medium font-serif">
                    Imperial Suite with Balcony City View
                  </span>
                  <div className="flex justify-between text-sm ">
                    <span className="text-[#495057] font-light  ">
                      Quantity:
                      <strong className="font-semibold">1 Room</strong>
                    </span>
                    <span className="text-[#b18c57] ">
                      <small>US$</small> 69.00
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-b-2  mb-3 pb-3">
                <div className=" flex text-lg font-medium font-serif  justify-between">
                  <span>Airport Transfer Service</span>
                  <span className="text-[#b18c57] text-lg">
                    <small>US$</small> 69.00
                  </span>
                </div>
              </div>
              <div className="border-b-2  mb-3 pb-3">
                <div className=" flex text-lg font-medium font-serif justify-between">
                  <span>Tax & Service Change</span>
                  <span className="text-[#b18c57] text-lg">
                    <small>US$</small> 14.80
                  </span>
                </div>
              </div>

              <div className=" flex text-lg font-medium font-serif justify-between">
                <span>Total Amount:</span>
                <span className="text-[#b18c57] text-xl">
                  <small>US$</small> 162.80
                </span>
              </div>
            </div>

            <div className="mt-5">
              <div className="  border-solid border border-gray-200  px-8 bg-[#f8f9fA]">
                <h3 className="py-5 text-2xl tracking-wide ">
                  Customer Information
                </h3>
              </div>
              <div
                className="px-8 border-solid border border-gray-200
              pt-5 font-serif mb-5 text-xs"
              >
                <p className="mb-2 text-base">
                  Full Name: <strong>Mr. Jonh Deep</strong>
                </p>
                <p className="mb-2 text-base">
                  Email: <strong>booking@example.com</strong>
                </p>
                <p className="mb-2 text-base">
                  Phone: <strong>+33 (0) 1 89 78 67 56</strong>
                </p>
                <p className="mb-2 text-base">
                  Address:{" "}
                  <strong>
                    No 2201 rue des Petites Ecuries, 75010 Paris, France
                  </strong>
                </p>
                <p className="mb-2 text-base">
                  Country: <strong>France</strong>
                </p>
                <p className="mb-2 text-base">
                  Your Requests:{" "}
                  <strong>
                    Lorem ipsum dolor sit amet, nam lorem etiam ad, ex nusquam
                    luptatum vel, te eum numquam luptatum. Id sint ullum
                    offendit eam, duo iisque quaerendum deterruisset ne.
                  </strong>
                </p>
              </div>
            </div>

            {/*  */}
            <div className="mt-5">
              <div className="  border-solid border border-gray-200  px-8 bg-[#f8f9fA]">
                <h3 className="py-5 text-xl font-light tracking-wide">
                  Payment Method
                </h3>
              </div>
              <div
                className="px-8 border-solid border border-gray-200
              pt-5 font-serif mb-8"
              >
                <div class="flex items-center mb-4">
                  <p> Pay With Cash</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <a
                    class="flex gap-2 items-center justify-center bg-[#aab0bc] text-white w-40 h-10 text-base"
                    href="/reservation"
                  >
                    <AiOutlineArrowLeft />
                    Back Step
                  </a>
                </div>
                <div>
                  <a
                    class="flex gap-2 items-center justify-center bg-[#b18c57] text-white w-40 h-10 text-base "
                    href="/reservation/information/completed"
                  >
                    Confirm & Finish
                    <AiOutlineArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Completed;
