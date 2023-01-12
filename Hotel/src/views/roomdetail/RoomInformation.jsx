import React, { useState } from "react";
import { BiBed } from "react-icons/bi";
import {
  FaArrowsAlt,
  FaBuilding,
  FaBath,
  FaPeopleArrows,
  FaSmokingBan,
  FaHamburger,
  FaCheck,
  FaCalendarAlt,
} from "react-icons/fa";

const AmenityServices = () => {
  return (
    <div className="">
      {/* Amenity Services */}
      <div className="pb-4">
        <h2 className="font-h2 text-[18px] pt-4 pb-2 text-primary">
          Clothing and laundry
        </h2>
        {/* List */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          <div className=" gap-2 items-center">
            <FaCheck className=" inline-block mr-3 text-light " />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Wash Clothes
            </span>
          </div>

          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Shoeshine kit
            </span>
          </div>

          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Ironing facilities
            </span>
          </div>

          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Sewing kit
            </span>
          </div>
          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Closet
            </span>
          </div>
        </div>
      </div>

      <div className="pb-4">
        <h2 className="font-h2 text-[18px] pt-4 pb-2 text-primary">
          Safety and security features
        </h2>
        {/* List */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          <div className=" gap-2 items-center">
            <FaCheck className=" inline-block mr-3 text-light " />
            <span className="font-subHeading text-primary font-extralight leading-3">
              24hour Security
            </span>
          </div>

          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Smoke Detector
            </span>
          </div>

          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Locker
            </span>
          </div>

          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              First aid kit
            </span>
          </div>
          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Fire extinguisher
            </span>
          </div>
        </div>
      </div>

      <div className="pb-4">
        <h2 className="font-h2 text-[18px] pt-4 pb-2 text-primary">Comforts</h2>
        {/* List */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          <div className=" gap-2 items-center">
            <FaCheck className=" inline-block mr-3 text-light " />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Daily Housekeeping
            </span>
          </div>

          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Air Purifier
            </span>
          </div>

          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Umbrella
            </span>
          </div>

          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Slippers
            </span>
          </div>
          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Wake-up service
            </span>
          </div>
          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Mosquito net
            </span>
          </div>
          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Humidifier
            </span>
          </div>
          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Fan
            </span>
          </div>
          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Linens
            </span>
          </div>
          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Slippers
            </span>
          </div>
          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Alarm clock
            </span>
          </div>
          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Air conditioning
            </span>
          </div>
        </div>
      </div>

      <div className="pb-4">
        <h2 className="font-h2 text-[18px] pt-4 pb-2 text-primary">
          Layout and furnishings
        </h2>
        {/* List */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          <div className=" gap-2 items-center">
            <FaCheck className=" inline-block mr-3 text-light " />
            <span className="font-subHeading text-primary font-extralight leading-3">
              City view
            </span>
          </div>

          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Windows
            </span>
          </div>

          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Luggage Storage
            </span>
          </div>

          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Balcony View
            </span>
          </div>
          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Wooden/parqueted flooring
            </span>
          </div>
          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              High floor
            </span>
          </div>
          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Desk
            </span>
          </div>
          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Carpeting
            </span>
          </div>
        </div>
      </div>

      <div className="pb-4">
        <h2 className="font-h2 text-[18px] pt-4 pb-2 text-primary">
          Bathroom and toiletries
        </h2>
        {/* List */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          <div className=" gap-2 items-center">
            <FaCheck className=" inline-block mr-3 text-light " />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Shower{" "}
            </span>
          </div>

          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Slippers For Kids
            </span>
          </div>

          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Cosmetics
            </span>
          </div>

          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Shower and bathtub
            </span>
          </div>
          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Toiletries{" "}
            </span>
          </div>
          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Towels{" "}
            </span>
          </div>
          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Mirror
            </span>
          </div>
          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Cleaning products
            </span>
          </div>
          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Hair dryer
            </span>
          </div>
        </div>
      </div>

      <div className="pb-4">
        <h2 className="font-h2 text-[18px] pt-4 pb-2 text-primary">
          Entertainment
        </h2>
        {/* List */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          <div className=" gap-2 items-center">
            <FaCheck className=" inline-block mr-3 text-light " />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Free Wi-Fi in all rooms!
            </span>
          </div>

          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Satellite/cable channels
            </span>
          </div>

          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Telephone
            </span>
          </div>
        </div>
      </div>

      <div className="pb-4">
        <h2 className="font-h2 text-[18px] pt-4 pb-2 text-primary">
          Dining, drinking, and snacking
        </h2>
        {/* List */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          <div className=" gap-2 items-center">
            <FaCheck className=" inline-block mr-3 text-light " />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Electric Hot Water Pot
            </span>
          </div>

          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Microwave
            </span>
          </div>

          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Kitchenette
            </span>
          </div>

          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Free instant coffee
            </span>
          </div>
          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Free welcome drink
            </span>
          </div>
          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Refrigerator{" "}
            </span>
          </div>
          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Coffee/tea maker
            </span>
          </div>
          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Free bottled water
            </span>
          </div>
          <div className=" gap-3 items-center">
            <FaCheck className=" inline-block mr-3 text-light" />
            <span className="font-subHeading text-primary font-extralight leading-3">
              Mini bar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const RoomPolicies = () => {
  return (
    <div>
      {/* Room Policy */}
      <div className="py-6 ">
        <p className=" text-primary text-lg pb-3 ">Check-in/out Policy:</p>
        <ul className=" list-square px-7 font-extralight pb-3">
          <li>Check in: from 14:00;</li>
          <li>Check out: no later than 12:00;</li>
          <li>Early check-in or late check out will be upon availability.</li>
        </ul>

        <p className=" text-primary text-lg pb-3 ">
          Cancellation/Amendment Policy:
        </p>
        <ul className=" list-square px-7 font-extralight pb-3">
          <li>
            If cancellation/amendment is made before 7 days prior to your
            arrival date, no fee will be charged.
          </li>
          <li>
            If cancellation/amendment is made in 7 days of your arrival date or
            no show, 100% room rate of first night and tax will be charged
          </li>
        </ul>

        <p className=" text-primary text-lg pb-3 ">Payment method:</p>
        <ul className=" list-square px-7 font-extralight pb-3">
          <li>By cash</li>
          <li>
            By Visa Card, Master Card, American Express plus 3% bank fee is
            applied.
          </li>
        </ul>

        <p className=" text-primary text-lg pb-3 ">
          Children and Extra Adult Policy:
        </p>
        <ul className=" list-square px-7 font-extralight pb-3">
          <li>
            Child under 3 years old: Free of charge and share bed with parents.
          </li>
          <li>
            Child from 5 years old and over: surcharge US$37/person/night for
            additional child or an extra bed.
          </li>
          <li>
            Adult: surcharge US$37/person/night for an additional person or an
            extra bed.
          </li>
        </ul>
      </div>
    </div>
  );
};

const RoomInformation = () => {
  const today = new Date();
  const arrday = today.toISOString().split("T")[0];
  const numberOfDaysToAdd = 1;
  const date = today.setDate(today.getDate() + numberOfDaysToAdd);
  const leaveday = new Date(date).toISOString().split("T")[0]; // yyyy-mm-dd

  const [active, setActive] = useState("1");

  const handleClick = (e) => {
    setActive(e.target.id);
  };
  return (
    <div>
      {/* Container */}
      <div className=" max-w-screen-xl mx-auto p-4 md:p-8 pb-3">
        {/* Layout */}
        <div>
          {/* Content */}
          <div className="md:grid md:grid-cols-4 md:gap-6 md:mb-7">
            {/* Intro */}
            <div className="md:grid md:col-span-3">
              <div>
                <p className=" font-subHeading text-primary font-extralight tracking-wide text-justify py-6 ">
                  Enjoy maximum satisfaction and comfort with the most
                  personalised service and the most exclusive products in
                  privileged areas of the hotel.
                  <br />
                  <br />
                  Each room is designed to help you experience total wellbeing
                  from high thread-count organic cotton sheets to our vitamin
                  C-rich "Happy shower".
                </p>
              </div>

              <hr />

              {/* Room Info */}
              <div className="pb-4">
                <h2 className="font-h2 text-2xl py-6 text-primary">
                  Room Information
                </h2>
                {/* List info */}
                <div className="md:grid md:grid-cols-2">
                  <div className="flex gap-2 items-center pb-2">
                    <BiBed className=" text-xl " />
                    <p className="font-subHeading text-primary font-extralight tracking-wide">
                      1 King Bed / 2 Single Beds
                    </p>
                  </div>
                  <div className="pb-2 flex gap-2 items-center font-subHeading text-primary font-extralight tracking-wide">
                    <FaArrowsAlt className="text-primary" />
                    <p className="font-subHeading text-primary font-extralight tracking-wide">
                      Room size 30 m² / 323 ft²
                    </p>
                  </div>
                  <div className="pb-2 flex gap-2 items-center font-subHeading text-primary font-extralight tracking-wide">
                    <FaBuilding className=" text-lg " />
                    <p className="font-subHeading text-primary font-extralight tracking-wide">
                      With view street
                    </p>
                  </div>
                  <div className="pb-2 flex gap-2 items-center font-subHeading text-primary font-extralight tracking-wide">
                    <FaBath className=" text-lg" />
                    <p>Shower and Bathtub</p>
                  </div>
                  <div className="pb-2 flex gap-2 items-center font-subHeading text-primary font-extralight tracking-wide">
                    <FaPeopleArrows className=" text-lg " />
                    <p className="font-subHeading font-extralight tracking-wide">
                      2 Adults - 1 Children
                    </p>
                  </div>
                  <div className="pb-2 flex gap-2 items-center font-subHeading text-primary font-extralight tracking-wide">
                    <FaSmokingBan className=" text-lg" />
                    <p className="font-subHeading text-primary font-extralight tracking-wide">
                      No Smoking
                    </p>
                  </div>
                  <div className="pb-2 flex gap-2 items-center font-subHeading text-primary font-extralight tracking-wide">
                    <FaHamburger className=" text-lg" />
                    <p className="font-subHeading text-primary font-extralight tracking-wide">
                      Breakfast Included
                    </p>
                  </div>
                  <div className="pb-2 flex gap-2 items-center font-subHeading text-primary font-extralight tracking-wide">
                    <BiBed className=" text-xl " />
                    <p className="font-subHeading text-primary font-extralight tracking-wide">
                      ExtraBed (US$10.00)
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              {/* Offers */}
              <div className="pb-4">
                <h2 className="font-h2 text-2xl py-6 text-primary">
                  Available Offers
                </h2>
                {/* Offer List */}
                <div className="lg:grid lg:grid-cols-2">
                  <div className=" gap-3 items-center leading-8">
                    <FaCheck className=" inline-block mr-3 text-light" />
                    <span className="font-subHeading text-primary font-extralight tracking-wide">
                      Welcome drink, fresh fruit & cold towels
                    </span>
                  </div>

                  <div className=" gap-3 items-center leading-8">
                    <FaCheck className=" inline-block mr-3 text-light" />
                    <span className="font-subHeading text-primary font-extralight tracking-wide">
                      Daily complimentary tea, coffee, water
                    </span>
                  </div>

                  <div className=" gap-3 items-center leading-8">
                    <FaCheck className=" inline-block mr-3 text-light" />
                    <span className="font-subHeading text-primary font-extralight tracking-wide">
                      Free wifi high speed
                    </span>
                  </div>
                  <div className=" gap-3 items-center leading-8">
                    <FaCheck className=" inline-block mr-3 text-light" />
                    <span className="font-subHeading text-primary font-extralight tracking-wide">
                      Free late check out or early check in.
                    </span>
                  </div>

                  <div className=" gap-3 items-center leading-8">
                    <FaCheck className=" inline-block mr-3 text-light" />
                    <span className="font-subHeading text-primary font-extralight tracking-wide">
                      10% discount for tour service
                    </span>
                  </div>

                  <div className=" gap-3 items-center leading-8">
                    <FaCheck className=" inline-block mr-3 text-light" />
                    <span className="font-subHeading text-primary font-extralight tracking-wide">
                      Breakfast between the trip
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Room Booking Form */}
            <div className=" bg-beige my-6 p-8 justify-center">
              <form className="w-full max-w-lg  ">
                <div className="">
                  <h3 className="font-subHeading text-primary font-extralight tracking-wide">
                    Rates Start From
                  </h3>
                  <p>
                    <span className=" text-xl font-bold text-light tracking-wide">
                      $119.00
                    </span>
                    / Night
                  </p>
                </div>

                <div className="flex flex-wrap  ">
                  <div className="w-full pt-4 pb-3 ">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      Check-in Date
                    </label>

                    <input
                      className=" inline-block box-border w-full bg-white text-primary font-extralight border border-gray-200 rounded py-3 px-4 pb-2 leading-tight focus:outline-none focus:bg-gray-200"
                      id="checkInDate"
                      type="date"
                      name="checkInDate"
                      placeholder="Choose a day"
                      defaultValue={arrday}
                    />
                  </div>

                  <div className="w-full  mb-6 ">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      Check-out Date
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-primary font-extralight border border-gray-200 rounded py-3 px-4 pb-2 leading-tight focus:outline-none focus:bg-gray-200"
                      id="checkOutDate"
                      type="date"
                      name="checkOutDate"
                      placeholder="Choose a day"
                      defaultValue={leaveday}
                    />
                  </div>
                </div>

                {/* Options */}
                <div>
                  {/* Adult */}
                  <div className="inline-block relative w-full pb-3">
                    <select
                      defaultValue="Adults"
                      className=" block appearance-none w-full bg-white text-primary font-extralight border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 pr-8 rounded shadow focus:shadow-outline"
                    >
                      <option>Adults</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="inline-block relative w-full pb-5">
                    <select
                      defaultValue="Children"
                      className=" block appearance-none w-full bg-white text-primary font-extralight border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 pr-8 rounded shadow focus:shadow-outline"
                    >
                      <option>Children</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <div className="">
                  <button className=" w-full bg-light mx-auto py-3 mb-3 justify-center border-t-orange-100 rounded-sm">
                    <div className="flex items-center gap-2 font-extralight text-white justify-center">
                      <FaCalendarAlt className="" />
                      Book this room
                    </div>
                  </button>

                  <div className="px-4 py-2">
                    <ul className=" text-light font-extralight list-disc tracking-wide">
                      <li>Special Offers</li>
                      <li>Best Rate Guarantee</li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Button - Policies & Amenity Services */}
          <div className="">
            <div className="md:flex md:gap-2 border-b-gray-100  border-b-[1px]">
              <button
                key={1}
                className={`md:w-1/4  focus:text-light md:focus:border-x-2 md:focus:border-t-2 md:focus:border-gray-100  focus:bg-white  bg-slate-100 text-primary  hover:text-slate-500/50 w-full font-subHeading font-semibold tracking-wider${
                  active === "1" ? "active" : undefined
                }`}
                id={"1"}
                onClick={handleClick}
              >
                Room Policies
              </button>

              <button
                key={2}
                className={`md:w-1/4 py-4 md:focus:border-x-2 md:focus:border-t-2 md:focus:border-gray-100  bg-slate-100 text-primary hover:text-slate-500/50 w-full font-subHeading font-semibold tracking-wider focus:text-light focus:bg-white ${
                  active === "2" ? "active" : undefined
                }`}
                id={"2"}
                onClick={handleClick}
              >
                Amenity Services
              </button>
            </div>
          </div>

          {/* Content Details - Policies & Amenity Services*/}
          <div className="mb-8">
            {active === "1" ? <RoomPolicies /> : <AmenityServices />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomInformation;
