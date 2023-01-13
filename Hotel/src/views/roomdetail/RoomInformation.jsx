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
import Container from "../../components/common/Container";

const AmenityServices = () => {
  const Clothing = [
    "Wash Clothes",
    "Shoeshine kit",
    "Ironing facilities",
    "Sewing kit",
    "Closet",
  ];
  const Safety = [
    "24hour Security",
    "Smoke Detector",
    "Locker",
    "First aid kit",
    "Fire extinguisher",
  ];
  const Comforts = [
    "Daily Housekeeping",
    "Air Purifier",
    "Umbrella",
    "Slippers",
    "Wake-up service",
    "Mosquito net",
    "Humidifier",
    "Fan",
    "Linens",
    "Slippers",
    "Alarm clock",
    "Air conditioning",
  ];
  const Layout = [
    "City view",
    "Windows",
    "Luggage Storage",
    "Balcony View",
    "Wooden/parqueted flooring",
    "High floor",
    "Desk",
    "Carpeting",
  ];
  const Bathroom = [
    "Shower",
    "Slippers For Kids",
    "Cosmetics",
    "Shower and bathtub",
    "Toiletries",
    "Towels",
    "Mirror",
    "Hair dryer",
  ];
  const Entertainment = [
    "Free Wi-Fi in all rooms!",
    "Satellite/cable channels",
    "Telephone",
  ];
  const Dining = [
    "Electric Hot Water Pot",
    "Microwave",
    "Kitchenette",
    "Free instant coffeeew",
    "Free welcome drink",
    "Refrigerator",
    "Coffee/tea maker",
    "Free bottled water",
    "Mini bar",
  ];

  const ItemList = ({ title, amenityItem }) => {
    return (
      <div className="pb-4">
        <h2 className="font-h2 text-[18px] pt-4 pb-2 text-primary">{title} </h2>
        {/* List */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {amenityItem.map((item) => (
            <div className="gap-2 items-center" key={item}>
              <FaCheck className=" inline-block mr-3 text-light " />
              <span className="font-subHeading text-primary font-extralight leading-3">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="">
      {/* Amenity Services */}
      <ItemList title="Clothing and laundry" amenityItem={Clothing} />
      <ItemList title="Safety and security features" amenityItem={Safety} />
      <ItemList title="Comforts" amenityItem={Comforts} />
      <ItemList title="Layout and furnishings" amenityItem={Layout} />
      <ItemList title="Bathroom and toiletries" amenityItem={Bathroom} />
      <ItemList title="Entertainment" amenityItem={Entertainment} />
      <ItemList title="Dining, drinking, and snacking" amenityItem={Dining} />
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
  const RoomInfo = ({ icon, para }) => {
    return (
      <div className="pb-2 text-lg flex gap-2 items-center font-subHeading text-primary font-extralight tracking-wide">
        {icon}
        <p className="font-subHeading text-base text-primary font-extralight tracking-wide">
          {para}
        </p>
      </div>
    );
  };

  const Available = [
    "Welcome drink, fresh fruit & cold towels",
    "Daily complimentary tea, coffee, water",
    "Free wifi high speed",
    "Free late check out or early check in",
    "10% discount for tour service",
    "Breakfast between the trip",
  ];
  const OfferList = () => {
    return (
      <div className="lg:grid lg:grid-cols-2">
        {Available.map((item) => (
          <div className="gap-3 items-center leading-8" key={item}>
            <FaCheck className=" inline-block mr-3 text-light " />
            <span className="font-subHeading text-primary font-extralight tracking-wide">
              {item}
            </span>
          </div>
        ))}
      </div>
    );
  };

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
      <Container fluid={true}>
        {/* Layout */}
        <div>
          {/* Content */}
          <div className="lg:grid md:grid-cols-4 md:gap-6 md:mb-7">
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
                  <RoomInfo
                    icon={<BiBed />}
                    para="1 King Bed / 2 Single Beds"
                  />
                  <RoomInfo
                    icon={<FaArrowsAlt />}
                    para="Room size 30 m² / 323 ft²"
                  />
                  <RoomInfo icon={<FaBuilding />} para="With view street" />
                  <RoomInfo icon={<FaBath />} para="Shower and Bathtub" />
                  <RoomInfo
                    icon={<FaPeopleArrows />}
                    para="2 Adults - 1 Children"
                  />
                  <RoomInfo icon={<FaSmokingBan />} para="No Smoking" />
                  <RoomInfo icon={<FaHamburger />} para="Breakfast Included" />
                  <RoomInfo icon={<BiBed />} para="ExtraBed (US$10.00)" />
                </div>
              </div>
              <hr />
              {/* Offers */}
              <div className="pb-4">
                <h2 className="font-h2 text-2xl py-6 text-primary">
                  Available Offers
                </h2>
                {/* Offer List */}
                <OfferList />
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
            <div className="flex md:gap-2 border-b-gray-100  border-b-[1px]">
              <button
                key={1}
                className={`md:w-1/4 py-4 
                   lg:hover:text-slate-500/50  md:hover:text-slate-500/50 
                 w-full font-subHeading font-semibold tracking-wider ${
                   active === "1"
                     ? " md:border-gray-100  bg-white  text-light md:border-x-2 md:border-t-2"
                     : "bg-slate-100 text-primary "
                 }`}
                id={"1"}
                onClick={handleClick}
              >
                Room Policies
              </button>

              <button
                key={2}
                className={`md:w-1/4 py-4 
                   lg:hover:text-slate-500/50  md:hover:text-slate-500/50 
                 w-full font-subHeading font-semibold tracking-wider ${
                   active === "2"
                     ? " md:border-gray-100  bg-white  text-light md:border-x-2 md:border-t-2"
                     : "bg-slate-100 text-primary "
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
      </Container>
    </div>
  );
};

export default RoomInformation;
